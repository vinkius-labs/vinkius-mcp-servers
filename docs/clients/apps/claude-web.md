---
title: "Connect MCP Server to Claude Web — Setup Guide | Vinkius"
description: "Add MCP servers to Claude.ai, Anthropic's web-based AI assistant. Extended thinking, Artifacts, Projects, and MCP integration for tool-augmented conversations."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Claude Web — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Claude.ai. Extended thinking, Artifacts, and MCP tool access."
  - - meta
    - name: keywords
      content: "Claude MCP, MCP Claude web, Claude.ai MCP, connect MCP server Claude, Vinkius Claude, Claude Anthropic MCP, Claude extended thinking"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Claude Web","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add server","text":"In Claude.ai settings, add your MCP server URL."},{"@type":"HowToStep","name":"Chat","text":"Claude uses extended thinking + MCP tools for comprehensive answers."}]}'
---

# Claude Web

Claude.ai is Anthropic's web-based AI assistant. Its **extended thinking** mode shows Claude's step-by-step reasoning process before delivering an answer. **Artifacts** let Claude create documents, code, and visualizations in a side panel. Adding MCP tools means Claude can ground its reasoning in real data from your systems.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#d97706,#b45309);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Cl</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Claude Web</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Anthropic · <a href="https://claude.ai" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">claude.ai</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web · iOS · Android</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Settings Panel</div></div>
</div>
</div>

## Extended Thinking + Real-Time Data

Claude's extended thinking mode shows the reasoning chain before answering. When MCP tools are connected, this chain includes tool calls — you can watch Claude decide what data it needs, fetch it through MCP, interpret the results, and compose an answer. The transparency is unprecedented.

**Projects** organize conversations with persistent context. Add your MCP server to a project, and every conversation in that project has tool access. Pair this with uploaded documents for a knowledge base that combines static files and live MCP data.

Key features:

- **Extended thinking** — visible reasoning chain including MCP tool calls
- **Artifacts** — interactive code, documents, and visualizations in a side panel
- **Projects** — persistent context with document uploads and shared MCP tools
- **200K context** — long conversations that maintain coherence
- **Multi-modal** — image analysis, PDF processing, and data visualization
- **Team workspaces** — shared access to tools and conversations for organizations

## Connection Guide

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add in Settings

In Claude.ai → **Settings** → **MCP Servers** → **Add**. Paste your URL:

```
https://edge.vinkius.com/{TOKEN}/mcp
```

### 3. Use in Conversations

Ask Claude questions that need external data. With extended thinking, you can see exactly when and why Claude calls each MCP tool.

---

## FAQ

**Can I see MCP tool calls in extended thinking?**
Yes. Extended thinking shows when Claude decides to call an MCP tool, what parameters it uses, and how it interprets the results — full transparency.

**Do Projects work with MCP?**
Yes. Attach MCP servers to Projects so all conversations within that Project can access the same tools.

**Is Claude Web available on mobile?**
Yes. Claude is available on iOS and Android. MCP tools configured on the web are accessible on mobile.

**Which plans support MCP?**
MCP is available on Claude Pro and Team plans.
