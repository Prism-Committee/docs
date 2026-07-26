---
id: configuration
title: Configuration
sidebar_label: Configuration
sidebar_position: 3
---

# Configuration

## Key Principle

In the current v3 line, `config.yml` is intentionally small. It mainly contains deployment mode, local HTTP settings, database, cluster, Redis, Relay, and local safety/runtime options. Business rules should normally be managed through the Web admin panel and stored in the database.

## Current Configuration Shape

```yaml
webshop:
  server-mode: internal
  public-url: ""
  admin-bootstrap:
    enabled: true
    username: admin
    password: admin123456
    role: SUPER_ADMIN
  embedded-http:
    host: 0.0.0.0
    port: 8819
    static-root: web
    public-api-url: ""
    cors:
      enabled: false
      allowed-origins:
        - "*"
  business-ledger:
    enabled: true
    directory: logs/business-ledger
    retention-days: 30

relay:
  url: ""
  access-key: ""

database:
  type: sqlite
  host: 127.0.0.1
  port: 3306
  schema: webshop
  username: webshop
  password: change_me
  use-ssl: false
  allow-public-key-retrieval: true
  server-rsa-public-key-file: ""
  sqlite-file: plugins/WebShopX/webshopx.db
  pool-size: 10

cluster:
  role: standalone
  server-id: standalone
  presence-ttl-seconds: 120

redis:
  enabled: false
  host: 127.0.0.1
  port: 6379
  password: ""
  broadcast-channel: webshopx:market:broadcast
  cluster-channel: webshopx:cluster:event
  channel: webshopx:market:broadcast
```

## Deployment Notes

- `server-mode=internal`: built-in API + web UI.
- `server-mode=external`: API only; static frontend is hosted externally.
- `server-mode=relay`: public access through WebShopX Relay.
- `database.type=sqlite` requires `cluster.role=standalone`.
- MySQL/MariaDB is recommended for production or multi-server deployments.
- Keep CORS disabled unless an external frontend actually needs cross-origin API access.

## What No Longer Belongs in `config.yml`

Older releases may contain business settings such as:

- `exchange.*`
- `currency.*`
- market fees/taxes
- leaderboard settings
- market rules
- broadcast templates
- sample products

In v3, treat those as migration references rather than the primary configuration source. Re-create or verify them in the Web admin panel after upgrading.

## Security Checklist

1. Replace/disable the default bootstrap administrator after initialization.
2. Do not commit database passwords or Relay keys to Git.
3. Restrict database access to the required hosts only.
4. Use HTTPS for public deployments.
5. Keep experimental offline-inventory write features disabled unless explicitly tested.
6. Back up both database state and `plugins/WebShopX/` before upgrades.

:::warning
When documentation and a specific release differ, the `config.yml` shipped with that WebShopX release is the source of truth.
:::
