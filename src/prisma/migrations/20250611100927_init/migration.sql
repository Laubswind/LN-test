-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "node_configs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "nodeAlias" TEXT NOT NULL,
    "host" TEXT NOT NULL,
    "port" INTEGER NOT NULL,
    "network" TEXT NOT NULL DEFAULT 'testnet',
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "node_configs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "channel_history" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "channelPoint" TEXT NOT NULL,
    "peerPubkey" TEXT NOT NULL,
    "capacity" BIGINT NOT NULL,
    "localBalance" BIGINT NOT NULL,
    "remoteBalance" BIGINT NOT NULL,
    "status" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "openHeight" INTEGER,
    "closeHeight" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "channel_status_updates" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "channelHistoryId" TEXT NOT NULL,
    "previousStatus" TEXT,
    "newStatus" TEXT NOT NULL,
    "blockHeight" INTEGER,
    "confirmations" INTEGER,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "channel_status_updates_channelHistoryId_fkey" FOREIGN KEY ("channelHistoryId") REFERENCES "channel_history" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "payment_history" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "paymentHash" TEXT NOT NULL,
    "paymentRequest" TEXT,
    "destination" TEXT NOT NULL,
    "amount" BIGINT NOT NULL,
    "fee" BIGINT,
    "status" TEXT NOT NULL,
    "preimage" TEXT,
    "failureReason" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" DATETIME
);

-- CreateTable
CREATE TABLE "invoice_history" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "paymentHash" TEXT NOT NULL,
    "paymentRequest" TEXT NOT NULL,
    "amount" BIGINT NOT NULL,
    "memo" TEXT,
    "status" TEXT NOT NULL,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "amountPaid" BIGINT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paidAt" DATETIME,
    "expiresAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "balance_snapshots" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "totalBalance" BIGINT NOT NULL,
    "confirmedBalance" BIGINT NOT NULL,
    "unconfirmedBalance" BIGINT NOT NULL,
    "lockedBalance" BIGINT NOT NULL,
    "reservedBalanceAnchor" BIGINT NOT NULL,
    "channelBalance" BIGINT,
    "pendingChannelBalance" BIGINT,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "transaction_history" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "txid" TEXT NOT NULL,
    "amount" BIGINT NOT NULL,
    "fee" BIGINT,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "blockHeight" INTEGER,
    "confirmations" INTEGER,
    "toAddress" TEXT,
    "fromAddress" TEXT,
    "memo" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "confirmedAt" DATETIME
);

-- CreateTable
CREATE TABLE "activity_logs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "action" TEXT NOT NULL,
    "resource" TEXT,
    "details" TEXT,
    "level" TEXT NOT NULL DEFAULT 'INFO',
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "activity_logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "system_configs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "description" TEXT,
    "isEncrypted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "api_keys" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "keyHash" TEXT NOT NULL,
    "permissions" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastUsedAt" DATETIME,
    "expiresAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "channel_history_channelPoint_key" ON "channel_history"("channelPoint");

-- CreateIndex
CREATE UNIQUE INDEX "payment_history_paymentHash_key" ON "payment_history"("paymentHash");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_history_paymentHash_key" ON "invoice_history"("paymentHash");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_history_paymentRequest_key" ON "invoice_history"("paymentRequest");

-- CreateIndex
CREATE UNIQUE INDEX "transaction_history_txid_key" ON "transaction_history"("txid");

-- CreateIndex
CREATE UNIQUE INDEX "system_configs_key_key" ON "system_configs"("key");

-- CreateIndex
CREATE UNIQUE INDEX "api_keys_keyHash_key" ON "api_keys"("keyHash");
