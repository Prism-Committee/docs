---
id: authentication
title: Authentication and Sessions
sidebar_label: Authentication
sidebar_position: 2
---

# Authentication and Sessions

## Player Login

`POST /api/auth/login`

Typical request:

```json
{
  "identifier": "player_name_or_uuid",
  "password": "your_password"
}
```

Successful login returns a session token and user/session metadata. Authenticated requests normally use `Authorization: Bearer <token>`.

Player session endpoints include:

- `GET /api/auth/me`
- `POST /api/auth/logout`

Administrator login uses `POST /api/admin/auth/login` and returns administrator role/permission information in addition to session data.

Common authentication errors include `auth_required`, `auth_invalid`, and `invalid_credentials`.

Resetting a password or forcing a user logout may invalidate existing sessions. Clients should handle `auth_invalid` globally and return the user to login.
