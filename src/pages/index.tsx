import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig, i18n} = useDocusaurusContext();
  const isZh = i18n.currentLocale === 'zh-CN';

  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>PRISM-COMMITTEE · DOCUMENTATION</span>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>
            {isZh
              ? '集中查阅 WebShopX、WebShopX-Payments 的使用指南、部署说明、开发接口与技术记录。'
              : 'Documentation, deployment guides, APIs, and technical notes for WebShopX and WebShopX-Payments.'}
          </p>
          <div className={styles.heroActions}>
            <Link className="button button--primary button--lg" to="/intro">
              {isZh ? '进入文档' : 'Open documentation'}
            </Link>
            <Link className="button button--secondary button--outline button--lg" to="/webshopx/overview">
              WebShopX
            </Link>
            <Link className={styles.textLink} href="https://github.com/Prism-Committee/docs">
              GitHub <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className={styles.heroMeta}>
            <span>{isZh ? '中文 / English' : 'English / 中文'}</span>
            <span>·</span>
            <span>Docusaurus</span>
            <span>·</span>
            <span>{isZh ? '持续维护' : 'Continuously maintained'}</span>
          </div>
        </div>

        <div className={styles.heroPanel}>
          <div className={styles.heroPanelHeader}>
            <span className={styles.statusDot} />
            <span>{isZh ? '从一个项目开始' : 'Start with a project'}</span>
          </div>
          <Link className={styles.projectQuickLink} to="/webshopx/overview">
            <div>
              <strong>WebShopX</strong>
              <span>{isZh ? '商城 · 市场 · 钱包 · 管理后台' : 'Shop · Market · Wallet · Administration'}</span>
            </div>
            <span className={styles.arrow}>→</span>
          </Link>
          <Link className={styles.projectQuickLink} to="/webshopx-payments/overview">
            <div>
              <strong>WebShopX-Payments</strong>
              <span>{isZh ? '支付渠道 · 充值 · Provider API' : 'Payments · Recharge · Provider API'}</span>
            </div>
            <span className={styles.arrow}>→</span>
          </Link>
          <Link className={styles.projectQuickLink} to="/webshopx/developer/quickstart">
            <div>
              <strong>{isZh ? '开发者入口' : 'Developer quickstart'}</strong>
              <span>{isZh ? 'HTTP API 与插件集成' : 'HTTP API and plugin integration'}</span>
            </div>
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig, i18n} = useDocusaurusContext();
  const isZh = i18n.currentLocale === 'zh-CN';

  return (
    <Layout
      title={siteConfig.title}
      description={
        isZh
          ? 'Prism-Committee 的项目文档、部署指南、开发接口与技术记录。'
          : 'Project documentation, deployment guides, APIs, and technical notes by Prism-Committee.'
      }>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
