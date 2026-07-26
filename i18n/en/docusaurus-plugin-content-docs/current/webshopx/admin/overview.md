---
id: overview
title: Server Administrator Entry
sidebar_label: Administrator Entry
sidebar_position: 1
---

import {DocHero, FeatureCards} from '@site/src/components/DocVisuals';

# Server Administrator Entry

<DocHero
  eyebrow="Administration"
  title="From first deployment to governance and operations"
  description="Server-owner work is split into two stages: complete installation and deployment first, then move into configuration, governance, operations, and troubleshooting."
  primary={{label: 'Install and Deploy', to: './install-deploy'}}
  secondary={{label: 'Operations and Troubleshooting', to: './operations'}}
/>

## First deployment

<FeatureCards items={[
  {icon: '🚀', title: 'Install and Deploy', description: 'Install WebShopX for the first time and choose internal, external, or relay.', to: './install-deploy', badge: 'Get started'},
  {icon: '⬆️', title: 'v2 to v3 Migration', description: 'Review migration steps and compatibility boundaries for older installations.', to: './v2-to-v3-migration'},
]} />

## After launch

<FeatureCards items={[
  {icon: '⚙️', title: 'Configuration', description: 'Database, web modes, cluster, Redis, and other current settings.', to: './configuration'},
  {icon: '🛡️', title: 'Market Governance', description: 'Operate market rules, restrictions, and governance.', to: './governance'},
  {icon: '🛠️', title: 'Operations and Troubleshooting', description: 'Delivery, refunds, inventory, backup, cluster, and Relay troubleshooting.', to: './operations'},
  {icon: '❓', title: 'Administrator FAQ', description: 'Find common administration issues by symptom.', to: './faq'},
]} />

:::tip
For exact commands, permissions, and HTTP protocol behavior, use [Reference](../reference/overview).
:::

Relay, inventory operations, and delivery/refund details are available under the **Advanced topics** sidebar group.
