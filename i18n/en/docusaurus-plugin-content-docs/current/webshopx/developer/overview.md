---
id: overview
title: Developer Overview
sidebar_label: Overview
sidebar_position: 1
---

# WebShopX Developer Docs

This section is for developers integrating with the WebShopX HTTP API or implementing a third-party payment provider.

Recommended reading order:

1. [HTTP API Basics](./api-basics)
2. [Authentication and Sessions](./authentication)
3. [Player API](./player-api)
4. [Market API](./market-api)
5. [Admin API](./admin-api)
6. [Errors and Idempotency](./errors-and-idempotency)
7. [Uploads and Static Assets](./uploads-and-static-assets)
8. [Integration Playbook](./integration-playbook)
9. [Payment Provider API](../webshopx-payment-api)

## Integration Rules

- Verify the exact WebShopX version first.
- Branch on stable error codes rather than human-readable messages.
- Use idempotency for state-changing requests.
- Do not expose administrator credentials, Relay keys, database passwords, or payment secrets in browser code.
- Re-run critical login, order, market, and admin flows after upgrades.
