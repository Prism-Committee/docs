---
id: overview
title: Reference
sidebar_label: Reference
sidebar_position: 1
---

import {DocHero, FeatureCards} from '@site/src/components/DocVisuals';

# WebShopX Reference

<DocHero
  eyebrow="Reference"
  title="Look here when you need exact values"
  description="Reference is for exact names, parameters, states, defaults, and protocol behavior rather than learning WebShopX from the beginning."
  primary={{label: 'HTTP API Reference', to: './http-api-reference'}}
  secondary={{label: 'Back to Guides', to: '../guides/overview'}}
/>

## Core reference entry points

<FeatureCards items={[
  {icon: '⚙️', title: 'Configuration', description: 'Runtime settings, defaults, and deployment parameters.', to: '../admin/configuration'},
  {icon: '⌨️', title: 'Commands and Permissions', description: 'Game commands and Bukkit permission nodes.', to: '../admin/commands-permissions'},
  {icon: '🌐', title: 'HTTP API Reference', description: 'Shared protocol, auth, errors, enums, and upload conventions.', to: './http-api-reference'},
  {icon: '👤', title: 'Player API', description: 'Player, wallet, product, order, and notification endpoints.', to: '../developer/player-api'},
  {icon: '📈', title: 'Market API', description: 'Market, listing, purchase, auction, and related endpoints.', to: '../developer/market-api'},
  {icon: '🛡️', title: 'Admin API', description: 'Administration, governance, support, and audit endpoints.', to: '../developer/admin-api'},
  {icon: '💳', title: 'Payment Provider API', description: 'WebShopXPaymentApi Java / Bukkit integration reference.', to: '../webshopx-payment-api'},
  {icon: '⬆️', title: 'v2 to v3 Migration', description: 'Version differences and compatibility boundaries.', to: '../admin/v2-to-v3-migration'},
  {icon: '📖', title: 'Glossary', description: 'Player-facing and business terminology.', to: '../player/glossary'},
]} />

## Source-of-truth order

When documentation conflicts with a specific release:

1. Code and configuration shipped with the WebShopX version you run.
2. Reference documentation.
3. Task-oriented Guides / Administration / Development pages.
4. README files, old screenshots, or third-party tutorials.
