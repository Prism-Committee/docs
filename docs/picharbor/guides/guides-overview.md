---
id: guides-overview
slug: /picharbor/guides/overview
title: 使用指南
sidebar_label: 使用指南概览
sidebar_position: 1
---

import {DocHero, FeatureCards} from '@site/src/components/DocVisuals';

# 使用指南

<DocHero
  eyebrow="User Guides"
  title="按你想要完成的事情找答案"
  description="这里不堆砌复杂的系统架构名词，而是从你最常见的实际生活场景出发，教你如何用 PicHarbor 顺畅完成照片备份、换盘扩容、安全瘦身与相册整理。"
  primary={{label: '快速开始', to: '/picharbor/start/quick-start'}}
  secondary={{label: '常见问题解答 (FAQ)', to: '/picharbor/guides/faq'}}
/>

## 日常任务导航

<FeatureCards items={[
  {icon: '🍏', title: '从 iPhone 导出备份到电脑', description: '数据线直连高速拉取，完整保留 Live Photo 动态与滤镜。', to: '/picharbor/guides/iphone-backup'},
  {icon: '🤖', title: '从 Android 导出备份到电脑', description: '同一 Wi-Fi 下无线同步，每次只传新增拍摄的照片。', to: '/picharbor/guides/android-backup'},
  {icon: '☁️', title: '手机照片自动同步到 Google 相册', description: '移动端后台静默直连上传，支持动态照片与应用内代理。', to: '/picharbor/guides/cloud-sync'},
  {icon: '💾', title: '多块硬盘管理与扩容', description: '老照片在旧盘、新照片存新盘，逻辑图库合并统一浏览。', to: '/picharbor/guides/library-management'},
  {icon: '🧹', title: '手机内存告急，无损释放空间', description: '确认照片安全入库后，放心清理手机原片，留存系统回收站。', to: '/picharbor/guides/cleanup-and-free-space'},
  {icon: '♻️', title: '照片去重与 30 天回收站', description: '严谨的 SHA-256 哈希比对去重，误删提供 30 天找回反悔期。', to: '/picharbor/guides/deduplication-and-recycle'},
  {icon: '❓', title: '常见问题解答 (FAQ)', description: '连不上手机、信任报错、证书过期等异常排查。', to: '/picharbor/guides/faq'},
]} />

:::tip[提示]
如果你是软件开发者或系统管理员，需要了解代码实现、底层协议、架构设计或命令行自动化，请直接进入 [开发者文档](/picharbor/developer/quickstart) 或 [参考资料](/picharbor/reference/glossary)。
:::
