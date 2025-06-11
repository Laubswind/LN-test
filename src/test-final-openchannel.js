const axios = require("axios");

/**
 * LND Manager - Lightning 通道开启测试脚本
 *
 * 功能:
 * - 检查节点连接状态
 * - 验证钱包余额
 * - 开启 Lightning 支付通道
 * - 显示完整的 TXID 信息 (修复后)
 * - 监控通道状态
 */

async function testOpenChannel() {
  console.log("🔗 LND Manager - Lightning 通道开启测试\\n");

  const API_BASE = "http://localhost:3000";

  // 通道参数配置
  const channelConfig = {
    node_key:
      "029bbf94fd9b166ec3178295a3360fbcbc306e00b130ca77f9b11a5cdc75a6954c",
    local_amt: 100000, // 100,000 satoshis
    push_amt: 0, // 推送给对方的金额 (可选)
    host: "127.0.0.1:9736", // 目标节点地址
  };

  try {
    console.log("📋 通道配置:");
    console.log("  目标节点:", channelConfig.node_key);
    console.log("  节点地址:", channelConfig.host);
    console.log("  通道金额:", channelConfig.local_amt, "satoshis");
    console.log("  推送金额:", channelConfig.push_amt, "satoshis");
    console.log("");

    // 1. 系统状态检查
    console.log("🔍 1. 系统状态检查...");
    await checkSystemStatus(API_BASE);
    console.log("");

    // 2. 节点连接检查
    console.log("👥 2. 节点连接检查...");
    await checkNodeConnection(API_BASE, channelConfig);
    console.log("");

    // 3. 余额验证
    console.log("💰 3. 余额验证...");
    const hasEnoughBalance = await checkBalance(
      API_BASE,
      channelConfig.local_amt
    );
    if (!hasEnoughBalance) {
      console.log("❌ 余额不足，无法开启通道");
      return;
    }
    console.log("");

    // 4. 开启通道
    console.log("🚀 4. 开启Lightning通道...");
    await openLightningChannel(API_BASE, channelConfig);
    console.log("");

    // 5. 最终状态检查
    console.log("📊 5. 最终状态检查...");
    await checkFinalStatus(API_BASE);
  } catch (error) {
    console.log("❌ 测试过程中出现严重错误:", error.message);
    console.log("📞 如需帮助，请检查:");
    console.log("  • LND 节点是否正常运行");
    console.log("  • API 服务器是否启动 (localhost:3000)");
    console.log("  • 网络连接是否正常");
  }
}

// 检查系统状态
async function checkSystemStatus(apiBase) {
  try {
    const infoResponse = await axios.get(`${apiBase}/api/lnd/info`);
    const info = infoResponse.data;

    console.log("✅ LND 节点状态:");
    console.log(`  节点别名: ${info.alias || "未设置"}`);
    console.log(`  网络: ${info.testnet ? "testnet" : "mainnet"}`);
    console.log(`  同步状态: ${info.synced_to_chain ? "已同步" : "同步中"}`);
    console.log(`  区块高度: ${info.block_height || "未知"}`);
    console.log(`  连接节点数: ${info.num_peers || 0}`);
  } catch (error) {
    console.log(
      "⚠️  获取节点信息失败:",
      error.response?.data?.error || error.message
    );
    throw new Error("系统状态检查失败");
  }
}

// 检查节点连接
async function checkNodeConnection(apiBase, config) {
  try {
    const peersResponse = await axios.get(`${apiBase}/api/lnd/peers`);
    const targetPeer = peersResponse.data.peers?.find(
      (peer) => peer.pub_key === config.node_key
    );

    if (targetPeer) {
      console.log("✅ 目标节点已连接:");
      console.log(`  地址: ${targetPeer.address}`);
      console.log(`  连接状态: ${targetPeer.inbound ? "入站" : "出站"}`);
      console.log(
        `  数据传输: 发送 ${targetPeer.bytes_sent} bytes, 接收 ${targetPeer.bytes_recv} bytes`
      );
    } else {
      console.log("⚠️  目标节点未连接，尝试连接...");

      try {
        await axios.post(`${apiBase}/api/lnd/connect-peer`, {
          pubkey: config.node_key,
          host: config.host,
        });
        console.log("✅ 节点连接成功");
      } catch (connectError) {
        console.log(
          "⚠️  节点连接失败:",
          connectError.response?.data?.error || connectError.message
        );
        console.log("💡 提示: 请确保目标节点在线并可访问");
        // 不抛出错误，因为可能节点已通过其他方式连接
      }
    }
  } catch (error) {
    console.log(
      "⚠️  检查节点连接失败:",
      error.response?.data?.error || error.message
    );
  }
}

// 检查余额
async function checkBalance(apiBase, requiredAmount) {
  try {
    const balanceResponse = await axios.get(`${apiBase}/api/lnd/balance`);
    const balance = balanceResponse.data;

    console.log("✅ 钱包余额信息:");
    console.log(`  总余额: ${balance.total_balance} satoshis`);
    console.log(`  已确认: ${balance.confirmed_balance} satoshis`);
    console.log(`  未确认: ${balance.unconfirmed_balance} satoshis`);

    const availableBalance =
      parseInt(balance.confirmed_balance) || parseInt(balance.total_balance);
    const isEnough = availableBalance >= requiredAmount;

    console.log(`  需要金额: ${requiredAmount} satoshis`);
    console.log(`  余额状态: ${isEnough ? "✅ 充足" : "❌ 不足"}`);

    return isEnough;
  } catch (error) {
    console.log(
      "⚠️  获取余额失败:",
      error.response?.data?.error || error.message
    );
    return false;
  }
}

