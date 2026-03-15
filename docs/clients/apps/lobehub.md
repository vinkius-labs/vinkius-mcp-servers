---
title: "Connect MCP Server to LobeChat — Setup Guide | Vinkius"
description: "Add MCP servers to LobeChat, the open-source chatbot framework with 73k+ stars. MCP Marketplace, three plugin types, multi-modal chat, and self-hosted deployment."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to LobeChat — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to LobeChat. MCP Marketplace + plugin system with 73k+ stars."
  - - meta
    - name: keywords
      content: "LobeChat MCP, MCP LobeChat, LobeHub MCP, connect MCP server LobeChat, Vinkius LobeChat, LobeChat plugins MCP, LobeChat Marketplace"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to LobeChat","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Import","text":"In LobeChat MCP settings, import via JSON or manual URL entry."},{"@type":"HowToStep","name":"Chat","text":"MCP tools appear in conversations alongside native plugins."}]}'
---

# LobeChat

LobeChat is an open-source chatbot framework by LobeHub with 73.7k+ GitHub stars and a built-in **MCP Marketplace**. Rather than configuring servers by hand, you browse available MCP services in a catalog and import them with one click. Three plugin types — Default, Markdown, and Standalone — give you full control over how MCP tool results render in the chat interface.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#06b6d4,#2563eb);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Lc</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">LobeChat</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">★ 73.7k+ · <a href="https://lobehub.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">lobehub.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web · Self-hosted · Desktop</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">MCP Plugin + Marketplace</div></div>
</div>
</div>

## An MCP Marketplace Inside Your Chat App

LobeChat's MCP Marketplace is essentially an app store for AI tools. Browse categories, read descriptions, and add services to your instance without touching configuration files. For custom servers like Vinkius Cloud, you can import via JSON or paste a URL manually.

The three plugin types determine how tool results appear. **Default** plugins show structured data inline. **Markdown** plugins render rich content with full formatting. **Standalone** plugins open in their own panel for complex interactive experiences like dashboards or visual editors.

LobeHub 2.0 vision — unifying users, agents, knowledge, and services — positions LobeChat as more than a chatbot. It becomes a collaboration platform where MCP tools are shared resources.

Notable capabilities:

- **MCP Marketplace** — discover and import MCP services with one click
- **Three plugin types** — Default (inline), Markdown (rich), Standalone (interactive)
- **Plugin SDK** — `@lobehub/chat-plugin-sdk` for building custom plugins
- **Multi-modal** — text, images, speech synthesis, function calling
- **Self-hosted deployment** — run your own private ChatGPT/LLM instance
- **Community plugin index** — curated repository of community-built plugins

## How to Add Vinkius Cloud

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Import in LobeChat

Go to **Settings** → **MCP** → choose one of:
- **JSON Import** — paste a JSON config with your Vinkius URL
- **Manual Entry** — paste the URL directly and name the server

### 3. Start Chatting

MCP tools appear alongside native LobeChat plugins. The model decides when to invoke them based on the conversation.

---

## FAQ

**How does the MCP Marketplace work?**
It is a built-in catalog of MCP services. Browse, preview, and import with one click. Custom servers like Vinkius Cloud are added via JSON import or manual URL entry.

**What are the three plugin types?**
Default renders inline structured data. Markdown renders rich formatted content. Standalone opens a dedicated panel for interactive experiences.

**Can I build custom LobeChat plugins?**
Yes. The `@lobehub/chat-plugin-sdk` lets you create plugins that integrate with MCP tools and render custom UI in the chat interface.

**Is LobeChat free?**
Open-source under MIT. Self-host at no cost. LobeHub Cloud may offer additional managed features.
