import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Building Production RAG Systems
        </Heading>
        <p className="hero__subtitle">
          The definitive guide to <strong>secure, scalable, and compliant</strong> Retrieval-Augmented Generation for Banking & Enterprise
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/chapter1-introduction-to-rag/what-is-rag">
            Start Reading 📚
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            style={{ marginLeft: '1rem' }}
            to="/docs/chapter2-rag-architecture-fundamentals/high-level-rag-architecture">
            View Architecture 🏗️
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({ title, description, icon, delay }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="feature-card text--center">
        <div className="feature-icon">{icon}</div>
        <Heading as="h3" style={{ color: 'var(--feature-text-color)', marginBottom: '1rem' }}>{title}</Heading>
        <p style={{ color: 'var(--feature-desc-color)', lineHeight: '1.6' }}>{description}</p>
      </div>
    </div>
  );
}

const FeatureList = [
  {
    title: 'Enterprise Grade',
    icon: '🏦',
    description:
      'Built for regulated industries. Covers data sovereignty, SOC2 compliance, PII protection, and comprehensive audit logging.',
  },
  {
    title: 'Production Ready',
    icon: '⚙️',
    description:
      '120+ tested code examples, scalability patterns, and operational best practices. From prototype to production.',
  },
  {
    title: 'Advanced Techniques',
    icon: '🧠',
    description:
      'Master Agentic workflows, Self-RAG, GraphRAG, Multi-modal retrieval, and cutting-edge RAG architectures.',
  },
];

function StatsSection() {
  const stats = [
    { number: '80K+', label: 'Words of Content' },
    { number: '120+', label: 'Code Examples' },
    { number: '10+', label: 'Chapters' },
    { number: '100%', label: 'Production Ready' },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="row">
          {stats.map((stat, idx) => (
            <div key={idx} className="col col--3">
              <div className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="RAG Book - Enterprise Guide"
      description="Comprehensive guide to building production RAG systems for banking and enterprise">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} delay={idx * 0.1} />
              ))}
            </div>
          </div>
        </section>
        <StatsSection />
      </main>
    </Layout>
  );
}
