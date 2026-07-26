# Prism's Docs

Prism-Committee 的统一文档站，基于 [Docusaurus](https://docusaurus.io/) 构建。

当前主要维护：

- **WebShopX**：玩家指南、安装部署、服务器管理、Relay、公用 API 与开发参考；
- **WebShopX-Payments**：支付扩展的安装、支付渠道配置与 Provider 开发资料；

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

## 主要目录：

```text
docs/                         中文文档
i18n/en/...                   English 文档
src/pages/                    站点主页
src/components/DocVisuals/    文档视觉组件
sidebars.ts                   文档侧栏结构
docusaurus.config.ts          Docusaurus 配置
```

## 相关项目

- [WebShopX](https://github.com/Prism-Committee/WebShopX-Issues)
- [WebShopX-Payments](https://github.com/Prism-Committee/WebShopX-Payments)

## 贡献

修改文档后，请至少检查中文与英文入口、站内链接和 MDX 渲染，并在提交前运行：

```bash
npm run build
```

发现 WebShopX 或文档问题，可提交到 [Prism-Committee/WebShopX-Issues](https://github.com/Prism-Committee/WebShopX-Issues)。
