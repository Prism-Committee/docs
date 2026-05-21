---
id: faq
title: 常见问题与排障
sidebar_label: 常见问题与排障
sidebar_position: 8
---

# 常见问题与排障

本文汇总了在安装、配置和运行 `WebShopX-Payments` 插件过程中可能遇到的常见故障及其解决方案。

---

## 1. 核心连通性问题

### Q：WebShopX 提示找不到支付 Provider，或者无法调出支付选项？
:::danger[排查步骤]
1. 请确认您的 `plugins/` 目录中已**同时安装**了 `WebShopX` 核心插件与 `WebShopX-Payments` 插件。
2. 检查服务器启动日志。正常情况下，必须能看到以下两条日志输出：
   ```text
   [WebShopX-Payments] Registered WebShopXPaymentApi provider: webshopx-payments
   [WebShopX] Payment provider detected; recharge listener registered: webshopx-payments
   ```
3. 如果未看到，请确认您下载并使用的是 `with-backend` 发布形态的 JAR 包（旧的独立后端与 WebSocket 插件变体已废弃）。
:::

---

### Q：发起订单时控制台或游戏内报错 `PROVIDER_UNAVAILABLE`？
:::warning[原因与解决方案]
这通常意味着 Bukkit 插件端无法连接到内嵌支付后端进程。
1. **端口冲突**：内嵌后端默认使用 `62233` 端口。请确认该端口未被您服务器上的其他 Java 进程或服务占用（可在控制台执行 `/wsxpay status` 查看连接状态）。
2. **配置文件 JSON 格式错误**：如果 `plugins/WebShopX-Payments/backend/config.json` 存在拼写错误（例如多写了逗号、缺少大括号），后端服务将无法正常解析并拒绝启动。建议将配置文件内容复制到在线 JSON 校验工具中检查。
:::

---

### Q：PayPal 或 MercadoPago 接口提示网络连接超时/失败？
:::tip[代理配置指引]
如果您的 Minecraft 服务器机房位于中国大陆，由于国际骨干网限制，直连 PayPal 或 MercadoPago 接口极易失败。
- **解决方案**：强烈建议在 `backend/config.json` 的全局或局部 `proxy` 节点中，启用并配置 Socks5 或 HTTP 科学代理服务。
:::

---

## 2. Hook 模式特有排障

### Q：微信 Hook 提示“Hook未运行”，玩家无法生成订单？
:::danger[重要配置项检查]
为了保证安全性，内嵌后端默认会通过 `hook.wechat.require_process`（默认值为 `WSXPay.Hook.WeChat.exe`）校验本台服务器系统进程中该软件是否处于运行状态。
- **如果您的微信 Hook 辅助端与 Minecraft 服务端不在同一台机器上运行**（例如 Minecraft 部署在 Linux 面板服，而微信 Hook 挂在您的本地 Windows 电脑上），请务必在 `backend/config.json` 中将该项修改为**空字符串**：
  ```json
  "require_process": ""
  ```
  修改后热重载或重启即可跳过进程存在性校验。
:::

---

### Q：微信 Hook v4 扫码支付后游戏内迟迟不入账？
:::warning[排查指南]
1. **中文与空格路径**：微信 Hook 软件绝对**不能**放在含有空格或中文的物理文件夹路径下（例如 `D:\MC 服务器\微信 Hook\` 是不被允许的，极易导致 Win32 接口监听失败。请改为诸如 `D:\wsxpay-hook\` 这样的全英文无空格目录）。
2. **收款助手号状态**：电脑端登录的微信号必须**关注并置顶“微信收款助手”**服务号。如果收款推送仅显示在“微信支付”或“服务通知”中，Hook 均无法成功解密。
3. **数据库延迟缓冲**：微信本地数据库的持久化写入约有 10-15 秒固有延迟。请避免在上游商城侧将订单过期时间设置得过短，并优先使用官方支付通道以降低延迟带来的误判。
4. **微信密钥失效**：如果微信客户端进行了大版本更新或重新登录，解密密钥可能会变动。请重新使用 `wx_key.exe` 提取新密钥并填入 `config.properties`。
:::

---

## 3. 编译与构建问题

### Q：使用 Gradle 构建打包时出现 Java Class Version 错误？
:::note[编译环境推荐]
`WebShopX-Payments` 源码包含较新的 Java 特性，**推荐且必须使用 JDK 25** 进行编译。
在 Windows PowerShell 终端中，您可以通过以下命令临时指定 JDK 路径进行编译：
```powershell
$env:JAVA_HOME='C:\Program Files\Java\jdk-25.0.3'
$env:JAVA_TOOL_OPTIONS='-Duser.country=US'
.\gradlew.bat :plugin:bukkit:with-backend:build
```
构建成功后的产物位于：`out/WebShopX-Payments-<version>-full.jar`。
:::
