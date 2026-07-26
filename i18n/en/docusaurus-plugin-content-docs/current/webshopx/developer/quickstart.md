---
id: developer-quickstart
title: Developer Quickstart
sidebar_label: Developer Quickstart
sidebar_position: 1
---

# Developer Quickstart

Use this page to make a first WebShopX API call and understand where to go next.

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

## Error handling

Prefer the stable `error` field over natural-language `message` text. Common global errors include `auth_required`, `auth_invalid`, `bad_request`, and `forbidden`.

See [HTTP API Reference](../reference/http-api-reference) for shared protocol conventions.

## Continue

- [Player API](./player-api)
- [Market API](./market-api)
- [Admin API](./admin-api)
- [WebShopXPaymentApi](../webshopx-payment-api)
