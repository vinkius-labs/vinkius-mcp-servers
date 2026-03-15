---
title: "Connect MCP Server to TeamSpark — Setup Guide | Vinkius"
description: "Add MCP servers to TeamSpark, the AI-powered team collaboration platform. Shared AI assistants, team knowledge bases, and MCP tool access for workgroups."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to TeamSpark — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to TeamSpark. Team AI collaboration with shared MCP tools."
  - - meta
    - name: keywords
      content: "TeamSpark MCP, MCP TeamSpark, TeamSpark AI team MCP, connect MCP server TeamSpark, Vinkius TeamSpark"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to TeamSpark","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add","text":"Configure MCP server in TeamSpark workspace settings."},{"@type":"HowToStep","name":"Collaborate","text":"Team members share AI conversations with MCP tool access."}]}'
---

# TeamSpark

TeamSpark is a team collaboration platform built around shared AI assistants. Unlike individual AI clients, TeamSpark is designed for workgroups — shared conversations, team knowledge bases, and centralized tool configurations. MCP servers configured by an admin are available to all team members, ensuring consistent access to the same data sources.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#10b981,#059669);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">TS</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">TeamSpark</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Team AI Platform</div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web · Team</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Workspace Settings</div></div>
</div>
</div>

## Shared AI Assistants with Team-Wide MCP Access

TeamSpark centralizes AI tool management for teams. An admin configures MCP servers once in workspace settings, and every team member gets access. Conversations can be shared, forked, or referenced — creating a team knowledge base of AI interactions with real data.

Features:

- **Team workspaces** — shared AI environment for workgroups
- **Centralized MCP** — admin configures tools for the entire team
- **Shared conversations** — share, reference, and fork AI conversations
- **Knowledge base** — team-wide repository of AI interactions
- **Role-based access** — control who accesses which MCP tools
- **Multi-provider** — supports multiple LLM providers

## Team Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Configure Workspace

In TeamSpark → **Workspace Settings** → **MCP Servers** → **Add**. Paste your URL.

### 3. Team Access

All workspace members can now use MCP tools in their conversations.

---

## FAQ

**Can I control who accesses which MCP tools?**
Yes. Role-based access lets admins assign specific MCP tool access to different team roles.

**Can team members share AI conversations?**
Yes. Conversations including MCP tool results can be shared, forked, and referenced by team members.

**Is TeamSpark for individual use?**
TeamSpark is designed for team collaboration. Individual users may prefer a personal AI client.

**Is TeamSpark free?**
Free tier for small teams. Paid plans for larger workgroups and advanced features.
