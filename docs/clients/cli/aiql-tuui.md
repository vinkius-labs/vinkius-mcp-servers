---
title: "Connect MCP Server to AIQL TUUI — Setup Guide | Vinkius"
description: "Add MCP servers to AIQL TUUI, the desktop AI client with full MCP protocol support — tools, prompts, resources, and sampling. Native cross-platform app."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to AIQL TUUI — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP servers to AIQL TUUI. Full MCP protocol: tools, prompts, resources."
  - - meta
    - name: keywords
      content: "AIQL TUUI MCP, MCP AIQL, AIQL desktop MCP, connect MCP server AIQL TUUI, Vinkius AIQL"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to AIQL TUUI","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add server","text":"In AIQL TUUI, add a new MCP connection with your Vinkius URL."},{"@type":"HowToStep","name":"Browse","text":"Explore tools, resources, and prompts through the protocol-aware UI."}]}'
---

# AIQL TUUI

AIQL TUUI is a native desktop AI client that implements the complete MCP specification. Unlike clients that only support tool calls, TUUI handles all four MCP primitives: tools, resources, prompts, and sampling. This makes it ideal for testing MCP servers that go beyond basic function calling.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#a855f7,#9333ea);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">AQ</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">AIQL TUUI</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">aiql.com · <a href="https://aiql.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">aiql.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Connection Manager</div></div>
</div>
</div>

## Full MCP Protocol in a Desktop App

TUUI's connection manager displays each connected MCP server's full capability surface. You can browse available tools with their schemas, navigate resources like a file browser, select prompt templates to start conversations, and inspect sampling requests from the server.

This protocol-aware approach is particularly useful when developing or evaluating MCP servers. You see exactly what the server exposes and how each primitive behaves — without needing to read raw JSON.

Key features:

- **All four MCP primitives** — tools, resources, prompts, and sampling
- **Connection manager** — visual overview of all connected servers and their capabilities
- **Protocol inspector** — see raw MCP messages for debugging
- **Multi-provider** — OpenAI, Anthropic, Google, and local models
- **Native app** — fast, responsive desktop UI
- **Cross-platform** — consistent experience on all operating systems

## Connecting to Vinkius Cloud

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), navigate to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add Connection

In AIQL TUUI, open the **Connection Manager** → **Add Server** → paste:

```
https://edge.vinkius.com/{TOKEN}/mcp
```

TUUI probes the server and displays its capabilities immediately.

### 3. Explore and Chat

Browse the tool catalog, check available resources, or start a conversation. TUUI uses all available MCP primitives automatically.

---

## FAQ

**What does "full MCP protocol" mean?**
Most clients only support MCP tools. TUUI also supports resources (server-provided data), prompts (server-provided templates), and sampling (server-initiated model calls). Together these cover the entire MCP specification.

**Is TUUI useful for MCP development?**
Very. The protocol inspector shows raw MCP messages, making it easy to debug server implementations.

**Which AI models work with TUUI?**
Any provider with an OpenAI-compatible API: OpenAI, Anthropic, Google, DeepSeek, Groq, and local Ollama.

**Is AIQL TUUI free?**
Free for personal use. Team features may require a license from AIQL.
