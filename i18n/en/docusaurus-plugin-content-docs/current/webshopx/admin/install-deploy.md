---
id: install-deploy
title: Install and Deploy
sidebar_label: Install and Deploy
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {DocHero, FeatureCards} from '@site/src/components/DocVisuals';

# Install and Deploy

<DocHero
  eyebrow="Get started"
  title="Install WebShopX and choose a web deployment mode"
  description="Complete the first installation, database setup, and web mode selection. For a first test, start with SQLite + internal; use relay when you want managed public hosting."
  primary={{label: 'First startup', to: '#first-startup'}}
  secondary={{label: 'Relay Public Access', to: './relay-access'}}
/>

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

:::warning[Bootstrap administrator]
Replace or disable the default administrator immediately after initialization.
:::

## Deployment Modes

<Tabs groupId="webshopx-deployment-mode">
<TabItem value="internal" label="internal" default>

WebShopX serves both API and built-in static web pages. This is the simplest deployment mode and the best choice for a first test.

</TabItem>
<TabItem value="external" label="external">

WebShopX serves the API while static files are hosted by Nginx/CDN or another web server. Configure `webshop.embedded-http.public-api-url`, CORS only when required, HTTPS, and reverse proxy rules.

</TabItem>
<TabItem value="relay" label="relay">

WebShopX connects outbound to WebShopX Relay, so the Minecraft host does not need to expose the web port directly.

Current official service panel: **[Open the WebShopX Relay service panel](https://47.122.127.164/)**.

Each user can claim one **5-day free trial**. Users may also purchase a plan directly from the panel or activate service with an eligible redemption code. For additional trial time, join QQ group `636803372` and follow the current trial instructions.

Recommended first setup:

1. Register or sign in to the official panel.
2. Claim the free trial, purchase a plan, or redeem a code.
3. Confirm that a usable project exists under the account.
4. Run:

```text
/ws mode setup relay
/ws mode switch relay
/ws home
```

`/ws mode setup relay` opens a secure authorization page and WebShopX stores the required Relay credential when authorization completes. If the Relay panel shows a pending server, associate it with the intended project before validating `/ws home`.

Plan prices and allowances may change, so confirm the current values in the panel before activation or purchase. See [Relay Public Access](./relay-access) for account, project, binding, plans, security, and troubleshooting guidance.

</TabItem>
</Tabs>

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

## Related documentation

<FeatureCards items={[
  {icon: '⚙️', title: 'Configuration', description: 'Continue with database, web mode, cluster, and runtime settings.', to: './configuration'},
  {icon: '🌐', title: 'Relay Public Access', description: 'Official Relay panel, plans, authorization, and binding.', to: './relay-access'},
  {icon: '⌨️', title: 'Commands and Permissions', description: 'Look up commands and administrator permissions.', to: './commands-permissions'},
  {icon: '⬆️', title: 'v2 to v3 Migration', description: 'Review upgrade steps and compatibility boundaries.', to: './v2-to-v3-migration'},
  {icon: '🛠️', title: 'Troubleshooting', description: 'Continue here for post-deployment operational issues.', to: './faq'},
]} />