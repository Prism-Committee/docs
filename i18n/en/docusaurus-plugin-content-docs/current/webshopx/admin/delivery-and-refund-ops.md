---
id: delivery-refund-ops
title: Delivery, Claim, and Refund Operations
sidebar_label: Delivery, Claim, and Refund Operations
sidebar_position: 6
---

# Delivery, Claim, and Refund Operations

## 1. Delivery Status Overview

Common statuses:

- `PENDING`: pending processing
- `WAIT_CLAIM`: player must claim manually
- `DELIVERED`: completed
- `REFUNDED`: refunded
- `CANCELLED`: canceled due to refund or other reasons

## 2. Fallback After Auto-Delivery Failure

When auto-delivery repeatedly fails, status can fall back to `WAIT_CLAIM`, and the player receives a claim prompt.

## 3. Claim Commands and Tokens

- Official order token prefix: `CLM-`
- Market token prefix: `MCL-`
- Official order ID prefix: `ODR-`
- Market trade ID prefix: `MKT-`

`/ws claim` supports `all`, `ODR-*`, `MKT-*`, `CLM-*`, and `MCL-*`.

## 4. Shared Claim Switch

When `allowSharedClaimCommand=false`, only the owner can claim; delegated claim returns `claim_forbidden`.

## 5. Mailbox Fallback

If items cannot be placed into inventory directly, they can be stored in the mailbox:

```text
/ws mailbox
/ws mailbox collect
```

## 6. Refund Strategy

Refund eligibility depends on order state and the configured refund policy. Before manual intervention, confirm whether delivery already happened and whether a refund deadline or cooldown applies.

## 7. Recommended Monitoring

1. `WAIT_CLAIM` count trend.
2. Mailbox backlog size.
3. Refund volume and reason distribution.
4. Repeated delivery failures by player, item, or node.
