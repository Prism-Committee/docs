---
id: overview
title: Overview
sidebar_label: Overview
sidebar_position: 1
---

# WebShopX-Payments Administrator Documentation

## Feedback & Issues

- Issues Repository: https://github.com/Prism-Committee/WebShopX-Issues

This directory is aimed at plugin installers, system administrators, and server operators, detailing the deployment and configuration of the `WebShopX-Payments` integration plugin.

:::info[Reading Guide]
1. [Installation & Deployment](./install-deploy)
2. [Configuration Details](./configuration)
3. [Payment Solutions](./payment-solution)
4. [Official Payment Channels](./official-channels)
5. [Hook Payment Channels](./hook-channels)
6. [Commands & Permissions](./commands-permissions)
7. [FAQ & Troubleshooting](./faq)
:::

## WebShopX-Payments Responsibilities at a Glance

`WebShopX-Payments` (also referred to as `WSXPay`) is the dedicated payment Provider (underlying service provider) plugin for `WebShopX`.

:::important[Core Responsibility Definition]
- **WebShopX**: Manages core business logic, including player account balances, top-up orders, storefront displays, purchasing flows, redemption codes, and deliveries (executing player delivery/top-up commands).
- **WebShopX-Payments**: Focuses purely on the payment pipeline, including requesting the embedded payment backend to create payments, polling/receiving callback payment statuses, matching Hook transaction notifications, and reporting successful payment statuses back to `WebShopX`.
:::

## Core System Topology

| Component | Description |
| --- | --- |
| **Bukkit Plugin Side (WSXPay)** | Runs as the `webshopx-payments` provider for WebShopX, managing command inputs and reporting payment statuses. |
| **Embedded Backend (with-backend)** | A lightweight service integrated directly into the plugin (running on default port `62233`) that interacts directly with upstream services like Alipay, WeChat Pay, PayPal, MercadoPago, etc. |
| **External Hook Helper (Optional)** | A standalone executable program (v3/v4) running locally or on a specific Windows server, used to capture personal/individual receipt notifications and forward them to the embedded backend when official enterprise APIs are unavailable. |

## Key Risks to Address First

:::warning[Critical Configuration & Pitfall Warnings]
1. **Do not expose the embedded backend port**: The default port `62233` is used strictly for WebSocket/HTTP communications between the Bukkit plugin and the backend. The Hook receiver endpoint (`/api/hook/receive`) has no security signature validation. **Do not expose this backend port directly to the public internet!**
2. **Amount race conditions in Hook Mode**: All Hook modes (Alipay/WeChat Hook) rely solely on the **"exact payment amount"** to match orders. **Two players cannot create Hook orders with the exact same amount at the same time** (e.g., two concurrent WeChat scan orders for 1.00 USD). Subsequent players must wait for the preceding order to complete or time out. Official enterprise merchant APIs (WeChat Native, Alipay order codes, etc.) have no such restriction.
3. **Secret credentials safety**: Never upload configuration files or `secrets` credential folders containing production keys, merchant private keys, or Client Secrets to any public code repositories.
:::

## Suggested Deployment Schedule

1. Ensure that the core `WebShopX` plugin is deployed, initialized, and its administration panel is fully accessible.
2. Install `WebShopX-Payments` and choose your preferred payment channel (we recommend starting with small-amount tests using PayPal Sandbox or standard WeChat/Alipay merchant QR codes).
3. Have a player perform a test payment, and verify that the player instantaneously receives the WebShopX credit and item delivery command execution in-game upon scanning the code.
4. Launch officially in your production environment.

---

## Disclaimer & Terms of Use

:::danger[Legal Notice]
This project is for **educational, research, and technical exchange purposes only**. Do not use it for any illegal activities. Any consequences arising from violation of local laws, regulations, or misuse of this project shall be **solely borne by the user**.
:::

1. **No Warranty Disclaimer**  
   The authors and contributors of this project make no warranties, express or implied, regarding the validity, reliability, or safety of this project. They assume no legal liability for any direct or indirect losses, damages, liabilities, claims, or lawsuits resulting from the use or misuse of this project.
   
2. **Copyright & Compliance**  
   Users of the source code and binary distributions of this project must strictly comply with local laws and regulations, respect the copyrights and privacy rights of Tencent, Alibaba Group, and other third parties, and refrain from any activities that infringe on others' legitimate rights or violate public decency.
   
3. **Acceptance of Terms**  
   Using or retaining any portion of this project (including source code or compiled binaries) constitutes your reading and full acceptance of all terms in this disclaimer. **If you object to any terms, please stop using it immediately and delete all related files completely.**

:::info[💡 Supplemental note on "No Commissions"]
The "No Commissions/Fees" mentioned in the project description means that **this project never charges any middleman transaction processing fees or platform cuts**.

*   **Example**: If you use Alipay's official "Face-to-Face Payment/Order Code" interface, Alipay will charge its standard 0.6% merchant processing fee. As an open-source tool, this project does not add any extra commission or hidden fees on top of it.
:::
