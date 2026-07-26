import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export type FeatureCardItem = {
  title: string;
  description: string;
  icon?: string;
  to?: string;
  badge?: string;
};

export function FeatureCards({items}: {items: FeatureCardItem[]}) {
  return (
    <div className={styles.featureGrid}>
      {items.map((item) => {
        const body = (
          <>
            <div className={styles.cardTopline}>
              {item.icon ? <span className={styles.cardIcon}>{item.icon}</span> : null}
              {item.badge ? <span className={styles.badge}>{item.badge}</span> : null}
            </div>
            <strong className={styles.cardTitle}>{item.title}</strong>
            <span className={styles.cardDescription}>{item.description}</span>
          </>
        );

        return item.to ? (
          <Link key={item.title} className={styles.featureCard} to={item.to}>
            {body}
          </Link>
        ) : (
          <div key={item.title} className={styles.featureCard}>
            {body}
          </div>
        );
      })}
    </div>
  );
}

export type StepItem = {
  title: string;
  children: ReactNode;
};

export function Steps({items}: {items: StepItem[]}) {
  return (
    <div className={styles.steps}>
      {items.map((item, index) => (
        <div className={styles.step} key={`${index}-${item.title}`}>
          <div className={styles.stepRail}>
            <span className={styles.stepNumber}>{index + 1}</span>
            {index < items.length - 1 ? <span className={styles.stepLine} /> : null}
          </div>
          <div className={styles.stepBody}>
            <strong className={styles.stepTitle}>{item.title}</strong>
            <div className={styles.stepContent}>{item.children}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export type PlanCardItem = {
  name: string;
  price: string;
  period: string;
  description?: string;
  features?: string[];
  badge?: string;
  highlighted?: boolean;
};

export function PlanCards({items}: {items: PlanCardItem[]}) {
  return (
    <div className={styles.planGrid}>
      {items.map((item) => (
        <div
          className={`${styles.planCard} ${item.highlighted ? styles.planCardHighlighted : ''}`}
          key={item.name}>
          <div className={styles.planHeader}>
            <strong className={styles.planName}>{item.name}</strong>
            {item.badge ? <span className={styles.badge}>{item.badge}</span> : null}
          </div>
          {item.description ? <p className={styles.planDescription}>{item.description}</p> : null}
          <div className={styles.priceRow}>
            <span className={styles.price}>{item.price}</span>
            <span className={styles.period}> / {item.period}</span>
          </div>
          {item.features?.length ? (
            <ul className={styles.planFeatures}>
              {item.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function DocHero({
  eyebrow,
  title,
  description,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primary?: {label: string; to: string};
  secondary?: {label: string; to: string};
}) {
  return (
    <div className={styles.hero}>
      {eyebrow ? <span className={styles.heroEyebrow}>{eyebrow}</span> : null}
      <h2 className={styles.heroTitle}>{title}</h2>
      <p className={styles.heroDescription}>{description}</p>
      {(primary || secondary) ? (
        <div className={styles.heroActions}>
          {primary ? <Link className="button button--primary" to={primary.to}>{primary.label}</Link> : null}
          {secondary ? <Link className="button button--secondary button--outline" to={secondary.to}>{secondary.label}</Link> : null}
        </div>
      ) : null}
    </div>
  );
}
