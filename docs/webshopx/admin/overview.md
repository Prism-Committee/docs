---
id: overview
title: 服务器管理员入口
sidebar_label: 管理员入口
sidebar_position: 1
---

import {DocHero, FeatureCards} from '@site/src/components/DocVisuals';

# 服务器管理员入口

<DocHero
  eyebrow="Administration"
  title="从首次部署，到上线后的治理与运维"
  description="服主相关内容分为 Get started 与 Administration 两个阶段：先完成安装部署，再进入配置、治理、运维与排障。"
  primary={{label: '安装与部署', to: './install-deploy'}}
  secondary={{label: '运维与故障处理', to: './operations'}}
/>

## 第一次部署

<FeatureCards items={[
  {icon: '🚀', title: '安装与部署', description: '第一次安装 WebShopX，选择 internal、external 或 relay。', to: './install-deploy', badge: 'Get started'},
  {icon: '⬆️', title: 'v2 → v3 迁移', description: '从旧版本升级时确认兼容边界和迁移步骤。', to: './v2-to-v3-migration'},
]} />

## 上线后管理

<FeatureCards items={[
  {icon: '⚙️', title: '配置与运行时参数', description: '数据库、Web 模式、集群、Redis 和其他当前配置。', to: './configuration'},
  {icon: '🛡️', title: '市场治理与风控', description: '管理市场规则、限制和运营治理。', to: './governance'},
  {icon: '🛠️', title: '运维与故障处理', description: '发货、退款、库存、备份、集群和 Relay 排障。', to: './operations'},
  {icon: '❓', title: '管理员常见问题', description: '按现象快速定位常见管理问题。', to: './faq'},
]} />

## 精确查表

:::tip
命令、权限、HTTP 公共协议等精确信息统一进入 [Reference](../reference/overview)。
:::

Relay、库存运维、发货退款等更深入内容可从侧栏“高级专题”继续查看。
