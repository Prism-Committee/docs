---
id: overview
title: 总览
sidebar_label: 总览
sidebar_position: 1
---

# WebShopX 服主文档

## 问题反馈

- Issues 仓库：https://github.com/Prism-Committee/WebShopX-Issues

本目录面向插件安装者、运维与后台管理员。

:::info[阅读地图]
1. [安装与部署](./install-deploy)
2. [v2 → v3 迁移](./v2-to-v3-migration)
3. [配置与运行时参数](./configuration)
4. [命令与权限体系](./commands-permissions)
5. [市场治理与风控](./governance)
6. [发货、领取与退款运维](./delivery-refund-ops)
7. [运维排障手册](./faq)
:::

## WebShopX 拓扑

| 组件 | 说明 |
| --- | --- |
| 插件进程 | 内置 API 服务，可选托管静态页 |
| SQLite 或 MySQL/MariaDB | 单服可用 SQLite；生产和集群推荐 MySQL/MariaDB |
| Vault（可选） | `GAME_COIN` 经济挂接 |
| Redis（可选） | 集群配置刷新与市场广播 |
| Relay（可选） | 不直接开放 Web 端口时的公网访问入口 |

## 你最需要先关心的风险点

:::warning[高危配置提醒]
1. 使用 MySQL/MariaDB 时不要保留默认数据库占位值；默认 SQLite 不受该检查影响。
2. 生产环境建议首启后立刻替换 `admin-bootstrap` 初始密码。
3. SQLite 只能用于 standalone；集群不要启用实验性的离线背包写入。
4. Relay 访问密钥、数据库密码和支付凭证都不能出现在公开仓库或工单截图中。
:::



