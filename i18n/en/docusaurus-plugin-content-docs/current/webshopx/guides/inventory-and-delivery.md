---
id: inventory-and-delivery
title: Inventory, Claims, and Mailbox
sidebar_label: Inventory, Claims, and Mailbox
sidebar_position: 4
---

# Inventory, Claims, and Mailbox

This page answers one common question: **where did my item go after a transaction?**

## Delivery flow

```mermaid
flowchart LR
    A[Transaction / Order] --> B{Delivery mode}
    B -->|Immediate| C[Try inventory delivery]
    B -->|Manual claim| D[WAIT_CLAIM]
    D --> E[/ws claim]
    C --> F{Inventory accepts item?}
    E --> F
    F -->|Yes| G[Player inventory]
    F -->|No| H[Mailbox]
    H --> I[/ws mailbox collect]
```

If an item does not appear immediately, the order is not necessarily broken. Check `WAIT_CLAIM`, then check the mailbox.

## Commands

```text
/ws claim [all|ODR-|MKT-|CLM-|MCL-]
/ws mailbox
/ws mailbox collect
```

Recommended order: run `/ws claim all`, make sure there is inventory space, open the mailbox, then use `/ws mailbox collect`.

## Web inventory states

| State | What you see | Can it be changed/traded? |
| --- | --- | --- |
| Online live inventory | Current server inventory | Yes |
| Offline read-only view | Last available inventory view | No |
| Experimental offline management | Server permits offline inventory operations | Depends on server/version |

:::warning
Offline write support is experimental and is not guaranteed to exist or be enabled on every stable server.
:::

For offline inventory write risks, delivery recovery, and refunds, see [Operations and Troubleshooting](../admin/operations).
