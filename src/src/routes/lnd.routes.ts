import express, { Request, Response } from "express";
import { lndService } from "../services/lnd.service";

const router = express.Router();

router.get("/info", async (req: Request, res: Response) => {
  try {
    const info = await lndService.getInfo();
    res.json(info);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/balance", async (req: Request, res: Response) => {
  try {
    const balance = await lndService.getNodeBalance();
    res.json(balance);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/channels", async (req: Request, res: Response) => {
  try {
    const channels = await lndService.getChannels();
    res.json(channels);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/invoice", async (req: Request, res: Response) => {
  try {
    const { amount, memo } = req.body;
    if (!amount || !memo) {
      res.status(400).json({ error: "金额和备注是必需的" });
      return;
    }
    const invoice = await lndService.createInvoice(amount, memo);
    res.json(invoice);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 生成新地址
router.get("/newaddress", async (req: Request, res: Response) => {
  try {
    const addressType = (req.query.type as string) || "p2wkh";
    const address = await lndService.newAddress(addressType);
    res.json(address);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 列出钱包地址
router.get("/addresses", async (req: Request, res: Response) => {
  try {
    const addresses = await lndService.listAddresses();
    res.json(addresses);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 打开支付通道
router.post("/openchannel", async (req: Request, res: Response) => {
  try {
    const { node_key, local_amt, push_amt } = req.body;

    if (!node_key || !local_amt) {
      res.status(400).json({
        error: "节点公钥(node_key)和本地金额(local_amt)是必需的",
      });
      return;
    }

    // 验证节点公钥格式（应该是66字符的十六进制字符串）
    if (!/^[0-9a-fA-F]{66}$/.test(node_key)) {
      res.status(400).json({
        error: "节点公钥格式无效，应为66字符的十六进制字符串",
      });
      return;
    }

    // 验证金额
    const localAmount = parseInt(local_amt);
    const pushAmount = push_amt ? parseInt(push_amt) : undefined;

    if (isNaN(localAmount) || localAmount <= 0) {
      res.status(400).json({
        error: "本地金额必须是大于0的数字",
      });
      return;
    }

    if (pushAmount !== undefined && (isNaN(pushAmount) || pushAmount < 0)) {
      res.status(400).json({
        error: "推送金额必须是非负数字",
      });
      return;
    }

    const result = await lndService.openChannel(
      node_key,
      localAmount,
      pushAmount
    );
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 发送比特币 - 现在使用 service 层方法
router.post("/sendcoins", async (req: Request, res: Response) => {
  try {
    const { address, amount, target_conf, sat_per_vbyte } = req.body;

    if (!address || !amount) {
      res.status(400).json({ error: "需要地址和金额" });
      return;
    }

    const result = await lndService.sendCoins(
      address,
      parseInt(amount),
      target_conf ? parseInt(target_conf) : undefined,
      sat_per_vbyte ? parseInt(sat_per_vbyte) : undefined
    );

    res.json({ success: true, transaction: result });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 关闭支付通道 - 现在使用 service 层方法
router.post("/closechannel", async (req: Request, res: Response) => {
  try {
    const { channel_point, force } = req.body;

    if (!channel_point) {
      res.status(400).json({ error: "需要channel_point参数" });
      return;
    }

    const [txid, output_index] = channel_point.split(":");
    if (!txid || output_index === undefined) {
      res.status(400).json({ error: "channel_point格式错误，应为txid:index" });
      return;
    }

    const result = await lndService.closeChannel(channel_point, force || false);

    res.json({
      success: true,
      close_info: result,
      message: `通道关闭请求已发送: ${channel_point}`,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 获取待处理的通道 - 现在使用 service 层方法
router.get("/pendingchannels", async (req: Request, res: Response) => {
  try {
    const result = await lndService.getPendingChannels();
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 支付发票 - Lightning Network 支付
router.post("/payinvoice", async (req: Request, res: Response) => {
  try {
    const { payment_request, amount, fee_limit } = req.body;

    if (!payment_request) {
      res.status(400).json({ error: "需要payment_request参数" });
      return;
    }

    // 验证发票格式（Lightning invoice 通常以 lnbc, lntb, lnbcrt 开头）
    if (!payment_request.match(/^ln(bc|tb|bcrt)/)) {
      res.status(400).json({ error: "无效的Lightning发票格式" });
      return;
    }

    const result = await lndService.payInvoice(
      payment_request,
      amount ? parseInt(amount) : undefined,
      fee_limit ? parseInt(fee_limit) : undefined
    );

    res.json({
      success: true,
      payment: result,
      message: "支付成功",
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 获取已连接的节点列表
router.get("/peers", async (req: Request, res: Response) => {
  try {
    const peers = await lndService.listPeers();
    res.json(peers);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 连接到节点
router.post("/connect-peer", async (req: Request, res: Response) => {
  try {
    const { pubkey, host } = req.body;

    if (!pubkey || !host) {
      res.status(400).json({ error: "需要pubkey和host参数" });
      return;
    }

    // 验证pubkey格式
    if (!/^[0-9a-fA-F]{66}$/.test(pubkey)) {
      res.status(400).json({ error: "无效的公钥格式" });
      return;
    }

    const result = await lndService.connectPeer(pubkey, host);
    res.json({
      success: true,
      message: "节点连接成功",
      result: result,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
