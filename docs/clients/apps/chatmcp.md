---
title: "Connect MCP Server to ChatMCP — Setup Guide | Vinkius"
description: "Add MCP servers to ChatMCP, the dedicated MCP client. Purpose-built for browsing, testing, and interacting with MCP servers through a chat interface."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to ChatMCP — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to ChatMCP. Purpose-built MCP client for testing and chat."
  - - meta
    - name: keywords
      content: "ChatMCP, MCP ChatMCP, ChatMCP client, connect MCP server ChatMCP, Vinkius ChatMCP, MCP testing client"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to ChatMCP","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add server","text":"Paste the Vinkius URL in ChatMCP Add Server dialog."},{"@type":"HowToStep","name":"Browse","text":"Explore available tools, test them, and chat with MCP-powered responses."}]}'
---

# ChatMCP

ChatMCP is built specifically for MCP. While other clients retrofit MCP support onto existing chat interfaces, ChatMCP was designed from the ground up to discover, browse, test, and interact with MCP servers. It shows tool schemas, lets you test individual tools manually, and provides a chat interface where an LLM uses those tools naturally.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#06b6d4,#0891b2);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">CM</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">ChatMCP</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://github.com/daodao97/chatmcp" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">GitHub</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Native MCP Client</div></div>
</div>
</div>

## A Client Built for MCP

ChatMCP's interface reflects its purpose. The left sidebar lists your connected MCP servers. Clicking a server shows its available tools with full schema details — parameters, types, descriptions. You can test individual tools with custom inputs before using them in conversation.

The chat view lets an LLM orchestrate tool calls naturally. Ask a question, and the model decides which tools to invoke, passes parameters, and synthesizes results. The UI clearly shows each tool call and response for full transparency.

Key aspects:

- **MCP-first design** — built specifically for MCP server interaction
- **Tool browser** — see all tools, schemas, and descriptions at a glance
- **Manual testing** — invoke individual tools with custom parameters
- **Chat mode** — LLM-powered conversation with automatic tool invocation
- **Multi-server** — connect to multiple MCP servers simultaneously
- **Tool call transparency** — every invocation is visible with inputs and outputs
- **Desktop app** — Flutter-based cross-platform application

## Connecting

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add Server

Open ChatMCP → **Add Server** → paste your Vinkius URL. The server appears in the sidebar.

### 3. Browse and Chat

Explore available tools in the browser panel. Switch to chat mode for LLM-powered conversations that use tools automatically.

---

## FAQ

**Can I test individual MCP tools before using them in chat?**
Yes. The tool browser lets you invoke any tool manually with custom parameters and inspect the raw response.

**Does ChatMCP support multiple MCP servers?**
Yes. Add as many servers as you need. All tools from all servers are available in the chat interface.

**Which LLM providers does ChatMCP support?**
Multiple providers including OpenAI, Anthropic, and others. Configure your preferred provider in settings.

**Is ChatMCP free?**
Open-source. Free to download and use.
