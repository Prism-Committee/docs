---
id: official-channels
title: 官方支付通道
sidebar_label: 官方支付通道
sidebar_position: 5
---

# 官方支付通道配置

官方支付通道通过接入各支付平台的官方商户接口，直接完成订单的预创建、扫码以及状态同步。由于是官方直连通道，具备**并发高**、**状态响应即时**、**无需任何 Hook 软件常驻**等绝对优势，是生产环境的推荐选择。

---

## 支付方案说明

支付方案总览已拆分为独立页面，便于单独维护与引用：

- [支付方案说明](./payment-solution)

请在 `plugins/WebShopX-Payments/backend/config.json` 的对应对象中配置以下参数。

## 1. 微信支付官方 Native 通道

微信官方 Native 扫码支付使用最新的 API v3 协议对接，支持微信支付官方商户凭据。微信的官方支付接口，[点这里 ](https://pay.weixin.qq.com/static/product/product_intro.shtml?name=native)前往申请地址。

### 配置参数解析

```json
"wechat_native": {
  "enable": true,
  "host": "https://api.mch.weixin.qq.com",
  "currency": "CNY",
  "app_id": "wx8888888888888888",
  "merchant_id": "1900000109",
  "merchant_serial_number": "1D2C3B4A59000000000000000000000000000000",
  "notify_url": "https://yourdomain.com/api/wechat/notify",
  "private_key": "file:secrets/wechat/apiclient_key.pem",
  "public_key": "file:secrets/wechat/pub_key.pem",
  "public_key_id": "5A4B3C2D1E000000000000000000000000000000",
  "proxy": { "enable": false }
}
```

| 字段键名 | 示例值 | 说明 |
| --- | --- | --- |
| `enable` | `true` | 是否启用微信支付官方通道。 |
| `host` | `"https://api.mch.weixin.qq.com"` | 微信 API 地址，默认无须更改。 |
| `currency` | `"CNY"` | 订单结算币种，默认人民币。 |
| `app_id` | `"wx8888888888..."` | 微信开放平台绑定的应用或小程序 AppID。 |
| `merchant_id` | `"1900000109"` | 微信支付商户号 (MCHID)。 |
| `merchant_serial_number` | `"1D2C3B4A59..."` | 商户 API 证书的序列号。可登录商户后台查询。 |
| `notify_url` | `"https://yourdomain..."` | 微信支付成功后的异步回调通知接口（必须为公网可访问的 HTTPS 链路）。 |
| `private_key` | `"file:secrets/wechat/apiclient_key.pem"` | 商户私钥（以 `file:` 开头引用文件，下同）。 |
| `public_key` | `"file:secrets/wechat/pub_key.pem"` | 微信平台公钥（非商户证书，通过微信工具下载或生成，格式为 PEM）。 |
| `public_key_id` | `"5A4B3C2D1E..."` | 微信平台公钥对应的证书 ID。 |

---

## 2. 支付宝官方当面付（订单码）通道

支付宝官方通过电脑网页应用或无线应用提供的**当面付**接口生成扫码预付款。支付宝的官方支付接口，[点这里](https://open.alipay.com/api/detail?code=I1080300001000068149&index=0)前往申请地址。

### 配置参数解析

```json
"alipay_face2face": {
  "enable": true,
  "host": "https://openapi.alipay.com/gateway.do",
  "currency": "CNY",
  "app_id": "2021000000000000",
  "private_key": "file:secrets/alipay/private.txt",
  "alipay_public_key": "file:secrets/alipay/public.txt",
  "produce_code": "QR_CODE_OFFLINE",
  "use_basic_polling_mode": false,
  "seller_id": "2088000000000000",
  "proxy": { "enable": false }
}
```

| 字段键名 | 示例值 | 说明 |
| --- | --- | --- |
| `enable` | `true` | 是否启用支付宝官方通道。 |
| `host` | `"https://openapi.alipay.com/gateway.do"` | 支付宝网关。沙盒环境可设为 `https://openapi-sandbox.dl.alipaydev.com/gateway.do`。 |
| `app_id` | `"2021000000000000"` | 支付宝开放平台网页/移动应用的 AppID。 |
| `private_key` | `"file:secrets/alipay/private.txt"` | 应用私钥文件（以 `file:` 开头引用文件，下同）。 |
| `alipay_public_key` | `"file:secrets/alipay/public.txt"` | 支付宝公钥（非应用公钥，从支付宝开放平台后台复制的以 PEM 格式保存的公钥文本）。 |
| `produce_code` | `"QR_CODE_OFFLINE"` | 产品码，默认无须改动。 |
| `use_basic_polling_mode` | `false` | 若开启 `true`，则不依赖外部回调，完全由插件后台轮询支付宝状态（适合服务器没有外网域名/HTTPS的场景）。 |
| `seller_id` | `"2088000000000000"` | 收款商户 PID（以 2088 开头，可不填，自动解析）。 |

---

## 3. PayPal REST API 支付通道

国际服务器的标配。WebShopX-Payments 通过最新的 REST Orders v2 API 创建订单并生成支付跳转凭证。

### 配置参数解析

```json
"paypal": {
  "enable": true,
  "host": "https://api-m.paypal.com",
  "client_id": "Af-your_client_id_here...",
  "client_secret": "Em-your_client_secret_here...",
  "currency": "USD",
  "proxy": {
    "enable": true,
    "type": "HTTP",
    "host": "127.0.0.1",
    "port": 7890
  }
}
```

| 字段键名 | 示例值 | 说明 |
| --- | --- | --- |
| `enable` | `true` | 是否开启 PayPal 支付通道。 |
| `host` | `"https://api-m.paypal.com"` | PayPal 网关。测试沙盒请设为 `https://api-m.sandbox.paypal.com`。 |
| `client_id` | `"Af-..."` | PayPal Developer 申请的 Client ID。 |
| `client_secret` | `"Em-..."` | PayPal Developer 申请的 Client Secret。 |
| `currency` | `"USD"` | 结算货币代号，例如 `USD`, `EUR`, `CAD` 等。 |

:::warning[网络连通性警告]
对于位于中国大陆的服务端，由于骨干网对 PayPal 接口的解析与连接并不稳定，**强烈建议**在 `paypal.proxy` 中配置并启用科学的网络代理。
:::

---

## 4. MercadoPago 支付通道

拉美地区最常用的收单接口，支持智利、巴西、墨西哥等国家的本地支付。WebShopX-Payments 通过对接其 Checkout Pro 接口实现付款。

### 配置参数解析

```json
"mercadopago": {
  "enable": true,
  "host": "https://api.mercadopago.com",
  "access_token": "APP_USR-8888888888888888-000000-000000000000000000000000000",
  "currency": "BRL",
  "sandbox": false,
  "notification_url": "https://yourdomain.com/api/mercadopago/ipn",
  "back_url": "https://yourdomain.com/payment/success",
  "proxy": { "enable": false }
}
```

| 字段键名 | 示例值 | 说明 |
| --- | --- | --- |
| `enable` | `true` | 是否启用 MercadoPago 通道。 |
| `access_token` | `"APP_USR-..."` | 官方申请的生产/沙盒 Access Token。支持 `file:` 开头从本地文件加载。 |
| `currency` | `"BRL"` | 拉美币种代码，例如巴西雷亚尔 `BRL`、阿根廷比索 `ARS` 等。 |
| `sandbox` | `false` | 是否开启沙盒测试模式。 |
| `notification_url` | `"https://yourdomain..."` | 异步 Webhook (IPN) 回调通知地址。 |
| `back_url` | `"https://yourdomain..."` | 玩家扫码完成或中断后，网页重定向跳转的地址。 |

---

## 5. Stripe 支付通道 (信用卡/Apple Pay)

Stripe 是主流的国际信用卡收单平台，支持全球绝大部分主流币种的信用卡快捷收付。

### 配置参数解析

```json
"stripe": {
  "enable": false,
  "secret_key": "sk_live_...",
  "currency": "USD",
  "proxy": { "enable": false }
}
```

| 字段键名 | 示例值 | 说明 |
| --- | --- | --- |
| `enable` | `false` | 是否启用 Stripe 通道。 |
| `secret_key` | `"sk_live_..."` | Stripe 开发者 Secret Key。支持 `file:` 前缀加载。 |
| `currency` | `"USD"` | 支付结算币种。 |
