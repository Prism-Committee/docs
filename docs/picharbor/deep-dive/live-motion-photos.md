---
id: live-motion-photos
slug: /picharbor/deep-dive/live-motion-photos
title: 理解实况照片与动态照片
sidebar_label: 实况与动态照片原理
sidebar_position: 3
---

# 理解实况照片与动态照片

在智能手机时代，我们拍摄的照片早已不仅仅是一张张纯粹的“静态图片”，而是生动的动态切片。

---

## 1. Apple 实况照片 (Live Photo)

当你按下 iPhone 快门时，系统实际捕获的是两个独立文件：
* **静态高画质原片**：通常是一张 `.HEIC` 或 `.JPG` 格式的高分辨率图像；
* **伴生短视频**：一段时长约 3 秒（按下快门前后各 1.5 秒）、带有声音的 `.MOV` 视频流。

### 它们如何绑定在一起？
苹果在两者的元数据内部写入了一个完全相同的 **`Content Identifier`（内容唯一标识）**。当 iOS 相册或 Mac 访达检测到同目录下存在 Content ID 匹配的两个文件时，就会自动将它们融合成一张长按可播放的实况照片。

> **PicHarbor 的处理**：在备份 iPhone 或上传至 Google 相册时，PicHarbor 会精准提取并配对这两个文件，确保入库后无论是在电脑本地画廊还是在 Google 相册云端，都能完美重现长按动态与原声。

---

## 2. Android 动态照片 (Motion Photo)

与苹果将图片和视频分开存放不同，大多数 Android 厂商（Google Pixel、三星 Galaxy、小米等）采用**单文件内嵌式**方案：
* 整个动态照片只保存为一个单一的 `.JPG` 或 `.HEIC` 文件；
* 照片的主体部分是标准的高清静止图像，任何普通看图软件都能正常打开；
* 在文件的尾部，厂商通过 XMP 元数据（如 `GCamera:MicroVideo` 或特定厂商 Tag）标明了一个字节偏移量（Offset），并将一段 H.264 / H.265 编码的 MP4 短视频静默拼接在文件末尾。

> **PicHarbor 的处理**：PicHarbor Android 端扫描媒体时能智能识别出这些内嵌偏移量，在同步至 Google 相册时保持原汁原味的完整字节流，使云端能立刻识别并激活动态回放效果。
