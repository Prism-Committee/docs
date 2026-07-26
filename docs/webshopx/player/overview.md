---
id: overview
title: 总览
sidebar_label: 总览
sidebar_position: 1
---

# 总览

## 问题反馈

- Issues 仓库：https://github.com/Prism-Committee/WebShopX-Issues

:::tip[导读]
适合玩家阅读：功能说明、使用教程、常见问题与术语解释。
:::

## 先看哪里

| 目标 | 先看 | 收获 |
| --- | --- | --- |
| 第一次使用 | [快速上手](./quick-start) | 登录、密码、基础操作 |
| 网页管理真实背包（内测中） | [网页背包与快捷交易](./inventory) | 背包/末影箱、快捷上架与离线状态 |
| 余额/充值兑换 | [钱包与兑换](./wallet-and-exchange) | 双币体系、兑换与常见报错 |
| 买东西、下单、查订单 | [官方商店、玩家市场与订单](./shop-and-orders) | 购买流程、订单状态、发货与退款 |
| 领取失败订单或补发物品 | [领取与信箱](./claim-and-mailbox) | `claim` 与信箱领取的正确姿势 |
| 理解拍卖机制 | [拍卖](./auctions) | 四种拍卖模式与实战差异 |
| 理解价格变化 | [动态价格](./dynamic-pricing) | 为什么会涨跌、不同算法的体感区别 |
| 上架被拒/交易失败排查 | [上架限制](./limits) + [常见问题](./faq) | 错误码含义与排查顺序 |
| 想看机制原理 | [算法](./algorithm) | 动态定价与拍卖机制的底层思路 |
| 看不懂术语 | [名词解释](./glossary) | 常用词快速对照 |

## 常用命令速查

```text
/ws  #打开商店GUI菜单
/ws help  #查看命令描述
/ws home  #获取网页商店网址
/ws password <newPassword>  #设置/重置密码
/ws market  #同/ws
/ws market gui  #同/ws
/ws market sell <price> [amount] [currency]  #使用命令快捷上架
/ws market logs [count]  #查看最近日志
/ws claim [all|ODR-|MKT-|CLM-|MCL-]  #领取待发货物品
/ws mailbox  #打开信箱GUI菜单
/ws mailbox collect  #一键领取信箱物品
```

## 入门时遇到的常见问题

:::warning
1. 先在游戏里设置网页密码：`/ws password <新密码>`。
2. 钱包是双币系统：`SHOP_COIN` 和 `GAME_COIN`。
3. 自动发货失败会转为 `WAIT_CLAIM`，要手动 `claim`。
4. 背包放不下会进入信箱，可用 `/ws mailbox` 查看或 `/ws mailbox collect` 收取。
:::

