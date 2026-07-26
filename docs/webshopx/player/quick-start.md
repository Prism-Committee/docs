---
id: quick-start
title: 快速上手
sidebar_label: 快速上手
sidebar_position: 2
---

# 快速上手

本页内容：进行账号准备并成功进入 WebShopX。

:::info[本页导读]
- 第 1 部分：首登前 3 步
- 第 2 部分：常见错误与处理
:::

## 1. 首次登录

1. 在游戏内执行：

```text
/ws password <你的新密码>
```

2. 执行 `/ws home` 打开服主配置的 Web 页面。
3. 用游戏内提示的用户名和刚设置的密码登录。


## 2. 常见错误与处理

| 错误码 | 含义 | 处理建议 |
| --- | --- | --- |
| `invalid_username` | 用户名格式不合法 | 检查长度和字符（字母/数字/下划线） |
| `invalid_password` | 密码长度不合法 | 改为 8 到 64 位 |
| `username_exists` | 用户名冲突 | 更换用户名并重试 |
| `invalid_credentials` | 登录凭证错误 | 核对账号、密码、大小写 |
| `auth_invalid` | 会话失效或过期 | 重新登录获取新 token |

<details>
  <summary>排障顺序（建议）</summary>

1. 先确认你是否在游戏里执行过 `/ws password`。
2. 再确认密码长度是否满足 8 到 64。
3. 若网页提示会话失效，先完整退出再重新登录。

</details>
