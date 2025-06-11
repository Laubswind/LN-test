const axios = require("axios");

/**
 * LND Manager - Lightning 发票支付测试脚本
 *
 * 功能:
 * - 验证发票格式
 * - 解码发票信息
 * - 检查余额和通道状态
 * - 执行 Lightning 支付
 * - 显示支付结果
 */

async function testPayInvoice() {
  console.log("⚡ LND Manager - Lightning 发票支付测试\\n");

  const API_BASE = "http://localhost:3000";

  // Lightning 发票配置
  const paymentConfig = {
    payment_request:
      "lntb500u1p5yjjrqpp5pr37p4jc4lrl093ravnh7472f88d5p2d2clxfj69yteqg6nc2r4sdqqcqzzsxqyz5vqsp5pw6r3jh2pvyupysushzkt2l5lpzgjzxteqn6y5ds5q3ve6xhxj8q9qxpqysgqzx6p7k5gvuhm7fj3dg4rkvyphs0mhqpqk60xazzs43eqaqrs3zrx4gcd3vpyxql9dkv7raxxcjc7wqn9cvylvj3xdvy2zvg6tngpceqqrsxgvj",
    amount: null, // 如果发票金额为0，可以在这里指定
    fee_limit: 10000, // 手续费限制 (satoshis)
  };

  try {
    console.log("📋 支付配置:");
    console.log(
      "  发票:",
      paymentConfig.payment_request.substring(0, 50) + "..."
    );
    console.log("  手续费限制:", paymentConfig.fee_limit, "satoshis");
    if (paymentConfig.amount) {
      console.log("  指定金额:", paymentConfig.amount, "satoshis");
    }
    console.log("");

    // 1. 发票验证和解码
    console.log("🔍 1. 发票验证和解码...");
    const invoiceInfo = await analyzeInvoice(paymentConfig.payment_request);
    console.log("");

    // 2. 系统状态检查
    console.log("📊 2. 系统状态检查...");
    await checkSystemStatus(API_BASE);
    console.log("");

    // 3. 通道状态检查
    console.log("🔗 3. 通道状态检查...");
    const hasActiveChannels = await checkChannelStatus(API_BASE);
    if (!hasActiveChannels) {
      console.log("❌ 没有活跃通道，无法进行 Lightning 支付");
      console.log("💡 请先开启通道或等待现有通道确认激活");
      return;
    }
    console.log("");

    // 4. 余额检查
    console.log("💰 4. 余额检查...");
    await checkBalanceForPayment(API_BASE, invoiceInfo.amount);
    console.log("");

    // 5. 执行支付
    console.log("⚡ 5. 执行 Lightning 支付...");
    await executePayment(API_BASE, paymentConfig);
  } catch (error) {
    console.log("❌ 测试过程中出现严重错误:", error.message);
    console.log("📞 如需帮助，请检查:");
    console.log("  • LND 节点是否正常运行");
    console.log("  • API 服务器是否启动 (localhost:3000)");
    console.log("  • 是否有活跃的 Lightning 通道");
    console.log("  • 发票是否有效且未过期");
  }
}

// 发票分析和验证
async function analyzeInvoice(paymentRequest) {
  console.log("✅ 发票格式验证:");

  // 基本格式检查
  if (!paymentRequest.match(/^ln(bc|tb|bcrt)/)) {
    throw new Error("发票格式无效 - 不是有效的 Lightning 发票");
  }

  const isTestnet = paymentRequest.startsWith("lntb");
  const isMainnet = paymentRequest.startsWith("lnbc");
  const isRegtest = paymentRequest.startsWith("lnbcrt");

  console.log(
    `  网络: ${isTestnet ? "testnet" : isMainnet ? "mainnet" : "regtest"}`
  );
  console.log("  格式: ✅ 有效的 Lightning 发票");

  // 尝试从发票中提取金额信息
  let estimatedAmount = null;
  const amountMatch = paymentRequest.match(/^lntb(\\d+)([munp]?)/);
  if (amountMatch) {
    const value = parseInt(amountMatch[1]);
    const unit = amountMatch[2];

    // 转换为 satoshis
    switch (unit) {
      case "m": // milli-bitcoin (0.001 BTC)
        estimatedAmount = value * 100000;
        break;
      case "u": // micro-bitcoin (0.000001 BTC)
        estimatedAmount = value * 100;
        break;
      case "n": // nano-bitcoin (0.000000001 BTC)
        estimatedAmount = value * 0.1;
        break;
      case "p": // pico-bitcoin (0.000000000001 BTC)
        estimatedAmount = value * 0.0001;
        break;
      default:
        estimatedAmount = value * 100000000; // 假设是 BTC
    }

    console.log(
      `  金额: ${Math.round(estimatedAmount)} satoshis (${value}${
        unit || "BTC"
      })`
    );
  } else {
    console.log("  金额: 待解码 (可能是零金额发票)");
  }

  console.log("  长度:", paymentRequest.length, "字符");

  return {
    isValid: true,
    network: isTestnet ? "testnet" : isMainnet ? "mainnet" : "regtest",
    amount: estimatedAmount,
    paymentRequest: paymentRequest,
  };
}

