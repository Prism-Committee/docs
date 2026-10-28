---
id: developer-quickstart
slug: /picharbor/developer/quickstart
title: 开发者快速开始
sidebar_label: 开发者起步
sidebar_position: 1
---

# 开发者快速开始

本章节面向希望为 PicHarbor 贡献代码、二次开发或定制私有特性的工程师与技术爱好者。

---

## 代码仓库概览

PicHarbor 由以下核心模块构成：

| 模块名称 | 技术栈 | 仓库路径 |
| :--- | :--- | :--- |
| **Desktop** | .NET 10.0 / C# 14 / WPF | `01_projects/01_PicHarbor/desktop/` |
| **Android** | Kotlin 2.0 / Jetpack Compose / Chaquopy | `01_projects/01_PicHarbor/android/` |
| **iOS** | Swift 5.0+ / SwiftUI / XcodeGen | `01_projects/01_PicHarbor/ios/` |
| **gpmc** | Python 3.13 / Poetry / Ruff | `01_projects/01_PicHarbor/gpmc/` |

---

## 桌面端构建 (.NET 10)

### 环境依赖
* [.NET 10 SDK (LTS)](https://dotnet.microsoft.com/download/dotnet/10.0)；
* Visual Studio 2026 或 JetBrains Rider / VS Code (C# DevKit)。

### 编译与运行
```bash
cd desktop

# 还原依赖
dotnet restore

# 编译整个解决方案 (含 Core, Gui, Cli, Vault)
dotnet build -c Release

# 启动图形界面
dotnet run --project src/PicHarbor.Gui

# 启动命令行工具
dotnet run --project src/PicHarbor.Cli -- --help
```

---

## Android 端构建 (Kotlin + Chaquopy)

### 环境依赖
* JDK 17 (配置环境变量 `JAVA_HOME`)；
* Android Studio (推荐 Ladybug 或更高版本)；
* Android SDK (API 34/35)；
* 本地 Python 3.13 (用于 Chaquopy 处理 Python 依赖打包)。

### 编译 APK
```bash
cd android

# 运行单元测试
./gradlew test

# 构建 Release APK
./gradlew assembleRelease
```
产物位于 `app/build/outputs/apk/release/`。

---

## iOS 端构建 (Swift + XcodeGen)

### 环境依赖
* macOS 14+ 与 Xcode 16+；
* [XcodeGen](https://github.com/yonaskolb/XcodeGen) (`brew install xcodegen`)。

### 生成工程与编译
```bash
cd ios

# 根据 project.yml 生成 .xcodeproj
xcodegen generate

# 打开工程编译或使用 xcodebuild
xcodebuild -project PicHarbor.xcodeproj -scheme PicHarbor -destination 'generic/platform=iOS' build
```
