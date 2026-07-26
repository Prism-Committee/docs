---
id: uploads-and-static-assets
title: Uploads and Static Assets
sidebar_label: Uploads and Static Assets
sidebar_position: 7
---

# Uploads and Static Assets

Common upload endpoints include player listing icons, admin product icons, and material override icons.

These endpoints use raw file bytes rather than multipart form uploads. The server may infer the filename/extension from query parameters, `X-File-Name`, or `Content-Type`.

Current documented limits are approximately 2 MB and common image formats such as PNG, WebP, JPEG, and GIF. Always treat the target WebShopX version as authoritative.

Successful uploads normally return a managed path under locations such as `/uploads/listing-icons/`, `/uploads/product-icons/`, or `/uploads/material-icons/`.

In `external` deployments, verify that uploaded asset paths are actually reachable through your reverse proxy/CDN, not just that the upload request succeeded.
