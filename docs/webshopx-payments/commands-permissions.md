---
id: commands-permissions
title: 命令与权限体系
sidebar_label: 命令与权限体系
sidebar_position: 7
---

# 命令与权限体系

`WebShopX-Payments` 提供了极其简洁的游戏内指令与权限节点，主要用于管理员进行配置热重载与运行时状态排障。

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

---

## 2. Bukkit 权限节点

在您的权限组插件（如 LuckPerms）中，您可以为对应角色分配以下权限：

- **`webshopxpayments.command`**：
  - 默认状态：所有人（`true`）
  - 说明：允许玩家或管理员执行基础帮助指令。
- **`webshopxpayments.admin`**：
  - 默认状态：仅 OP（`op`）
  - 说明：核心管理员权限，允许执行热重载与状态查看。建议仅分配给服务器管理或运维角色。
