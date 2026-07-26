---
id: v2-to-v3-migration
title: v2 升级到 v3
sidebar_label: v2 → v3 迁移
sidebar_position: 2
---

# v2 升级到 v3

v3 不只是替换 JAR：内嵌网页已迁移到 Vue 前端，运行模式、公开地址、信箱命令和后台配置入口均有变化。升级前应同时备份数据库、插件目录和旧 `config.yml`。

## 1. 主要变化

| v2 习惯 | v3 做法 |
| --- | --- |
| 旧版内嵌页面 | 使用新的 Vue 单页应用和路由 |
| `webshop.api-base-url` | 使用 `webshop.public-url` 与 `webshop.embedded-http.public-api-url` |
| internal / external | 新增可选的 `relay` 部署模式 |
| 只支持 MySQL/MariaDB 的部署说明 | 单服默认可使用 SQLite；集群仍使用 MySQL/MariaDB |
| `/ws mailbox claim` | `/ws mailbox collect`；`/ws mailbox` 打开信箱 GUI |
| 大量业务规则保存在 YAML | 业务设置以 Web 后台和数据库为主 |
| 旧网页文件长期复用 | 升级时允许插件重新提取当前前端资源 |

## 2. 推荐升级步骤

1. 停服并备份数据库、`plugins/WebShopX/`、世界和玩家数据。
2. 记录旧版币种、兑换、税费、限制规则、管理员和公开地址设置。
3. 替换为与服务端版本匹配的 v3 构建。
4. 保留旧配置备份，让 v3 生成或迁移最小启动配置。
5. 核对 `database.type`、`cluster.role`、HTTP 端口和部署模式。
6. 登录新后台，逐项核对商品、钱包、市场、订单、权限和业务设置。
7. 清理浏览器缓存，并验证 `/ws home` 打开的新页面。
8. 用测试账号完成登录、购买、上架、成交、退款、领取和信箱收取。

## 3. 配置迁移

v3 的 `config.yml` 主要保存启动和本机安全参数。旧版中的 `exchange.*`、`currency.*`、市场税费、排行榜、广播模板和示例商品等业务项，不应继续复制到新文件中作为双份配置。

公开地址相关字段：

```yaml
webshop:
  server-mode: internal
  public-url: ""
  embedded-http:
    public-api-url: ""
    cors:
      enabled: false
      allowed-origins:
        - "https://shop.example.com"
```

仅同源部署时可让公开 API 地址留空。外置网页跨域请求 API 时，应填写精确来源，生产环境不建议长期使用 `*`。

## 4. 页面与命令迁移

- `/ws home`：打开服主配置的主页。
- `/ws mailbox`：打开信箱 GUI。
- `/ws mailbox collect`：快速收取信箱物品。
- `/ws market`：打开市场 GUI；旧式 `/ws market sell ...` 仅用于兼容。
- `/ws mode setup relay`：当前开发版本中的 Relay 设备授权入口。

`/admin.html` 和 `/index.html` 仍可作为兼容重定向，但新文档统一使用站点根路径及后台导航，不再要求玩家记住旧 HTML 文件名。

## 5. 数据库与集群

- SQLite 仅用于 `cluster.role=standalone`。
- master/node 集群使用 MySQL 或 MariaDB，并按实际功能配置 Redis。
- 不要把旧开发版本中的 SQLite 私有调优键直接复制进当前默认配置。
- v3 首次启动后检查迁移日志；出现错误时不要反复带写启动，应先恢复备份或在副本上排查。

## 6. v3 上线验收

- 玩家密码创建与网页登录正常。
- 首页、商店、背包、订单、市场、拍卖和信箱可打开。
- 管理员角色与细粒度权限符合预期。
- 自动发货、`WAIT_CLAIM`、信箱回退和退款均已测试。
- Payments Provider 能注册，并已完成最小金额或沙盒订单。
- external 模式的公开 API 与 CORS 正确；Relay 模式的授权和主页链接正确。

:::warning[不要直接在生产服试验离线写入]

v3 开发分支中的离线背包即时管理默认关闭。它不属于 v2→v3 升级的必开步骤，应单独备份和测试。

:::
