---
id: relay-access
title: Relay Public Access
sidebar_label: Relay Public Access
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {DocHero, FeatureCards, PlanCards, Steps} from '@site/src/components/DocVisuals';

# Relay Public Access

<DocHero
  eyebrow="WebShopX Relay"
  title="Publish your WebShopX shop without exposing the server web port"
  description="Relay provides a managed public entry point for WebShopX and is useful when you do not want to maintain public IP routing, port forwarding, HTTPS, or a reverse proxy yourself."
  primary={{label: 'Open the official Relay panel', to: 'https://47.122.127.164/'}}
  secondary={{label: 'Install and deploy', to: './install-deploy'}}
/>

:::info[Official Relay service]
Current official service panel: **[Open the WebShopX Relay service panel](https://47.122.127.164/)**.

The panel is used for account access, service activation, project management, server binding, redemption, and usage information. Available pages, plans, and entitlements may change; always follow what the panel currently shows.
:::

Public documentation covers only the server-owner workflow and does not expose Relay server internals.

## When to use Relay

<FeatureCards items={[
  {icon: '🌐', title: 'No fixed public IP', description: 'Port forwarding is unavailable, inconvenient, or changes frequently.'},
  {icon: '🔒', title: 'No self-managed HTTPS', description: 'You do not want to maintain Nginx/Caddy, certificates, and public forwarding.'},
  {icon: '🧭', title: 'A managed public entry point', description: 'Players should reach WebShopX through a stable public address.'},
  {icon: '🧩', title: 'Separate hosting from Minecraft', description: 'Keep the public hosting entry point separate from the Minecraft host.'},
]} />

WebShopX supports three web deployment modes:

| Mode | Web/API hosting | Do you provide the public entry point? |
| --- | --- | --- |
| `internal` | WebShopX serves it directly | Usually yes for public use |
| `external` | API in WebShopX, frontend hosted separately | Yes |
| `relay` | Relay provides public access | Usually no |

## The official service panel

Open the [WebShopX Relay service panel](https://47.122.127.164/) to manage the user-facing Relay resources:

<FeatureCards items={[
  {icon: '👤', title: 'Account', description: 'Registration, sign-in, and account security.'},
  {icon: '✨', title: 'Activate service', description: 'Claim the first free trial or purchase a plan yourself.'},
  {icon: '📦', title: 'Projects', description: 'A Relay project represents one hosted WebShopX public instance.'},
  {icon: '🔗', title: 'Server binding', description: 'Associate a WebShopX server with the intended project.'},
  {icon: '🎟️', title: 'Redemption', description: 'Use an eligible code to activate or extend benefits.'},
  {icon: '📊', title: 'Project panel', description: 'Review project state, connection state, usage, and entitlements.'},
]} />

### Ways to activate Relay

A redemption code is not required for every user. Current activation options include:

1. **First free trial**: each user can claim one 5-day trial;
2. **Self-service purchase**: choose and purchase a plan from the service page;
3. **Redemption code**: redeem an eligible code when available;
4. **Additional trial time**: join QQ group `636803372` and follow the current instructions for additional trial benefits.

:::note[Plan information]
The following values reflect the current panel. Prices, durations, traffic, API request limits, and cache capacity may change, so confirm the live values in the official panel before activation or purchase.
:::

<PlanCards items={[
  {name: 'Trial', price: '¥0', period: '5 days', description: 'Initial testing and validation', badge: 'Once per user', features: ['1 GB traffic per period', '100,000 API requests', '256 MB cache']},
  {name: 'Lite', price: '¥6', period: '30 days', description: 'Low usage or small servers', features: ['5 GB traffic per period', '200,000 API requests', '1 GB cache']},
  {name: 'Standard', price: '¥10', period: '30 days', description: 'Stable medium-sized servers', badge: 'Recommended', highlighted: true, features: ['10 GB traffic per period', '600,000 API requests', '1 GB cache']},
  {name: 'Advanced', price: '¥20', period: '30 days', description: 'Higher traffic or more resources', features: ['40 GB traffic per period', '3,000,000 API requests', '2 GB cache']},
]} />

:::tip
For a first setup, claim the 5-day trial, complete the Relay integration test, and then decide whether to purchase a longer plan.
:::

## Recommended setup

<Steps items={[
  {title: 'Prepare your Relay account and service', children: <>Open the <a href="https://47.122.127.164/">official Relay panel</a> and register or sign in. Open Activate Service, claim the one-time 5-day trial or purchase a plan directly. If you have a redemption code, you can redeem it instead. Confirm that a usable project or service instance exists under the account.</>},
  {title: 'Start authorization in game', children: <>Join the server with an account that has <code>webshop.admin</code>, then run <code>/ws mode setup relay</code>. WebShopX returns a secure authorization link; open it, sign in to the Relay account, confirm authorization, and return to Minecraft.</>},
  {title: 'Check the server-project relationship', children: <>Open the Relay panel and review the project. If a pending server appears or the panel asks you to select a project, associate the current WebShopX server with the intended project. Be careful when multiple servers or projects exist under one account.</>},
  {title: 'Switch to Relay and verify', children: <>Run <code>/ws mode switch relay</code> and then <code>/ws home</code>. If the expected public shop opens, the basic Relay setup is complete.</>},
]} />

:::warning[Do not share authorization information]
Never post your access key, authorization link, or verification code in a ticket or public chat. Only the current server administrator should open the authorization link, and screenshots containing it should not be published.
:::

After successful authorization, WebShopX stores the required Relay credential and tells you to continue with the mode switch. Normally you do **not** need to copy an access key manually.

## Day-to-day management

<Tabs groupId="relay-management">
<TabItem value="webshopx" label="Minecraft / WebShopX" default>

Use it for:

- switching WebShopX modes;
- opening the current shop URL;
- managing WebShopX products, orders, market functions, and administrators.

</TabItem>
<TabItem value="relay" label="Relay service panel">

Use it for:

- claiming a trial, purchasing plans, or redeeming codes;
- projects and project selection;
- server binding state;
- Relay account management;
- expiration, traffic, request counts, cache capacity, and other entitlements;
- renewal, upgrades, and project-level hosting operations.

</TabItem>
</Tabs>

> The Relay panel manages **public hosting and project relationships**. The WebShopX admin panel manages **shop business data**.

## Manual configuration (advanced)

For the official Relay service, prefer `/ws mode setup relay`. Manual access-key entry is normally unnecessary.

<details>
<summary><strong>Show manual configuration</strong></summary>

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

</details>

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

<details>
<summary><strong>No authorization link</strong></summary>

Run `/ws mode setup relay` as an **in-game** administrator with the required permission.

</details>

<details>
<summary><strong>The authorization page asks me to sign in</strong></summary>

That is expected. Sign in with the account that should manage the Relay project.

</details>

<details>
<summary><strong>I cannot find the free trial</strong></summary>

Confirm whether the current account has already used its one-time trial. Each user receives one 5-day trial. For additional trial time, join QQ group `636803372` and follow the current activity or application instructions.

</details>

<details>
<summary><strong>The allowance did not update after purchase or renewal</strong></summary>

Refresh the project panel and confirm that the purchase targeted the intended project. This is especially important for accounts with multiple projects. Keep the order information and contact official support if the entitlement still does not update.

</details>

<details>
<summary><strong>Authorization succeeded but the project is not usable</strong></summary>

Check the Relay panel first:

1. a valid project exists;
2. the service has not expired;
3. the server is not still pending binding;
4. it is bound to the intended project;
5. `/ws mode switch relay` has been executed.

</details>

<details>
<summary><strong>`/ws home` is not configured or does not open</strong></summary>

Confirm Relay mode, authorization state, project/server binding, active service duration, remaining allowance, and then check the WebShopX logs for continuing connection errors.

</details>

<details>
<summary><strong>I have multiple Minecraft servers</strong></summary>

Authorize them separately and verify each server-to-project relationship in the Relay panel rather than guessing from names alone.

</details>

<details>
<summary><strong>Possible access-key leak</strong></summary>

Replace or revoke the affected credential from the Relay account side, then authorize the server again.

</details>

## Related documentation

<FeatureCards items={[
  {icon: '🚀', title: 'Install and Deploy', description: 'Choose internal, external, or relay and complete the first deployment.', to: './install-deploy'},
  {icon: '⚙️', title: 'Configuration', description: 'Review current WebShopX configuration and runtime parameters.', to: './configuration'},
  {icon: '🛠️', title: 'Operations and Troubleshooting', description: 'Handle connection, inventory, delivery, refund, and runtime issues.', to: './operations'},
  {icon: '⌨️', title: 'Commands and Permissions', description: 'Look up player/admin commands and permission nodes.', to: './commands-permissions'},
]} />
