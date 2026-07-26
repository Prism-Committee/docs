---
id: authentication
title: 认证与会话
sidebar_label: 认证与会话
sidebar_position: 2
---

# 认证与会话

本页介绍 WebShopX HTTP API 的基础登录与会话模型。接口字段可能随版本调整，集成时请以目标服务器版本为准。

## 玩家登录

```text
POST /api/auth/login
```

典型请求：

```json
{
  "identifier": "player_name_or_uuid",
  "password": "your_password"
}
```

成功后会返回会话 token 以及当前用户信息。玩家密码通常通过游戏内命令设置：

```text
/ws password <newPassword>
```

## 当前用户与退出

常见会话接口：

```text
GET /api/auth/me
POST /api/auth/logout
```

需要鉴权的请求通常携带：

```http
Authorization: Bearer <sessionToken>
```

## 管理员登录

管理员使用独立登录入口：

```text
POST /api/admin/auth/login
```

管理员会话除基本用户信息外，还会关联后台角色和权限。

## 会话失效

客户端应处理以下情况：

- token 已过期；
- 玩家重置密码；
- 管理员强制结束会话；
- 服务端升级或安全操作导致现有会话失效。

常见错误码：

- `auth_required`：缺少有效登录态；
- `auth_invalid`：token 无效或已过期；
- `invalid_credentials`：账号或密码不正确；
- `invalid_password`：密码不符合当前规则。

收到 `auth_invalid` 后，前端应清理本地登录态并引导用户重新登录。

## 安全建议

1. 生产站点使用 HTTPS；
2. 不在 URL 查询参数中传播 session token；
3. 不把管理员 token 写入日志或公开截图；
4. 前端退出登录时同时清理本地会话状态；
5. 第三方集成不要复用管理员账号作为长期机器凭据，除非对应版本明确提供这种集成方式。
