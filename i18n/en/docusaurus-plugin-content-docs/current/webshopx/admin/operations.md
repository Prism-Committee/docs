---
id: operations
title: Operations and Troubleshooting
sidebar_label: Operations and Troubleshooting
sidebar_position: 5
---

# Operations and Troubleshooting

This page covers common post-deployment operations: delivery failures, refunds, inventory risks, backups, upgrades, logs, and cluster/Relay checks.

## Operational baseline

Monitor login/session health, order progression, `WAIT_CLAIM` buildup, mailbox backlog, refund failures, market anomalies, and audit/business logs.

## Delivery and mailbox

Common states include `PENDING`, `WAIT_CLAIM`, `DELIVERED`, `REFUNDED`, and `CANCELLED`.

Players can use:

```text
/ws claim [all|ODR-|MKT-|CLM-|MCL-]
/ws mailbox
/ws mailbox collect
```

When troubleshooting delivery, check the order state, player/inventory availability, generated claim tokens, mailbox contents, and business logs before applying manual compensation.

## Refunds

Refund behavior depends on the current version and server policy. Confirm whether the order has been delivered, whether the refund window is still open, whether it was already refunded, and whether special products or market settlement have already been consumed/finalized.

## Offline inventory

Online inventory is authoritative. Offline read-only views and offline write support are separate capabilities.

:::danger
Do not enable offline inventory writes by copying YAML keys from old documentation if those keys are not present in the current shipped `config.yml`. Use only controls that exist in the actual target version.
:::

Experimental offline writes should only be considered after backups and testing, and only when no other inventory/playerdata system can write concurrently.

## Backup and upgrade

Before upgrading: stop or enter maintenance, back up the database and `plugins/WebShopX/`, back up player data when experimental offline inventory features are involved, replace the JAR, then regress login, orders, market, claims, refunds, and admin permissions.

## Cluster and Relay

For multi-node deployments verify version alignment, unique `server-id` values, Redis connectivity/channel consistency, runtime config propagation, and Relay binding/access-key status.

For deployment details see [Install and Deploy](./install-deploy).

When opening an issue, include WebShopX version, Minecraft/server implementation version, Java version, deployment/database type, reproduction steps, relevant error codes/logs, and optional dependencies.
