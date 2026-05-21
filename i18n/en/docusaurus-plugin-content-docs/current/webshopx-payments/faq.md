---
id: faq
title: FAQ & Troubleshooting
sidebar_label: FAQ & Troubleshooting
sidebar_position: 8
---

# FAQ & Troubleshooting

This document summarizes common issues and their solutions encountered during the installation, configuration, and operation of the `WebShopX-Payments` plugin.

---

## 1. Core Connectivity Issues

### Q: WebShopX indicates that the payment Provider cannot be found, or payment options are not displaying?
:::danger[Troubleshooting Steps]
1. Please confirm that both the `WebShopX` core plugin and the `WebShopX-Payments` plugin are **simultaneously installed** in your server's `plugins/` directory.
2. Check the server startup logs. Under normal conditions, the following two log outputs must be visible:
   ```text
   [WebShopX-Payments] Registered WebShopXPaymentApi provider: webshopx-payments
   [WebShopX] Payment provider detected; recharge listener registered: webshopx-payments
   ```
3. If they are not present, please verify that you downloaded and are using the JAR file with the `with-backend` release flavor (the old standalone backend and WebSocket plugin variants have been deprecated).
:::

---

### Q: In-game or console error `PROVIDER_UNAVAILABLE` when initiating an order?
:::warning[Causes & Solutions]
This typically indicates that the Bukkit plugin side is unable to connect to the embedded payment backend process.
1. **Port Conflict**: The embedded backend uses port `62233` by default. Please verify that this port is not occupied by other Java processes or services on your server (you can run `/wsxpay status` in the console to check the connection state).
2. **JSON Format Errors in Config**: If there is a syntax error (such as a stray comma or a missing brace) in `plugins/WebShopX-Payments/backend/config.json`, the backend service will fail to parse the file and refuse to start. We recommend copying the configuration content into an online JSON validator to check it.
:::

---

### Q: PayPal or MercadoPago interfaces indicate network connection timeouts/failures?
:::tip[Proxy Configuration Guide]
If your Minecraft server is located in Mainland China, direct connections to PayPal or MercadoPago interfaces are prone to failure due to international gateway restrictions.
- **Solution**: We highly recommend enabling and configuring a SOCKS5 or HTTP proxy in the global or local `proxy` node within `backend/config.json`.
:::

---

## 2. Hook Mode Specific Troubleshooting

### Q: WeChat Hook prompts "Hook not running" and players cannot generate orders?
:::danger[Crucial Configuration Check]
For security reasons, the embedded backend validates whether the Hook helper software is running in your server's system process list via `hook.wechat.require_process` (defaults to `WSXPay.Hook.WeChat.exe`).
- **If your WeChat Hook helper and your Minecraft server are not running on the same machine** (e.g., Minecraft is deployed on a Linux panel host while WeChat Hook is running on your local Windows PC), make sure to change this setting in `backend/config.json` to an **empty string**:
  ```json
  "require_process": ""
  ```
  After modifying, hot-reload or restart to bypass the process existence check.
:::

---

### Q: In-game credits are not received long after paying via WeChat Hook v4 scan?
:::warning[Troubleshooting Guidelines]
1. **Chinese Characters and Spaces in Path**: The WeChat Hook software directory absolutely **cannot** be placed in folder paths containing spaces or Chinese characters (e.g., `D:\MC Server\WeChat Hook\` is not permitted and will easily lead to Win32 API listening failures. Please change it to an entirely alphanumeric, space-free path such as `D:\wsxpay-hook\`).
2. **WeChat Receipt Helper Account Status**: The WeChat account logged into the PC client **must follow and pin** the official "微信收款助手" (WeChat Receipt Helper) service account. If payment notifications are only routed to "微信支付" (WeChat Pay) or "服务通知" (Service Notifications), the Hook will fail to decrypt them.
3. **Database Write Latency**: The local WeChat database writes have an inherent delay of about 10-15 seconds. Please avoid setting order expiration times too short on the upstream storefront, and prioritize official payment channels to eliminate latency-related mismatches.
4. **Invalid WeChat Key**: If the WeChat PC client undergoes major version updates or is re-logged, the decryption key may change. Please use `wx_key.exe` again to extract the new key and enter it into `config.properties`.
:::

---

## 3. Compilation & Build Issues

### Q: Java Class Version errors occur during Gradle builds?
:::note[Recommended Build Environment]
The `WebShopX-Payments` source code utilizes modern Java features. **JDK 25 is recommended and required** for compilation.
In a Windows PowerShell terminal, you can temporarily specify the JDK path for compilation using:
```powershell
$env:JAVA_HOME='C:\Program Files\Java\jdk-25.0.3'
$env:JAVA_TOOL_OPTIONS='-Duser.country=US'
.\gradlew.bat :plugin:bukkit:with-backend:build
```
Successful builds will produce the package at: `out/WebShopX-Payments-<version>-full.jar`.
:::
