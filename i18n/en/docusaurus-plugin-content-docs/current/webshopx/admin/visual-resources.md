---
id: visual-resources
title: Visual Resource Pack
sidebar_label: Visual Resource Pack
sidebar_position: 8
---

# Visual Resource Pack

The visual resource pack provides Minecraft item icons and localized display names for the WebShopX web interface. It affects presentation only; it does not change item IDs, Data Components, trade matching, or actual inventory data.

## What it is for

Use visual resources when you want the web shop and market to show recognizable item icons and localized names instead of raw identifiers.

## Operational notes

- Treat resource packs as presentation assets, not business data.
- Updating icons or names must not change item matching rules.
- Keep the resource version compatible with the Minecraft versions your server exposes.
- After replacing resources, refresh browser/CDN caches when the old assets are still displayed.

## Troubleshooting

If an item trades correctly but the web page shows the wrong icon or name, investigate the visual resource pack first. If the underlying item ID or transaction is wrong, investigate WebShopX item data and matching instead.
