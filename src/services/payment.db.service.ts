import {
  PaymentHistory,
  PaymentStatus,
  InvoiceHistory,
  InvoiceStatus,
  TransactionHistory,
  TransactionType,
  TransactionStatus,
} from "../generated/prisma";
import { databaseService } from "./database.service";

export class PaymentDbService {
  private prisma = databaseService.getPrisma();

  // 保存支付记录
  async savePayment(data: {
    paymentHash: string;
    paymentRequest?: string;
    destination: string;
    amount: bigint;
    fee?: bigint;
    preimage?: string;
  }): Promise<PaymentHistory> {
    return await this.prisma.paymentHistory.create({
      data: {
        ...data,
        status: PaymentStatus.PENDING,
      },
    });
  }

  // 更新支付状态
  async updatePaymentStatus(
    paymentHash: string,
    status: PaymentStatus,
    options?: {
      fee?: bigint;
      preimage?: string;
      failureReason?: string;
    }
  ): Promise<PaymentHistory> {
    return await this.prisma.paymentHistory.update({
      where: { paymentHash },
      data: {
        status,
        fee: options?.fee,
        preimage: options?.preimage,
        failureReason: options?.failureReason,
        completedAt:
          status === PaymentStatus.SUCCEEDED ? new Date() : undefined,
      },
    });
  }

  // 保存发票记录
  async saveInvoice(data: {
    paymentHash: string;
    paymentRequest: string;
    amount: bigint;
    memo?: string;
    expiresAt: Date;
  }): Promise<InvoiceHistory> {
    return await this.prisma.invoiceHistory.create({
      data: {
        ...data,
        status: InvoiceStatus.OPEN,
        isPaid: false,
      },
    });
  }

  // 更新发票状态
  async updateInvoiceStatus(
    paymentHash: string,
    status: InvoiceStatus,
    amountPaid?: bigint
  ): Promise<InvoiceHistory> {
    return await this.prisma.invoiceHistory.update({
      where: { paymentHash },
      data: {
        status,
        isPaid: status === InvoiceStatus.SETTLED,
        amountPaid,
        paidAt: status === InvoiceStatus.SETTLED ? new Date() : undefined,
      },
    });
  }

  // 保存链上交易记录
  async saveTransaction(data: {
    txid: string;
    amount: bigint;
    fee?: bigint;
    type: TransactionType;
    toAddress?: string;
    fromAddress?: string;
    memo?: string;
    blockHeight?: number;
  }): Promise<TransactionHistory> {
    return await this.prisma.transactionHistory.create({
      data: {
        ...data,
        status: TransactionStatus.PENDING,
        confirmations: 0,
      },
    });
  }

  // 更新交易确认状态
  async updateTransactionConfirmations(
    txid: string,
    confirmations: number,
    blockHeight?: number
  ): Promise<TransactionHistory> {
    const status =
      confirmations >= 6
        ? TransactionStatus.CONFIRMED
        : TransactionStatus.PENDING;

    return await this.prisma.transactionHistory.update({
      where: { txid },
      data: {
        confirmations,
        blockHeight,
        status,
        confirmedAt:
          status === TransactionStatus.CONFIRMED ? new Date() : undefined,
      },
    });
  }

  // 获取支付历史
  async getPaymentHistory(limit: number = 50): Promise<PaymentHistory[]> {
    return await this.prisma.paymentHistory.findMany({
      orderBy: { createdAt: "desc" },
      take: limit,
    });
  }

  // 获取发票历史
  async getInvoiceHistory(limit: number = 50): Promise<InvoiceHistory[]> {
    return await this.prisma.invoiceHistory.findMany({
      orderBy: { createdAt: "desc" },
      take: limit,
    });
  }

  // 获取交易历史
  async getTransactionHistory(
    limit: number = 50
  ): Promise<TransactionHistory[]> {
    return await this.prisma.transactionHistory.findMany({
      orderBy: { createdAt: "desc" },
      take: limit,
    });
  }

  // 获取支付统计
  async getPaymentStats(): Promise<{
    totalPayments: number;
    successfulPayments: number;
    failedPayments: number;
    totalAmountSent: bigint;
    totalFees: bigint;
  }> {
    const stats = await this.prisma.paymentHistory.groupBy({
      by: ["status"],
      _count: true,
      _sum: {
        amount: true,
        fee: true,
      },
    });

    const result = {
      totalPayments: 0,
      successfulPayments: 0,
      failedPayments: 0,
      totalAmountSent: BigInt(0),
      totalFees: BigInt(0),
    };

    stats.forEach((stat: any) => {
      result.totalPayments += stat._count;
      result.totalAmountSent += stat._sum.amount || BigInt(0);
      result.totalFees += stat._sum.fee || BigInt(0);

      if (stat.status === PaymentStatus.SUCCEEDED) {
        result.successfulPayments = stat._count;
      } else if (stat.status === PaymentStatus.FAILED) {
        result.failedPayments = stat._count;
      }
    });

    return result;
  }

  // 获取发票统计
  async getInvoiceStats(): Promise<{
    totalInvoices: number;
    paidInvoices: number;
    expiredInvoices: number;
    totalAmountReceived: bigint;
  }> {
    const stats = await this.prisma.invoiceHistory.groupBy({
      by: ["status"],
      _count: true,
      _sum: {
        amountPaid: true,
      },
    });

    const result = {
      totalInvoices: 0,
      paidInvoices: 0,
      expiredInvoices: 0,
      totalAmountReceived: BigInt(0),
    };

    stats.forEach((stat: any) => {
      result.totalInvoices += stat._count;
      result.totalAmountReceived += stat._sum.amountPaid || BigInt(0);

      if (stat.status === InvoiceStatus.SETTLED) {
        result.paidInvoices = stat._count;
      }
    });

    // 获取过期发票数量
    const expiredCount = await this.prisma.invoiceHistory.count({
      where: {
        status: InvoiceStatus.OPEN,
        expiresAt: {
          lt: new Date(),
        },
      },
    });

    result.expiredInvoices = expiredCount;

    return result;
  }
}

export const paymentDbService = new PaymentDbService();
