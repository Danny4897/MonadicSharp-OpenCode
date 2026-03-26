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
          {
            text: 'Core',
            items: [
              { text: 'MonadicSharp', link: 'https://danny4897.github.io/MonadicSharp/' },
              { text: 'MonadicSharp.Framework', link: 'https://danny4897.github.io/MonadicSharp.Framework/' },
            ],
          },
          {
            text: 'Extensions',
            items: [
              { text: 'MonadicSharp.AI', link: 'https://danny4897.github.io/MonadicSharp.AI/' },
              { text: 'MonadicSharp.Recovery', link: 'https://danny4897.github.io/MonadicSharp.Recovery/' },
              { text: 'MonadicSharp.Azure', link: 'https://danny4897.github.io/MonadicSharp.Azure/' },
              { text: 'MonadicSharp.DI', link: 'https://danny4897.github.io/MonadicSharp.DI/' },
            ],
          },
          {
            text: 'Tooling',
            items: [
              { text: 'MonadicLeaf', link: 'https://danny4897.github.io/MonadicLeaf/' },
              { text: 'MonadicSharp × OpenCode', link: 'https://danny4897.github.io/MonadicSharp-OpenCode/' },
              { text: 'AgentScope', link: 'https://danny4897.github.io/AgentScope/' },
            ],
          },
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
