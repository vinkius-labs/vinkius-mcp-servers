---
title: "Connect MCP Server to Open WebUI — Setup Guide | Vinkius"
description: "Add MCP servers to Open WebUI, the self-hosted AI interface with pipeline architecture. Model management, document RAG, collaborative workspaces, and MCP integration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Open WebUI — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Open WebUI. Self-hosted AI interface with pipelines and RAG."
  - - meta
    - name: keywords
      content: "Open WebUI MCP, MCP Open WebUI, Open WebUI self-hosted MCP, connect MCP server Open WebUI, Vinkius Open WebUI, Open WebUI Ollama MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Open WebUI","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP server in Open WebUI admin settings or pipeline config."},{"@type":"HowToStep","name":"Chat","text":"MCP tools extend conversations across all models and workspaces."}]}'
---

# Open WebUI

Open WebUI (formerly Ollama WebUI) is the most popular self-hosted chat interface for local LLMs. It started as a frontend for Ollama but expanded to support any OpenAI-compatible API. Its **pipeline architecture** lets you plug in custom middleware — including MCP servers — that process messages between the user and the model. Collaborative workspaces make it suitable for teams.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#6366f1,#4f46e5);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">OW</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Open WebUI</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://openwebui.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">openwebui.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web · Docker · Self-hosted</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Pipeline / Admin Settings</div></div>
</div>
</div>

## Pipelines, RAG, and Collaborative AI

Open WebUI's pipeline system is its extensibility engine. Pipelines are middleware functions that intercept and transform messages. An MCP pipeline connects the model to external tools — when the model decides it needs data from an API or database, the pipeline routes the request through MCP.

The platform also includes built-in document RAG, model management (pull, delete, and configure Ollama models from the UI), and collaborative workspaces where teams share conversations and tool configurations.

Highlights:

- **Pipeline architecture** — middleware for message processing, tool routing, and custom logic
- **Ollama integration** — pull, manage, and configure local models from the UI
- **Document RAG** — upload documents and query them in conversations
- **Collaborative workspaces** — team-based conversation sharing and tool access
- **Model management** — download, configure, and switch models from the interface
- **Admin panel** — user management, permissions, and usage analytics
- **Docker one-liner** — `docker run -d -p 3000:8080 ghcr.io/open-webui/open-webui`

## Getting Connected

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Configure MCP

In Open WebUI, go to **Admin Panel** → **Settings** → **MCP** or configure via the pipeline system. Add your Vinkius URL:

```
https://edge.vinkius.com/{TOKEN}/mcp
```

### 3. Chat with Tools

MCP tools are available across all models and workspaces. The model calls them when your questions require external data.

---

## FAQ

**What is the pipeline architecture?**
Pipelines are middleware functions that process messages between the user and the model. MCP tool routing, content filtering, and custom logic are all implemented as pipelines.

**Can I use Open WebUI with cloud models?**
Yes. Open WebUI supports any OpenAI-compatible API endpoint alongside Ollama local models. MCP tools work with all of them.

**Does Open WebUI support team collaboration?**
Yes. Workspaces let teams share conversations, model configurations, and tool access with permission controls.

**Is Open WebUI free?**
Open-source under MIT. Self-host with Docker. No licensing costs.
