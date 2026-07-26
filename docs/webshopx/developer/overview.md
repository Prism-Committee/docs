---
id: overview
title: 开发者总览
sidebar_label: 总览
sidebar_position: 1
---

# WebShopX 开发者文档

本目录面向需要调用 WebShopX HTTP API 或开发第三方支付 Provider 的开发者。

:::info[推荐阅读顺序]
1. [HTTP API 基础](./api-basics)
2. [认证与会话](./authentication)
3. [玩家侧 API](./player-api)
4. [市场 API](./market-api)
5. [后台 API](./admin-api)
6. [错误码、枚举与幂等](./errors-and-idempotency)
7. [上传与静态资源](./uploads-and-static-assets)
8. [接入实施清单](./integration-playbook)
9. [Payment Provider API](../webshopx-payment-api)
:::

## 接口边界

WebShopX HTTP API 面向网页前端、管理后台和受信任的集成客户端。第三方支付插件则通过独立的 Java Payment Provider API 与 WebShopX 协作。

## 接入原则

- 先确认目标服务器所运行的 WebShopX 版本；
- 优先依据稳定错误码处理业务分支，不依赖自然语言提示；
- 对下单、兑换、市场交易等写请求实现幂等和安全重试；
- 不在浏览器端或公开仓库中保存管理员凭据、数据库密码、Relay 密钥或支付密钥；
- 升级 WebShopX 后重新验证登录、订单、市场和后台关键流程。

:::warning[版本说明]
API 会随开发版本演进。本文档描述当前 v3 文档基线；字段、路径或能力存在疑问时，以对应版本 WebShopX 源码和实际响应为准。
:::
