---
id: overview
title: 总览
sidebar_label: 总览
sidebar_position: 1
---

# WebShopX-Payments 服主文档

本文档以 v3.1.1 和当前 v3 配置能力为基线。旧版独立后端、WebSocket 插件变体和旧配置截图不再作为当前部署依据；安装时使用发布页提供的 `with-backend` 完整包。

This plugin is based on [SweetCheckout](https://github.com/MrXiaoM/SweetCheckout), licensed under AGPL-3.0.

## 问题反馈

- Issues 仓库：https://github.com/Prism-Committee/WebShopX-Payments

本目录面向插件安装者、运维与后台管理员，详细介绍 `WebShopX-Payments` 支付集成插件的部署与配置。

:::info[阅读地图]
1. [安装与部署](./install-deploy)
2. [配置文件详解](./configuration)
3. [官方支付通道配置](./official-channels)
4. [Hook 支付通道配置](./hook-channels)
5. [命令与权限体系](./commands-permissions)
6. [常见问题与排障](./faq)
:::

## 一眼看懂 WebShopX-Payments 职责

`WebShopX-Payments`（又称 `WSXPay`）是 `WebShopX` 的专属支付 Provider（底层服务提供者）插件。

:::important[核心职责界定]
- **WebShopX**：负责核心业务，包括玩家账户余额、充值订单管理、商品展示与购买逻辑、兑换码以及发货（玩家领取/充值命令执行）。
- **WebShopX-Payments**：专注于支付链路本身，包括请求内嵌支付后端创建支付、轮询/接收回调支付状态、匹配 Hook 收款通知，最终将成功的支付状态上报回 `WebShopX`。
:::

## 核心系统拓扑

| 组件 | 说明 |
| --- | --- |
| **Bukkit 插件端 (WSXPay)** | 作为 WebShopX 的 `webshopx-payments` provider 运行，管理指令及支付状态上报。 |
| **内嵌后端 (with-backend)** | 集成于插件内的轻量级服务（默认端口 `62233`），直接与支付宝、微信、PayPal、MercadoPago 等上游服务对接。 |
| **外部 Hook 辅助端（可选）** | 特定 Windows/微信版本下使用的独立辅助程序；兼容性和合规风险高于官方渠道。 |

## 你最需要先关心的风险点

:::warning[高危配置与防坑提醒]
1. **不要暴露内嵌后端端口**：默认的 `62233` 端口仅用于 Bukkit 插件与后端之间的 WebSocket/HTTP 通信。Hook 终结点路径（`/api/hook/receive`）并无安全校验，**请勿将后端端口直接暴露到公网**！
2. **Hook 模式的金额竞争冲突**：所有 Hook 模式（支付宝/微信 Hook）均依赖 **“付款金额”** 进行订单匹配。**同一时间段内，不能有两名玩家同时创建相同金额的 Hook 订单**（例如不能同时创建两个 1.00 元的微信扫码订单）。后面发起的玩家必须等待前面的订单支付完成或超时取消。官方商户接口使用平台订单号匹配，不受这项同金额限制。
3. **私钥凭证安全**：请勿将包含生产密钥、商户私钥、Client Secret 的配置文件或 `secrets` 密钥文件夹上传至公开代码库。
:::

## 运维节奏建议

1. 先确保 `WebShopX` 本身部署就绪，能够正常访问管理后台。
2. 安装 `WebShopX-Payments` 并选择合适的支付通道（先建议配置 PayPal 沙盒或微信/支付宝经营收款码进行小额测试）。
3. 玩家进行测试支付，确认支付状态、WebShopX 入账和发货结果均正确；Hook 与异步回调渠道可能存在处理延迟。
4. 在生产环境正式上线。

---

## 免责声明与使用条款

:::danger[法律告知]
本项目仅供**学习研究与技术交流**之用，请勿用于任何非法用途。因违反法律法规或滥用本项目造成的任何后果，由使用者**自行承担**。
:::

1. **无担保声明**  
   本项目作者与贡献者不对本项目的有效性、可靠性、安全性作任何明示或暗示的保证。亦不对因使用或滥用本项目所造成的任何直接、间接损失、责任、索赔或诉讼承担任何法律责任。
   
2. **版权与合规**  
   本项目的源代码及二进制文件的使用者，应严格遵守当地法律法规，尊重腾讯（Tencent）公司、阿里巴巴（Alibaba）集团及其他第三方的版权与隐私权益，不得从事任何侵害他人合法权益或违背公序良俗的行为。
   
3. **接受条款**  
   使用或保留本项目的任何部分（包括源码或编译文件），即视为您已阅读并完全同意本声明的所有条款。**如有异议，请立即停止使用并彻底删除所有相关文件。**

:::info[💡 关于“无额外平台抽成”的说明]
项目所称“无额外平台抽成”，仅表示 WebShopX-Payments 本身不在交易中收取佣金。支付机构、收单机构、换汇或网络服务仍可能按商户协议收费，具体费率以对应平台和商户合同为准。
:::
