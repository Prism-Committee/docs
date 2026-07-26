---
id: commands-permissions
title: Commands and Permissions
sidebar_label: Commands and Permissions
sidebar_position: 4
---

# Commands and Permissions

Main command: `/webshopx`, alias: `/ws`.

## Common Player Commands

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

## Common Administrator Commands

```text
/ws reload
/ws mode setup relay
/ws mode switch <relay|internal|external>
/ws recharge fix <orderId>
/ws gamecoin <user|UUID|ID> <±amount> [reason]
/ws shopcoin <user|UUID|ID> <±amount> [reason]
/ws market recalc-tags [active|all]
```

:::info[v3 changes]
`/ws mailbox claim` has been replaced by `/ws mailbox collect`. Redeem-code management is handled in the Web admin panel in v3 instead of treating the old `/ws redeem create ...` command as the current primary workflow.
:::

## Bukkit Permission Nodes

- `webshop.use` — default: everyone
- `webshop.admin` — default: OP
- `webshop.market.auction` — default: OP
- `webshop.market.limitation.bypass` — default: OP

## Admin Permissions

Common fine-grained permissions include:

- `REDEEM_MANAGE`
- `PRODUCT_MANAGE`
- `PRODUCT_ZERO_PRICE`
- `ORDER_VIEW`
- `ECONOMY_MANAGE`
- `MARKET_MANAGE`
- `USER_SUPPORT`
- `AUDIT_VIEW`

Built-in role templates include `SUPER_ADMIN`, `SHOP_ADMIN`, `MARKET_MODERATOR`, `SUPPORT_ADMIN`, and `AUDITOR`.

## Assignment Guidance

1. Keep `PRODUCT_ZERO_PRICE` tightly restricted.
2. Separate user-support and economy-management duties when possible.
3. Give auditors read access without write permissions.
4. Keep at least one active super administrator to avoid locking out the admin panel.
