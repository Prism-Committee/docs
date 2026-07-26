---
id: guides-overview
title: 使用指南
sidebar_label: 使用指南
sidebar_position: 1
---

import {DocHero, FeatureCards} from '@site/src/components/DocVisuals';

# 使用指南

<DocHero
  eyebrow="Guides"
  title="按你要完成的事情找文档"
  description="这里不按功能模块逐个解释 WebShopX，而是按实际任务组织玩家和日常使用流程。"
  primary={{label: '玩家快速开始', to: '../player/quick-start'}}
  secondary={{label: '精确查 Reference', to: '../reference/overview'}}
/>

<FeatureCards items={[
  {icon: '👋', title: '第一次进入 WebShopX', description: '设置网页登录密码并打开商城。', to: '../player/quick-start'},
  {icon: '🛒', title: '商城、市场与订单', description: '购买商品、查看订单或使用玩家市场。', to: '../player/shop-and-orders'},
  {icon: '💰', title: '钱包与兑换', description: '查看余额、兑换或充值。', to: '../player/wallet-and-exchange'},
  {icon: '📦', title: '背包、领取与信箱', description: '找回未立即收到的物品，并理解物品流转。', to: './inventory-and-delivery'},
  {icon: '📈', title: '拍卖、动态定价与交易规则', description: '使用拍卖、理解动态价格或处理上架限制。', to: './auctions-and-pricing'},
  {icon: '❓', title: '玩家常见问题', description: '遇到具体报错或异常行为时从这里排查。', to: '../player/faq'},
]} />

:::tip
如果你已经知道自己要查的是某个命令、配置字段、错误码或 API 行为，直接进入 [Reference](../reference/overview)。
:::
