---
id: player-api
title: Player API
sidebar_label: Player API
sidebar_position: 3
---

# Player API

Common endpoints include wallet, exchange, redeem codes, products, orders, notifications, metadata, and leaderboards.

| Method | Path | Auth |
| --- | --- | --- |
| GET | `/api/wallet` | user |
| GET | `/api/wallet/ledger` | user |
| POST | `/api/wallet/exchange` | user |
| POST | `/api/redeem/use` | user |
| GET | `/api/products` | optional |
| POST | `/api/orders` | user |
| GET | `/api/orders/list` | user |
| POST | `/api/orders/refund` | user |
| GET | `/api/notifications/list` | user |
| GET | `/api/notifications/unread-count` | user |
| POST | `/api/notifications/mark-read` | user |
| GET | `/api/meta/currency` | none |
| GET | `/api/meta/materials` | none |
| GET | `/api/meta/market-tags` | none |
| GET | `/api/leaderboard/list` | optional |

Use stable `idempotencyKey` values for state-changing requests such as exchange and order creation. Delivery/refund behavior is also affected by server-side policy and the current order state.
