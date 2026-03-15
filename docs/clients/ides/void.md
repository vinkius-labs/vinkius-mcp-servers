---
title: "Connect MCP Server to Void — Setup Guide | Vinkius"
description: "Add MCP servers to Void, the open-source alternative to Cursor. VS Code fork with AI chat, inline editing, fast apply, and MCP tool integration — all transparent."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Void — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Void. Open-source Cursor alternative with full MCP."
  - - meta
    - name: keywords
      content: "Void MCP, MCP Void editor, Void open source MCP, connect MCP server Void, Vinkius Void"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Void","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP server in Void settings."},{"@type":"HowToStep","name":"Code","text":"Use AI chat and inline editing with MCP tools in fully open-source editor."}]}'
---

# Void

Void is the open-source alternative to Cursor. It's a VS Code fork with AI chat, inline editing, and fast apply — but fully transparent and community-driven. No proprietary black boxes. You see exactly how AI interacts with your code, how MCP tools are called, and what data flows where.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#000,#222);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0;border:1px solid rgba(255,255,255,0.2)">Vo</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Void</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://voideditor.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">voideditor.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Settings</div></div>
</div>
</div>

## Open-Source Cursor Alternative

Features:
- **Fully open-source** — transparent AI integration
- **Fast apply** — quick code changes with inline editing
- **AI chat** — conversational coding with MCP tools
- **Any model** — Claude, GPT, Ollama, any OpenAI-compatible provider
- **VS Code fork** — extensions and themes compatible
- **Privacy** — no telemetry by default, full control

## Setup

### 1. Create a Token
In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Server
In Void → **Settings** → **MCP** → add your URL.

### 3. Transparent Coding
All AI and MCP interactions are visible. Full transparency.

---

## FAQ

**How is Void different from Cursor?**
Void is fully open-source. No proprietary components.

**Are VS Code extensions compatible?**
Yes. Void is a VS Code fork.

**Can I use local models?**
Yes. Ollama and any OpenAI-compatible local provider.

**Is Void free?**
Open-source and free.
