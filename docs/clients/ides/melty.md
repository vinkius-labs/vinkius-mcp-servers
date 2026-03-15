---
title: "Connect MCP Server to Melty — Setup Guide | Vinkius"
description: "Add MCP servers to Melty, the open-source AI code editor with change awareness. Melty watches every file change and adapts AI behavior accordingly."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Melty — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Melty. Change-aware AI editing with MCP tool access."
  - - meta
    - name: keywords
      content: "Melty MCP, MCP Melty, Melty AI editor MCP, connect MCP server Melty, Vinkius Melty"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Melty","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP server in Melty settings."},{"@type":"HowToStep","name":"Code","text":"AI adapts to your change patterns and uses MCP tools contextually."}]}'
---

# Melty

Melty is an open-source AI code editor that tracks **every change you make** — file edits, Git diffs, terminal commands, and MCP tool calls. This change-aware context means the AI understands not just your code, but the evolution of your code. It sees that you refactored a function, then updated the tests, and suggests the third step automatically.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#ec4899,#db2777);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Me</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Melty</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://melty.sh" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">melty.sh</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Settings</div></div>
</div>
</div>

## Change-Aware AI Coding

Features:
- **Change tracking** — AI sees every edit, diff, and command
- **Git integration** — understands your commit history and branch context
- **Conversational coding** — chat-driven code generation
- **VS Code based** — familiar interface and extension compatibility
- **Multi-model** — Claude, GPT, and other providers
- **Open-source** — community-driven

## Setup

### 1. Create a Token
In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Server
In Melty → **Settings** → **MCP** → add your URL.

### 3. Change-Aware Context
AI uses MCP + change history for context-rich coding.

---

## FAQ

**What does "change-aware" mean?**
Melty tracks every edit you make. AI suggestions incorporate your recent changes, not just the current file state.

**Is Melty a VS Code fork?**
Yes. Extensions and themes are compatible.

**Can I use local models?**
Yes. Ollama and other local providers supported.

**Is Melty free?**
Open-source and free.
