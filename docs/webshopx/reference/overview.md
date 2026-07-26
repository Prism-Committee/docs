---
id: overview
title: Reference
sidebar_label: Reference
sidebar_position: 1
---

# WebShopX Reference

Reference 用来**查准确值**，不是从头学习 WebShopX。需要完成一个流程时，请回到 [Guides](../guides/overview) 或对应的 Administration / Development 页面。

## 核心参考入口

| 需要查询 | 页面 |
| --- | --- |
| 当前运行配置 | [配置与运行时参数](../admin/configuration) |
| 游戏命令与 Bukkit 权限 | [命令与权限体系](../admin/commands-permissions) |
| HTTP API 公共协议、鉴权、错误码、枚举与上传约定 | [HTTP API Reference](./http-api-reference) |
| Player API endpoints | [Player API](../developer/player-api) |
| Market API endpoints | [Market API](../developer/market-api) |
| Admin API endpoints | [Admin API](../developer/admin-api) |
| Payment Provider Java API | [WebShopXPaymentApi](../webshopx-payment-api) |
| v2 → v3 差异 | [v2 → v3 迁移](../admin/v2-to-v3-migration) |
| 玩家/业务术语 | [名词解释](../player/glossary) |

## 事实源优先级

文档与实际实例不一致时，按下面顺序判断：

1. 你正在运行的 WebShopX 版本代码和随版本发布的配置模板；
2. 本 Reference 指向的精确文档；
3. Guides / Administration / Development 中的任务型教程；
4. README、旧截图或第三方教程。

## Reference 页面应该长什么样

Reference 页面优先提供：

- 精确名称；
- 参数、字段、状态和默认值；
- 可搜索表格；
- 兼容性说明；
- 必要但简短的行为约束。

它们不应该重复大段“如何完成某个任务”的教程，从而避免同一事实维护两份。
