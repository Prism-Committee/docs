---
id: webshopx-overview
title: WebShopX Overview
sidebar_label: Overview
sidebar_position: 0
---

# WebShopX

WebShopX 是面向 Paper、Purpur、Spigot 与 Folia 服务端的 Web 商城系统，整合官方商城、玩家市场、钱包、订单与发货、充值以及管理后台。

## 你现在想做什么？

| 目标 | 从这里开始 |
| --- | --- |
| 第一次使用 WebShopX | [玩家快速开始](./player/quick-start) |
| 第一次安装服务器插件 | [安装与部署](./admin/install-deploy) |
| 从 v2 升级 | [v2 → v3 迁移](./admin/v2-to-v3-migration) |
| 买卖、充值、领取物品 | [使用指南](./guides/overview) |
| 管理服务器经济和市场 | [配置](./admin/configuration) → [市场治理](./admin/governance) |
| 处理发货、退款、库存或故障 | [运维与故障处理](./admin/operations) |
| 接入 HTTP API | [Developer Quickstart](./developer/quickstart) |
| 查命令、错误码、协议 | [Reference](./reference/overview) |

## 文档怎么组织

- **Get started**：只解决第一次成功使用、部署和迁移；
- **Guides**：按实际任务组织玩家和日常使用流程；
- **Administration**：面向服主、运维和后台管理员；
- **Development**：面向 HTTP API 和插件开发者；
- **Reference**：需要精确参数时直接查表，不承担教程职责。

这套结构刻意不与仓库里的 `player/`、`admin/`、`developer/` 文件夹一一对应。文件夹服务于维护，侧栏服务于读者。

## 当前文档基线

本文档以 WebShopX v3 开发线为主要基线。不同发行版本可能存在功能、字段或界面差异；涉及部署、配置和 API 时，请确认实际安装的 WebShopX 版本。

## WebShopX 与 WebShopX-Payments

WebShopX 核心负责商城、资产、订单和业务状态。WebShopX-Payments 是独立的可选支付扩展，用于连接具体支付渠道。

- 只使用游戏内经济或不需要在线支付：不必安装 WebShopX-Payments；
- 需要充值渠道：阅读 [WebShopX-Payments 文档](../webshopx-payments/overview)；
- 开发自己的支付 Provider：阅读 [Payment Provider API](./webshopx-payment-api)。

## 事实源原则

1. 当前 WebShopX 代码和随版本发布的配置模板；
2. Reference 中的对应页面；
3. Guides / Administration 教程；
4. README、旧截图和第三方教程。

配置字段以当前 `config.yml` 为准，命令与权限以当前插件实现和 `plugin.yml` 为准，API 以目标版本源码与实际响应为准。
