---
title: "Connect MCP Server to oterm — Setup Guide | Vinkius"
description: "Add MCP servers to oterm, the terminal-based AI chat for Ollama. Rich TUI with conversation management, model switching, and MCP tool support in the terminal."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to oterm — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to oterm. Terminal chat for Ollama with MCP tools."
  - - meta
    - name: keywords
      content: "oterm MCP, MCP oterm, oterm Ollama MCP, connect MCP server oterm, Vinkius oterm, oterm terminal AI"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to oterm","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP server to oterm configuration."},{"@type":"HowToStep","name":"Chat","text":"Run oterm in your terminal. MCP tools extend local Ollama models."}]}'
---

# oterm

oterm is a terminal UI (TUI) for Ollama that brings a rich chat experience to your terminal. Built with Textual, it offers mouse-clickable conversation management, multi-model tabs, and formatted markdown output — all without leaving the command line. MCP tools extend your local Ollama models with remote data access.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#84cc16,#65a30d);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">ot</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">oterm</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://github.com/ggozad/oterm" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">GitHub</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Terminal (Python TUI)</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Config File</div></div>
</div>
</div>

## Rich Terminal Chat with Ollama and MCP

oterm sits perfectly between a bare CLI and a full desktop app. The Textual-based TUI gives you clickable buttons, scrollable panes, and formatted output — but runs entirely in your terminal. Conversation history persists in a local SQLite database, and you can switch between Ollama models mid-conversation.

MCP tools work alongside local models. The model runs on your machine, but when it needs external data, MCP tool calls go out to Vinkius Cloud. You get the privacy of local inference with the reach of remote tools.

Features:

- **Textual TUI** — rich terminal interface with mouse support
- **SQLite persistence** — conversations stored locally
- **Multi-model tabs** — switch between Ollama models in tabs
- **Formatted Markdown** — syntax-highlighted code and table rendering in terminal
- **Image support** — multimodal conversations with vision models
- **Customizable** — model parameters adjustable per conversation

## Terminal Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Configure MCP

Add your Vinkius URL to the oterm configuration file.

### 3. Launch

```bash
oterm
```

Chat with local Ollama models. MCP tools extend conversations with remote data access.

---

## FAQ

**Is oterm only for Ollama models?**
Primarily yes. oterm is designed as an Ollama frontend with rich terminal UI features.

**Do conversations persist?**
Yes. All conversations are stored in a local SQLite database and accessible across sessions.

**Can I use keyboard-only navigation?**
Yes. Full keyboard navigation alongside mouse support thanks to the Textual framework.

**Is oterm free?**
Open-source and free.
