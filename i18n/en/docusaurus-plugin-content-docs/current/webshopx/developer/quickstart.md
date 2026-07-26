---
id: developer-quickstart
slug: /webshopx/developer/quickstart
title: Developer Quickstart
sidebar_label: Developer Quickstart
sidebar_position: 1
---

import {DocHero, FeatureCards} from '@site/src/components/DocVisuals';

# Developer Quickstart

<DocHero
  eyebrow="Development"
  title="Make your first WebShopX API call"
  description="Follow the shortest integration path: find the API, verify health, log in, complete one read and one write, then continue to the API family you need."
  primary={{label: 'HTTP API Reference', to: '../reference/http-api-reference'}}
  secondary={{label: 'Player API', to: './player-api'}}
/>

## Find the API

WebShopX can run in `internal`, `external`, or `relay` mode. Same-origin pages normally use `/api`; external clients should use the public API root provided by the server administrator.

## Health check

```http
GET /health
```

## Log in

```http
POST /api/auth/login
Content-Type: application/json

{
  "identifier": "player_name_or_uuid",
  "password": "your_password"
}
```

Use the returned token as:

```http
Authorization: Bearer <sessionToken>
```

## First reads

```http
GET /api/products
```

or, when authenticated:

```http
GET /api/wallet
Authorization: Bearer <sessionToken>
```

## First write

```http
POST /api/orders
Authorization: Bearer <sessionToken>
Content-Type: application/json

{
  "productId": 1,
  "quantity": 1,
  "idempotencyKey": "client-order-unique-key"
}
```

Use stable idempotency keys for writes with money, inventory, or order side effects, and reuse the same key when retrying the same user action after a timeout.

:::warning[Writes must be idempotent]
For requests that change assets, inventory, orders, or market state, do not generate a new key for every timeout retry. Reuse the same `idempotencyKey` for the same user action.
:::

## Error handling

Prefer the stable `error` field over natural-language `message` text. Common global errors include `auth_required`, `auth_invalid`, `bad_request`, and `forbidden`.

See [HTTP API Reference](../reference/http-api-reference) for shared protocol conventions.

## Continue

<FeatureCards items={[
  {icon: '👤', title: 'Player API', description: 'Wallet, products, orders, notifications, and leaderboard.', to: './player-api'},
  {icon: '📈', title: 'Market API', description: 'Listings, purchases, selling, auctions, and market settings.', to: './market-api'},
  {icon: '🛡️', title: 'Admin API', description: 'Products, orders, economy, governance, support, and audit.', to: './admin-api'},
  {icon: '💳', title: 'WebShopXPaymentApi', description: 'Build a third-party Bukkit/Paper payment provider.', to: '../webshopx-payment-api'},
]} />