
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model NodeConfig
 * 
 */
export type NodeConfig = $Result.DefaultSelection<Prisma.$NodeConfigPayload>
/**
 * Model ChannelHistory
 * 
 */
export type ChannelHistory = $Result.DefaultSelection<Prisma.$ChannelHistoryPayload>
/**
 * Model ChannelStatusUpdate
 * 
 */
export type ChannelStatusUpdate = $Result.DefaultSelection<Prisma.$ChannelStatusUpdatePayload>
/**
 * Model PaymentHistory
 * 
 */
export type PaymentHistory = $Result.DefaultSelection<Prisma.$PaymentHistoryPayload>
/**
 * Model InvoiceHistory
 * 
 */
export type InvoiceHistory = $Result.DefaultSelection<Prisma.$InvoiceHistoryPayload>
/**
 * Model BalanceSnapshot
 * 
 */
export type BalanceSnapshot = $Result.DefaultSelection<Prisma.$BalanceSnapshotPayload>
/**
 * Model TransactionHistory
 * 
 */
export type TransactionHistory = $Result.DefaultSelection<Prisma.$TransactionHistoryPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>
/**
 * Model SystemConfig
 * 
 */
export type SystemConfig = $Result.DefaultSelection<Prisma.$SystemConfigPayload>
/**
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER',
  READONLY: 'READONLY'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ChannelStatus: {
  PENDING_OPEN: 'PENDING_OPEN',
  ACTIVE: 'ACTIVE',
  PENDING_CLOSE: 'PENDING_CLOSE',
  CLOSED: 'CLOSED',
  FORCE_CLOSE: 'FORCE_CLOSE'
};

export type ChannelStatus = (typeof ChannelStatus)[keyof typeof ChannelStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  SUCCEEDED: 'SUCCEEDED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const InvoiceStatus: {
  OPEN: 'OPEN',
  SETTLED: 'SETTLED',
  CANCELLED: 'CANCELLED',
  ACCEPTED: 'ACCEPTED'
};

export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus]


export const TransactionType: {
  SEND: 'SEND',
  RECEIVE: 'RECEIVE',
  CHANNEL_OPEN: 'CHANNEL_OPEN',
  CHANNEL_CLOSE: 'CHANNEL_CLOSE'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const TransactionStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  FAILED: 'FAILED'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const LogLevel: {
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
  CRITICAL: 'CRITICAL'
};

export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ChannelStatus = $Enums.ChannelStatus

export const ChannelStatus: typeof $Enums.ChannelStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type InvoiceStatus = $Enums.InvoiceStatus

export const InvoiceStatus: typeof $Enums.InvoiceStatus

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type LogLevel = $Enums.LogLevel

export const LogLevel: typeof $Enums.LogLevel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nodeConfig`: Exposes CRUD operations for the **NodeConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NodeConfigs
    * const nodeConfigs = await prisma.nodeConfig.findMany()
    * ```
    */
  get nodeConfig(): Prisma.NodeConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.channelHistory`: Exposes CRUD operations for the **ChannelHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChannelHistories
    * const channelHistories = await prisma.channelHistory.findMany()
    * ```
    */
  get channelHistory(): Prisma.ChannelHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.channelStatusUpdate`: Exposes CRUD operations for the **ChannelStatusUpdate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChannelStatusUpdates
    * const channelStatusUpdates = await prisma.channelStatusUpdate.findMany()
    * ```
    */
  get channelStatusUpdate(): Prisma.ChannelStatusUpdateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentHistory`: Exposes CRUD operations for the **PaymentHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentHistories
    * const paymentHistories = await prisma.paymentHistory.findMany()
    * ```
    */
  get paymentHistory(): Prisma.PaymentHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoiceHistory`: Exposes CRUD operations for the **InvoiceHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvoiceHistories
    * const invoiceHistories = await prisma.invoiceHistory.findMany()
    * ```
    */
  get invoiceHistory(): Prisma.InvoiceHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.balanceSnapshot`: Exposes CRUD operations for the **BalanceSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BalanceSnapshots
    * const balanceSnapshots = await prisma.balanceSnapshot.findMany()
    * ```
    */
  get balanceSnapshot(): Prisma.BalanceSnapshotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactionHistory`: Exposes CRUD operations for the **TransactionHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionHistories
    * const transactionHistories = await prisma.transactionHistory.findMany()
    * ```
    */
  get transactionHistory(): Prisma.TransactionHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemConfig`: Exposes CRUD operations for the **SystemConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemConfigs
    * const systemConfigs = await prisma.systemConfig.findMany()
    * ```
    */
  get systemConfig(): Prisma.SystemConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    NodeConfig: 'NodeConfig',
    ChannelHistory: 'ChannelHistory',
    ChannelStatusUpdate: 'ChannelStatusUpdate',
    PaymentHistory: 'PaymentHistory',
    InvoiceHistory: 'InvoiceHistory',
    BalanceSnapshot: 'BalanceSnapshot',
    TransactionHistory: 'TransactionHistory',
    ActivityLog: 'ActivityLog',
    SystemConfig: 'SystemConfig',
    ApiKey: 'ApiKey'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "nodeConfig" | "channelHistory" | "channelStatusUpdate" | "paymentHistory" | "invoiceHistory" | "balanceSnapshot" | "transactionHistory" | "activityLog" | "systemConfig" | "apiKey"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      NodeConfig: {
        payload: Prisma.$NodeConfigPayload<ExtArgs>
        fields: Prisma.NodeConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NodeConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NodeConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeConfigPayload>
          }
          findFirst: {
            args: Prisma.NodeConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NodeConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeConfigPayload>
          }
          findMany: {
            args: Prisma.NodeConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeConfigPayload>[]
          }
          create: {
            args: Prisma.NodeConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeConfigPayload>
          }
          createMany: {
            args: Prisma.NodeConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NodeConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeConfigPayload>[]
          }
          delete: {
            args: Prisma.NodeConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeConfigPayload>
          }
          update: {
            args: Prisma.NodeConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeConfigPayload>
          }
          deleteMany: {
            args: Prisma.NodeConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NodeConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NodeConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeConfigPayload>[]
          }
          upsert: {
            args: Prisma.NodeConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeConfigPayload>
          }
          aggregate: {
            args: Prisma.NodeConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNodeConfig>
          }
          groupBy: {
            args: Prisma.NodeConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<NodeConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.NodeConfigCountArgs<ExtArgs>
            result: $Utils.Optional<NodeConfigCountAggregateOutputType> | number
          }
        }
      }
      ChannelHistory: {
        payload: Prisma.$ChannelHistoryPayload<ExtArgs>
        fields: Prisma.ChannelHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChannelHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChannelHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelHistoryPayload>
          }
          findFirst: {
            args: Prisma.ChannelHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChannelHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelHistoryPayload>
          }
          findMany: {
            args: Prisma.ChannelHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelHistoryPayload>[]
          }
          create: {
            args: Prisma.ChannelHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelHistoryPayload>
          }
          createMany: {
            args: Prisma.ChannelHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChannelHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelHistoryPayload>[]
          }
          delete: {
            args: Prisma.ChannelHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelHistoryPayload>
          }
          update: {
            args: Prisma.ChannelHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ChannelHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChannelHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChannelHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ChannelHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelHistoryPayload>
          }
          aggregate: {
            args: Prisma.ChannelHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChannelHistory>
          }
          groupBy: {
            args: Prisma.ChannelHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChannelHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChannelHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ChannelHistoryCountAggregateOutputType> | number
          }
        }
      }
      ChannelStatusUpdate: {
        payload: Prisma.$ChannelStatusUpdatePayload<ExtArgs>
        fields: Prisma.ChannelStatusUpdateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChannelStatusUpdateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelStatusUpdatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChannelStatusUpdateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelStatusUpdatePayload>
          }
          findFirst: {
            args: Prisma.ChannelStatusUpdateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelStatusUpdatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChannelStatusUpdateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelStatusUpdatePayload>
          }
          findMany: {
            args: Prisma.ChannelStatusUpdateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelStatusUpdatePayload>[]
          }
          create: {
            args: Prisma.ChannelStatusUpdateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelStatusUpdatePayload>
          }
          createMany: {
            args: Prisma.ChannelStatusUpdateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChannelStatusUpdateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelStatusUpdatePayload>[]
          }
          delete: {
            args: Prisma.ChannelStatusUpdateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelStatusUpdatePayload>
          }
          update: {
            args: Prisma.ChannelStatusUpdateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelStatusUpdatePayload>
          }
          deleteMany: {
            args: Prisma.ChannelStatusUpdateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChannelStatusUpdateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChannelStatusUpdateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelStatusUpdatePayload>[]
          }
          upsert: {
            args: Prisma.ChannelStatusUpdateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelStatusUpdatePayload>
          }
          aggregate: {
            args: Prisma.ChannelStatusUpdateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChannelStatusUpdate>
          }
          groupBy: {
            args: Prisma.ChannelStatusUpdateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChannelStatusUpdateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChannelStatusUpdateCountArgs<ExtArgs>
            result: $Utils.Optional<ChannelStatusUpdateCountAggregateOutputType> | number
          }
        }
      }
      PaymentHistory: {
        payload: Prisma.$PaymentHistoryPayload<ExtArgs>
        fields: Prisma.PaymentHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          findFirst: {
            args: Prisma.PaymentHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          findMany: {
            args: Prisma.PaymentHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>[]
          }
          create: {
            args: Prisma.PaymentHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          createMany: {
            args: Prisma.PaymentHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>[]
          }
          delete: {
            args: Prisma.PaymentHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          update: {
            args: Prisma.PaymentHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PaymentHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>[]
          }
          upsert: {
            args: Prisma.PaymentHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          aggregate: {
            args: Prisma.PaymentHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentHistory>
          }
          groupBy: {
            args: Prisma.PaymentHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentHistoryCountAggregateOutputType> | number
          }
        }
      }
      InvoiceHistory: {
        payload: Prisma.$InvoiceHistoryPayload<ExtArgs>
        fields: Prisma.InvoiceHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceHistoryPayload>
          }
          findFirst: {
            args: Prisma.InvoiceHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceHistoryPayload>
          }
          findMany: {
            args: Prisma.InvoiceHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceHistoryPayload>[]
          }
          create: {
            args: Prisma.InvoiceHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceHistoryPayload>
          }
          createMany: {
            args: Prisma.InvoiceHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceHistoryPayload>[]
          }
          delete: {
            args: Prisma.InvoiceHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceHistoryPayload>
          }
          update: {
            args: Prisma.InvoiceHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceHistoryPayload>
          }
          deleteMany: {
            args: Prisma.InvoiceHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceHistoryPayload>[]
          }
          upsert: {
            args: Prisma.InvoiceHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceHistoryPayload>
          }
          aggregate: {
            args: Prisma.InvoiceHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoiceHistory>
          }
          groupBy: {
            args: Prisma.InvoiceHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceHistoryCountAggregateOutputType> | number
          }
        }
      }
      BalanceSnapshot: {
        payload: Prisma.$BalanceSnapshotPayload<ExtArgs>
        fields: Prisma.BalanceSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BalanceSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BalanceSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceSnapshotPayload>
          }
          findFirst: {
            args: Prisma.BalanceSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BalanceSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceSnapshotPayload>
          }
          findMany: {
            args: Prisma.BalanceSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceSnapshotPayload>[]
          }
          create: {
            args: Prisma.BalanceSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceSnapshotPayload>
          }
          createMany: {
            args: Prisma.BalanceSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BalanceSnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceSnapshotPayload>[]
          }
          delete: {
            args: Prisma.BalanceSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceSnapshotPayload>
          }
          update: {
            args: Prisma.BalanceSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.BalanceSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BalanceSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BalanceSnapshotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceSnapshotPayload>[]
          }
          upsert: {
            args: Prisma.BalanceSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceSnapshotPayload>
          }
          aggregate: {
            args: Prisma.BalanceSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBalanceSnapshot>
          }
          groupBy: {
            args: Prisma.BalanceSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<BalanceSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.BalanceSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<BalanceSnapshotCountAggregateOutputType> | number
          }
        }
      }
      TransactionHistory: {
        payload: Prisma.$TransactionHistoryPayload<ExtArgs>
        fields: Prisma.TransactionHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>
          }
          findFirst: {
            args: Prisma.TransactionHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>
          }
          findMany: {
            args: Prisma.TransactionHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>[]
          }
          create: {
            args: Prisma.TransactionHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>
          }
          createMany: {
            args: Prisma.TransactionHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>[]
          }
          delete: {
            args: Prisma.TransactionHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>
          }
          update: {
            args: Prisma.TransactionHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TransactionHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>[]
          }
          upsert: {
            args: Prisma.TransactionHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>
          }
          aggregate: {
            args: Prisma.TransactionHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactionHistory>
          }
          groupBy: {
            args: Prisma.TransactionHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionHistoryCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
      SystemConfig: {
        payload: Prisma.$SystemConfigPayload<ExtArgs>
        fields: Prisma.SystemConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          findFirst: {
            args: Prisma.SystemConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          findMany: {
            args: Prisma.SystemConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          create: {
            args: Prisma.SystemConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          createMany: {
            args: Prisma.SystemConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          delete: {
            args: Prisma.SystemConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          update: {
            args: Prisma.SystemConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          deleteMany: {
            args: Prisma.SystemConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          upsert: {
            args: Prisma.SystemConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          aggregate: {
            args: Prisma.SystemConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemConfig>
          }
          groupBy: {
            args: Prisma.SystemConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemConfigCountArgs<ExtArgs>
            result: $Utils.Optional<SystemConfigCountAggregateOutputType> | number
          }
        }
      }
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    nodeConfig?: NodeConfigOmit
    channelHistory?: ChannelHistoryOmit
    channelStatusUpdate?: ChannelStatusUpdateOmit
    paymentHistory?: PaymentHistoryOmit
    invoiceHistory?: InvoiceHistoryOmit
    balanceSnapshot?: BalanceSnapshotOmit
    transactionHistory?: TransactionHistoryOmit
    activityLog?: ActivityLogOmit
    systemConfig?: SystemConfigOmit
    apiKey?: ApiKeyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    nodeConfigs: number
    activityLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nodeConfigs?: boolean | UserCountOutputTypeCountNodeConfigsArgs
    activityLogs?: boolean | UserCountOutputTypeCountActivityLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNodeConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodeConfigWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }


  /**
   * Count Type ChannelHistoryCountOutputType
   */

  export type ChannelHistoryCountOutputType = {
    statusUpdates: number
  }

  export type ChannelHistoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statusUpdates?: boolean | ChannelHistoryCountOutputTypeCountStatusUpdatesArgs
  }

  // Custom InputTypes
  /**
   * ChannelHistoryCountOutputType without action
   */
  export type ChannelHistoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelHistoryCountOutputType
     */
    select?: ChannelHistoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChannelHistoryCountOutputType without action
   */
  export type ChannelHistoryCountOutputTypeCountStatusUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelStatusUpdateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    passwordHash: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nodeConfigs?: boolean | User$nodeConfigsArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "passwordHash" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nodeConfigs?: boolean | User$nodeConfigsArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      nodeConfigs: Prisma.$NodeConfigPayload<ExtArgs>[]
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      passwordHash: string
      role: $Enums.UserRole
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nodeConfigs<T extends User$nodeConfigsArgs<ExtArgs> = {}>(args?: Subset<T, User$nodeConfigsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodeConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activityLogs<T extends User$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.nodeConfigs
   */
  export type User$nodeConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeConfig
     */
    select?: NodeConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeConfig
     */
    omit?: NodeConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeConfigInclude<ExtArgs> | null
    where?: NodeConfigWhereInput
    orderBy?: NodeConfigOrderByWithRelationInput | NodeConfigOrderByWithRelationInput[]
    cursor?: NodeConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NodeConfigScalarFieldEnum | NodeConfigScalarFieldEnum[]
  }

  /**
   * User.activityLogs
   */
  export type User$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model NodeConfig
   */

  export type AggregateNodeConfig = {
    _count: NodeConfigCountAggregateOutputType | null
    _avg: NodeConfigAvgAggregateOutputType | null
    _sum: NodeConfigSumAggregateOutputType | null
    _min: NodeConfigMinAggregateOutputType | null
    _max: NodeConfigMaxAggregateOutputType | null
  }

  export type NodeConfigAvgAggregateOutputType = {
    port: number | null
  }

  export type NodeConfigSumAggregateOutputType = {
    port: number | null
  }

  export type NodeConfigMinAggregateOutputType = {
    id: string | null
    userId: string | null
    nodeAlias: string | null
    host: string | null
    port: number | null
    network: string | null
    isDefault: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NodeConfigMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    nodeAlias: string | null
    host: string | null
    port: number | null
    network: string | null
    isDefault: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NodeConfigCountAggregateOutputType = {
    id: number
    userId: number
    nodeAlias: number
    host: number
    port: number
    network: number
    isDefault: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NodeConfigAvgAggregateInputType = {
    port?: true
  }

  export type NodeConfigSumAggregateInputType = {
    port?: true
  }

  export type NodeConfigMinAggregateInputType = {
    id?: true
    userId?: true
    nodeAlias?: true
    host?: true
    port?: true
    network?: true
    isDefault?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NodeConfigMaxAggregateInputType = {
    id?: true
    userId?: true
    nodeAlias?: true
    host?: true
    port?: true
    network?: true
    isDefault?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NodeConfigCountAggregateInputType = {
    id?: true
    userId?: true
    nodeAlias?: true
    host?: true
    port?: true
    network?: true
    isDefault?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NodeConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NodeConfig to aggregate.
     */
    where?: NodeConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NodeConfigs to fetch.
     */
    orderBy?: NodeConfigOrderByWithRelationInput | NodeConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NodeConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NodeConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NodeConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NodeConfigs
    **/
    _count?: true | NodeConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NodeConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NodeConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NodeConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NodeConfigMaxAggregateInputType
  }

  export type GetNodeConfigAggregateType<T extends NodeConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateNodeConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNodeConfig[P]>
      : GetScalarType<T[P], AggregateNodeConfig[P]>
  }




  export type NodeConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodeConfigWhereInput
    orderBy?: NodeConfigOrderByWithAggregationInput | NodeConfigOrderByWithAggregationInput[]
    by: NodeConfigScalarFieldEnum[] | NodeConfigScalarFieldEnum
    having?: NodeConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NodeConfigCountAggregateInputType | true
    _avg?: NodeConfigAvgAggregateInputType
    _sum?: NodeConfigSumAggregateInputType
    _min?: NodeConfigMinAggregateInputType
    _max?: NodeConfigMaxAggregateInputType
  }

  export type NodeConfigGroupByOutputType = {
    id: string
    userId: string
    nodeAlias: string
    host: string
    port: number
    network: string
    isDefault: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: NodeConfigCountAggregateOutputType | null
    _avg: NodeConfigAvgAggregateOutputType | null
    _sum: NodeConfigSumAggregateOutputType | null
    _min: NodeConfigMinAggregateOutputType | null
    _max: NodeConfigMaxAggregateOutputType | null
  }

  type GetNodeConfigGroupByPayload<T extends NodeConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NodeConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NodeConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NodeConfigGroupByOutputType[P]>
            : GetScalarType<T[P], NodeConfigGroupByOutputType[P]>
        }
      >
    >


  export type NodeConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nodeAlias?: boolean
    host?: boolean
    port?: boolean
    network?: boolean
    isDefault?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nodeConfig"]>

  export type NodeConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nodeAlias?: boolean
    host?: boolean
    port?: boolean
    network?: boolean
    isDefault?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nodeConfig"]>

  export type NodeConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nodeAlias?: boolean
    host?: boolean
    port?: boolean
    network?: boolean
    isDefault?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nodeConfig"]>

  export type NodeConfigSelectScalar = {
    id?: boolean
    userId?: boolean
    nodeAlias?: boolean
    host?: boolean
    port?: boolean
    network?: boolean
    isDefault?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NodeConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "nodeAlias" | "host" | "port" | "network" | "isDefault" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["nodeConfig"]>
  export type NodeConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NodeConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NodeConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NodeConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NodeConfig"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      nodeAlias: string
      host: string
      port: number
      network: string
      isDefault: boolean
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["nodeConfig"]>
    composites: {}
  }

  type NodeConfigGetPayload<S extends boolean | null | undefined | NodeConfigDefaultArgs> = $Result.GetResult<Prisma.$NodeConfigPayload, S>

  type NodeConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NodeConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NodeConfigCountAggregateInputType | true
    }

  export interface NodeConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NodeConfig'], meta: { name: 'NodeConfig' } }
    /**
     * Find zero or one NodeConfig that matches the filter.
     * @param {NodeConfigFindUniqueArgs} args - Arguments to find a NodeConfig
     * @example
     * // Get one NodeConfig
     * const nodeConfig = await prisma.nodeConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NodeConfigFindUniqueArgs>(args: SelectSubset<T, NodeConfigFindUniqueArgs<ExtArgs>>): Prisma__NodeConfigClient<$Result.GetResult<Prisma.$NodeConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NodeConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NodeConfigFindUniqueOrThrowArgs} args - Arguments to find a NodeConfig
     * @example
     * // Get one NodeConfig
     * const nodeConfig = await prisma.nodeConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NodeConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, NodeConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NodeConfigClient<$Result.GetResult<Prisma.$NodeConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NodeConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeConfigFindFirstArgs} args - Arguments to find a NodeConfig
     * @example
     * // Get one NodeConfig
     * const nodeConfig = await prisma.nodeConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NodeConfigFindFirstArgs>(args?: SelectSubset<T, NodeConfigFindFirstArgs<ExtArgs>>): Prisma__NodeConfigClient<$Result.GetResult<Prisma.$NodeConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NodeConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeConfigFindFirstOrThrowArgs} args - Arguments to find a NodeConfig
     * @example
     * // Get one NodeConfig
     * const nodeConfig = await prisma.nodeConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NodeConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, NodeConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__NodeConfigClient<$Result.GetResult<Prisma.$NodeConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NodeConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NodeConfigs
     * const nodeConfigs = await prisma.nodeConfig.findMany()
     * 
     * // Get first 10 NodeConfigs
     * const nodeConfigs = await prisma.nodeConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nodeConfigWithIdOnly = await prisma.nodeConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NodeConfigFindManyArgs>(args?: SelectSubset<T, NodeConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodeConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NodeConfig.
     * @param {NodeConfigCreateArgs} args - Arguments to create a NodeConfig.
     * @example
     * // Create one NodeConfig
     * const NodeConfig = await prisma.nodeConfig.create({
     *   data: {
     *     // ... data to create a NodeConfig
     *   }
     * })
     * 
     */
    create<T extends NodeConfigCreateArgs>(args: SelectSubset<T, NodeConfigCreateArgs<ExtArgs>>): Prisma__NodeConfigClient<$Result.GetResult<Prisma.$NodeConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NodeConfigs.
     * @param {NodeConfigCreateManyArgs} args - Arguments to create many NodeConfigs.
     * @example
     * // Create many NodeConfigs
     * const nodeConfig = await prisma.nodeConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NodeConfigCreateManyArgs>(args?: SelectSubset<T, NodeConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NodeConfigs and returns the data saved in the database.
     * @param {NodeConfigCreateManyAndReturnArgs} args - Arguments to create many NodeConfigs.
     * @example
     * // Create many NodeConfigs
     * const nodeConfig = await prisma.nodeConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NodeConfigs and only return the `id`
     * const nodeConfigWithIdOnly = await prisma.nodeConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NodeConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, NodeConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodeConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NodeConfig.
     * @param {NodeConfigDeleteArgs} args - Arguments to delete one NodeConfig.
     * @example
     * // Delete one NodeConfig
     * const NodeConfig = await prisma.nodeConfig.delete({
     *   where: {
     *     // ... filter to delete one NodeConfig
     *   }
     * })
     * 
     */
    delete<T extends NodeConfigDeleteArgs>(args: SelectSubset<T, NodeConfigDeleteArgs<ExtArgs>>): Prisma__NodeConfigClient<$Result.GetResult<Prisma.$NodeConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NodeConfig.
     * @param {NodeConfigUpdateArgs} args - Arguments to update one NodeConfig.
     * @example
     * // Update one NodeConfig
     * const nodeConfig = await prisma.nodeConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NodeConfigUpdateArgs>(args: SelectSubset<T, NodeConfigUpdateArgs<ExtArgs>>): Prisma__NodeConfigClient<$Result.GetResult<Prisma.$NodeConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NodeConfigs.
     * @param {NodeConfigDeleteManyArgs} args - Arguments to filter NodeConfigs to delete.
     * @example
     * // Delete a few NodeConfigs
     * const { count } = await prisma.nodeConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NodeConfigDeleteManyArgs>(args?: SelectSubset<T, NodeConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NodeConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NodeConfigs
     * const nodeConfig = await prisma.nodeConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NodeConfigUpdateManyArgs>(args: SelectSubset<T, NodeConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NodeConfigs and returns the data updated in the database.
     * @param {NodeConfigUpdateManyAndReturnArgs} args - Arguments to update many NodeConfigs.
     * @example
     * // Update many NodeConfigs
     * const nodeConfig = await prisma.nodeConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NodeConfigs and only return the `id`
     * const nodeConfigWithIdOnly = await prisma.nodeConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NodeConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, NodeConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodeConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NodeConfig.
     * @param {NodeConfigUpsertArgs} args - Arguments to update or create a NodeConfig.
     * @example
     * // Update or create a NodeConfig
     * const nodeConfig = await prisma.nodeConfig.upsert({
     *   create: {
     *     // ... data to create a NodeConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NodeConfig we want to update
     *   }
     * })
     */
    upsert<T extends NodeConfigUpsertArgs>(args: SelectSubset<T, NodeConfigUpsertArgs<ExtArgs>>): Prisma__NodeConfigClient<$Result.GetResult<Prisma.$NodeConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NodeConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeConfigCountArgs} args - Arguments to filter NodeConfigs to count.
     * @example
     * // Count the number of NodeConfigs
     * const count = await prisma.nodeConfig.count({
     *   where: {
     *     // ... the filter for the NodeConfigs we want to count
     *   }
     * })
    **/
    count<T extends NodeConfigCountArgs>(
      args?: Subset<T, NodeConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NodeConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NodeConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NodeConfigAggregateArgs>(args: Subset<T, NodeConfigAggregateArgs>): Prisma.PrismaPromise<GetNodeConfigAggregateType<T>>

    /**
     * Group by NodeConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NodeConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NodeConfigGroupByArgs['orderBy'] }
        : { orderBy?: NodeConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NodeConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNodeConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NodeConfig model
   */
  readonly fields: NodeConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NodeConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NodeConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NodeConfig model
   */
  interface NodeConfigFieldRefs {
    readonly id: FieldRef<"NodeConfig", 'String'>
    readonly userId: FieldRef<"NodeConfig", 'String'>
    readonly nodeAlias: FieldRef<"NodeConfig", 'String'>
    readonly host: FieldRef<"NodeConfig", 'String'>
    readonly port: FieldRef<"NodeConfig", 'Int'>
    readonly network: FieldRef<"NodeConfig", 'String'>
    readonly isDefault: FieldRef<"NodeConfig", 'Boolean'>
    readonly isActive: FieldRef<"NodeConfig", 'Boolean'>
    readonly createdAt: FieldRef<"NodeConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"NodeConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NodeConfig findUnique
   */
  export type NodeConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeConfig
     */
    select?: NodeConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeConfig
     */
    omit?: NodeConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeConfigInclude<ExtArgs> | null
    /**
     * Filter, which NodeConfig to fetch.
     */
    where: NodeConfigWhereUniqueInput
  }

  /**
   * NodeConfig findUniqueOrThrow
   */
  export type NodeConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeConfig
     */
    select?: NodeConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeConfig
     */
    omit?: NodeConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeConfigInclude<ExtArgs> | null
    /**
     * Filter, which NodeConfig to fetch.
     */
    where: NodeConfigWhereUniqueInput
  }

  /**
   * NodeConfig findFirst
   */
  export type NodeConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeConfig
     */
    select?: NodeConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeConfig
     */
    omit?: NodeConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeConfigInclude<ExtArgs> | null
    /**
     * Filter, which NodeConfig to fetch.
     */
    where?: NodeConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NodeConfigs to fetch.
     */
    orderBy?: NodeConfigOrderByWithRelationInput | NodeConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NodeConfigs.
     */
    cursor?: NodeConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NodeConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NodeConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NodeConfigs.
     */
    distinct?: NodeConfigScalarFieldEnum | NodeConfigScalarFieldEnum[]
  }

  /**
   * NodeConfig findFirstOrThrow
   */
  export type NodeConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeConfig
     */
    select?: NodeConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeConfig
     */
    omit?: NodeConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeConfigInclude<ExtArgs> | null
    /**
     * Filter, which NodeConfig to fetch.
     */
    where?: NodeConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NodeConfigs to fetch.
     */
    orderBy?: NodeConfigOrderByWithRelationInput | NodeConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NodeConfigs.
     */
    cursor?: NodeConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NodeConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NodeConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NodeConfigs.
     */
    distinct?: NodeConfigScalarFieldEnum | NodeConfigScalarFieldEnum[]
  }

  /**
   * NodeConfig findMany
   */
  export type NodeConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeConfig
     */
    select?: NodeConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeConfig
     */
    omit?: NodeConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeConfigInclude<ExtArgs> | null
    /**
     * Filter, which NodeConfigs to fetch.
     */
    where?: NodeConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NodeConfigs to fetch.
     */
    orderBy?: NodeConfigOrderByWithRelationInput | NodeConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NodeConfigs.
     */
    cursor?: NodeConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NodeConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NodeConfigs.
     */
    skip?: number
    distinct?: NodeConfigScalarFieldEnum | NodeConfigScalarFieldEnum[]
  }

  /**
   * NodeConfig create
   */
  export type NodeConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeConfig
     */
    select?: NodeConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeConfig
     */
    omit?: NodeConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a NodeConfig.
     */
    data: XOR<NodeConfigCreateInput, NodeConfigUncheckedCreateInput>
  }

  /**
   * NodeConfig createMany
   */
  export type NodeConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NodeConfigs.
     */
    data: NodeConfigCreateManyInput | NodeConfigCreateManyInput[]
  }

  /**
   * NodeConfig createManyAndReturn
   */
  export type NodeConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeConfig
     */
    select?: NodeConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NodeConfig
     */
    omit?: NodeConfigOmit<ExtArgs> | null
    /**
     * The data used to create many NodeConfigs.
     */
    data: NodeConfigCreateManyInput | NodeConfigCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NodeConfig update
   */
  export type NodeConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeConfig
     */
    select?: NodeConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeConfig
     */
    omit?: NodeConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a NodeConfig.
     */
    data: XOR<NodeConfigUpdateInput, NodeConfigUncheckedUpdateInput>
    /**
     * Choose, which NodeConfig to update.
     */
    where: NodeConfigWhereUniqueInput
  }

  /**
   * NodeConfig updateMany
   */
  export type NodeConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NodeConfigs.
     */
    data: XOR<NodeConfigUpdateManyMutationInput, NodeConfigUncheckedUpdateManyInput>
    /**
     * Filter which NodeConfigs to update
     */
    where?: NodeConfigWhereInput
    /**
     * Limit how many NodeConfigs to update.
     */
    limit?: number
  }

  /**
   * NodeConfig updateManyAndReturn
   */
  export type NodeConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeConfig
     */
    select?: NodeConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NodeConfig
     */
    omit?: NodeConfigOmit<ExtArgs> | null
    /**
     * The data used to update NodeConfigs.
     */
    data: XOR<NodeConfigUpdateManyMutationInput, NodeConfigUncheckedUpdateManyInput>
    /**
     * Filter which NodeConfigs to update
     */
    where?: NodeConfigWhereInput
    /**
     * Limit how many NodeConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NodeConfig upsert
   */
  export type NodeConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeConfig
     */
    select?: NodeConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeConfig
     */
    omit?: NodeConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the NodeConfig to update in case it exists.
     */
    where: NodeConfigWhereUniqueInput
    /**
     * In case the NodeConfig found by the `where` argument doesn't exist, create a new NodeConfig with this data.
     */
    create: XOR<NodeConfigCreateInput, NodeConfigUncheckedCreateInput>
    /**
     * In case the NodeConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NodeConfigUpdateInput, NodeConfigUncheckedUpdateInput>
  }

  /**
   * NodeConfig delete
   */
  export type NodeConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeConfig
     */
    select?: NodeConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeConfig
     */
    omit?: NodeConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeConfigInclude<ExtArgs> | null
    /**
     * Filter which NodeConfig to delete.
     */
    where: NodeConfigWhereUniqueInput
  }

  /**
   * NodeConfig deleteMany
   */
  export type NodeConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NodeConfigs to delete
     */
    where?: NodeConfigWhereInput
    /**
     * Limit how many NodeConfigs to delete.
     */
    limit?: number
  }

  /**
   * NodeConfig without action
   */
  export type NodeConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeConfig
     */
    select?: NodeConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeConfig
     */
    omit?: NodeConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeConfigInclude<ExtArgs> | null
  }


  /**
   * Model ChannelHistory
   */

  export type AggregateChannelHistory = {
    _count: ChannelHistoryCountAggregateOutputType | null
    _avg: ChannelHistoryAvgAggregateOutputType | null
    _sum: ChannelHistorySumAggregateOutputType | null
    _min: ChannelHistoryMinAggregateOutputType | null
    _max: ChannelHistoryMaxAggregateOutputType | null
  }

  export type ChannelHistoryAvgAggregateOutputType = {
    capacity: number | null
    localBalance: number | null
    remoteBalance: number | null
    openHeight: number | null
    closeHeight: number | null
  }

  export type ChannelHistorySumAggregateOutputType = {
    capacity: bigint | null
    localBalance: bigint | null
    remoteBalance: bigint | null
    openHeight: number | null
    closeHeight: number | null
  }

  export type ChannelHistoryMinAggregateOutputType = {
    id: string | null
    channelPoint: string | null
    peerPubkey: string | null
    capacity: bigint | null
    localBalance: bigint | null
    remoteBalance: bigint | null
    status: $Enums.ChannelStatus | null
    isActive: boolean | null
    openHeight: number | null
    closeHeight: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChannelHistoryMaxAggregateOutputType = {
    id: string | null
    channelPoint: string | null
    peerPubkey: string | null
    capacity: bigint | null
    localBalance: bigint | null
    remoteBalance: bigint | null
    status: $Enums.ChannelStatus | null
    isActive: boolean | null
    openHeight: number | null
    closeHeight: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChannelHistoryCountAggregateOutputType = {
    id: number
    channelPoint: number
    peerPubkey: number
    capacity: number
    localBalance: number
    remoteBalance: number
    status: number
    isActive: number
    openHeight: number
    closeHeight: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChannelHistoryAvgAggregateInputType = {
    capacity?: true
    localBalance?: true
    remoteBalance?: true
    openHeight?: true
    closeHeight?: true
  }

  export type ChannelHistorySumAggregateInputType = {
    capacity?: true
    localBalance?: true
    remoteBalance?: true
    openHeight?: true
    closeHeight?: true
  }

  export type ChannelHistoryMinAggregateInputType = {
    id?: true
    channelPoint?: true
    peerPubkey?: true
    capacity?: true
    localBalance?: true
    remoteBalance?: true
    status?: true
    isActive?: true
    openHeight?: true
    closeHeight?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChannelHistoryMaxAggregateInputType = {
    id?: true
    channelPoint?: true
    peerPubkey?: true
    capacity?: true
    localBalance?: true
    remoteBalance?: true
    status?: true
    isActive?: true
    openHeight?: true
    closeHeight?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChannelHistoryCountAggregateInputType = {
    id?: true
    channelPoint?: true
    peerPubkey?: true
    capacity?: true
    localBalance?: true
    remoteBalance?: true
    status?: true
    isActive?: true
    openHeight?: true
    closeHeight?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChannelHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChannelHistory to aggregate.
     */
    where?: ChannelHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelHistories to fetch.
     */
    orderBy?: ChannelHistoryOrderByWithRelationInput | ChannelHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChannelHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChannelHistories
    **/
    _count?: true | ChannelHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChannelHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChannelHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelHistoryMaxAggregateInputType
  }

  export type GetChannelHistoryAggregateType<T extends ChannelHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateChannelHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannelHistory[P]>
      : GetScalarType<T[P], AggregateChannelHistory[P]>
  }




  export type ChannelHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelHistoryWhereInput
    orderBy?: ChannelHistoryOrderByWithAggregationInput | ChannelHistoryOrderByWithAggregationInput[]
    by: ChannelHistoryScalarFieldEnum[] | ChannelHistoryScalarFieldEnum
    having?: ChannelHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelHistoryCountAggregateInputType | true
    _avg?: ChannelHistoryAvgAggregateInputType
    _sum?: ChannelHistorySumAggregateInputType
    _min?: ChannelHistoryMinAggregateInputType
    _max?: ChannelHistoryMaxAggregateInputType
  }

  export type ChannelHistoryGroupByOutputType = {
    id: string
    channelPoint: string
    peerPubkey: string
    capacity: bigint
    localBalance: bigint
    remoteBalance: bigint
    status: $Enums.ChannelStatus
    isActive: boolean
    openHeight: number | null
    closeHeight: number | null
    createdAt: Date
    updatedAt: Date
    _count: ChannelHistoryCountAggregateOutputType | null
    _avg: ChannelHistoryAvgAggregateOutputType | null
    _sum: ChannelHistorySumAggregateOutputType | null
    _min: ChannelHistoryMinAggregateOutputType | null
    _max: ChannelHistoryMaxAggregateOutputType | null
  }

  type GetChannelHistoryGroupByPayload<T extends ChannelHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ChannelHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelPoint?: boolean
    peerPubkey?: boolean
    capacity?: boolean
    localBalance?: boolean
    remoteBalance?: boolean
    status?: boolean
    isActive?: boolean
    openHeight?: boolean
    closeHeight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    statusUpdates?: boolean | ChannelHistory$statusUpdatesArgs<ExtArgs>
    _count?: boolean | ChannelHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channelHistory"]>

  export type ChannelHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelPoint?: boolean
    peerPubkey?: boolean
    capacity?: boolean
    localBalance?: boolean
    remoteBalance?: boolean
    status?: boolean
    isActive?: boolean
    openHeight?: boolean
    closeHeight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["channelHistory"]>

  export type ChannelHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelPoint?: boolean
    peerPubkey?: boolean
    capacity?: boolean
    localBalance?: boolean
    remoteBalance?: boolean
    status?: boolean
    isActive?: boolean
    openHeight?: boolean
    closeHeight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["channelHistory"]>

  export type ChannelHistorySelectScalar = {
    id?: boolean
    channelPoint?: boolean
    peerPubkey?: boolean
    capacity?: boolean
    localBalance?: boolean
    remoteBalance?: boolean
    status?: boolean
    isActive?: boolean
    openHeight?: boolean
    closeHeight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChannelHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "channelPoint" | "peerPubkey" | "capacity" | "localBalance" | "remoteBalance" | "status" | "isActive" | "openHeight" | "closeHeight" | "createdAt" | "updatedAt", ExtArgs["result"]["channelHistory"]>
  export type ChannelHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statusUpdates?: boolean | ChannelHistory$statusUpdatesArgs<ExtArgs>
    _count?: boolean | ChannelHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChannelHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChannelHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChannelHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChannelHistory"
    objects: {
      statusUpdates: Prisma.$ChannelStatusUpdatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      channelPoint: string
      peerPubkey: string
      capacity: bigint
      localBalance: bigint
      remoteBalance: bigint
      status: $Enums.ChannelStatus
      isActive: boolean
      openHeight: number | null
      closeHeight: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["channelHistory"]>
    composites: {}
  }

  type ChannelHistoryGetPayload<S extends boolean | null | undefined | ChannelHistoryDefaultArgs> = $Result.GetResult<Prisma.$ChannelHistoryPayload, S>

  type ChannelHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChannelHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChannelHistoryCountAggregateInputType | true
    }

  export interface ChannelHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChannelHistory'], meta: { name: 'ChannelHistory' } }
    /**
     * Find zero or one ChannelHistory that matches the filter.
     * @param {ChannelHistoryFindUniqueArgs} args - Arguments to find a ChannelHistory
     * @example
     * // Get one ChannelHistory
     * const channelHistory = await prisma.channelHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChannelHistoryFindUniqueArgs>(args: SelectSubset<T, ChannelHistoryFindUniqueArgs<ExtArgs>>): Prisma__ChannelHistoryClient<$Result.GetResult<Prisma.$ChannelHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChannelHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChannelHistoryFindUniqueOrThrowArgs} args - Arguments to find a ChannelHistory
     * @example
     * // Get one ChannelHistory
     * const channelHistory = await prisma.channelHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChannelHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ChannelHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChannelHistoryClient<$Result.GetResult<Prisma.$ChannelHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChannelHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelHistoryFindFirstArgs} args - Arguments to find a ChannelHistory
     * @example
     * // Get one ChannelHistory
     * const channelHistory = await prisma.channelHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChannelHistoryFindFirstArgs>(args?: SelectSubset<T, ChannelHistoryFindFirstArgs<ExtArgs>>): Prisma__ChannelHistoryClient<$Result.GetResult<Prisma.$ChannelHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChannelHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelHistoryFindFirstOrThrowArgs} args - Arguments to find a ChannelHistory
     * @example
     * // Get one ChannelHistory
     * const channelHistory = await prisma.channelHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChannelHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ChannelHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChannelHistoryClient<$Result.GetResult<Prisma.$ChannelHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChannelHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChannelHistories
     * const channelHistories = await prisma.channelHistory.findMany()
     * 
     * // Get first 10 ChannelHistories
     * const channelHistories = await prisma.channelHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelHistoryWithIdOnly = await prisma.channelHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChannelHistoryFindManyArgs>(args?: SelectSubset<T, ChannelHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChannelHistory.
     * @param {ChannelHistoryCreateArgs} args - Arguments to create a ChannelHistory.
     * @example
     * // Create one ChannelHistory
     * const ChannelHistory = await prisma.channelHistory.create({
     *   data: {
     *     // ... data to create a ChannelHistory
     *   }
     * })
     * 
     */
    create<T extends ChannelHistoryCreateArgs>(args: SelectSubset<T, ChannelHistoryCreateArgs<ExtArgs>>): Prisma__ChannelHistoryClient<$Result.GetResult<Prisma.$ChannelHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChannelHistories.
     * @param {ChannelHistoryCreateManyArgs} args - Arguments to create many ChannelHistories.
     * @example
     * // Create many ChannelHistories
     * const channelHistory = await prisma.channelHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChannelHistoryCreateManyArgs>(args?: SelectSubset<T, ChannelHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChannelHistories and returns the data saved in the database.
     * @param {ChannelHistoryCreateManyAndReturnArgs} args - Arguments to create many ChannelHistories.
     * @example
     * // Create many ChannelHistories
     * const channelHistory = await prisma.channelHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChannelHistories and only return the `id`
     * const channelHistoryWithIdOnly = await prisma.channelHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChannelHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ChannelHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChannelHistory.
     * @param {ChannelHistoryDeleteArgs} args - Arguments to delete one ChannelHistory.
     * @example
     * // Delete one ChannelHistory
     * const ChannelHistory = await prisma.channelHistory.delete({
     *   where: {
     *     // ... filter to delete one ChannelHistory
     *   }
     * })
     * 
     */
    delete<T extends ChannelHistoryDeleteArgs>(args: SelectSubset<T, ChannelHistoryDeleteArgs<ExtArgs>>): Prisma__ChannelHistoryClient<$Result.GetResult<Prisma.$ChannelHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChannelHistory.
     * @param {ChannelHistoryUpdateArgs} args - Arguments to update one ChannelHistory.
     * @example
     * // Update one ChannelHistory
     * const channelHistory = await prisma.channelHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChannelHistoryUpdateArgs>(args: SelectSubset<T, ChannelHistoryUpdateArgs<ExtArgs>>): Prisma__ChannelHistoryClient<$Result.GetResult<Prisma.$ChannelHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChannelHistories.
     * @param {ChannelHistoryDeleteManyArgs} args - Arguments to filter ChannelHistories to delete.
     * @example
     * // Delete a few ChannelHistories
     * const { count } = await prisma.channelHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChannelHistoryDeleteManyArgs>(args?: SelectSubset<T, ChannelHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChannelHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChannelHistories
     * const channelHistory = await prisma.channelHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChannelHistoryUpdateManyArgs>(args: SelectSubset<T, ChannelHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChannelHistories and returns the data updated in the database.
     * @param {ChannelHistoryUpdateManyAndReturnArgs} args - Arguments to update many ChannelHistories.
     * @example
     * // Update many ChannelHistories
     * const channelHistory = await prisma.channelHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChannelHistories and only return the `id`
     * const channelHistoryWithIdOnly = await prisma.channelHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChannelHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ChannelHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChannelHistory.
     * @param {ChannelHistoryUpsertArgs} args - Arguments to update or create a ChannelHistory.
     * @example
     * // Update or create a ChannelHistory
     * const channelHistory = await prisma.channelHistory.upsert({
     *   create: {
     *     // ... data to create a ChannelHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChannelHistory we want to update
     *   }
     * })
     */
    upsert<T extends ChannelHistoryUpsertArgs>(args: SelectSubset<T, ChannelHistoryUpsertArgs<ExtArgs>>): Prisma__ChannelHistoryClient<$Result.GetResult<Prisma.$ChannelHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChannelHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelHistoryCountArgs} args - Arguments to filter ChannelHistories to count.
     * @example
     * // Count the number of ChannelHistories
     * const count = await prisma.channelHistory.count({
     *   where: {
     *     // ... the filter for the ChannelHistories we want to count
     *   }
     * })
    **/
    count<T extends ChannelHistoryCountArgs>(
      args?: Subset<T, ChannelHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChannelHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChannelHistoryAggregateArgs>(args: Subset<T, ChannelHistoryAggregateArgs>): Prisma.PrismaPromise<GetChannelHistoryAggregateType<T>>

    /**
     * Group by ChannelHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChannelHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ChannelHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChannelHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChannelHistory model
   */
  readonly fields: ChannelHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChannelHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChannelHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    statusUpdates<T extends ChannelHistory$statusUpdatesArgs<ExtArgs> = {}>(args?: Subset<T, ChannelHistory$statusUpdatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelStatusUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChannelHistory model
   */
  interface ChannelHistoryFieldRefs {
    readonly id: FieldRef<"ChannelHistory", 'String'>
    readonly channelPoint: FieldRef<"ChannelHistory", 'String'>
    readonly peerPubkey: FieldRef<"ChannelHistory", 'String'>
    readonly capacity: FieldRef<"ChannelHistory", 'BigInt'>
    readonly localBalance: FieldRef<"ChannelHistory", 'BigInt'>
    readonly remoteBalance: FieldRef<"ChannelHistory", 'BigInt'>
    readonly status: FieldRef<"ChannelHistory", 'ChannelStatus'>
    readonly isActive: FieldRef<"ChannelHistory", 'Boolean'>
    readonly openHeight: FieldRef<"ChannelHistory", 'Int'>
    readonly closeHeight: FieldRef<"ChannelHistory", 'Int'>
    readonly createdAt: FieldRef<"ChannelHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"ChannelHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChannelHistory findUnique
   */
  export type ChannelHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelHistory
     */
    select?: ChannelHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelHistory
     */
    omit?: ChannelHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ChannelHistory to fetch.
     */
    where: ChannelHistoryWhereUniqueInput
  }

  /**
   * ChannelHistory findUniqueOrThrow
   */
  export type ChannelHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelHistory
     */
    select?: ChannelHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelHistory
     */
    omit?: ChannelHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ChannelHistory to fetch.
     */
    where: ChannelHistoryWhereUniqueInput
  }

  /**
   * ChannelHistory findFirst
   */
  export type ChannelHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelHistory
     */
    select?: ChannelHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelHistory
     */
    omit?: ChannelHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ChannelHistory to fetch.
     */
    where?: ChannelHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelHistories to fetch.
     */
    orderBy?: ChannelHistoryOrderByWithRelationInput | ChannelHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChannelHistories.
     */
    cursor?: ChannelHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChannelHistories.
     */
    distinct?: ChannelHistoryScalarFieldEnum | ChannelHistoryScalarFieldEnum[]
  }

  /**
   * ChannelHistory findFirstOrThrow
   */
  export type ChannelHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelHistory
     */
    select?: ChannelHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelHistory
     */
    omit?: ChannelHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ChannelHistory to fetch.
     */
    where?: ChannelHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelHistories to fetch.
     */
    orderBy?: ChannelHistoryOrderByWithRelationInput | ChannelHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChannelHistories.
     */
    cursor?: ChannelHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChannelHistories.
     */
    distinct?: ChannelHistoryScalarFieldEnum | ChannelHistoryScalarFieldEnum[]
  }

  /**
   * ChannelHistory findMany
   */
  export type ChannelHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelHistory
     */
    select?: ChannelHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelHistory
     */
    omit?: ChannelHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ChannelHistories to fetch.
     */
    where?: ChannelHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelHistories to fetch.
     */
    orderBy?: ChannelHistoryOrderByWithRelationInput | ChannelHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChannelHistories.
     */
    cursor?: ChannelHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelHistories.
     */
    skip?: number
    distinct?: ChannelHistoryScalarFieldEnum | ChannelHistoryScalarFieldEnum[]
  }

  /**
   * ChannelHistory create
   */
  export type ChannelHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelHistory
     */
    select?: ChannelHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelHistory
     */
    omit?: ChannelHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ChannelHistory.
     */
    data: XOR<ChannelHistoryCreateInput, ChannelHistoryUncheckedCreateInput>
  }

  /**
   * ChannelHistory createMany
   */
  export type ChannelHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChannelHistories.
     */
    data: ChannelHistoryCreateManyInput | ChannelHistoryCreateManyInput[]
  }

  /**
   * ChannelHistory createManyAndReturn
   */
  export type ChannelHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelHistory
     */
    select?: ChannelHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelHistory
     */
    omit?: ChannelHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ChannelHistories.
     */
    data: ChannelHistoryCreateManyInput | ChannelHistoryCreateManyInput[]
  }

  /**
   * ChannelHistory update
   */
  export type ChannelHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelHistory
     */
    select?: ChannelHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelHistory
     */
    omit?: ChannelHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ChannelHistory.
     */
    data: XOR<ChannelHistoryUpdateInput, ChannelHistoryUncheckedUpdateInput>
    /**
     * Choose, which ChannelHistory to update.
     */
    where: ChannelHistoryWhereUniqueInput
  }

  /**
   * ChannelHistory updateMany
   */
  export type ChannelHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChannelHistories.
     */
    data: XOR<ChannelHistoryUpdateManyMutationInput, ChannelHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ChannelHistories to update
     */
    where?: ChannelHistoryWhereInput
    /**
     * Limit how many ChannelHistories to update.
     */
    limit?: number
  }

  /**
   * ChannelHistory updateManyAndReturn
   */
  export type ChannelHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelHistory
     */
    select?: ChannelHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelHistory
     */
    omit?: ChannelHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ChannelHistories.
     */
    data: XOR<ChannelHistoryUpdateManyMutationInput, ChannelHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ChannelHistories to update
     */
    where?: ChannelHistoryWhereInput
    /**
     * Limit how many ChannelHistories to update.
     */
    limit?: number
  }

  /**
   * ChannelHistory upsert
   */
  export type ChannelHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelHistory
     */
    select?: ChannelHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelHistory
     */
    omit?: ChannelHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ChannelHistory to update in case it exists.
     */
    where: ChannelHistoryWhereUniqueInput
    /**
     * In case the ChannelHistory found by the `where` argument doesn't exist, create a new ChannelHistory with this data.
     */
    create: XOR<ChannelHistoryCreateInput, ChannelHistoryUncheckedCreateInput>
    /**
     * In case the ChannelHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChannelHistoryUpdateInput, ChannelHistoryUncheckedUpdateInput>
  }

  /**
   * ChannelHistory delete
   */
  export type ChannelHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelHistory
     */
    select?: ChannelHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelHistory
     */
    omit?: ChannelHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelHistoryInclude<ExtArgs> | null
    /**
     * Filter which ChannelHistory to delete.
     */
    where: ChannelHistoryWhereUniqueInput
  }

  /**
   * ChannelHistory deleteMany
   */
  export type ChannelHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChannelHistories to delete
     */
    where?: ChannelHistoryWhereInput
    /**
     * Limit how many ChannelHistories to delete.
     */
    limit?: number
  }

  /**
   * ChannelHistory.statusUpdates
   */
  export type ChannelHistory$statusUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelStatusUpdate
     */
    select?: ChannelStatusUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelStatusUpdate
     */
    omit?: ChannelStatusUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelStatusUpdateInclude<ExtArgs> | null
    where?: ChannelStatusUpdateWhereInput
    orderBy?: ChannelStatusUpdateOrderByWithRelationInput | ChannelStatusUpdateOrderByWithRelationInput[]
    cursor?: ChannelStatusUpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelStatusUpdateScalarFieldEnum | ChannelStatusUpdateScalarFieldEnum[]
  }

  /**
   * ChannelHistory without action
   */
  export type ChannelHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelHistory
     */
    select?: ChannelHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelHistory
     */
    omit?: ChannelHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelHistoryInclude<ExtArgs> | null
  }


  /**
   * Model ChannelStatusUpdate
   */

  export type AggregateChannelStatusUpdate = {
    _count: ChannelStatusUpdateCountAggregateOutputType | null
    _avg: ChannelStatusUpdateAvgAggregateOutputType | null
    _sum: ChannelStatusUpdateSumAggregateOutputType | null
    _min: ChannelStatusUpdateMinAggregateOutputType | null
    _max: ChannelStatusUpdateMaxAggregateOutputType | null
  }

  export type ChannelStatusUpdateAvgAggregateOutputType = {
    blockHeight: number | null
    confirmations: number | null
  }

  export type ChannelStatusUpdateSumAggregateOutputType = {
    blockHeight: number | null
    confirmations: number | null
  }

  export type ChannelStatusUpdateMinAggregateOutputType = {
    id: string | null
    channelHistoryId: string | null
    previousStatus: $Enums.ChannelStatus | null
    newStatus: $Enums.ChannelStatus | null
    blockHeight: number | null
    confirmations: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type ChannelStatusUpdateMaxAggregateOutputType = {
    id: string | null
    channelHistoryId: string | null
    previousStatus: $Enums.ChannelStatus | null
    newStatus: $Enums.ChannelStatus | null
    blockHeight: number | null
    confirmations: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type ChannelStatusUpdateCountAggregateOutputType = {
    id: number
    channelHistoryId: number
    previousStatus: number
    newStatus: number
    blockHeight: number
    confirmations: number
    notes: number
    createdAt: number
    _all: number
  }


  export type ChannelStatusUpdateAvgAggregateInputType = {
    blockHeight?: true
    confirmations?: true
  }

  export type ChannelStatusUpdateSumAggregateInputType = {
    blockHeight?: true
    confirmations?: true
  }

  export type ChannelStatusUpdateMinAggregateInputType = {
    id?: true
    channelHistoryId?: true
    previousStatus?: true
    newStatus?: true
    blockHeight?: true
    confirmations?: true
    notes?: true
    createdAt?: true
  }

  export type ChannelStatusUpdateMaxAggregateInputType = {
    id?: true
    channelHistoryId?: true
    previousStatus?: true
    newStatus?: true
    blockHeight?: true
    confirmations?: true
    notes?: true
    createdAt?: true
  }

  export type ChannelStatusUpdateCountAggregateInputType = {
    id?: true
    channelHistoryId?: true
    previousStatus?: true
    newStatus?: true
    blockHeight?: true
    confirmations?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type ChannelStatusUpdateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChannelStatusUpdate to aggregate.
     */
    where?: ChannelStatusUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelStatusUpdates to fetch.
     */
    orderBy?: ChannelStatusUpdateOrderByWithRelationInput | ChannelStatusUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChannelStatusUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelStatusUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelStatusUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChannelStatusUpdates
    **/
    _count?: true | ChannelStatusUpdateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChannelStatusUpdateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChannelStatusUpdateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelStatusUpdateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelStatusUpdateMaxAggregateInputType
  }

  export type GetChannelStatusUpdateAggregateType<T extends ChannelStatusUpdateAggregateArgs> = {
        [P in keyof T & keyof AggregateChannelStatusUpdate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannelStatusUpdate[P]>
      : GetScalarType<T[P], AggregateChannelStatusUpdate[P]>
  }




  export type ChannelStatusUpdateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelStatusUpdateWhereInput
    orderBy?: ChannelStatusUpdateOrderByWithAggregationInput | ChannelStatusUpdateOrderByWithAggregationInput[]
    by: ChannelStatusUpdateScalarFieldEnum[] | ChannelStatusUpdateScalarFieldEnum
    having?: ChannelStatusUpdateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelStatusUpdateCountAggregateInputType | true
    _avg?: ChannelStatusUpdateAvgAggregateInputType
    _sum?: ChannelStatusUpdateSumAggregateInputType
    _min?: ChannelStatusUpdateMinAggregateInputType
    _max?: ChannelStatusUpdateMaxAggregateInputType
  }

  export type ChannelStatusUpdateGroupByOutputType = {
    id: string
    channelHistoryId: string
    previousStatus: $Enums.ChannelStatus | null
    newStatus: $Enums.ChannelStatus
    blockHeight: number | null
    confirmations: number | null
    notes: string | null
    createdAt: Date
    _count: ChannelStatusUpdateCountAggregateOutputType | null
    _avg: ChannelStatusUpdateAvgAggregateOutputType | null
    _sum: ChannelStatusUpdateSumAggregateOutputType | null
    _min: ChannelStatusUpdateMinAggregateOutputType | null
    _max: ChannelStatusUpdateMaxAggregateOutputType | null
  }

  type GetChannelStatusUpdateGroupByPayload<T extends ChannelStatusUpdateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelStatusUpdateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelStatusUpdateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelStatusUpdateGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelStatusUpdateGroupByOutputType[P]>
        }
      >
    >


  export type ChannelStatusUpdateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelHistoryId?: boolean
    previousStatus?: boolean
    newStatus?: boolean
    blockHeight?: boolean
    confirmations?: boolean
    notes?: boolean
    createdAt?: boolean
    channelHistory?: boolean | ChannelHistoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channelStatusUpdate"]>

  export type ChannelStatusUpdateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelHistoryId?: boolean
    previousStatus?: boolean
    newStatus?: boolean
    blockHeight?: boolean
    confirmations?: boolean
    notes?: boolean
    createdAt?: boolean
    channelHistory?: boolean | ChannelHistoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channelStatusUpdate"]>

  export type ChannelStatusUpdateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelHistoryId?: boolean
    previousStatus?: boolean
    newStatus?: boolean
    blockHeight?: boolean
    confirmations?: boolean
    notes?: boolean
    createdAt?: boolean
    channelHistory?: boolean | ChannelHistoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channelStatusUpdate"]>

  export type ChannelStatusUpdateSelectScalar = {
    id?: boolean
    channelHistoryId?: boolean
    previousStatus?: boolean
    newStatus?: boolean
    blockHeight?: boolean
    confirmations?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type ChannelStatusUpdateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "channelHistoryId" | "previousStatus" | "newStatus" | "blockHeight" | "confirmations" | "notes" | "createdAt", ExtArgs["result"]["channelStatusUpdate"]>
  export type ChannelStatusUpdateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channelHistory?: boolean | ChannelHistoryDefaultArgs<ExtArgs>
  }
  export type ChannelStatusUpdateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channelHistory?: boolean | ChannelHistoryDefaultArgs<ExtArgs>
  }
  export type ChannelStatusUpdateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channelHistory?: boolean | ChannelHistoryDefaultArgs<ExtArgs>
  }

  export type $ChannelStatusUpdatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChannelStatusUpdate"
    objects: {
      channelHistory: Prisma.$ChannelHistoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      channelHistoryId: string
      previousStatus: $Enums.ChannelStatus | null
      newStatus: $Enums.ChannelStatus
      blockHeight: number | null
      confirmations: number | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["channelStatusUpdate"]>
    composites: {}
  }

  type ChannelStatusUpdateGetPayload<S extends boolean | null | undefined | ChannelStatusUpdateDefaultArgs> = $Result.GetResult<Prisma.$ChannelStatusUpdatePayload, S>

  type ChannelStatusUpdateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChannelStatusUpdateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChannelStatusUpdateCountAggregateInputType | true
    }

  export interface ChannelStatusUpdateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChannelStatusUpdate'], meta: { name: 'ChannelStatusUpdate' } }
    /**
     * Find zero or one ChannelStatusUpdate that matches the filter.
     * @param {ChannelStatusUpdateFindUniqueArgs} args - Arguments to find a ChannelStatusUpdate
     * @example
     * // Get one ChannelStatusUpdate
     * const channelStatusUpdate = await prisma.channelStatusUpdate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChannelStatusUpdateFindUniqueArgs>(args: SelectSubset<T, ChannelStatusUpdateFindUniqueArgs<ExtArgs>>): Prisma__ChannelStatusUpdateClient<$Result.GetResult<Prisma.$ChannelStatusUpdatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChannelStatusUpdate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChannelStatusUpdateFindUniqueOrThrowArgs} args - Arguments to find a ChannelStatusUpdate
     * @example
     * // Get one ChannelStatusUpdate
     * const channelStatusUpdate = await prisma.channelStatusUpdate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChannelStatusUpdateFindUniqueOrThrowArgs>(args: SelectSubset<T, ChannelStatusUpdateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChannelStatusUpdateClient<$Result.GetResult<Prisma.$ChannelStatusUpdatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChannelStatusUpdate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelStatusUpdateFindFirstArgs} args - Arguments to find a ChannelStatusUpdate
     * @example
     * // Get one ChannelStatusUpdate
     * const channelStatusUpdate = await prisma.channelStatusUpdate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChannelStatusUpdateFindFirstArgs>(args?: SelectSubset<T, ChannelStatusUpdateFindFirstArgs<ExtArgs>>): Prisma__ChannelStatusUpdateClient<$Result.GetResult<Prisma.$ChannelStatusUpdatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChannelStatusUpdate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelStatusUpdateFindFirstOrThrowArgs} args - Arguments to find a ChannelStatusUpdate
     * @example
     * // Get one ChannelStatusUpdate
     * const channelStatusUpdate = await prisma.channelStatusUpdate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChannelStatusUpdateFindFirstOrThrowArgs>(args?: SelectSubset<T, ChannelStatusUpdateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChannelStatusUpdateClient<$Result.GetResult<Prisma.$ChannelStatusUpdatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChannelStatusUpdates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelStatusUpdateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChannelStatusUpdates
     * const channelStatusUpdates = await prisma.channelStatusUpdate.findMany()
     * 
     * // Get first 10 ChannelStatusUpdates
     * const channelStatusUpdates = await prisma.channelStatusUpdate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelStatusUpdateWithIdOnly = await prisma.channelStatusUpdate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChannelStatusUpdateFindManyArgs>(args?: SelectSubset<T, ChannelStatusUpdateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelStatusUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChannelStatusUpdate.
     * @param {ChannelStatusUpdateCreateArgs} args - Arguments to create a ChannelStatusUpdate.
     * @example
     * // Create one ChannelStatusUpdate
     * const ChannelStatusUpdate = await prisma.channelStatusUpdate.create({
     *   data: {
     *     // ... data to create a ChannelStatusUpdate
     *   }
     * })
     * 
     */
    create<T extends ChannelStatusUpdateCreateArgs>(args: SelectSubset<T, ChannelStatusUpdateCreateArgs<ExtArgs>>): Prisma__ChannelStatusUpdateClient<$Result.GetResult<Prisma.$ChannelStatusUpdatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChannelStatusUpdates.
     * @param {ChannelStatusUpdateCreateManyArgs} args - Arguments to create many ChannelStatusUpdates.
     * @example
     * // Create many ChannelStatusUpdates
     * const channelStatusUpdate = await prisma.channelStatusUpdate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChannelStatusUpdateCreateManyArgs>(args?: SelectSubset<T, ChannelStatusUpdateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChannelStatusUpdates and returns the data saved in the database.
     * @param {ChannelStatusUpdateCreateManyAndReturnArgs} args - Arguments to create many ChannelStatusUpdates.
     * @example
     * // Create many ChannelStatusUpdates
     * const channelStatusUpdate = await prisma.channelStatusUpdate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChannelStatusUpdates and only return the `id`
     * const channelStatusUpdateWithIdOnly = await prisma.channelStatusUpdate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChannelStatusUpdateCreateManyAndReturnArgs>(args?: SelectSubset<T, ChannelStatusUpdateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelStatusUpdatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChannelStatusUpdate.
     * @param {ChannelStatusUpdateDeleteArgs} args - Arguments to delete one ChannelStatusUpdate.
     * @example
     * // Delete one ChannelStatusUpdate
     * const ChannelStatusUpdate = await prisma.channelStatusUpdate.delete({
     *   where: {
     *     // ... filter to delete one ChannelStatusUpdate
     *   }
     * })
     * 
     */
    delete<T extends ChannelStatusUpdateDeleteArgs>(args: SelectSubset<T, ChannelStatusUpdateDeleteArgs<ExtArgs>>): Prisma__ChannelStatusUpdateClient<$Result.GetResult<Prisma.$ChannelStatusUpdatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChannelStatusUpdate.
     * @param {ChannelStatusUpdateUpdateArgs} args - Arguments to update one ChannelStatusUpdate.
     * @example
     * // Update one ChannelStatusUpdate
     * const channelStatusUpdate = await prisma.channelStatusUpdate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChannelStatusUpdateUpdateArgs>(args: SelectSubset<T, ChannelStatusUpdateUpdateArgs<ExtArgs>>): Prisma__ChannelStatusUpdateClient<$Result.GetResult<Prisma.$ChannelStatusUpdatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChannelStatusUpdates.
     * @param {ChannelStatusUpdateDeleteManyArgs} args - Arguments to filter ChannelStatusUpdates to delete.
     * @example
     * // Delete a few ChannelStatusUpdates
     * const { count } = await prisma.channelStatusUpdate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChannelStatusUpdateDeleteManyArgs>(args?: SelectSubset<T, ChannelStatusUpdateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChannelStatusUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelStatusUpdateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChannelStatusUpdates
     * const channelStatusUpdate = await prisma.channelStatusUpdate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChannelStatusUpdateUpdateManyArgs>(args: SelectSubset<T, ChannelStatusUpdateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChannelStatusUpdates and returns the data updated in the database.
     * @param {ChannelStatusUpdateUpdateManyAndReturnArgs} args - Arguments to update many ChannelStatusUpdates.
     * @example
     * // Update many ChannelStatusUpdates
     * const channelStatusUpdate = await prisma.channelStatusUpdate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChannelStatusUpdates and only return the `id`
     * const channelStatusUpdateWithIdOnly = await prisma.channelStatusUpdate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChannelStatusUpdateUpdateManyAndReturnArgs>(args: SelectSubset<T, ChannelStatusUpdateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelStatusUpdatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChannelStatusUpdate.
     * @param {ChannelStatusUpdateUpsertArgs} args - Arguments to update or create a ChannelStatusUpdate.
     * @example
     * // Update or create a ChannelStatusUpdate
     * const channelStatusUpdate = await prisma.channelStatusUpdate.upsert({
     *   create: {
     *     // ... data to create a ChannelStatusUpdate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChannelStatusUpdate we want to update
     *   }
     * })
     */
    upsert<T extends ChannelStatusUpdateUpsertArgs>(args: SelectSubset<T, ChannelStatusUpdateUpsertArgs<ExtArgs>>): Prisma__ChannelStatusUpdateClient<$Result.GetResult<Prisma.$ChannelStatusUpdatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChannelStatusUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelStatusUpdateCountArgs} args - Arguments to filter ChannelStatusUpdates to count.
     * @example
     * // Count the number of ChannelStatusUpdates
     * const count = await prisma.channelStatusUpdate.count({
     *   where: {
     *     // ... the filter for the ChannelStatusUpdates we want to count
     *   }
     * })
    **/
    count<T extends ChannelStatusUpdateCountArgs>(
      args?: Subset<T, ChannelStatusUpdateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelStatusUpdateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChannelStatusUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelStatusUpdateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChannelStatusUpdateAggregateArgs>(args: Subset<T, ChannelStatusUpdateAggregateArgs>): Prisma.PrismaPromise<GetChannelStatusUpdateAggregateType<T>>

    /**
     * Group by ChannelStatusUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelStatusUpdateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChannelStatusUpdateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelStatusUpdateGroupByArgs['orderBy'] }
        : { orderBy?: ChannelStatusUpdateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChannelStatusUpdateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelStatusUpdateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChannelStatusUpdate model
   */
  readonly fields: ChannelStatusUpdateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChannelStatusUpdate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChannelStatusUpdateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    channelHistory<T extends ChannelHistoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChannelHistoryDefaultArgs<ExtArgs>>): Prisma__ChannelHistoryClient<$Result.GetResult<Prisma.$ChannelHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChannelStatusUpdate model
   */
  interface ChannelStatusUpdateFieldRefs {
    readonly id: FieldRef<"ChannelStatusUpdate", 'String'>
    readonly channelHistoryId: FieldRef<"ChannelStatusUpdate", 'String'>
    readonly previousStatus: FieldRef<"ChannelStatusUpdate", 'ChannelStatus'>
    readonly newStatus: FieldRef<"ChannelStatusUpdate", 'ChannelStatus'>
    readonly blockHeight: FieldRef<"ChannelStatusUpdate", 'Int'>
    readonly confirmations: FieldRef<"ChannelStatusUpdate", 'Int'>
    readonly notes: FieldRef<"ChannelStatusUpdate", 'String'>
    readonly createdAt: FieldRef<"ChannelStatusUpdate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChannelStatusUpdate findUnique
   */
  export type ChannelStatusUpdateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelStatusUpdate
     */
    select?: ChannelStatusUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelStatusUpdate
     */
    omit?: ChannelStatusUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelStatusUpdateInclude<ExtArgs> | null
    /**
     * Filter, which ChannelStatusUpdate to fetch.
     */
    where: ChannelStatusUpdateWhereUniqueInput
  }

  /**
   * ChannelStatusUpdate findUniqueOrThrow
   */
  export type ChannelStatusUpdateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelStatusUpdate
     */
    select?: ChannelStatusUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelStatusUpdate
     */
    omit?: ChannelStatusUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelStatusUpdateInclude<ExtArgs> | null
    /**
     * Filter, which ChannelStatusUpdate to fetch.
     */
    where: ChannelStatusUpdateWhereUniqueInput
  }

  /**
   * ChannelStatusUpdate findFirst
   */
  export type ChannelStatusUpdateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelStatusUpdate
     */
    select?: ChannelStatusUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelStatusUpdate
     */
    omit?: ChannelStatusUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelStatusUpdateInclude<ExtArgs> | null
    /**
     * Filter, which ChannelStatusUpdate to fetch.
     */
    where?: ChannelStatusUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelStatusUpdates to fetch.
     */
    orderBy?: ChannelStatusUpdateOrderByWithRelationInput | ChannelStatusUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChannelStatusUpdates.
     */
    cursor?: ChannelStatusUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelStatusUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelStatusUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChannelStatusUpdates.
     */
    distinct?: ChannelStatusUpdateScalarFieldEnum | ChannelStatusUpdateScalarFieldEnum[]
  }

  /**
   * ChannelStatusUpdate findFirstOrThrow
   */
  export type ChannelStatusUpdateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelStatusUpdate
     */
    select?: ChannelStatusUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelStatusUpdate
     */
    omit?: ChannelStatusUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelStatusUpdateInclude<ExtArgs> | null
    /**
     * Filter, which ChannelStatusUpdate to fetch.
     */
    where?: ChannelStatusUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelStatusUpdates to fetch.
     */
    orderBy?: ChannelStatusUpdateOrderByWithRelationInput | ChannelStatusUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChannelStatusUpdates.
     */
    cursor?: ChannelStatusUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelStatusUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelStatusUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChannelStatusUpdates.
     */
    distinct?: ChannelStatusUpdateScalarFieldEnum | ChannelStatusUpdateScalarFieldEnum[]
  }

  /**
   * ChannelStatusUpdate findMany
   */
  export type ChannelStatusUpdateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelStatusUpdate
     */
    select?: ChannelStatusUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelStatusUpdate
     */
    omit?: ChannelStatusUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelStatusUpdateInclude<ExtArgs> | null
    /**
     * Filter, which ChannelStatusUpdates to fetch.
     */
    where?: ChannelStatusUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelStatusUpdates to fetch.
     */
    orderBy?: ChannelStatusUpdateOrderByWithRelationInput | ChannelStatusUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChannelStatusUpdates.
     */
    cursor?: ChannelStatusUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelStatusUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelStatusUpdates.
     */
    skip?: number
    distinct?: ChannelStatusUpdateScalarFieldEnum | ChannelStatusUpdateScalarFieldEnum[]
  }

  /**
   * ChannelStatusUpdate create
   */
  export type ChannelStatusUpdateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelStatusUpdate
     */
    select?: ChannelStatusUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelStatusUpdate
     */
    omit?: ChannelStatusUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelStatusUpdateInclude<ExtArgs> | null
    /**
     * The data needed to create a ChannelStatusUpdate.
     */
    data: XOR<ChannelStatusUpdateCreateInput, ChannelStatusUpdateUncheckedCreateInput>
  }

  /**
   * ChannelStatusUpdate createMany
   */
  export type ChannelStatusUpdateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChannelStatusUpdates.
     */
    data: ChannelStatusUpdateCreateManyInput | ChannelStatusUpdateCreateManyInput[]
  }

  /**
   * ChannelStatusUpdate createManyAndReturn
   */
  export type ChannelStatusUpdateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelStatusUpdate
     */
    select?: ChannelStatusUpdateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelStatusUpdate
     */
    omit?: ChannelStatusUpdateOmit<ExtArgs> | null
    /**
     * The data used to create many ChannelStatusUpdates.
     */
    data: ChannelStatusUpdateCreateManyInput | ChannelStatusUpdateCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelStatusUpdateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChannelStatusUpdate update
   */
  export type ChannelStatusUpdateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelStatusUpdate
     */
    select?: ChannelStatusUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelStatusUpdate
     */
    omit?: ChannelStatusUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelStatusUpdateInclude<ExtArgs> | null
    /**
     * The data needed to update a ChannelStatusUpdate.
     */
    data: XOR<ChannelStatusUpdateUpdateInput, ChannelStatusUpdateUncheckedUpdateInput>
    /**
     * Choose, which ChannelStatusUpdate to update.
     */
    where: ChannelStatusUpdateWhereUniqueInput
  }

  /**
   * ChannelStatusUpdate updateMany
   */
  export type ChannelStatusUpdateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChannelStatusUpdates.
     */
    data: XOR<ChannelStatusUpdateUpdateManyMutationInput, ChannelStatusUpdateUncheckedUpdateManyInput>
    /**
     * Filter which ChannelStatusUpdates to update
     */
    where?: ChannelStatusUpdateWhereInput
    /**
     * Limit how many ChannelStatusUpdates to update.
     */
    limit?: number
  }

  /**
   * ChannelStatusUpdate updateManyAndReturn
   */
  export type ChannelStatusUpdateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelStatusUpdate
     */
    select?: ChannelStatusUpdateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelStatusUpdate
     */
    omit?: ChannelStatusUpdateOmit<ExtArgs> | null
    /**
     * The data used to update ChannelStatusUpdates.
     */
    data: XOR<ChannelStatusUpdateUpdateManyMutationInput, ChannelStatusUpdateUncheckedUpdateManyInput>
    /**
     * Filter which ChannelStatusUpdates to update
     */
    where?: ChannelStatusUpdateWhereInput
    /**
     * Limit how many ChannelStatusUpdates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelStatusUpdateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChannelStatusUpdate upsert
   */
  export type ChannelStatusUpdateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelStatusUpdate
     */
    select?: ChannelStatusUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelStatusUpdate
     */
    omit?: ChannelStatusUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelStatusUpdateInclude<ExtArgs> | null
    /**
     * The filter to search for the ChannelStatusUpdate to update in case it exists.
     */
    where: ChannelStatusUpdateWhereUniqueInput
    /**
     * In case the ChannelStatusUpdate found by the `where` argument doesn't exist, create a new ChannelStatusUpdate with this data.
     */
    create: XOR<ChannelStatusUpdateCreateInput, ChannelStatusUpdateUncheckedCreateInput>
    /**
     * In case the ChannelStatusUpdate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChannelStatusUpdateUpdateInput, ChannelStatusUpdateUncheckedUpdateInput>
  }

  /**
   * ChannelStatusUpdate delete
   */
  export type ChannelStatusUpdateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelStatusUpdate
     */
    select?: ChannelStatusUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelStatusUpdate
     */
    omit?: ChannelStatusUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelStatusUpdateInclude<ExtArgs> | null
    /**
     * Filter which ChannelStatusUpdate to delete.
     */
    where: ChannelStatusUpdateWhereUniqueInput
  }

  /**
   * ChannelStatusUpdate deleteMany
   */
  export type ChannelStatusUpdateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChannelStatusUpdates to delete
     */
    where?: ChannelStatusUpdateWhereInput
    /**
     * Limit how many ChannelStatusUpdates to delete.
     */
    limit?: number
  }

  /**
   * ChannelStatusUpdate without action
   */
  export type ChannelStatusUpdateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelStatusUpdate
     */
    select?: ChannelStatusUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelStatusUpdate
     */
    omit?: ChannelStatusUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelStatusUpdateInclude<ExtArgs> | null
  }


  /**
   * Model PaymentHistory
   */

  export type AggregatePaymentHistory = {
    _count: PaymentHistoryCountAggregateOutputType | null
    _avg: PaymentHistoryAvgAggregateOutputType | null
    _sum: PaymentHistorySumAggregateOutputType | null
    _min: PaymentHistoryMinAggregateOutputType | null
    _max: PaymentHistoryMaxAggregateOutputType | null
  }

  export type PaymentHistoryAvgAggregateOutputType = {
    amount: number | null
    fee: number | null
  }

  export type PaymentHistorySumAggregateOutputType = {
    amount: bigint | null
    fee: bigint | null
  }

  export type PaymentHistoryMinAggregateOutputType = {
    id: string | null
    paymentHash: string | null
    paymentRequest: string | null
    destination: string | null
    amount: bigint | null
    fee: bigint | null
    status: $Enums.PaymentStatus | null
    preimage: string | null
    failureReason: string | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type PaymentHistoryMaxAggregateOutputType = {
    id: string | null
    paymentHash: string | null
    paymentRequest: string | null
    destination: string | null
    amount: bigint | null
    fee: bigint | null
    status: $Enums.PaymentStatus | null
    preimage: string | null
    failureReason: string | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type PaymentHistoryCountAggregateOutputType = {
    id: number
    paymentHash: number
    paymentRequest: number
    destination: number
    amount: number
    fee: number
    status: number
    preimage: number
    failureReason: number
    createdAt: number
    completedAt: number
    _all: number
  }


  export type PaymentHistoryAvgAggregateInputType = {
    amount?: true
    fee?: true
  }

  export type PaymentHistorySumAggregateInputType = {
    amount?: true
    fee?: true
  }

  export type PaymentHistoryMinAggregateInputType = {
    id?: true
    paymentHash?: true
    paymentRequest?: true
    destination?: true
    amount?: true
    fee?: true
    status?: true
    preimage?: true
    failureReason?: true
    createdAt?: true
    completedAt?: true
  }

  export type PaymentHistoryMaxAggregateInputType = {
    id?: true
    paymentHash?: true
    paymentRequest?: true
    destination?: true
    amount?: true
    fee?: true
    status?: true
    preimage?: true
    failureReason?: true
    createdAt?: true
    completedAt?: true
  }

  export type PaymentHistoryCountAggregateInputType = {
    id?: true
    paymentHash?: true
    paymentRequest?: true
    destination?: true
    amount?: true
    fee?: true
    status?: true
    preimage?: true
    failureReason?: true
    createdAt?: true
    completedAt?: true
    _all?: true
  }

  export type PaymentHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentHistory to aggregate.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentHistories
    **/
    _count?: true | PaymentHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentHistoryMaxAggregateInputType
  }

  export type GetPaymentHistoryAggregateType<T extends PaymentHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentHistory[P]>
      : GetScalarType<T[P], AggregatePaymentHistory[P]>
  }




  export type PaymentHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentHistoryWhereInput
    orderBy?: PaymentHistoryOrderByWithAggregationInput | PaymentHistoryOrderByWithAggregationInput[]
    by: PaymentHistoryScalarFieldEnum[] | PaymentHistoryScalarFieldEnum
    having?: PaymentHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentHistoryCountAggregateInputType | true
    _avg?: PaymentHistoryAvgAggregateInputType
    _sum?: PaymentHistorySumAggregateInputType
    _min?: PaymentHistoryMinAggregateInputType
    _max?: PaymentHistoryMaxAggregateInputType
  }

  export type PaymentHistoryGroupByOutputType = {
    id: string
    paymentHash: string
    paymentRequest: string | null
    destination: string
    amount: bigint
    fee: bigint | null
    status: $Enums.PaymentStatus
    preimage: string | null
    failureReason: string | null
    createdAt: Date
    completedAt: Date | null
    _count: PaymentHistoryCountAggregateOutputType | null
    _avg: PaymentHistoryAvgAggregateOutputType | null
    _sum: PaymentHistorySumAggregateOutputType | null
    _min: PaymentHistoryMinAggregateOutputType | null
    _max: PaymentHistoryMaxAggregateOutputType | null
  }

  type GetPaymentHistoryGroupByPayload<T extends PaymentHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PaymentHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentHash?: boolean
    paymentRequest?: boolean
    destination?: boolean
    amount?: boolean
    fee?: boolean
    status?: boolean
    preimage?: boolean
    failureReason?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["paymentHistory"]>

  export type PaymentHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentHash?: boolean
    paymentRequest?: boolean
    destination?: boolean
    amount?: boolean
    fee?: boolean
    status?: boolean
    preimage?: boolean
    failureReason?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["paymentHistory"]>

  export type PaymentHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentHash?: boolean
    paymentRequest?: boolean
    destination?: boolean
    amount?: boolean
    fee?: boolean
    status?: boolean
    preimage?: boolean
    failureReason?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["paymentHistory"]>

  export type PaymentHistorySelectScalar = {
    id?: boolean
    paymentHash?: boolean
    paymentRequest?: boolean
    destination?: boolean
    amount?: boolean
    fee?: boolean
    status?: boolean
    preimage?: boolean
    failureReason?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }

  export type PaymentHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paymentHash" | "paymentRequest" | "destination" | "amount" | "fee" | "status" | "preimage" | "failureReason" | "createdAt" | "completedAt", ExtArgs["result"]["paymentHistory"]>

  export type $PaymentHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paymentHash: string
      paymentRequest: string | null
      destination: string
      amount: bigint
      fee: bigint | null
      status: $Enums.PaymentStatus
      preimage: string | null
      failureReason: string | null
      createdAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["paymentHistory"]>
    composites: {}
  }

  type PaymentHistoryGetPayload<S extends boolean | null | undefined | PaymentHistoryDefaultArgs> = $Result.GetResult<Prisma.$PaymentHistoryPayload, S>

  type PaymentHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentHistoryCountAggregateInputType | true
    }

  export interface PaymentHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentHistory'], meta: { name: 'PaymentHistory' } }
    /**
     * Find zero or one PaymentHistory that matches the filter.
     * @param {PaymentHistoryFindUniqueArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentHistoryFindUniqueArgs>(args: SelectSubset<T, PaymentHistoryFindUniqueArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentHistoryFindUniqueOrThrowArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryFindFirstArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentHistoryFindFirstArgs>(args?: SelectSubset<T, PaymentHistoryFindFirstArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryFindFirstOrThrowArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentHistories
     * const paymentHistories = await prisma.paymentHistory.findMany()
     * 
     * // Get first 10 PaymentHistories
     * const paymentHistories = await prisma.paymentHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentHistoryWithIdOnly = await prisma.paymentHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentHistoryFindManyArgs>(args?: SelectSubset<T, PaymentHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentHistory.
     * @param {PaymentHistoryCreateArgs} args - Arguments to create a PaymentHistory.
     * @example
     * // Create one PaymentHistory
     * const PaymentHistory = await prisma.paymentHistory.create({
     *   data: {
     *     // ... data to create a PaymentHistory
     *   }
     * })
     * 
     */
    create<T extends PaymentHistoryCreateArgs>(args: SelectSubset<T, PaymentHistoryCreateArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentHistories.
     * @param {PaymentHistoryCreateManyArgs} args - Arguments to create many PaymentHistories.
     * @example
     * // Create many PaymentHistories
     * const paymentHistory = await prisma.paymentHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentHistoryCreateManyArgs>(args?: SelectSubset<T, PaymentHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentHistories and returns the data saved in the database.
     * @param {PaymentHistoryCreateManyAndReturnArgs} args - Arguments to create many PaymentHistories.
     * @example
     * // Create many PaymentHistories
     * const paymentHistory = await prisma.paymentHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentHistories and only return the `id`
     * const paymentHistoryWithIdOnly = await prisma.paymentHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentHistory.
     * @param {PaymentHistoryDeleteArgs} args - Arguments to delete one PaymentHistory.
     * @example
     * // Delete one PaymentHistory
     * const PaymentHistory = await prisma.paymentHistory.delete({
     *   where: {
     *     // ... filter to delete one PaymentHistory
     *   }
     * })
     * 
     */
    delete<T extends PaymentHistoryDeleteArgs>(args: SelectSubset<T, PaymentHistoryDeleteArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentHistory.
     * @param {PaymentHistoryUpdateArgs} args - Arguments to update one PaymentHistory.
     * @example
     * // Update one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentHistoryUpdateArgs>(args: SelectSubset<T, PaymentHistoryUpdateArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentHistories.
     * @param {PaymentHistoryDeleteManyArgs} args - Arguments to filter PaymentHistories to delete.
     * @example
     * // Delete a few PaymentHistories
     * const { count } = await prisma.paymentHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentHistoryDeleteManyArgs>(args?: SelectSubset<T, PaymentHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentHistories
     * const paymentHistory = await prisma.paymentHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentHistoryUpdateManyArgs>(args: SelectSubset<T, PaymentHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentHistories and returns the data updated in the database.
     * @param {PaymentHistoryUpdateManyAndReturnArgs} args - Arguments to update many PaymentHistories.
     * @example
     * // Update many PaymentHistories
     * const paymentHistory = await prisma.paymentHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentHistories and only return the `id`
     * const paymentHistoryWithIdOnly = await prisma.paymentHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentHistory.
     * @param {PaymentHistoryUpsertArgs} args - Arguments to update or create a PaymentHistory.
     * @example
     * // Update or create a PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.upsert({
     *   create: {
     *     // ... data to create a PaymentHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentHistory we want to update
     *   }
     * })
     */
    upsert<T extends PaymentHistoryUpsertArgs>(args: SelectSubset<T, PaymentHistoryUpsertArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryCountArgs} args - Arguments to filter PaymentHistories to count.
     * @example
     * // Count the number of PaymentHistories
     * const count = await prisma.paymentHistory.count({
     *   where: {
     *     // ... the filter for the PaymentHistories we want to count
     *   }
     * })
    **/
    count<T extends PaymentHistoryCountArgs>(
      args?: Subset<T, PaymentHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentHistoryAggregateArgs>(args: Subset<T, PaymentHistoryAggregateArgs>): Prisma.PrismaPromise<GetPaymentHistoryAggregateType<T>>

    /**
     * Group by PaymentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PaymentHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentHistory model
   */
  readonly fields: PaymentHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentHistory model
   */
  interface PaymentHistoryFieldRefs {
    readonly id: FieldRef<"PaymentHistory", 'String'>
    readonly paymentHash: FieldRef<"PaymentHistory", 'String'>
    readonly paymentRequest: FieldRef<"PaymentHistory", 'String'>
    readonly destination: FieldRef<"PaymentHistory", 'String'>
    readonly amount: FieldRef<"PaymentHistory", 'BigInt'>
    readonly fee: FieldRef<"PaymentHistory", 'BigInt'>
    readonly status: FieldRef<"PaymentHistory", 'PaymentStatus'>
    readonly preimage: FieldRef<"PaymentHistory", 'String'>
    readonly failureReason: FieldRef<"PaymentHistory", 'String'>
    readonly createdAt: FieldRef<"PaymentHistory", 'DateTime'>
    readonly completedAt: FieldRef<"PaymentHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentHistory findUnique
   */
  export type PaymentHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where: PaymentHistoryWhereUniqueInput
  }

  /**
   * PaymentHistory findUniqueOrThrow
   */
  export type PaymentHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where: PaymentHistoryWhereUniqueInput
  }

  /**
   * PaymentHistory findFirst
   */
  export type PaymentHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentHistories.
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentHistories.
     */
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * PaymentHistory findFirstOrThrow
   */
  export type PaymentHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentHistories.
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentHistories.
     */
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * PaymentHistory findMany
   */
  export type PaymentHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Filter, which PaymentHistories to fetch.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentHistories.
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * PaymentHistory create
   */
  export type PaymentHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a PaymentHistory.
     */
    data: XOR<PaymentHistoryCreateInput, PaymentHistoryUncheckedCreateInput>
  }

  /**
   * PaymentHistory createMany
   */
  export type PaymentHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentHistories.
     */
    data: PaymentHistoryCreateManyInput | PaymentHistoryCreateManyInput[]
  }

  /**
   * PaymentHistory createManyAndReturn
   */
  export type PaymentHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentHistories.
     */
    data: PaymentHistoryCreateManyInput | PaymentHistoryCreateManyInput[]
  }

  /**
   * PaymentHistory update
   */
  export type PaymentHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a PaymentHistory.
     */
    data: XOR<PaymentHistoryUpdateInput, PaymentHistoryUncheckedUpdateInput>
    /**
     * Choose, which PaymentHistory to update.
     */
    where: PaymentHistoryWhereUniqueInput
  }

  /**
   * PaymentHistory updateMany
   */
  export type PaymentHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentHistories.
     */
    data: XOR<PaymentHistoryUpdateManyMutationInput, PaymentHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PaymentHistories to update
     */
    where?: PaymentHistoryWhereInput
    /**
     * Limit how many PaymentHistories to update.
     */
    limit?: number
  }

  /**
   * PaymentHistory updateManyAndReturn
   */
  export type PaymentHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * The data used to update PaymentHistories.
     */
    data: XOR<PaymentHistoryUpdateManyMutationInput, PaymentHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PaymentHistories to update
     */
    where?: PaymentHistoryWhereInput
    /**
     * Limit how many PaymentHistories to update.
     */
    limit?: number
  }

  /**
   * PaymentHistory upsert
   */
  export type PaymentHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the PaymentHistory to update in case it exists.
     */
    where: PaymentHistoryWhereUniqueInput
    /**
     * In case the PaymentHistory found by the `where` argument doesn't exist, create a new PaymentHistory with this data.
     */
    create: XOR<PaymentHistoryCreateInput, PaymentHistoryUncheckedCreateInput>
    /**
     * In case the PaymentHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentHistoryUpdateInput, PaymentHistoryUncheckedUpdateInput>
  }

  /**
   * PaymentHistory delete
   */
  export type PaymentHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Filter which PaymentHistory to delete.
     */
    where: PaymentHistoryWhereUniqueInput
  }

  /**
   * PaymentHistory deleteMany
   */
  export type PaymentHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentHistories to delete
     */
    where?: PaymentHistoryWhereInput
    /**
     * Limit how many PaymentHistories to delete.
     */
    limit?: number
  }

  /**
   * PaymentHistory without action
   */
  export type PaymentHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
  }


  /**
   * Model InvoiceHistory
   */

  export type AggregateInvoiceHistory = {
    _count: InvoiceHistoryCountAggregateOutputType | null
    _avg: InvoiceHistoryAvgAggregateOutputType | null
    _sum: InvoiceHistorySumAggregateOutputType | null
    _min: InvoiceHistoryMinAggregateOutputType | null
    _max: InvoiceHistoryMaxAggregateOutputType | null
  }

  export type InvoiceHistoryAvgAggregateOutputType = {
    amount: number | null
    amountPaid: number | null
  }

  export type InvoiceHistorySumAggregateOutputType = {
    amount: bigint | null
    amountPaid: bigint | null
  }

  export type InvoiceHistoryMinAggregateOutputType = {
    id: string | null
    paymentHash: string | null
    paymentRequest: string | null
    amount: bigint | null
    memo: string | null
    status: $Enums.InvoiceStatus | null
    isPaid: boolean | null
    amountPaid: bigint | null
    createdAt: Date | null
    paidAt: Date | null
    expiresAt: Date | null
  }

  export type InvoiceHistoryMaxAggregateOutputType = {
    id: string | null
    paymentHash: string | null
    paymentRequest: string | null
    amount: bigint | null
    memo: string | null
    status: $Enums.InvoiceStatus | null
    isPaid: boolean | null
    amountPaid: bigint | null
    createdAt: Date | null
    paidAt: Date | null
    expiresAt: Date | null
  }

  export type InvoiceHistoryCountAggregateOutputType = {
    id: number
    paymentHash: number
    paymentRequest: number
    amount: number
    memo: number
    status: number
    isPaid: number
    amountPaid: number
    createdAt: number
    paidAt: number
    expiresAt: number
    _all: number
  }


  export type InvoiceHistoryAvgAggregateInputType = {
    amount?: true
    amountPaid?: true
  }

  export type InvoiceHistorySumAggregateInputType = {
    amount?: true
    amountPaid?: true
  }

  export type InvoiceHistoryMinAggregateInputType = {
    id?: true
    paymentHash?: true
    paymentRequest?: true
    amount?: true
    memo?: true
    status?: true
    isPaid?: true
    amountPaid?: true
    createdAt?: true
    paidAt?: true
    expiresAt?: true
  }

  export type InvoiceHistoryMaxAggregateInputType = {
    id?: true
    paymentHash?: true
    paymentRequest?: true
    amount?: true
    memo?: true
    status?: true
    isPaid?: true
    amountPaid?: true
    createdAt?: true
    paidAt?: true
    expiresAt?: true
  }

  export type InvoiceHistoryCountAggregateInputType = {
    id?: true
    paymentHash?: true
    paymentRequest?: true
    amount?: true
    memo?: true
    status?: true
    isPaid?: true
    amountPaid?: true
    createdAt?: true
    paidAt?: true
    expiresAt?: true
    _all?: true
  }

  export type InvoiceHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceHistory to aggregate.
     */
    where?: InvoiceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceHistories to fetch.
     */
    orderBy?: InvoiceHistoryOrderByWithRelationInput | InvoiceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvoiceHistories
    **/
    _count?: true | InvoiceHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceHistoryMaxAggregateInputType
  }

  export type GetInvoiceHistoryAggregateType<T extends InvoiceHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoiceHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoiceHistory[P]>
      : GetScalarType<T[P], AggregateInvoiceHistory[P]>
  }




  export type InvoiceHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceHistoryWhereInput
    orderBy?: InvoiceHistoryOrderByWithAggregationInput | InvoiceHistoryOrderByWithAggregationInput[]
    by: InvoiceHistoryScalarFieldEnum[] | InvoiceHistoryScalarFieldEnum
    having?: InvoiceHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceHistoryCountAggregateInputType | true
    _avg?: InvoiceHistoryAvgAggregateInputType
    _sum?: InvoiceHistorySumAggregateInputType
    _min?: InvoiceHistoryMinAggregateInputType
    _max?: InvoiceHistoryMaxAggregateInputType
  }

  export type InvoiceHistoryGroupByOutputType = {
    id: string
    paymentHash: string
    paymentRequest: string
    amount: bigint
    memo: string | null
    status: $Enums.InvoiceStatus
    isPaid: boolean
    amountPaid: bigint | null
    createdAt: Date
    paidAt: Date | null
    expiresAt: Date
    _count: InvoiceHistoryCountAggregateOutputType | null
    _avg: InvoiceHistoryAvgAggregateOutputType | null
    _sum: InvoiceHistorySumAggregateOutputType | null
    _min: InvoiceHistoryMinAggregateOutputType | null
    _max: InvoiceHistoryMaxAggregateOutputType | null
  }

  type GetInvoiceHistoryGroupByPayload<T extends InvoiceHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceHistoryGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentHash?: boolean
    paymentRequest?: boolean
    amount?: boolean
    memo?: boolean
    status?: boolean
    isPaid?: boolean
    amountPaid?: boolean
    createdAt?: boolean
    paidAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["invoiceHistory"]>

  export type InvoiceHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentHash?: boolean
    paymentRequest?: boolean
    amount?: boolean
    memo?: boolean
    status?: boolean
    isPaid?: boolean
    amountPaid?: boolean
    createdAt?: boolean
    paidAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["invoiceHistory"]>

  export type InvoiceHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentHash?: boolean
    paymentRequest?: boolean
    amount?: boolean
    memo?: boolean
    status?: boolean
    isPaid?: boolean
    amountPaid?: boolean
    createdAt?: boolean
    paidAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["invoiceHistory"]>

  export type InvoiceHistorySelectScalar = {
    id?: boolean
    paymentHash?: boolean
    paymentRequest?: boolean
    amount?: boolean
    memo?: boolean
    status?: boolean
    isPaid?: boolean
    amountPaid?: boolean
    createdAt?: boolean
    paidAt?: boolean
    expiresAt?: boolean
  }

  export type InvoiceHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paymentHash" | "paymentRequest" | "amount" | "memo" | "status" | "isPaid" | "amountPaid" | "createdAt" | "paidAt" | "expiresAt", ExtArgs["result"]["invoiceHistory"]>

  export type $InvoiceHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvoiceHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paymentHash: string
      paymentRequest: string
      amount: bigint
      memo: string | null
      status: $Enums.InvoiceStatus
      isPaid: boolean
      amountPaid: bigint | null
      createdAt: Date
      paidAt: Date | null
      expiresAt: Date
    }, ExtArgs["result"]["invoiceHistory"]>
    composites: {}
  }

  type InvoiceHistoryGetPayload<S extends boolean | null | undefined | InvoiceHistoryDefaultArgs> = $Result.GetResult<Prisma.$InvoiceHistoryPayload, S>

  type InvoiceHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceHistoryCountAggregateInputType | true
    }

  export interface InvoiceHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvoiceHistory'], meta: { name: 'InvoiceHistory' } }
    /**
     * Find zero or one InvoiceHistory that matches the filter.
     * @param {InvoiceHistoryFindUniqueArgs} args - Arguments to find a InvoiceHistory
     * @example
     * // Get one InvoiceHistory
     * const invoiceHistory = await prisma.invoiceHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceHistoryFindUniqueArgs>(args: SelectSubset<T, InvoiceHistoryFindUniqueArgs<ExtArgs>>): Prisma__InvoiceHistoryClient<$Result.GetResult<Prisma.$InvoiceHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InvoiceHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceHistoryFindUniqueOrThrowArgs} args - Arguments to find a InvoiceHistory
     * @example
     * // Get one InvoiceHistory
     * const invoiceHistory = await prisma.invoiceHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceHistoryClient<$Result.GetResult<Prisma.$InvoiceHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceHistoryFindFirstArgs} args - Arguments to find a InvoiceHistory
     * @example
     * // Get one InvoiceHistory
     * const invoiceHistory = await prisma.invoiceHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceHistoryFindFirstArgs>(args?: SelectSubset<T, InvoiceHistoryFindFirstArgs<ExtArgs>>): Prisma__InvoiceHistoryClient<$Result.GetResult<Prisma.$InvoiceHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceHistoryFindFirstOrThrowArgs} args - Arguments to find a InvoiceHistory
     * @example
     * // Get one InvoiceHistory
     * const invoiceHistory = await prisma.invoiceHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceHistoryClient<$Result.GetResult<Prisma.$InvoiceHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InvoiceHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvoiceHistories
     * const invoiceHistories = await prisma.invoiceHistory.findMany()
     * 
     * // Get first 10 InvoiceHistories
     * const invoiceHistories = await prisma.invoiceHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceHistoryWithIdOnly = await prisma.invoiceHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceHistoryFindManyArgs>(args?: SelectSubset<T, InvoiceHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InvoiceHistory.
     * @param {InvoiceHistoryCreateArgs} args - Arguments to create a InvoiceHistory.
     * @example
     * // Create one InvoiceHistory
     * const InvoiceHistory = await prisma.invoiceHistory.create({
     *   data: {
     *     // ... data to create a InvoiceHistory
     *   }
     * })
     * 
     */
    create<T extends InvoiceHistoryCreateArgs>(args: SelectSubset<T, InvoiceHistoryCreateArgs<ExtArgs>>): Prisma__InvoiceHistoryClient<$Result.GetResult<Prisma.$InvoiceHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InvoiceHistories.
     * @param {InvoiceHistoryCreateManyArgs} args - Arguments to create many InvoiceHistories.
     * @example
     * // Create many InvoiceHistories
     * const invoiceHistory = await prisma.invoiceHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceHistoryCreateManyArgs>(args?: SelectSubset<T, InvoiceHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvoiceHistories and returns the data saved in the database.
     * @param {InvoiceHistoryCreateManyAndReturnArgs} args - Arguments to create many InvoiceHistories.
     * @example
     * // Create many InvoiceHistories
     * const invoiceHistory = await prisma.invoiceHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvoiceHistories and only return the `id`
     * const invoiceHistoryWithIdOnly = await prisma.invoiceHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InvoiceHistory.
     * @param {InvoiceHistoryDeleteArgs} args - Arguments to delete one InvoiceHistory.
     * @example
     * // Delete one InvoiceHistory
     * const InvoiceHistory = await prisma.invoiceHistory.delete({
     *   where: {
     *     // ... filter to delete one InvoiceHistory
     *   }
     * })
     * 
     */
    delete<T extends InvoiceHistoryDeleteArgs>(args: SelectSubset<T, InvoiceHistoryDeleteArgs<ExtArgs>>): Prisma__InvoiceHistoryClient<$Result.GetResult<Prisma.$InvoiceHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InvoiceHistory.
     * @param {InvoiceHistoryUpdateArgs} args - Arguments to update one InvoiceHistory.
     * @example
     * // Update one InvoiceHistory
     * const invoiceHistory = await prisma.invoiceHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceHistoryUpdateArgs>(args: SelectSubset<T, InvoiceHistoryUpdateArgs<ExtArgs>>): Prisma__InvoiceHistoryClient<$Result.GetResult<Prisma.$InvoiceHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InvoiceHistories.
     * @param {InvoiceHistoryDeleteManyArgs} args - Arguments to filter InvoiceHistories to delete.
     * @example
     * // Delete a few InvoiceHistories
     * const { count } = await prisma.invoiceHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceHistoryDeleteManyArgs>(args?: SelectSubset<T, InvoiceHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvoiceHistories
     * const invoiceHistory = await prisma.invoiceHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceHistoryUpdateManyArgs>(args: SelectSubset<T, InvoiceHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceHistories and returns the data updated in the database.
     * @param {InvoiceHistoryUpdateManyAndReturnArgs} args - Arguments to update many InvoiceHistories.
     * @example
     * // Update many InvoiceHistories
     * const invoiceHistory = await prisma.invoiceHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InvoiceHistories and only return the `id`
     * const invoiceHistoryWithIdOnly = await prisma.invoiceHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InvoiceHistory.
     * @param {InvoiceHistoryUpsertArgs} args - Arguments to update or create a InvoiceHistory.
     * @example
     * // Update or create a InvoiceHistory
     * const invoiceHistory = await prisma.invoiceHistory.upsert({
     *   create: {
     *     // ... data to create a InvoiceHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvoiceHistory we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceHistoryUpsertArgs>(args: SelectSubset<T, InvoiceHistoryUpsertArgs<ExtArgs>>): Prisma__InvoiceHistoryClient<$Result.GetResult<Prisma.$InvoiceHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InvoiceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceHistoryCountArgs} args - Arguments to filter InvoiceHistories to count.
     * @example
     * // Count the number of InvoiceHistories
     * const count = await prisma.invoiceHistory.count({
     *   where: {
     *     // ... the filter for the InvoiceHistories we want to count
     *   }
     * })
    **/
    count<T extends InvoiceHistoryCountArgs>(
      args?: Subset<T, InvoiceHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvoiceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceHistoryAggregateArgs>(args: Subset<T, InvoiceHistoryAggregateArgs>): Prisma.PrismaPromise<GetInvoiceHistoryAggregateType<T>>

    /**
     * Group by InvoiceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceHistoryGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvoiceHistory model
   */
  readonly fields: InvoiceHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvoiceHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InvoiceHistory model
   */
  interface InvoiceHistoryFieldRefs {
    readonly id: FieldRef<"InvoiceHistory", 'String'>
    readonly paymentHash: FieldRef<"InvoiceHistory", 'String'>
    readonly paymentRequest: FieldRef<"InvoiceHistory", 'String'>
    readonly amount: FieldRef<"InvoiceHistory", 'BigInt'>
    readonly memo: FieldRef<"InvoiceHistory", 'String'>
    readonly status: FieldRef<"InvoiceHistory", 'InvoiceStatus'>
    readonly isPaid: FieldRef<"InvoiceHistory", 'Boolean'>
    readonly amountPaid: FieldRef<"InvoiceHistory", 'BigInt'>
    readonly createdAt: FieldRef<"InvoiceHistory", 'DateTime'>
    readonly paidAt: FieldRef<"InvoiceHistory", 'DateTime'>
    readonly expiresAt: FieldRef<"InvoiceHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InvoiceHistory findUnique
   */
  export type InvoiceHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceHistory
     */
    select?: InvoiceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceHistory
     */
    omit?: InvoiceHistoryOmit<ExtArgs> | null
    /**
     * Filter, which InvoiceHistory to fetch.
     */
    where: InvoiceHistoryWhereUniqueInput
  }

  /**
   * InvoiceHistory findUniqueOrThrow
   */
  export type InvoiceHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceHistory
     */
    select?: InvoiceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceHistory
     */
    omit?: InvoiceHistoryOmit<ExtArgs> | null
    /**
     * Filter, which InvoiceHistory to fetch.
     */
    where: InvoiceHistoryWhereUniqueInput
  }

  /**
   * InvoiceHistory findFirst
   */
  export type InvoiceHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceHistory
     */
    select?: InvoiceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceHistory
     */
    omit?: InvoiceHistoryOmit<ExtArgs> | null
    /**
     * Filter, which InvoiceHistory to fetch.
     */
    where?: InvoiceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceHistories to fetch.
     */
    orderBy?: InvoiceHistoryOrderByWithRelationInput | InvoiceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceHistories.
     */
    cursor?: InvoiceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceHistories.
     */
    distinct?: InvoiceHistoryScalarFieldEnum | InvoiceHistoryScalarFieldEnum[]
  }

  /**
   * InvoiceHistory findFirstOrThrow
   */
  export type InvoiceHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceHistory
     */
    select?: InvoiceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceHistory
     */
    omit?: InvoiceHistoryOmit<ExtArgs> | null
    /**
     * Filter, which InvoiceHistory to fetch.
     */
    where?: InvoiceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceHistories to fetch.
     */
    orderBy?: InvoiceHistoryOrderByWithRelationInput | InvoiceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceHistories.
     */
    cursor?: InvoiceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceHistories.
     */
    distinct?: InvoiceHistoryScalarFieldEnum | InvoiceHistoryScalarFieldEnum[]
  }

  /**
   * InvoiceHistory findMany
   */
  export type InvoiceHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceHistory
     */
    select?: InvoiceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceHistory
     */
    omit?: InvoiceHistoryOmit<ExtArgs> | null
    /**
     * Filter, which InvoiceHistories to fetch.
     */
    where?: InvoiceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceHistories to fetch.
     */
    orderBy?: InvoiceHistoryOrderByWithRelationInput | InvoiceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvoiceHistories.
     */
    cursor?: InvoiceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceHistories.
     */
    skip?: number
    distinct?: InvoiceHistoryScalarFieldEnum | InvoiceHistoryScalarFieldEnum[]
  }

  /**
   * InvoiceHistory create
   */
  export type InvoiceHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceHistory
     */
    select?: InvoiceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceHistory
     */
    omit?: InvoiceHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a InvoiceHistory.
     */
    data: XOR<InvoiceHistoryCreateInput, InvoiceHistoryUncheckedCreateInput>
  }

  /**
   * InvoiceHistory createMany
   */
  export type InvoiceHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvoiceHistories.
     */
    data: InvoiceHistoryCreateManyInput | InvoiceHistoryCreateManyInput[]
  }

  /**
   * InvoiceHistory createManyAndReturn
   */
  export type InvoiceHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceHistory
     */
    select?: InvoiceHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceHistory
     */
    omit?: InvoiceHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many InvoiceHistories.
     */
    data: InvoiceHistoryCreateManyInput | InvoiceHistoryCreateManyInput[]
  }

  /**
   * InvoiceHistory update
   */
  export type InvoiceHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceHistory
     */
    select?: InvoiceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceHistory
     */
    omit?: InvoiceHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a InvoiceHistory.
     */
    data: XOR<InvoiceHistoryUpdateInput, InvoiceHistoryUncheckedUpdateInput>
    /**
     * Choose, which InvoiceHistory to update.
     */
    where: InvoiceHistoryWhereUniqueInput
  }

  /**
   * InvoiceHistory updateMany
   */
  export type InvoiceHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvoiceHistories.
     */
    data: XOR<InvoiceHistoryUpdateManyMutationInput, InvoiceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceHistories to update
     */
    where?: InvoiceHistoryWhereInput
    /**
     * Limit how many InvoiceHistories to update.
     */
    limit?: number
  }

  /**
   * InvoiceHistory updateManyAndReturn
   */
  export type InvoiceHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceHistory
     */
    select?: InvoiceHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceHistory
     */
    omit?: InvoiceHistoryOmit<ExtArgs> | null
    /**
     * The data used to update InvoiceHistories.
     */
    data: XOR<InvoiceHistoryUpdateManyMutationInput, InvoiceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceHistories to update
     */
    where?: InvoiceHistoryWhereInput
    /**
     * Limit how many InvoiceHistories to update.
     */
    limit?: number
  }

  /**
   * InvoiceHistory upsert
   */
  export type InvoiceHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceHistory
     */
    select?: InvoiceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceHistory
     */
    omit?: InvoiceHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the InvoiceHistory to update in case it exists.
     */
    where: InvoiceHistoryWhereUniqueInput
    /**
     * In case the InvoiceHistory found by the `where` argument doesn't exist, create a new InvoiceHistory with this data.
     */
    create: XOR<InvoiceHistoryCreateInput, InvoiceHistoryUncheckedCreateInput>
    /**
     * In case the InvoiceHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceHistoryUpdateInput, InvoiceHistoryUncheckedUpdateInput>
  }

  /**
   * InvoiceHistory delete
   */
  export type InvoiceHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceHistory
     */
    select?: InvoiceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceHistory
     */
    omit?: InvoiceHistoryOmit<ExtArgs> | null
    /**
     * Filter which InvoiceHistory to delete.
     */
    where: InvoiceHistoryWhereUniqueInput
  }

  /**
   * InvoiceHistory deleteMany
   */
  export type InvoiceHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceHistories to delete
     */
    where?: InvoiceHistoryWhereInput
    /**
     * Limit how many InvoiceHistories to delete.
     */
    limit?: number
  }

  /**
   * InvoiceHistory without action
   */
  export type InvoiceHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceHistory
     */
    select?: InvoiceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceHistory
     */
    omit?: InvoiceHistoryOmit<ExtArgs> | null
  }


  /**
   * Model BalanceSnapshot
   */

  export type AggregateBalanceSnapshot = {
    _count: BalanceSnapshotCountAggregateOutputType | null
    _avg: BalanceSnapshotAvgAggregateOutputType | null
    _sum: BalanceSnapshotSumAggregateOutputType | null
    _min: BalanceSnapshotMinAggregateOutputType | null
    _max: BalanceSnapshotMaxAggregateOutputType | null
  }

  export type BalanceSnapshotAvgAggregateOutputType = {
    totalBalance: number | null
    confirmedBalance: number | null
    unconfirmedBalance: number | null
    lockedBalance: number | null
    reservedBalanceAnchor: number | null
    channelBalance: number | null
    pendingChannelBalance: number | null
  }

  export type BalanceSnapshotSumAggregateOutputType = {
    totalBalance: bigint | null
    confirmedBalance: bigint | null
    unconfirmedBalance: bigint | null
    lockedBalance: bigint | null
    reservedBalanceAnchor: bigint | null
    channelBalance: bigint | null
    pendingChannelBalance: bigint | null
  }

  export type BalanceSnapshotMinAggregateOutputType = {
    id: string | null
    totalBalance: bigint | null
    confirmedBalance: bigint | null
    unconfirmedBalance: bigint | null
    lockedBalance: bigint | null
    reservedBalanceAnchor: bigint | null
    channelBalance: bigint | null
    pendingChannelBalance: bigint | null
    timestamp: Date | null
  }

  export type BalanceSnapshotMaxAggregateOutputType = {
    id: string | null
    totalBalance: bigint | null
    confirmedBalance: bigint | null
    unconfirmedBalance: bigint | null
    lockedBalance: bigint | null
    reservedBalanceAnchor: bigint | null
    channelBalance: bigint | null
    pendingChannelBalance: bigint | null
    timestamp: Date | null
  }

  export type BalanceSnapshotCountAggregateOutputType = {
    id: number
    totalBalance: number
    confirmedBalance: number
    unconfirmedBalance: number
    lockedBalance: number
    reservedBalanceAnchor: number
    channelBalance: number
    pendingChannelBalance: number
    timestamp: number
    _all: number
  }


  export type BalanceSnapshotAvgAggregateInputType = {
    totalBalance?: true
    confirmedBalance?: true
    unconfirmedBalance?: true
    lockedBalance?: true
    reservedBalanceAnchor?: true
    channelBalance?: true
    pendingChannelBalance?: true
  }

  export type BalanceSnapshotSumAggregateInputType = {
    totalBalance?: true
    confirmedBalance?: true
    unconfirmedBalance?: true
    lockedBalance?: true
    reservedBalanceAnchor?: true
    channelBalance?: true
    pendingChannelBalance?: true
  }

  export type BalanceSnapshotMinAggregateInputType = {
    id?: true
    totalBalance?: true
    confirmedBalance?: true
    unconfirmedBalance?: true
    lockedBalance?: true
    reservedBalanceAnchor?: true
    channelBalance?: true
    pendingChannelBalance?: true
    timestamp?: true
  }

  export type BalanceSnapshotMaxAggregateInputType = {
    id?: true
    totalBalance?: true
    confirmedBalance?: true
    unconfirmedBalance?: true
    lockedBalance?: true
    reservedBalanceAnchor?: true
    channelBalance?: true
    pendingChannelBalance?: true
    timestamp?: true
  }

  export type BalanceSnapshotCountAggregateInputType = {
    id?: true
    totalBalance?: true
    confirmedBalance?: true
    unconfirmedBalance?: true
    lockedBalance?: true
    reservedBalanceAnchor?: true
    channelBalance?: true
    pendingChannelBalance?: true
    timestamp?: true
    _all?: true
  }

  export type BalanceSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BalanceSnapshot to aggregate.
     */
    where?: BalanceSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BalanceSnapshots to fetch.
     */
    orderBy?: BalanceSnapshotOrderByWithRelationInput | BalanceSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BalanceSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BalanceSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BalanceSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BalanceSnapshots
    **/
    _count?: true | BalanceSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BalanceSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BalanceSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BalanceSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BalanceSnapshotMaxAggregateInputType
  }

  export type GetBalanceSnapshotAggregateType<T extends BalanceSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateBalanceSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBalanceSnapshot[P]>
      : GetScalarType<T[P], AggregateBalanceSnapshot[P]>
  }




  export type BalanceSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BalanceSnapshotWhereInput
    orderBy?: BalanceSnapshotOrderByWithAggregationInput | BalanceSnapshotOrderByWithAggregationInput[]
    by: BalanceSnapshotScalarFieldEnum[] | BalanceSnapshotScalarFieldEnum
    having?: BalanceSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BalanceSnapshotCountAggregateInputType | true
    _avg?: BalanceSnapshotAvgAggregateInputType
    _sum?: BalanceSnapshotSumAggregateInputType
    _min?: BalanceSnapshotMinAggregateInputType
    _max?: BalanceSnapshotMaxAggregateInputType
  }

  export type BalanceSnapshotGroupByOutputType = {
    id: string
    totalBalance: bigint
    confirmedBalance: bigint
    unconfirmedBalance: bigint
    lockedBalance: bigint
    reservedBalanceAnchor: bigint
    channelBalance: bigint | null
    pendingChannelBalance: bigint | null
    timestamp: Date
    _count: BalanceSnapshotCountAggregateOutputType | null
    _avg: BalanceSnapshotAvgAggregateOutputType | null
    _sum: BalanceSnapshotSumAggregateOutputType | null
    _min: BalanceSnapshotMinAggregateOutputType | null
    _max: BalanceSnapshotMaxAggregateOutputType | null
  }

  type GetBalanceSnapshotGroupByPayload<T extends BalanceSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BalanceSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BalanceSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BalanceSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], BalanceSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type BalanceSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalBalance?: boolean
    confirmedBalance?: boolean
    unconfirmedBalance?: boolean
    lockedBalance?: boolean
    reservedBalanceAnchor?: boolean
    channelBalance?: boolean
    pendingChannelBalance?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["balanceSnapshot"]>

  export type BalanceSnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalBalance?: boolean
    confirmedBalance?: boolean
    unconfirmedBalance?: boolean
    lockedBalance?: boolean
    reservedBalanceAnchor?: boolean
    channelBalance?: boolean
    pendingChannelBalance?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["balanceSnapshot"]>

  export type BalanceSnapshotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalBalance?: boolean
    confirmedBalance?: boolean
    unconfirmedBalance?: boolean
    lockedBalance?: boolean
    reservedBalanceAnchor?: boolean
    channelBalance?: boolean
    pendingChannelBalance?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["balanceSnapshot"]>

  export type BalanceSnapshotSelectScalar = {
    id?: boolean
    totalBalance?: boolean
    confirmedBalance?: boolean
    unconfirmedBalance?: boolean
    lockedBalance?: boolean
    reservedBalanceAnchor?: boolean
    channelBalance?: boolean
    pendingChannelBalance?: boolean
    timestamp?: boolean
  }

  export type BalanceSnapshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "totalBalance" | "confirmedBalance" | "unconfirmedBalance" | "lockedBalance" | "reservedBalanceAnchor" | "channelBalance" | "pendingChannelBalance" | "timestamp", ExtArgs["result"]["balanceSnapshot"]>

  export type $BalanceSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BalanceSnapshot"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      totalBalance: bigint
      confirmedBalance: bigint
      unconfirmedBalance: bigint
      lockedBalance: bigint
      reservedBalanceAnchor: bigint
      channelBalance: bigint | null
      pendingChannelBalance: bigint | null
      timestamp: Date
    }, ExtArgs["result"]["balanceSnapshot"]>
    composites: {}
  }

  type BalanceSnapshotGetPayload<S extends boolean | null | undefined | BalanceSnapshotDefaultArgs> = $Result.GetResult<Prisma.$BalanceSnapshotPayload, S>

  type BalanceSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BalanceSnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BalanceSnapshotCountAggregateInputType | true
    }

  export interface BalanceSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BalanceSnapshot'], meta: { name: 'BalanceSnapshot' } }
    /**
     * Find zero or one BalanceSnapshot that matches the filter.
     * @param {BalanceSnapshotFindUniqueArgs} args - Arguments to find a BalanceSnapshot
     * @example
     * // Get one BalanceSnapshot
     * const balanceSnapshot = await prisma.balanceSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BalanceSnapshotFindUniqueArgs>(args: SelectSubset<T, BalanceSnapshotFindUniqueArgs<ExtArgs>>): Prisma__BalanceSnapshotClient<$Result.GetResult<Prisma.$BalanceSnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BalanceSnapshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BalanceSnapshotFindUniqueOrThrowArgs} args - Arguments to find a BalanceSnapshot
     * @example
     * // Get one BalanceSnapshot
     * const balanceSnapshot = await prisma.balanceSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BalanceSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, BalanceSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BalanceSnapshotClient<$Result.GetResult<Prisma.$BalanceSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BalanceSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceSnapshotFindFirstArgs} args - Arguments to find a BalanceSnapshot
     * @example
     * // Get one BalanceSnapshot
     * const balanceSnapshot = await prisma.balanceSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BalanceSnapshotFindFirstArgs>(args?: SelectSubset<T, BalanceSnapshotFindFirstArgs<ExtArgs>>): Prisma__BalanceSnapshotClient<$Result.GetResult<Prisma.$BalanceSnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BalanceSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceSnapshotFindFirstOrThrowArgs} args - Arguments to find a BalanceSnapshot
     * @example
     * // Get one BalanceSnapshot
     * const balanceSnapshot = await prisma.balanceSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BalanceSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, BalanceSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__BalanceSnapshotClient<$Result.GetResult<Prisma.$BalanceSnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BalanceSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BalanceSnapshots
     * const balanceSnapshots = await prisma.balanceSnapshot.findMany()
     * 
     * // Get first 10 BalanceSnapshots
     * const balanceSnapshots = await prisma.balanceSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const balanceSnapshotWithIdOnly = await prisma.balanceSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BalanceSnapshotFindManyArgs>(args?: SelectSubset<T, BalanceSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalanceSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BalanceSnapshot.
     * @param {BalanceSnapshotCreateArgs} args - Arguments to create a BalanceSnapshot.
     * @example
     * // Create one BalanceSnapshot
     * const BalanceSnapshot = await prisma.balanceSnapshot.create({
     *   data: {
     *     // ... data to create a BalanceSnapshot
     *   }
     * })
     * 
     */
    create<T extends BalanceSnapshotCreateArgs>(args: SelectSubset<T, BalanceSnapshotCreateArgs<ExtArgs>>): Prisma__BalanceSnapshotClient<$Result.GetResult<Prisma.$BalanceSnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BalanceSnapshots.
     * @param {BalanceSnapshotCreateManyArgs} args - Arguments to create many BalanceSnapshots.
     * @example
     * // Create many BalanceSnapshots
     * const balanceSnapshot = await prisma.balanceSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BalanceSnapshotCreateManyArgs>(args?: SelectSubset<T, BalanceSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BalanceSnapshots and returns the data saved in the database.
     * @param {BalanceSnapshotCreateManyAndReturnArgs} args - Arguments to create many BalanceSnapshots.
     * @example
     * // Create many BalanceSnapshots
     * const balanceSnapshot = await prisma.balanceSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BalanceSnapshots and only return the `id`
     * const balanceSnapshotWithIdOnly = await prisma.balanceSnapshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BalanceSnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, BalanceSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalanceSnapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BalanceSnapshot.
     * @param {BalanceSnapshotDeleteArgs} args - Arguments to delete one BalanceSnapshot.
     * @example
     * // Delete one BalanceSnapshot
     * const BalanceSnapshot = await prisma.balanceSnapshot.delete({
     *   where: {
     *     // ... filter to delete one BalanceSnapshot
     *   }
     * })
     * 
     */
    delete<T extends BalanceSnapshotDeleteArgs>(args: SelectSubset<T, BalanceSnapshotDeleteArgs<ExtArgs>>): Prisma__BalanceSnapshotClient<$Result.GetResult<Prisma.$BalanceSnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BalanceSnapshot.
     * @param {BalanceSnapshotUpdateArgs} args - Arguments to update one BalanceSnapshot.
     * @example
     * // Update one BalanceSnapshot
     * const balanceSnapshot = await prisma.balanceSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BalanceSnapshotUpdateArgs>(args: SelectSubset<T, BalanceSnapshotUpdateArgs<ExtArgs>>): Prisma__BalanceSnapshotClient<$Result.GetResult<Prisma.$BalanceSnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BalanceSnapshots.
     * @param {BalanceSnapshotDeleteManyArgs} args - Arguments to filter BalanceSnapshots to delete.
     * @example
     * // Delete a few BalanceSnapshots
     * const { count } = await prisma.balanceSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BalanceSnapshotDeleteManyArgs>(args?: SelectSubset<T, BalanceSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BalanceSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BalanceSnapshots
     * const balanceSnapshot = await prisma.balanceSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BalanceSnapshotUpdateManyArgs>(args: SelectSubset<T, BalanceSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BalanceSnapshots and returns the data updated in the database.
     * @param {BalanceSnapshotUpdateManyAndReturnArgs} args - Arguments to update many BalanceSnapshots.
     * @example
     * // Update many BalanceSnapshots
     * const balanceSnapshot = await prisma.balanceSnapshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BalanceSnapshots and only return the `id`
     * const balanceSnapshotWithIdOnly = await prisma.balanceSnapshot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BalanceSnapshotUpdateManyAndReturnArgs>(args: SelectSubset<T, BalanceSnapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalanceSnapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BalanceSnapshot.
     * @param {BalanceSnapshotUpsertArgs} args - Arguments to update or create a BalanceSnapshot.
     * @example
     * // Update or create a BalanceSnapshot
     * const balanceSnapshot = await prisma.balanceSnapshot.upsert({
     *   create: {
     *     // ... data to create a BalanceSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BalanceSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends BalanceSnapshotUpsertArgs>(args: SelectSubset<T, BalanceSnapshotUpsertArgs<ExtArgs>>): Prisma__BalanceSnapshotClient<$Result.GetResult<Prisma.$BalanceSnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BalanceSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceSnapshotCountArgs} args - Arguments to filter BalanceSnapshots to count.
     * @example
     * // Count the number of BalanceSnapshots
     * const count = await prisma.balanceSnapshot.count({
     *   where: {
     *     // ... the filter for the BalanceSnapshots we want to count
     *   }
     * })
    **/
    count<T extends BalanceSnapshotCountArgs>(
      args?: Subset<T, BalanceSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BalanceSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BalanceSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BalanceSnapshotAggregateArgs>(args: Subset<T, BalanceSnapshotAggregateArgs>): Prisma.PrismaPromise<GetBalanceSnapshotAggregateType<T>>

    /**
     * Group by BalanceSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceSnapshotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BalanceSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BalanceSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: BalanceSnapshotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BalanceSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBalanceSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BalanceSnapshot model
   */
  readonly fields: BalanceSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BalanceSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BalanceSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BalanceSnapshot model
   */
  interface BalanceSnapshotFieldRefs {
    readonly id: FieldRef<"BalanceSnapshot", 'String'>
    readonly totalBalance: FieldRef<"BalanceSnapshot", 'BigInt'>
    readonly confirmedBalance: FieldRef<"BalanceSnapshot", 'BigInt'>
    readonly unconfirmedBalance: FieldRef<"BalanceSnapshot", 'BigInt'>
    readonly lockedBalance: FieldRef<"BalanceSnapshot", 'BigInt'>
    readonly reservedBalanceAnchor: FieldRef<"BalanceSnapshot", 'BigInt'>
    readonly channelBalance: FieldRef<"BalanceSnapshot", 'BigInt'>
    readonly pendingChannelBalance: FieldRef<"BalanceSnapshot", 'BigInt'>
    readonly timestamp: FieldRef<"BalanceSnapshot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BalanceSnapshot findUnique
   */
  export type BalanceSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceSnapshot
     */
    select?: BalanceSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceSnapshot
     */
    omit?: BalanceSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which BalanceSnapshot to fetch.
     */
    where: BalanceSnapshotWhereUniqueInput
  }

  /**
   * BalanceSnapshot findUniqueOrThrow
   */
  export type BalanceSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceSnapshot
     */
    select?: BalanceSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceSnapshot
     */
    omit?: BalanceSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which BalanceSnapshot to fetch.
     */
    where: BalanceSnapshotWhereUniqueInput
  }

  /**
   * BalanceSnapshot findFirst
   */
  export type BalanceSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceSnapshot
     */
    select?: BalanceSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceSnapshot
     */
    omit?: BalanceSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which BalanceSnapshot to fetch.
     */
    where?: BalanceSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BalanceSnapshots to fetch.
     */
    orderBy?: BalanceSnapshotOrderByWithRelationInput | BalanceSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BalanceSnapshots.
     */
    cursor?: BalanceSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BalanceSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BalanceSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BalanceSnapshots.
     */
    distinct?: BalanceSnapshotScalarFieldEnum | BalanceSnapshotScalarFieldEnum[]
  }

  /**
   * BalanceSnapshot findFirstOrThrow
   */
  export type BalanceSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceSnapshot
     */
    select?: BalanceSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceSnapshot
     */
    omit?: BalanceSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which BalanceSnapshot to fetch.
     */
    where?: BalanceSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BalanceSnapshots to fetch.
     */
    orderBy?: BalanceSnapshotOrderByWithRelationInput | BalanceSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BalanceSnapshots.
     */
    cursor?: BalanceSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BalanceSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BalanceSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BalanceSnapshots.
     */
    distinct?: BalanceSnapshotScalarFieldEnum | BalanceSnapshotScalarFieldEnum[]
  }

  /**
   * BalanceSnapshot findMany
   */
  export type BalanceSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceSnapshot
     */
    select?: BalanceSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceSnapshot
     */
    omit?: BalanceSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which BalanceSnapshots to fetch.
     */
    where?: BalanceSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BalanceSnapshots to fetch.
     */
    orderBy?: BalanceSnapshotOrderByWithRelationInput | BalanceSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BalanceSnapshots.
     */
    cursor?: BalanceSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BalanceSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BalanceSnapshots.
     */
    skip?: number
    distinct?: BalanceSnapshotScalarFieldEnum | BalanceSnapshotScalarFieldEnum[]
  }

  /**
   * BalanceSnapshot create
   */
  export type BalanceSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceSnapshot
     */
    select?: BalanceSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceSnapshot
     */
    omit?: BalanceSnapshotOmit<ExtArgs> | null
    /**
     * The data needed to create a BalanceSnapshot.
     */
    data: XOR<BalanceSnapshotCreateInput, BalanceSnapshotUncheckedCreateInput>
  }

  /**
   * BalanceSnapshot createMany
   */
  export type BalanceSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BalanceSnapshots.
     */
    data: BalanceSnapshotCreateManyInput | BalanceSnapshotCreateManyInput[]
  }

  /**
   * BalanceSnapshot createManyAndReturn
   */
  export type BalanceSnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceSnapshot
     */
    select?: BalanceSnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceSnapshot
     */
    omit?: BalanceSnapshotOmit<ExtArgs> | null
    /**
     * The data used to create many BalanceSnapshots.
     */
    data: BalanceSnapshotCreateManyInput | BalanceSnapshotCreateManyInput[]
  }

  /**
   * BalanceSnapshot update
   */
  export type BalanceSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceSnapshot
     */
    select?: BalanceSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceSnapshot
     */
    omit?: BalanceSnapshotOmit<ExtArgs> | null
    /**
     * The data needed to update a BalanceSnapshot.
     */
    data: XOR<BalanceSnapshotUpdateInput, BalanceSnapshotUncheckedUpdateInput>
    /**
     * Choose, which BalanceSnapshot to update.
     */
    where: BalanceSnapshotWhereUniqueInput
  }

  /**
   * BalanceSnapshot updateMany
   */
  export type BalanceSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BalanceSnapshots.
     */
    data: XOR<BalanceSnapshotUpdateManyMutationInput, BalanceSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which BalanceSnapshots to update
     */
    where?: BalanceSnapshotWhereInput
    /**
     * Limit how many BalanceSnapshots to update.
     */
    limit?: number
  }

  /**
   * BalanceSnapshot updateManyAndReturn
   */
  export type BalanceSnapshotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceSnapshot
     */
    select?: BalanceSnapshotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceSnapshot
     */
    omit?: BalanceSnapshotOmit<ExtArgs> | null
    /**
     * The data used to update BalanceSnapshots.
     */
    data: XOR<BalanceSnapshotUpdateManyMutationInput, BalanceSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which BalanceSnapshots to update
     */
    where?: BalanceSnapshotWhereInput
    /**
     * Limit how many BalanceSnapshots to update.
     */
    limit?: number
  }

  /**
   * BalanceSnapshot upsert
   */
  export type BalanceSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceSnapshot
     */
    select?: BalanceSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceSnapshot
     */
    omit?: BalanceSnapshotOmit<ExtArgs> | null
    /**
     * The filter to search for the BalanceSnapshot to update in case it exists.
     */
    where: BalanceSnapshotWhereUniqueInput
    /**
     * In case the BalanceSnapshot found by the `where` argument doesn't exist, create a new BalanceSnapshot with this data.
     */
    create: XOR<BalanceSnapshotCreateInput, BalanceSnapshotUncheckedCreateInput>
    /**
     * In case the BalanceSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BalanceSnapshotUpdateInput, BalanceSnapshotUncheckedUpdateInput>
  }

  /**
   * BalanceSnapshot delete
   */
  export type BalanceSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceSnapshot
     */
    select?: BalanceSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceSnapshot
     */
    omit?: BalanceSnapshotOmit<ExtArgs> | null
    /**
     * Filter which BalanceSnapshot to delete.
     */
    where: BalanceSnapshotWhereUniqueInput
  }

  /**
   * BalanceSnapshot deleteMany
   */
  export type BalanceSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BalanceSnapshots to delete
     */
    where?: BalanceSnapshotWhereInput
    /**
     * Limit how many BalanceSnapshots to delete.
     */
    limit?: number
  }

  /**
   * BalanceSnapshot without action
   */
  export type BalanceSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceSnapshot
     */
    select?: BalanceSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceSnapshot
     */
    omit?: BalanceSnapshotOmit<ExtArgs> | null
  }


  /**
   * Model TransactionHistory
   */

  export type AggregateTransactionHistory = {
    _count: TransactionHistoryCountAggregateOutputType | null
    _avg: TransactionHistoryAvgAggregateOutputType | null
    _sum: TransactionHistorySumAggregateOutputType | null
    _min: TransactionHistoryMinAggregateOutputType | null
    _max: TransactionHistoryMaxAggregateOutputType | null
  }

  export type TransactionHistoryAvgAggregateOutputType = {
    amount: number | null
    fee: number | null
    blockHeight: number | null
    confirmations: number | null
  }

  export type TransactionHistorySumAggregateOutputType = {
    amount: bigint | null
    fee: bigint | null
    blockHeight: number | null
    confirmations: number | null
  }

  export type TransactionHistoryMinAggregateOutputType = {
    id: string | null
    txid: string | null
    amount: bigint | null
    fee: bigint | null
    type: $Enums.TransactionType | null
    status: $Enums.TransactionStatus | null
    blockHeight: number | null
    confirmations: number | null
    toAddress: string | null
    fromAddress: string | null
    memo: string | null
    createdAt: Date | null
    confirmedAt: Date | null
  }

  export type TransactionHistoryMaxAggregateOutputType = {
    id: string | null
    txid: string | null
    amount: bigint | null
    fee: bigint | null
    type: $Enums.TransactionType | null
    status: $Enums.TransactionStatus | null
    blockHeight: number | null
    confirmations: number | null
    toAddress: string | null
    fromAddress: string | null
    memo: string | null
    createdAt: Date | null
    confirmedAt: Date | null
  }

  export type TransactionHistoryCountAggregateOutputType = {
    id: number
    txid: number
    amount: number
    fee: number
    type: number
    status: number
    blockHeight: number
    confirmations: number
    toAddress: number
    fromAddress: number
    memo: number
    createdAt: number
    confirmedAt: number
    _all: number
  }


  export type TransactionHistoryAvgAggregateInputType = {
    amount?: true
    fee?: true
    blockHeight?: true
    confirmations?: true
  }

  export type TransactionHistorySumAggregateInputType = {
    amount?: true
    fee?: true
    blockHeight?: true
    confirmations?: true
  }

  export type TransactionHistoryMinAggregateInputType = {
    id?: true
    txid?: true
    amount?: true
    fee?: true
    type?: true
    status?: true
    blockHeight?: true
    confirmations?: true
    toAddress?: true
    fromAddress?: true
    memo?: true
    createdAt?: true
    confirmedAt?: true
  }

  export type TransactionHistoryMaxAggregateInputType = {
    id?: true
    txid?: true
    amount?: true
    fee?: true
    type?: true
    status?: true
    blockHeight?: true
    confirmations?: true
    toAddress?: true
    fromAddress?: true
    memo?: true
    createdAt?: true
    confirmedAt?: true
  }

  export type TransactionHistoryCountAggregateInputType = {
    id?: true
    txid?: true
    amount?: true
    fee?: true
    type?: true
    status?: true
    blockHeight?: true
    confirmations?: true
    toAddress?: true
    fromAddress?: true
    memo?: true
    createdAt?: true
    confirmedAt?: true
    _all?: true
  }

  export type TransactionHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionHistory to aggregate.
     */
    where?: TransactionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionHistories to fetch.
     */
    orderBy?: TransactionHistoryOrderByWithRelationInput | TransactionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionHistories
    **/
    _count?: true | TransactionHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionHistoryMaxAggregateInputType
  }

  export type GetTransactionHistoryAggregateType<T extends TransactionHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionHistory[P]>
      : GetScalarType<T[P], AggregateTransactionHistory[P]>
  }




  export type TransactionHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionHistoryWhereInput
    orderBy?: TransactionHistoryOrderByWithAggregationInput | TransactionHistoryOrderByWithAggregationInput[]
    by: TransactionHistoryScalarFieldEnum[] | TransactionHistoryScalarFieldEnum
    having?: TransactionHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionHistoryCountAggregateInputType | true
    _avg?: TransactionHistoryAvgAggregateInputType
    _sum?: TransactionHistorySumAggregateInputType
    _min?: TransactionHistoryMinAggregateInputType
    _max?: TransactionHistoryMaxAggregateInputType
  }

  export type TransactionHistoryGroupByOutputType = {
    id: string
    txid: string
    amount: bigint
    fee: bigint | null
    type: $Enums.TransactionType
    status: $Enums.TransactionStatus
    blockHeight: number | null
    confirmations: number | null
    toAddress: string | null
    fromAddress: string | null
    memo: string | null
    createdAt: Date
    confirmedAt: Date | null
    _count: TransactionHistoryCountAggregateOutputType | null
    _avg: TransactionHistoryAvgAggregateOutputType | null
    _sum: TransactionHistorySumAggregateOutputType | null
    _min: TransactionHistoryMinAggregateOutputType | null
    _max: TransactionHistoryMaxAggregateOutputType | null
  }

  type GetTransactionHistoryGroupByPayload<T extends TransactionHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TransactionHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txid?: boolean
    amount?: boolean
    fee?: boolean
    type?: boolean
    status?: boolean
    blockHeight?: boolean
    confirmations?: boolean
    toAddress?: boolean
    fromAddress?: boolean
    memo?: boolean
    createdAt?: boolean
    confirmedAt?: boolean
  }, ExtArgs["result"]["transactionHistory"]>

  export type TransactionHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txid?: boolean
    amount?: boolean
    fee?: boolean
    type?: boolean
    status?: boolean
    blockHeight?: boolean
    confirmations?: boolean
    toAddress?: boolean
    fromAddress?: boolean
    memo?: boolean
    createdAt?: boolean
    confirmedAt?: boolean
  }, ExtArgs["result"]["transactionHistory"]>

  export type TransactionHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txid?: boolean
    amount?: boolean
    fee?: boolean
    type?: boolean
    status?: boolean
    blockHeight?: boolean
    confirmations?: boolean
    toAddress?: boolean
    fromAddress?: boolean
    memo?: boolean
    createdAt?: boolean
    confirmedAt?: boolean
  }, ExtArgs["result"]["transactionHistory"]>

  export type TransactionHistorySelectScalar = {
    id?: boolean
    txid?: boolean
    amount?: boolean
    fee?: boolean
    type?: boolean
    status?: boolean
    blockHeight?: boolean
    confirmations?: boolean
    toAddress?: boolean
    fromAddress?: boolean
    memo?: boolean
    createdAt?: boolean
    confirmedAt?: boolean
  }

  export type TransactionHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "txid" | "amount" | "fee" | "type" | "status" | "blockHeight" | "confirmations" | "toAddress" | "fromAddress" | "memo" | "createdAt" | "confirmedAt", ExtArgs["result"]["transactionHistory"]>

  export type $TransactionHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      txid: string
      amount: bigint
      fee: bigint | null
      type: $Enums.TransactionType
      status: $Enums.TransactionStatus
      blockHeight: number | null
      confirmations: number | null
      toAddress: string | null
      fromAddress: string | null
      memo: string | null
      createdAt: Date
      confirmedAt: Date | null
    }, ExtArgs["result"]["transactionHistory"]>
    composites: {}
  }

  type TransactionHistoryGetPayload<S extends boolean | null | undefined | TransactionHistoryDefaultArgs> = $Result.GetResult<Prisma.$TransactionHistoryPayload, S>

  type TransactionHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionHistoryCountAggregateInputType | true
    }

  export interface TransactionHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransactionHistory'], meta: { name: 'TransactionHistory' } }
    /**
     * Find zero or one TransactionHistory that matches the filter.
     * @param {TransactionHistoryFindUniqueArgs} args - Arguments to find a TransactionHistory
     * @example
     * // Get one TransactionHistory
     * const transactionHistory = await prisma.transactionHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionHistoryFindUniqueArgs>(args: SelectSubset<T, TransactionHistoryFindUniqueArgs<ExtArgs>>): Prisma__TransactionHistoryClient<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransactionHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionHistoryFindUniqueOrThrowArgs} args - Arguments to find a TransactionHistory
     * @example
     * // Get one TransactionHistory
     * const transactionHistory = await prisma.transactionHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionHistoryClient<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryFindFirstArgs} args - Arguments to find a TransactionHistory
     * @example
     * // Get one TransactionHistory
     * const transactionHistory = await prisma.transactionHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionHistoryFindFirstArgs>(args?: SelectSubset<T, TransactionHistoryFindFirstArgs<ExtArgs>>): Prisma__TransactionHistoryClient<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryFindFirstOrThrowArgs} args - Arguments to find a TransactionHistory
     * @example
     * // Get one TransactionHistory
     * const transactionHistory = await prisma.transactionHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionHistoryClient<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransactionHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionHistories
     * const transactionHistories = await prisma.transactionHistory.findMany()
     * 
     * // Get first 10 TransactionHistories
     * const transactionHistories = await prisma.transactionHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionHistoryWithIdOnly = await prisma.transactionHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionHistoryFindManyArgs>(args?: SelectSubset<T, TransactionHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransactionHistory.
     * @param {TransactionHistoryCreateArgs} args - Arguments to create a TransactionHistory.
     * @example
     * // Create one TransactionHistory
     * const TransactionHistory = await prisma.transactionHistory.create({
     *   data: {
     *     // ... data to create a TransactionHistory
     *   }
     * })
     * 
     */
    create<T extends TransactionHistoryCreateArgs>(args: SelectSubset<T, TransactionHistoryCreateArgs<ExtArgs>>): Prisma__TransactionHistoryClient<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransactionHistories.
     * @param {TransactionHistoryCreateManyArgs} args - Arguments to create many TransactionHistories.
     * @example
     * // Create many TransactionHistories
     * const transactionHistory = await prisma.transactionHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionHistoryCreateManyArgs>(args?: SelectSubset<T, TransactionHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransactionHistories and returns the data saved in the database.
     * @param {TransactionHistoryCreateManyAndReturnArgs} args - Arguments to create many TransactionHistories.
     * @example
     * // Create many TransactionHistories
     * const transactionHistory = await prisma.transactionHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransactionHistories and only return the `id`
     * const transactionHistoryWithIdOnly = await prisma.transactionHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransactionHistory.
     * @param {TransactionHistoryDeleteArgs} args - Arguments to delete one TransactionHistory.
     * @example
     * // Delete one TransactionHistory
     * const TransactionHistory = await prisma.transactionHistory.delete({
     *   where: {
     *     // ... filter to delete one TransactionHistory
     *   }
     * })
     * 
     */
    delete<T extends TransactionHistoryDeleteArgs>(args: SelectSubset<T, TransactionHistoryDeleteArgs<ExtArgs>>): Prisma__TransactionHistoryClient<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransactionHistory.
     * @param {TransactionHistoryUpdateArgs} args - Arguments to update one TransactionHistory.
     * @example
     * // Update one TransactionHistory
     * const transactionHistory = await prisma.transactionHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionHistoryUpdateArgs>(args: SelectSubset<T, TransactionHistoryUpdateArgs<ExtArgs>>): Prisma__TransactionHistoryClient<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransactionHistories.
     * @param {TransactionHistoryDeleteManyArgs} args - Arguments to filter TransactionHistories to delete.
     * @example
     * // Delete a few TransactionHistories
     * const { count } = await prisma.transactionHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionHistoryDeleteManyArgs>(args?: SelectSubset<T, TransactionHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionHistories
     * const transactionHistory = await prisma.transactionHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionHistoryUpdateManyArgs>(args: SelectSubset<T, TransactionHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionHistories and returns the data updated in the database.
     * @param {TransactionHistoryUpdateManyAndReturnArgs} args - Arguments to update many TransactionHistories.
     * @example
     * // Update many TransactionHistories
     * const transactionHistory = await prisma.transactionHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransactionHistories and only return the `id`
     * const transactionHistoryWithIdOnly = await prisma.transactionHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransactionHistory.
     * @param {TransactionHistoryUpsertArgs} args - Arguments to update or create a TransactionHistory.
     * @example
     * // Update or create a TransactionHistory
     * const transactionHistory = await prisma.transactionHistory.upsert({
     *   create: {
     *     // ... data to create a TransactionHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionHistory we want to update
     *   }
     * })
     */
    upsert<T extends TransactionHistoryUpsertArgs>(args: SelectSubset<T, TransactionHistoryUpsertArgs<ExtArgs>>): Prisma__TransactionHistoryClient<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransactionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryCountArgs} args - Arguments to filter TransactionHistories to count.
     * @example
     * // Count the number of TransactionHistories
     * const count = await prisma.transactionHistory.count({
     *   where: {
     *     // ... the filter for the TransactionHistories we want to count
     *   }
     * })
    **/
    count<T extends TransactionHistoryCountArgs>(
      args?: Subset<T, TransactionHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionHistoryAggregateArgs>(args: Subset<T, TransactionHistoryAggregateArgs>): Prisma.PrismaPromise<GetTransactionHistoryAggregateType<T>>

    /**
     * Group by TransactionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TransactionHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransactionHistory model
   */
  readonly fields: TransactionHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TransactionHistory model
   */
  interface TransactionHistoryFieldRefs {
    readonly id: FieldRef<"TransactionHistory", 'String'>
    readonly txid: FieldRef<"TransactionHistory", 'String'>
    readonly amount: FieldRef<"TransactionHistory", 'BigInt'>
    readonly fee: FieldRef<"TransactionHistory", 'BigInt'>
    readonly type: FieldRef<"TransactionHistory", 'TransactionType'>
    readonly status: FieldRef<"TransactionHistory", 'TransactionStatus'>
    readonly blockHeight: FieldRef<"TransactionHistory", 'Int'>
    readonly confirmations: FieldRef<"TransactionHistory", 'Int'>
    readonly toAddress: FieldRef<"TransactionHistory", 'String'>
    readonly fromAddress: FieldRef<"TransactionHistory", 'String'>
    readonly memo: FieldRef<"TransactionHistory", 'String'>
    readonly createdAt: FieldRef<"TransactionHistory", 'DateTime'>
    readonly confirmedAt: FieldRef<"TransactionHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TransactionHistory findUnique
   */
  export type TransactionHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
    /**
     * Filter, which TransactionHistory to fetch.
     */
    where: TransactionHistoryWhereUniqueInput
  }

  /**
   * TransactionHistory findUniqueOrThrow
   */
  export type TransactionHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
    /**
     * Filter, which TransactionHistory to fetch.
     */
    where: TransactionHistoryWhereUniqueInput
  }

  /**
   * TransactionHistory findFirst
   */
  export type TransactionHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
    /**
     * Filter, which TransactionHistory to fetch.
     */
    where?: TransactionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionHistories to fetch.
     */
    orderBy?: TransactionHistoryOrderByWithRelationInput | TransactionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionHistories.
     */
    cursor?: TransactionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionHistories.
     */
    distinct?: TransactionHistoryScalarFieldEnum | TransactionHistoryScalarFieldEnum[]
  }

  /**
   * TransactionHistory findFirstOrThrow
   */
  export type TransactionHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
    /**
     * Filter, which TransactionHistory to fetch.
     */
    where?: TransactionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionHistories to fetch.
     */
    orderBy?: TransactionHistoryOrderByWithRelationInput | TransactionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionHistories.
     */
    cursor?: TransactionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionHistories.
     */
    distinct?: TransactionHistoryScalarFieldEnum | TransactionHistoryScalarFieldEnum[]
  }

  /**
   * TransactionHistory findMany
   */
  export type TransactionHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
    /**
     * Filter, which TransactionHistories to fetch.
     */
    where?: TransactionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionHistories to fetch.
     */
    orderBy?: TransactionHistoryOrderByWithRelationInput | TransactionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionHistories.
     */
    cursor?: TransactionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionHistories.
     */
    skip?: number
    distinct?: TransactionHistoryScalarFieldEnum | TransactionHistoryScalarFieldEnum[]
  }

  /**
   * TransactionHistory create
   */
  export type TransactionHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a TransactionHistory.
     */
    data: XOR<TransactionHistoryCreateInput, TransactionHistoryUncheckedCreateInput>
  }

  /**
   * TransactionHistory createMany
   */
  export type TransactionHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionHistories.
     */
    data: TransactionHistoryCreateManyInput | TransactionHistoryCreateManyInput[]
  }

  /**
   * TransactionHistory createManyAndReturn
   */
  export type TransactionHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many TransactionHistories.
     */
    data: TransactionHistoryCreateManyInput | TransactionHistoryCreateManyInput[]
  }

  /**
   * TransactionHistory update
   */
  export type TransactionHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a TransactionHistory.
     */
    data: XOR<TransactionHistoryUpdateInput, TransactionHistoryUncheckedUpdateInput>
    /**
     * Choose, which TransactionHistory to update.
     */
    where: TransactionHistoryWhereUniqueInput
  }

  /**
   * TransactionHistory updateMany
   */
  export type TransactionHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionHistories.
     */
    data: XOR<TransactionHistoryUpdateManyMutationInput, TransactionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TransactionHistories to update
     */
    where?: TransactionHistoryWhereInput
    /**
     * Limit how many TransactionHistories to update.
     */
    limit?: number
  }

  /**
   * TransactionHistory updateManyAndReturn
   */
  export type TransactionHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
    /**
     * The data used to update TransactionHistories.
     */
    data: XOR<TransactionHistoryUpdateManyMutationInput, TransactionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TransactionHistories to update
     */
    where?: TransactionHistoryWhereInput
    /**
     * Limit how many TransactionHistories to update.
     */
    limit?: number
  }

  /**
   * TransactionHistory upsert
   */
  export type TransactionHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the TransactionHistory to update in case it exists.
     */
    where: TransactionHistoryWhereUniqueInput
    /**
     * In case the TransactionHistory found by the `where` argument doesn't exist, create a new TransactionHistory with this data.
     */
    create: XOR<TransactionHistoryCreateInput, TransactionHistoryUncheckedCreateInput>
    /**
     * In case the TransactionHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionHistoryUpdateInput, TransactionHistoryUncheckedUpdateInput>
  }

  /**
   * TransactionHistory delete
   */
  export type TransactionHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
    /**
     * Filter which TransactionHistory to delete.
     */
    where: TransactionHistoryWhereUniqueInput
  }

  /**
   * TransactionHistory deleteMany
   */
  export type TransactionHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionHistories to delete
     */
    where?: TransactionHistoryWhereInput
    /**
     * Limit how many TransactionHistories to delete.
     */
    limit?: number
  }

  /**
   * TransactionHistory without action
   */
  export type TransactionHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    resource: string | null
    details: string | null
    level: $Enums.LogLevel | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    resource: string | null
    details: string | null
    level: $Enums.LogLevel | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    resource: number
    details: number
    level: number
    ipAddress: number
    userAgent: number
    createdAt: number
    _all: number
  }


  export type ActivityLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    resource?: true
    details?: true
    level?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    resource?: true
    details?: true
    level?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    resource?: true
    details?: true
    level?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: string
    userId: string | null
    action: string
    resource: string | null
    details: string | null
    level: $Enums.LogLevel
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    details?: boolean
    level?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    details?: boolean
    level?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    details?: boolean
    level?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    details?: boolean
    level?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "resource" | "details" | "level" | "ipAddress" | "userAgent" | "createdAt", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }
  export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }
  export type ActivityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      action: string
      resource: string | null
      details: string | null
      level: $Enums.LogLevel
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ActivityLog$userArgs<ExtArgs> = {}>(args?: Subset<T, ActivityLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'String'>
    readonly userId: FieldRef<"ActivityLog", 'String'>
    readonly action: FieldRef<"ActivityLog", 'String'>
    readonly resource: FieldRef<"ActivityLog", 'String'>
    readonly details: FieldRef<"ActivityLog", 'String'>
    readonly level: FieldRef<"ActivityLog", 'LogLevel'>
    readonly ipAddress: FieldRef<"ActivityLog", 'String'>
    readonly userAgent: FieldRef<"ActivityLog", 'String'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog.user
   */
  export type ActivityLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
  }


  /**
   * Model SystemConfig
   */

  export type AggregateSystemConfig = {
    _count: SystemConfigCountAggregateOutputType | null
    _min: SystemConfigMinAggregateOutputType | null
    _max: SystemConfigMaxAggregateOutputType | null
  }

  export type SystemConfigMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    description: string | null
    isEncrypted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemConfigMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    description: string | null
    isEncrypted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemConfigCountAggregateOutputType = {
    id: number
    key: number
    value: number
    description: number
    isEncrypted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SystemConfigMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    isEncrypted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemConfigMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    isEncrypted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemConfigCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    isEncrypted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemConfig to aggregate.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemConfigs
    **/
    _count?: true | SystemConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemConfigMaxAggregateInputType
  }

  export type GetSystemConfigAggregateType<T extends SystemConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemConfig[P]>
      : GetScalarType<T[P], AggregateSystemConfig[P]>
  }




  export type SystemConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemConfigWhereInput
    orderBy?: SystemConfigOrderByWithAggregationInput | SystemConfigOrderByWithAggregationInput[]
    by: SystemConfigScalarFieldEnum[] | SystemConfigScalarFieldEnum
    having?: SystemConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemConfigCountAggregateInputType | true
    _min?: SystemConfigMinAggregateInputType
    _max?: SystemConfigMaxAggregateInputType
  }

  export type SystemConfigGroupByOutputType = {
    id: string
    key: string
    value: string
    description: string | null
    isEncrypted: boolean
    createdAt: Date
    updatedAt: Date
    _count: SystemConfigCountAggregateOutputType | null
    _min: SystemConfigMinAggregateOutputType | null
    _max: SystemConfigMaxAggregateOutputType | null
  }

  type GetSystemConfigGroupByPayload<T extends SystemConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemConfigGroupByOutputType[P]>
            : GetScalarType<T[P], SystemConfigGroupByOutputType[P]>
        }
      >
    >


  export type SystemConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    isEncrypted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    isEncrypted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    isEncrypted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    isEncrypted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SystemConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "description" | "isEncrypted" | "createdAt" | "updatedAt", ExtArgs["result"]["systemConfig"]>

  export type $SystemConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      description: string | null
      isEncrypted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["systemConfig"]>
    composites: {}
  }

  type SystemConfigGetPayload<S extends boolean | null | undefined | SystemConfigDefaultArgs> = $Result.GetResult<Prisma.$SystemConfigPayload, S>

  type SystemConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemConfigCountAggregateInputType | true
    }

  export interface SystemConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemConfig'], meta: { name: 'SystemConfig' } }
    /**
     * Find zero or one SystemConfig that matches the filter.
     * @param {SystemConfigFindUniqueArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemConfigFindUniqueArgs>(args: SelectSubset<T, SystemConfigFindUniqueArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemConfigFindUniqueOrThrowArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindFirstArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemConfigFindFirstArgs>(args?: SelectSubset<T, SystemConfigFindFirstArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindFirstOrThrowArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemConfigs
     * const systemConfigs = await prisma.systemConfig.findMany()
     * 
     * // Get first 10 SystemConfigs
     * const systemConfigs = await prisma.systemConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemConfigFindManyArgs>(args?: SelectSubset<T, SystemConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemConfig.
     * @param {SystemConfigCreateArgs} args - Arguments to create a SystemConfig.
     * @example
     * // Create one SystemConfig
     * const SystemConfig = await prisma.systemConfig.create({
     *   data: {
     *     // ... data to create a SystemConfig
     *   }
     * })
     * 
     */
    create<T extends SystemConfigCreateArgs>(args: SelectSubset<T, SystemConfigCreateArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemConfigs.
     * @param {SystemConfigCreateManyArgs} args - Arguments to create many SystemConfigs.
     * @example
     * // Create many SystemConfigs
     * const systemConfig = await prisma.systemConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemConfigCreateManyArgs>(args?: SelectSubset<T, SystemConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemConfigs and returns the data saved in the database.
     * @param {SystemConfigCreateManyAndReturnArgs} args - Arguments to create many SystemConfigs.
     * @example
     * // Create many SystemConfigs
     * const systemConfig = await prisma.systemConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemConfigs and only return the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemConfig.
     * @param {SystemConfigDeleteArgs} args - Arguments to delete one SystemConfig.
     * @example
     * // Delete one SystemConfig
     * const SystemConfig = await prisma.systemConfig.delete({
     *   where: {
     *     // ... filter to delete one SystemConfig
     *   }
     * })
     * 
     */
    delete<T extends SystemConfigDeleteArgs>(args: SelectSubset<T, SystemConfigDeleteArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemConfig.
     * @param {SystemConfigUpdateArgs} args - Arguments to update one SystemConfig.
     * @example
     * // Update one SystemConfig
     * const systemConfig = await prisma.systemConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemConfigUpdateArgs>(args: SelectSubset<T, SystemConfigUpdateArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemConfigs.
     * @param {SystemConfigDeleteManyArgs} args - Arguments to filter SystemConfigs to delete.
     * @example
     * // Delete a few SystemConfigs
     * const { count } = await prisma.systemConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemConfigDeleteManyArgs>(args?: SelectSubset<T, SystemConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemConfigs
     * const systemConfig = await prisma.systemConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemConfigUpdateManyArgs>(args: SelectSubset<T, SystemConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemConfigs and returns the data updated in the database.
     * @param {SystemConfigUpdateManyAndReturnArgs} args - Arguments to update many SystemConfigs.
     * @example
     * // Update many SystemConfigs
     * const systemConfig = await prisma.systemConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemConfigs and only return the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SystemConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemConfig.
     * @param {SystemConfigUpsertArgs} args - Arguments to update or create a SystemConfig.
     * @example
     * // Update or create a SystemConfig
     * const systemConfig = await prisma.systemConfig.upsert({
     *   create: {
     *     // ... data to create a SystemConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemConfig we want to update
     *   }
     * })
     */
    upsert<T extends SystemConfigUpsertArgs>(args: SelectSubset<T, SystemConfigUpsertArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigCountArgs} args - Arguments to filter SystemConfigs to count.
     * @example
     * // Count the number of SystemConfigs
     * const count = await prisma.systemConfig.count({
     *   where: {
     *     // ... the filter for the SystemConfigs we want to count
     *   }
     * })
    **/
    count<T extends SystemConfigCountArgs>(
      args?: Subset<T, SystemConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemConfigAggregateArgs>(args: Subset<T, SystemConfigAggregateArgs>): Prisma.PrismaPromise<GetSystemConfigAggregateType<T>>

    /**
     * Group by SystemConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemConfigGroupByArgs['orderBy'] }
        : { orderBy?: SystemConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemConfig model
   */
  readonly fields: SystemConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemConfig model
   */
  interface SystemConfigFieldRefs {
    readonly id: FieldRef<"SystemConfig", 'String'>
    readonly key: FieldRef<"SystemConfig", 'String'>
    readonly value: FieldRef<"SystemConfig", 'String'>
    readonly description: FieldRef<"SystemConfig", 'String'>
    readonly isEncrypted: FieldRef<"SystemConfig", 'Boolean'>
    readonly createdAt: FieldRef<"SystemConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"SystemConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemConfig findUnique
   */
  export type SystemConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig findUniqueOrThrow
   */
  export type SystemConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig findFirst
   */
  export type SystemConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemConfigs.
     */
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig findFirstOrThrow
   */
  export type SystemConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemConfigs.
     */
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig findMany
   */
  export type SystemConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfigs to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig create
   */
  export type SystemConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemConfig.
     */
    data: XOR<SystemConfigCreateInput, SystemConfigUncheckedCreateInput>
  }

  /**
   * SystemConfig createMany
   */
  export type SystemConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemConfigs.
     */
    data: SystemConfigCreateManyInput | SystemConfigCreateManyInput[]
  }

  /**
   * SystemConfig createManyAndReturn
   */
  export type SystemConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data used to create many SystemConfigs.
     */
    data: SystemConfigCreateManyInput | SystemConfigCreateManyInput[]
  }

  /**
   * SystemConfig update
   */
  export type SystemConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemConfig.
     */
    data: XOR<SystemConfigUpdateInput, SystemConfigUncheckedUpdateInput>
    /**
     * Choose, which SystemConfig to update.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig updateMany
   */
  export type SystemConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemConfigs.
     */
    data: XOR<SystemConfigUpdateManyMutationInput, SystemConfigUncheckedUpdateManyInput>
    /**
     * Filter which SystemConfigs to update
     */
    where?: SystemConfigWhereInput
    /**
     * Limit how many SystemConfigs to update.
     */
    limit?: number
  }

  /**
   * SystemConfig updateManyAndReturn
   */
  export type SystemConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data used to update SystemConfigs.
     */
    data: XOR<SystemConfigUpdateManyMutationInput, SystemConfigUncheckedUpdateManyInput>
    /**
     * Filter which SystemConfigs to update
     */
    where?: SystemConfigWhereInput
    /**
     * Limit how many SystemConfigs to update.
     */
    limit?: number
  }

  /**
   * SystemConfig upsert
   */
  export type SystemConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemConfig to update in case it exists.
     */
    where: SystemConfigWhereUniqueInput
    /**
     * In case the SystemConfig found by the `where` argument doesn't exist, create a new SystemConfig with this data.
     */
    create: XOR<SystemConfigCreateInput, SystemConfigUncheckedCreateInput>
    /**
     * In case the SystemConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemConfigUpdateInput, SystemConfigUncheckedUpdateInput>
  }

  /**
   * SystemConfig delete
   */
  export type SystemConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter which SystemConfig to delete.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig deleteMany
   */
  export type SystemConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemConfigs to delete
     */
    where?: SystemConfigWhereInput
    /**
     * Limit how many SystemConfigs to delete.
     */
    limit?: number
  }

  /**
   * SystemConfig without action
   */
  export type SystemConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
  }


  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    name: string | null
    keyHash: string | null
    permissions: string | null
    isActive: boolean | null
    lastUsedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    keyHash: string | null
    permissions: string | null
    isActive: boolean | null
    lastUsedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    name: number
    keyHash: number
    permissions: number
    isActive: number
    lastUsedAt: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApiKeyMinAggregateInputType = {
    id?: true
    name?: true
    keyHash?: true
    permissions?: true
    isActive?: true
    lastUsedAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    name?: true
    keyHash?: true
    permissions?: true
    isActive?: true
    lastUsedAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    name?: true
    keyHash?: true
    permissions?: true
    isActive?: true
    lastUsedAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    name: string
    keyHash: string
    permissions: string
    isActive: boolean
    lastUsedAt: Date | null
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    keyHash?: boolean
    permissions?: boolean
    isActive?: boolean
    lastUsedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    keyHash?: boolean
    permissions?: boolean
    isActive?: boolean
    lastUsedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    keyHash?: boolean
    permissions?: boolean
    isActive?: boolean
    lastUsedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    name?: boolean
    keyHash?: boolean
    permissions?: boolean
    isActive?: boolean
    lastUsedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "keyHash" | "permissions" | "isActive" | "lastUsedAt" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["apiKey"]>

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      keyHash: string
      permissions: string
      isActive: boolean
      lastUsedAt: Date | null
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeys and returns the data saved in the database.
     * @param {ApiKeyCreateManyAndReturnArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys and returns the data updated in the database.
     * @param {ApiKeyUpdateManyAndReturnArgs} args - Arguments to update many ApiKeys.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiKey model
   */
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly name: FieldRef<"ApiKey", 'String'>
    readonly keyHash: FieldRef<"ApiKey", 'String'>
    readonly permissions: FieldRef<"ApiKey", 'String'>
    readonly isActive: FieldRef<"ApiKey", 'Boolean'>
    readonly lastUsedAt: FieldRef<"ApiKey", 'DateTime'>
    readonly expiresAt: FieldRef<"ApiKey", 'DateTime'>
    readonly createdAt: FieldRef<"ApiKey", 'DateTime'>
    readonly updatedAt: FieldRef<"ApiKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
  }

  /**
   * ApiKey createManyAndReturn
   */
  export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey updateManyAndReturn
   */
  export type ApiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to delete.
     */
    limit?: number
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NodeConfigScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    nodeAlias: 'nodeAlias',
    host: 'host',
    port: 'port',
    network: 'network',
    isDefault: 'isDefault',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NodeConfigScalarFieldEnum = (typeof NodeConfigScalarFieldEnum)[keyof typeof NodeConfigScalarFieldEnum]


  export const ChannelHistoryScalarFieldEnum: {
    id: 'id',
    channelPoint: 'channelPoint',
    peerPubkey: 'peerPubkey',
    capacity: 'capacity',
    localBalance: 'localBalance',
    remoteBalance: 'remoteBalance',
    status: 'status',
    isActive: 'isActive',
    openHeight: 'openHeight',
    closeHeight: 'closeHeight',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChannelHistoryScalarFieldEnum = (typeof ChannelHistoryScalarFieldEnum)[keyof typeof ChannelHistoryScalarFieldEnum]


  export const ChannelStatusUpdateScalarFieldEnum: {
    id: 'id',
    channelHistoryId: 'channelHistoryId',
    previousStatus: 'previousStatus',
    newStatus: 'newStatus',
    blockHeight: 'blockHeight',
    confirmations: 'confirmations',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type ChannelStatusUpdateScalarFieldEnum = (typeof ChannelStatusUpdateScalarFieldEnum)[keyof typeof ChannelStatusUpdateScalarFieldEnum]


  export const PaymentHistoryScalarFieldEnum: {
    id: 'id',
    paymentHash: 'paymentHash',
    paymentRequest: 'paymentRequest',
    destination: 'destination',
    amount: 'amount',
    fee: 'fee',
    status: 'status',
    preimage: 'preimage',
    failureReason: 'failureReason',
    createdAt: 'createdAt',
    completedAt: 'completedAt'
  };

  export type PaymentHistoryScalarFieldEnum = (typeof PaymentHistoryScalarFieldEnum)[keyof typeof PaymentHistoryScalarFieldEnum]


  export const InvoiceHistoryScalarFieldEnum: {
    id: 'id',
    paymentHash: 'paymentHash',
    paymentRequest: 'paymentRequest',
    amount: 'amount',
    memo: 'memo',
    status: 'status',
    isPaid: 'isPaid',
    amountPaid: 'amountPaid',
    createdAt: 'createdAt',
    paidAt: 'paidAt',
    expiresAt: 'expiresAt'
  };

  export type InvoiceHistoryScalarFieldEnum = (typeof InvoiceHistoryScalarFieldEnum)[keyof typeof InvoiceHistoryScalarFieldEnum]


  export const BalanceSnapshotScalarFieldEnum: {
    id: 'id',
    totalBalance: 'totalBalance',
    confirmedBalance: 'confirmedBalance',
    unconfirmedBalance: 'unconfirmedBalance',
    lockedBalance: 'lockedBalance',
    reservedBalanceAnchor: 'reservedBalanceAnchor',
    channelBalance: 'channelBalance',
    pendingChannelBalance: 'pendingChannelBalance',
    timestamp: 'timestamp'
  };

  export type BalanceSnapshotScalarFieldEnum = (typeof BalanceSnapshotScalarFieldEnum)[keyof typeof BalanceSnapshotScalarFieldEnum]


  export const TransactionHistoryScalarFieldEnum: {
    id: 'id',
    txid: 'txid',
    amount: 'amount',
    fee: 'fee',
    type: 'type',
    status: 'status',
    blockHeight: 'blockHeight',
    confirmations: 'confirmations',
    toAddress: 'toAddress',
    fromAddress: 'fromAddress',
    memo: 'memo',
    createdAt: 'createdAt',
    confirmedAt: 'confirmedAt'
  };

  export type TransactionHistoryScalarFieldEnum = (typeof TransactionHistoryScalarFieldEnum)[keyof typeof TransactionHistoryScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    resource: 'resource',
    details: 'details',
    level: 'level',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const SystemConfigScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    description: 'description',
    isEncrypted: 'isEncrypted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SystemConfigScalarFieldEnum = (typeof SystemConfigScalarFieldEnum)[keyof typeof SystemConfigScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    keyHash: 'keyHash',
    permissions: 'permissions',
    isActive: 'isActive',
    lastUsedAt: 'lastUsedAt',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'ChannelStatus'
   */
  export type EnumChannelStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChannelStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'InvoiceStatus'
   */
  export type EnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'LogLevel'
   */
  export type EnumLogLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LogLevel'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    nodeConfigs?: NodeConfigListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nodeConfigs?: NodeConfigOrderByRelationAggregateInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    nodeConfigs?: NodeConfigListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type NodeConfigWhereInput = {
    AND?: NodeConfigWhereInput | NodeConfigWhereInput[]
    OR?: NodeConfigWhereInput[]
    NOT?: NodeConfigWhereInput | NodeConfigWhereInput[]
    id?: StringFilter<"NodeConfig"> | string
    userId?: StringFilter<"NodeConfig"> | string
    nodeAlias?: StringFilter<"NodeConfig"> | string
    host?: StringFilter<"NodeConfig"> | string
    port?: IntFilter<"NodeConfig"> | number
    network?: StringFilter<"NodeConfig"> | string
    isDefault?: BoolFilter<"NodeConfig"> | boolean
    isActive?: BoolFilter<"NodeConfig"> | boolean
    createdAt?: DateTimeFilter<"NodeConfig"> | Date | string
    updatedAt?: DateTimeFilter<"NodeConfig"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NodeConfigOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    nodeAlias?: SortOrder
    host?: SortOrder
    port?: SortOrder
    network?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NodeConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NodeConfigWhereInput | NodeConfigWhereInput[]
    OR?: NodeConfigWhereInput[]
    NOT?: NodeConfigWhereInput | NodeConfigWhereInput[]
    userId?: StringFilter<"NodeConfig"> | string
    nodeAlias?: StringFilter<"NodeConfig"> | string
    host?: StringFilter<"NodeConfig"> | string
    port?: IntFilter<"NodeConfig"> | number
    network?: StringFilter<"NodeConfig"> | string
    isDefault?: BoolFilter<"NodeConfig"> | boolean
    isActive?: BoolFilter<"NodeConfig"> | boolean
    createdAt?: DateTimeFilter<"NodeConfig"> | Date | string
    updatedAt?: DateTimeFilter<"NodeConfig"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NodeConfigOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    nodeAlias?: SortOrder
    host?: SortOrder
    port?: SortOrder
    network?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NodeConfigCountOrderByAggregateInput
    _avg?: NodeConfigAvgOrderByAggregateInput
    _max?: NodeConfigMaxOrderByAggregateInput
    _min?: NodeConfigMinOrderByAggregateInput
    _sum?: NodeConfigSumOrderByAggregateInput
  }

  export type NodeConfigScalarWhereWithAggregatesInput = {
    AND?: NodeConfigScalarWhereWithAggregatesInput | NodeConfigScalarWhereWithAggregatesInput[]
    OR?: NodeConfigScalarWhereWithAggregatesInput[]
    NOT?: NodeConfigScalarWhereWithAggregatesInput | NodeConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NodeConfig"> | string
    userId?: StringWithAggregatesFilter<"NodeConfig"> | string
    nodeAlias?: StringWithAggregatesFilter<"NodeConfig"> | string
    host?: StringWithAggregatesFilter<"NodeConfig"> | string
    port?: IntWithAggregatesFilter<"NodeConfig"> | number
    network?: StringWithAggregatesFilter<"NodeConfig"> | string
    isDefault?: BoolWithAggregatesFilter<"NodeConfig"> | boolean
    isActive?: BoolWithAggregatesFilter<"NodeConfig"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"NodeConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NodeConfig"> | Date | string
  }

  export type ChannelHistoryWhereInput = {
    AND?: ChannelHistoryWhereInput | ChannelHistoryWhereInput[]
    OR?: ChannelHistoryWhereInput[]
    NOT?: ChannelHistoryWhereInput | ChannelHistoryWhereInput[]
    id?: StringFilter<"ChannelHistory"> | string
    channelPoint?: StringFilter<"ChannelHistory"> | string
    peerPubkey?: StringFilter<"ChannelHistory"> | string
    capacity?: BigIntFilter<"ChannelHistory"> | bigint | number
    localBalance?: BigIntFilter<"ChannelHistory"> | bigint | number
    remoteBalance?: BigIntFilter<"ChannelHistory"> | bigint | number
    status?: EnumChannelStatusFilter<"ChannelHistory"> | $Enums.ChannelStatus
    isActive?: BoolFilter<"ChannelHistory"> | boolean
    openHeight?: IntNullableFilter<"ChannelHistory"> | number | null
    closeHeight?: IntNullableFilter<"ChannelHistory"> | number | null
    createdAt?: DateTimeFilter<"ChannelHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ChannelHistory"> | Date | string
    statusUpdates?: ChannelStatusUpdateListRelationFilter
  }

  export type ChannelHistoryOrderByWithRelationInput = {
    id?: SortOrder
    channelPoint?: SortOrder
    peerPubkey?: SortOrder
    capacity?: SortOrder
    localBalance?: SortOrder
    remoteBalance?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    openHeight?: SortOrderInput | SortOrder
    closeHeight?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    statusUpdates?: ChannelStatusUpdateOrderByRelationAggregateInput
  }

  export type ChannelHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    channelPoint?: string
    AND?: ChannelHistoryWhereInput | ChannelHistoryWhereInput[]
    OR?: ChannelHistoryWhereInput[]
    NOT?: ChannelHistoryWhereInput | ChannelHistoryWhereInput[]
    peerPubkey?: StringFilter<"ChannelHistory"> | string
    capacity?: BigIntFilter<"ChannelHistory"> | bigint | number
    localBalance?: BigIntFilter<"ChannelHistory"> | bigint | number
    remoteBalance?: BigIntFilter<"ChannelHistory"> | bigint | number
    status?: EnumChannelStatusFilter<"ChannelHistory"> | $Enums.ChannelStatus
    isActive?: BoolFilter<"ChannelHistory"> | boolean
    openHeight?: IntNullableFilter<"ChannelHistory"> | number | null
    closeHeight?: IntNullableFilter<"ChannelHistory"> | number | null
    createdAt?: DateTimeFilter<"ChannelHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ChannelHistory"> | Date | string
    statusUpdates?: ChannelStatusUpdateListRelationFilter
  }, "id" | "channelPoint">

  export type ChannelHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    channelPoint?: SortOrder
    peerPubkey?: SortOrder
    capacity?: SortOrder
    localBalance?: SortOrder
    remoteBalance?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    openHeight?: SortOrderInput | SortOrder
    closeHeight?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChannelHistoryCountOrderByAggregateInput
    _avg?: ChannelHistoryAvgOrderByAggregateInput
    _max?: ChannelHistoryMaxOrderByAggregateInput
    _min?: ChannelHistoryMinOrderByAggregateInput
    _sum?: ChannelHistorySumOrderByAggregateInput
  }

  export type ChannelHistoryScalarWhereWithAggregatesInput = {
    AND?: ChannelHistoryScalarWhereWithAggregatesInput | ChannelHistoryScalarWhereWithAggregatesInput[]
    OR?: ChannelHistoryScalarWhereWithAggregatesInput[]
    NOT?: ChannelHistoryScalarWhereWithAggregatesInput | ChannelHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChannelHistory"> | string
    channelPoint?: StringWithAggregatesFilter<"ChannelHistory"> | string
    peerPubkey?: StringWithAggregatesFilter<"ChannelHistory"> | string
    capacity?: BigIntWithAggregatesFilter<"ChannelHistory"> | bigint | number
    localBalance?: BigIntWithAggregatesFilter<"ChannelHistory"> | bigint | number
    remoteBalance?: BigIntWithAggregatesFilter<"ChannelHistory"> | bigint | number
    status?: EnumChannelStatusWithAggregatesFilter<"ChannelHistory"> | $Enums.ChannelStatus
    isActive?: BoolWithAggregatesFilter<"ChannelHistory"> | boolean
    openHeight?: IntNullableWithAggregatesFilter<"ChannelHistory"> | number | null
    closeHeight?: IntNullableWithAggregatesFilter<"ChannelHistory"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ChannelHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChannelHistory"> | Date | string
  }

  export type ChannelStatusUpdateWhereInput = {
    AND?: ChannelStatusUpdateWhereInput | ChannelStatusUpdateWhereInput[]
    OR?: ChannelStatusUpdateWhereInput[]
    NOT?: ChannelStatusUpdateWhereInput | ChannelStatusUpdateWhereInput[]
    id?: StringFilter<"ChannelStatusUpdate"> | string
    channelHistoryId?: StringFilter<"ChannelStatusUpdate"> | string
    previousStatus?: EnumChannelStatusNullableFilter<"ChannelStatusUpdate"> | $Enums.ChannelStatus | null
    newStatus?: EnumChannelStatusFilter<"ChannelStatusUpdate"> | $Enums.ChannelStatus
    blockHeight?: IntNullableFilter<"ChannelStatusUpdate"> | number | null
    confirmations?: IntNullableFilter<"ChannelStatusUpdate"> | number | null
    notes?: StringNullableFilter<"ChannelStatusUpdate"> | string | null
    createdAt?: DateTimeFilter<"ChannelStatusUpdate"> | Date | string
    channelHistory?: XOR<ChannelHistoryScalarRelationFilter, ChannelHistoryWhereInput>
  }

  export type ChannelStatusUpdateOrderByWithRelationInput = {
    id?: SortOrder
    channelHistoryId?: SortOrder
    previousStatus?: SortOrderInput | SortOrder
    newStatus?: SortOrder
    blockHeight?: SortOrderInput | SortOrder
    confirmations?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    channelHistory?: ChannelHistoryOrderByWithRelationInput
  }

  export type ChannelStatusUpdateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChannelStatusUpdateWhereInput | ChannelStatusUpdateWhereInput[]
    OR?: ChannelStatusUpdateWhereInput[]
    NOT?: ChannelStatusUpdateWhereInput | ChannelStatusUpdateWhereInput[]
    channelHistoryId?: StringFilter<"ChannelStatusUpdate"> | string
    previousStatus?: EnumChannelStatusNullableFilter<"ChannelStatusUpdate"> | $Enums.ChannelStatus | null
    newStatus?: EnumChannelStatusFilter<"ChannelStatusUpdate"> | $Enums.ChannelStatus
    blockHeight?: IntNullableFilter<"ChannelStatusUpdate"> | number | null
    confirmations?: IntNullableFilter<"ChannelStatusUpdate"> | number | null
    notes?: StringNullableFilter<"ChannelStatusUpdate"> | string | null
    createdAt?: DateTimeFilter<"ChannelStatusUpdate"> | Date | string
    channelHistory?: XOR<ChannelHistoryScalarRelationFilter, ChannelHistoryWhereInput>
  }, "id">

  export type ChannelStatusUpdateOrderByWithAggregationInput = {
    id?: SortOrder
    channelHistoryId?: SortOrder
    previousStatus?: SortOrderInput | SortOrder
    newStatus?: SortOrder
    blockHeight?: SortOrderInput | SortOrder
    confirmations?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ChannelStatusUpdateCountOrderByAggregateInput
    _avg?: ChannelStatusUpdateAvgOrderByAggregateInput
    _max?: ChannelStatusUpdateMaxOrderByAggregateInput
    _min?: ChannelStatusUpdateMinOrderByAggregateInput
    _sum?: ChannelStatusUpdateSumOrderByAggregateInput
  }

  export type ChannelStatusUpdateScalarWhereWithAggregatesInput = {
    AND?: ChannelStatusUpdateScalarWhereWithAggregatesInput | ChannelStatusUpdateScalarWhereWithAggregatesInput[]
    OR?: ChannelStatusUpdateScalarWhereWithAggregatesInput[]
    NOT?: ChannelStatusUpdateScalarWhereWithAggregatesInput | ChannelStatusUpdateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChannelStatusUpdate"> | string
    channelHistoryId?: StringWithAggregatesFilter<"ChannelStatusUpdate"> | string
    previousStatus?: EnumChannelStatusNullableWithAggregatesFilter<"ChannelStatusUpdate"> | $Enums.ChannelStatus | null
    newStatus?: EnumChannelStatusWithAggregatesFilter<"ChannelStatusUpdate"> | $Enums.ChannelStatus
    blockHeight?: IntNullableWithAggregatesFilter<"ChannelStatusUpdate"> | number | null
    confirmations?: IntNullableWithAggregatesFilter<"ChannelStatusUpdate"> | number | null
    notes?: StringNullableWithAggregatesFilter<"ChannelStatusUpdate"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ChannelStatusUpdate"> | Date | string
  }

  export type PaymentHistoryWhereInput = {
    AND?: PaymentHistoryWhereInput | PaymentHistoryWhereInput[]
    OR?: PaymentHistoryWhereInput[]
    NOT?: PaymentHistoryWhereInput | PaymentHistoryWhereInput[]
    id?: StringFilter<"PaymentHistory"> | string
    paymentHash?: StringFilter<"PaymentHistory"> | string
    paymentRequest?: StringNullableFilter<"PaymentHistory"> | string | null
    destination?: StringFilter<"PaymentHistory"> | string
    amount?: BigIntFilter<"PaymentHistory"> | bigint | number
    fee?: BigIntNullableFilter<"PaymentHistory"> | bigint | number | null
    status?: EnumPaymentStatusFilter<"PaymentHistory"> | $Enums.PaymentStatus
    preimage?: StringNullableFilter<"PaymentHistory"> | string | null
    failureReason?: StringNullableFilter<"PaymentHistory"> | string | null
    createdAt?: DateTimeFilter<"PaymentHistory"> | Date | string
    completedAt?: DateTimeNullableFilter<"PaymentHistory"> | Date | string | null
  }

  export type PaymentHistoryOrderByWithRelationInput = {
    id?: SortOrder
    paymentHash?: SortOrder
    paymentRequest?: SortOrderInput | SortOrder
    destination?: SortOrder
    amount?: SortOrder
    fee?: SortOrderInput | SortOrder
    status?: SortOrder
    preimage?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
  }

  export type PaymentHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    paymentHash?: string
    AND?: PaymentHistoryWhereInput | PaymentHistoryWhereInput[]
    OR?: PaymentHistoryWhereInput[]
    NOT?: PaymentHistoryWhereInput | PaymentHistoryWhereInput[]
    paymentRequest?: StringNullableFilter<"PaymentHistory"> | string | null
    destination?: StringFilter<"PaymentHistory"> | string
    amount?: BigIntFilter<"PaymentHistory"> | bigint | number
    fee?: BigIntNullableFilter<"PaymentHistory"> | bigint | number | null
    status?: EnumPaymentStatusFilter<"PaymentHistory"> | $Enums.PaymentStatus
    preimage?: StringNullableFilter<"PaymentHistory"> | string | null
    failureReason?: StringNullableFilter<"PaymentHistory"> | string | null
    createdAt?: DateTimeFilter<"PaymentHistory"> | Date | string
    completedAt?: DateTimeNullableFilter<"PaymentHistory"> | Date | string | null
  }, "id" | "paymentHash">

  export type PaymentHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    paymentHash?: SortOrder
    paymentRequest?: SortOrderInput | SortOrder
    destination?: SortOrder
    amount?: SortOrder
    fee?: SortOrderInput | SortOrder
    status?: SortOrder
    preimage?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: PaymentHistoryCountOrderByAggregateInput
    _avg?: PaymentHistoryAvgOrderByAggregateInput
    _max?: PaymentHistoryMaxOrderByAggregateInput
    _min?: PaymentHistoryMinOrderByAggregateInput
    _sum?: PaymentHistorySumOrderByAggregateInput
  }

  export type PaymentHistoryScalarWhereWithAggregatesInput = {
    AND?: PaymentHistoryScalarWhereWithAggregatesInput | PaymentHistoryScalarWhereWithAggregatesInput[]
    OR?: PaymentHistoryScalarWhereWithAggregatesInput[]
    NOT?: PaymentHistoryScalarWhereWithAggregatesInput | PaymentHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentHistory"> | string
    paymentHash?: StringWithAggregatesFilter<"PaymentHistory"> | string
    paymentRequest?: StringNullableWithAggregatesFilter<"PaymentHistory"> | string | null
    destination?: StringWithAggregatesFilter<"PaymentHistory"> | string
    amount?: BigIntWithAggregatesFilter<"PaymentHistory"> | bigint | number
    fee?: BigIntNullableWithAggregatesFilter<"PaymentHistory"> | bigint | number | null
    status?: EnumPaymentStatusWithAggregatesFilter<"PaymentHistory"> | $Enums.PaymentStatus
    preimage?: StringNullableWithAggregatesFilter<"PaymentHistory"> | string | null
    failureReason?: StringNullableWithAggregatesFilter<"PaymentHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PaymentHistory"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"PaymentHistory"> | Date | string | null
  }

  export type InvoiceHistoryWhereInput = {
    AND?: InvoiceHistoryWhereInput | InvoiceHistoryWhereInput[]
    OR?: InvoiceHistoryWhereInput[]
    NOT?: InvoiceHistoryWhereInput | InvoiceHistoryWhereInput[]
    id?: StringFilter<"InvoiceHistory"> | string
    paymentHash?: StringFilter<"InvoiceHistory"> | string
    paymentRequest?: StringFilter<"InvoiceHistory"> | string
    amount?: BigIntFilter<"InvoiceHistory"> | bigint | number
    memo?: StringNullableFilter<"InvoiceHistory"> | string | null
    status?: EnumInvoiceStatusFilter<"InvoiceHistory"> | $Enums.InvoiceStatus
    isPaid?: BoolFilter<"InvoiceHistory"> | boolean
    amountPaid?: BigIntNullableFilter<"InvoiceHistory"> | bigint | number | null
    createdAt?: DateTimeFilter<"InvoiceHistory"> | Date | string
    paidAt?: DateTimeNullableFilter<"InvoiceHistory"> | Date | string | null
    expiresAt?: DateTimeFilter<"InvoiceHistory"> | Date | string
  }

  export type InvoiceHistoryOrderByWithRelationInput = {
    id?: SortOrder
    paymentHash?: SortOrder
    paymentRequest?: SortOrder
    amount?: SortOrder
    memo?: SortOrderInput | SortOrder
    status?: SortOrder
    isPaid?: SortOrder
    amountPaid?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
  }

  export type InvoiceHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    paymentHash?: string
    paymentRequest?: string
    AND?: InvoiceHistoryWhereInput | InvoiceHistoryWhereInput[]
    OR?: InvoiceHistoryWhereInput[]
    NOT?: InvoiceHistoryWhereInput | InvoiceHistoryWhereInput[]
    amount?: BigIntFilter<"InvoiceHistory"> | bigint | number
    memo?: StringNullableFilter<"InvoiceHistory"> | string | null
    status?: EnumInvoiceStatusFilter<"InvoiceHistory"> | $Enums.InvoiceStatus
    isPaid?: BoolFilter<"InvoiceHistory"> | boolean
    amountPaid?: BigIntNullableFilter<"InvoiceHistory"> | bigint | number | null
    createdAt?: DateTimeFilter<"InvoiceHistory"> | Date | string
    paidAt?: DateTimeNullableFilter<"InvoiceHistory"> | Date | string | null
    expiresAt?: DateTimeFilter<"InvoiceHistory"> | Date | string
  }, "id" | "paymentHash" | "paymentRequest">

  export type InvoiceHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    paymentHash?: SortOrder
    paymentRequest?: SortOrder
    amount?: SortOrder
    memo?: SortOrderInput | SortOrder
    status?: SortOrder
    isPaid?: SortOrder
    amountPaid?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    _count?: InvoiceHistoryCountOrderByAggregateInput
    _avg?: InvoiceHistoryAvgOrderByAggregateInput
    _max?: InvoiceHistoryMaxOrderByAggregateInput
    _min?: InvoiceHistoryMinOrderByAggregateInput
    _sum?: InvoiceHistorySumOrderByAggregateInput
  }

  export type InvoiceHistoryScalarWhereWithAggregatesInput = {
    AND?: InvoiceHistoryScalarWhereWithAggregatesInput | InvoiceHistoryScalarWhereWithAggregatesInput[]
    OR?: InvoiceHistoryScalarWhereWithAggregatesInput[]
    NOT?: InvoiceHistoryScalarWhereWithAggregatesInput | InvoiceHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InvoiceHistory"> | string
    paymentHash?: StringWithAggregatesFilter<"InvoiceHistory"> | string
    paymentRequest?: StringWithAggregatesFilter<"InvoiceHistory"> | string
    amount?: BigIntWithAggregatesFilter<"InvoiceHistory"> | bigint | number
    memo?: StringNullableWithAggregatesFilter<"InvoiceHistory"> | string | null
    status?: EnumInvoiceStatusWithAggregatesFilter<"InvoiceHistory"> | $Enums.InvoiceStatus
    isPaid?: BoolWithAggregatesFilter<"InvoiceHistory"> | boolean
    amountPaid?: BigIntNullableWithAggregatesFilter<"InvoiceHistory"> | bigint | number | null
    createdAt?: DateTimeWithAggregatesFilter<"InvoiceHistory"> | Date | string
    paidAt?: DateTimeNullableWithAggregatesFilter<"InvoiceHistory"> | Date | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"InvoiceHistory"> | Date | string
  }

  export type BalanceSnapshotWhereInput = {
    AND?: BalanceSnapshotWhereInput | BalanceSnapshotWhereInput[]
    OR?: BalanceSnapshotWhereInput[]
    NOT?: BalanceSnapshotWhereInput | BalanceSnapshotWhereInput[]
    id?: StringFilter<"BalanceSnapshot"> | string
    totalBalance?: BigIntFilter<"BalanceSnapshot"> | bigint | number
    confirmedBalance?: BigIntFilter<"BalanceSnapshot"> | bigint | number
    unconfirmedBalance?: BigIntFilter<"BalanceSnapshot"> | bigint | number
    lockedBalance?: BigIntFilter<"BalanceSnapshot"> | bigint | number
    reservedBalanceAnchor?: BigIntFilter<"BalanceSnapshot"> | bigint | number
    channelBalance?: BigIntNullableFilter<"BalanceSnapshot"> | bigint | number | null
    pendingChannelBalance?: BigIntNullableFilter<"BalanceSnapshot"> | bigint | number | null
    timestamp?: DateTimeFilter<"BalanceSnapshot"> | Date | string
  }

  export type BalanceSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    totalBalance?: SortOrder
    confirmedBalance?: SortOrder
    unconfirmedBalance?: SortOrder
    lockedBalance?: SortOrder
    reservedBalanceAnchor?: SortOrder
    channelBalance?: SortOrderInput | SortOrder
    pendingChannelBalance?: SortOrderInput | SortOrder
    timestamp?: SortOrder
  }

  export type BalanceSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BalanceSnapshotWhereInput | BalanceSnapshotWhereInput[]
    OR?: BalanceSnapshotWhereInput[]
    NOT?: BalanceSnapshotWhereInput | BalanceSnapshotWhereInput[]
    totalBalance?: BigIntFilter<"BalanceSnapshot"> | bigint | number
    confirmedBalance?: BigIntFilter<"BalanceSnapshot"> | bigint | number
    unconfirmedBalance?: BigIntFilter<"BalanceSnapshot"> | bigint | number
    lockedBalance?: BigIntFilter<"BalanceSnapshot"> | bigint | number
    reservedBalanceAnchor?: BigIntFilter<"BalanceSnapshot"> | bigint | number
    channelBalance?: BigIntNullableFilter<"BalanceSnapshot"> | bigint | number | null
    pendingChannelBalance?: BigIntNullableFilter<"BalanceSnapshot"> | bigint | number | null
    timestamp?: DateTimeFilter<"BalanceSnapshot"> | Date | string
  }, "id">

  export type BalanceSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    totalBalance?: SortOrder
    confirmedBalance?: SortOrder
    unconfirmedBalance?: SortOrder
    lockedBalance?: SortOrder
    reservedBalanceAnchor?: SortOrder
    channelBalance?: SortOrderInput | SortOrder
    pendingChannelBalance?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: BalanceSnapshotCountOrderByAggregateInput
    _avg?: BalanceSnapshotAvgOrderByAggregateInput
    _max?: BalanceSnapshotMaxOrderByAggregateInput
    _min?: BalanceSnapshotMinOrderByAggregateInput
    _sum?: BalanceSnapshotSumOrderByAggregateInput
  }

  export type BalanceSnapshotScalarWhereWithAggregatesInput = {
    AND?: BalanceSnapshotScalarWhereWithAggregatesInput | BalanceSnapshotScalarWhereWithAggregatesInput[]
    OR?: BalanceSnapshotScalarWhereWithAggregatesInput[]
    NOT?: BalanceSnapshotScalarWhereWithAggregatesInput | BalanceSnapshotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BalanceSnapshot"> | string
    totalBalance?: BigIntWithAggregatesFilter<"BalanceSnapshot"> | bigint | number
    confirmedBalance?: BigIntWithAggregatesFilter<"BalanceSnapshot"> | bigint | number
    unconfirmedBalance?: BigIntWithAggregatesFilter<"BalanceSnapshot"> | bigint | number
    lockedBalance?: BigIntWithAggregatesFilter<"BalanceSnapshot"> | bigint | number
    reservedBalanceAnchor?: BigIntWithAggregatesFilter<"BalanceSnapshot"> | bigint | number
    channelBalance?: BigIntNullableWithAggregatesFilter<"BalanceSnapshot"> | bigint | number | null
    pendingChannelBalance?: BigIntNullableWithAggregatesFilter<"BalanceSnapshot"> | bigint | number | null
    timestamp?: DateTimeWithAggregatesFilter<"BalanceSnapshot"> | Date | string
  }

  export type TransactionHistoryWhereInput = {
    AND?: TransactionHistoryWhereInput | TransactionHistoryWhereInput[]
    OR?: TransactionHistoryWhereInput[]
    NOT?: TransactionHistoryWhereInput | TransactionHistoryWhereInput[]
    id?: StringFilter<"TransactionHistory"> | string
    txid?: StringFilter<"TransactionHistory"> | string
    amount?: BigIntFilter<"TransactionHistory"> | bigint | number
    fee?: BigIntNullableFilter<"TransactionHistory"> | bigint | number | null
    type?: EnumTransactionTypeFilter<"TransactionHistory"> | $Enums.TransactionType
    status?: EnumTransactionStatusFilter<"TransactionHistory"> | $Enums.TransactionStatus
    blockHeight?: IntNullableFilter<"TransactionHistory"> | number | null
    confirmations?: IntNullableFilter<"TransactionHistory"> | number | null
    toAddress?: StringNullableFilter<"TransactionHistory"> | string | null
    fromAddress?: StringNullableFilter<"TransactionHistory"> | string | null
    memo?: StringNullableFilter<"TransactionHistory"> | string | null
    createdAt?: DateTimeFilter<"TransactionHistory"> | Date | string
    confirmedAt?: DateTimeNullableFilter<"TransactionHistory"> | Date | string | null
  }

  export type TransactionHistoryOrderByWithRelationInput = {
    id?: SortOrder
    txid?: SortOrder
    amount?: SortOrder
    fee?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    blockHeight?: SortOrderInput | SortOrder
    confirmations?: SortOrderInput | SortOrder
    toAddress?: SortOrderInput | SortOrder
    fromAddress?: SortOrderInput | SortOrder
    memo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    confirmedAt?: SortOrderInput | SortOrder
  }

  export type TransactionHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    txid?: string
    AND?: TransactionHistoryWhereInput | TransactionHistoryWhereInput[]
    OR?: TransactionHistoryWhereInput[]
    NOT?: TransactionHistoryWhereInput | TransactionHistoryWhereInput[]
    amount?: BigIntFilter<"TransactionHistory"> | bigint | number
    fee?: BigIntNullableFilter<"TransactionHistory"> | bigint | number | null
    type?: EnumTransactionTypeFilter<"TransactionHistory"> | $Enums.TransactionType
    status?: EnumTransactionStatusFilter<"TransactionHistory"> | $Enums.TransactionStatus
    blockHeight?: IntNullableFilter<"TransactionHistory"> | number | null
    confirmations?: IntNullableFilter<"TransactionHistory"> | number | null
    toAddress?: StringNullableFilter<"TransactionHistory"> | string | null
    fromAddress?: StringNullableFilter<"TransactionHistory"> | string | null
    memo?: StringNullableFilter<"TransactionHistory"> | string | null
    createdAt?: DateTimeFilter<"TransactionHistory"> | Date | string
    confirmedAt?: DateTimeNullableFilter<"TransactionHistory"> | Date | string | null
  }, "id" | "txid">

  export type TransactionHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    txid?: SortOrder
    amount?: SortOrder
    fee?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    blockHeight?: SortOrderInput | SortOrder
    confirmations?: SortOrderInput | SortOrder
    toAddress?: SortOrderInput | SortOrder
    fromAddress?: SortOrderInput | SortOrder
    memo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    _count?: TransactionHistoryCountOrderByAggregateInput
    _avg?: TransactionHistoryAvgOrderByAggregateInput
    _max?: TransactionHistoryMaxOrderByAggregateInput
    _min?: TransactionHistoryMinOrderByAggregateInput
    _sum?: TransactionHistorySumOrderByAggregateInput
  }

  export type TransactionHistoryScalarWhereWithAggregatesInput = {
    AND?: TransactionHistoryScalarWhereWithAggregatesInput | TransactionHistoryScalarWhereWithAggregatesInput[]
    OR?: TransactionHistoryScalarWhereWithAggregatesInput[]
    NOT?: TransactionHistoryScalarWhereWithAggregatesInput | TransactionHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TransactionHistory"> | string
    txid?: StringWithAggregatesFilter<"TransactionHistory"> | string
    amount?: BigIntWithAggregatesFilter<"TransactionHistory"> | bigint | number
    fee?: BigIntNullableWithAggregatesFilter<"TransactionHistory"> | bigint | number | null
    type?: EnumTransactionTypeWithAggregatesFilter<"TransactionHistory"> | $Enums.TransactionType
    status?: EnumTransactionStatusWithAggregatesFilter<"TransactionHistory"> | $Enums.TransactionStatus
    blockHeight?: IntNullableWithAggregatesFilter<"TransactionHistory"> | number | null
    confirmations?: IntNullableWithAggregatesFilter<"TransactionHistory"> | number | null
    toAddress?: StringNullableWithAggregatesFilter<"TransactionHistory"> | string | null
    fromAddress?: StringNullableWithAggregatesFilter<"TransactionHistory"> | string | null
    memo?: StringNullableWithAggregatesFilter<"TransactionHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TransactionHistory"> | Date | string
    confirmedAt?: DateTimeNullableWithAggregatesFilter<"TransactionHistory"> | Date | string | null
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    userId?: StringNullableFilter<"ActivityLog"> | string | null
    action?: StringFilter<"ActivityLog"> | string
    resource?: StringNullableFilter<"ActivityLog"> | string | null
    details?: StringNullableFilter<"ActivityLog"> | string | null
    level?: EnumLogLevelFilter<"ActivityLog"> | $Enums.LogLevel
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    resource?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    level?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    userId?: StringNullableFilter<"ActivityLog"> | string | null
    action?: StringFilter<"ActivityLog"> | string
    resource?: StringNullableFilter<"ActivityLog"> | string | null
    details?: StringNullableFilter<"ActivityLog"> | string | null
    level?: EnumLogLevelFilter<"ActivityLog"> | $Enums.LogLevel
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    resource?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    level?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivityLog"> | string
    userId?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    action?: StringWithAggregatesFilter<"ActivityLog"> | string
    resource?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    details?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    level?: EnumLogLevelWithAggregatesFilter<"ActivityLog"> | $Enums.LogLevel
    ipAddress?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type SystemConfigWhereInput = {
    AND?: SystemConfigWhereInput | SystemConfigWhereInput[]
    OR?: SystemConfigWhereInput[]
    NOT?: SystemConfigWhereInput | SystemConfigWhereInput[]
    id?: StringFilter<"SystemConfig"> | string
    key?: StringFilter<"SystemConfig"> | string
    value?: StringFilter<"SystemConfig"> | string
    description?: StringNullableFilter<"SystemConfig"> | string | null
    isEncrypted?: BoolFilter<"SystemConfig"> | boolean
    createdAt?: DateTimeFilter<"SystemConfig"> | Date | string
    updatedAt?: DateTimeFilter<"SystemConfig"> | Date | string
  }

  export type SystemConfigOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    isEncrypted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: SystemConfigWhereInput | SystemConfigWhereInput[]
    OR?: SystemConfigWhereInput[]
    NOT?: SystemConfigWhereInput | SystemConfigWhereInput[]
    value?: StringFilter<"SystemConfig"> | string
    description?: StringNullableFilter<"SystemConfig"> | string | null
    isEncrypted?: BoolFilter<"SystemConfig"> | boolean
    createdAt?: DateTimeFilter<"SystemConfig"> | Date | string
    updatedAt?: DateTimeFilter<"SystemConfig"> | Date | string
  }, "id" | "key">

  export type SystemConfigOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    isEncrypted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SystemConfigCountOrderByAggregateInput
    _max?: SystemConfigMaxOrderByAggregateInput
    _min?: SystemConfigMinOrderByAggregateInput
  }

  export type SystemConfigScalarWhereWithAggregatesInput = {
    AND?: SystemConfigScalarWhereWithAggregatesInput | SystemConfigScalarWhereWithAggregatesInput[]
    OR?: SystemConfigScalarWhereWithAggregatesInput[]
    NOT?: SystemConfigScalarWhereWithAggregatesInput | SystemConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemConfig"> | string
    key?: StringWithAggregatesFilter<"SystemConfig"> | string
    value?: StringWithAggregatesFilter<"SystemConfig"> | string
    description?: StringNullableWithAggregatesFilter<"SystemConfig"> | string | null
    isEncrypted?: BoolWithAggregatesFilter<"SystemConfig"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SystemConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SystemConfig"> | Date | string
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    keyHash?: StringFilter<"ApiKey"> | string
    permissions?: StringFilter<"ApiKey"> | string
    isActive?: BoolFilter<"ApiKey"> | boolean
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"ApiKey"> | Date | string
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    permissions?: SortOrder
    isActive?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    keyHash?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    name?: StringFilter<"ApiKey"> | string
    permissions?: StringFilter<"ApiKey"> | string
    isActive?: BoolFilter<"ApiKey"> | boolean
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"ApiKey"> | Date | string
  }, "id" | "keyHash">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    permissions?: SortOrder
    isActive?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKey"> | string
    name?: StringWithAggregatesFilter<"ApiKey"> | string
    keyHash?: StringWithAggregatesFilter<"ApiKey"> | string
    permissions?: StringWithAggregatesFilter<"ApiKey"> | string
    isActive?: BoolWithAggregatesFilter<"ApiKey"> | boolean
    lastUsedAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    nodeConfigs?: NodeConfigCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    nodeConfigs?: NodeConfigUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodeConfigs?: NodeConfigUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodeConfigs?: NodeConfigUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeConfigCreateInput = {
    id?: string
    nodeAlias: string
    host: string
    port: number
    network?: string
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNodeConfigsInput
  }

  export type NodeConfigUncheckedCreateInput = {
    id?: string
    userId: string
    nodeAlias: string
    host: string
    port: number
    network?: string
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NodeConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nodeAlias?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    network?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNodeConfigsNestedInput
  }

  export type NodeConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nodeAlias?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    network?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeConfigCreateManyInput = {
    id?: string
    userId: string
    nodeAlias: string
    host: string
    port: number
    network?: string
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NodeConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nodeAlias?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    network?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nodeAlias?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    network?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelHistoryCreateInput = {
    id?: string
    channelPoint: string
    peerPubkey: string
    capacity: bigint | number
    localBalance: bigint | number
    remoteBalance: bigint | number
    status: $Enums.ChannelStatus
    isActive?: boolean
    openHeight?: number | null
    closeHeight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusUpdates?: ChannelStatusUpdateCreateNestedManyWithoutChannelHistoryInput
  }

  export type ChannelHistoryUncheckedCreateInput = {
    id?: string
    channelPoint: string
    peerPubkey: string
    capacity: bigint | number
    localBalance: bigint | number
    remoteBalance: bigint | number
    status: $Enums.ChannelStatus
    isActive?: boolean
    openHeight?: number | null
    closeHeight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusUpdates?: ChannelStatusUpdateUncheckedCreateNestedManyWithoutChannelHistoryInput
  }

  export type ChannelHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelPoint?: StringFieldUpdateOperationsInput | string
    peerPubkey?: StringFieldUpdateOperationsInput | string
    capacity?: BigIntFieldUpdateOperationsInput | bigint | number
    localBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    remoteBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    openHeight?: NullableIntFieldUpdateOperationsInput | number | null
    closeHeight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUpdates?: ChannelStatusUpdateUpdateManyWithoutChannelHistoryNestedInput
  }

  export type ChannelHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelPoint?: StringFieldUpdateOperationsInput | string
    peerPubkey?: StringFieldUpdateOperationsInput | string
    capacity?: BigIntFieldUpdateOperationsInput | bigint | number
    localBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    remoteBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    openHeight?: NullableIntFieldUpdateOperationsInput | number | null
    closeHeight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUpdates?: ChannelStatusUpdateUncheckedUpdateManyWithoutChannelHistoryNestedInput
  }

  export type ChannelHistoryCreateManyInput = {
    id?: string
    channelPoint: string
    peerPubkey: string
    capacity: bigint | number
    localBalance: bigint | number
    remoteBalance: bigint | number
    status: $Enums.ChannelStatus
    isActive?: boolean
    openHeight?: number | null
    closeHeight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelPoint?: StringFieldUpdateOperationsInput | string
    peerPubkey?: StringFieldUpdateOperationsInput | string
    capacity?: BigIntFieldUpdateOperationsInput | bigint | number
    localBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    remoteBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    openHeight?: NullableIntFieldUpdateOperationsInput | number | null
    closeHeight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelPoint?: StringFieldUpdateOperationsInput | string
    peerPubkey?: StringFieldUpdateOperationsInput | string
    capacity?: BigIntFieldUpdateOperationsInput | bigint | number
    localBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    remoteBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    openHeight?: NullableIntFieldUpdateOperationsInput | number | null
    closeHeight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelStatusUpdateCreateInput = {
    id?: string
    previousStatus?: $Enums.ChannelStatus | null
    newStatus: $Enums.ChannelStatus
    blockHeight?: number | null
    confirmations?: number | null
    notes?: string | null
    createdAt?: Date | string
    channelHistory: ChannelHistoryCreateNestedOneWithoutStatusUpdatesInput
  }

  export type ChannelStatusUpdateUncheckedCreateInput = {
    id?: string
    channelHistoryId: string
    previousStatus?: $Enums.ChannelStatus | null
    newStatus: $Enums.ChannelStatus
    blockHeight?: number | null
    confirmations?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type ChannelStatusUpdateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    previousStatus?: NullableEnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus | null
    newStatus?: EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus
    blockHeight?: NullableIntFieldUpdateOperationsInput | number | null
    confirmations?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelHistory?: ChannelHistoryUpdateOneRequiredWithoutStatusUpdatesNestedInput
  }

  export type ChannelStatusUpdateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelHistoryId?: StringFieldUpdateOperationsInput | string
    previousStatus?: NullableEnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus | null
    newStatus?: EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus
    blockHeight?: NullableIntFieldUpdateOperationsInput | number | null
    confirmations?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelStatusUpdateCreateManyInput = {
    id?: string
    channelHistoryId: string
    previousStatus?: $Enums.ChannelStatus | null
    newStatus: $Enums.ChannelStatus
    blockHeight?: number | null
    confirmations?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type ChannelStatusUpdateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    previousStatus?: NullableEnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus | null
    newStatus?: EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus
    blockHeight?: NullableIntFieldUpdateOperationsInput | number | null
    confirmations?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelStatusUpdateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelHistoryId?: StringFieldUpdateOperationsInput | string
    previousStatus?: NullableEnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus | null
    newStatus?: EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus
    blockHeight?: NullableIntFieldUpdateOperationsInput | number | null
    confirmations?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryCreateInput = {
    id?: string
    paymentHash: string
    paymentRequest?: string | null
    destination: string
    amount: bigint | number
    fee?: bigint | number | null
    status: $Enums.PaymentStatus
    preimage?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type PaymentHistoryUncheckedCreateInput = {
    id?: string
    paymentHash: string
    paymentRequest?: string | null
    destination: string
    amount: bigint | number
    fee?: bigint | number | null
    status: $Enums.PaymentStatus
    preimage?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type PaymentHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentHash?: StringFieldUpdateOperationsInput | string
    paymentRequest?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    preimage?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentHash?: StringFieldUpdateOperationsInput | string
    paymentRequest?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    preimage?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentHistoryCreateManyInput = {
    id?: string
    paymentHash: string
    paymentRequest?: string | null
    destination: string
    amount: bigint | number
    fee?: bigint | number | null
    status: $Enums.PaymentStatus
    preimage?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type PaymentHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentHash?: StringFieldUpdateOperationsInput | string
    paymentRequest?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    preimage?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentHash?: StringFieldUpdateOperationsInput | string
    paymentRequest?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    preimage?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvoiceHistoryCreateInput = {
    id?: string
    paymentHash: string
    paymentRequest: string
    amount: bigint | number
    memo?: string | null
    status: $Enums.InvoiceStatus
    isPaid?: boolean
    amountPaid?: bigint | number | null
    createdAt?: Date | string
    paidAt?: Date | string | null
    expiresAt: Date | string
  }

  export type InvoiceHistoryUncheckedCreateInput = {
    id?: string
    paymentHash: string
    paymentRequest: string
    amount: bigint | number
    memo?: string | null
    status: $Enums.InvoiceStatus
    isPaid?: boolean
    amountPaid?: bigint | number | null
    createdAt?: Date | string
    paidAt?: Date | string | null
    expiresAt: Date | string
  }

  export type InvoiceHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentHash?: StringFieldUpdateOperationsInput | string
    paymentRequest?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    amountPaid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentHash?: StringFieldUpdateOperationsInput | string
    paymentRequest?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    amountPaid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceHistoryCreateManyInput = {
    id?: string
    paymentHash: string
    paymentRequest: string
    amount: bigint | number
    memo?: string | null
    status: $Enums.InvoiceStatus
    isPaid?: boolean
    amountPaid?: bigint | number | null
    createdAt?: Date | string
    paidAt?: Date | string | null
    expiresAt: Date | string
  }

  export type InvoiceHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentHash?: StringFieldUpdateOperationsInput | string
    paymentRequest?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    amountPaid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentHash?: StringFieldUpdateOperationsInput | string
    paymentRequest?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    amountPaid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceSnapshotCreateInput = {
    id?: string
    totalBalance: bigint | number
    confirmedBalance: bigint | number
    unconfirmedBalance: bigint | number
    lockedBalance: bigint | number
    reservedBalanceAnchor: bigint | number
    channelBalance?: bigint | number | null
    pendingChannelBalance?: bigint | number | null
    timestamp?: Date | string
  }

  export type BalanceSnapshotUncheckedCreateInput = {
    id?: string
    totalBalance: bigint | number
    confirmedBalance: bigint | number
    unconfirmedBalance: bigint | number
    lockedBalance: bigint | number
    reservedBalanceAnchor: bigint | number
    channelBalance?: bigint | number | null
    pendingChannelBalance?: bigint | number | null
    timestamp?: Date | string
  }

  export type BalanceSnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    confirmedBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    unconfirmedBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    lockedBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    reservedBalanceAnchor?: BigIntFieldUpdateOperationsInput | bigint | number
    channelBalance?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    pendingChannelBalance?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceSnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    confirmedBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    unconfirmedBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    lockedBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    reservedBalanceAnchor?: BigIntFieldUpdateOperationsInput | bigint | number
    channelBalance?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    pendingChannelBalance?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceSnapshotCreateManyInput = {
    id?: string
    totalBalance: bigint | number
    confirmedBalance: bigint | number
    unconfirmedBalance: bigint | number
    lockedBalance: bigint | number
    reservedBalanceAnchor: bigint | number
    channelBalance?: bigint | number | null
    pendingChannelBalance?: bigint | number | null
    timestamp?: Date | string
  }

  export type BalanceSnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    confirmedBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    unconfirmedBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    lockedBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    reservedBalanceAnchor?: BigIntFieldUpdateOperationsInput | bigint | number
    channelBalance?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    pendingChannelBalance?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceSnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    confirmedBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    unconfirmedBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    lockedBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    reservedBalanceAnchor?: BigIntFieldUpdateOperationsInput | bigint | number
    channelBalance?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    pendingChannelBalance?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionHistoryCreateInput = {
    id?: string
    txid: string
    amount: bigint | number
    fee?: bigint | number | null
    type: $Enums.TransactionType
    status: $Enums.TransactionStatus
    blockHeight?: number | null
    confirmations?: number | null
    toAddress?: string | null
    fromAddress?: string | null
    memo?: string | null
    createdAt?: Date | string
    confirmedAt?: Date | string | null
  }

  export type TransactionHistoryUncheckedCreateInput = {
    id?: string
    txid: string
    amount: bigint | number
    fee?: bigint | number | null
    type: $Enums.TransactionType
    status: $Enums.TransactionStatus
    blockHeight?: number | null
    confirmations?: number | null
    toAddress?: string | null
    fromAddress?: string | null
    memo?: string | null
    createdAt?: Date | string
    confirmedAt?: Date | string | null
  }

  export type TransactionHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    txid?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    blockHeight?: NullableIntFieldUpdateOperationsInput | number | null
    confirmations?: NullableIntFieldUpdateOperationsInput | number | null
    toAddress?: NullableStringFieldUpdateOperationsInput | string | null
    fromAddress?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    txid?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    blockHeight?: NullableIntFieldUpdateOperationsInput | number | null
    confirmations?: NullableIntFieldUpdateOperationsInput | number | null
    toAddress?: NullableStringFieldUpdateOperationsInput | string | null
    fromAddress?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionHistoryCreateManyInput = {
    id?: string
    txid: string
    amount: bigint | number
    fee?: bigint | number | null
    type: $Enums.TransactionType
    status: $Enums.TransactionStatus
    blockHeight?: number | null
    confirmations?: number | null
    toAddress?: string | null
    fromAddress?: string | null
    memo?: string | null
    createdAt?: Date | string
    confirmedAt?: Date | string | null
  }

  export type TransactionHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    txid?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    blockHeight?: NullableIntFieldUpdateOperationsInput | number | null
    confirmations?: NullableIntFieldUpdateOperationsInput | number | null
    toAddress?: NullableStringFieldUpdateOperationsInput | string | null
    fromAddress?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    txid?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    blockHeight?: NullableIntFieldUpdateOperationsInput | number | null
    confirmations?: NullableIntFieldUpdateOperationsInput | number | null
    toAddress?: NullableStringFieldUpdateOperationsInput | string | null
    fromAddress?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActivityLogCreateInput = {
    id?: string
    action: string
    resource?: string | null
    details?: string | null
    level?: $Enums.LogLevel
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: string
    userId?: string | null
    action: string
    resource?: string | null
    details?: string | null
    level?: $Enums.LogLevel
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: string
    userId?: string | null
    action: string
    resource?: string | null
    details?: string | null
    level?: $Enums.LogLevel
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemConfigCreateInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    isEncrypted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemConfigUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    isEncrypted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isEncrypted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isEncrypted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemConfigCreateManyInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    isEncrypted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isEncrypted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isEncrypted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateInput = {
    id?: string
    name: string
    keyHash: string
    permissions: string
    isActive?: boolean
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    name: string
    keyHash: string
    permissions: string
    isActive?: boolean
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    permissions?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    permissions?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    name: string
    keyHash: string
    permissions: string
    isActive?: boolean
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    permissions?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    permissions?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NodeConfigListRelationFilter = {
    every?: NodeConfigWhereInput
    some?: NodeConfigWhereInput
    none?: NodeConfigWhereInput
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type NodeConfigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NodeConfigCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nodeAlias?: SortOrder
    host?: SortOrder
    port?: SortOrder
    network?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NodeConfigAvgOrderByAggregateInput = {
    port?: SortOrder
  }

  export type NodeConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nodeAlias?: SortOrder
    host?: SortOrder
    port?: SortOrder
    network?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NodeConfigMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nodeAlias?: SortOrder
    host?: SortOrder
    port?: SortOrder
    network?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NodeConfigSumOrderByAggregateInput = {
    port?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type EnumChannelStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelStatus | EnumChannelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelStatus[]
    notIn?: $Enums.ChannelStatus[]
    not?: NestedEnumChannelStatusFilter<$PrismaModel> | $Enums.ChannelStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ChannelStatusUpdateListRelationFilter = {
    every?: ChannelStatusUpdateWhereInput
    some?: ChannelStatusUpdateWhereInput
    none?: ChannelStatusUpdateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChannelStatusUpdateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChannelHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    channelPoint?: SortOrder
    peerPubkey?: SortOrder
    capacity?: SortOrder
    localBalance?: SortOrder
    remoteBalance?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    openHeight?: SortOrder
    closeHeight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChannelHistoryAvgOrderByAggregateInput = {
    capacity?: SortOrder
    localBalance?: SortOrder
    remoteBalance?: SortOrder
    openHeight?: SortOrder
    closeHeight?: SortOrder
  }

  export type ChannelHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    channelPoint?: SortOrder
    peerPubkey?: SortOrder
    capacity?: SortOrder
    localBalance?: SortOrder
    remoteBalance?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    openHeight?: SortOrder
    closeHeight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChannelHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    channelPoint?: SortOrder
    peerPubkey?: SortOrder
    capacity?: SortOrder
    localBalance?: SortOrder
    remoteBalance?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    openHeight?: SortOrder
    closeHeight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChannelHistorySumOrderByAggregateInput = {
    capacity?: SortOrder
    localBalance?: SortOrder
    remoteBalance?: SortOrder
    openHeight?: SortOrder
    closeHeight?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumChannelStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelStatus | EnumChannelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelStatus[]
    notIn?: $Enums.ChannelStatus[]
    not?: NestedEnumChannelStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChannelStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChannelStatusFilter<$PrismaModel>
    _max?: NestedEnumChannelStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumChannelStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelStatus | EnumChannelStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ChannelStatus[] | null
    notIn?: $Enums.ChannelStatus[] | null
    not?: NestedEnumChannelStatusNullableFilter<$PrismaModel> | $Enums.ChannelStatus | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ChannelHistoryScalarRelationFilter = {
    is?: ChannelHistoryWhereInput
    isNot?: ChannelHistoryWhereInput
  }

  export type ChannelStatusUpdateCountOrderByAggregateInput = {
    id?: SortOrder
    channelHistoryId?: SortOrder
    previousStatus?: SortOrder
    newStatus?: SortOrder
    blockHeight?: SortOrder
    confirmations?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type ChannelStatusUpdateAvgOrderByAggregateInput = {
    blockHeight?: SortOrder
    confirmations?: SortOrder
  }

  export type ChannelStatusUpdateMaxOrderByAggregateInput = {
    id?: SortOrder
    channelHistoryId?: SortOrder
    previousStatus?: SortOrder
    newStatus?: SortOrder
    blockHeight?: SortOrder
    confirmations?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type ChannelStatusUpdateMinOrderByAggregateInput = {
    id?: SortOrder
    channelHistoryId?: SortOrder
    previousStatus?: SortOrder
    newStatus?: SortOrder
    blockHeight?: SortOrder
    confirmations?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type ChannelStatusUpdateSumOrderByAggregateInput = {
    blockHeight?: SortOrder
    confirmations?: SortOrder
  }

  export type EnumChannelStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelStatus | EnumChannelStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ChannelStatus[] | null
    notIn?: $Enums.ChannelStatus[] | null
    not?: NestedEnumChannelStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ChannelStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumChannelStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumChannelStatusNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PaymentHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    paymentHash?: SortOrder
    paymentRequest?: SortOrder
    destination?: SortOrder
    amount?: SortOrder
    fee?: SortOrder
    status?: SortOrder
    preimage?: SortOrder
    failureReason?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type PaymentHistoryAvgOrderByAggregateInput = {
    amount?: SortOrder
    fee?: SortOrder
  }

  export type PaymentHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentHash?: SortOrder
    paymentRequest?: SortOrder
    destination?: SortOrder
    amount?: SortOrder
    fee?: SortOrder
    status?: SortOrder
    preimage?: SortOrder
    failureReason?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type PaymentHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    paymentHash?: SortOrder
    paymentRequest?: SortOrder
    destination?: SortOrder
    amount?: SortOrder
    fee?: SortOrder
    status?: SortOrder
    preimage?: SortOrder
    failureReason?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type PaymentHistorySumOrderByAggregateInput = {
    amount?: SortOrder
    fee?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[]
    notIn?: $Enums.InvoiceStatus[]
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type InvoiceHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    paymentHash?: SortOrder
    paymentRequest?: SortOrder
    amount?: SortOrder
    memo?: SortOrder
    status?: SortOrder
    isPaid?: SortOrder
    amountPaid?: SortOrder
    createdAt?: SortOrder
    paidAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type InvoiceHistoryAvgOrderByAggregateInput = {
    amount?: SortOrder
    amountPaid?: SortOrder
  }

  export type InvoiceHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentHash?: SortOrder
    paymentRequest?: SortOrder
    amount?: SortOrder
    memo?: SortOrder
    status?: SortOrder
    isPaid?: SortOrder
    amountPaid?: SortOrder
    createdAt?: SortOrder
    paidAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type InvoiceHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    paymentHash?: SortOrder
    paymentRequest?: SortOrder
    amount?: SortOrder
    memo?: SortOrder
    status?: SortOrder
    isPaid?: SortOrder
    amountPaid?: SortOrder
    createdAt?: SortOrder
    paidAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type InvoiceHistorySumOrderByAggregateInput = {
    amount?: SortOrder
    amountPaid?: SortOrder
  }

  export type EnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[]
    notIn?: $Enums.InvoiceStatus[]
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type BalanceSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    totalBalance?: SortOrder
    confirmedBalance?: SortOrder
    unconfirmedBalance?: SortOrder
    lockedBalance?: SortOrder
    reservedBalanceAnchor?: SortOrder
    channelBalance?: SortOrder
    pendingChannelBalance?: SortOrder
    timestamp?: SortOrder
  }

  export type BalanceSnapshotAvgOrderByAggregateInput = {
    totalBalance?: SortOrder
    confirmedBalance?: SortOrder
    unconfirmedBalance?: SortOrder
    lockedBalance?: SortOrder
    reservedBalanceAnchor?: SortOrder
    channelBalance?: SortOrder
    pendingChannelBalance?: SortOrder
  }

  export type BalanceSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    totalBalance?: SortOrder
    confirmedBalance?: SortOrder
    unconfirmedBalance?: SortOrder
    lockedBalance?: SortOrder
    reservedBalanceAnchor?: SortOrder
    channelBalance?: SortOrder
    pendingChannelBalance?: SortOrder
    timestamp?: SortOrder
  }

  export type BalanceSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    totalBalance?: SortOrder
    confirmedBalance?: SortOrder
    unconfirmedBalance?: SortOrder
    lockedBalance?: SortOrder
    reservedBalanceAnchor?: SortOrder
    channelBalance?: SortOrder
    pendingChannelBalance?: SortOrder
    timestamp?: SortOrder
  }

  export type BalanceSnapshotSumOrderByAggregateInput = {
    totalBalance?: SortOrder
    confirmedBalance?: SortOrder
    unconfirmedBalance?: SortOrder
    lockedBalance?: SortOrder
    reservedBalanceAnchor?: SortOrder
    channelBalance?: SortOrder
    pendingChannelBalance?: SortOrder
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[]
    notIn?: $Enums.TransactionStatus[]
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type TransactionHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    txid?: SortOrder
    amount?: SortOrder
    fee?: SortOrder
    type?: SortOrder
    status?: SortOrder
    blockHeight?: SortOrder
    confirmations?: SortOrder
    toAddress?: SortOrder
    fromAddress?: SortOrder
    memo?: SortOrder
    createdAt?: SortOrder
    confirmedAt?: SortOrder
  }

  export type TransactionHistoryAvgOrderByAggregateInput = {
    amount?: SortOrder
    fee?: SortOrder
    blockHeight?: SortOrder
    confirmations?: SortOrder
  }

  export type TransactionHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    txid?: SortOrder
    amount?: SortOrder
    fee?: SortOrder
    type?: SortOrder
    status?: SortOrder
    blockHeight?: SortOrder
    confirmations?: SortOrder
    toAddress?: SortOrder
    fromAddress?: SortOrder
    memo?: SortOrder
    createdAt?: SortOrder
    confirmedAt?: SortOrder
  }

  export type TransactionHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    txid?: SortOrder
    amount?: SortOrder
    fee?: SortOrder
    type?: SortOrder
    status?: SortOrder
    blockHeight?: SortOrder
    confirmations?: SortOrder
    toAddress?: SortOrder
    fromAddress?: SortOrder
    memo?: SortOrder
    createdAt?: SortOrder
    confirmedAt?: SortOrder
  }

  export type TransactionHistorySumOrderByAggregateInput = {
    amount?: SortOrder
    fee?: SortOrder
    blockHeight?: SortOrder
    confirmations?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[]
    notIn?: $Enums.TransactionStatus[]
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type EnumLogLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.LogLevel | EnumLogLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LogLevel[]
    notIn?: $Enums.LogLevel[]
    not?: NestedEnumLogLevelFilter<$PrismaModel> | $Enums.LogLevel
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    details?: SortOrder
    level?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    details?: SortOrder
    level?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    details?: SortOrder
    level?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumLogLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogLevel | EnumLogLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LogLevel[]
    notIn?: $Enums.LogLevel[]
    not?: NestedEnumLogLevelWithAggregatesFilter<$PrismaModel> | $Enums.LogLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLogLevelFilter<$PrismaModel>
    _max?: NestedEnumLogLevelFilter<$PrismaModel>
  }

  export type SystemConfigCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    isEncrypted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    isEncrypted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemConfigMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    isEncrypted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    permissions?: SortOrder
    isActive?: SortOrder
    lastUsedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    permissions?: SortOrder
    isActive?: SortOrder
    lastUsedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    permissions?: SortOrder
    isActive?: SortOrder
    lastUsedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NodeConfigCreateNestedManyWithoutUserInput = {
    create?: XOR<NodeConfigCreateWithoutUserInput, NodeConfigUncheckedCreateWithoutUserInput> | NodeConfigCreateWithoutUserInput[] | NodeConfigUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NodeConfigCreateOrConnectWithoutUserInput | NodeConfigCreateOrConnectWithoutUserInput[]
    createMany?: NodeConfigCreateManyUserInputEnvelope
    connect?: NodeConfigWhereUniqueInput | NodeConfigWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type NodeConfigUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NodeConfigCreateWithoutUserInput, NodeConfigUncheckedCreateWithoutUserInput> | NodeConfigCreateWithoutUserInput[] | NodeConfigUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NodeConfigCreateOrConnectWithoutUserInput | NodeConfigCreateOrConnectWithoutUserInput[]
    createMany?: NodeConfigCreateManyUserInputEnvelope
    connect?: NodeConfigWhereUniqueInput | NodeConfigWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NodeConfigUpdateManyWithoutUserNestedInput = {
    create?: XOR<NodeConfigCreateWithoutUserInput, NodeConfigUncheckedCreateWithoutUserInput> | NodeConfigCreateWithoutUserInput[] | NodeConfigUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NodeConfigCreateOrConnectWithoutUserInput | NodeConfigCreateOrConnectWithoutUserInput[]
    upsert?: NodeConfigUpsertWithWhereUniqueWithoutUserInput | NodeConfigUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NodeConfigCreateManyUserInputEnvelope
    set?: NodeConfigWhereUniqueInput | NodeConfigWhereUniqueInput[]
    disconnect?: NodeConfigWhereUniqueInput | NodeConfigWhereUniqueInput[]
    delete?: NodeConfigWhereUniqueInput | NodeConfigWhereUniqueInput[]
    connect?: NodeConfigWhereUniqueInput | NodeConfigWhereUniqueInput[]
    update?: NodeConfigUpdateWithWhereUniqueWithoutUserInput | NodeConfigUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NodeConfigUpdateManyWithWhereWithoutUserInput | NodeConfigUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NodeConfigScalarWhereInput | NodeConfigScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type NodeConfigUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NodeConfigCreateWithoutUserInput, NodeConfigUncheckedCreateWithoutUserInput> | NodeConfigCreateWithoutUserInput[] | NodeConfigUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NodeConfigCreateOrConnectWithoutUserInput | NodeConfigCreateOrConnectWithoutUserInput[]
    upsert?: NodeConfigUpsertWithWhereUniqueWithoutUserInput | NodeConfigUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NodeConfigCreateManyUserInputEnvelope
    set?: NodeConfigWhereUniqueInput | NodeConfigWhereUniqueInput[]
    disconnect?: NodeConfigWhereUniqueInput | NodeConfigWhereUniqueInput[]
    delete?: NodeConfigWhereUniqueInput | NodeConfigWhereUniqueInput[]
    connect?: NodeConfigWhereUniqueInput | NodeConfigWhereUniqueInput[]
    update?: NodeConfigUpdateWithWhereUniqueWithoutUserInput | NodeConfigUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NodeConfigUpdateManyWithWhereWithoutUserInput | NodeConfigUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NodeConfigScalarWhereInput | NodeConfigScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNodeConfigsInput = {
    create?: XOR<UserCreateWithoutNodeConfigsInput, UserUncheckedCreateWithoutNodeConfigsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNodeConfigsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutNodeConfigsNestedInput = {
    create?: XOR<UserCreateWithoutNodeConfigsInput, UserUncheckedCreateWithoutNodeConfigsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNodeConfigsInput
    upsert?: UserUpsertWithoutNodeConfigsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNodeConfigsInput, UserUpdateWithoutNodeConfigsInput>, UserUncheckedUpdateWithoutNodeConfigsInput>
  }

  export type ChannelStatusUpdateCreateNestedManyWithoutChannelHistoryInput = {
    create?: XOR<ChannelStatusUpdateCreateWithoutChannelHistoryInput, ChannelStatusUpdateUncheckedCreateWithoutChannelHistoryInput> | ChannelStatusUpdateCreateWithoutChannelHistoryInput[] | ChannelStatusUpdateUncheckedCreateWithoutChannelHistoryInput[]
    connectOrCreate?: ChannelStatusUpdateCreateOrConnectWithoutChannelHistoryInput | ChannelStatusUpdateCreateOrConnectWithoutChannelHistoryInput[]
    createMany?: ChannelStatusUpdateCreateManyChannelHistoryInputEnvelope
    connect?: ChannelStatusUpdateWhereUniqueInput | ChannelStatusUpdateWhereUniqueInput[]
  }

  export type ChannelStatusUpdateUncheckedCreateNestedManyWithoutChannelHistoryInput = {
    create?: XOR<ChannelStatusUpdateCreateWithoutChannelHistoryInput, ChannelStatusUpdateUncheckedCreateWithoutChannelHistoryInput> | ChannelStatusUpdateCreateWithoutChannelHistoryInput[] | ChannelStatusUpdateUncheckedCreateWithoutChannelHistoryInput[]
    connectOrCreate?: ChannelStatusUpdateCreateOrConnectWithoutChannelHistoryInput | ChannelStatusUpdateCreateOrConnectWithoutChannelHistoryInput[]
    createMany?: ChannelStatusUpdateCreateManyChannelHistoryInputEnvelope
    connect?: ChannelStatusUpdateWhereUniqueInput | ChannelStatusUpdateWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumChannelStatusFieldUpdateOperationsInput = {
    set?: $Enums.ChannelStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChannelStatusUpdateUpdateManyWithoutChannelHistoryNestedInput = {
    create?: XOR<ChannelStatusUpdateCreateWithoutChannelHistoryInput, ChannelStatusUpdateUncheckedCreateWithoutChannelHistoryInput> | ChannelStatusUpdateCreateWithoutChannelHistoryInput[] | ChannelStatusUpdateUncheckedCreateWithoutChannelHistoryInput[]
    connectOrCreate?: ChannelStatusUpdateCreateOrConnectWithoutChannelHistoryInput | ChannelStatusUpdateCreateOrConnectWithoutChannelHistoryInput[]
    upsert?: ChannelStatusUpdateUpsertWithWhereUniqueWithoutChannelHistoryInput | ChannelStatusUpdateUpsertWithWhereUniqueWithoutChannelHistoryInput[]
    createMany?: ChannelStatusUpdateCreateManyChannelHistoryInputEnvelope
    set?: ChannelStatusUpdateWhereUniqueInput | ChannelStatusUpdateWhereUniqueInput[]
    disconnect?: ChannelStatusUpdateWhereUniqueInput | ChannelStatusUpdateWhereUniqueInput[]
    delete?: ChannelStatusUpdateWhereUniqueInput | ChannelStatusUpdateWhereUniqueInput[]
    connect?: ChannelStatusUpdateWhereUniqueInput | ChannelStatusUpdateWhereUniqueInput[]
    update?: ChannelStatusUpdateUpdateWithWhereUniqueWithoutChannelHistoryInput | ChannelStatusUpdateUpdateWithWhereUniqueWithoutChannelHistoryInput[]
    updateMany?: ChannelStatusUpdateUpdateManyWithWhereWithoutChannelHistoryInput | ChannelStatusUpdateUpdateManyWithWhereWithoutChannelHistoryInput[]
    deleteMany?: ChannelStatusUpdateScalarWhereInput | ChannelStatusUpdateScalarWhereInput[]
  }

  export type ChannelStatusUpdateUncheckedUpdateManyWithoutChannelHistoryNestedInput = {
    create?: XOR<ChannelStatusUpdateCreateWithoutChannelHistoryInput, ChannelStatusUpdateUncheckedCreateWithoutChannelHistoryInput> | ChannelStatusUpdateCreateWithoutChannelHistoryInput[] | ChannelStatusUpdateUncheckedCreateWithoutChannelHistoryInput[]
    connectOrCreate?: ChannelStatusUpdateCreateOrConnectWithoutChannelHistoryInput | ChannelStatusUpdateCreateOrConnectWithoutChannelHistoryInput[]
    upsert?: ChannelStatusUpdateUpsertWithWhereUniqueWithoutChannelHistoryInput | ChannelStatusUpdateUpsertWithWhereUniqueWithoutChannelHistoryInput[]
    createMany?: ChannelStatusUpdateCreateManyChannelHistoryInputEnvelope
    set?: ChannelStatusUpdateWhereUniqueInput | ChannelStatusUpdateWhereUniqueInput[]
    disconnect?: ChannelStatusUpdateWhereUniqueInput | ChannelStatusUpdateWhereUniqueInput[]
    delete?: ChannelStatusUpdateWhereUniqueInput | ChannelStatusUpdateWhereUniqueInput[]
    connect?: ChannelStatusUpdateWhereUniqueInput | ChannelStatusUpdateWhereUniqueInput[]
    update?: ChannelStatusUpdateUpdateWithWhereUniqueWithoutChannelHistoryInput | ChannelStatusUpdateUpdateWithWhereUniqueWithoutChannelHistoryInput[]
    updateMany?: ChannelStatusUpdateUpdateManyWithWhereWithoutChannelHistoryInput | ChannelStatusUpdateUpdateManyWithWhereWithoutChannelHistoryInput[]
    deleteMany?: ChannelStatusUpdateScalarWhereInput | ChannelStatusUpdateScalarWhereInput[]
  }

  export type ChannelHistoryCreateNestedOneWithoutStatusUpdatesInput = {
    create?: XOR<ChannelHistoryCreateWithoutStatusUpdatesInput, ChannelHistoryUncheckedCreateWithoutStatusUpdatesInput>
    connectOrCreate?: ChannelHistoryCreateOrConnectWithoutStatusUpdatesInput
    connect?: ChannelHistoryWhereUniqueInput
  }

  export type NullableEnumChannelStatusFieldUpdateOperationsInput = {
    set?: $Enums.ChannelStatus | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ChannelHistoryUpdateOneRequiredWithoutStatusUpdatesNestedInput = {
    create?: XOR<ChannelHistoryCreateWithoutStatusUpdatesInput, ChannelHistoryUncheckedCreateWithoutStatusUpdatesInput>
    connectOrCreate?: ChannelHistoryCreateOrConnectWithoutStatusUpdatesInput
    upsert?: ChannelHistoryUpsertWithoutStatusUpdatesInput
    connect?: ChannelHistoryWhereUniqueInput
    update?: XOR<XOR<ChannelHistoryUpdateToOneWithWhereWithoutStatusUpdatesInput, ChannelHistoryUpdateWithoutStatusUpdatesInput>, ChannelHistoryUncheckedUpdateWithoutStatusUpdatesInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceStatus
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type UserCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumLogLevelFieldUpdateOperationsInput = {
    set?: $Enums.LogLevel
  }

  export type UserUpdateOneWithoutActivityLogsNestedInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    upsert?: UserUpsertWithoutActivityLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityLogsInput, UserUpdateWithoutActivityLogsInput>, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedEnumChannelStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelStatus | EnumChannelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelStatus[]
    notIn?: $Enums.ChannelStatus[]
    not?: NestedEnumChannelStatusFilter<$PrismaModel> | $Enums.ChannelStatus
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedEnumChannelStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelStatus | EnumChannelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelStatus[]
    notIn?: $Enums.ChannelStatus[]
    not?: NestedEnumChannelStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChannelStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChannelStatusFilter<$PrismaModel>
    _max?: NestedEnumChannelStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumChannelStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelStatus | EnumChannelStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ChannelStatus[] | null
    notIn?: $Enums.ChannelStatus[] | null
    not?: NestedEnumChannelStatusNullableFilter<$PrismaModel> | $Enums.ChannelStatus | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumChannelStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelStatus | EnumChannelStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ChannelStatus[] | null
    notIn?: $Enums.ChannelStatus[] | null
    not?: NestedEnumChannelStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ChannelStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumChannelStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumChannelStatusNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[]
    notIn?: $Enums.InvoiceStatus[]
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[]
    notIn?: $Enums.InvoiceStatus[]
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[]
    notIn?: $Enums.TransactionStatus[]
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[]
    notIn?: $Enums.TransactionStatus[]
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type NestedEnumLogLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.LogLevel | EnumLogLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LogLevel[]
    notIn?: $Enums.LogLevel[]
    not?: NestedEnumLogLevelFilter<$PrismaModel> | $Enums.LogLevel
  }

  export type NestedEnumLogLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogLevel | EnumLogLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LogLevel[]
    notIn?: $Enums.LogLevel[]
    not?: NestedEnumLogLevelWithAggregatesFilter<$PrismaModel> | $Enums.LogLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLogLevelFilter<$PrismaModel>
    _max?: NestedEnumLogLevelFilter<$PrismaModel>
  }

  export type NodeConfigCreateWithoutUserInput = {
    id?: string
    nodeAlias: string
    host: string
    port: number
    network?: string
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NodeConfigUncheckedCreateWithoutUserInput = {
    id?: string
    nodeAlias: string
    host: string
    port: number
    network?: string
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NodeConfigCreateOrConnectWithoutUserInput = {
    where: NodeConfigWhereUniqueInput
    create: XOR<NodeConfigCreateWithoutUserInput, NodeConfigUncheckedCreateWithoutUserInput>
  }

  export type NodeConfigCreateManyUserInputEnvelope = {
    data: NodeConfigCreateManyUserInput | NodeConfigCreateManyUserInput[]
  }

  export type ActivityLogCreateWithoutUserInput = {
    id?: string
    action: string
    resource?: string | null
    details?: string | null
    level?: $Enums.LogLevel
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    resource?: string | null
    details?: string | null
    level?: $Enums.LogLevel
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogCreateManyUserInputEnvelope = {
    data: ActivityLogCreateManyUserInput | ActivityLogCreateManyUserInput[]
  }

  export type NodeConfigUpsertWithWhereUniqueWithoutUserInput = {
    where: NodeConfigWhereUniqueInput
    update: XOR<NodeConfigUpdateWithoutUserInput, NodeConfigUncheckedUpdateWithoutUserInput>
    create: XOR<NodeConfigCreateWithoutUserInput, NodeConfigUncheckedCreateWithoutUserInput>
  }

  export type NodeConfigUpdateWithWhereUniqueWithoutUserInput = {
    where: NodeConfigWhereUniqueInput
    data: XOR<NodeConfigUpdateWithoutUserInput, NodeConfigUncheckedUpdateWithoutUserInput>
  }

  export type NodeConfigUpdateManyWithWhereWithoutUserInput = {
    where: NodeConfigScalarWhereInput
    data: XOR<NodeConfigUpdateManyMutationInput, NodeConfigUncheckedUpdateManyWithoutUserInput>
  }

  export type NodeConfigScalarWhereInput = {
    AND?: NodeConfigScalarWhereInput | NodeConfigScalarWhereInput[]
    OR?: NodeConfigScalarWhereInput[]
    NOT?: NodeConfigScalarWhereInput | NodeConfigScalarWhereInput[]
    id?: StringFilter<"NodeConfig"> | string
    userId?: StringFilter<"NodeConfig"> | string
    nodeAlias?: StringFilter<"NodeConfig"> | string
    host?: StringFilter<"NodeConfig"> | string
    port?: IntFilter<"NodeConfig"> | number
    network?: StringFilter<"NodeConfig"> | string
    isDefault?: BoolFilter<"NodeConfig"> | boolean
    isActive?: BoolFilter<"NodeConfig"> | boolean
    createdAt?: DateTimeFilter<"NodeConfig"> | Date | string
    updatedAt?: DateTimeFilter<"NodeConfig"> | Date | string
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    userId?: StringNullableFilter<"ActivityLog"> | string | null
    action?: StringFilter<"ActivityLog"> | string
    resource?: StringNullableFilter<"ActivityLog"> | string | null
    details?: StringNullableFilter<"ActivityLog"> | string | null
    level?: EnumLogLevelFilter<"ActivityLog"> | $Enums.LogLevel
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type UserCreateWithoutNodeConfigsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNodeConfigsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNodeConfigsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNodeConfigsInput, UserUncheckedCreateWithoutNodeConfigsInput>
  }

  export type UserUpsertWithoutNodeConfigsInput = {
    update: XOR<UserUpdateWithoutNodeConfigsInput, UserUncheckedUpdateWithoutNodeConfigsInput>
    create: XOR<UserCreateWithoutNodeConfigsInput, UserUncheckedCreateWithoutNodeConfigsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNodeConfigsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNodeConfigsInput, UserUncheckedUpdateWithoutNodeConfigsInput>
  }

  export type UserUpdateWithoutNodeConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNodeConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChannelStatusUpdateCreateWithoutChannelHistoryInput = {
    id?: string
    previousStatus?: $Enums.ChannelStatus | null
    newStatus: $Enums.ChannelStatus
    blockHeight?: number | null
    confirmations?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type ChannelStatusUpdateUncheckedCreateWithoutChannelHistoryInput = {
    id?: string
    previousStatus?: $Enums.ChannelStatus | null
    newStatus: $Enums.ChannelStatus
    blockHeight?: number | null
    confirmations?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type ChannelStatusUpdateCreateOrConnectWithoutChannelHistoryInput = {
    where: ChannelStatusUpdateWhereUniqueInput
    create: XOR<ChannelStatusUpdateCreateWithoutChannelHistoryInput, ChannelStatusUpdateUncheckedCreateWithoutChannelHistoryInput>
  }

  export type ChannelStatusUpdateCreateManyChannelHistoryInputEnvelope = {
    data: ChannelStatusUpdateCreateManyChannelHistoryInput | ChannelStatusUpdateCreateManyChannelHistoryInput[]
  }

  export type ChannelStatusUpdateUpsertWithWhereUniqueWithoutChannelHistoryInput = {
    where: ChannelStatusUpdateWhereUniqueInput
    update: XOR<ChannelStatusUpdateUpdateWithoutChannelHistoryInput, ChannelStatusUpdateUncheckedUpdateWithoutChannelHistoryInput>
    create: XOR<ChannelStatusUpdateCreateWithoutChannelHistoryInput, ChannelStatusUpdateUncheckedCreateWithoutChannelHistoryInput>
  }

  export type ChannelStatusUpdateUpdateWithWhereUniqueWithoutChannelHistoryInput = {
    where: ChannelStatusUpdateWhereUniqueInput
    data: XOR<ChannelStatusUpdateUpdateWithoutChannelHistoryInput, ChannelStatusUpdateUncheckedUpdateWithoutChannelHistoryInput>
  }

  export type ChannelStatusUpdateUpdateManyWithWhereWithoutChannelHistoryInput = {
    where: ChannelStatusUpdateScalarWhereInput
    data: XOR<ChannelStatusUpdateUpdateManyMutationInput, ChannelStatusUpdateUncheckedUpdateManyWithoutChannelHistoryInput>
  }

  export type ChannelStatusUpdateScalarWhereInput = {
    AND?: ChannelStatusUpdateScalarWhereInput | ChannelStatusUpdateScalarWhereInput[]
    OR?: ChannelStatusUpdateScalarWhereInput[]
    NOT?: ChannelStatusUpdateScalarWhereInput | ChannelStatusUpdateScalarWhereInput[]
    id?: StringFilter<"ChannelStatusUpdate"> | string
    channelHistoryId?: StringFilter<"ChannelStatusUpdate"> | string
    previousStatus?: EnumChannelStatusNullableFilter<"ChannelStatusUpdate"> | $Enums.ChannelStatus | null
    newStatus?: EnumChannelStatusFilter<"ChannelStatusUpdate"> | $Enums.ChannelStatus
    blockHeight?: IntNullableFilter<"ChannelStatusUpdate"> | number | null
    confirmations?: IntNullableFilter<"ChannelStatusUpdate"> | number | null
    notes?: StringNullableFilter<"ChannelStatusUpdate"> | string | null
    createdAt?: DateTimeFilter<"ChannelStatusUpdate"> | Date | string
  }

  export type ChannelHistoryCreateWithoutStatusUpdatesInput = {
    id?: string
    channelPoint: string
    peerPubkey: string
    capacity: bigint | number
    localBalance: bigint | number
    remoteBalance: bigint | number
    status: $Enums.ChannelStatus
    isActive?: boolean
    openHeight?: number | null
    closeHeight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelHistoryUncheckedCreateWithoutStatusUpdatesInput = {
    id?: string
    channelPoint: string
    peerPubkey: string
    capacity: bigint | number
    localBalance: bigint | number
    remoteBalance: bigint | number
    status: $Enums.ChannelStatus
    isActive?: boolean
    openHeight?: number | null
    closeHeight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelHistoryCreateOrConnectWithoutStatusUpdatesInput = {
    where: ChannelHistoryWhereUniqueInput
    create: XOR<ChannelHistoryCreateWithoutStatusUpdatesInput, ChannelHistoryUncheckedCreateWithoutStatusUpdatesInput>
  }

  export type ChannelHistoryUpsertWithoutStatusUpdatesInput = {
    update: XOR<ChannelHistoryUpdateWithoutStatusUpdatesInput, ChannelHistoryUncheckedUpdateWithoutStatusUpdatesInput>
    create: XOR<ChannelHistoryCreateWithoutStatusUpdatesInput, ChannelHistoryUncheckedCreateWithoutStatusUpdatesInput>
    where?: ChannelHistoryWhereInput
  }

  export type ChannelHistoryUpdateToOneWithWhereWithoutStatusUpdatesInput = {
    where?: ChannelHistoryWhereInput
    data: XOR<ChannelHistoryUpdateWithoutStatusUpdatesInput, ChannelHistoryUncheckedUpdateWithoutStatusUpdatesInput>
  }

  export type ChannelHistoryUpdateWithoutStatusUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelPoint?: StringFieldUpdateOperationsInput | string
    peerPubkey?: StringFieldUpdateOperationsInput | string
    capacity?: BigIntFieldUpdateOperationsInput | bigint | number
    localBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    remoteBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    openHeight?: NullableIntFieldUpdateOperationsInput | number | null
    closeHeight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelHistoryUncheckedUpdateWithoutStatusUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelPoint?: StringFieldUpdateOperationsInput | string
    peerPubkey?: StringFieldUpdateOperationsInput | string
    capacity?: BigIntFieldUpdateOperationsInput | bigint | number
    localBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    remoteBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    openHeight?: NullableIntFieldUpdateOperationsInput | number | null
    closeHeight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutActivityLogsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    nodeConfigs?: NodeConfigCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActivityLogsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    nodeConfigs?: NodeConfigUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActivityLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
  }

  export type UserUpsertWithoutActivityLogsInput = {
    update: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodeConfigs?: NodeConfigUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodeConfigs?: NodeConfigUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NodeConfigCreateManyUserInput = {
    id?: string
    nodeAlias: string
    host: string
    port: number
    network?: string
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityLogCreateManyUserInput = {
    id?: string
    action: string
    resource?: string | null
    details?: string | null
    level?: $Enums.LogLevel
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type NodeConfigUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nodeAlias?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    network?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeConfigUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nodeAlias?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    network?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeConfigUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nodeAlias?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    network?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelStatusUpdateCreateManyChannelHistoryInput = {
    id?: string
    previousStatus?: $Enums.ChannelStatus | null
    newStatus: $Enums.ChannelStatus
    blockHeight?: number | null
    confirmations?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type ChannelStatusUpdateUpdateWithoutChannelHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    previousStatus?: NullableEnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus | null
    newStatus?: EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus
    blockHeight?: NullableIntFieldUpdateOperationsInput | number | null
    confirmations?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelStatusUpdateUncheckedUpdateWithoutChannelHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    previousStatus?: NullableEnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus | null
    newStatus?: EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus
    blockHeight?: NullableIntFieldUpdateOperationsInput | number | null
    confirmations?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelStatusUpdateUncheckedUpdateManyWithoutChannelHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    previousStatus?: NullableEnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus | null
    newStatus?: EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus
    blockHeight?: NullableIntFieldUpdateOperationsInput | number | null
    confirmations?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}