import express from "express";
import { config } from "./config";
import lndRoutes from "./routes/lnd.routes";

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
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// LND 路由
app.use("/api/lnd", lndRoutes);

app.listen(config.server.port, () => {
  console.log(`服务器运行在端口 ${config.server.port}`);
});
