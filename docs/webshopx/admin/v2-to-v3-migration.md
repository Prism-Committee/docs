---
id: v2-to-v3-migration
title: v2 升级到 v3
sidebar_label: v2 → v3 迁移
sidebar_position: 2
---

# v2 升级到 v3

v3 不只是替换 JAR：前端、部署模式、公开地址、信箱命令和业务配置位置都发生了变化。升级前请先备份数据库、`plugins/WebShopX/` 和旧 `config.yml`。

## 1. 主要变化

| v2 | v3 |
| --- | --- |
| 旧版内嵌页面 | 使用新的 Vue 前端与路由 |
| `webshop.api-base-url` | 改用 `webshop.public-url` 与 `webshop.embedded-http.public-api-url` |
| internal / external | 新增可选 `relay` 模式 |
| 主要围绕 MySQL/MariaDB | 单服可使用 SQLite；集群仍使用 MySQL/MariaDB |
| `/ws mailbox claim` | `/ws mailbox collect`；`/ws mailbox` 打开信箱 |
| 大量业务规则写在 YAML | 业务设置主要由 Web 后台和数据库维护 |

## 2. 推荐升级步骤

1. **备份并停服**：备份数据库、`plugins/WebShopX/`；涉及实验性离线库存功能时同时备份玩家数据。
2. **记录旧业务设置**：至少保留币种、兑换、税费、市场限制、管理员与公开地址等旧配置作为迁移参考。
3. **替换 v3 构建**：使用与当前 Minecraft / Java 环境匹配的 v3 JAR，并让新版本生成或迁移当前配置。
4. **重新核对部署参数**：重点检查数据库、`cluster.role`、HTTP 端口、`server-mode`、公开地址和 CORS。
5. **进入新后台核对业务数据**：确认商品、钱包、市场、订单、权限与业务规则符合预期。
6. **清理浏览器缓存并回归关键流程**：使用 `/ws home` 打开新页面，并用测试账号完成登录、购买、交易、领取和退款验证。

旧版中的 `exchange.*`、`currency.*`、市场税费、排行榜、广播模板等业务项，不要直接整段复制进新的 `config.yml`。当前配置字段以 [配置与运行时参数](./configuration) 为准。

## 3. 上线前检查

- 玩家可以正常设置密码并登录网页；
- 首页、商品、钱包、订单和市场数据正常；
- 上架、购买和拍卖能够完成；
- `/ws claim`、`/ws mailbox`、`/ws mailbox collect` 正常；
- 管理员角色和权限正确；
- 自动发货、`WAIT_CLAIM`、退款和信箱回退已经测试；
- 使用 `external` 时公开 API / CORS 正确；使用 `relay` 时授权、绑定和 `/ws home` 正常；
- 使用 WebShopX-Payments 时至少完成一次测试或沙盒支付流程。

:::warning[离线库存写入不是升级必选项]
v3 中的离线背包即时管理属于实验性高风险能力。不要把它作为 v2 → v3 迁移的一部分直接在生产服启用，应单独备份、测试和评估。
:::

## 相关文档

- [安装与部署](./install-deploy)
- [配置与运行时参数](./configuration)
- [运维与故障处理](./operations)
