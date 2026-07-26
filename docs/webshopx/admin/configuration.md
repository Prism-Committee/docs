---
id: configuration
title: 配置
sidebar_label: 配置
sidebar_position: 3
---

# 配置

当前 WebShopX `config.yml` 只保留实际运行所需配置。市场税率、币种、排行榜等业务规则在 v3 中主要由 Web 管理后台和数据库维护，不应继续复制旧版大配置。

## 配置职责

当前 `config.yml` 主要负责：

- Web/API 运行模式；
- 首次管理员引导；
- 内置 HTTP 与 CORS；
- 业务账本日志；
- Relay；
- 数据库；
- 集群与 Redis。

:::warning
不要把旧版本、开发草案或其他页面中的字段直接复制进生产配置。字段是否有效应以当前版本生成的 `plugins/WebShopX/config.yml` 为准。
:::

## 当前默认结构

```yaml
webshop:
  server-mode: internal
  public-url: ""

  admin-bootstrap:
    enabled: true
    username: admin
    password: admin123456
    role: SUPER_ADMIN

  embedded-http:
    host: 0.0.0.0
    port: 8819
    static-root: web
    public-api-url: ""
    cors:
      enabled: false
      allowed-origins:
        - "*"

  business-ledger:
    enabled: true
    directory: logs/business-ledger
    retention-days: 30

relay:
  url: ""
  access-key: ""

database:
  type: sqlite
  host: 127.0.0.1
  port: 3306
  schema: webshop
  username: webshop
  password: change_me
  use-ssl: false
  allow-public-key-retrieval: true
  server-rsa-public-key-file: ""
  sqlite-file: plugins/WebShopX/webshopx.db
  pool-size: 10

cluster:
  role: standalone
  server-id: standalone
  presence-ttl-seconds: 120

redis:
  enabled: false
  host: 127.0.0.1
  port: 6379
  password: ""
  broadcast-channel: webshopx:market:broadcast
  cluster-channel: webshopx:cluster:event
  channel: webshopx:market:broadcast
```

## `webshop`

### `server-mode`

可选值：

- `internal`：插件同时提供 API 和内置静态网页；
- `external`：插件提供 API，前端由 Nginx / CDN 等外部服务托管；
- `relay`：插件主动连接 WebShopX Relay，不需要直接向公网开放 Web 端口。

### `public-url`

用户实际访问的 WebShopX 前端地址。留空时可由请求环境推断；生产环境建议显式配置正确的公网 HTTPS 地址。

### `admin-bootstrap`

用于首次初始化管理员。

默认账号是 `admin / admin123456`。首次成功登录后应创建正式管理员，并关闭引导账号或更换其凭据。

### `embedded-http`

- `host`：监听地址；
- `port`：默认 `8819`；
- `static-root`：内置静态资源目录；
- `public-api-url`：外部前端访问 API 时使用的完整 API 根地址，应包含 `/api`；
- `cors`：仅在需要跨域访问时开启，并尽量限制允许来源。

### `business-ledger`

控制本地业务账本日志是否启用、日志目录以及保留天数。

## `relay`

仅在 `webshop.server-mode=relay` 时需要关注。

- `url` 留空时使用项目默认 Relay 地址；
- `access-key` 是敏感信息，不要提交到公开仓库或工单截图。

推荐优先通过游戏内 Relay 设置流程完成授权，而不是手工传播访问密钥。

## `database`

### SQLite

默认：

```yaml
database:
  type: sqlite
  sqlite-file: plugins/WebShopX/webshopx.db
  pool-size: 10

cluster:
  role: standalone
```

SQLite 适合单服和轻量部署。使用 SQLite 时，集群角色必须保持 `standalone`。

### MySQL / MariaDB

生产或更高并发场景建议使用 MySQL / MariaDB，并修改数据库地址、库名、用户名和密码。

:::danger
当选择 MySQL / MariaDB 时，不要保留示例数据库凭据。数据库密码属于敏感信息，不应提交到 Git 仓库。
:::

## `cluster` 与 `redis`

- `standalone`：单服；
- `master` / `node`：多节点部署；
- `server-id`：多节点环境必须保证唯一；
- Redis 用于跨节点事件和市场广播。

多服部署前应统一 WebShopX 版本、数据库和 Redis 配置，并完成备份与回滚预案。

## v2 → v3 配置变化

v2 及更早版本的 `config.yml` 可能包含大量业务字段，例如：

- `exchange.*`
- `currency.*`
- `economy.market.*`
- `webshop.leaderboard.*`
- `webshop.market.*`
- `webshop.broadcast.*`
- `sample-products`

v3 中这些业务设置不再以旧版大配置作为唯一入口。升级时请优先使用新版生成的最小配置启动，再在 Web 后台恢复业务设置。

详见 [v2 → v3 迁移](./v2-to-v3-migration)。

## 上线前检查

1. 修改或关闭默认管理员引导账号；
2. 确认数据库真实凭据没有进入公开仓库；
3. 单服不要误设为 `master` / `node`；
4. 外置前端时确认 `public-api-url` 与 CORS；
5. Relay 密钥不要出现在截图和公开日志中；
6. 定期备份数据库和 `plugins/WebShopX/` 数据目录。
