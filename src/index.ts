import express from "express";
import { config } from "./config";
import lndRoutes from "./routes/lnd.routes";
import databaseRoutes from "./routes/database.routes";
import { databaseService } from "./services/database.service";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS 设置
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// 健康检查
app.get("/health", async (req, res) => {
  try {
    const dbHealth = await databaseService.healthCheck();
    res.json({
      status: "ok",
      database: dbHealth ? "connected" : "disconnected",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "健康检查失败",
      timestamp: new Date().toISOString(),
    });
  }
});

// LND 路由
app.use("/api/lnd", lndRoutes);
app.use("/api/db", databaseRoutes);

// 基础路由
app.get("/", (req, res) => {
  res.json({
    message: "LND Manager API",
    version: "1.0.0",
    status: "running",
    endpoints: {
      lnd: "/api/lnd",
      database: "/api/db",
      health: "/health",
    },
  });
});

// 启动服务器
async function startServer() {
  try {
    // 初始化数据库连接
    await databaseService.connect();

    const PORT = config.server.port;
    app.listen(PORT, () => {
      console.log(`服务器运行在端口 ${PORT}`);
      console.log(`📊 数据库API: http://localhost:${PORT}/api/db`);
      console.log(`⚡ LND API: http://localhost:${PORT}/api/lnd`);
    });
  } catch (error) {
    console.error("服务器启动失败:", error);
    process.exit(1);
  }
}

// 优雅关闭处理
process.on("SIGTERM", async () => {
  console.log("收到SIGTERM信号，正在关闭服务器...");
  await databaseService.cleanup();
  process.exit(0);
});

process.on("SIGINT", async () => {
  console.log("收到SIGINT信号，正在关闭服务器...");
  await databaseService.cleanup();
  process.exit(0);
});

startServer();
