---
id: picharbor-overview
slug: /picharbor/overview
title: PicHarbor 概览
sidebar_label: 概览
sidebar_position: 0
---

import {DocHero, FeatureCards} from '@site/src/components/DocVisuals';

# PicHarbor

<DocHero
  eyebrow="PicHarbor 照片港湾"
  title="让每一张珍贵回忆，都有安稳的港湾"
  description="PicHarbor 是一套面向普通用户与摄影爱好者的跨平台照片备份与管理工具。用原生的直连协议告别 Windows 导照片频繁卡死与 0 字节损坏；用多盘聚合图库从容应对数百 GB 甚至数 TB 的海量老照片；在手机端原生直连 Google 相册，完整保留实况与动态照片。"
  primary={{label: '快速上手指南', to: '/picharbor/start/quick-start'}}
  secondary={{label: '按任务查找指南', to: '/picharbor/guides/overview'}}
/>

## 你现在想做什么？

<FeatureCards items={[
  {icon: '⚡', title: '第一次使用 PicHarbor', description: '下载安装，在 5 分钟内完成第一次安全照片备份。', to: '/picharbor/start/quick-start', badge: '新手推荐'},
  {icon: '🍏', title: '把 iPhone 照片导出到电脑', description: '插上数据线一键安全导出，保留实况照片与调色文件。', to: '/picharbor/guides/iphone-backup'},
  {icon: '🤖', title: '把 Android 照片导出到电脑', description: '在同一 Wi-Fi 局域网内无线增量同步新拍照片。', to: '/picharbor/guides/android-backup'},
  {icon: '☁️', title: '手机照片自动备份到 Google 相册', description: 'Android 与 iOS 端后台自动静默同步，支持应用内代理。', to: '/picharbor/guides/cloud-sync'},
  {icon: '💾', title: '一块硬盘装不下了？', description: '教你添加新硬盘扩展图库，换盘继续备，照片不丢不乱。', to: '/picharbor/guides/library-management'},
  {icon: '🧹', title: '手机存储告急，安全清理空间', description: '确认照片已安全备份后，无损释放手机几百 GB 空间。', to: '/picharbor/guides/cleanup-and-free-space'},
  {icon: '❓', title: '遇到问题？查阅常见解答', description: '连不上手机、提示不信任、备份卡住等高频问题排查。', to: '/picharbor/guides/faq'},
  {icon: '💻', title: '开发者与架构说明', description: '查阅底层技术实现、GPMC 协议交互与源码构建。', to: '/picharbor/developer/quickstart', badge: 'Dev'},
]} />

---

## 为什么选择 PicHarbor？

如果你尝试过把手机里成千上万张照片备份到电脑，很可能遇到过这些让人崩溃的瞬间：

* **Windows 自带复制太容易卡死**：用数据线连上 iPhone，直接在“此电脑”里复制几百 GB 的 DCIM 目录，常常进度条卡住不动、突然断连，甚至拷出来的是损坏打不开的空文件；
* **实况照片（Live Photo）被拆得七零八落**：拷到电脑后变成了一张静态图和一个独立无声小视频，动态效果与精选帧全没了；
* **换了移动硬盘就不知道怎么放**：几年下来照片有几万张，笔记本 C 盘 D 盘满了，买来几块移动硬盘，老照片东放一个西放一个，找照片如大海捞针；
* **想清理手机又怕误删**：手机提示“存储空间已满”，想删照片又不敢删，生怕有的照片还没备份成功。

**PicHarbor 就是为了彻底终结这些痛苦而诞生的。** 它不靠任何玄学技巧，而是通过平台底层的严谨工程设计，让每一张照片的传输、落盘、校验和检索都具备银行级的稳定性。

---

## 产品矩阵与各端分工

PicHarbor 由互相关联又各自专注的客户端与协议库组成：

| 客户端 / 组件 | 适用系统 | 核心职责 | 面向人群 |
| :--- | :--- | :--- | :--- |
| **桌面端 (Desktop)** | Windows 10/11 (x64) | 汇总管理电脑与移动硬盘上的所有照片，提供画廊浏览、检索、iPhone USB 高速备份与 Android FTP 增量接收。 | **所有电脑用户** / 摄影师 / 家庭照片档案管理员 |
| **Android 客户端** | Android 10+ (arm64-v8a) | 手机端原生直接把相册同步到 Google 相册，智能提取动态照片 (Motion Photo)，支持后台安全释放空间。 | Android 手机用户 |
| **iOS 客户端** | iOS 17.0+ iPhone | 手机端原生把相册同步到 Google 相册，支持后台 URLSession 上传、实况照片配对、应用内代理与证书自动续签。 | iPhone 手机用户 |
| **GPMC 协议核心** | Python 3.13 | 移动端内嵌的 Google 相册直连协议库，无需第三方服务器中转。 | 开发者 / 高级技术用户 |
| **命令行工具 (CLI)** | Windows x64 | 适合家庭 NAS、脚本定时备份与极客用户的单文件命令行工具。 | 进阶用户 / 开发者 |
