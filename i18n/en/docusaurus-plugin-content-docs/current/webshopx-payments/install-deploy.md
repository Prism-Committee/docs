---
id: install-deploy
title: Installation & Deployment
sidebar_label: Installation & Deployment
sidebar_position: 2
---

# Installation & Deployment

This section guides you through installing the `WebShopX-Payments` plugin on your Minecraft server, launching the embedded payment service, and setting up a seamless integration with the core storefront plugin `WebShopX`.

## 1. Environment Requirements

- **Java Version**: `Java 21` or higher is required for operation (we recommend `JDK 25` for compilation).
- **Minecraft Server**: `Paper 1.20.6+` (fully compatible with common server software like Spigot, Purpur, etc.).
- **Prerequisite Dependency**: You must install the [WebShopX Core Plugin](https://modrinth.com/plugin/webshopx) in the same directory.
- **Network Connectivity**: The server requires stable internet access to reach Alipay, WeChat Pay, PayPal, MercadoPago, and other payment gateways. If you are deploying on a server inside mainland China and using PayPal or MercadoPago, we strongly advise configuring a proxy in the backend settings.

## 2. Core Deployment Steps

### (1) Download and Place the Plugin
1. Obtain the `WebShopX-Payments-<version>-full.jar` build package (verify that you are using the complete JAR containing the `with-backend` release flavor, which includes the embedded payment backend service).
2. Place this JAR file into your server's `plugins/` directory.
3. Verify that the `WebShopX` core plugin is also placed in the `plugins/` directory.

### (2) Generate Initial Configurations on First Launch
1. Start the server once.
2. Upon loading, the plugin will detect that no configuration files exist and will automatically generate the following two critical configuration paths under your server root:
   - **`plugins/WebShopX-Payments/config.yml`**: Controls payment channel toggles and Bukkit-side API timeouts.
   - **`plugins/WebShopX-Payments/backend/config.json`**: Stores sensitive merchant credentials and certificate directories for payment gateways (WeChat, Alipay, PayPal, MercadoPago, etc.).

### (3) Edit and Customize Configurations
1. Open `plugins/WebShopX-Payments/config.yml` and enable the payment channels you want to use (e.g., set `enable` for `paypal` or `wechat` to `true`).
2. Open `plugins/WebShopX-Payments/backend/config.json` and fill in the corresponding merchant IDs, secret keys, or certificate paths.
   :::tip[Regarding Key/Certificate Paths]
   For WeChat Native or official Alipay interfaces, we highly recommend storing your certificates/private key files in `plugins/WebShopX-Payments/backend/secrets/` and referencing them via relative paths starting with `file:` in `config.json` (e.g., `file:secrets/wechat/apiclient_key.pem` or `file:secrets/alipay/private.txt`).
   :::

### (4) Restart and Verify
Once configurations are complete, restart your Minecraft server (or run `/wsxpay reload` in the console to hot-reload configurations).

---

## 3. Verifying Successful Deployment Logs

Upon a successful startup, you should see logs similar to the following in your console (or in `logs/latest.log`), indicating that the payment Provider is successfully registered and bound by the core WebShopX storefront:

```text
[WebShopX-Payments] Registered WebShopXPaymentApi provider: webshopx-payments
[WebShopX] Payment provider detected; recharge listener registered: webshopx-payments
```

If `PROVIDER_UNAVAILABLE` appears in the startup logs, please check if `plugins/WebShopX-Payments/backend/config.json` has any JSON syntax errors, or if the embedded backend's `port` (default `62233`) is already occupied by another process on your server.

---

## 4. Complete Payment Transaction Lifecycle

The full payment and billing sequence between `WebShopX` and `WebShopX-Payments` is detailed below:

```mermaid
sequenceDiagram
    autonumber
    actor Player
    participant Game as Minecraft Client
    participant Store as WebShopX Plugin
    participant Pay as WSXPay Plugin Side
    participant Backend as Embedded Backend (62233)
    participant Platform as Payment Platform API (WeChat/Alipay/PayPal)

    Player->>Game: Clicks top-up or initiates purchase
    Game->>Store: Triggers top-up order creation request
    Store->>Pay: Calls WebShopXPaymentApi#createPayment
    Pay->>Backend: Sends payment creation request
    Backend->>Platform: Calls official API to create prepaid order
    Platform-->>Backend: Returns payment link/QR code content
    Backend-->>Pay: Returns payment credential data
    Pay-->>Store: Returns payment credential (createPayment response)
    Store->>Player: Provides payment link/QR code on Web page or in chat
    Player->>Platform: Scans code and completes payment via mobile app (Alipay/WeChat/Bank)
    Platform-->>Backend: Sends async callback (Notification) or Backend polls payment state
    Backend->>Pay: Sends PacketBackendPaymentEvent (Paid event)
    Pay->>Store: Triggers PaymentNotify state notification
    Store->>Store: Validates amount, creates balance bill, and executes delivery commands
    Store->>Game: Sends successful top-up message in-game; player receives items/credits
```

:::note[Transaction Failure Tolerance]
If, during step **14**, the billing listener on `WebShopX` fails to execute (e.g., due to temporary database locks), the successfully paid transaction will be saved as a pending confirmation state in `wsxpay-orders.yml`. The plugin will continually retry the notification until delivery is fully successful, thereby preventing any lost orders.
:::
