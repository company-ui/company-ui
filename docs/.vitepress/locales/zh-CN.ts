// @ts-ignore
import { version } from '../../../package.json';

export default {
  outlineTitle: '本页目录',
  lastUpdatedText: '上次更新',
  nav: [
    { text: '指南', link: '/zh/guide/what-is-this', activeMatch: '/guide/' },
    {
      text: '组件',
      activeMatch: '/zh/components/',
      items: [
        {
          text: 'Vue',
          link: '/zh/components/vue/overview',
        },
        {
          text: 'React',
          link: '/zh/components/react/overview',
        },
        {
          text: 'Dom',
          link: '/zh/components/dom/overview',
        },
      ],
    },
    // { text: '配置项', link: '/zh/config/', activeMatch: '/config/' },
    {
      text: version,
      items: [
        {
          text: '更新日志',
          link: 'https://github.com/company-ui/company-ui/blob/main/packages/core/CHANGELOG.md',
        },
      ],
    },
  ],
  sidebar: {
    '/zh/guide': [
      {
        text: '向导',
        // collapsible: true,
        items: [
          { text: '介绍', link: '/zh/guide/what-is-this' },
          { text: '开始使用', link: '/zh/guide/getting-started' },
          // { text: '示例', link: 'zh/guide/example' },
        ],
      },
    ],
    '/zh/components/vue/': [
      { text: 'Vue 概览', link: '/zh/components/vue/overview' },
      {
        text: '组件',
        items: [{ text: 'AutoComplete 自动完成', link: '/zh/components/vue/autocomplete' }],
      },
    ],
    '/zh/components/react/': [
      { text: 'React 概览', link: '/zh/components/react/overview' },
      {
        text: '组件',
        items: [{ text: 'AutoComplete 自动完成', link: '/zh/components/react/autocomplete' }],
      },
    ],
    '/zh/components/dom/': [
      { text: 'Dom 概览', link: '/zh/components/dom/overview' },
      {
        text: '组件',
        items: [{ text: 'AutoComplete 自动完成', link: '/zh/components/dom/autocomplete' }],
      },
    ],
    '/zh/config': [
      {
        text: '配置',
        // collapsible: true,
        items: [{ text: '基础配置项', link: '/zh/config/' }],
      },
    ],
  },
  footer: {
    message: '本中文文档内容版权为 Michael Sun 所有，保留所有权利。',
  },
};
