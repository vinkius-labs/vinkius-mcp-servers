---
title: "Connect MCP Server to Sourcegraph Cody — Setup Guide | Vinkius"
description: "Add MCP servers to Sourcegraph Cody, the AI assistant with cross-repository code intelligence. Codebase-wide context, multi-repo search, and MCP tool integration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Sourcegraph Cody — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Cody. Cross-repo code intelligence with MCP tools."
  - - meta
    - name: keywords
      content: "Sourcegraph Cody MCP, MCP Cody, Cody AI MCP, connect MCP server Cody, Vinkius Cody, Sourcegraph AI"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Sourcegraph Cody","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP server in Cody extension settings."},{"@type":"HowToStep","name":"Code","text":"Cody uses cross-repo intelligence and MCP tools together."}]}'
---

# Sourcegraph Cody

Sourcegraph Cody is an AI coding assistant powered by **cross-repository code intelligence**. While other assistants see only the current project, Cody searches your entire codebase — across all repositories — to find relevant code, patterns, and usage examples. MCP tools add external system data to this already comprehensive codebase understanding.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#ff5543,#a112ff);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Cy</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Sourcegraph Cody</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Sourcegraph · <a href="https://sourcegraph.com/cody" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">sourcegraph.com/cody</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">VS Code · JetBrains · Web</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Extension Settings</div></div>
</div>
</div>

## Cross-Repository Intelligence Meets MCP

Cody's context engine is powered by Sourcegraph's code search index. Ask "how is authentication implemented?" and Cody finds the relevant code across your organization's repos — not just the one you have open. This cross-repo awareness makes Cody especially powerful for microservice architectures and monorepos.

MCP tools complement this by adding non-code context: deployment configurations, monitoring data, issue tracker statuses, and documentation stored outside your repos.

Features:

- **Cross-repo search** — find code patterns across all repositories
- **Context engine** — automatic relevance ranking for code snippets
- **VS Code + JetBrains + Web** — multiple editor support
- **Agent mode** — autonomous multi-step coding
- **Multi-model** — Claude, GPT, Gemini, and Mixtral
- **Custom commands** — reusable prompt workflows
- **Enterprise** — self-hosted and cloud deployments
- **Open-source** — Cody client is Apache 2.0

## Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Server

In the Cody extension → **Settings** → **MCP** → add your Vinkius URL.

### 3. Search + Tools

Cody uses cross-repo intelligence and MCP tools together for complete context.

---

## FAQ

**Can Cody search across all my repositories?**
Yes. Powered by Sourcegraph's code search index, Cody finds relevant code across your entire organization.

**Does Cody work in JetBrains?**
Yes. The extension is available for VS Code, JetBrains IDEs, and the web interface.

**Can I self-host Cody?**
Yes. Sourcegraph offers self-hosted enterprise deployments.

**Is Cody free?**
Free tier for individuals. Enterprise plans for teams.
