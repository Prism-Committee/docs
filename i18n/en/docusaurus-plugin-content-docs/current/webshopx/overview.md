---
id: webshopx-overview
title: WebShopX Overview
sidebar_label: Overview
sidebar_position: 0
---

# WebShopX

WebShopX is a web-first shop system for Paper, Purpur, Spigot, and Folia servers. It combines the official shop, player market, wallets, orders and delivery, recharge, and administration.

## What do you want to do?

| Goal | Start here |
| --- | --- |
| Use WebShopX for the first time | [Player Quick Start](./player/quick-start) |
| Install WebShopX on a server | [Install and Deploy](./admin/install-deploy) |
| Upgrade from v2 | [v2 to v3 Migration](./admin/v2-to-v3-migration) |
| Buy, sell, recharge, or receive items | [Guides](./guides/overview) |
| Operate economy and market settings | [Configuration](./admin/configuration) → [Market Governance](./admin/governance) |
| Troubleshoot delivery, refunds, inventory, or operations | [Operations and Troubleshooting](./admin/operations) |
| Integrate the HTTP API | [Developer Quickstart](./developer/quickstart) |
| Look up exact commands, errors, or protocol behavior | [Reference](./reference/overview) |

## Documentation model

- **Get started**: first successful use, deployment, and migration.
- **Guides**: task-oriented product usage.
- **Administration**: server ownership, operations, governance, and troubleshooting.
- **Development**: HTTP API and plugin integration.
- **Reference**: precise lookup material rather than tutorials.

The visible navigation intentionally does not mirror the repository's `player/`, `admin/`, and `developer/` folders. Folders optimize maintenance; navigation optimizes reading.

## Documentation baseline

These docs primarily track the WebShopX v3 development line. Confirm the exact version installed on your server before relying on configuration or API details.

## WebShopX and WebShopX-Payments

WebShopX owns the shop, assets, orders, and business state. WebShopX-Payments is the optional standalone extension that connects payment channels.

- No online payments: WebShopX-Payments is optional.
- Need recharge channels: read [WebShopX-Payments](../webshopx-payments/overview).
- Building your own payment provider: read [Payment Provider API](./webshopx-payment-api).

## Source-of-truth order

1. Code and configuration shipped with the WebShopX version you actually run.
2. Reference documentation.
3. Guides / Administration / Development task documentation.
4. README files, old screenshots, or third-party tutorials.
