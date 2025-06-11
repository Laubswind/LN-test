import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import fs from "fs";
import { config } from "../config";

class LndService {
  private lnrpc: any;
  private lightning: any;
  private isInitialized: boolean = false;
  private initError: string | null = null;

  constructor() {
    this.initLnd();
  }

  private initLnd() {
    try {
      // 检查证书文件是否存在
      if (!fs.existsSync(config.lnd.certPath)) {
        this.initError = `LND证书文件未找到: ${config.lnd.certPath}`;
        console.warn(`⚠️  ${this.initError}`);
        return;
      }

      // 检查macaroon文件是否存在
      if (!fs.existsSync(config.lnd.macaroonPath)) {
        this.initError = `LND macaroon文件未找到: ${config.lnd.macaroonPath}`;
        console.warn(`⚠️  ${this.initError}`);
        return;
      }

      const cert = fs.readFileSync(config.lnd.certPath);
      const macaroon = fs.readFileSync(config.lnd.macaroonPath).toString("hex");

      const lndCert = Buffer.from(cert);
      const sslCreds = grpc.credentials.createSsl(lndCert);
      const macaroonCreds = grpc.credentials.createFromMetadataGenerator(
        (_, callback) => {
          const metadata = new grpc.Metadata();
          metadata.add("macaroon", macaroon);
          callback(null, metadata);
        }
      );

      const credentials = grpc.credentials.combineChannelCredentials(
        sslCreds,
        macaroonCreds
      );

      const packageDefinition = protoLoader.loadSync("lightning.proto", {
        defaults: true,
        keepCase: true,
        longs: String,
        enums: String,
        oneofs: true,
      });

      this.lnrpc = grpc.loadPackageDefinition(packageDefinition).lnrpc;
      this.lightning = new this.lnrpc.Lightning(
        `${config.lnd.grpcHost}:${config.lnd.grpcPort}`,
        credentials
      );

      this.isInitialized = true;
      console.log(
        `✅ LND客户端初始化成功 - ${config.lnd.grpcHost}:${config.lnd.grpcPort}`
      );
    } catch (error: any) {
      this.initError = `LND初始化失败: ${error.message}`;
      console.error(`❌ ${this.initError}`);
    }
  }

  private checkInitialization() {
    if (!this.isInitialized) {
      throw new Error(this.initError || "LND客户端未初始化");
    }
  }

