---
title: "Connect MCP Server to Composio — Setup Guide | Vinkius"
description: "Add MCP servers to Composio, the tooling platform for AI agents. 250+ managed integrations with auth handling, and MCP bridge to connect any framework."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Composio — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Composio. 250+ managed integrations with auth handling for agents."
  - - meta
    - name: keywords
      content: "Composio MCP, MCP Composio, Composio AI tools MCP, connect MCP server Composio, Vinkius Composio, Composio agent integrations"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Composio","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add tool","text":"Register the Vinkius MCP server as a tool source in Composio."},{"@type":"HowToStep","name":"Use","text":"Any framework connected via Composio can now call your MCP tools."}]}'
---

# Composio

Composio is a tooling infrastructure platform for AI agents. It provides 250+ managed integrations (GitHub, Slack, Notion, Salesforce, Jira, and more) with authentication handling, so agent developers never have to implement OAuth flows or manage API keys. MCP serves as the transport layer — Composio tools are exposed as MCP endpoints, and external MCP servers like Vinkius Cloud can be consumed through the same interface.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#eab308,#ca8a04);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Co</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Composio</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">composio.dev · <a href="https://composio.dev" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">composio.dev</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Python · JS · Framework</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">MCP Bridge</div></div>
</div>
</div>

## 250+ Integrations with Managed Auth

The hardest part of agent tooling is authentication. Each service has its own OAuth flow, API key format, or token refresh mechanism. Composio handles all of this — you connect a service once, and every agent framework (LangChain, CrewAI, OpenAI, Anthropic) can use it through Composio's unified interface.

MCP extends this by making Composio's integrations available as standard MCP tools. Any MCP client — Claude Desktop, Cursor, VS Code — can access Composio's 250+ integrations without custom code. Vice versa, external MCP servers plug into Composio-powered agents.

Core advantages:

- **250+ managed integrations** — GitHub, Slack, Notion, Salesforce, Jira, Google Drive, etc.
- **Auth handling** — OAuth2, API keys, and token refresh managed automatically
- **Multi-framework** — LangChain, CrewAI, OpenAI, Anthropic, LlamaIndex, and more
- **MCP bridge** — Composio tools exposed as MCP endpoints; MCP servers consumed as tools
- **Trigger system** — event-based agent activation (webhooks, schedules, changes)
- **Python and JavaScript** — SDKs for both languages

## How to Integrate

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Register in Composio

Add Vinkius Cloud as an MCP tool source in your Composio configuration:

```python
from composio import ComposioToolSet

toolset = ComposioToolSet()
# Register external MCP server
toolset.add_mcp_server("https://edge.vinkius.com/{TOKEN}/mcp")
```

### 3. Use with Any Framework

Composio routes tools to whatever agent framework you use — LangChain, CrewAI, OpenAI function calling, or direct MCP clients.

---

## FAQ

**How does Composio handle authentication?**
You connect a service once through Composio's auth flow. It stores credentials, refreshes tokens, and handles OAuth — so your agents never deal with auth directly.

**Can MCP clients access Composio tools directly?**
Yes. Composio exposes its integrations as MCP endpoints. Any standard MCP client can discover and call them.

**Which agent frameworks work with Composio?**
LangChain, LlamaIndex, CrewAI, OpenAI, Anthropic, AutoGen, and any framework that supports MCP or function calling.

**Is Composio free?**
Free tier available. Paid plans unlock higher rate limits and more integrations.