// 开启Lightning通道
async function openLightningChannel(apiBase, config) {
  const startTime = Date.now();
  console.log("⏱️  正在处理开启通道请求，请稍等...");

  try {
    const channelData = {
      node_key: config.node_key,
      local_amt: config.local_amt,
    };

    if (config.push_amt && config.push_amt > 0) {
      channelData.push_amt = config.push_amt;
    }

    const response = await axios.post(
      `${apiBase}/api/lnd/openchannel`,
      channelData,
      {
        headers: { "Content-Type": "application/json" },
        timeout: 120000, // 2分钟超时
      }
    );

    const duration = Date.now() - startTime;

    console.log("✅ 通道开启成功！");
    console.log("📊 响应详情:");
    console.log(`  处理时间: ${duration}ms`);
    console.log(`  状态码: ${response.status}`);
    console.log("");

    console.log("🎯 通道信息:");
    if (response.data.funding_txid_str) {
      console.log(`  ✅ 交易ID: ${response.data.funding_txid_str}`);
      console.log(`  ✅ 输出索引: ${response.data.output_index}`);
      console.log(`  ✅ 通道点: ${response.data.channel_point}`);
    } else if (response.data.funding_txid_bytes) {
      console.log("  ⚠️  收到 Buffer 格式的 TXID (需要转换)");
      console.log("  原始数据:", JSON.stringify(response.data, null, 2));
    }

    console.log("");
    console.log("🎉 恭喜！Lightning 通道开启请求已成功发送");
    console.log("⏳ 下一步:");
    console.log("  1. 等待区块链网络确认交易");
    console.log("  2. testnet 通常需要 1-6 个区块确认");
    console.log("  3. 确认后通道将变为活跃状态");
    console.log("  4. 之后可以进行 Lightning 网络支付");
  } catch (error) {
    const duration = Date.now() - startTime;
    console.log(`❌ 通道开启失败 (用时: ${duration}ms)`);

    if (error.response) {
      console.log(`  状态码: ${error.response.status}`);
      console.log(
        `  错误信息: ${error.response.data?.error || error.response.data}`
      );

      // 提供针对性的解决建议
      const errorMsg = error.response.data?.error || "";
      if (errorMsg.includes("not enough witness outputs")) {
        console.log("\\n💡 余额不足解决方案:");
        console.log("  • 向钱包转入更多比特币");
        console.log("  • 等待待确认交易完成");
        console.log("  • 尝试开启更小金额的通道");
      } else if (errorMsg.includes("pending channels exceed maximum")) {
        console.log("\\n💡 待处理通道超限解决方案:");
        console.log("  • 等待现有待处理通道确认");
        console.log("  • 或选择其他节点开启通道");
      } else if (errorMsg.includes("peer") && errorMsg.includes("not online")) {
        console.log("\\n💡 节点离线解决方案:");
        console.log("  • 确认目标节点正在运行");
        console.log("  • 检查网络连接");
        console.log("  • 尝试重新连接节点");
      }
    } else if (error.code === "ECONNABORTED") {
      console.log("  超时错误: 请求超时，通道可能仍在处理中");
      console.log("  建议检查待处理通道状态");
    } else {
      console.log(`  网络错误: ${error.message}`);
    }
  }
}

// 检查最终状态
async function checkFinalStatus(apiBase) {
  try {
    // 检查待处理通道
    const pendingResponse = await axios.get(
      `${apiBase}/api/lnd/pendingchannels`
    );
    const pendingData = pendingResponse.data;

    const pendingOpenCount = pendingData.pending_open_channels?.length || 0;
    const pendingCloseCount = pendingData.pending_closing_channels?.length || 0;
    const pendingForceCloseCount =
      pendingData.pending_force_closing_channels?.length || 0;

    console.log("📋 通道状态统计:");
    console.log(`  ⏳ 待开启通道: ${pendingOpenCount}`);
    console.log(`  ⏳ 待关闭通道: ${pendingCloseCount}`);
    console.log(`  ⏳ 强制关闭通道: ${pendingForceCloseCount}`);

    if (pendingOpenCount > 0) {
      console.log("\\n🔗 待开启通道详情:");
      pendingData.pending_open_channels.forEach((channel, index) => {
        console.log(`  ${index + 1}. ${channel.channel.channel_point}`);
        console.log(`     容量: ${channel.channel.capacity} satoshis`);
        console.log(
          `     确认: ${channel.confirmations}/${
            channel.confirmations_required || "?"
          }`
        );
      });
    }

    // 检查活跃通道
    const activeResponse = await axios.get(`${apiBase}/api/lnd/channels`);
    const activeChannels = activeResponse.data.channels || [];

    console.log(`\\n🔗 活跃通道数: ${activeChannels.length}`);

    if (activeChannels.length > 0) {
      console.log("\\n✅ 活跃通道列表:");
      activeChannels.forEach((channel, index) => {
        console.log(`  ${index + 1}. ${channel.channel_point}`);
        console.log(
          `     容量: ${channel.capacity} sats, 本地: ${channel.local_balance} sats`
        );
        console.log(`     状态: ${channel.active ? "🟢 在线" : "🔴 离线"}`);
      });
    }
  } catch (error) {
    console.log(
      "⚠️  状态检查失败:",
      error.response?.data?.error || error.message
    );
  }
}

// 主程序入口
if (require.main === module) {
  testOpenChannel()
    .then(() => {
      console.log("\\n✅ 测试完成");
    })
    .catch((error) => {
      console.log("\\n❌ 测试失败:", error.message);
      process.exit(1);
    });
}

module.exports = { testOpenChannel };
