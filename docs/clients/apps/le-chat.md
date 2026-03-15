---
title: "Connect MCP Server to Le Chat — Setup Guide | Vinkius"
description: "Add MCP servers to Le Chat by Mistral AI. Fast European AI assistant with Canvas, web search, document analysis, and MCP tool support."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Le Chat — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Le Chat. Mistral AI's assistant with Canvas and MCP tools."
  - - meta
    - name: keywords
      content: "Le Chat MCP, MCP Le Chat, Mistral AI MCP, connect MCP server Le Chat, Vinkius Le Chat, Le Chat Mistral MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Le Chat","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add","text":"Configure the MCP server in Le Chat settings."},{"@type":"HowToStep","name":"Chat","text":"Le Chat uses Mistral models with MCP tools for comprehensive answers."}]}'
---

# Le Chat

Le Chat is Mistral AI's consumer-facing assistant, built on Europe's leading open-weight models. It features **Canvas** — an interactive workspace for generating and iterating on documents and code — alongside web search, image generation, and document analysis. MCP connects Le Chat to your own systems, expanding what Europe's fastest AI assistant can do.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#ff7000,#ff5200);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Mi</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Le Chat</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Mistral AI · <a href="https://chat.mistral.ai" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">chat.mistral.ai</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web · iOS · Android</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Settings</div></div>
</div>
</div>

## Canvas Workspace + MCP Data

Canvas is Le Chat's interactive editing surface for documents and code. It renders generated content in a side panel where you can iterate — highlight a section, ask for changes, generate alternatives. MCP tools feed this workspace with real data: pull numbers from a database, generate a chart, and refine it all in Canvas.

Mistral models are multilingual and particularly strong in European languages. For teams operating in French, German, Spanish, or other EU languages, Le Chat offers performance comparable to GPT-4 with localized nuance.

Highlights:

- **Canvas** — interactive editing workspace for documents and code
- **Mistral models** — Large 2, Medium, Small — choose speed vs. quality
- **Multilingual** — strong performance across European languages
- **Web search** — real-time web data integrated into responses
- **Image generation** — create visuals within conversations
- **Document analysis** — upload and analyze PDFs and documents
- **EU data residency** — data stays in European infrastructure

## Adding MCP

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Configure in Le Chat

Go to **Settings** → **MCP** → **Add Server**. Paste your URL.

### 3. Chat with Tools

MCP tools integrate with Canvas and regular chat. The model decides when external data is needed.

---

## FAQ

**Can MCP tools feed data into Canvas?**
Yes. Request a document or analysis in Canvas, and Le Chat can call MCP tools to fetch the data, then render and refine it in the interactive workspace.

**Is Le Chat suitable for European companies?**
Yes. Data residency in EU infrastructure, strong multilingual capabilities, and Mistral's European AI leadership make it well-suited for EU-based teams.

**Which Mistral models are available?**
Mistral Large 2, Medium, and Small. Each offers a different speed/quality trade-off for MCP interactions.

**Is Le Chat free?**
Free tier available. Pro plan unlocks more message limits and priority access.
