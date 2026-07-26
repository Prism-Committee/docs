---
id: quick-start
title: Quick Start
sidebar_label: Quick Start
sidebar_position: 2
---

# Quick Start

Set your WebShopX password in game, then open the web shop.

## First Login

1. In game, run:

```text
/ws password <yourNewPassword>
```

2. Run `/ws home` to get the web-shop address configured by the server owner.
3. Log in with your Minecraft identity and the password you just set.

## Common Problems

| Error | Meaning | What to do |
| --- | --- | --- |
| `invalid_password` | Password does not meet current rules | Choose a valid password and retry |
| `invalid_credentials` | Login credentials are wrong | Recheck identity, password, and case |
| `auth_invalid` | Session expired or is no longer valid | Log in again |

:::tip
Do not treat old registration-oriented errors such as `username_exists` as part of the normal v3 player flow. The current onboarding path starts with `/ws password` in game.
:::

## After Login

- Shop and orders: [Shop, Market, and Orders](./shop-and-orders)
- Balance and exchange: [Wallet and Exchange](./wallet-and-exchange)
- Pending deliveries: [Claim and Mailbox](./claim-and-mailbox)
- Web inventory: [Web Inventory](./inventory)
