---
id: wallet-and-exchange
title: 钱包与兑换
sidebar_label: 钱包与兑换
sidebar_position: 3
---

# 钱包与兑换

WebShopX 使用双币钱包，并支持余额查看、兑换和 Vault 经济挂接。

## 1. 双币模型

:::tip[提示]

以下币种为默认设置；如果你的服务器使用不同币种，请以服务器实际配置为准。

:::

| 币种 | 符号 | 说明 |
| --- | --- | --- |
| `SHOP_COIN` | SC | 商城币，常用于官方商店支付 |
| `GAME_COIN` | GC | 游戏币，可选接 Vault 经济插件 |

你可以在 Web 的“账户 → 钱包”中查看实时余额。

## 2. 兑换方向与开关

在账户页面即可进行兑换。默认允许 SHOP_COIN -> GAME_COIN，禁止 GAME_COIN -> SHOP_COIN。如需变更或管理兑换汇率请联系管理员。

## 3. Vault 挂接行为（可选）

:::tip[提示]
仅在插件成功检测到 Vault 时自动启用，管理员可在管理面板查看对接状态。
:::

当服务器启用 Vault 且成功获取经济提供器时：

- `GAME_COIN` 余额由 Vault 接管。

## 4. 常见错误码速查

| 错误码 | 常见原因 |
| --- | --- |
| `invalid_exchange` | from/to 相同或方向非法 |
| `invalid_amount` | 金额小于等于 0 |
| `exchange_disabled` | 该兑换方向未启用 |
| `invalid_ratio` | 汇率导致结果为 0 |
| `insufficient_funds` | 钱包余额不足 |
| `vault_unavailable` | Vault 或 provider 未就绪 |

## 5. 排障顺序

1. 先看兑换方向是否开启（`enabled=true`）。
2. 再看输入金额是否大于 0。
3. 检查余额是否充足。
4. 若是 `GAME_COIN` 问题，联系服主核查 Vault 提供器状态。
