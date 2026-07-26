---
id: v2-to-v3-migration
title: Upgrade from v2 to v3
sidebar_label: v2 → v3 Migration
sidebar_position: 2
---

# Upgrade from v2 to v3

v3 is more than a JAR replacement: the frontend, deployment modes, public URLs, mailbox commands, and the location of business settings have changed. Back up the database, `plugins/WebShopX/`, and the old `config.yml` before upgrading.

## Key changes

| v2 | v3 |
| --- | --- |
| Legacy embedded pages | New Vue frontend and routing |
| `webshop.api-base-url` | `webshop.public-url` and `webshop.embedded-http.public-api-url` |
| internal / external | Optional `relay` mode added |
| Deployment guidance centered on MySQL/MariaDB | Single servers may use SQLite; clusters still use MySQL/MariaDB |
| `/ws mailbox claim` | `/ws mailbox collect`; `/ws mailbox` opens the mailbox |
| Many business rules stored in YAML | Business settings are mainly managed through the web admin panel and database |

## Recommended upgrade

1. **Back up and stop the server**: back up the database and `plugins/WebShopX/`; also back up player data when experimental offline inventory features are involved.
2. **Keep the old business settings for reference**: preserve currencies, exchange rules, fees, market restrictions, administrators, and public URL settings.
3. **Install the matching v3 build**: use a v3 JAR compatible with the current Minecraft and Java environment, then let v3 generate or migrate its current configuration.
4. **Review deployment settings**: check the database, `cluster.role`, HTTP port, `server-mode`, public URLs, and CORS.
5. **Verify business data in the new admin panel**: confirm products, wallets, market state, orders, permissions, and business rules.
6. **Clear browser caches and run a regression test**: open the new site with `/ws home` and use a test account to verify login, purchase, trading, claiming, and refunds.

Do not copy old `exchange.*`, `currency.*`, market fee, leaderboard, broadcast-template, or similar business sections wholesale into the new `config.yml`. Use [Configuration](./configuration) for the current supported fields.

## Before going live

- players can set passwords and sign in;
- home, products, wallets, orders, and market data load correctly;
- listing, purchasing, and auctions work;
- `/ws claim`, `/ws mailbox`, and `/ws mailbox collect` work;
- administrator roles and permissions are correct;
- auto delivery, `WAIT_CLAIM`, refunds, and mailbox fallback have been tested;
- `external` deployments have correct public API/CORS settings, or `relay` deployments have correct authorization, binding, and `/ws home` behavior;
- WebShopX-Payments users have completed at least one test or sandbox payment flow.

:::warning[Offline inventory writes are not required for migration]
Experimental offline inventory management is a separate high-risk capability. Do not enable it on a production server merely as part of the v2 → v3 upgrade; back it up, test it, and evaluate it separately.
:::

## Related documentation

- [Install and Deploy](./install-deploy)
- [Configuration](./configuration)
- [Operations and Troubleshooting](./operations)
