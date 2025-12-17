import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'RAG Book - Enterprise Guide',
  tagline: 'Comprehensive Guide to Building Production RAG Systems for Banking & Enterprise',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: '../docs',  // Point to your RAG book content
          sidebarPath: './sidebars.ts',
          // Remove edit links
          editUrl: undefined,
        },
        blog: false,  // Disable blog since we're focusing on the book
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'RAG Book',
      logo: {
        alt: 'RAG Book Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Book Chapters',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Book Chapters',
          items: [
            {
              label: 'Introduction to RAG',
              to: '/docs/chapter1-introduction-to-rag/what-is-rag',
            },
            {
              label: 'RAG Architecture',
              to: '/docs/chapter2-rag-architecture-fundamentals/high-level-rag-architecture',
            },
            {
              label: 'Vector Databases',
              to: '/docs/chapter3-vector-databases-embeddings/understanding-vector-embeddings',
            },
          ],
        },
        {
          title: 'Advanced Topics',
          items: [
            {
              label: 'Advanced RAG Techniques',
              to: '/docs/chapter4-advanced-rag-techniques/query-decomposition',
            },
            {
              label: 'Prompt Engineering',
              to: '/docs/chapter5-prompt-engineering-rag/prompt-design-patterns',
            },
            {
              label: 'Evaluation & Monitoring',
              to: '/docs/chapter6-evaluation-monitoring/rag-evaluation-frameworks',
            },
          ],
        },
      ],
      copyright: `RAG Book - Enterprise Guide to Production RAG Systems © ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
