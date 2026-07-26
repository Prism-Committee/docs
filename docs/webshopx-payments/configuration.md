---
id: configuration
title: 配置文件详解
sidebar_label: 配置文件详解
sidebar_position: 3
---

# 配置文件详解

`WebShopX-Payments` 拥有两个独立的配置文件：
1. **`config.yml`**：由 Bukkit 插件加载，控制支付通道开关与 API 同步等待超时。
2. **`backend/config.json`**：由内嵌支付后端加载，保存具体的第三方/官方支付接口敏感凭证与代理设置。

当前版本还提供可本地化的 Web 配置界面，字段会按 `config-locales/<locale>.yml` 显示。网页保存的仍是同一组插件端和内嵌后端设置，不是第三份独立配置。

---

## 1. 插件端 `config.yml` 详解

v3 的 Bukkit 配置除渠道开关与 API 超时外，还可以包含 Provider、默认支付方式、支付超时、Hook 金额避让、Action Bar 和可选地图二维码设置。实际生成项以安装版本为准：

```yaml
# ==========================================
# WebShopX-Payments 核心配置文件
# ==========================================

# 支付接口行为控制
payment:
  default-method: alipay
  # 插件等待内嵌后端响应创建支付的最长同步时间（秒）
  api-timeout-seconds: 15
  
  # 各支付通道的游戏内前端开关（控制主商城是否显示这些支付选项）
  enable:
    wechat: true         # 微信支付
    alipay: true         # 支付宝
    paypal: true         # PayPal (国际)
    mercadopago: false   # MercadoPago (拉美)
    stripe: false        # Stripe (信用卡，可选)
```

其他常见字段：

- `provider-id`：向 WebShopX 注册的 Provider ID，通常保持 `webshopx-payments`。
- `payment.timeout`：玩家完成支付的有效时间。
- `payment.allow-increasing`：仅 Hook 模式使用；金额冲突时是否允许自动避让。
- `payment.action-bar`：游戏内支付进度提示。
- `map-item`：可选的 Minecraft 地图二维码展示。它在 v3 当前代码中仍受支持，不应再按旧文档写成“已移除”。

不要从其他构建复制整份配置覆盖当前生成文件；升级时逐项合并。

---

## 2. 后端 `backend/config.json` 基础架构

`config.json` 存放在 `plugins/WebShopX-Payments/backend/` 目录下。此处首先介绍全局通用参数与代理结构。

### (1) 全局基础参数

```json
{
  "debug": false,
  "log_level": "INFO",
  "port": 62233,
  "proxy": {
    "enable": false,
    "type": "HTTP",
    "host": "127.0.0.1",
    "port": 7890,
    "username": "",
    "password": ""
  }
}
```

| 参数键名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `debug` | Boolean | `false` | 是否开启调试模式（开启后会输出详细的底层通信日志）。 |
| `log_level` | String | `"INFO"` | 控制后端的日志输出级别。可选值包括：`INFO`, `DEBUG`, `WARN`, `ERROR` 等。 |
| `port` | Integer | `62233` | 内嵌后端的本地端口。必须和 Bukkit 插件端通信端口保持一致。如果端口冲突请在修改后重启服务端。 |
| `proxy` | Object | (见下文) | **全局代理设置**。当服务器难以直连某些海外或外部支付网关时使用。 |

---

### (2) 通用代理结构 `ProxySettings`

在网络连通性受限的服务器环境中，您可以配置代理服务以保证能顺畅连接到境外接口（例如 PayPal 接口或部分被网络限制的通道）。

`proxy` 对象支持的字段如下：

```json
"proxy": {
  "enable": true,            // 是否启用此代理
  "type": "HTTP",            // 代理类型：支持 "HTTP" 或 "SOCKS"
  "host": "127.0.0.1",       // 代理服务器的 IP 地址或域名
  "port": 7890,              // 代理端口
  "username": "my_user",     // 代理认证用户名（无认证则留空 ""）
  "password": "my_password"  // 代理认证密码（无认证则留空 ""）
}
```

:::tip[局部代理覆盖机制]
除了上述根节点的**全局代理**外，在各个具体的支付通道（例如 `wechat_native.proxy`、`paypal.proxy` 等）内，也均拥有完全相同的 `proxy` 对象配置。
- 如果局部代理未设置，则默认**继承**根节点的全局代理设置。
- 如果局部代理显式配置，则会**覆盖**全局代理，只对当前支付通道生效。
:::

:::warning[代理与密钥安全]

代理用户名、代理密码、支付私钥、访问令牌和 Webhook 密钥都属于敏感信息。只在受保护的后台中填写，不要提交到 Git、截图到公开工单或直接粘贴到聊天记录。

:::

## 3. Web 后台配置

支付设置页可以管理：

- 默认支付方式与 API 超时；
- 支付宝、微信、PayPal、Mercado Pago、Stripe 的启用状态；
- 内嵌后端端口、日志级别和调试日志；
- 全局代理及各渠道代理；
- 各渠道的商户号、应用 ID、币种、回调地址和密钥引用。

保存后先使用沙盒或最小金额订单验证。修改端口、代理或后端凭证后，若页面提示需要重启，应完整重启服务端，不要只执行热重载。
