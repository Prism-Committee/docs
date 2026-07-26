---
id: overview
title: 总览
sidebar_label: 总览
sidebar_position: 1
---

# WebShopX 服务器管理员指南

本目录面向插件安装者、服务器运维与 WebShopX 后台管理员。

## 推荐阅读路径

1. [安装与部署](./install-deploy)
2. [配置与运行时参数](./configuration)
3. [命令与权限体系](./commands-permissions)
4. [Relay 公网访问](./relay-access)
5. [市场治理与风控](./market-governance)
6. [背包与离线库存运维](./inventory-operations)
7. [发货、领取与退款运维](./delivery-and-refund-ops)
8. [v2 → v3 迁移](./v2-to-v3-migration)
9. [常见问题](./faq)

## 部署组件

| 组件 | 说明 |
| --- | --- |
| WebShopX 插件 | 核心业务、HTTP API，可选托管静态网页 |
| SQLite | 默认单服数据库，必须搭配 `cluster.role=standalone` |
| MySQL / MariaDB | 生产或多服部署推荐 |
| Vault（可选） | 将 `GAME_COIN` 对接游戏经济 |
| Redis（可选） | 多节点配置刷新、市场广播等集群能力 |
| WebShopX Relay（可选） | 不直接向公网暴露 Minecraft 服务器 Web 端口 |
| WebShopX-Payments（可选） | 在线支付渠道扩展 |

## 上线前优先检查

:::warning[高风险项]
1. 首次登录后立即更换/关闭 `admin-bootstrap` 默认管理员；
2. 数据库、Relay 和支付凭据不要进入公开仓库或工单截图；
3. SQLite 只用于 standalone，不用于多节点集群；
4. 公网部署优先使用 HTTPS 和反向代理，不直接暴露不必要端口；
5. 离线 playerdata 写入属于实验性高风险能力，默认保持关闭；
6. 升级前同时备份数据库与 `plugins/WebShopX/` 数据目录。
:::

## 配置职责

v3 中 `config.yml` 主要保存本机部署参数、安全开关和数据库/集群设置。市场税率、币种、排行榜等业务规则优先由 Web 管理后台维护，不要在多个位置重复配置。

## 问题反馈

发现文档和实际版本不一致时，请在 Prism-Committee 的 Issue 渠道反馈，并附上 WebShopX 版本、服务端版本和相关日志片段（注意脱敏）。
