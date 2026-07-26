---
id: install-deploy
title: 安装与部署
sidebar_label: 安装与部署
sidebar_position: 2
---

# 安装与部署

本页用于完成 WebShopX 的首次安装，并选择合适的 Web 部署模式。

## 1. 环境要求

| Minecraft 运行时 | Java | Folia 构建 |
| --- | ---: | --- |
| `1.18.2+` | 17 | 不提供 |
| `1.20.6+` | 21 | 提供 |
| `26.1+` | 25 | 提供 |
| `26.2+` | 25 | 提供 |

- 推荐 Paper / Purpur；Spigot 也受支持；
- Folia 必须使用对应 Folia 构建；
- 默认数据库为 SQLite；
- 生产或高并发场景推荐 MySQL / MariaDB；
- Vault、WebShopX-Payments 与 YuPay 都是可选软依赖。

## 2. 获取插件

请选择与你的 Minecraft 版本和服务端类型匹配的 JAR：

- [Modrinth](https://modrinth.com/plugin/webshopx)
- [MineBBS](https://www.minebbs.com/resources/webshopx-minecraft.15688/updates)

## 3. 最快部署：SQLite + internal

适合单服体验和首次安装。

1. 将 JAR 放入 `plugins/`；
2. 启动服务器一次，生成配置；
3. 保持默认 `database.type=sqlite`；
4. 确认 `cluster.role=standalone`；
5. 再次启动服务器；
6. 玩家执行 `/ws password <新密码>`；
7. 执行 `/ws home` 获取网页地址。

默认 internal 模式监听：

```text
http://<服务器地址>:8819/
```

:::warning
首次管理员引导账号默认为 `admin / admin123456`。首次成功登录后台后，请立即创建正式管理员并关闭或修改 `webshop.admin-bootstrap`。
:::

## 4. 使用 MySQL / MariaDB

创建独立数据库和最小权限账户后，在 `config.yml` 中填写：

```yaml
database:
  type: mariadb
  host: 127.0.0.1
  port: 3306
  schema: webshop
  username: webshop
  password: change_me
```

生产环境不要使用示例密码，也不要把真实凭据提交到公开仓库。

## 5. 选择部署模式

### `internal`

插件同时提供 API 与静态网页，最适合快速部署。

```yaml
webshop:
  server-mode: internal
  public-url: "https://shop.example.com"
  embedded-http:
    host: 0.0.0.0
    port: 8819
```

公网部署时建议通过 Nginx / CDN 提供 HTTPS，而不是直接暴露未加密的管理入口。

### `external`

插件只提供 API，前端静态文件交给 Nginx / CDN 等外部服务。

重点配置：

- `webshop.public-url`
- `webshop.embedded-http.public-api-url`
- `webshop.embedded-http.cors`

`public-api-url` 应填写完整 API 根地址，并包含 `/api`。

### `relay`

Relay 模式下，Minecraft 服务器不需要直接向公网开放 Web 端口。插件主动连接 WebShopX Relay，由 Relay 为对应项目提供公网商城入口。

当前官方服务面板：**[https://47.122.127.164/](https://47.122.127.164/)**。

首次使用时，建议先在官方面板注册/登录并准备好可用项目，然后在游戏内执行：

```text
/ws mode setup relay
/ws mode switch relay
/ws home
```

`/ws mode setup relay` 会打开安全授权页面；授权完成后 WebShopX 会保存所需 Relay 凭据。若面板出现待绑定服务器，请在面板中将它关联到正确项目，再验证 `/ws home`。

完整的账号、项目、绑定、安全与排障说明见 [Relay 公网访问](./relay-access.md)。

## 6. 管理后台入口

v3 中应从 WebShopX 站点登录后进入管理后台。`/admin.html` 仅用于兼容旧链接，不应再作为部署文档中的主要后台入口。

## 7. 生产环境安全

上线前至少完成：

- 修改或关闭默认管理员引导账号；
- 使用独立数据库账户和强密码；
- 通过 HTTPS 对外提供站点；
- 仅开放必要端口；
- 不公开 Relay access key、数据库密码和支付密钥；
- 定期备份数据库与 `plugins/WebShopX/` 数据目录；
- 关注业务账本与服务日志。

## 8. 升级

1. 备份数据库与 `plugins/WebShopX/`；
2. 停服；
3. 替换 JAR；
4. 启动服务器，让新版完成必要迁移；
5. 验证登录、下单、市场、领取、后台和支付链路；
6. 如从 v2 升级，继续阅读 [v2 → v3 迁移](./v2-to-v3-migration)。

## 9. 相关文档

- [配置](./configuration)
- [Relay 公网访问](./relay-access)
- [命令与权限体系](./commands-permissions)
- [v2 → v3 迁移](./v2-to-v3-migration)
- [运维排障](./faq)
