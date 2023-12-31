// @ts-ignore
import { version } from '../../package.json';
import zh_CN from './locales/zh-CN';

export default {
  title: 'Company UI',
  description: 'A company UI library',
  base: '/company-ui/',
  head: [
    ['link', { rel: 'shortcut icon', href: '/company-ui/favicons/favicon-64x64.png' }],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/company-ui/favicons/apple-touch-icon.png',
      },
    ],
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Guide', link: '/guide/what-is-this', activeMatch: '/guide/' },
      {
        text: 'Components',
        activeMatch: '/components/',
        items: [
          {
            text: 'Vue',
            link: '/components/vue/overview',
          },
          {
            text: 'React',
            link: '/components/react/overview',
          },
          {
            text: 'Dom',
            link: '/components/dom/overview',
          },
        ],
      },
      // { text: 'Configs', link: '/config/', activeMatch: '/config/' },
      {
        text: version,
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/company-ui/company-ui/blob/main/packages/core/CHANGELOG.md',
          },
        ],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/company-ui/company-ui' }],
    sidebar: {
      '/guide': [
        {
          text: 'Guide',
          // collapsible: true,
          items: [
            { text: 'Introduce', link: '/guide/what-is-this' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            // { text: 'Example', link: '/guide/example' },
          ],
        },
      ],
      '/components/vue/': [
        { text: 'Vue Overview', link: '/components/vue/overview' },
        {
          text: 'Component',
          items: [{ text: 'AutoComplete', link: '/components/vue/autocomplete' }],
        },
      ],
      '/components/react/': [
        { text: 'React Overview', link: '/components/react/overview' },
        {
          text: 'Component',
          items: [{ text: 'AutoComplete', link: '/components/react/autocomplete' }],
        },
      ],
      '/components/dom/': [
        { text: 'Dom Overview', link: '/components/dom/overview' },
        {
          text: 'Component',
          items: [{ text: 'AutoComplete', link: '/components/dom/autocomplete' }],
        },
      ],
      '/config': [
        {
          text: 'Config',
          // collapsible: true,
          items: [{ text: 'Basic Config', link: '/config/' }],
        },
      ],
    },
    // algolia: {
    //   appId: 'V6CF28P0PS',
    //   apiKey: '692752b7b3c6f794997d8ae22aed79fa',
    //   indexName: 'dev_docs'
    // },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present Michael Sun',
    },
    localeLinks: {
      text: 'English',
      items: [
        { text: 'English', link: '/' },
        { text: '简体中文', link: '/zh/' },
      ],
    },
  },
  markdown: {
    // lineNumbers: true
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: zh_CN,
    },
  },
};
