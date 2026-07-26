---
id: api-basics
title: HTTP API 基础
sidebar_label: HTTP API 基础
sidebar_position: 1
---

# HTTP API 基础

本页作为 WebShopX HTTP API 的公开入口。具体接口字段和行为应以你正在使用的 WebShopX 版本为准。

## 服务模式

WebShopX 的 API 监听由 `webshop.embedded-http.host` 和 `webshop.embedded-http.port` 控制，默认端口为 `8819`。

- `server-mode=internal`：插件提供 API 和内置静态网页；
- `server-mode=external`：插件提供 API，前端由外部托管；
- `server-mode=relay`：通过 WebShopX Relay 提供公网访问。

外置前端通常还需要正确设置：

- `webshop.embedded-http.public-api-url`
- `webshop.embedded-http.cors`

## 请求与响应

API 主要使用 UTF-8 JSON 请求与响应。错误响应通常包含可用于前端处理的错误码和消息，例如：

```json
{
  "error": "error_code",
  "message": "error message"
}
```

客户端不应只依赖自然语言 `message` 判断业务状态，应优先处理稳定的错误码。

## 鉴权

需要登录态的接口使用 WebShopX 会话 token。常见方式为：

```http
Authorization: Bearer <sessionToken>
```

详细流程见 [认证与会话](./authentication)。

## CORS

跨域前端需要管理员显式配置 CORS。不要假设所有 WebShopX 实例都允许任意 Origin。

同源 `internal` 部署通常不需要额外开启跨域；`external` 部署则应只允许实际使用的前端来源。

## API 地址

同源部署时，网页通常通过 `/api` 访问后端。外置部署时，实际 API 根地址由服务器管理员的 `public-api-url` 与反向代理配置决定。

## 健康检查

WebShopX 提供健康检查入口：

```text
GET /health
```

可用于反向代理或基础存活检测。

## 开发建议

1. 在集成前先确认目标服务器的 WebShopX 版本；
2. 为请求失败保留错误码和 HTTP 状态码；
3. 对创建订单、支付、市场交易等写操作设计幂等与重试策略；
4. 不要在客户端代码中保存管理员凭据、数据库密码或支付密钥；
5. 升级 WebShopX 后对关键 API 流程做一次回归测试。
