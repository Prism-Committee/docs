---
id: guides-overview
slug: /webshopx/guides/overview
title: Guides
sidebar_label: Guides
sidebar_position: 1
---

import {DocHero, FeatureCards} from '@site/src/components/DocVisuals';

# Guides

<DocHero
  eyebrow="Guides"
  title="Find documentation by the task you want to complete"
  description="These guides are organized around real usage tasks rather than internal WebShopX modules."
  primary={{label: 'Player Quick Start', to: '../player/quick-start'}}
  secondary={{label: 'Open Reference', to: '../reference/overview'}}
/>

<FeatureCards items={[
  {icon: '👋', title: 'First time using WebShopX', description: 'Set a web password and open the shop.', to: '../player/quick-start'},
  {icon: '🛒', title: 'Shop, Market, and Orders', description: 'Buy items, review orders, or use the player market.', to: '../player/shop-and-orders'},
  {icon: '💰', title: 'Wallet and Exchange', description: 'Check balances, exchange currency, or recharge.', to: '../player/wallet-and-exchange'},
  {icon: '📦', title: 'Inventory, Claims, and Mailbox', description: 'Find delivered items and understand item flow.', to: './inventory-and-delivery'},
  {icon: '📈', title: 'Auctions, Dynamic Pricing, and Trading Rules', description: 'Use auctions, understand pricing, and troubleshoot listing rules.', to: './auctions-and-pricing'},
  {icon: '❓', title: 'Player FAQ', description: 'Troubleshoot player-facing errors and unexpected behavior.', to: '../player/faq'},
]} />

:::tip
If you already know the exact command, field, error code, or API behavior you need, go directly to [Reference](../reference/overview).
:::