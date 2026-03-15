import { defineConfig } from 'vitepress'
import type MarkdownIt from 'markdown-it'

/**
 * Adds rel="nofollow noopener noreferrer" + target="_blank" to external
 * markdown links EXCEPT those pointing to *.vinkius.com or vurb-ts repos.
 */
function nofollowExternalLinks(md: MarkdownIt) {
  const defined = ['vinkius.com', 'vinkius-labs.github.io']
  const defaultRender =
    md.renderer.rules.link_open ||
    function (tokens, idx, options, _env, self) {
      return self.renderToken(tokens, idx, options)
    }

  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    const hrefIndex = tokens[idx].attrIndex('href')
    if (hrefIndex >= 0) {
      const href = tokens[idx].attrs![hrefIndex][1]
      if (/^https?:\/\//.test(href)) {
        try {
          const hostname = new URL(href).hostname
          const isAllowed = defined.some(
            (d) => hostname === d || hostname.endsWith('.' + d)
          )
          if (!isAllowed) {
            tokens[idx].attrSet('rel', 'nofollow noopener noreferrer')
            tokens[idx].attrSet('target', '_blank')
          }
        } catch { /* malformed URL — skip */ }
      }
    }
    return defaultRender(tokens, idx, options, env, self)
  }
}

export default defineConfig({
  title: 'Vinkius Cloud',
  description: 'The Governance Layer for MCP Servers. Deploy, secure, and monitor MCP servers from a single dashboard.',
  base: '/vinkius-mcp-servers/',
  cleanUrls: true,
  appearance: 'force-dark',

  markdown: {
    config: (md) => {
      md.use(nofollowExternalLinks)
    }
  },

  sitemap: {
    hostname: 'https://vinkius-labs.github.io/vinkius-mcp-servers'
  },

  head: [
    // Favicons
    ['link', { rel: 'icon', type: 'image/x-icon', href: 'https://site-assets.vinkius.com/vk/favicon/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: 'https://site-assets.vinkius.com/vk/favicon/favicon-96x96.png' }],

    // PWA & Apple
    ['meta', { name: 'theme-color', content: '#000000' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Vinkius Cloud' }],
    ['meta', { name: 'application-name', content: 'Vinkius Cloud' }],

    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Vinkius Cloud — The Governance Layer for MCP Servers' }],
    ['meta', { property: 'og:description', content: 'Deploy, secure, and monitor MCP servers from a single dashboard. Built-in DLP, FinOps, and zero-config OpenAPI import.' }],
    ['meta', { property: 'og:url', content: 'https://vinkius-labs.github.io/vinkius-mcp-servers' }],

    // Twitter
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Vinkius Cloud — The Governance Layer for MCP Servers' }],
    ['meta', { name: 'twitter:description', content: 'Deploy, secure, and monitor MCP servers from a single dashboard.' }],

    // JSON-LD
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      'name': 'Vinkius Cloud',
      'description': 'The Governance Layer for MCP Servers. Deploy, secure, and monitor Model Context Protocol servers with built-in DLP, FinOps, and zero-config import.',
      'url': 'https://vinkius-labs.github.io/vinkius-mcp-servers',
      'applicationCategory': 'DeveloperApplication',
      'operatingSystem': 'Web',
      'publisher': {
        '@type': 'Organization',
        'name': 'Vinkius Labs',
        'url': 'https://github.com/vinkius-labs',
        'logo': 'https://site-assets.vinkius.com/vk/icon-v-black-min.png'
      },
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD',
        'availability': 'https://schema.org/InStock'
      }
    })]
  ],

  themeConfig: {
    logo: { src: 'https://site-assets.vinkius.com/vk/logo-black-min.png', width: 120, height: 28 },
    siteTitle: false,

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Get Started', link: '/getting-started' },
      { text: 'Deploy', link: '/deploying-servers' },
      { text: 'Vinkius Cloud', link: 'https://cloud.vinkius.com' },
    ],

    sidebar: [
      {
        text: 'Get Started',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Quick Connect', link: '/quick-connect' },
        ]
      },
      {
        text: 'Deploy Servers',
        collapsed: true,
        items: [
          { text: 'How to Deploy', link: '/deploying-servers' },
          { text: 'OpenAPI Import', link: '/deploy-openapi' },
          { text: 'Manual API', link: '/deploy-manual-api' },
          { text: 'Agent Skills', link: '/deploy-agent-skills' },
        ]
      },
      {
        text: 'Server Management',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/servers/' },
          { text: 'Dashboard', link: '/servers/dashboard' },
          { text: 'Connection Tokens', link: '/servers/tokens' },
          { text: 'MCP Tools', link: '/servers/tools' },
          { text: 'Edge Deployments', link: '/servers/deployments' },
          { text: 'Audit Logs', link: '/servers/logs' },
        ]
      },
      {
        text: 'Security',
        collapsed: true,
        items: [
          { text: 'Security Overview', link: '/security/' },
          { text: 'Kill Switch (40ms)', link: '/security/kill-switch' },
          { text: 'DLP — PII Redaction', link: '/security/dlp' },
          { text: 'V8 Sandbox + SSRF', link: '/security/sandbox' },
          { text: 'Credential Vault', link: '/security/credential-vault' },
          { text: 'Audit Log', link: '/security/audit-log' },
        ]
      },
      {
        text: 'Settings',
        collapsed: true,
        items: [
          { text: 'Settings Overview', link: '/settings/' },
          { text: 'MCP Defaults', link: '/settings/mcp-defaults' },
          { text: 'Data Shielding (DLP)', link: '/settings/dlp' },
          { text: 'FinOps Guard', link: '/settings/finops' },
          { text: 'Profile & Account', link: '/settings/profile' },
          { text: 'Plans & Billing', link: '/settings/billing' },
        ]
      },
      {
        text: 'Clients',
        collapsed: true,
        items: [
          { text: 'IDEs', link: '/clients/ides/' },
          { text: 'Apps', link: '/clients/apps/' },
          { text: 'CLI', link: '/clients/cli/' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vinkius-labs/vinkius-mcp-servers' }
    ]
  }
})
