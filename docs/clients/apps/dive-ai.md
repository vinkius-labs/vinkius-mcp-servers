---
title: "Connect MCP Server to Dive AI — Setup Guide | Vinkius"
description: "Add MCP servers to Dive AI, the focused AI chat client with inline tool display. Clean conversation UI with MCP tool results shown as expandable cards."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Dive AI — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Dive AI. Clean chat interface with inline MCP tool cards."
  - - meta
    - name: keywords
      content: "Dive AI MCP, MCP Dive AI, Dive AI chat MCP, connect MCP server Dive AI, Vinkius Dive AI"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Dive AI","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add","text":"Configure MCP server in Dive AI settings."},{"@type":"HowToStep","name":"Chat","text":"Tool results display as expandable cards in the conversation."}]}'
---

# Dive AI

Dive AI is a streamlined chat client that treats MCP tool results as first-class visual elements. When the model calls an MCP tool, the result appears as an expandable card — not just raw text. This makes complex tool outputs (JSON, tables, structured data) readable and navigable within the conversation flow.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#0ea5e9,#0369a1);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Dv</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Dive AI</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://github.com/nicepkg/gpt-runner" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">GitHub</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Settings</div></div>
</div>
</div>

## Clean Tool Visualization in Chat

Dive AI keeps conversations readable even when heavy tool usage is involved. Each MCP tool call renders as a collapsible card showing the tool name, parameters, and response. Expand for details, collapse to keep the conversation flow clean. Complex JSON responses are formatted with syntax highlighting.

Features:

- **Tool result cards** — structured display of MCP tool outputs
- **Multi-provider** — supports major LLM providers
- **Syntax highlighting** — code and JSON rendered with proper formatting
- **Conversation export** — save conversations with tool call history
- **Desktop app** — native cross-platform application
- **Minimal design** — focused on conversation without UI clutter

## Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Server

Go to **Settings** → **MCP** → **Add**. Paste your Vinkius URL.

### 3. Chat with Visual Tool Cards

Ask questions. MCP tool results appear as formatted, expandable cards inline in the conversation.

---

## FAQ

**How does Dive AI display MCP tool results?**
As expandable cards in the conversation thread. Each card shows tool name, parameters sent, and formatted response data.

**Does Dive AI support multiple MCP servers?**
Yes. Configure multiple servers. Tool cards are labeled by server for clarity.

**Can I export conversations with tool calls?**
Yes. Exports include the full tool call history alongside messages.

**Is Dive AI free?**
Open-source and free to use.
