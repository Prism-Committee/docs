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

For a comparison of supported payment options, see:

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
  "merchant_id": "1900000001",
  "merchant_serial_number": "7777777777777777777777777777777777777777",
  "notify_url": "https://example.com/wechat/notify",
  "private_key": "file:secrets/wechat/apiclient_key.pem",
  "public_key": "file:secrets/wechat/wechatpay_public_key.pem"
}
```
