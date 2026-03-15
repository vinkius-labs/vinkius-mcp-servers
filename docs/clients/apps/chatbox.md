---
title: "Connect MCP Server to Chatbox — Setup Guide | Vinkius"
description: "Add MCP servers to Chatbox, the minimalist desktop AI client. Clean interface for GPT-4, Claude, Ollama, with MCP tool support and conversation export."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Chatbox — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Chatbox. Minimalist desktop AI client with MCP tools."
  - - meta
    - name: keywords
      content: "Chatbox MCP, MCP Chatbox, Chatbox AI desktop MCP, connect MCP server Chatbox, Vinkius Chatbox"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Chatbox","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add server","text":"Add MCP server in Chatbox settings panel."},{"@type":"HowToStep","name":"Chat","text":"Conversations now have access to external MCP tools."}]}'
---

# Chatbox

Chatbox is a minimalist desktop client for AI conversations. It strips away complexity — no plugins, no workflows, no dashboards — and gives you a clean, fast interface for talking to GPT-4, Claude, Gemini, Ollama, or any OpenAI-compatible provider. MCP extends this simple interface with external tool access without adding UI clutter.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#14b8a6,#0d9488);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Cb</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Chatbox</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://chatboxai.app" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">chatboxai.app</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux · iOS · Android</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Settings Panel</div></div>
</div>
</div>

## Simplicity First, Tools When Needed

Chatbox succeeds by doing less. No learning curve, no configuration maze — open the app, enter an API key, and chat. Markdown rendering, code highlighting, and conversation export cover the essentials.

MCP fits this philosophy perfectly. It adds capabilities without adding complexity to the interface. The model calls tools behind the scenes, and results appear naturally in the conversation.

What Chatbox provides:

- **Clean interface** — focused on conversation with no visual clutter
- **Multi-provider** — GPT-4, Claude, Gemini, Ollama, and any OpenAI-compatible API
- **Markdown rendering** — formatted responses with syntax highlighting
- **Conversation export** — export chats as Markdown or text
- **Cross-platform** — native apps for every major OS including mobile
- **Prompt library** — save and reuse system prompts
- **Cost tracking** — monitor API usage and spending

## Quick Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Server

In Chatbox → **Settings** → **MCP** → **Add**. Paste your Vinkius URL.

### 3. Chat with Tools

The model calls MCP tools when your questions need external data. Responses appear inline.

---

## FAQ

**Does MCP complicate the Chatbox interface?**
No. MCP works behind the scenes. Tool calls and results appear naturally in the conversation without additional UI elements.

**Can I use Chatbox on my phone?**
Yes. Chatbox is available on iOS and Android alongside Windows, macOS, and Linux.

**Does Chatbox track API costs?**
Yes. Built-in cost tracking shows token usage and spending per provider.

**Is Chatbox free?**
Free and open-source. You provide your own API keys.
