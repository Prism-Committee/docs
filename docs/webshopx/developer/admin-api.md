---
id: admin-api
title: 后台 API
sidebar_label: 后台 API
sidebar_position: 5
---

# 后台 API

## 认证与权限模型

后台接口通常同时要求：

1. 有效管理员会话；
2. 对应的 `AdminPermission`。

Super Admin 还拥有管理员账号与权限组管理等专属能力。

## 管理认证

| Method | Path | Auth |
| --- | --- | --- |
| POST | `/api/admin/auth/login` | none |
| GET | `/api/admin/auth/me` | admin |
| POST | `/api/admin/auth/logout` | admin |

## 核心业务分组

### 兑换码

- `POST /api/admin/redeem/create`
- `GET /api/admin/redeem/list`

### 商品与订单

- `GET /api/admin/products/list`
- `POST /api/admin/products/upsert`
- `POST /api/admin/products/icon`
- `POST /api/admin/products/active`
- `POST /api/admin/products/reset-limit`
- `POST /api/admin/group-buy/consume`
- `GET /api/admin/orders/list`

### 经济与系统设置

常见接口包括：

- `GET /api/admin/economy/settings`
- `POST /api/admin/economy/exchange`
- `POST /api/admin/economy/market`
- `POST /api/admin/economy/leaderboard`
- `POST /api/admin/economy/currency`
- `GET/POST /api/admin/market/tags-config`
- `GET/POST /api/admin/market/limitation-config`
- `POST /api/admin/system/webshop`
- `POST /api/admin/system/market`
- `POST /api/admin/system/maintenance`
- `POST /api/admin/system/logging`
- `POST /api/admin/system/broadcast`
- `POST /api/admin/system/notification`

### 视觉与材质覆盖

- `GET/POST /api/admin/visual/settings`
- `GET /api/admin/material-overrides/list`
- `POST /api/admin/material-overrides/upsert`
- `POST /api/admin/material-overrides/delete`
- `POST /api/admin/material-overrides/icon`

### 市场监管与用户支持

- `GET /api/admin/market/listings`
- `POST /api/admin/market/unlist`
- `GET /api/admin/users/lookup`
- `GET /api/admin/users/list`
- `POST /api/admin/users/reset-password`
- `POST /api/admin/users/unbind`
- `POST /api/admin/users/logout`
- `POST /api/admin/users/wallet-adjust`
- `GET/POST /api/admin/users/visual-permission`
- `GET /api/admin/audit/list`

### 系统公告

- `POST /api/admin/notifications/announce`

## Super Admin 专属接口

- `GET /api/admin/admin-users/meta`
- `GET /api/admin/admin-users/list`
- `POST /api/admin/admin-users/upsert`
- `POST /api/admin/admin-users/active`

## 写接口约定

后台写操作通常会经过参数校验和权限检查，重要操作还会记录审计信息。客户端应处理 `bad_request`、`forbidden`、`auth_invalid` 等错误，并在修改运行时设置后考虑集群同步所需时间。

:::warning
不要把后台 API 暴露给不受信任的浏览器应用或第三方站点。管理员 token 应视为高敏感凭据。
:::
