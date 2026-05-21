---
id: commands-permissions
title: Commands & Permissions
sidebar_label: Commands & Permissions
sidebar_position: 7
---

# Commands & Permissions

`WebShopX-Payments` provides extremely simple in-game commands and permission nodes, mainly used by administrators for configuration hot-reloading and runtime troubleshooting.

---

## 1. In-game Primary Command

- Main Command: `/webshopx-payments`
- Alias (Shortcut): `/wsxpay`

### Command List

| Command | Required Permission | Description |
| --- | --- | --- |
| `/wsxpay help` | `webshopxpayments.command` | View the helper list of plugin commands. |
| `/wsxpay reload` | `webshopxpayments.admin` | Hot-reload the Bukkit plugin configurations (`config.yml`) and the embedded payment backend (`config.json`). |
| `/wsxpay status` | `webshopxpayments.admin` | View the backend connection status (backend connected) and the payment Provider registration status (provider registered). |

---

## 2. Bukkit Permission Nodes

Within your permission management plugin (e.g., LuckPerms), you can assign the following permission nodes to corresponding roles:

- **`webshopxpayments.command`**:
  - Default: Everyone (`true`)
  - Description: Allows players or administrators to execute the basic help command.
- **`webshopxpayments.admin`**:
  - Default: OP Only (`op`)
  - Description: Core administrator permission allowing config hot-reloading and status checking. We highly recommend assigning this only to server owners or operations roles.
