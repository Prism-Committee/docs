---
id: admin-api
title: Admin API
sidebar_label: Admin API
sidebar_position: 5
---

# Admin API

Admin endpoints require a valid administrator session and, for most operations, the corresponding fine-grained permission.

Major endpoint groups include:

- `/api/admin/auth/*` — administrator authentication
- `/api/admin/redeem/*` — redeem codes
- `/api/admin/products/*` — products
- `/api/admin/orders/*` — order inspection
- `/api/admin/economy/*` — currency/exchange/market/leaderboard settings
- `/api/admin/market/*` — market configuration and moderation
- `/api/admin/users/*` — user support and wallet adjustment
- `/api/admin/audit/*` — audit logs
- `/api/admin/admin-users/*` — super-admin account management

Important write operations are permission checked and may be audited. Clients must handle `bad_request`, `forbidden`, and `auth_invalid` correctly.

Administrator session tokens are sensitive credentials and should never be exposed to untrusted browser applications or third-party sites.
