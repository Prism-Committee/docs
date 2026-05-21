---
id: payment-solution
title: Payment Solutions
sidebar_label: Payment Solutions
sidebar_position: 4
---

# Payment Solutions

This page summarizes the payment solutions currently supported or implemented in `WebShopX-Payments`, helping you quickly evaluate their availability and integration priority.

| **Status** | **Platform** | **Solution** | **Description** |
| --- | --- | --- | --- |
| 🟢 | Alipay | [Order Code Payment](https://open.alipay.com/api/detail?code=I1080300001000068149&index=0) | **Official API**. The server calls official APIs to generate dynamic checkout QR codes, which users scan to pay. |
| 🔵 | WeChat Pay | [Native Payment](https://pay.weixin.qq.com/static/product/product_intro.shtml?name=native) | **Official API**. Standard QR scanning mode. The system generates a QR code, which triggers WeChat's official cashier interface upon scanning. |
| 🟢 | PayPal | [REST API v2](https://developer.paypal.com/docs/api/orders/v2/) | **Official API**. Leverages the third-party client wrapper library `payper` to invoke PayPal's official order API, dynamically creating redirect links or QR codes. |
| 🟡 | MercadoPago | [Pro Checkout](https://www.mercadopago.com.br/developers/) | **Official API**. Supported via MercadoPago's official merchant interfaces. |
| 🟢 | Stripe | [Checkout / Elements](https://docs.stripe.com/) | **Official API**. Integrated into standard Web payment flows, supporting multi-currency and international credit/debit cards. |
| 🔵 | Alipay | Unsigned Hook | **Third-party Solution**. Backed by fixed-amount receipt codes; Hook captures platform transaction notifications or billing info to achieve automated callbacks without merchant signing. |
| 🔵 | WeChat Pay | Unsigned Hook | **Third-party Solution**. Backed by fixed-amount receipt codes; Hook captures real-time receipt notifications on PC WeChat client, which the backend matches by amount to confirm payments. |

> **📌 Status Legend & Explanation:**
>
> - **🟢 Fully Verified**: The solution is working and verified. Developers have completed the full closed-loop transaction flow and confirmed its correctness.
> - **🔵 Indirectly Verified**: The solution is viable. Other users have successfully tested and reported positive feedback, though developers have not verified it personally.
> - **🟡 Pending Verification**: Code implementation is complete. However, due to developers lacking sandbox/production credentials for these specific interfaces, real-world tests have not been executed.
> - **🔴 Not Available**: The solution is currently unavailable or lacks an effective implementation methodology.
>
> If you have successfully tested and verified any 🔵 or 🟡 channels, feel free to submit an issue to share your feedback!
