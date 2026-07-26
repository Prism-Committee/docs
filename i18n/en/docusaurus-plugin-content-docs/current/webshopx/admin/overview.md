---
id: overview
title: Overview
sidebar_label: Overview
sidebar_position: 1
---

# WebShopX Server Administrator Guide

This section is for plugin installers, server operators, and WebShopX administrators.

## Recommended Reading Path

1. [Install and Deploy](./install-deploy)
2. [Configuration](./configuration)
3. [Commands and Permissions](./commands-permissions)
4. [Relay Access](./relay-access)
5. [Market Governance](./market-governance)
6. [Inventory Operations](./inventory-operations)
7. [Delivery and Refund Operations](./delivery-and-refund-ops)
8. [v2 to v3 Migration](./v2-to-v3-migration)
9. [FAQ](./faq)

## Deployment Components

| Component | Purpose |
| --- | --- |
| WebShopX plugin | Core business logic, HTTP API, optional built-in web UI |
| SQLite | Default single-server database; requires `cluster.role=standalone` |
| MySQL / MariaDB | Recommended for production or multi-server deployments |
| Vault (optional) | Connects `GAME_COIN` to the game economy |
| Redis (optional) | Cluster config refresh and market broadcast |
| WebShopX Relay (optional) | Public access without exposing the server web port directly |
| WebShopX-Payments (optional) | Online payment-channel extension |

## High-Priority Checks

1. Replace or disable the default `admin-bootstrap` account after first login.
2. Never expose database, Relay, or payment credentials in public repositories or screenshots.
3. SQLite is standalone-only.
4. Use HTTPS and a reverse proxy for public deployments.
5. Offline playerdata writes are experimental and should stay disabled unless explicitly required and tested.
6. Back up both the database and `plugins/WebShopX/` before upgrades.

## Configuration Responsibility

In v3, `config.yml` mainly stores local deployment, security, database, and cluster parameters. Business rules such as market fees, currencies, and leaderboard settings should normally be managed in the web admin panel instead of duplicated in local YAML.
