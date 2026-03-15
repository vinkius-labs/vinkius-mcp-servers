---
title: "Connect MCP Server to Elia — Setup Guide | Vinkius"
description: "Add MCP servers to Elia, the keyboard-centric TUI for LLMs in the terminal. Textual framework, Ollama integration, conversation history, and MCP tool support."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Elia — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP servers to Elia. Keyboard-centric TUI for terminal LLM chats."
  - - meta
    - name: keywords
      content: "Elia MCP, MCP Elia, Elia TUI MCP, connect MCP server Elia, Vinkius Elia, Elia terminal LLM chat MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Elia","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add your Vinkius URL to Elia MCP configuration."},{"@type":"HowToStep","name":"Chat","text":"Launch elia in any terminal. MCP tools are available in conversations."}]}'
---

# Elia

Elia is a keyboard-centric TUI (text user interface) for chatting with LLMs, built on Python's Textual framework. It's designed for developers who prefer navigating with keyboard shortcuts rather than mouse clicks. Conversations, models, and MCP tools are all accessible without leaving the terminal or reaching for a trackpad.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#a78bfa,#7c3aed);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">El</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Elia</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://github.com/darrenburns/elia" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">github.com/darrenburns/elia</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Config File</div></div>
</div>
</div>

## Keyboard-First AI Chat with MCP

Elia takes the approach that an LLM chat should feel like a native terminal application — panels, scrollable history, syntax highlighting, and composable key bindings. It stores conversations in a local SQLite database, so you can search and resume past chats without cloud syncing.

MCP tools slot into this workflow naturally. When you ask a question that requires external data, the model calls the appropriate MCP tool and displays the result inline — complete with syntax highlighting if it's code or JSON. You never leave the keyboard-driven flow.

Why Elia suits MCP users:

- **Textual TUI** — rich panels, borders, and color in any terminal emulator
- **Keyboard shortcuts** — navigate conversations, switch models, search history
- **SQLite storage** — conversations persist locally, searchable and exportable
- **Ollama-native** — first-class support for local model inference
- **Multi-model** — switch between Cloud and Ollama models mid-session
- **Lightweight** — install with `pipx install elia-chat`, no heavy dependencies

## How to Set Up

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Server

Configure the Vinkius server in Elia's config:

```yaml
mcp_servers:
  vinkius:
    url: "https://edge.vinkius.com/{TOKEN}/mcp"
```

### 3. Launch Elia

```bash
elia
```

MCP tools are now available in your chat sessions. The conversation and tool outputs are stored in the local SQLite database for future reference.

---

## FAQ

**Does Elia store MCP tool results?**
Yes. Tool call inputs and outputs are stored alongside the conversation in Elia's local SQLite database. You can replay past sessions with full context.

**Can I use Elia with Ollama?**
Absolutely. Elia has first-class Ollama integration for fully local, offline LLM conversations. MCP servers still need network access.

**How do I install Elia?**
The recommended method is `pipx install elia-chat`. It works on any system with Python 3.10+.

**Is Elia free?**
Open-source under MIT. No subscription or license required.
