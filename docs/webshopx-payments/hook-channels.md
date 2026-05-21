---
id: hook-channels
title: Hook 支付通道
sidebar_label: Hook 支付通道
sidebar_position: 6
---

# Hook 支付通道配置

Hook 支付通道属于**非官方签约模式**。主要通过一些技术方案监听“个人收款码”或“经营收款码”的入账通知，变相实现自动化支付回调。

:::warning[Hook 模式的核心限制与注意点]
1. **同金额排队竞争**：由于个人收款码不包含商户订单 ID，后端完全依靠 **“实付金额”** 进行订单匹配。因此，**同一时间段内，不能有两名玩家同时发起相同金额的付款**。例如不能同时充值 1.00 元，第二名发起充值 1.00 元的玩家需要等第一名完成付款或超时取消才能正常下单。
2. **多服部署建议**：由于需要排队，Hook 模式适合小众或中轻量级服务器。多服集群时请勿将多服流量合并到同一个 Hook 微信号上。
3. **安全提醒**：Hook 端没有额外的安全签名校验，**请勿将内嵌后端的 WebSocket 端口（默认 `62233`）暴露在公网中**。
:::

---

## 1. 支付宝 Hook 配置 (免客户端软件监听)

支付宝 Hook 运行在支付宝开放平台上，通过监听“经营收款码”在开放平台产生的交易事件实现匹配，**无需在服务器或本地保持任何手机/电脑 Hook 监听软件常驻**。

