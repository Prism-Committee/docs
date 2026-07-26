---
id: integration-playbook
title: Integration Playbook
sidebar_label: Integration Playbook
sidebar_position: 8
---

# Integration Playbook

## Minimal Player Integration

1. `POST /api/auth/login`
2. `GET /api/meta/currency`
3. `GET /api/products`
4. `POST /api/orders`
5. `GET /api/orders/list`
6. `GET /api/notifications/unread-count`

## Market Integration

1. Query listings.
2. Implement direct purchase / BUY-order fulfillment.
3. Refresh listing state and notifications after writes.
4. Add bidding only after the basic market flow is stable.
5. Add seller configuration, restock, and advanced settings last.

## Admin Integration

1. Authenticate as an administrator.
2. Read the current administrator role/permissions.
3. Add modules according to permissions.
4. Add auditing and high-risk system settings last.

## Reliability Checklist

- reuse stable idempotency keys for retries;
- globally handle `auth_invalid`;
- branch on `error`, not localized messages;
- parse time fields defensively;
- confirm current business state before retrying a timed-out write;
- configure the API root instead of hardcoding a host;
- never log full tokens or secrets.

After every WebShopX upgrade, regression-test login, orders, delivery/refund, market trading, admin authentication, and your deployment mode.
