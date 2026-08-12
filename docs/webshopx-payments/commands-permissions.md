---
id: commands-permissions
title: 命令与权限体系
sidebar_label: 命令与权限体系
sidebar_position: 7
---

# 命令与权限体系

`WebShopX-Payments` 提供游戏内指令与权限节点，主要用于配置热重载与运行时状态排障。

v3 的渠道配置也可以由 WebShopX 后台通过 Provider 能力展示，但这不会改变 `/wsxpay` 的权限节点，也不代表 WebShopX 会替第三方插件完成重载。

---

## 1. 游戏内主命令

- 主指令：`/webshopx-payments`
- 别名（快捷指令）：`/wsxpay`

### 指令列表

| 指令 | 所需权限 | 说明 |
| --- | --- | --- |
| `/wsxpay help` | `webshopxpayments.command` | 查看插件指令帮助列表。 |
| `/wsxpay reload` | `webshopxpayments.admin` | 热重载 Bukkit 插件配置（`config.yml`）与内嵌支付后端（`config.json`）。 |
| `/wsxpay status` | `webshopxpayments.admin` | 查看后端连接状态（backend connected）与 Provider 注册状态（provider registered）。 |

执行 `reload` 后仍应再次运行 `status`。涉及端口、进程或底层客户端重建的修改，以页面提示和插件日志为准，必要时完整重启服务端。

---

## 2. Bukkit 权限节点

在您的权限组插件（如 LuckPerms）中，您可以为对应角色分配以下权限：

- **`webshopxpayments.command`**：
  - 默认状态：所有人（`true`）
  - 说明：允许玩家或管理员执行基础帮助指令。
- **`webshopxpayments.admin`**：
  - 默认状态：仅 OP（`op`）
  - 说明：核心管理员权限，允许执行热重载与状态查看。建议仅分配给服务器管理或运维角色。
