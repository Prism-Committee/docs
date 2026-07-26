---
id: webshopx-overview
title: Getting Started with WebShopX
sidebar_label: Getting Started
sidebar_position: 0
---

# WebShopX

WebShopX is a web-first shop system for Paper, Purpur, Spigot, and Folia servers. It combines the official shop, player market, wallets, orders and delivery, recharge, and administration.

## Choose Your Path

| Role | Start here |
| --- | --- |
| Player | [Player Guide](./player/overview) |
| Server owner / operator | [Server Administrator](./admin/overview) |
| HTTP API / plugin developer | [Developer Docs](./developer/overview) |
| Looking for exact parameters | [Reference](./reference/overview) |

## Documentation Baseline

These docs primarily track the WebShopX v3 development line. Confirm the exact WebShopX version installed on your server before relying on configuration or API details.

## WebShopX and WebShopX-Payments

WebShopX owns the shop, assets, orders, and business state. WebShopX-Payments is the optional standalone extension that connects payment channels.

- No online payments: WebShopX-Payments is optional.
- Need recharge channels: read [WebShopX-Payments](../webshopx-payments/overview).
- Building your own payment provider: read [Payment Provider API](./webshopx-payment-api).
