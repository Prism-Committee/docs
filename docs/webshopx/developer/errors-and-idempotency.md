---
id: errors-and-idempotency
title: 错误码、枚举与幂等
sidebar_label: 错误码与幂等
sidebar_position: 6
---

# 错误码、枚举与幂等

## 常用枚举

### 币种

- `SHOP_COIN`
- `GAME_COIN`

### 市场

- `MarketSide`：`SELL` / `BUY`
- `TradeMode`：`DIRECT` / `AUCTION`
- `SupplyMode`：`MANUAL` / `SUPPLY`

拍卖与动态定价算法会随版本演进，客户端应优先使用服务端返回的能力和枚举，而不是把完整列表永久写死在前端。

### 商品类型

常见类型包括：

- `COMMAND`
- `GIVE_ITEM`
- `POTION_EFFECT`
- `RECYCLE_ITEM`
- `GROUP_BUY_VOUCHER`

## 典型错误码

### 认证与权限

- `auth_required`
- `auth_invalid`
- `invalid_credentials`
- `not_admin`
- `forbidden`

### 参数

- `bad_request`
- `method_not_allowed`
- `invalid_quantity`
- `invalid_delivery_mode`

### 钱包与兑换

- `invalid_exchange`
- `exchange_disabled`
- `invalid_ratio`
- `insufficient_funds`
- `vault_unavailable`
- `vault_error`

### 市场

常见前缀和错误包括：

- `listing_missing`
- `listing_unavailable`
- `buy_requires_*`
- `buy_order_not_active`
- `auction_only_bid`
- `auction_only_buy`
- `auction_closed`
- `bid_too_low`
- `limitation_*`

### 领取与退款

- `claim_token_invalid`
- `claim_forbidden`
- `refund_not_allowed`
- `refund_disabled`
- `refund_expired`
- `already_refunded`

:::tip
业务客户端应以 `error` 字段作为程序分支主键，`message` 仅用于展示和辅助排障。
:::

## 幂等

建议对可能造成资产或状态变化的写请求使用稳定 `idempotencyKey`，尤其是：

- `POST /api/wallet/exchange`
- `POST /api/orders`
- `POST /api/market/buy`
- `POST /api/market/sell-to-buy`
- `POST /api/market/bid`

### 客户端建议

1. 每次用户动作生成一个稳定幂等键；
2. 网络超时后重试同一动作时复用同一键；
3. 不要为每次重试重新生成键；
4. 对服务端返回的既有结果按成功重放处理；
5. 遇到 `idempotency_conflict` 时停止盲目重试并重新获取业务状态。

幂等键的长度和具体服务端回放行为可能随版本调整，应以当前版本实现为准。
