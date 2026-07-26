---
id: uploads-and-static-assets
title: 上传与静态资源
sidebar_label: 上传与静态资源
sidebar_position: 7
---

# 上传与静态资源

## 上传接口

常见上传入口：

- 玩家挂单图标：`POST /api/market/icon/upload?listingId=...`
- 后台商品图标：`POST /api/admin/products/icon?productId=...`
- 后台材质图标：`POST /api/admin/material-overrides/icon?material=...`

## 请求方式

这些上传接口使用原始文件字节流，而不是 multipart 表单。文件名或扩展名可能从 query、`X-File-Name` 或 `Content-Type` 推断。

当前文档基线下常见限制：

- 最大体积：约 `2 MB`
- 常见格式：`png`、`webp`、`jpg`、`jpeg`、`gif`

具体限制以目标 WebShopX 版本实际响应为准。

## 返回与访问

上传成功后通常返回可用于网页显示的资源路径，例如：

- `/uploads/listing-icons/...`
- `/uploads/product-icons/...`
- `/uploads/material-icons/...`

替换同一对象的受管图标时，服务端会尽量清理旧资源；客户端不应依赖旧路径永久有效。

## Internal / External 模式

- `internal`：插件同时托管 API 和内置静态页面；
- `external`：插件主要提供 API，前端与静态资源访问由外部 Web 服务、反向代理或 CDN 配置决定。

外置部署时，请同时确认上传后的资源路径能够被浏览器访问，而不是只验证上传请求返回成功。

## 安全建议

1. 不允许用户通过文件名控制服务器任意路径；
2. 不绕过服务端格式和大小校验；
3. 外部反向代理应限制请求体大小并配置合理超时；
4. 不把上传目录当作可执行脚本目录；
5. 对用户自定义图标保留审核和删除能力。
