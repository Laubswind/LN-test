import {
  PrismaClient,
  ChannelHistory,
  ChannelStatus,
  ChannelStatusUpdate,
} from "../generated/prisma";
import { databaseService } from "./database.service";

export class ChannelDbService {
  private prisma = databaseService.getPrisma();

  // 保存通道开启记录
  async saveChannelOpen(data: {
    channelPoint: string;
    peerPubkey: string;
    capacity: bigint;
    localBalance: bigint;
    remoteBalance: bigint;
    openHeight?: number;
  }): Promise<ChannelHistory> {
    return await this.prisma.channelHistory.create({
      data: {
        ...data,
        status: ChannelStatus.PENDING_OPEN,
        isActive: true,
      },
    });
  }

  // 更新通道状态
  async updateChannelStatus(
    channelPoint: string,
    newStatus: ChannelStatus,
    options?: {
      blockHeight?: number;
      confirmations?: number;
      notes?: string;
      localBalance?: bigint;
      remoteBalance?: bigint;
    }
  ): Promise<ChannelHistory> {
    // 获取当前通道记录
    const channel = await this.prisma.channelHistory.findUnique({
      where: { channelPoint },
    });

    if (!channel) {
      throw new Error(`通道不存在: ${channelPoint}`);
    }

    // 记录状态更新
    await this.prisma.channelStatusUpdate.create({
      data: {
        channelHistoryId: channel.id,
        previousStatus: channel.status,
        newStatus,
        blockHeight: options?.blockHeight,
        confirmations: options?.confirmations,
        notes: options?.notes,
      },
    });

    // 更新通道主记录
    return await this.prisma.channelHistory.update({
      where: { channelPoint },
      data: {
        status: newStatus,
        localBalance: options?.localBalance ?? channel.localBalance,
        remoteBalance: options?.remoteBalance ?? channel.remoteBalance,
        isActive: newStatus === ChannelStatus.ACTIVE,
        updatedAt: new Date(),
      },
    });
  }

  // 获取通道历史记录
  async getChannelHistory(channelPoint?: string): Promise<ChannelHistory[]> {
    return await this.prisma.channelHistory.findMany({
      where: channelPoint ? { channelPoint } : undefined,
      include: {
        statusUpdates: {
          orderBy: { createdAt: "desc" },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  // 获取活跃通道
  async getActiveChannels(): Promise<ChannelHistory[]> {
    return await this.prisma.channelHistory.findMany({
      where: {
        status: ChannelStatus.ACTIVE,
        isActive: true,
      },
      orderBy: { createdAt: "desc" },
    });
  }

  // 获取待处理通道
  async getPendingChannels(): Promise<ChannelHistory[]> {
    return await this.prisma.channelHistory.findMany({
      where: {
        status: {
          in: [ChannelStatus.PENDING_OPEN, ChannelStatus.PENDING_CLOSE],
        },
        isActive: true,
      },
      orderBy: { createdAt: "desc" },
    });
  }

  // 关闭通道记录
  async saveChannelClose(
    channelPoint: string,
    closeHeight?: number,
    force: boolean = false
  ): Promise<ChannelHistory> {
    const status = force
      ? ChannelStatus.FORCE_CLOSE
      : ChannelStatus.PENDING_CLOSE;

    return await this.updateChannelStatus(channelPoint, status, {
      blockHeight: closeHeight,
      notes: force ? "强制关闭" : "正常关闭",
    });
  }

  // 获取通道统计信息
  async getChannelStats(): Promise<{
    total: number;
    active: number;
    pending: number;
    closed: number;
    totalCapacity: bigint;
    totalLocalBalance: bigint;
  }> {
    const stats = await this.prisma.channelHistory.groupBy({
      by: ["status"],
      _count: true,
      _sum: {
        capacity: true,
        localBalance: true,
      },
    });

    const result = {
      total: 0,
      active: 0,
      pending: 0,
      closed: 0,
      totalCapacity: BigInt(0),
      totalLocalBalance: BigInt(0),
    };

    stats.forEach((stat: any) => {
      result.total += stat._count;
      result.totalCapacity += stat._sum.capacity || BigInt(0);
      result.totalLocalBalance += stat._sum.localBalance || BigInt(0);

      switch (stat.status) {
        case ChannelStatus.ACTIVE:
          result.active = stat._count;
          break;
        case ChannelStatus.PENDING_OPEN:
        case ChannelStatus.PENDING_CLOSE:
          result.pending += stat._count;
          break;
        case ChannelStatus.CLOSED:
        case ChannelStatus.FORCE_CLOSE:
          result.closed += stat._count;
          break;
      }
    });

    return result;
  }
}

export const channelDbService = new ChannelDbService();
