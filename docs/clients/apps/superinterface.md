---
title: "Connect MCP Server to Superinterface — Setup Guide | Vinkius"
description: "Add MCP servers to Superinterface, the embeddable AI chat widget. White-label AI assistants for websites with voice, text, and MCP tool capabilities."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Superinterface — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Superinterface. Embeddable AI chat widgets with MCP tools."
  - - meta
    - name: keywords
      content: "Superinterface MCP, MCP Superinterface, Superinterface chat widget MCP, connect MCP server Superinterface, Vinkius Superinterface"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Superinterface","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP server in your Superinterface assistant settings."},{"@type":"HowToStep","name":"Embed","text":"Add the widget to your website. Visitors interact with MCP tools through chat."}]}'
---

# Superinterface

Superinterface lets you build and embed AI chat widgets on any website. Create a **white-label assistant** with your branding, configure MCP tools for data access, and embed it with a script tag. Your website visitors interact with your AI assistant, which calls MCP tools to answer questions about your products, services, or internal systems.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#8b5cf6,#6d28d9);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">SI</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Superinterface</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">superinterface.ai · <a href="https://superinterface.ai" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">superinterface.ai</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web · Embeddable</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Assistant Settings</div></div>
</div>
</div>

## Customer-Facing AI with Your Tools

Superinterface is not a personal AI client — it's infrastructure for building AI assistants that your customers interact with. The chat widget embeds on your website, the assistant uses your brand colors and voice, and MCP tools provide real-time data from your backend.

Use cases: customer support bots that check order status via MCP, documentation assistants that query your knowledge base, and onboarding guides that walk users through your product.

Features:

- **Embeddable widget** — add to any website with a script tag
- **White-label** — custom branding, colors, and voice
- **Voice mode** — voice-based interactions alongside text
- **MCP tools** — assistant queries your systems through MCP
- **Analytics** — conversation metrics and user satisfaction tracking
- **Multi-assistant** — create different assistants for different pages or use cases
- **React SDK** — programmable widget for custom integrations

## Embedding with MCP

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Configure Assistant

In Superinterface → **Create Assistant** → **MCP Servers** → add your Vinkius URL. Set branding and system prompt.

### 3. Embed on Your Site

```html
<script src="https://superinterface.ai/widget.js"
  data-assistant-id="your-assistant-id">
</script>
```

Your customers now interact with an AI that accesses your systems through MCP.

---

## FAQ

**Can visitors see MCP tool calls?**
No. Tool calls happen behind the scenes. Visitors see only the natural language response.

**Can I customize the widget appearance?**
Yes. Colors, fonts, position, and branding are all customizable.

**Does Superinterface support voice?**
Yes. Voice mode allows spoken interactions alongside text chat.

**Is Superinterface free?**
Free tier with limited conversations. Paid plans for production usage.
