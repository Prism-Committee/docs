---
id: webshopx-overview
title: WebShopX Overview
sidebar_label: Overview
sidebar_position: 0
---

import {DocHero, FeatureCards} from '@site/src/components/DocVisuals';

# WebShopX

<DocHero
  eyebrow="WebShopX v3"
  title="From first use to operations and integration"
  description="WebShopX is a web-first shop system for Paper, Purpur, Spigot, and Folia servers. It combines the official shop, player market, wallets, orders and delivery, recharge, and administration."
  primary={{label: 'Use WebShopX', to: './player/quick-start'}}
  secondary={{label: 'Install on a server', to: './admin/install-deploy'}}
/>

## What do you want to do?

<FeatureCards items={[
  {icon: '👋', title: 'Use WebShopX for the first time', description: 'Set a web password and open the shop.', to: './player/quick-start', badge: 'Get started'},
  {icon: '🚀', title: 'Install WebShopX', description: 'Complete the first deployment and choose internal, external, or relay.', to: './admin/install-deploy'},
  {icon: '⬆️', title: 'Upgrade from v2', description: 'Migrate to v3 within the documented compatibility boundary.', to: './admin/v2-to-v3-migration'},
  {icon: '🛒', title: 'Buy, sell, recharge, or receive items', description: 'Open the task-oriented usage guides.', to: './guides/overview'},
  {icon: '🧰', title: 'Operate economy and market settings', description: 'Configure the server and govern the market.', to: './admin/configuration'},
  {icon: '🛠️', title: 'Troubleshoot operations', description: 'Handle delivery, refund, inventory, and runtime problems.', to: './admin/operations'},
  {icon: '💻', title: 'Integrate the HTTP API', description: 'Start with the first successful request.', to: './developer/quickstart'},
  {icon: '📚', title: 'Look up exact behavior', description: 'Find commands, errors, protocol behavior, and other reference material.', to: './reference/overview'},
]} />

## Documentation model

<FeatureCards items={[
  {title: 'Get started', description: 'First successful use, deployment, and migration.'},
  {title: 'Guides', description: 'Task-oriented product usage.'},
  {title: 'Administration', description: 'Server ownership, operations, governance, and troubleshooting.'},
  {title: 'Development', description: 'HTTP API and plugin integration.'},
  {title: 'Reference', description: 'Precise lookup material rather than tutorials.'},
]} />

The visible navigation intentionally does not mirror the repository's `player/`, `admin/`, and `developer/` folders. Folders optimize maintenance; navigation optimizes reading.

## Documentation baseline

:::info
These docs primarily track the WebShopX v3 development line. Confirm the exact version installed on your server before relying on configuration or API details.
:::

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
