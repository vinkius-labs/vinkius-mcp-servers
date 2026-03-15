---
title: "Connect MCP Server to 5ire — Setup Guide | Vinkius"
description: "Add MCP servers to 5ire, the desktop AI assistant with MCP Marketplace. Discover and share tools, local RAG with bge-m3 embeddings, usage analytics."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to 5ire — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to 5ire. MCP Marketplace, local RAG, and usage analytics."
  - - meta
    - name: keywords
      content: "5ire MCP, MCP 5ire, 5ire MCP Marketplace, connect MCP server 5ire, Vinkius 5ire, 5ire local RAG MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to 5ire","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add","text":"Add your server in 5ire MCP Marketplace as a custom server."},{"@type":"HowToStep","name":"Chat","text":"Combine marketplace tools with your custom Vinkius server."}]}'
---

# 5ire

5ire is a desktop AI assistant with a built-in **MCP Marketplace** — a community hub where users discover, install, and share MCP tools. Instead of manually configuring server URLs, browse the marketplace and install tools with a click. 5ire also features **local RAG** using bge-m3 embeddings for private document search and **usage analytics** for tracking API spending across multiple providers.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#06b6d4,#0891b2);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">5i</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">5ire</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://5ire.app" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">5ire.app</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">MCP Marketplace</div></div>
</div>
</div>

## Built-In MCP Marketplace

The marketplace differentiates 5ire from other desktop AI clients. Instead of searching GitHub for MCP server implementations, browse a curated directory inside the app. Filters narrow by category (databases, APIs, productivity), and one-click install handles configuration.

Your custom Vinkius Cloud server sits alongside marketplace tools. The model sees all available tools and decides which to use based on the question.

Local RAG using **bge-m3 embeddings** indexes your documents (DOCX, XLSX, PPTX, PDF, TXT, CSV) for private, offline search. Combined with MCP, the model answers from both your local documents and remote systems.

Features:

- **MCP Marketplace** — browse, install, and share MCP tools in-app
- **Local RAG** — bge-m3 embeddings for DOCX, XLSX, PDF, PPTX, TXT, CSV
- **Usage analytics** — real-time API cost tracking across all providers
- **Multi-provider** — OpenAI, Anthropic, Google, Mistral, DeepSeek, Ollama
- **Prompt library** — organized prompt templates with MCP context
- **Conversation bookmarks** — pin important results for quick reference
- **Keyword search** — full-text search across conversation history

## Quick Connect

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add Custom Server

In **5ire** → **MCP Marketplace** → **Add Custom Server**. Paste your Vinkius URL.

### 3. Combine with Marketplace

Your custom MCP server appears alongside marketplace tools — all available to the model.

---

## FAQ

**What is the MCP Marketplace?**
An in-app directory of community MCP tools. Browse, install, and share tools without manual URL configuration.

**What document formats does 5ire RAG support?**
DOCX, XLSX, PPTX, PDF, TXT, and CSV using local bge-m3 embeddings.

**Does 5ire track API spending?**
Yes. Usage analytics show real-time API costs across all connected providers.

**Is 5ire free?**
Open-source and free.
