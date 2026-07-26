# Prism's Docs

Prism-Committee 的统一文档站，基于 [Docusaurus](https://docusaurus.io/) 构建。

当前主要维护：

- **WebShopX**：玩家指南、安装部署、服务器管理、Relay、公用 API 与开发参考；
- **WebShopX-Payments**：支付扩展的安装、支付渠道配置与 Provider 开发资料；
- **中文 / English** 双语文档。

## 本地运行

需要 Node.js 与 npm。

```bash
npm install
npm run start
```

默认开发地址：

```text
http://localhost:3000/
```

英文站：

```bash
npm run start -- --locale en
```

发布前建议执行：

```bash
npm run build
```

## 文档结构

WebShopX 文档采用任务优先的信息架构：

```text
WebShopX
├── Overview
├── Get started
├── Guides
├── Administration
├── Development
└── Reference
```

较深入的专题仍保留在折叠分组中，避免主导航过度碎片化。

主要目录：

```text
docs/                         中文文档
i18n/en/...                   English 文档
src/pages/                    站点主页
src/components/DocVisuals/    文档视觉组件
sidebars.ts                   文档侧栏结构
docusaurus.config.ts          Docusaurus 配置
```

## 文档原则

- 以当前实现和随版本发布的配置为事实源；
- Guides 解决任务，Reference 用于精确查阅；
- 对高风险或实验性能力明确标注边界；
- 中英文核心入口和主要文档尽量同步；
- 视觉增强服务于阅读，不替代正文结构。

## 相关项目

- [WebShopX](https://github.com/Cc-Cece/WebShopX)
- [WebShopX-Payments](https://github.com/Prism-Committee/WebShopX-Payments)
- [WebShopX Issues / 文档反馈](https://github.com/Prism-Committee/WebShopX-Issues)

## 贡献

修改文档后，请至少检查中文与英文入口、站内链接和 MDX 渲染，并在提交前运行：

```bash
npm run build
```

发现 WebShopX 或文档问题，可提交到 [Prism-Committee/WebShopX-Issues](https://github.com/Prism-Committee/WebShopX-Issues)。
