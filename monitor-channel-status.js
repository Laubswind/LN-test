const axios = require("axios");

/**
 * LND Manager - 通道状态监控脚本
 *
 * 功能:
 * - 实时监控通道确认状态
 * - 显示区块链确认进度
 * - 检测通道激活状态
 */

async function monitorChannelStatus() {
  console.log("📊 LND Manager - 通道状态监控\\n");

  const API_BASE = "http://localhost:3000";

  try {
    console.log("🔍 正在检查通道状态...");
    console.log("=".repeat(60));

    // 1. 检查活跃通道
    const activeChannels = await checkActiveChannels(API_BASE);
    console.log("");

    // 2. 检查待处理通道
    const pendingChannels = await checkPendingChannels(API_BASE);
    console.log("");

    // 3. 系统状态
    await checkNodeStatus(API_BASE);
    console.log("");

    // 4. 总结
    console.log("📋 状态总结:");
    console.log(`  活跃通道: ${activeChannels.length}`);
    console.log(`  待处理通道: ${pendingChannels.length}`);

    if (activeChannels.length > 0) {
      console.log("\\n✅ 可以进行 Lightning 支付！");
      console.log("💡 您现在可以运行: node test-payinvoice.js");
    } else if (pendingChannels.length > 0) {
      console.log("\\n⏳ 通道正在确认中，请稍等...");
      console.log("💡 建议每隔几分钟重新运行此监控脚本");
    } else {
      console.log("\\n❌ 没有通道，请先开启通道");
      console.log("💡 运行: node test-final-openchannel.js");
    }
  } catch (error) {
    console.log("❌ 监控过程中出现错误:", error.message);
  }
}

// 检查活跃通道
async function checkActiveChannels(apiBase) {
  try {
    const response = await axios.get(`${apiBase}/api/lnd/channels`);
    const channels = response.data.channels || [];

    console.log("🔗 活跃通道状态:");
    console.log(`  数量: ${channels.length}`);

    if (channels.length > 0) {
      let totalCapacity = 0;
      let totalLocalBalance = 0;
      let onlineCount = 0;

      channels.forEach((channel, index) => {
        totalCapacity += parseInt(channel.capacity);
        totalLocalBalance += parseInt(channel.local_balance);
        if (channel.active) onlineCount++;

        console.log(`\\n  通道 ${index + 1}:`);
        console.log(`    状态: ${channel.active ? "🟢 在线" : "🔴 离线"}`);
        console.log(`    通道点: ${channel.channel_point}`);
        console.log(`    容量: ${channel.capacity} satoshis`);
        console.log(`    本地余额: ${channel.local_balance} satoshis`);
        console.log(`    远程余额: ${channel.remote_balance} satoshis`);
        console.log(`    对端节点: ${channel.remote_pubkey}`);
      });

      console.log(`\\n  总计:`);
      console.log(`    总容量: ${totalCapacity} satoshis`);
      console.log(`    可用余额: ${totalLocalBalance} satoshis`);
      console.log(`    在线通道: ${onlineCount}/${channels.length}`);
    }

    return channels;
  } catch (error) {
    console.log(
      "⚠️  获取活跃通道失败:",
      error.response?.data?.error || error.message
    );
    return [];
  }
}

// 检查待处理通道
async function checkPendingChannels(apiBase) {
  try {
    const response = await axios.get(`${apiBase}/api/lnd/pendingchannels`);
    const data = response.data;

    const pendingOpen = data.pending_open_channels || [];
    const pendingClose = data.pending_closing_channels || [];
    const pendingForceClose = data.pending_force_closing_channels || [];

    console.log("⏳ 待处理通道状态:");
    console.log(`  待开启: ${pendingOpen.length}`);
    console.log(`  待关闭: ${pendingClose.length}`);
    console.log(`  强制关闭: ${pendingForceClose.length}`);

    // 详细显示待开启通道
    if (pendingOpen.length > 0) {
      console.log("\\n📋 待开启通道详情:");

      pendingOpen.forEach((pending, index) => {
        const channel = pending.channel;
        const confirmations = pending.confirmations || 0;
        const required = pending.confirmations_required || 6;
        const progress = Math.min(
          100,
          Math.round((confirmations / required) * 100)
        );

        console.log(`\\n  通道 ${index + 1}:`);
        console.log(`    通道点: ${channel.channel_point}`);
        console.log(`    容量: ${channel.capacity} satoshis`);
        console.log(`    本地余额: ${channel.local_balance} satoshis`);
        console.log(
          `    确认进度: ${confirmations}/${required} (${progress}%)`
        );
        console.log(`    手续费: ${pending.commit_fee} satoshis`);
        console.log(`    对端节点: ${channel.remote_node_pub}`);

        // 进度条
        const progressBar =
          "█".repeat(Math.floor(progress / 5)) +
          "░".repeat(20 - Math.floor(progress / 5));
        console.log(`    进度条: [${progressBar}] ${progress}%`);

        if (confirmations >= required) {
          console.log(`    🎉 即将激活！`);
        } else {
          const remaining = required - confirmations;
          console.log(`    ⏳ 还需要 ${remaining} 个确认`);
        }
      });
    }

    return pendingOpen;
  } catch (error) {
    console.log(
      "⚠️  获取待处理通道失败:",
      error.response?.data?.error || error.message
    );
    return [];
  }
}

// 检查节点状态
async function checkNodeStatus(apiBase) {
  try {
    const response = await axios.get(`${apiBase}/api/lnd/info`);
    const info = response.data;

    console.log("ℹ️  节点状态:");
    console.log(`  别名: ${info.alias || "未设置"}`);
    console.log(`  网络: ${info.testnet ? "testnet" : "mainnet"}`);
    console.log(`  区块高度: ${info.block_height}`);
    console.log(
      `  同步状态: ${info.synced_to_chain ? "✅ 已同步" : "⏳ 同步中"}`
    );
    console.log(`  连接节点: ${info.num_peers || 0}`);

    return info;
  } catch (error) {
    console.log(
      "⚠️  获取节点状态失败:",
      error.response?.data?.error || error.message
    );
    return null;
  }
}

// 主程序入口
if (require.main === module) {
  monitorChannelStatus()
    .then(() => {
      console.log("\\n✅ 监控完成");
      console.log("💡 提示: 重新运行此脚本以更新状态");
    })
    .catch((error) => {
      console.log("\\n❌ 监控失败:", error.message);
      process.exit(1);
    });
}

module.exports = { monitorChannelStatus };
