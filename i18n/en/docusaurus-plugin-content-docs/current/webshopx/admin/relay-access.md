---
id: relay-access
title: Relay Public Access
sidebar_label: Relay Public Access
sidebar_position: 3
---

# Relay Public Access

Relay provides a public WebShopX shop without requiring the Minecraft server to expose its web port directly. It is a good fit when you do not want to manage public IP routing, HTTPS, or a reverse proxy yourself.

:::info[Official Relay service]
Current official service panel: **[Open the WebShopX Relay service panel](https://47.122.127.164/)**

The panel is used for account access, project management, server binding, redemption, and usage information. Available pages and entitlements may change; always follow what the panel currently shows.
:::

This page only documents the server-owner workflow and intentionally does not describe Relay server internals.

## When to use Relay

Consider Relay when:

- you do not have a fixed public IP or convenient port forwarding;
- you want a managed public entry point for WebShopX;
- you do not want to operate Nginx/Caddy, TLS certificates, or public forwarding yourself;
- you want the public entry point separated from the Minecraft host.

WebShopX supports three web deployment modes:

| Mode | Web/API hosting | Do you provide the public entry point? |
| --- | --- | --- |
| `internal` | WebShopX serves it directly | Usually yes for public use |
| `external` | API in WebShopX, frontend hosted separately | Yes |
| `relay` | Relay provides public access | Usually no |

## The official service panel

Open the [WebShopX Relay service panel](https://47.122.127.164/) to manage the user-facing Relay resources:

- **Account**: registration, sign-in, and account security;
- **Projects**: a Relay project represents one hosted WebShopX public instance;
- **Server binding**: associate a WebShopX server with the intended project;
- **Redemption**: create or extend a project when you have an eligible redemption code;
- **Project panel**: review project and connection state;
- **Usage and entitlement information**: view the limits currently presented for the project.

:::tip
For a first-time setup, sign in to the official panel and make sure you have a usable project before starting the in-game Relay setup flow.
:::

## Recommended setup

### 1. Prepare your account and project

1. Open the [official Relay panel](https://47.122.127.164/).
2. Register or sign in.
3. Open your user dashboard.
4. Confirm that you have a usable project.
5. If a redemption code is required, follow the panel to redeem it first.

Never post your access key, authorization link, or verification code in a ticket or public chat.

### 2. Start authorization in game

Join the server with an account that has `webshop.admin`, then run:

```text
/ws mode setup relay
```

WebShopX returns a secure authorization link.

1. Open the link.
2. Sign in with the Relay account that should manage this project.
3. Confirm the authorization on the page.
4. Return to Minecraft and wait for the flow to finish.

After successful authorization, WebShopX stores the required Relay credential and tells you to continue with the mode switch. Normally you do not need to copy an access key manually.

:::warning
Only the server administrator should open the authorization link. Do not forward it or publish screenshots containing it.
:::

### 3. Check the server-project relationship

Open the Relay service panel and review your project.

If the panel shows a **pending server** or asks you to choose a project, associate the current WebShopX server with the project you intend to use. Be careful when multiple servers or projects exist under the same account.

### 4. Switch to Relay

Back in game, run:

```text
/ws mode switch relay
/ws home
```

If `/ws home` opens the expected public shop, the basic Relay setup is complete.

## Day-to-day management

Use WebShopX itself for shop business such as products, orders, market functions, and administrators.

Use the Relay service panel for:

- projects;
- server binding state;
- Relay account management;
- project usage/entitlement information;
- redemption or project-level hosting operations.

The Relay panel manages **public hosting and project relationships**. The WebShopX admin panel manages **shop business data**.

## Manual configuration (advanced)

For the official Relay service, prefer `/ws mode setup relay`.

Only use manual configuration when you already know which account and credential you are using:

```yaml
webshop:
  server-mode: relay
  public-url: ""

relay:
  # Normally leave the official-service endpoint at its default value.
  url: ""
  access-key: "your-access-key"
```

Restart after saving.

:::danger[Access keys are sensitive]
Never commit a real `access-key`, publish it in screenshots, or reuse an unknown key across servers. If a key may be exposed, replace/revoke it and authorize the server again.
:::

## Switch back to local mode

Relay is reversible. Use either:

```text
/ws mode switch internal
```

or:

```text
/ws mode switch external
```

- `internal`: the plugin serves the API and static pages directly;
- `external`: the plugin serves the API while the web frontend is hosted elsewhere.

Prepare the replacement public URL before switching away from Relay.

## Troubleshooting

### No authorization link

Run `/ws mode setup relay` as an **in-game** administrator with the required permission.

### The authorization page asks me to sign in

That is expected. Sign in with the account that should manage the Relay project.

### Authorization succeeded but the project is not usable

Check the Relay panel first:

1. a valid project exists;
2. the server is not still pending binding;
3. it is bound to the intended project;
4. `/ws mode switch relay` has been executed.

### `/ws home` is not configured or does not open

Confirm Relay mode, authorization state, project/server binding, and then check the WebShopX logs for continuing connection errors.

### I have multiple Minecraft servers

Authorize them separately and verify each server-to-project relationship in the Relay panel rather than guessing from names alone.

### Possible access-key leak

Replace or revoke the affected credential from the Relay account side, then authorize the server again.

## Related documentation

- [Install and Deploy](./install-deploy)
- [Configuration](./configuration)
- [Operations and Troubleshooting](./operations)
- [Commands and Permissions](./commands-permissions)
