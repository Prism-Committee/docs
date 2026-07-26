---
id: webshopx-overview
title: WebShopX 开始使用
sidebar_label: 开始使用
sidebar_position: 0
---

# WebShopX

WebShopX 是面向 Paper、Purpur、Spigot 与 Folia 服务端的 Web 商城系统，整合官方商城、玩家市场、钱包、订单与发货、充值以及管理后台。

## 选择你的阅读路径

| 你是谁 | 建议入口 |
| --- | --- |
| 普通玩家 | [玩家指南](./player/overview) |
| 服主 / 运维 / 管理员 | [服务器管理员](./admin/overview) |
| HTTP API / 插件开发者 | [开发者文档](./developer/overview) |
| 只想查参数、命令或错误码 | [Reference](./reference/overview) |

## 当前文档基线

本文档以 WebShopX v3 开发线为主要基线。不同发行版本可能存在功能、字段或界面差异；涉及部署、配置和 API 时，请同时确认你实际安装的 WebShopX 版本。

## WebShopX 与 WebShopX-Payments

WebShopX 核心负责商城、资产、订单和业务状态。WebShopX-Payments 是独立的可选支付扩展，用于连接具体支付渠道。

- 只使用游戏内经济或不需要在线支付：不必安装 WebShopX-Payments；
- 需要充值渠道：阅读 [WebShopX-Payments 文档](../webshopx-payments/overview)；
- 开发自己的支付 Provider：阅读 [Payment Provider API](./webshopx-payment-api)。

## 文档维护原则

- 配置字段以 WebShopX 当前 `config.yml` 为事实源；
- 命令与权限以当前插件实现和 `plugin.yml` 为事实源；
- API 以目标版本源码与实际响应为事实源；
- 教程只解释如何完成任务，不重复维护整套参数表。
