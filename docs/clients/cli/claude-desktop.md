---
title: "Connect MCP Server to Claude Desktop — Setup Guide | Vinkius"
description: "Add MCP servers to Claude Desktop by Anthropic. The reference MCP client with full protocol support — tools, resources, prompts, and sampling."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Claude Desktop — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP servers to Claude Desktop. Full MCP protocol — tools, resources, prompts."
  - - meta
    - name: keywords
      content: "Claude Desktop MCP, MCP Claude Desktop, Claude Desktop MCP server, connect MCP server Claude Desktop, Vinkius Claude Desktop, claude_desktop_config.json MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Claude Desktop","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Edit config","text":"Add the server to claude_desktop_config.json."},{"@type":"HowToStep","name":"Restart","text":"Restart Claude Desktop. MCP tools appear in the toolbar."}]}'
---

# Claude Desktop

Claude Desktop is Anthropic's native desktop application and the original reference client for the Model Context Protocol. It implements the full MCP specification — tools, resources, prompts, and sampling — making it the most complete MCP client available. If an MCP feature exists, Claude Desktop supports it.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#d4a574,#a87c5a);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Cl</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Claude Desktop</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Anthropic · <a href="https://claude.ai/download" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">claude.ai/download</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">stdio · Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">JSON Config</div></div>
</div>
</div>

## The Reference MCP Implementation

As the first application to ship with MCP support, Claude Desktop implements every part of the protocol. This matters because many MCP clients only support a subset — typically just tools. Claude Desktop also handles:

- **Resources** — the model can read files, database records, or documents exposed by MCP servers
- **Prompts** — MCP servers can provide reusable prompt templates that appear in the Claude Desktop UI
- **Sampling** — the server can request Claude to generate text on its behalf, enabling multi-step workflows
- **Tool chaining** — Claude can call multiple tools in sequence without user intervention

This full-protocol support makes Claude Desktop the best place to test and validate MCP servers during development. If your server works here, it will work everywhere.

## Configuration

### 1. Create a Vinkius Token

In [Vinkius Cloud](https://cloud.vinkius.com), select your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Edit `claude_desktop_config.json`

Open the config file:
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

Add your server:

```json
{
  "mcpServers": {
    "vinkius": {
      "url": "https://edge.vinkius.com/{TOKEN}/mcp"
    }
  }
}
```

### 3. Restart Claude Desktop

Quit and reopen the app. A small hammer icon in the chat toolbar indicates MCP servers are connected. Click it to see the list of available tools.

::: tip Multiple servers
Add as many entries as you need to the `mcpServers` object. Each gets its own namespace and tool list.
:::

---

## FAQ

**What MCP features does Claude Desktop support?**
All of them: tools, resources, prompts, sampling, and notifications. It is the reference implementation of the full MCP specification.

**Where is the config file located?**
On macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`. On Windows: `%APPDATA%\Claude\claude_desktop_config.json`.

**Can I use both stdio and HTTP servers?**
Yes. Claude Desktop supports both transports simultaneously. Vinkius Cloud uses Streamable HTTP, while local servers typically use stdio.

**Does Claude Desktop require a subscription?**
You need a Claude Pro, Team, or Enterprise subscription, or an API key. There is no free tier.