### (1) 准备经营收款码
1. 在手机支付宝首页点击 `收付款` -> `收钱` -> `经营收钱`。
2. 保存该页面的二维码图片（**注意：必须是经营收款码，普通个人收钱码无法被开放平台监听！**）。
3. 使用在线解码工具（如 [草料二维码解码](https://cli.im/deqr/)）扫描该图片，解析出类似 `https://qr.alipay.com/2m611859...` 的文本 URL。
4. 复制该文本，作为基础收款码填入 `payment_url`。
5. （可选）在支付宝收钱页面设置指定金额保存（例如 1.00、6.00、32.00 元），以同样方式解码，分别填入 `payment_urls` 映射中，注意金额**必须保留两位小数**。

### (2) 后端 `config.json` 支付宝 Hook 配置

将您在 [支付宝官方通道](./official-channels) 中创建的网页应用凭据复制到 `hook.alipay` 下，并获取 `seller_id` 填入：

```json
"hook": {
  "enable": true,
  "end_point": "/api/hook/receive",
  "alipay": {
    "enable": true,
    "app_id": "2021000000000000",
    "seller_id": "2088000000000000",
    "private_key": "file:secrets/alipay/private.txt",
    "alipay_public_key": "file:secrets/alipay/public.txt",
    "payment_url": "https://qr.alipay.com/2m611859woopehfqucwqwb2",
    "payment_urls": {
      "1.00": "https://qr.alipay.com/示例1元经营收款码地址",
      "6.00": "https://qr.alipay.com/示例6元经营收款码地址"
    }
  }
}
```

> **提示**：`seller_id` 可以登录支付宝开放平台后台，在“合作伙伴身份 (PID)”中复制获取（以 2088 开头的 16 位数字）。

---

## 2. 微信 Hook v3 配置 (WeChatFerry 方案)

微信 Hook v3 基于 [WeChatFerry](https://github.com/lich0821/WeChatFerry) 开源模块开发，通过电脑端微信注入进程监听收款通知。

:::important[环境要求]
- **微信PC版固定版本**：仅适用于微信 PC 独立安装版 [3.9.12.51](https://github.com/tom-snow/wechat-windows-versions/releases/download/v3.9.12.51/WeChatSetup-3.9.12.51.exe)。
:::

### (1) 自行构建
1. 在项目源码 `wechat-hook/v3/` 目录下，使用 Visual Studio 2022 打开解决方案 `Hook.sln`。
2. 将构建配置切换为 `Release` 模式。
3. 点击 `生成` -> `生成解决方案`。
4. 构建完成后，在 `Out/` 目录中找到生成的 `WSXPay.Hook.WeChat.exe`。

### (2) 配置与运行
1. 在 `Out/` 目录下新建一个名为 `config.properties` 的文本文件，输入以下内容：
   ```properties
   # Hook 终结点地址 (对应后端的接收地址)
   api_url=http://127.0.0.1:62233/api/hook/receive
   ```
2. 启动微信 PC 3.9.12.51 并登录您的收款微信号（或店员微信号）。
3. 以管理员身份运行 `WSXPay.Hook.WeChat.exe`，保持该控制台窗口一直处于打开状态即可。

---

## 3. 微信 Hook v4 配置 (wx_key 数据库解密方案)

微信 Hook v4 基于 [echotrace](https://github.com/ycccccccy/echotrace) 项目原理开发。它通过后台解密并监听 Windows 本地微信的聊天数据库变化，**不直接向微信进程注入任何 DLL 补丁，安全性极高，侵入性极小**。

:::important[环境与微信号要求]
- **微信PC版支持范围**：仅适用于微信 Windows 版 `4.1.0.34` 至 `4.1.2.17` 之间。
- **微信号设置**：登录的微信号可以是**收款账号主号**，也可以是该主号添加的**收款店员微信号**。
- **高危路径限制**：Win32 接口对**空格**与**中文**极其敏感！请确保 Hook 程序所在目录没有任何中文或空格。
- **收款助手号关注**：登录的微信号**务必关注并置顶**微信官方服务号`微信收款助手`。若该服务号被停用或消息仅发往“微信支付”服务号，Hook 将无法抓取到通知。
:::

### (1) 获取解密密钥与数据库配置
1. 下载并解压 `wx_key` 提取工具。
2. 保持微信完全退出的状态。
3. 管理员权限打开 `wx_key.exe`，点击 `开始提取密钥`。
4. 按照提示，等待微信自动启动后点击登录。
5. 此时工具窗口中会弹出一段 64 位的 **“微信密钥 (Hex String)”**，复制并妥善保存，随后立即关闭提取工具和微信。

### (2) 构建与运行 Hook 程序
1. 在项目源码 `wechat-hook/v4/` 目录下，运行 `build.cmd` 构建脚本。
2. 构建生成的所有产物会被复制到 `Out/` 目录下。
3. 在 `Out/` 目录中新建 `config.properties` 配置文件：
   ```properties
   api_url=http://127.0.0.1:62233/api/hook/receive
   wechat_key=您的64位微信密钥
   database_folder=auto
   ```
   > **关于数据库路径**：`database_folder` 设为 `auto` 即可自动定位。若日志报错警告，请将其指定为您的微信聊天数据库物理目录：`C:/Users/用户名/Documents/WeChat Files/wxid_xxxx/db_storage/message`。
4. 启动微信登录。
5. 启动 `WSXPay.Hook.WeChat.exe`。程序会实时解密并读取 `biz_message_*.db` 聊天数据库，自动提取收款助手的即时通知。

### (3) 因数据库写入延迟调大超时
:::warning[关键配置微调]
由于微信本地数据库持久化机制的原因，当您手机收到付款时，电脑端微信需要**大约 10 秒甚至更久**才会将消息真正写入到本地数据库文件中。
因此，使用 Hook v4 通道时，必须在插件端的 `config.yml` 中将超时时间调大（推荐 200 秒以上），否则玩家极易在等待解密时被判定超时：
```yaml
# config.yml
payment:
  timeout: 200
```
:::

### (4) 后端 `config.json` 微信 Hook 节点配置

```json
"hook": {
  "enable": true,
  "end_point": "/api/hook/receive",
  "wechat": {
    "require_process": "WSXPay.Hook.WeChat.exe",
    "enable": true,
    "payment_url": "wxp://f2f03hYFhDSFVo-F4nu5FDF0q6Q52eYHL2ydi5Iqwpt5ruk",
    "payment_urls": {
      "1.00": "wxp://f2f1pUjNG21clhI_6IugMMPNf9uCvH-_VxwoVjbz4Xik9RBQo1h7lt0t5eO4OL7X4DpN",
      "6.00": "wxp://f2f1noHjiC53rfbMJySvXSE8qm_GFPwSbSmEi8y8fNM_LyuIYaF3L6dfFQjm7PVVVnwj"
    }
  }
}
```

- `require_process`：默认为 `"WSXPay.Hook.WeChat.exe"`。内嵌后端在创建微信 Hook 支付时，会校验本台服务器的系统进程中该进程是否存在。**如果您的 Hook 辅助端与 Minecraft 服务端不在同一台机器上运行，请务必将此处设为空字符串 `""` 以跳过进程校验。**
- `payment_url`：个人微信收款码解码出的 `wxp://...` 地址（同样使用解码工具扫描普通收款二维码图片获取）。
- `payment_urls`：预先设定好的微信固定金额收款码解码地址（需在保存前设置金额，金额保留两位小数）。

:::tip[赞赏码使用支持]
微信赞赏码在很多时候比个人收款码更为宽松。如果您想在 `payment_url` 中展示赞赏码：
1. 手机保存赞赏码图片，切去空白部分（推荐切为 `280x280` 像素）。
2. 将图片上传至服务器，如放至 `D:/resources/reward-code.png`。
3. 在 `payment_url` 中使用 `file:文件路径` 指向该图片：
   ```json
   "payment_url": "file:D:/resources/reward-code.png"
   ```
:::
