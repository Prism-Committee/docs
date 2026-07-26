import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

type ProjectCard = {
  title: string;
  description: string;
  badge: string;
  icon: string;
  to: string;
  secondaryTo: string;
  secondaryLabel: string;
};

function getProjects(isZh: boolean): ProjectCard[] {
  return [
    {
      title: 'WebShopX',
      description: isZh
        ? '面向 Minecraft 服务端的 Web 商城系统，覆盖商城、玩家市场、钱包、订单、发货与管理后台。'
        : 'A web-first shop system for Minecraft servers with shop, player market, wallets, orders, delivery, and administration.',
      badge: isZh ? '核心项目' : 'Core project',
      icon: '🛍️',
      to: '/webshopx/overview',
      secondaryTo: '/webshopx/admin/install-deploy',
      secondaryLabel: isZh ? '安装与部署' : 'Install & deploy',
    },
    {
      title: 'WebShopX-Payments',
      description: isZh
        ? 'WebShopX 的独立支付扩展，用于接入支付渠道、充值流程与第三方 Payment Provider。'
        : 'The payment extension for WebShopX, covering payment channels, recharge flows, and third-party payment providers.',
      badge: isZh ? '支付扩展' : 'Payment extension',
      icon: '💳',
      to: '/webshopx-payments/overview',
      secondaryTo: '/webshopx/webshopx-payment-api',
      secondaryLabel: 'Payment API',
    },
  ];
}

export default function HomepageFeatures(): ReactNode {
  const {i18n} = useDocusaurusContext();
  const isZh = i18n.currentLocale === 'zh-CN';
  const projects = getProjects(isZh);

  return (
    <>
      <section className={styles.projectsSection}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>{isZh ? '项目' : 'Projects'}</span>
            <Heading as="h2">{isZh ? '选择你要使用的项目' : 'Choose a project'}</Heading>
            <p>{isZh ? '先进入项目，再按任务选择教程、管理、开发或参考资料。' : 'Enter a project first, then choose guides, administration, development, or reference material.'}</p>
          </div>
          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <article className={styles.projectCard} key={project.title}>
                <div className={styles.projectTopline}>
                  <span className={styles.projectIcon}>{project.icon}</span>
                  <span className={styles.projectBadge}>{project.badge}</span>
                </div>
                <Heading as="h3">{project.title}</Heading>
                <p>{project.description}</p>
                <div className={styles.projectActions}>
                  <Link className="button button--primary" to={project.to}>
                    {isZh ? '查看文档' : 'Open docs'}
                  </Link>
                  <Link className="button button--secondary button--outline" to={project.secondaryTo}>
                    {project.secondaryLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.siteSection}>
        <div className="container">
          <div className={styles.siteGrid}>
            <div className={styles.siteItem}>
              <span>⌘</span>
              <div>
                <strong>{isZh ? '文档集中管理' : 'Centralized documentation'}</strong>
                <p>{isZh ? '使用说明、部署记录、开发接口与排障经验集中维护。' : 'Keep usage, deployment, APIs, and troubleshooting knowledge in one place.'}</p>
              </div>
            </div>
            <div className={styles.siteItem}>
              <span>文</span>
              <div>
                <strong>{isZh ? '中英双语' : 'Chinese & English'}</strong>
                <p>{isZh ? '核心入口与主要文档同步提供中文和英文版本。' : 'Core entry points and primary documentation are maintained in both languages.'}</p>
              </div>
            </div>
            <div className={styles.siteItem}>
              <span>↻</span>
              <div>
                <strong>{isZh ? '持续维护' : 'Continuously maintained'}</strong>
                <p>{isZh ? '文档跟随项目更新，保留版本变化和问题处理经验。' : 'Documentation follows project changes and preserves version and troubleshooting history.'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
