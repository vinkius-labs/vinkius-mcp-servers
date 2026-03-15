---
title: "Connect MCP Server to Superinterface — Setup Guide | Vinkius"
description: "Add MCP servers to Superinterface, the embeddable AI UI platform. Interactive components, voice chat, API function calling, and MCP tool integration for web apps."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Superinterface — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP servers to Superinterface. Embeddable AI UI with MCP tools."
  - - meta
    - name: keywords
      content: "Superinterface MCP, MCP Superinterface, Superinterface AI UI MCP, connect MCP server Superinterface, Vinkius Superinterface, embeddable AI chat MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Superinterface","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add the Vinkius MCP server in your Superinterface assistant config."},{"@type":"HowToStep","name":"Embed","text":"Embed the AI widget on your website. MCP tools are available to end users."}]}'
---

# Superinterface

Superinterface is an embeddable AI UI platform. Instead of building your own chatbot from scratch, you configure an assistant in Superinterface's dashboard, connect MCP servers for tool access, and embed the widget on your website with a single script tag. End users interact with MCP tools through a polished chat interface without knowing the protocol exists.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#22d3ee,#06b6d4);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">SI</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Superinterface</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">superinterface.ai · <a href="https://superinterface.ai" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">superinterface.ai</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web (embeddable)</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Dashboard Config</div></div>
</div>
</div>

## Embed AI + MCP on Any Website

Superinterface makes MCP tools accessible to non-technical users. You configure the assistant once in a dashboard — system prompt, model, and MCP servers — then drop a `<script>` tag on your site. Visitors get a chat widget that can query databases, check order status, or run any MCP tool, all through a friendly conversation.

The platform also supports interactive components (forms, buttons, carousels that render inside the chat), voice chat, and API function calling. MCP fits naturally into this ecosystem as another tool source.

Use cases:

- **Customer support** — connect MCP servers to your help desk and order system
- **Internal tools** — embed an assistant on your intranet with access to internal APIs
- **Product demos** — let prospects interact with your MCP-powered features live
- **Voice assistants** — enable voice-to-MCP workflows via the built-in voice engine

## Getting Started

### 1. Create a Connection Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add to Superinterface

In your Superinterface dashboard, open your assistant's settings → **MCP Servers** → **Add**. Paste your Vinkius URL.

### 3. Embed on Your Site

Copy the embed code from the dashboard and add it to your website's HTML:

```html
<script src="https://superinterface.ai/embed.js" data-assistant="YOUR_ID"></script>
```

Your visitors can now interact with MCP tools through the chat widget.

---

## FAQ

**Can end users see MCP tool calls?**
You can configure whether tool calls are visible or hidden. For customer-facing widgets, hiding them provides a seamless experience.

**Does Superinterface support voice with MCP?**
Yes. The voice engine transcribes speech, sends it to the model, which can call MCP tools, and then reads the response aloud.

**Can I customize the chat widget appearance?**
Fully — colors, fonts, position, greeting message, and branding. The widget adapts to your website's design system.

**What's the pricing?**
Superinterface has a free tier for development and testing. Production plans with custom domains and higher limits are paid.
