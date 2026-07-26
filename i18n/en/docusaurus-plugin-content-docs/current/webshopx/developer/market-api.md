---
id: market-api
title: Market API
sidebar_label: Market API
sidebar_position: 4
---

# Market API

Common market endpoints include listing queries, listing creation, direct purchases, fulfilling BUY orders, bidding, unlisting, pausing/resuming, repricing, settings updates, icon uploads, and supply refresh.

Key paths include:

- `GET /api/market/listings`
- `POST /api/market/listings/create`
- `POST /api/market/buy`
- `POST /api/market/sell-to-buy`
- `POST /api/market/bid`
- `POST /api/market/unlist`
- `POST /api/market/settings`
- `POST /api/market/icon/upload`
- `POST /api/market/supply/refresh`

State-changing market requests should use stable idempotency keys where supported. Server-side listing limitations, permissions, item state, trade mode, and auction state can all reject a request even when the JSON is syntactically valid.

Handle errors by `error` code, including `listing_unavailable`, `invalid_quantity`, `buy_requires_*`, `auction_closed`, `bid_too_low`, and `limitation_*`.
