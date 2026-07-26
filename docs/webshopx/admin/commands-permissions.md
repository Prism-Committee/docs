---
id: commands-permissions
title: 命令与权限体系
sidebar_label: 命令与权限体系
sidebar_position: 4
---

# 命令与权限体系

WebShopX 主命令为 `/webshopx`，别名为 `/ws`。

## 玩家常用命令

```text
/ws help
/ws home
/ws password <newPassword>
/ws market
/ws market gui
/ws market sell <price> [amount] [currency]
/ws market logs [count]
/ws claim [all|ODR-|MKT-|CLM-|MCL-]
/ws mailbox
/ws mailbox collect
```

### 说明

| 命令 | 用途 |
| --- | --- |
| `/ws home` | 获取服主配置的 WebShopX 网页地址 |
| `/ws password <newPassword>` | 设置或重置网页登录密码 |
| `/ws market` / `/ws market gui` | 打开市场 GUI |
| `/ws market sell ...` | 快捷出售手中物品 |
| `/ws market logs [count]` | 查看最近市场记录 |
| `/ws claim ...` | 领取待发货内容 |
| `/ws mailbox` | 打开信箱 |
| `/ws mailbox collect` | 一键收取信箱内容 |

## 管理员常用命令

```text
/ws reload
/ws mode setup relay
/ws mode switch <relay|internal|external>
/ws recharge fix <orderId>
/ws gamecoin <用户|UUID|ID> <±数量> [原因]
/ws shopcoin <用户|UUID|ID> <±数量> [原因]
/ws market recalc-tags [active|all]
```

:::info[v3 变化]
- 信箱一键领取使用 `/ws mailbox collect`；旧文档中的 `/ws mailbox claim` 不再作为当前写法。
- 兑换码主要由 Web 管理后台维护；旧版 `/ws redeem create ...` 不应继续作为 v3 当前命令示例。
- Relay 推荐使用 `/ws mode setup relay` 完成授权，再使用 `/ws mode switch relay` 切换模式。
:::

## Bukkit 权限节点

| 权限 | 默认 | 用途 |
| --- | --- | --- |
| `webshop.use` | `true` | 普通玩家功能 |
| `webshop.admin` | `op` | 管理员操作 |
| `webshop.market.auction` | `op` | 在限制规则要求时使用拍卖 |
| `webshop.market.limitation.bypass` | `op` | 绕过市场创建 / 编辑限制 |

## 后台细粒度权限

当前后台权限模型包含：

- `REDEEM_MANAGE`
- `PRODUCT_MANAGE`
- `PRODUCT_ZERO_PRICE`
- `ORDER_VIEW`
- `ECONOMY_MANAGE`
- `MARKET_MANAGE`
- `USER_SUPPORT`
- `AUDIT_VIEW`

## 内置角色

- `SUPER_ADMIN`：全部权限；
- `SHOP_ADMIN`：商品、兑换码、订单与经济设置；
- `MARKET_MODERATOR`：市场监管；
- `SUPPORT_ADMIN`：用户支持与订单查看；
- `AUDITOR`：审计只读。

## 权限分配建议

1. `PRODUCT_ZERO_PRICE` 仅授予确实需要的运营人员；
2. 用户支持和经济调整权限尽量分离；
3. 审计角色保持只读；
4. 至少保留一个可用的 `SUPER_ADMIN`，避免后台权限锁死。
