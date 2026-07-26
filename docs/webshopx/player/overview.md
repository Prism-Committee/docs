---
id: overview
title: 总览
sidebar_label: 总览
sidebar_position: 1
---

# WebShopX 玩家指南

这里面向普通玩家，只解释你在游戏内和网页商城中需要完成的操作。

## 从这里开始

| 你要做什么 | 阅读 |
| --- | --- |
| 第一次登录网页商城 | [快速上手](./quick-start) |
| 买东西、查订单、退款 | [官方商店、玩家市场与订单](./shop-and-orders) |
| 查看余额、兑换或充值 | [钱包与兑换](./wallet-and-exchange) |
| 查看网页背包或从背包发起交易 | [网页背包与快捷交易](./inventory) |
| 领取待发货物品或查看信箱 | [领取与信箱](./claim-and-mailbox) |
| 参与拍卖 | [拍卖](./auctions) |
| 理解动态价格 | [动态价格](./dynamic-pricing) |
| 上架被拒或交易失败 | [上架限制](./limits) 和 [常见问题](./faq) |
| 看不懂术语 | [名词解释](./glossary) |
| 想理解算法机制 | [算法](./algorithm) |

## 最常用命令

```text
/ws
/ws home
/ws password <新密码>
/ws market sell <price> [amount] [currency]
/ws market logs [count]
/ws claim [all|ODR-|MKT-|CLM-|MCL-]
/ws mailbox
/ws mailbox collect
```

完整命令和权限说明由管理员 Reference 统一维护，不在玩家教程中复制整套参数。

## 功能状态说明

文档中可能看到以下状态：

- **稳定**：正常面向用户使用；
- **测试中**：功能已可使用，但界面或行为仍可能调整；
- **实验性**：默认可能关闭，存在明确限制或风险。

网页离线背包写入属于实验性能力；是否可用由服务器管理员决定。玩家只需要根据页面显示的“实时 / 只读 / 可操作”状态进行操作。

:::tip
遇到交易或领取问题时，不要连续重复提交。先刷新订单/挂单状态，再按错误提示或 [常见问题](./faq) 排查。
:::
