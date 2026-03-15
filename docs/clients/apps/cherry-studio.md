---
title: "Connect MCP Server to Cherry Studio — Setup Guide | Vinkius"
description: "Add MCP servers to Cherry Studio, the multi-provider AI desktop hub. Conversation folders, translation mode, provider comparison, and MCP tool support."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Cherry Studio — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Cherry Studio. Multi-provider desktop hub with MCP tools."
  - - meta
    - name: keywords
      content: "Cherry Studio MCP, MCP Cherry Studio, Cherry Studio AI desktop MCP, connect MCP server Cherry Studio, Vinkius Cherry Studio"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Cherry Studio","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add server","text":"Configure MCP server in Cherry Studio MCP settings."},{"@type":"HowToStep","name":"Chat","text":"Use conversation folders and translation mode with MCP data."}]}'
---

# Cherry Studio

Cherry Studio is a desktop AI hub that organizes conversations across multiple providers into folders. Its **translation mode** converts text between languages while preserving formatting, and **provider comparison** lets you send the same prompt to GPT-4 and Claude side by side. MCP tools add external data access to all of these workflows.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#f43f5e,#e11d48);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">CS</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Cherry Studio</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://cherry-ai.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">cherry-ai.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">MCP Settings</div></div>
</div>
</div>

## Multi-Provider Hub with Organizational Tools

Cherry Studio shines for users who alternate between multiple AI providers throughout the day. Conversation folders keep projects organized, and switching between GPT-4, Claude, Gemini, or a local model is a single dropdown change — mid-conversation.

Translation mode is purpose-built for multilingual workflows. Paste text, select target language, and Cherry Studio preserves formatting (markdown, code blocks, tables) while translating. Combined with MCP tools, you can translate content that includes live data fetched from your systems.

Features:

- **Conversation folders** — organize by project, topic, or workflow
- **Translation mode** — format-preserving translation between languages
- **Provider comparison** — same prompt, multiple models, side by side
- **Multi-provider** — GPT-4, Claude, Gemini, DeepSeek, local models
- **Theme engine** — customizable interface appearance
- **Data export** — export conversations in multiple formats
- **Quick switch** — change model provider mid-conversation

## Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Server

Go to **Settings** → **MCP** → **Add Server** → paste your Vinkius URL.

### 3. Organized Chat with Tools

Use conversation folders, translation mode, and MCP tools together for structured multilingual workflows.

---

## FAQ

**Can I compare how different models handle MCP tools?**
Yes. Provider comparison sends the same prompt to multiple models. Compare how GPT-4 and Claude use MCP tools differently.

**Does translation mode work with MCP data?**
Yes. Fetch data via MCP, then use translation mode to convert it between languages while preserving formatting.

**Can I organize MCP conversations in folders?**
Yes. Conversation folders work with all features, including MCP tool conversations.

**Is Cherry Studio free?**
Open-source and free.
