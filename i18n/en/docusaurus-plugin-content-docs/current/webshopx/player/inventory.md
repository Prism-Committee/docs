---
id: inventory
title: Web Inventory and Quick Trading
sidebar_label: Web Inventory
sidebar_position: 4
---

# Web Inventory and Quick Trading

The WebShopX inventory page can display your inventory/end chest and, when the server allows it, start market actions directly from an item slot.

## Feature Status

Inventory behavior depends on your online/offline state and the features enabled by the server administrator.

| State | Meaning | Trading |
| --- | --- | --- |
| Online | Live server inventory | Available when allowed |
| Offline read-only snapshot | Last saved view | Not writable |
| Offline persistent inventory access | Experimental server-side capability | May be writable, with explicit risk controls |
| No snapshot | No supported saved state exists | Not available |

## Common Actions

Depending on server rules, the page may allow you to:

- fulfill a compatible BUY order;
- create a fixed-price listing;
- start an auction;
- inspect item name, amount, enchantments, lore, and equipment slot information.

Before a write action is accepted, WebShopX validates the actual slot/item again. If the item moved or changed, refresh the page and retry from the new state.

:::warning
Offline playerdata writes are experimental and may be disabled entirely by the server owner. A read-only snapshot is not a writable inventory.
:::

## Troubleshooting

If the web page differs from the game, first check whether the page is showing a live inventory or an offline snapshot, then refresh. Disabled actions usually mean the inventory is read-only, the item is restricted, no compatible order exists, or the server has disabled that capability.
