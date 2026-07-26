---
id: http-api-reference
title: HTTP API Reference
sidebar_label: HTTP API Reference
sidebar_position: 3
---

# HTTP API Reference

Shared protocol conventions for all WebShopX API clients are collected here.

## Service and health

The built-in HTTP service commonly listens on port `8819`. Same-origin pages usually use `/api`; external clients should use the public API root configured by the server administrator.

```http
GET /health
```

## Requests and errors

Business APIs primarily use UTF-8 JSON. Errors normally include a stable code:

```json
{
  "error": "error_code",
  "message": "error message"
}
```

Use `error` for program logic rather than parsing `message`.

## Authentication

```http
Authorization: Bearer <sessionToken>
```

Common auth errors: `auth_required`, `auth_invalid`, `invalid_credentials`, `not_admin`, and `forbidden`.

## Status codes

| Code | Typical meaning |
| --- | --- |
| `200` | Success |
| `204` | Successful empty response/preflight |
| `400` | Business or request error |
| `404` | Route/resource not found |
| `405` | Method not allowed |
| `500` | Internal server error |

## Idempotency

Use a stable `idempotencyKey` for wallet exchange, order creation, market purchase/fulfillment, and auction bids. Reuse the same key when retrying the same user action after a timeout.

## Common enums

- currencies: `SHOP_COIN`, `GAME_COIN`
- market side: `SELL`, `BUY`
- trade mode: `DIRECT`, `AUCTION`
- source mode: `MANUAL`, `SUPPLY`
- auctions: `ENGLISH_AUCTION_V1`, `DUTCH_AUCTION_V1`, `VICKREY_AUCTION_V1`, `CANDLE_AUCTION_V1`

## Uploads

Current upload endpoints are used for listing, product, and material icons. Target-version implementation is authoritative; common constraints include an approximately `2MB` limit and image formats such as PNG, WebP, JPEG, and GIF.

## Endpoint references

- [Player API](../developer/player-api)
- [Market API](../developer/market-api)
- [Admin API](../developer/admin-api)
