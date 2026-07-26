import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { docusaurusVersion } from '@generated/site-metadata';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const repository = process.env.GITHUB_REPOSITORY ?? '';
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER ?? 'Prism-Committee';
const repositoryName = repository.split('/')[1] ?? 'docs';
const isUserOrOrgPagesRepo = repositoryName.endsWith('.github.io');
const githubPagesUrl = `https://${repositoryOwner}.github.io`;
const githubPagesBaseUrl = isUserOrOrgPagesRepo ? '/' : `/${repositoryName}/`;

const config: Config = {
  title: "Prism's Docs",
  tagline: "Prism-Committee's Docs",
  favicon: 'img/favicon.ico',
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  future: {
    v4: true,
  },

  url: 'https://docs.akihito.dpdns.org',
  baseUrl: '/',
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-5TcZemv2l/9On385z///+d7MSYlvIEw9FuZTIdZ14vJLqWphw7e7ZPuOiCHJcFCP',
      crossorigin: 'anonymous',
    },
  ],

  organizationName: 'Prism-Committee',
  projectName: 'docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editUrl:
            'https://github.com/Prism-Committee/docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/Prism-Committee/docs/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Prism's Docs",
      logo: {
        alt: "Prism-Committee's Docs Logo",
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        {to: '/blog', label: '博客', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/Prism-Committee',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '快速开始',
              to: '/intro',
            },
          ],
        },
        {
          title: '友情链接',
          items: [
            {
              label: 'Modrinth',
              href: 'https://modrinth.com/user/Cc-Cece',
            },
            {
              label: 'CurseForge',
              href: 'https://www.curseforge.com/members/cc_cece/projects',
            },
            {
              label: 'MC百科',
              href: 'https://center.mcmod.cn/844177/',
            },
            {
              label: 'MineBBS',
              href: 'https://www.minebbs.com/members/kanbara.252625/#resources',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Prism-Committee',
            },
          ],
        },
      ],
      copyright: `Copyright (c) ${new Date().getFullYear()} Prism-Committee`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
