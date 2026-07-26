---
id: webshopx-overview
slug: /webshopx/overview
title: WebShopX Overview
sidebar_label: Overview
sidebar_position: 0
---

import {DocHero, FeatureCards} from '@site/src/components/DocVisuals';

# WebShopX

<DocHero
  eyebrow="WebShopX v3"
  title="从第一次使用，到运营和二次开发"
  description="WebShopX 是面向 Paper、Purpur、Spigot 与 Folia 服务端的 Web 商城系统，整合官方商城、玩家市场、钱包、订单与发货、充值以及管理后台。"
  primary={{label: '第一次使用', to: './player/quick-start'}}
  secondary={{label: '安装到服务器', to: './admin/install-deploy'}}
/>

## 你现在想做什么？

<FeatureCards items={[
  {icon: '👋', title: '第一次使用 WebShopX', description: '设置网页登录密码并打开商城。', to: './player/quick-start', badge: 'Get started'},
  {icon: '🚀', title: '安装服务器插件', description: '完成首次部署并选择 internal、external 或 relay。', to: './admin/install-deploy'},
  {icon: '⬆️', title: '从 v2 升级', description: '按迁移边界升级到 v3。', to: './admin/v2-to-v3-migration'},
  {icon: '🛒', title: '买卖、充值、领取物品', description: '进入按任务组织的日常使用指南。', to: './guides/overview'},
  {icon: '🧰', title: '管理经济与市场', description: '配置服务器、治理市场并处理日常运营。', to: './admin/configuration'},
  {icon: '🛠️', title: '处理运维问题', description: '排查发货、退款、库存与运行异常。', to: './admin/operations'},
  {icon: '💻', title: '接入 HTTP API', description: '从第一个请求开始集成 WebShopX。', to: './developer/quickstart'},
  {icon: '📚', title: '精确查参数', description: '查询命令、错误码、协议和其他 Reference 内容。', to: './reference/overview'},
]} />

## 当前文档基线

:::info
本文档以 WebShopX v3 开发线为主要基线。不同发行版本可能存在功能、字段或界面差异；涉及部署、配置和 API 时，请确认实际安装的 WebShopX 版本。
:::

## WebShopX 与 WebShopX-Payments

WebShopX 核心负责商城、资产、订单和业务状态。WebShopX-Payments 是独立的可选支付扩展，用于连接具体支付渠道。

- 只使用游戏内经济或不需要在线支付：不必安装 WebShopX-Payments；
- 需要充值渠道：阅读 [WebShopX-Payments 文档](../webshopx-payments/overview)；
- 开发自己的支付 Provider：阅读 [Payment Provider API](./webshopx-payment-api)。