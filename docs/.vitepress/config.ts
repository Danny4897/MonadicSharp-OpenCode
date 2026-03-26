import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'MonadicSharp for OpenCode',
  description: 'Structural guarantee that AI-generated C# code does not break in production — integrated directly into OpenCode.',
  base: '/MonadicSharp-OpenCode/',
  cleanUrls: true,

  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'MonadicSharp × OpenCode',

    nav: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'How It Works', link: '/how-it-works' },
        ],
      },
      {
        text: 'Commands',
        items: [
          { text: '/forge-analyze', link: '/commands/forge-analyze' },
          { text: '/green-check', link: '/commands/green-check' },
          { text: '/migrate', link: '/commands/migrate' },
        ],
      },
      {
        text: 'Green Code',
        items: [
          { text: 'What is Green Code?', link: '/green-code' },
          { text: 'ROL Patterns', link: '/rol-patterns' },
        ],
      },
      {
        text: 'Ecosystem',
        items: [
          { text: 'MonadicSharp Core', link: 'https://danny4897.github.io/MonadicSharp/' },
          { text: 'MonadicLeaf CLI', link: 'https://danny4897.github.io/MonadicLeaf/' },
        ],
      },
    ],

    sidebar: {
      '/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/getting-started' },
            { text: 'How It Works', link: '/how-it-works' },
          ],
        },
        {
          text: 'Commands',
          items: [
            { text: '/forge-analyze', link: '/commands/forge-analyze' },
            { text: '/green-check', link: '/commands/green-check' },
            { text: '/migrate', link: '/commands/migrate' },
          ],
        },
        {
          text: 'Green Code',
          items: [
            { text: 'What is Green Code?', link: '/green-code' },
            { text: 'ROL Patterns', link: '/rol-patterns' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Danny4897/MonadicSharp-OpenCode' },
    ],

    search: { provider: 'local' },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024–2026 Danny4897',
    },

    outline: { level: [2, 3], label: 'On this page' },
  },

  markdown: {
    theme: { light: 'github-light', dark: 'one-dark-pro' },
  },
})
