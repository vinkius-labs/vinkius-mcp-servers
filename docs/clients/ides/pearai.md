---
title: "Connect MCP Server to PearAI — Setup Guide | Vinkius"
description: "Add MCP servers to PearAI, the open-source AI code editor with integrated search and no-code setup. Fork of Continue with a dedicated IDE experience."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to PearAI — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to PearAI. Open-source AI editor with integrated search."
  - - meta
    - name: keywords
      content: "PearAI MCP, MCP PearAI, PearAI editor MCP, connect MCP server PearAI, Vinkius PearAI"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to PearAI","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add","text":"Configure MCP server in PearAI settings."},{"@type":"HowToStep","name":"Code","text":"Use chat, inline editing, and MCP tools in PearAI."}]}'
---

# PearAI

PearAI is an open-source AI code editor that provides a **standalone IDE experience** with AI built in from the ground up. Built on a VS Code fork with Continue's AI engine integrated natively, PearAI offers a cohesive experience where AI chat, inline editing, autocomplete, and MCP tools are first-class IDE features — not extensions you install separately.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#84cc16,#65a30d);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">🍐</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">PearAI</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://trypear.ai" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">trypear.ai</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Built-in Settings</div></div>
</div>
</div>

## AI-Native IDE with No Extensions Needed

PearAI's value proposition is simplicity. Instead of installing VS Code, then Continue, then configuring API keys and MCP servers across separate extension settings, PearAI ships with everything integrated. AI chat, inline editing, tab completions, and MCP tool support are part of the IDE.

**PearAI Search** provides integrated web search directly in the AI conversation — the model can search the web and bring context without you switching browsers.

Features:

- **Standalone IDE** — AI integrated natively, no extensions needed
- **PearAI Search** — integrated web search in AI conversations
- **Continue-based** — inherits context providers and multi-model support
- **Tab completions** — inline code suggestions
- **Multi-model** — Claude, GPT, Gemini, Ollama, local models
- **MCP support** — external tool access built into the IDE
- **VS Code compatible** — all extensions and themes work
- **Open-source** — community-driven development

## Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Server

In PearAI → **Settings** → **MCP** → add your Vinkius URL.

### 3. Chat and Code

Use AI chat with MCP tools alongside inline editing and autocomplete.

---

## FAQ

**How is PearAI different from VS Code + Continue?**
PearAI integrates AI natively. No separate extension installation or configuration needed.

**Does PearAI include web search?**
Yes. PearAI Search lets the AI search the web during conversations.

**Are VS Code extensions compatible?**
Yes. PearAI is a VS Code fork, so extensions and themes work.

**Is PearAI free?**
Open-source. Bring your own API keys.
