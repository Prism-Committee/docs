---
id: http-api-reference
title: HTTP API Reference
sidebar_label: HTTP API Reference
sidebar_position: 3
---

# HTTP API Reference

本页集中放置所有 API 客户端都需要查的公共约定。具体业务接口请分别查看 Player、Market 和 Admin API。

## 1. 服务与地址

- 默认内置监听端口：`8819`；
- `internal`：Web + API；
- `external`：API 由 WebShopX 提供，静态前端外置；
- `relay`：通过 WebShopX Relay 提供公网访问。

同源页面通常通过 `/api` 访问业务接口。外部客户端应使用服务器管理员提供的公开 API 根地址。

## 2. 健康检查

```http
GET /health
```

用于基础存活检测，不代表所有数据库、支付或第三方依赖都已完成业务级验证。

## 3. 请求与响应

业务 API 主要使用 UTF-8 JSON。

统一错误响应通常包含：

```json
{
  "error": "error_code",
  "message": "error message"
}
```

客户端应优先依赖 `error`，不要解析 `message` 文案做业务判断。

## 4. 鉴权

玩家和管理员会话通常通过：

```http
Authorization: Bearer <sessionToken>
```

常见接口：

```text
POST /api/auth/login
GET  /api/auth/me
POST /api/auth/logout

POST /api/admin/auth/login
GET  /api/admin/auth/me
POST /api/admin/auth/logout
```

常见错误：

- `auth_required`
- `auth_invalid`
- `invalid_credentials`
- `not_admin`
- `forbidden`

## 5. HTTP 状态码

| 状态码 | 典型含义 |
| --- | --- |
| `200` | 成功 |
| `204` | 无响应体的成功/预检 |
| `400` | 业务或参数错误 |
| `404` | 路由或资源不存在 |
| `405` | 方法不允许 |
| `500` | 服务端内部异常 |

业务失败时应同时检查 HTTP 状态和 JSON `error`。

## 6. CORS

是否允许跨域由服务器配置决定。不要假设所有 WebShopX 实例都允许 `*`。

- `internal` 同源部署通常不需要跨域；
- `external` 应只允许实际使用的前端来源；
- 浏览器客户端需要正确处理 `OPTIONS` 预检。

## 7. 幂等

强烈建议在具有资金、库存或订单副作用的写接口上使用稳定 `idempotencyKey`，包括：

- 钱包兑换；
- 创建订单；
- 市场购买；
- 向收购单出售；
- 拍卖出价。

客户端规则：

1. 每次用户真实提交生成唯一键；
2. 网络超时后的同一次重试复用原键；
3. 不要为每次 HTTP retry 生成新键；
4. 对 `idempotency_conflict` 等错误保留可观测日志。

## 8. 常用枚举

### 币种

- `SHOP_COIN`
- `GAME_COIN`

### 市场

- `MarketSide`: `SELL` / `BUY`
- `TradeMode`: `DIRECT` / `AUCTION`
- `SupplyMode`: `MANUAL` / `SUPPLY`

### 拍卖算法

- `ENGLISH_AUCTION_V1`
- `DUTCH_AUCTION_V1`
- `VICKREY_AUCTION_V1`
- `CANDLE_AUCTION_V1`

### 动态价格算法

- `LINEAR_DEMAND_V1`
- `DIMINISHING_RETURN_V1`
- `LOG_SMOOTH_V1`
- `EXPONENTIAL_DEFENSE_V1`
- `THRESHOLD_STEP_V1`
- `ELASTICITY_V1`
- `PANIC_BUYING_V1`

## 9. 错误码分类

### 参数/通用

- `bad_request`
- `method_not_allowed`
- `invalid_quantity`
- `invalid_delivery_mode`

### 钱包/兑换

- `invalid_exchange`
- `exchange_disabled`
- `invalid_ratio`
- `insufficient_funds`
- `vault_unavailable`
- `vault_error`

### 市场/拍卖

- `listing_missing`
- `listing_unavailable`
- `buy_requires_direct_mode`
- `buy_requires_manual_source`
- `buy_requires_fixed_price`
- `buy_order_not_active`
- `auction_closed`
- `bid_too_low`
- `limitation_*`

### 领取/退款

- `claim_token_invalid`
- `claim_forbidden`
- `refund_not_allowed`
- `refund_disabled`
- `refund_expired`
- `already_refunded`

## 10. 文件上传

当前常见上传能力包括市场挂单、商品和材质图标。请求通常直接发送文件字节流，而不是 multipart。

通用限制以目标版本实现为准；当前文档基线中常见约束包括：

- 最大约 `2MB`；
- `png` / `webp` / `jpg` / `jpeg` / `gif`；
- 文件名可能从 query、`X-File-Name` 或 `Content-Type` 推断。

上传后服务端返回受管静态路径。客户端不要自行拼接服务器文件系统路径。

## 11. 时间与版本兼容

不同接口可能返回无偏移时间或业务时区时间。客户端应统一做时间解析容错，并在升级 WebShopX 后回归所有依赖的接口。

精确 endpoint 与业务字段：

- [Player API](../developer/player-api)
- [Market API](../developer/market-api)
- [Admin API](../developer/admin-api)
