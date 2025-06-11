import dotenv from "dotenv";
import path from "path";
import fs from "fs";

dotenv.config();

const homedir = process.env.HOME || process.env.USERPROFILE;

// 自动检测网络类型（testnet 或 mainnet）
function detectNetwork(): string {
  const network = process.env.LND_NETWORK || "auto";

  if (network !== "auto") {
    return network;
  }

  // 自动检测：优先检查 testnet，然后是 mainnet
  const testnetPath = path.join(
    homedir || "",
    ".lnd/data/chain/bitcoin/testnet/admin.macaroon"
  );
  const mainnetPath = path.join(
    homedir || "",
    ".lnd/data/chain/bitcoin/mainnet/admin.macaroon"
  );

  if (fs.existsSync(testnetPath)) {
    console.log("🔍 检测到 testnet 网络");
    return "testnet";
  }

  if (fs.existsSync(mainnetPath)) {
    console.log("🔍 检测到 mainnet 网络");
    return "mainnet";
  }

  console.log("⚠️  未检测到网络类型，默认使用 mainnet");
  return "mainnet";
}

const detectedNetwork = detectNetwork();

export const config = {
  lnd: {
    grpcHost: process.env.LND_GRPC_HOST || "127.0.0.1",
    grpcPort: parseInt(process.env.LND_GRPC_PORT || "10009"),
    restHost: process.env.LND_REST_HOST || "127.0.0.1",
    restPort: parseInt(process.env.LND_REST_PORT || "8080"),
    network: detectedNetwork,
    certPath:
      process.env.LND_CERT_PATH?.replace("~", homedir || "") ||
      path.join(homedir || "", ".lnd/tls.cert"),
    macaroonPath:
      process.env.LND_MACAROON_PATH?.replace("~", homedir || "") ||
      path.join(
        homedir || "",
        `.lnd/data/chain/bitcoin/${detectedNetwork}/admin.macaroon`
      ),
  },
  bitcoind: {
    rpcUser: process.env.BITCOIND_RPC_USER || "用户名",
    rpcPass: process.env.BITCOIND_RPC_PASS || "密码",
  },
  server: {
    port: parseInt(process.env.PORT || "3000"),
  },
};
