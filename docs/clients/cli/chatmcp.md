---
title: "Connect MCP Server to chatmcp — Setup Guide | Vinkius"
description: "Add MCP servers to chatmcp, the dedicated MCP client application. Chat-based tool discovery, resource browsing, and prompt templates — purpose-built for MCP."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to chatmcp — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP servers to chatmcp. Purpose-built MCP client app with tool discovery."
  - - meta
    - name: keywords
      content: "chatmcp MCP, MCP chatmcp client, chatmcp app, connect MCP server chatmcp, Vinkius chatmcp, dedicated MCP client"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to chatmcp","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add server","text":"Paste the Vinkius URL in the chatmcp Add Server dialog."},{"@type":"HowToStep","name":"Browse","text":"Explore tools, resources, and prompts through the visual interface."}]}'
---

# chatmcp

chatmcp is one of the few applications built from the ground up as an MCP client. While other tools add MCP support to an existing chat interface, chatmcp makes the protocol its core feature — offering dedicated panels for tool discovery, resource browsing, and prompt template management.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#6366f1,#4f46e5);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">cm</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">chatmcp</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://github.com/daodao97/chatmcp" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">github.com/daodao97</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Native MCP Client</div></div>
</div>
</div>

## Built for MCP, Not Retrofitted

Most MCP clients started as general-purpose chat apps that added tool support later. chatmcp takes the opposite approach: the entire UI is organized around MCP primitives. When you connect a server, you see its tools listed with schemas, its resources browsable in a sidebar, and its prompt templates available as one-click starters.

This makes chatmcp especially valuable for MCP server development. You can connect a server under development, inspect its tool definitions, test individual calls, and see how the LLM uses them — all through a graphical interface instead of raw JSON.

What chatmcp provides:

- **Tool catalog** — browse all available tools with parameter schemas and descriptions
- **Resource browser** — navigate MCP resources like files in a file manager
- **Prompt templates** — use server-provided prompts to start focused conversations
- **Visual tool calls** — see tool inputs, outputs, and timing in the chat thread
- **Multi-server** — connect several MCP servers and see their tools side by side
- **Open-source** — cross-platform desktop app

## Getting Started

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add the Server

Open chatmcp → **Add Server** → paste:

```
https://edge.vinkius.com/{TOKEN}/mcp
```

The app immediately probes the server and displays its capabilities.

### 3. Explore and Chat

Browse the tool catalog to see what's available. Start a conversation — the LLM will invoke tools as needed — or test individual tools directly from the catalog panel.

---

## FAQ

**Is chatmcp useful for MCP server developers?**
Very. Its tool catalog displays schemas, descriptions, and response types for every exposed tool. You can test calls individually without writing a chat prompt.

**Does chatmcp support resources and prompts?**
Yes. Unlike many clients that only support tools, chatmcp has dedicated UI panels for MCP resources and prompt templates.

**Which LLM models does it support?**
chatmcp supports any OpenAI-compatible API, including Claude, GPT, and local models via Ollama.

**Is chatmcp free?**
Open-source. You provide your own LLM API key.
