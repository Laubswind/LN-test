const axios = require("axios");

const API_BASE = "http://localhost:3000";

async function testAPI() {
  console.log("🚀 开始测试 LND Manager API...\n");

  try {
    // 测试健康检查
    console.log("1. 测试健康检查...");
    const healthResponse = await axios.get(`${API_BASE}/health`);
    console.log("✅ 健康检查成功:", healthResponse.data);
    console.log("");

    // 测试LND信息
    console.log("2. 测试获取LND节点信息...");
    try {
      const infoResponse = await axios.get(`${API_BASE}/api/lnd/info`);
      console.log("✅ LND节点信息:", infoResponse.data);
    } catch (error) {
      console.log(
        "❌ LND节点信息获取失败:",
        error.response?.data || error.message
      );
    }
    console.log("");

    // 测试余额查询
    console.log("3. 测试获取节点余额...");
    try {
      const balanceResponse = await axios.get(`${API_BASE}/api/lnd/balance`);
      console.log("✅ 节点余额:", balanceResponse.data);
    } catch (error) {
      console.log(
        "❌ 节点余额获取失败:",
        error.response?.data || error.message
      );
    }
    console.log("");

    // 测试通道查询
    console.log("4. 测试获取通道列表...");
    try {
      const channelsResponse = await axios.get(`${API_BASE}/api/lnd/channels`);
      console.log("✅ 通道列表:", channelsResponse.data);
    } catch (error) {
      console.log(
        "❌ 通道列表获取失败:",
        error.response?.data || error.message
      );
    }
    console.log("");

    // 测试显示地址列表
    console.log("5. 测试获取钱包地址列表...");
    try {
      const addressesResponse = await axios.get(
        `${API_BASE}/api/lnd/addresses`
      );
      console.log("✅ 钱包地址列表:", addressesResponse.data);
    } catch (error) {
      console.log(
        "❌ 钱包地址列表获取失败:",
        error.response?.data || error.message
      );
    }
    console.log("");

    // 测试生成新地址
    console.log("6. 测试生成新地址...");
    try {
      const addressResponse = await axios.get(
        `${API_BASE}/api/lnd/newaddress?type=p2wkh`
      );
      console.log("✅ 新地址生成成功:", addressResponse.data);
    } catch (error) {
      console.log("❌ 新地址生成失败:", error.response?.data || error.message);
    }
    console.log("");

    // 测试创建发票
    console.log("7. 测试创建发票...");
    try {
      const invoiceData = {
        amount: "1000",
        memo: "测试发票",
      };
      const invoiceResponse = await axios.post(
        `${API_BASE}/api/lnd/invoice`,
        invoiceData
      );
      console.log("✅ 发票创建成功:", invoiceResponse.data);
    } catch (error) {
      console.log("❌ 发票创建失败:", error.response?.data || error.message);
    }
    console.log("");

    // 测试打开通道（仅显示格式，不实际执行）
    console.log("8. 打开通道API格式展示...");
    console.log("📝 打开通道的API调用示例：");
    console.log(`POST ${API_BASE}/api/lnd/openchannel`);
    console.log("请求体格式：");
    console.log(
      JSON.stringify(
        {
          node_key:
            "029bbf94fd9b166ec3178295a3360fbcbc306e00b130ca77f9b11a5cdc75a6954c",
          local_amt: "100000",
          push_amt: "0", // 可选
        },
        null,
        2
      )
    );
    console.log("⚠️  注意：实际使用时请确保节点公钥有效且可连接");
    console.log("");
  } catch (error) {
    console.error("❌ 测试过程中出现错误:", error.message);
  }
}

// 运行测试
testAPI();