// 检查系统状态
async function checkSystemStatus(apiBase) {
  try {
    const infoResponse = await axios.get(`${apiBase}/api/lnd/info`);
    const info = infoResponse.data;

    console.log("✅ LND 节点状态:");
    console.log(`  节点别名: ${info.alias || "未设置"}`);
    console.log(`  网络: ${info.testnet ? "testnet" : "mainnet"}`);
    console.log(
      `  同步状态: ${info.synced_to_chain ? "✅ 已同步" : "⏳ 同步中"}`
    );
    console.log(`  区块高度: ${info.block_height || "未知"}`);
    console.log(`  连接节点数: ${info.num_peers || 0}`);

    if (!info.synced_to_chain) {
      console.log("⚠️  警告: 节点未完全同步，支付可能失败");
    }
  } catch (error) {
    console.log(
      "⚠️  获取节点信息失败:",
      error.response?.data?.error || error.message
    );
    throw new Error("系统状态检查失败");
  }
}

// 检查通道状态
async function checkChannelStatus(apiBase) {
  try {
    // 检查活跃通道
    const channelsResponse = await axios.get(`${apiBase}/api/lnd/channels`);
    const activeChannels = channelsResponse.data.channels || [];

    console.log("✅ 通道状态:");
    console.log(`  活跃通道数: ${activeChannels.length}`);

    if (activeChannels.length === 0) {
      console.log("❌ 没有活跃通道");

      // 检查待处理通道
      const pendingResponse = await axios.get(
        `${apiBase}/api/lnd/pendingchannels`
      );
      const pendingCount =
        pendingResponse.data.pending_open_channels?.length || 0;

      if (pendingCount > 0) {
        console.log(`  待处理通道: ${pendingCount} 个`);
        console.log("💡 请等待通道确认后再尝试支付");
      } else {
        console.log("  待处理通道: 0 个");
        console.log("💡 请先开启 Lightning 通道");
      }

      return false;
    }

    // 显示活跃通道详情
    let totalOutbound = 0;
    let onlineChannels = 0;

    activeChannels.forEach((channel, index) => {
      const isOnline = channel.active;
      totalOutbound += parseInt(channel.local_balance);
      if (isOnline) onlineChannels++;

      console.log(
        `  通道 ${index + 1}: ${isOnline ? "🟢" : "🔴"} ${
          channel.local_balance
        } sats 可用`
      );
    });

    console.log(`  总出站流动性: ${totalOutbound} satoshis`);
    console.log(`  在线通道: ${onlineChannels}/${activeChannels.length}`);

    return totalOutbound > 0 && onlineChannels > 0;
  } catch (error) {
    console.log(
      "⚠️  检查通道状态失败:",
      error.response?.data?.error || error.message
    );
    return false;
  }
}

