---
id: inventory-operations
title: Inventory Operations and Offline Safety
sidebar_label: Inventory Operations and Offline Safety
sidebar_position: 7
---

# Inventory Operations and Offline Safety

Online operations use the live server inventory as the source of truth. Offline support is split between read-only snapshots and experimental direct writes.

## Default: offline read-only snapshots

When players are online, WebShopX can retain an inventory view for later display. After logout, that view is informational only and should not be treated as authoritative inventory.

## Experimental offline writes

Direct offline inventory management may modify Minecraft `playerdata`. Only consider enabling it when all of the following are true:

- single-server deployment;
- no cross-server inventory synchronization or other software writing the same player data;
- complete backups exist;
- the exact server version has been tested in a staging environment;
- login/logout races with web writes can be controlled.

## Rollout and rollback checklist

1. Back up world and player data.
2. Test inventory, hotbar, armor, offhand, ender chest, and container items with a test account.
3. Log in again after web operations and verify counts and slots.
4. Test restart and rejected-operation paths.
5. Watch business logs for duplicate settlement or duplicate removal.
6. Disable the feature immediately if duplication, loss, or corruption is suspected.

:::danger
Do not allow multiple systems to write the same offline player data concurrently. Login/logout, other plugins, cross-server sync, and WebShopX offline writes can otherwise cause item loss, duplication, or data corruption.
:::
