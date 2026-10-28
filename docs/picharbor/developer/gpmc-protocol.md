---
id: gpmc-protocol
slug: /picharbor/developer/gpmc-protocol
title: GPMC 协议核心实现
sidebar_label: GPMC 协议核心
sidebar_position: 3
---

# GPMC 协议核心实现

`gpmc`（Google Photos Media Client）是跨 Android、iOS 与桌面端共享的 Python 协议核心模块。

---

## 协议通信生命周期

```mermaid
sequenceDiagram
    participant Host as 宿主应用 (Swift / Kotlin / C#)
    participant Engine as gpmc 协议引擎
    participant API as Google Photos API

    Host->>Engine: 1. 传递文件路径或流式 Buffer
    Engine->>API: 2. 发起分块上传 (POST /v1/uploads, chunked)
    loop 分块传输
        Engine->>API: 上传数据块 (含 X-Goog-Upload-Offset)
        API-->>Engine: 确认已接收字节偏移
    end
    API-->>Engine: 返回 uploadToken
    alt 包含实况照片 (Live Photo)
        Engine->>API: 并行上传 MOV 伴生视频获取 videoUploadToken
    end
    Engine->>API: 3. 批量提交 (POST /v1/mediaItems:batchCreate)
    API-->>Engine: 返回已创建的 MediaItem 实体与远程 ID
    Engine-->>Host: 4. 回调宿主更新持久化同步状态
```

---

## 核心方法契约

```python
class GooglePhotosClient:
    def upload_stream(
        self,
        stream: BinaryIO,
        size: int,
        mime_type: str,
        progress_callback: Optional[Callable[[int, int], None]] = None,
    ) -> str:
        """分块上传二进制数据流，返回云端生成的 uploadToken。
        
        支持断点重试与实时进度回调。
        """
        ...

    def batch_create(
        self,
        new_media_items: List[NewMediaItem],
        album_id: Optional[str] = None,
    ) -> List[BatchCreateResult]:
        """将一个或多个已上传的 uploadToken 批量确认入库。
        
        若为实况照片，在 new_media_items 中声明配对元数据字典。
        """
        ...
```

---

## 错误码与重试矩阵

* **HTTP 401 / 403**：授权 Token 过期，触发客户端 OAuth Refresh 流程；
* **HTTP 429 / 503**：频率限制或云端限流，采用带有抖动的指数退避（Exponential Backoff with Jitter）；
* **TCP EOF / 断网**：通过 `X-Goog-Upload-Command: query` 查询已确认的字节偏移，无损无感续传后续分块。