  async getInfo() {
    this.checkInitialization();
    return new Promise((resolve, reject) => {
      this.lightning.getInfo({}, (err: any, response: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
  }

  async createInvoice(amount: number, memo: string) {
    this.checkInitialization();
    return new Promise((resolve, reject) => {
      this.lightning.addInvoice(
        {
          value: amount,
          memo: memo,
        },
        (err: any, response: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(response);
          }
        }
      );
    });
  }

  async getNodeBalance() {
    this.checkInitialization();
    return new Promise((resolve, reject) => {
      this.lightning.walletBalance({}, (err: any, response: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
  }

  async getChannels() {
    this.checkInitialization();
    return new Promise((resolve, reject) => {
      this.lightning.listChannels({}, (err: any, response: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
  }

  // 生成新地址 (相当于 lncli newaddress p2wkh)
  async newAddress(addressType: string = "p2wkh") {
    this.checkInitialization();
    return new Promise((resolve, reject) => {
      // 地址类型映射
      const typeMap: { [key: string]: number } = {
        p2wkh: 0, // WITNESS_PUBKEY_HASH
        p2tr: 4, // TAPROOT_PUBKEY
      };

      const type =
        typeMap[addressType.toLowerCase()] !== undefined
          ? typeMap[addressType.toLowerCase()]
          : 0;

      this.lightning.newAddress(
        {
          type: type,
        },
        (err: any, response: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(response);
          }
        }
      );
    });
  }

  // 打开支付通道 (相当于 lncli openchannel)
  async openChannel(nodeKey: string, localAmount: number, pushAmount?: number) {
    this.checkInitialization();
    return new Promise((resolve, reject) => {
      const request: any = {
        node_pubkey: Buffer.from(nodeKey, "hex"),
        local_funding_amount: localAmount,
      };

      // 如果提供了push_amt，添加到请求中
      if (pushAmount && pushAmount > 0) {
        request.push_sat = pushAmount;
      }

      this.lightning.openChannelSync(request, (err: any, response: any) => {
        if (err) {
          reject(err);
        } else {
          // 处理响应，将 funding_txid_bytes 转换为可读的十六进制字符串
          const processedResponse = { ...response };

          if (
            response.funding_txid_bytes &&
            Buffer.isBuffer(response.funding_txid_bytes)
          ) {
            // 将 Buffer 转换为十六进制字符串
            processedResponse.funding_txid_str = response.funding_txid_bytes
              .reverse() // Bitcoin txid 需要反转字节序
              .toString("hex");
          } else if (
            response.funding_txid_bytes &&
            response.funding_txid_bytes.data
          ) {
            // 处理 Buffer JSON 格式 { type: "Buffer", data: [...] }
            const buffer = Buffer.from(response.funding_txid_bytes.data);
            processedResponse.funding_txid_str = buffer
              .reverse() // Bitcoin txid 需要反转字节序
              .toString("hex");
          }

          // 生成通道点字符串
          if (
            processedResponse.funding_txid_str &&
            response.output_index !== undefined
          ) {
            processedResponse.channel_point = `${processedResponse.funding_txid_str}:${response.output_index}`;
          }

          resolve(processedResponse);
        }
      });
    });
  }

  // 列出钱包地址 (相当于 lncli walletaddresses)
  async listAddresses() {
    this.checkInitialization();
    return new Promise((resolve, reject) => {
      this.lightning.listUnspent({}, (err: any, response: any) => {
        if (err) {
          reject(err);
        } else {
          // 从未花费输出中提取地址信息
          const addressMap = new Map();
          if (response.utxos) {
            response.utxos.forEach((utxo: any) => {
              if (utxo.address) {
                const existing = addressMap.get(utxo.address);
                if (existing) {
                  existing.amount += parseInt(utxo.amount_sat);
                  existing.confirmations = Math.min(
                    existing.confirmations,
                    utxo.confirmations
                  );
                } else {
                  addressMap.set(utxo.address, {
                    address: utxo.address,
                    amount: parseInt(utxo.amount_sat),
                    confirmations: utxo.confirmations,
                    address_type: utxo.address_type,
                  });
                }
              }
            });
          }

          resolve({
            total_addresses: addressMap.size,
            addresses: Array.from(addressMap.values()),
          });
        }
      });
    });
  }

  // 发送比特币 (相当于 lncli sendcoins)
  async sendCoins(
    address: string,
    amount: number,
    targetConf?: number,
    satPerVbyte?: number
  ) {
    this.checkInitialization();
    return new Promise((resolve, reject) => {
      const request: any = {
        addr: address,
        amount: amount,
      };

      // 可选参数
      if (targetConf) {
        request.target_conf = targetConf;
      }
      if (satPerVbyte) {
        request.sat_per_vbyte = satPerVbyte;
      }

      this.lightning.sendCoins(request, (err: any, response: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
  }

  // 关闭支付通道 (相当于 lncli closechannel)
  async closeChannel(channelPoint: string, force: boolean = false) {
    this.checkInitialization();
    return new Promise((resolve, reject) => {
      const [fundingTxid, outputIndex] = channelPoint.split(":");

      const request: any = {
        channel_point: {
          funding_txid_str: fundingTxid,
          output_index: parseInt(outputIndex),
        },
        force: force,
      };

      this.lightning.closeChannel(request, (err: any, response: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
  }

  // 获取待处理的通道 (相当于 lncli pendingchannels)
  async getPendingChannels() {
    this.checkInitialization();
    return new Promise((resolve, reject) => {
      this.lightning.pendingChannels({}, (err: any, response: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
  }

  // 支付发票 (相当于 lncli payinvoice)
  async payInvoice(paymentRequest: string, amount?: number, feeLimit?: number) {
    this.checkInitialization();
    return new Promise((resolve, reject) => {
      const request: any = {
        payment_request: paymentRequest,
      };

      // 如果指定了金额（用于0金额发票）
      if (amount) {
        request.amt = amount;
      }

      // 如果指定了手续费限制
      if (feeLimit) {
        request.fee_limit = {
          fixed: feeLimit,
        };
      }

      this.lightning.sendPaymentSync(request, (err: any, response: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
  }

  // 获取已连接的节点列表 (相当于 lncli listpeers)
  async listPeers() {
    this.checkInitialization();
    return new Promise((resolve, reject) => {
      this.lightning.listPeers({}, (err: any, response: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
  }

  // 连接到节点 (相当于 lncli connect)
  async connectPeer(pubkey: string, host: string) {
    this.checkInitialization();
    return new Promise((resolve, reject) => {
      const request = {
        addr: {
          pubkey: pubkey,
          host: host,
        },
      };

      this.lightning.connectPeer(request, (err: any, response: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
  }
}

export const lndService = new LndService();
