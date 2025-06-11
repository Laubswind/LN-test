import express, { Request, Response } from "express";
import { channelDbService } from "../services/channel.db.service";
import { paymentDbService } from "../services/payment.db.service";

const router = express.Router();

// 获取通道历史记录
router.get("/channels", async (req: Request, res: Response) => {
  try {
    const { channelPoint } = req.query;
    const history = await channelDbService.getChannelHistory(
      channelPoint as string
    );
    res.json({ success: true, data: history });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 获取活跃通道
router.get("/channels/active", async (req: Request, res: Response) => {
  try {
    const channels = await channelDbService.getActiveChannels();
    res.json({ success: true, data: channels });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 获取待处理通道
router.get("/channels/pending", async (req: Request, res: Response) => {
  try {
    const channels = await channelDbService.getPendingChannels();
    res.json({ success: true, data: channels });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 获取通道统计
router.get("/channels/stats", async (req: Request, res: Response) => {
  try {
    const stats = await channelDbService.getChannelStats();
    res.json({ success: true, data: stats });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 获取支付历史
router.get("/payments", async (req: Request, res: Response) => {
  try {
    const limit = parseInt(req.query.limit as string) || 50;
    const payments = await paymentDbService.getPaymentHistory(limit);
    res.json({ success: true, data: payments });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 获取发票历史
router.get("/invoices", async (req: Request, res: Response) => {
  try {
    const limit = parseInt(req.query.limit as string) || 50;
    const invoices = await paymentDbService.getInvoiceHistory(limit);
    res.json({ success: true, data: invoices });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 获取交易历史
router.get("/transactions", async (req: Request, res: Response) => {
  try {
    const limit = parseInt(req.query.limit as string) || 50;
    const transactions = await paymentDbService.getTransactionHistory(limit);
    res.json({ success: true, data: transactions });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 获取支付统计
router.get("/payments/stats", async (req: Request, res: Response) => {
  try {
    const stats = await paymentDbService.getPaymentStats();
    res.json({ success: true, data: stats });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 获取发票统计
router.get("/invoices/stats", async (req: Request, res: Response) => {
  try {
    const stats = await paymentDbService.getInvoiceStats();
    res.json({ success: true, data: stats });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 获取综合仪表板数据
router.get("/dashboard", async (req: Request, res: Response) => {
  try {
    const [channelStats, paymentStats, invoiceStats] = await Promise.all([
      channelDbService.getChannelStats(),
      paymentDbService.getPaymentStats(),
      paymentDbService.getInvoiceStats(),
    ]);

    res.json({
      success: true,
      data: {
        channels: channelStats,
        payments: paymentStats,
        invoices: invoiceStats,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
