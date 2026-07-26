---
id: market-api
title: 市场 API
sidebar_label: 市场 API
sidebar_position: 4
---

# 市场 API

## 接口总表

| Method | Path | Auth | 说明 |
| --- | --- | --- | --- |
| GET | `/api/market/listings` | none/user | 查询挂单 |
| POST | `/api/market/listings/create` | user | 创建挂单 |
| POST | `/api/market/buy` | user | 购买 SELL 挂单 |
| POST | `/api/market/sell-to-buy` | user | 向 BUY 挂单履约 |
| POST | `/api/market/bid` | user | 拍卖出价 |
| POST | `/api/market/unlist` | user | 下架 |
| POST | `/api/market/pause` | user | 暂停 |
| POST | `/api/market/resume` | user | 恢复 |
| POST | `/api/market/price` | user | 改价 |
| POST | `/api/market/remark` | user | 修改备注 |
| POST | `/api/market/settings` | user | 综合更新市场设置 |
| POST | `/api/market/icon/upload` | user | 上传挂单图标 |
| POST | `/api/market/supply/refresh` | user | 刷新供货 |

## 查询挂单

`GET /api/market/listings` 常见查询参数：

- `mine`
- `limit`
- `sort` / `order`
- `currency`
- `minPrice` / `maxPrice`
- `material`
- `keyword`
- `side`
- `tag`
- `tags` / `tags[]`

当 `mine=true` 时需要有效用户会话。

## 创建挂单

`POST /api/market/listings/create` 常见字段包括：

- `side`
- `currency`
- `price`
- `quantity`（部分版本兼容 `amount`）
- `tag`
- `tradeMode`

市场能力受服务器侧限制规则、物品状态、权限和当前版本实现共同约束。创建或修改失败时，应根据返回错误码而不是仅根据文案处理。

## 交易

### `POST /api/market/buy`

常见字段：`listingId`、`buyQuantity`、`deliveryMode`、`idempotencyKey`。

### `POST /api/market/sell-to-buy`

常见字段：`listingId`、`sellQuantity`、`deliveryMode`、`idempotencyKey`。

### `POST /api/market/bid`

常见字段：`listingId`、`bidAmount`、`idempotencyKey`。拍卖响应可能包含最低要求出价、当前最高价和结束时间等信息。

## 综合设置

`POST /api/market/settings` 用于更新一个挂单的多项设置，可能涉及价格、币种、标签、备注、展示、补货、交易模式、动态价格和拍卖参数。

:::warning
变更拍卖或交易模式时可能影响已有出价、托管资产或挂单状态。第三方客户端不要把该接口视为普通的无副作用配置写入。
:::

## 常见错误

包括但不限于：

- `invalid_listing`
- `listing_unavailable`
- `invalid_quantity`
- `insufficient_quantity`
- `invalid_trade_mode`
- `buy_order_not_active`
- `buy_requires_direct_mode`
- `auction_closed`
- `bid_too_low`
- `limitation_*`

完整错误处理建议见 [错误码、枚举与幂等](./errors-and-idempotency)。
