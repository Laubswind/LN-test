import { PrismaClient } from "../generated/prisma";

class DatabaseService {
  private static instance: DatabaseService;
  private prisma: PrismaClient;

  private constructor() {
    this.prisma = new PrismaClient({
      log: ["query", "info", "warn", "error"],
    });
  }

  public static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService();
    }
    return DatabaseService.instance;
  }

  public getPrisma(): PrismaClient {
    return this.prisma;
  }

  public async connect(): Promise<void> {
    try {
      await this.prisma.$connect();
      console.log("✅ 数据库连接成功");
    } catch (error) {
      console.error("❌ 数据库连接失败:", error);
      throw error;
    }
  }

  public async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
    console.log("🔌 数据库连接已断开");
  }

  // 健康检查
  public async healthCheck(): Promise<boolean> {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return true;
    } catch (error) {
      console.error("数据库健康检查失败:", error);
      return false;
    }
  }

  // 清理数据库连接
  public async cleanup(): Promise<void> {
    await this.disconnect();
  }
}

export const databaseService = DatabaseService.getInstance();
