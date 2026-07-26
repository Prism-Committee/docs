---
id: player-api
title: 玩家侧 API
sidebar_label: 玩家侧 API
sidebar_position: 3
---

# 玩家侧 API

## 接口总表

| Method | Path | Auth | 说明 |
| --- | --- | --- | --- |
| GET | `/api/wallet` | user | 钱包余额与兑换信息 |
| GET | `/api/wallet/ledger` | user | 钱包流水 |
| POST | `/api/wallet/exchange` | user | 币种兑换 |
| POST | `/api/redeem/use` | user | 使用兑换码 |
| GET | `/api/products` | optional | 商品列表 |
| POST | `/api/orders` | user | 下单 |
| GET | `/api/orders/list` | user | 订单列表 |
| POST | `/api/orders/refund` | user | 订单退款 |
| GET | `/api/orders/policy` | none | 订单/市场策略 |
| GET | `/api/notifications/list` | user | 通知列表 |
| GET | `/api/notifications/unread-count` | user | 未读数量 |
| POST | `/api/notifications/mark-read` | user | 标记已读 |
| GET | `/api/meta/currency` | none | 币种显示与兑换配置 |
| GET | `/api/meta/materials` | none | 材质枚举 |
| GET | `/api/meta/material-overrides` | none | 材质覆盖与视觉策略 |
| GET | `/api/meta/market-tags` | none | 市场标签元信息 |
| GET | `/api/leaderboard/config` | none | 排行榜配置 |
| GET | `/api/leaderboard/list` | optional | 排行榜数据 |

## 钱包与兑换

### `GET /api/wallet`

返回当前用户钱包及与兑换相关的信息。客户端应把具体字段视为版本化响应，不要假定所有版本字段完全一致。

### `POST /api/wallet/exchange`

常见请求字段：

- `fromCurrency`
- `toCurrency`
- `amount`
- `idempotencyKey`（建议）

常见错误包括 `invalid_exchange`、`invalid_amount`、`exchange_disabled`、`invalid_ratio`、`insufficient_funds`、`vault_unavailable`。

## 商品与订单

### `POST /api/orders`

常见请求字段：

- `productId`
- `quantity`
- `deliveryMode`（可选）
- `idempotencyKey`（建议）

`deliveryMode` 的可用值和默认行为以当前服务端策略为准。客户端应允许订单进入待领取或其他非即时完成状态。

### `POST /api/orders/refund`

常见请求字段：

- `orderNo`

退款是否允许由当前订单状态和服务器策略共同决定。

## 通知

`GET /api/notifications/list` 常见查询参数：

- `limit`
- `cursor`
- `unreadOnly`

`POST /api/notifications/mark-read` 支持按单条或全部标记已读，具体请求结构以对应版本为准。

## 排行榜

`GET /api/leaderboard/list` 常见参数包括 `metric`、`order`、`range`、`limit`、`showOnline`。排行榜未启用时，客户端应正确处理 `feature_disabled`。
