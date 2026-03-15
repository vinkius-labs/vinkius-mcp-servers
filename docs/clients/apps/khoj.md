---
title: "Connect MCP Server to Khoj — Setup Guide | Vinkius"
description: "Add MCP servers to Khoj, the self-hosted AI personal assistant. Search across notes, documents, and the web with MCP tools for external data enrichment."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Khoj — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Khoj. Personal AI assistant with document search and MCP."
  - - meta
    - name: keywords
      content: "Khoj MCP, MCP Khoj, Khoj AI assistant MCP, connect MCP server Khoj, Vinkius Khoj, Khoj personal AI"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Khoj","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP server in Khoj admin settings."},{"@type":"HowToStep","name":"Search","text":"Khoj searches your notes, docs, and MCP tools together."}]}'
---

# Khoj

Khoj is a self-hosted AI personal assistant that indexes your notes, documents, and online research into a searchable knowledge base. It works across platforms — web, Obsidian, Emacs, and WhatsApp. MCP tools extend Khoj beyond your local files, connecting it to external APIs, databases, and live systems so your personal AI knows both your notes and your operational data.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#f59e0b,#d97706);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Kh</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Khoj</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://khoj.dev" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">khoj.dev</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web · Obsidian · Emacs · WhatsApp</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Admin Settings</div></div>
</div>
</div>

## Your Notes + Your Systems in One Search

Khoj combines local knowledge (notes, PDFs, web bookmarks) with live data through MCP. Ask "what were last week's deployment issues and do I have any notes about the fix?" and Khoj searches your Obsidian vault, queries your monitoring system via MCP, and synthesizes both into a single answer.

The Obsidian, Emacs, and WhatsApp integrations mean you access this combined knowledge from wherever you work. No switching apps or context.

Features:

- **Note indexing** — search across Markdown, org-mode, PDF, and web bookmarks
- **Obsidian plugin** — chat with your vault directly from Obsidian
- **Emacs integration** — native Emacs client for keyboard-driven workflows
- **WhatsApp bot** — query your knowledge base and MCP tools from WhatsApp
- **Web search** — combine internet results with local knowledge
- **Automated research** — scheduled agents that run research tasks periodically
- **Self-hosted** — full data ownership, Docker deployment

## Adding MCP

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Configure in Admin

In Khoj admin panel → **MCP Servers** → **Add**. Paste your Vinkius URL.

### 3. Search Everything

Query from any platform. Khoj searches your notes and calls MCP tools in the same response.

---

## FAQ

**Can I query MCP tools from Obsidian?**
Yes. The Khoj Obsidian plugin has full access to all configured MCP tools alongside your vault notes.

**Does Khoj work with WhatsApp?**
Yes. Send messages to the Khoj WhatsApp bot to query your notes and MCP tools from your phone.

**Can Khoj run automated research?**
Yes. Scheduled agents periodically search, gather data from MCP tools, and save findings to your knowledge base.

**Is Khoj free?**
Open-source. Self-host for free. Khoj Cloud offers a managed version.
