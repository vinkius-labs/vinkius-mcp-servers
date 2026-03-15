---
title: "Connect MCP Server to DeepChat — Setup Guide | Vinkius"
description: "Add MCP servers to DeepChat, the privacy-focused desktop AI partner. Multi-provider chat, conversation branching, theme customization, and MCP tool support."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to DeepChat — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP servers to DeepChat. Privacy-focused desktop AI with multi-provider chat."
  - - meta
    - name: keywords
      content: "DeepChat MCP, MCP DeepChat, DeepChat desktop AI MCP, connect MCP server DeepChat, Vinkius DeepChat, DeepChat AI partner"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to DeepChat","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add server","text":"Open DeepChat Settings → MCP → paste your Vinkius URL."},{"@type":"HowToStep","name":"Chat","text":"Start a conversation. MCP tools are available in every chat thread."}]}'
---

# DeepChat

DeepChat is a desktop AI partner that emphasizes a clean, distraction-free chat experience. It supports multiple LLM providers, conversation branching (fork a conversation to explore different directions), and extensive theme customization. MCP integration adds tool access without cluttering the minimalist interface.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#06b6d4,#0891b2);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">DC</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">DeepChat</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">deepchat.dev · <a href="https://deepchat.dev" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">deepchat.dev</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Settings Panel</div></div>
</div>
</div>

## Branching Conversations with External Tools

DeepChat's standout feature is conversation branching. At any point in a chat, you can fork the thread to explore an alternative approach — and each branch retains access to the same MCP tools. This is useful for comparing how different prompts or strategies interact with external data.

The app stores everything locally, giving you full control over your data. MCP connections are the only outbound requests, and you configure each one explicitly.

What DeepChat offers:

- **Conversation branching** — fork chats to explore multiple directions
- **Multi-provider** — OpenAI, Anthropic, Google, and local Ollama
- **Theme engine** — extensive customization including fonts, colors, and layouts
- **Markdown export** — share conversations as formatted documents
- **Local storage** — all data stays on your machine
- **Cross-platform** — Electron-based desktop app

## Adding Vinkius Cloud

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), open your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Configure MCP

In DeepChat, go to **Settings** → **MCP** → **Add**. Paste:

```
https://edge.vinkius.com/{TOKEN}/mcp
```

### 3. Start Chatting

MCP tools appear in your conversations. Branch a thread to test different ways of using the same tool in parallel paths.

---

## FAQ

**Can I use MCP tools in branched conversations?**
Yes. Each branch inherits the parent thread's MCP configuration. Tools work identically across all branches.

**Does DeepChat support conversation export?**
Yes, to Markdown and JSON. MCP tool calls and results are included in the export.

**Is DeepChat privacy-focused?**
All conversation data is stored locally. The only network requests are to your configured LLM provider and MCP servers.

**Is DeepChat free?**
Free for personal use with all core features. Premium features may require a license.
