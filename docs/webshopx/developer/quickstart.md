---
id: developer-quickstart
title: Developer Quickstart
sidebar_label: Developer Quickstart
sidebar_position: 1
---

# Developer Quickstart

这页目标只有一个：让你在最短路径内完成一次 WebShopX API 调用，并知道后续该去哪里。

## 1. API 在哪里

WebShopX 的 HTTP 服务由服务器管理员配置。常见情况：

- `internal`：网页和 API 同源；
- `external`：前端外置，API 仍由 WebShopX 提供；
- `relay`：通过 WebShopX Relay 暴露公网访问。

同源页面通常直接使用 `/api`。外部客户端应以管理员提供的公开 API 根地址为准。

## 2. 健康检查

先确认实例可访问：

```http
GET /health
```

健康检查成功后，再进入业务 API。

## 3. 登录并获取 sessionToken

```http
POST /api/auth/login
Content-Type: application/json

{
  "identifier": "player_name_or_uuid",
  "password": "your_password"
}
```

成功后保存返回的 `sessionToken`。后续需要玩家会话的请求推荐使用：

```http
Authorization: Bearer <sessionToken>
```

管理员接口使用独立的管理员登录入口：

```text
POST /api/admin/auth/login
```

## 4. 完成第一次读取

例如读取公开商品列表：

```http
GET /api/products
```

或者登录后读取钱包：

```http
GET /api/wallet
Authorization: Bearer <sessionToken>
```

## 5. 完成第一次写操作

创建订单通常使用：

```http
POST /api/orders
Authorization: Bearer <sessionToken>
Content-Type: application/json

{
  "productId": 1,
  "quantity": 1,
  "idempotencyKey": "client-order-unique-key"
}
```

对于创建订单、交易、兑换、出价等写操作，客户端应主动生成稳定的 `idempotencyKey`，并在网络超时重试时复用同一个键。

## 6. 错误处理

业务错误通常包含稳定错误码：

```json
{
  "error": "insufficient_funds",
  "message": "..."
}
```

客户端应以 `error` 作为业务分支主键，而不是依赖自然语言 `message`。

常见全局错误：

- `auth_required`：缺少登录态；
- `auth_invalid`：会话失效，应重新登录；
- `bad_request`：请求字段不符合要求；
- `forbidden`：管理员权限不足。

完整约定见 [HTTP API Reference](../reference/http-api-reference)。

## 7. 下一步

按你要实现的能力继续阅读：

- [Player API](./player-api)：钱包、商品、订单、通知和排行榜；
- [Market API](./market-api)：挂单、购买、出售、拍卖和市场设置；
- [Admin API](./admin-api)：商品、订单、经济、市场治理、用户支持与审计；
- [WebShopXPaymentApi](../webshopx-payment-api)：开发 Bukkit/Paper 侧第三方支付 Provider。

## 8. 上线前最低回归

每次升级 WebShopX 后至少验证：

1. `/health`；
2. 玩家登录；
3. 商品读取；
4. 下单与订单列表；
5. 市场买卖；
6. 管理员登录；
7. 你的客户端是否正确处理 `auth_invalid` 和幂等重试。
