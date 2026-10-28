---
id: why-afc
slug: /picharbor/deep-dive/why-afc
title: 为什么使用 AFC 协议？
sidebar_label: 为什么使用 AFC 协议
sidebar_position: 1
---

# 为什么使用 Apple 原生 AFC 协议？

许多用户都有过这样的经历：用数据线把 iPhone 连上 Windows 电脑，打开“此电脑 -> Apple iPhone -> Internal Storage -> DCIM”，想要复制里面的几千张照片，结果 Windows 资源管理器开始无休止地转圈、卡死，甚至拷到一半提示“设备附加的系统未运行”直接报错中断。

为什么会出现这种现象？PicHarbor 是如何从底层解决的？

---

## Windows 资源管理器（MTP / WPD）的先天缺陷

当你直接用 Windows 复制 iPhone 照片时，底层使用的是微型便携设备协议（MTP / WPD）：

1. **单通道阻塞式枚举**：
   - 现在的 iPhone 相机每天都在产生照片，`/DCIM` 下面往往分了数十个形如 `100APPLE`、`101APPLE` 的子文件夹；
   - Windows 资源管理器在向你展示文件前，必须递归扫描并枚举完这上万个文件的全部元数据，这就导致进入文件夹非常缓慢；
2. **缺乏状态机与重试机制**：
   - MTP 协议缺乏健壮的传输事务管理。如果传输过程中遇到一张格式特殊的损坏实况短片或瞬时供电抖动，整个传输通道会直接崩溃；
3. **静默失败与 0 字节损坏**：
   - 最致命的是，MTP 有时会假装传输成功，但在你的电脑硬盘上留下的是一个大小为 0 KB 的空文件，用户以为存好了，其实已经损坏。

---

## PicHarbor 的解法：直连 Apple File Conduit (AFC)

macOS 上的访达（Finder）、官方 iTunes 备份工具以及专业数千元商业手机数据恢复软件，在底层都不使用 MTP，而是使用 Apple 自研的原生设备文件协议：**Apple File Conduit (AFC)**。

```mermaid
flowchart TD
    subgraph Traditional["普通复制方式 (Windows Explorer)"]
        W_IP["iPhone"] -- "MTP / WPD 脆弱虚拟层" --> W_EXP["Windows 资源管理器\n(容易卡死 / 产生 0 字节坏图)"]
    end

    subgraph PicHarborWay["PicHarbor 专属方式"]
        P_IP["iPhone\nlockdownd 守护进程"] -- "AFC 苹果原生流式协议\n(与 Finder / iTunes 相同底层)" --> P_ENGINE["PicHarbor 流式引擎\n(稳定 / 35~80MB/s / 事务级断点)"]
    end
```

### AFC 协议为 PicHarbor 带来的优势：

* **直达底层文件流**：绕过 Windows 虚拟文件层，直接与 iOS 设备内的 `afc` 守护进程通信；
* **稳定不掉线**：支持并发块请求与平滑的流式写入，连续导出数万张照片（400 GB 以上）依然稳定流畅；
* **保全原始元数据**：照片的 EXIF 拍摄时间、GPS 定位、相机型号参数 100% 原样保留，绝无任何篡改压缩。
