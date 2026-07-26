---
id: integration-playbook
title: 接入实施清单
sidebar_label: 接入实施清单
sidebar_position: 8
---

# 接入实施清单

## 最小玩家端接入

建议先打通：

1. `POST /api/auth/login`
2. `GET /api/meta/currency`
3. `GET /api/products`
4. `POST /api/orders`
5. `GET /api/orders/list`
6. `GET /api/notifications/unread-count`

完成后再增加钱包流水、退款、排行榜等非核心功能。

## 市场接入

1. `GET /api/market/listings`
2. `POST /api/market/buy` 或 `POST /api/market/sell-to-buy`
3. 刷新挂单状态和通知
4. 需要拍卖时接入 `POST /api/market/bid`
5. 最后接入创建、改价、补货和综合设置等卖家能力

所有涉及资产变化的写请求都应设计幂等重试。

## 后台接入

1. `POST /api/admin/auth/login`
2. 获取当前管理员身份和权限
3. 按权限逐步接入商品、订单、经济、市场和用户支持模块
4. 最后接入审计、管理员管理和高风险系统设置

不要只根据前端菜单隐藏按钮；服务端权限错误仍必须被正确处理。

## 客户端健壮性

- 为关键写请求生成稳定 `idempotencyKey`；
- 全局处理 `auth_invalid` 并引导重新登录；
- 使用 `error` 字段做业务分支；
- 对时间字段做兼容解析；
- 网络失败后先确认业务状态，再决定是否重试；
- 将 API 根地址作为部署配置，不硬编码服务器地址；
- 日志中避免输出完整 token 和敏感配置。

## 升级回归清单

WebShopX 升级后至少验证：

- `/health`
- 玩家登录 / 退出
- 商品列表和下单
- 订单查询与领取/退款路径
- 市场列表、购买、履约、竞拍
- 管理员登录与权限
- 关键后台写操作
- External/Relay 部署下的 API 地址和静态资源
- 集群环境下的运行时配置传播

## Payment Provider

开发第三方支付插件时，不应通过后台 HTTP API 模拟支付成功，而应使用 WebShopX 提供的 Payment Provider API。参见 [WebShopXPaymentApi 接入指南](../webshopx-payment-api)。