// 检查支付余额
async function checkBalanceForPayment(apiBase, estimatedAmount) {
  try {
    const balanceResponse = await axios.get(`${apiBase}/api/lnd/balance`);
    const balance = balanceResponse.data;

    console.log("✅ 钱包余额:");
    console.log(`  链上余额: ${balance.total_balance} satoshis`);
    console.log(`  已确认: ${balance.confirmed_balance} satoshis`);

    // 获取 Lightning 余额
    const channelsResponse = await axios.get(`${apiBase}/api/lnd/channels`);
    const activeChannels = channelsResponse.data.channels || [];
    const lightningBalance = activeChannels.reduce(
      (total, ch) => total + parseInt(ch.local_balance),
      0
    );

    console.log(`  Lightning 余额: ${lightningBalance} satoshis`);

    if (estimatedAmount) {
      const canPay = lightningBalance >= estimatedAmount;
      console.log(`  预估支付: ${estimatedAmount} satoshis`);
      console.log(`  支付能力: ${canPay ? "✅ 充足" : "❌ 不足"}`);

      if (!canPay) {
        console.log("⚠️  Lightning 余额不足，请:");
        console.log("    • 开启更多通道");
        console.log("    • 接收一些 Lightning 支付以增加入站流动性");
      }
    }
  } catch (error) {
    console.log(
      "⚠️  检查余额失败:",
      error.response?.data?.error || error.message
    );
  }
}

// 执行支付
async function executePayment(apiBase, config) {
  const startTime = Date.now();
  console.log("⏱️  正在处理支付请求，请稍等...");

  try {
    const paymentData = {
      payment_request: config.payment_request,
    };

    // 添加可选参数
    if (config.amount) {
      paymentData.amount = config.amount;
    }
    if (config.fee_limit) {
      paymentData.fee_limit = config.fee_limit;
    }

    const response = await axios.post(
      `${apiBase}/api/lnd/payinvoice`,
      paymentData,
      {
        headers: { "Content-Type": "application/json" },
        timeout: 60000, // 1分钟超时
      }
    );

    const duration = Date.now() - startTime;

    console.log("✅ 支付成功！");
    console.log("📊 支付详情:");
    console.log(`  处理时间: ${duration}ms`);
    console.log(`  状态码: ${response.status}`);
    console.log("");

    console.log("💳 支付结果:");
    const payment = response.data.payment;

    if (payment) {
      console.log(`  ✅ 支付哈希: ${payment.payment_hash || "未知"}`);
      console.log(`  ✅ 预像: ${payment.payment_preimage || "未知"}`);
      console.log(
        `  ✅ 支付金额: ${
          payment.value_sat || payment.value || "未知"
        } satoshis`
      );
      console.log(
        `  ✅ 手续费: ${payment.fee_sat || payment.fee || "未知"} satoshis`
      );
      console.log(`  ✅ 路径跳数: ${payment.path?.length || "未知"}`);

      if (payment.status) {
        console.log(`  ✅ 状态: ${payment.status}`);
      }
    } else {
      console.log("  ✅ 支付已发送 (详细信息未返回)");
    }

    console.log("");
    console.log("🎉 Lightning 支付成功完成！");
    console.log("💡 支付已通过 Lightning 网络即时到达收款方");
  } catch (error) {
    const duration = Date.now() - startTime;
    console.log(`❌ 支付失败 (用时: ${duration}ms)`);

    if (error.response) {
      console.log(`  状态码: ${error.response.status}`);
      console.log(
        `  错误信息: ${error.response.data?.error || error.response.data}`
      );

      // 提供针对性的解决建议
      const errorMsg = error.response.data?.error || "";
      if (errorMsg.includes("no route")) {
        console.log("\\n💡 路由问题解决方案:");
        console.log("  • 检查目标节点是否在线");
        console.log("  • 确保有足够的出站流动性");
        console.log("  • 尝试增加手续费限制");
        console.log("  • 检查 Lightning 网络连通性");
      } else if (errorMsg.includes("insufficient")) {
        console.log("\\n💡 余额不足解决方案:");
        console.log("  • 检查 Lightning 通道余额");
        console.log("  • 开启更多支付通道");
        console.log("  • 接收入站流动性");
      } else if (errorMsg.includes("timeout")) {
        console.log("\\n💡 超时问题解决方案:");
        console.log("  • 检查网络连接");
        console.log("  • 增加超时时间");
        console.log("  • 稍后重试");
      }
    } else if (error.code === "ECONNABORTED") {
      console.log("  超时错误: 支付请求超时");
      console.log("  💡 支付可能仍在处理中，请检查交易历史");
    } else {
      console.log(`  网络错误: ${error.message}`);
    }
  }
}

// 主程序入口
if (require.main === module) {
  testPayInvoice()
    .then(() => {
      console.log("\\n✅ 测试完成");
    })
    .catch((error) => {
      console.log("\\n❌ 测试失败:", error.message);
      process.exit(1);
    });
}

module.exports = { testPayInvoice };
