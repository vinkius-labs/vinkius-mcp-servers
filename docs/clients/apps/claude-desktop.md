---
title: "Connect MCP Server to Claude Desktop — Setup Guide | Vinkius"
description: "Step-by-step guide to connect your Vinkius Cloud MCP server to Claude Desktop. Native MCP host by Anthropic with Chat/Cowork/Code modes, Desktop Extensions (.mcpb), Projects, Artifacts, and Sonnet 4.6."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Claude Desktop — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Connect your Vinkius Cloud MCP server to Claude Desktop. Native MCP with Desktop Extensions."
  - - meta
    - name: keywords
      content: "Claude Desktop MCP, MCP Claude Desktop, Claude MCP server, connect MCP server Claude, Vinkius Claude Desktop, Claude Desktop Extensions, Claude Cowork mode"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does Claude Desktop support MCP?","acceptedAnswer":{"@type":"Answer","text":"Yes. Claude Desktop is the original MCP host, created by Anthropic who invented MCP. It supports Desktop Extensions (.mcpb files) for one-click MCP server installation and manual mcp.json configuration for remote servers."}},{"@type":"Question","name":"What are the three modes in Claude Desktop?","acceptedAnswer":{"@type":"Answer","text":"Chat (conversational with system-wide hotkey), Cowork (autonomous agent for research, file organization, document generation using sub-agents in a sandboxed VM), and Code (interactive IDE with diff review, live previews, GitHub PR monitoring, and auto-fix)."}},{"@type":"Question","name":"What are Desktop Extensions?","acceptedAnswer":{"@type":"Answer","text":"Packaged .mcpb files that enable one-click installation of MCP servers. They simplify connecting Claude to file systems, calendars, emails, messaging apps, and other local tools."}},{"@type":"Question","name":"What is the latest Claude model?","acceptedAnswer":{"@type":"Answer","text":"Sonnet 4.6 (February 2026). Opus 4.5 was released November 2025. Both offer enhanced coding, agent, and professional capabilities."}}]}'
---

# Claude Desktop

Connect your Vinkius Cloud MCP server to **Claude Desktop**, the app built by **Anthropic** — the company that **invented MCP**. As the original MCP host, Claude Desktop provides the most integrated MCP experience: **Desktop Extensions** (`.mcpb` one-click install), three operational modes (**Chat**, **Cowork**, **Code**), **Projects**, **Artifacts**, and the latest **Sonnet 4.6** model.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#d4a574,#c8956c);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#1a1a2e;flex-shrink:0">Cl</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Claude Desktop</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">by Anthropic · <a href="https://claude.ai" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">claude.ai</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">macOS · Windows</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Desktop Extensions (.mcpb)</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MODEL</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Sonnet 4.6 (Feb 2026)</div></div>
</div>
</div>

## Why Claude Desktop for MCP

Claude Desktop is the **reference MCP implementation**, built by the company that created the protocol. It sets the standard for how MCP should work — Desktop Extensions make installation one-click, Cowork mode uses MCP tools autonomously, and Code mode leverages tools for IDE-grade development.

**What makes Claude Desktop unique for MCP:**
- **The original MCP host** — Built by Anthropic, who invented MCP. Reference implementation for all other clients
- **Desktop Extensions** — `.mcpb` files for one-click MCP server installation. Connect to file systems, calendars, emails, messaging, and databases
- **Three modes** — **Chat** (conversational, system-wide hotkey), **Cowork** (autonomous agent with sub-agents in sandboxed VM), **Code** (interactive IDE with diff review, live previews, GitHub PR auto-fix/merge)
- **Projects** — Organize conversations, documents, and MCP tools into dedicated workspaces
- **Artifacts** — Interactive outputs in a live side panel: code, dashboards, visualizations, reports. Persistent, editable, AI-embeddable. Available on free tier
- **Sonnet 4.6** — Latest model (February 2026) with enhanced coding and agent capabilities. Opus 4.5 (November 2025) for advanced reasoning
- **Cowork sub-agents** — Autonomous mode spawns task-specific sub-processes in an isolated VM for complex projects
- **Code mode** — Local/SSH/cloud environments, visual diff review with inline comments, live previews, Git history management
- **GitHub integration** — PR monitoring, auto-fix, auto-merge from within Code mode
- **Enterprise deployment** — MSIX (Windows) / PKG (Mac) installers with admin controls
- **Cross-device sync** — Conversations, Projects, and preferences sync across desktop, web, and mobile

## Quick Connect

### 1. Create a Connection Token

In [Vinkius Cloud](https://cloud.vinkius.com), open your server's **Dashboard → Connection Tokens** and create a new token. Copy the generated URL:

```
https://edge.vinkius.com/{TOKEN}/mcp
```

### 2. Configure MCP in Claude Desktop

Open **Claude Desktop** → **Settings** → **Developer** → **Edit Config**. Add your Vinkius Cloud server:

```json
{
  "mcpServers": {
    "vinkius": {
      "url": "https://edge.vinkius.com/{TOKEN}/mcp"
    }
  }
}
```

### 3. Use in Any Mode

- **Chat** — Ask questions that invoke MCP tools naturally
- **Cowork** — Let Claude autonomously use your tools for multi-step tasks
- **Code** — Reference MCP data while coding with live diff review

---

## FAQ

**Does Claude Desktop support MCP?**
Yes. It's the original MCP host by Anthropic who created MCP. Desktop Extensions (.mcpb) + manual config.

**What are the three modes?**
Chat (conversational), Cowork (autonomous agent with sub-agents), Code (interactive IDE with diffs and previews).

**What is the latest model?**
Sonnet 4.6 (February 2026). Opus 4.5 (November 2025) for advanced reasoning.

**Are Artifacts free?**
Yes. Projects and Artifacts are available on all Claude plans, including free.
