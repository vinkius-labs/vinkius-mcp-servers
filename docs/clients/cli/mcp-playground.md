---
title: "Connect MCP Server to MCP Playground — Setup Guide | Vinkius"
description: "Add MCP servers to MCP Playground, the interactive testing environment for MCP protocol. Tool inspector, resource explorer, and request/response viewer for debugging."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to MCP Playground — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Test MCP servers in MCP Playground. Interactive debugging and tool inspection."
  - - meta
    - name: keywords
      content: "MCP Playground, MCP testing tool, MCP Playground inspector, connect MCP server Playground, Vinkius MCP Playground, debug MCP server"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to MCP Playground","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Connect","text":"Paste the Vinkius URL in the Playground connection panel."},{"@type":"HowToStep","name":"Test","text":"Browse tools, execute them individually, and inspect results."}]}'
---

# MCP Playground

MCP Playground is an interactive testing environment designed specifically for exploring and debugging MCP servers. It is not a general-purpose chat client — it is a developer tool that lets you connect to any MCP server, browse its capabilities, execute individual tool calls, and inspect the raw protocol messages going back and forth.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#34d399,#10b981);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">MP</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">MCP Playground</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Developer Tool · <a href="https://github.com/nicobailey/mcpplayground" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">github.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Direct URL</div></div>
</div>
</div>

## A Developer Workbench for MCP Servers

Where chat clients hide MCP behind a conversational interface, the Playground exposes every detail. You see the tool catalog with full JSON schemas, execute individual tools with custom parameters, view raw request/response payloads, and measure latency — all through a structured UI.

This is essential during MCP server development. Instead of starting a chat session and hoping the LLM decides to call your tool, you invoke it directly with specific inputs and inspect the output. When something goes wrong, the raw message viewer shows exactly what was sent and received.

What the Playground provides:

- **Tool inspector** — browse tools with full JSON schemas and descriptions
- **Direct execution** — call tools individually with custom parameters
- **Request/response viewer** — see raw MCP protocol messages
- **Resource browser** — navigate server-exposed resources
- **Latency metrics** — measure tool call response times
- **No LLM needed** — test MCP without an AI provider

## Getting Started

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Connect in the Playground

Open MCP Playground and paste the URL in the connection panel:

```
https://edge.vinkius.com/{TOKEN}/mcp
```

The Playground connects and fetches the server's capability manifest.

### 3. Explore and Test

Browse the tool catalog. Click any tool to see its schema — then fill in parameters and execute. Results display inline with timing information.

---

## FAQ

**Is MCP Playground a chat client?**
No. It is a developer tool for testing and debugging MCP servers. It does not include an LLM — you interact with tools directly.

**Can I test error cases?**
Yes. The Playground lets you send malformed inputs and see how the server responds, making it ideal for error-handling validation.

**Does it support all MCP primitives?**
It supports tools, resources, and prompts. Sampling requires an LLM and is not available in the Playground.

**Is MCP Playground free?**
Open-source. No account or API key needed — just a server URL.
