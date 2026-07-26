---
id: api-basics
title: HTTP API Basics
sidebar_label: HTTP API Basics
sidebar_position: 1
---

# HTTP API Basics

WebShopX exposes its HTTP API through `webshop.embedded-http.host` and `webshop.embedded-http.port` (default port `8819`).

- `internal`: API + built-in static web UI.
- `external`: API only; frontend is hosted separately.
- `relay`: public access is provided through WebShopX Relay.

API requests and responses primarily use UTF-8 JSON. Error responses normally include a stable `error` code and a human-readable `message`.

```json
{"error":"error_code","message":"error message"}
```

Authenticated requests commonly use:

```http
Authorization: Bearer <sessionToken>
```

For cross-origin frontends, explicitly configure CORS and only allow the origins you need. The health endpoint is `GET /health`.

Use the exact WebShopX version you target as the final authority for paths, fields, and response behavior.
