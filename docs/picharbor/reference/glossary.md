---
id: glossary
slug: /picharbor/reference/glossary
title: 常见术语表
sidebar_label: 术语表 (Glossary)
sidebar_position: 1
---

# 常见术语表 (Glossary)

本文档列出 PicHarbor 项目文档中频繁出现的专业术语、缩写及其通俗解释。

---

| 术语 / 缩写 | 完整英文 | 通俗解释与说明 |
| :--- | :--- | :--- |
| **AFC** | Apple File Conduit | 苹果官方在 iOS 设备与电脑之间传输文件的底层协议。macOS 访达、iTunes 均基于此协议。比 Windows 原生 MTP 稳定得多。 |
| **MTP / WPD** | Media Transfer Protocol / Windows Portable Devices | Windows 自带的文件传输驱动协议。在面对数百 GB、数万张 iPhone 照片时容易发生枚举假死、断连与 0 字节损坏。 |
| **Live Photo** | Live Photo (实况照片) | 苹果照片格式，包含一张高清静态图（HEIC/JPG）和一段 3 秒短视频（MOV），两者通过唯一的 Content ID 配对绑定。 |
| **Motion Photo** | Motion Photo (动态照片) | Android 体系中的动态照片格式。通常将静态图与短视频流内嵌在同一 JPEG/HEIC 文件中。 |
| **.AAE** | AAE Sidecar File | 苹果系统在用户编辑照片（修图、裁剪、滤镜）后生成的 XML 格式调节记录文件。 |
| **Chaquopy** | Chaquopy | 一种将标准 Python 运行环境嵌入 Android 进程的开源框架。PicHarbor 用它在 Android 本地运行 `gpmc`。 |
| **SelfRefreshKit** | SelfRefreshKit | 面向 iOS 侧载场景的开源组件，支持在手机端利用本地回环唤醒技术自动刷新个人免费 Apple ID 的 7 天证书签名。 |
| **GPMC** | Google Photos Media Client | PicHarbor 跨端共用的底层 Python 通信库，负责直连 Google 相册 API 进行分块断点上传与实况照片配对。 |
| **逻辑图库** | Logical Library | PicHarbor 的存储抽象。将多块物理磁盘（如 D 盘、E 盘）统一聚合显示为单一画廊时间轴，单盘自持索引与回收站。 |
| **原子写入** | Atomic Write | 写入过程中先将数据保存为 `.partial` 临时文件，待校验无误后再更名为目标文件，防止生成半截损坏文件。 |
