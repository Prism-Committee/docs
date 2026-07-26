---
id: install-deploy
title: Install and Deploy
sidebar_label: Install and Deploy
sidebar_position: 2
---

# Install and Deploy

## Requirements

Choose a WebShopX build that matches both your Minecraft runtime and Java version:

- Minecraft `1.18.2+`: Java `17`
- Minecraft `1.20.6+` (default line): Java `21`
- Minecraft `26.1+ / 26.2+`: Java `25`

SQLite is the default database for quick single-server setup. MySQL or MariaDB is recommended for production or multi-server deployments. Vault is optional for `GAME_COIN` integration.

## First Startup

1. Put the WebShopX JAR in `plugins/`.
2. Start the server once.
3. Review `plugins/WebShopX/config.yml`.
4. Restart the server.
5. Players set their web password with `/ws password <newPassword>`.
6. In `internal` mode, open `http://<host>:8819/`.
7. Enter administration from the web UI; `/admin.html` is only a compatibility redirect in v3.

Default bootstrap administrator:

```text
username: admin
password: admin123456
```

Replace or disable it immediately after initialization.

## Deployment Modes

### `internal`

WebShopX serves both API and built-in static web pages. This is the simplest deployment mode.

### `external`

WebShopX serves the API while static files are hosted by Nginx/CDN or another web server. Configure `webshop.embedded-http.public-api-url`, CORS only when required, HTTPS, and reverse proxy rules.

### `relay`

WebShopX connects outbound to WebShopX Relay, so the Minecraft host does not need to expose the Web port directly. Prefer the in-game Relay setup workflow and keep the access key secret.

## SQLite

SQLite requires:

```yaml
database:
  type: sqlite
  sqlite-file: plugins/WebShopX/webshopx.db

cluster:
  role: standalone
```

Do not use SQLite with `master` or `node` cluster roles.

## Production Checklist

- replace default administrator credentials;
- use strong database credentials and restrict access;
- use HTTPS for public access;
- never expose Relay/payment/database secrets;
- back up database and `plugins/WebShopX/` before upgrades;
- after upgrading, verify login, orders, delivery/refund, market trading, and admin access.
