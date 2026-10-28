---
id: install-desktop
slug: /picharbor/start/install-desktop
title: 桌面端安装与环境准备
sidebar_label: 桌面端安装准备
sidebar_position: 2
---

# 桌面端安装与环境准备

PicHarbor 桌面端专为 64 位 Windows 系统优化，开箱即用。

---

## 系统与硬件要求

* **支持的操作系统**：Windows 10（64 位，版本 1809 及以上）或 Windows 11；
* **处理器架构**：x64 (Intel 或 AMD 64位芯片)；
* **内存建议**：4 GB 及以上；
* **磁盘空间**：软件本身仅占用约 80 MB，但存放照片的物理硬盘需预留足够存储空间。

---

## 关键依赖：Apple 移动设备支持服务 (仅备份 iPhone 需要)

为了绕过 Windows 容易卡死的文件管理器并直接通过原生高速协议读取 iPhone，PicHarbor 需要系统具备 Apple 基础通讯驱动。

**请根据你的 Windows 偏好选择以下任意一种方式准备驱动（二选一）：**

### 推荐方式：通过微软应用商店安装 Apple Devices
1. 打开 Windows 自带的 **Microsoft Store（微软应用商店）**；
2. 搜索并安装 **`Apple Devices` (Apple 设备)** 官方应用；
3. 安装完成后打开一次并根据提示初始化即可。

### 备选方式：安装传统 iTunes
如果你习惯使用 iTunes，或使用的是精简版 Windows 系统：
1. 访问 Apple 官方网站下载 **iTunes for Windows (64-bit)** 安装包；
2. 完成安装后重启一次电脑。

:::note[注意]
如果你仅使用 PicHarbor 整理本地已有照片文件夹，或仅通过局域网 FTP 备份 Android 手机，则**完全无需安装**任何 Apple 驱动组件。
:::

---

## 获取与运行软件

1. 前往 GitHub Releases 下载最新的 `PicHarbor-Gui-win-x64-portable.zip`；
2. 将文件解压到非系统盘目录（例如 `D:\PicHarbor`，避免放在受 UAC 权限保护的 `Program Files` 目录）；
3. 直接运行 `PicHarbor.Gui.exe`。
4. 为方便日常使用，可右键 `PicHarbor.Gui.exe`，选择“发送到 -> 桌面快捷方式”。
