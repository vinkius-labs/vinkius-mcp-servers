---
title: "Connect MCP Server to MCP Chat — Setup Guide | Vinkius"
description: "Add MCP servers to MCP Chat, the lightweight chat interface dedicated to MCP. Direct server interaction with minimal setup and transparent tool calling."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to MCP Chat — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to MCP Chat. Lightweight, dedicated MCP chat interface."
  - - meta
    - name: keywords
      content: "MCP Chat, MCP Chat client, connect MCP server MCP Chat, Vinkius MCP Chat, lightweight MCP client"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to MCP Chat","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Connect","text":"Paste the MCP server URL in MCP Chat."},{"@type":"HowToStep","name":"Chat","text":"Start chatting. Tool calls are transparent and visible inline."}]}'
---

# MCP Chat

MCP Chat is a lightweight, purpose-built interface for interacting with MCP servers through conversation. No feature bloat — it does one thing well. Paste a server URL, pick a model, and start chatting. Tool calls are shown transparently so you always know what the model is doing behind the scenes.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#38bdf8,#0284c7);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">MC</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">MCP Chat</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source</div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web · Desktop</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Direct Connection</div></div>
</div>
</div>

## The Simplest Way to Chat with MCP Tools

MCP Chat is for when you want to test an MCP server quickly without configuring a full IDE or framework. Paste the URL, start a conversation, and see every tool call and response clearly labeled in the chat timeline.

Features:

- **Zero-config** — paste a URL and start chatting
- **Transparent tool calls** — every MCP invocation shown with parameters and response
- **Multi-model** — configure different LLM providers
- **Lightweight** — minimal resource usage, fast startup
- **Open-source** — community-maintained

## Instant Connection

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Paste and Chat

Open MCP Chat → paste your URL → start a conversation. That's it.

---

## FAQ

**Is MCP Chat a full-featured AI client?**
No. It is intentionally lightweight — focused on quick MCP server interaction and testing.

**Can I see what tools the model calls?**
Yes. Every tool call is displayed transparently with parameters and response data.

**Does MCP Chat support multiple servers?**
Yes. Add multiple server URLs for conversations that span multiple tool sets.

**Is MCP Chat free?**
Open-source and free.
