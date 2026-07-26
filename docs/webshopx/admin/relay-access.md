---
id: relay-access
title: Relay 公网访问
sidebar_label: Relay 公网访问
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {DocHero, FeatureCards, PlanCards, Steps} from '@site/src/components/DocVisuals';

# Relay 公网访问

<DocHero
  eyebrow="WebShopX Relay"
  title="无需直接开放 Web 端口，也能提供公网商城"
  description="Relay 为 WebShopX 提供托管的公网访问入口，适合不方便配置公网 IP、端口映射、HTTPS 或反向代理的服务器。"
  primary={{label: '打开官方服务面板', to: 'https://47.122.127.164/'}}
  secondary={{label: '查看安装与部署', to: './install-deploy'}}
/>

:::info[官方 Relay 服务]
当前官方服务面板：**[打开 WebShopX Relay 服务面板](https://47.122.127.164/)**。

面板用于账号登录、开通服务、项目管理、服务器绑定、兑换与用量查看。服务入口、套餐和可用权益可能调整，以面板实际显示为准。
:::

公开文档仅覆盖服主需要使用的功能和操作流程，不涉及 Relay 服务端内部实现。

## 1. Relay 适合什么情况

<FeatureCards items={[
  {icon: '🌐', title: '没有固定公网 IP', description: '无法方便地做端口映射，或公网环境经常变化。'},
  {icon: '🔒', title: '不想自己维护 HTTPS', description: '不准备自行维护 Nginx / Caddy、证书和公网转发。'},
  {icon: '🧭', title: '希望统一公网入口', description: '让玩家通过稳定的公网入口访问 WebShopX。'},
  {icon: '🧩', title: '希望入口与服务器分离', description: '把公网托管入口和 Minecraft 服务端本身分开管理。'},
]} />

WebShopX 当前有三种 Web 运行模式：

| 模式 | Web 页面 / API | 是否需要自己提供公网入口 |
| --- | --- | --- |
| `internal` | WebShopX 插件直接提供 | 公网使用时通常需要 |
| `external` | API 由插件提供，前端外置 | 需要 |
| `relay` | 通过 Relay 提供公网访问 | 通常不需要 |

## 2. 先认识官方服务面板

打开 [WebShopX Relay 服务面板](https://47.122.127.164/) 后，普通服主主要会接触以下内容：

<FeatureCards items={[
  {icon: '👤', title: '账号', description: '注册、登录以及账号安全相关操作。'},
  {icon: '✨', title: '开通服务', description: '领取首次试用或自助购买套餐。'},
  {icon: '📦', title: '项目', description: '一个 Relay 项目对应一个需要托管的 WebShopX 公网实例。'},
  {icon: '🔗', title: '服务器绑定', description: '把当前 WebShopX 服务器关联到正确的项目。'},
  {icon: '🎟️', title: '兑换', description: '使用有效兑换码开通或延长相应权益。'},
  {icon: '📊', title: '项目面板', description: '查看项目状态、连接情况、用量与当前权益。'},
]} />

### 开通方式

Relay 并不要求必须先获得兑换码。当前可以通过以下方式开通：

1. **首次免费试用**：每个用户可领取一次 5 天体验服务；
2. **自助购买**：在“开通服务”页面选择套餐并自行完成购买；
3. **兑换码**：持有有效兑换码时，可按面板提示兑换；
4. **更多试用时长**：可加入 QQ 群 `636803372`，按群内说明申请更多试用福利。

:::note[套餐信息]
下面展示的是当前面板方案。价格、有效期、流量、API 请求数和缓存空间均可能调整，购买或开通前应以官方面板实时显示为准。
:::

<PlanCards items={[
  {name: '体验版', price: '¥0', period: '5 天', description: '首次测试与验证', badge: '每用户一次', features: ['1 GB 周期流量', '100,000 API 请求', '256 MB 缓存空间']},
  {name: '轻量版', price: '¥6', period: '30 天', description: '低频使用或约 10 人以下小服', features: ['5 GB 周期流量', '200,000 API 请求', '1 GB 缓存空间']},
  {name: '标准版', price: '¥10', period: '30 天', description: '稳定运营的中型服务器', badge: '推荐', highlighted: true, features: ['10 GB 周期流量', '600,000 API 请求', '1 GB 缓存空间']},
  {name: '进阶版', price: '¥20', period: '30 天', description: '访问量较高或资源较多的服务器', features: ['40 GB 周期流量', '3,000,000 API 请求', '2 GB 缓存空间']},
]} />

:::tip
第一次使用 Relay 时，可以先领取 5 天体验版完成接入测试，再决定是否购买长期套餐。
:::

## 3. 推荐接入流程

<Steps items={[
  {title: '准备 Relay 账号和服务', children: <>打开 <a href="https://47.122.127.164/">官方 Relay 服务面板</a>，注册或登录账号。进入“开通服务”，首次使用可领取一次 5 天体验版，也可以直接自助购买套餐；持有兑换码时也可以按面板提示兑换。最后确认账号下已有可使用的项目或服务实例。</>},
  {title: '从游戏内发起授权', children: <>以拥有 <code>webshop.admin</code> 权限的管理员身份进入服务器，执行 <code>/ws mode setup relay</code>。插件会返回可点击的安全授权链接；打开链接、登录 Relay 账号并确认授权，然后回到游戏等待完成。</>},
  {title: '确认服务器与项目关系', children: <>进入 Relay 服务面板检查项目。如果出现“待绑定服务器”或要求选择项目，把当前 WebShopX 服务器关联到准备使用的项目。多服务器或多项目账号应特别核对绑定关系。</>},
  {title: '切换到 Relay 并验证', children: <>回到游戏执行 <code>/ws mode switch relay</code>，再执行 <code>/ws home</code>。能够打开对应项目的公网商城页面，即说明基本接入完成。</>},
]} />

:::warning[不要分享授权信息]
不要在文档、工单或公开聊天中发送自己的访问密钥、授权链接或验证码。授权链接只应由当前服务器管理员本人打开，也不要截图公开。
:::

授权成功后，WebShopX 会保存当前 Relay 凭据，并提示继续切换运行模式。通常**不需要手动复制 access key**。

## 4. 日常管理

Relay 接入完成后，通常在两个位置管理：

<Tabs groupId="relay-management">
<TabItem value="webshopx" label="游戏内 / WebShopX" default>

用于：

- 切换 WebShopX 运行模式；
- 获取当前商城入口；
- 管理 WebShopX 自身的商品、订单、市场和管理员功能。

</TabItem>
<TabItem value="relay" label="Relay 服务面板">

用于：

- 领取试用、购买套餐或使用兑换码；
- 查看和选择项目；
- 查看服务器绑定状态；
- 管理 Relay 账号相关信息；
- 查看当前项目的有效期、流量、请求数、缓存空间和其他权益；
- 在需要时续费、升级或处理项目级托管操作。

</TabItem>
</Tabs>

> Relay 面板管理的是**公网托管与项目关系**，WebShopX 后台管理的是**商城业务本身**。两者不要混淆。

## 5. 手动配置（高级）

正常使用官方 Relay 时，优先使用 `/ws mode setup relay` 完成授权。通常无需手动填写访问密钥。

<details>
<summary><strong>展开手动配置方式</strong></summary>

只有在你明确知道现有访问密钥来源和目标账号时，才建议停服后手动编辑：

```yaml
webshop:
  server-mode: relay
  public-url: ""

relay:
  # 使用官方服务时通常可以保持默认/留空
  url: ""
  access-key: "请填入你自己的访问密钥"
```

保存后重启服务器。

</details>

:::danger[访问密钥属于敏感凭据]
不要把真实 `access-key` 提交到 Git、发到公开聊天、上传到工单截图，也不要让其他服务器共用来源不明的密钥。怀疑泄露时应立即在账号侧更换或撤销，并重新授权服务器。
:::

## 6. 切换回本地模式

Relay 不是不可逆操作。需要恢复本地部署时执行：

```text
/ws mode switch internal
```

或：

```text
/ws mode switch external
```

- `internal`：插件直接提供 API 与静态网页；
- `external`：插件提供 API，网页由外部反向代理或 CDN 托管。

切换前请确认新的公网入口和 `public-url` 等设置已经准备好。

## 7. 常见问题

<details>
<summary><strong>没有收到授权链接</strong></summary>

`/ws mode setup relay` 必须由拥有相应权限的**游戏内管理员**执行。控制台无法点击安全授权链接。

</details>

<details>
<summary><strong>授权页面要求登录</strong></summary>

这是正常流程。请登录你准备用于管理该 Relay 项目的账号，不要使用他人的账号替你授权。

</details>

<details>
<summary><strong>找不到免费试用</strong></summary>

确认当前账号是否已经领取过首次试用。每个用户只有一次 5 天免费试用机会；需要更多试用时长时，可加入 QQ 群 `636803372` 查看当前活动或申请方式。

</details>

<details>
<summary><strong>购买或续费后额度没有更新</strong></summary>

先刷新项目面板并确认购买对应的是正确项目；多项目账号尤其需要核对目标项目。仍未更新时，保留订单信息并联系官方支持。

</details>

<details>
<summary><strong>授权成功但项目仍不可用</strong></summary>

先检查 Relay 面板：

1. 是否已有有效项目；
2. 项目是否仍在有效期内；
3. 当前服务器是否仍处于待绑定状态；
4. 是否绑定到了正确项目；
5. 再确认游戏内已经执行 `/ws mode switch relay`。

</details>

<details>
<summary><strong>`/ws home` 提示未配置或打不开</strong></summary>

确认：

- 当前模式确实是 `relay`；
- Relay 授权已完成；
- 面板中的项目和服务器绑定关系正确；
- 项目服务仍在有效期内且额度未耗尽；
- 插件日志没有持续的连接错误。

</details>

<details>
<summary><strong>有多台 Minecraft 服务器</strong></summary>

不要仅凭名称猜测。分别完成授权，并在 Relay 面板核对每台服务器对应的项目关系。

</details>

<details>
<summary><strong>怀疑访问密钥泄露</strong></summary>

立即停止继续分享相关信息，在 Relay 账号侧更换或撤销相关凭据，然后重新执行授权流程。

</details>

## 8. 相关文档

<FeatureCards items={[
  {icon: '🚀', title: '安装与部署', description: '选择 internal、external 或 relay，并完成首次部署。', to: './install-deploy'},
  {icon: '⚙️', title: '配置与运行时参数', description: '查阅 WebShopX 当前配置项和运行模式参数。', to: './configuration'},
  {icon: '🛠️', title: '运维与故障处理', description: '处理连接、库存、发货、退款和运行异常。', to: './operations'},
  {icon: '⌨️', title: '命令与权限体系', description: '查阅管理员命令、玩家命令与权限节点。', to: './commands-permissions'},
]} />
