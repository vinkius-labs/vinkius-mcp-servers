---
title: "Connect MCP Server to ChatGPT — Setup Guide | Vinkius"
description: "Add MCP servers to ChatGPT, OpenAI's flagship AI assistant. Native MCP support, GPT-4o/o1/o3 models, multimodal capabilities, and tool integration via Connectors."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to ChatGPT — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to ChatGPT. Native MCP support with GPT-4o and o-series models."
  - - meta
    - name: keywords
      content: "ChatGPT MCP, MCP ChatGPT, ChatGPT MCP server, connect MCP server ChatGPT, Vinkius ChatGPT, OpenAI ChatGPT MCP, ChatGPT Connectors"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to ChatGPT","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add Connector","text":"In ChatGPT Settings, add a new MCP Connector with your Vinkius URL."},{"@type":"HowToStep","name":"Chat","text":"Ask ChatGPT anything. It calls MCP tools when it needs external data."}]}'
---

# ChatGPT

ChatGPT now supports MCP through its **Connectors** feature. You add an MCP server URL in your settings, and ChatGPT automatically discovers and uses its tools during conversations. With GPT-4o, o1, and o3's reasoning capabilities, MCP tools become part of the world's most widely used AI assistant.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#10a37f,#0d8a6a);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">GP</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">ChatGPT</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">OpenAI · <a href="https://chat.openai.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">chat.openai.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web · iOS · Android · Desktop</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Connectors</div></div>
</div>
</div>

## The Most Widely Used AI, Now with MCP

ChatGPT needs no introduction — it's the AI assistant used by millions. MCP Connectors extend it with your own tools. Instead of being limited to web browsing, DALL·E, and code interpreter, ChatGPT can now query your databases, check your monitoring systems, and interact with your internal APIs.

The o-series reasoning models (o1, o3) are particularly effective with MCP because they plan multi-step approaches. When asked to analyze a complex situation, they might call multiple MCP tools in sequence, reason over results, and produce a comprehensive answer.

What MCP adds to ChatGPT:

- **Custom tool access** — query your own systems from the ChatGPT interface
- **Connectors** — add MCP servers through a simple settings panel
- **Model selection** — GPT-4o for fast tasks, o1/o3 for deep reasoning with MCP tools
- **Cross-platform** — tools available on web, mobile, and desktop apps
- **Memory** — ChatGPT remembers tool configurations across sessions
- **Custom GPTs** — build GPTs that include specific MCP tool access

## Quick Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add a Connector

Open **ChatGPT** → **Settings** → **Connectors** → **Add**. Paste your Vinkius URL:

```
https://edge.vinkius.com/{TOKEN}/mcp
```

### 3. Start Chatting

Ask ChatGPT anything that requires your external data. It invokes MCP tools automatically when needed.

---

## FAQ

**Which ChatGPT plans support MCP Connectors?**
MCP Connectors are available on ChatGPT Plus, Team, and Enterprise plans.

**Can Custom GPTs use MCP tools?**
Yes. When building a Custom GPT, you can attach MCP Connectors so the GPT has access to your specific tools.

**Do MCP tools work on ChatGPT mobile?**
Yes. Connectors configured on the web are available across all ChatGPT platforms — web, iOS, Android, and desktop.

**Are MCP tool results stored in conversation history?**
Yes. Tool calls and results appear in the conversation and are subject to ChatGPT's standard data retention policies.
