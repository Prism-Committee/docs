---
id: official-channels
title: Official Payment Channels
sidebar_label: Official Payment Channels
sidebar_position: 5
---

# Official Payment Channels Configuration

Official payment channels integrate directly with the official merchant APIs of each payment gateway, completing order pre-creation, QR code generation, and state synchronization. Because they are direct official channels, they possess absolute advantages such as **high concurrency capabilities**, **instantaneous status responses**, and **zero requirements for desktop Hook listener software**, making them the highly recommended choice for production environments.

---

## Payment Solutions Overview

The summary of payment options has been split into a dedicated page for independent maintenance and referencing:

- [Payment Solutions](./payment-solution)

Please configure the following parameters inside the corresponding objects in your `plugins/WebShopX-Payments/backend/config.json` file.

---

## 1. WeChat Pay Official Native Channel

The official WeChat Native scanning payment uses the latest API v3 protocol, supporting official WeChat Pay merchant credentials. To apply for WeChat Pay's official payment interface, [click here](https://pay.weixin.qq.com/static/product/product_intro.shtml?name=native) to go to the application page.

### Configuration Parameter Reference

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

| Parameter Key | Example Value | Description |
| --- | --- | --- |
| `enable` | `true` | Whether to enable the official WeChat Pay channel. |
| `host` | `"https://api.mch.weixin.qq.com"` | WeChat API gateway address, usually does not need to be changed. |
| `currency` | `"CNY"` | Settlement currency for orders (defaults to Chinese Yuan, CNY). |
| `app_id` | `"wx8888888888..."` | AppID of the application or Mini Program linked in the WeChat Open Platform. |
| `merchant_id` | `"1900000109"` | WeChat Pay Merchant ID (MCHID). |
| `merchant_serial_number` | `"1D2C3B4A59..."` | The serial number of the merchant's API certificate. Find this by logging into your merchant console. |
| `notify_url` | `"https://yourdomain..."` | The async callback URL for WeChat Pay success notifications (must be a publicly accessible HTTPS link). |
| `private_key` | `"file:secrets/wechat/apiclient_key.pem"` | Merchant private key file path (referenced starting with `file:`). |
| `public_key` | `"file:secrets/wechat/pub_key.pem"` | WeChat Platform Public Key file path (not the merchant certificate; downloaded/generated via WeChat tools in PEM format). |
| `public_key_id` | `"5A4B3C2D1E..."` | Certificate ID corresponding to the WeChat Platform Public Key. |

---

## 2. Alipay Official Face-to-Face (Order Code) Channel

Alipay's official **当面付** (Face-to-Face) payment generates scanning pre-payments via Web applications or wireless applications. To apply for Alipay's official payment interface, [click here](https://open.alipay.com/api/detail?code=I1080300001000068149&index=0) to go to the application page.

### Configuration Parameter Reference

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

| Parameter Key | Example Value | Description |
| --- | --- | --- |
| `enable` | `true` | Whether to enable the official Alipay channel. |
| `host` | `"https://openapi.alipay.com/gateway.do"` | Alipay gateway address. For sandbox testing, set this to `https://openapi-sandbox.dl.alipaydev.com/gateway.do`. |
| `app_id` | `"2021000000000000"` | AppID of the Web/Mobile application on the Alipay Open Platform. |
| `private_key` | `"file:secrets/alipay/private.txt"` | App private key file path (referenced starting with `file:`). |
| `alipay_public_key` | `"file:secrets/alipay/public.txt"` | Alipay Public Key file path (not the application public key; PEM text copied from the Alipay Open Platform console). |
| `produce_code` | `"QR_CODE_OFFLINE"` | Product code, usually does not need to be changed. |
| `use_basic_polling_mode` | `false` | If set to `true`, the plugin will bypass external callbacks and poll Alipay status entirely in the background (ideal when the server lacks a public domain/HTTPS setup). |
| `seller_id` | `"2088000000000000"` | Receiving merchant's Partner ID (PID, starting with 2088. Can be left blank to auto-resolve). |

---

## 3. PayPal REST API Channel

A standard for international servers. WebShopX-Payments creates orders and generates checkout redirect links using the modern REST Orders v2 API.

### Configuration Parameter Reference

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

| Parameter Key | Example Value | Description |
| --- | --- | --- |
| `enable` | `true` | Whether to enable the PayPal payment channel. |
| `host` | `"https://api-m.paypal.com"` | PayPal gateway address. For sandbox environments, set this to `https://api-m.sandbox.paypal.com`. |
| `client_id` | `"Af-..."` | Client ID applied on PayPal Developer dashboard. |
| `client_secret` | `"Em-..."` | Client Secret applied on PayPal Developer dashboard. |
| `currency` | `"USD"` | Settlement currency code, e.g., `USD`, `EUR`, `CAD`, etc. |

:::warning[Network Connectivity Warnings]
For servers located in Mainland China, due to unstable DNS resolution and routing to PayPal's endpoints, **we strongly recommend** enabling and configuring a proxy under `paypal.proxy`.
:::

---

## 4. MercadoPago Channel

The most popular checkout interface in Latin America, supporting local payments in countries like Chile, Brazil, Mexico, etc. WebShopX-Payments connects via their Checkout Pro interface.

### Configuration Parameter Reference

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

| Parameter Key | Example Value | Description |
| --- | --- | --- |
| `enable` | `true` | Whether to enable the MercadoPago payment channel. |
| `access_token` | `"APP_USR-..."` | Official Production/Sandbox Access Token. Supports loading from a local file starting with `file:`. |
| `currency` | `"BRL"` | Latin American currency code, e.g., Brazilian Real `BRL`, Argentine Peso `ARS`, etc. |
| `sandbox` | `false` | Whether to enable sandbox testing mode. |
| `notification_url` | `"https://yourdomain..."` | The async Webhook (IPN) callback notification URL. |
| `back_url` | `"https://yourdomain..."` | The URL the player is redirected to after completing or canceling a payment. |

---

## 5. Stripe Channel (Credit Card / Apple Pay)

Stripe is a major international payment processing platform, supporting credit/debit card payments in the vast majority of global currencies.

### Configuration Parameter Reference

```json
"stripe": {
  "enable": false,
  "secret_key": "sk_live_...",
  "currency": "USD",
  "proxy": { "enable": false }
}
```

| Parameter Key | Example Value | Description |
| --- | --- | --- |
| `enable` | `false` | Whether to enable the Stripe payment channel. |
| `secret_key` | `"sk_live_..."` | Stripe developer Secret Key. Supports loading from a local file via the `file:` prefix. |
| `currency` | `"USD"` | Settlement currency for payments. |
