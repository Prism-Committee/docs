---
id: install-mobile
slug: /picharbor/start/install-mobile
title: 移动端安装指南 (Android / iOS)
sidebar_label: 移动端安装指南
sidebar_position: 3
---

# 移动端客户端安装指南

PicHarbor 为 Android 与 iOS 均开发了原生移动客户端，能够将手机内的照片直接、无损、安全地备份至 Google 相册。

---

## Android 客户端安装

### 设备要求
* **系统版本**：Android 10.0 (API 29) 或更高版本；
* **处理器**：仅支持 64 位芯片（`arm64-v8a`，目前市场上绝大部分主流手机均符合要求）。

### 安装与授权步骤
1. 前往 [PicHarbor Android Releases](https://github.com/Cc-Cece/PicHarbor-Android/releases) 下载最新的 `.apk` 安装包；
2. 在手机中点击安装文件（如遇系统提示“允许安装来自此来源的应用”，点击允许）；
3. 首次启动时，授予**“照片和视频读取权限”**；
4. **后台保活建议（重要）**：
   - 国产手机系统（如小米澎湃、OPPO ColorOS、vivo OriginOS、华为等）后台休眠策略较激进；
   - 建议长按桌面图标 -> 应用信息 -> 省电策略，设为**“无限制”**或允许后台活动，以确保插电时夜间自动静默同步。

---

## iOS 客户端安装 (侧载与自动续签)

由于 iOS 客户端内置了沙盒 Python 协议解释器与应用内网络代理，当前采用**未签名 IPA 侧载**方式发布。即使没有付费苹果开发者账号，使用普通免费 Apple ID 也能轻松安装并永久使用。

### 方式一：使用 SelfRefreshSetup（推荐，告别每周插电脑）
1. 从 [PicHarbor iOS Releases](https://github.com/Cc-Cece/PicHarbor-iOS/releases) 下载 `PicHarbor-iOS-unsigned.ipa`；
2. 电脑端下载并打开开源辅助工具 [SelfRefreshSetup](https://github.com/Cc-Cece/SelfRefreshKit)；
3. 将 iPhone 用数据线连接电脑，输入你的个人 Apple ID 完成初次签名安装；
4. **原理**：PicHarbor 内置了 SelfRefreshKit 组件，安装后手机会在本地回环自动续签，**彻底告别 7 天过期烦恼**，后续版本更新还可在手机内一键 OTA 完成。

### 方式二：使用 Sideloadly 或 AltStore
1. 打开电脑上的 Sideloadly 或 AltStore；
2. 拖入未签名的 `PicHarbor-iOS-unsigned.ipa`，输入 Apple ID 开始安装；
3. 安装成功后，在 iPhone 上进入 **设置 -> 通用 -> VPN 与设备管理**，在“开发者 App”下找到你的邮箱并点击**“信任”**。
