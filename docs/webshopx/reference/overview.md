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
  title="需要精确值时，从这里查"
  description="Reference 用来查准确名称、参数、状态、默认值和协议行为；它不是从头学习 WebShopX 的教程。"
  primary={{label: 'HTTP API Reference', to: './http-api-reference'}}
  secondary={{label: '返回使用指南', to: '../guides/overview'}}
/>

## 核心参考入口

<FeatureCards items={[
  {icon: '⚙️', title: '配置与运行时参数', description: '查询当前运行配置、默认值和部署参数。', to: '../admin/configuration'},
  {icon: '⌨️', title: '命令与权限体系', description: '查询游戏命令和 Bukkit 权限。', to: '../admin/commands-permissions'},
  {icon: '🌐', title: 'HTTP API Reference', description: '公共协议、鉴权、错误码、枚举与上传约定。', to: './http-api-reference'},
  {icon: '👤', title: 'Player API', description: '玩家、钱包、商品、订单和通知 endpoints。', to: '../developer/player-api'},
  {icon: '📈', title: 'Market API', description: '市场、挂单、购买、拍卖和相关 endpoints。', to: '../developer/market-api'},
  {icon: '🛡️', title: 'Admin API', description: '后台管理、治理、支持与审计 endpoints。', to: '../developer/admin-api'},
  {icon: '💳', title: 'Payment Provider API', description: 'WebShopXPaymentApi Java / Bukkit 集成参考。', to: '../webshopx-payment-api'},
  {icon: '⬆️', title: 'v2 → v3 迁移', description: '查询版本差异和兼容边界。', to: '../admin/v2-to-v3-migration'},
  {icon: '📖', title: '名词解释', description: '查询玩家与业务术语。', to: '../player/glossary'},
]} />

## 事实源优先级

文档与实际实例不一致时，按下面顺序判断：

1. 你正在运行的 WebShopX 版本代码和随版本发布的配置模板；
2. 本 Reference 指向的精确文档；
3. Guides / Administration / Development 中的任务型教程；
4. README、旧截图或第三方教程。
