---
title: "Connect MCP Server to AIQL TUUI — Setup Guide | Vinkius"
description: "Add MCP servers to AIQL TUUI, the terminal-based MCP protocol inspector. Full MCP protocol support, connection manager, and protocol diagnostics in the terminal."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to AIQL TUUI — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to AIQL TUUI. Terminal MCP protocol inspector and testing."
  - - meta
    - name: keywords
      content: "AIQL TUUI MCP, MCP AIQL TUUI, AIQL terminal MCP, connect MCP server AIQL TUUI, Vinkius AIQL TUUI, MCP inspector terminal"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to AIQL TUUI","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Connect","text":"Add MCP server URL in AIQL TUUI connection manager."},{"@type":"HowToStep","name":"Inspect","text":"Browse tools, test calls, and inspect protocol messages in the terminal."}]}'
---

# AIQL TUUI

AIQL TUUI is a terminal-based MCP client designed for developers who need to inspect the protocol itself. It shows raw MCP messages — requests, responses, notifications — alongside a human-friendly tool browser and chat interface. The **connection manager** handles multiple servers, and the **protocol inspector** displays every JSON-RPC message for debugging.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#22d3ee,#06b6d4);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">AQ</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">AIQL TUUI</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · Terminal MCP Client</div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Terminal (TUI)</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Full Protocol Support</div></div>
</div>
</div>

## MCP Protocol Inspection from the Terminal

AIQL TUUI is for MCP server developers. When you need to see exactly what's going over the wire — JSON-RPC requests, capability negotiation, tool listing, call/response pairs — this is the tool. The TUI splits the screen between a protocol inspector (showing raw messages) and a human-friendly chat/tool view.

Features:

- **Protocol inspector** — view raw JSON-RPC messages in real time
- **Connection manager** — manage multiple MCP server connections
- **Tool browser** — explore tools with schema details
- **Manual invocation** — call tools with custom parameters
- **Chat mode** — LLM-powered conversation with tool access
- **Full MCP support** — tools, resources, prompts, sampling, notifications
- **Terminal native** — runs entirely in the terminal

## Developer Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Connect

Add your URL in the AIQL TUUI connection manager.

### 3. Inspect and Debug

Browse available tools, test individual calls, and watch raw protocol messages flow.

---

## FAQ

**Is AIQL TUUI for end users or developers?**
Primarily for MCP server developers who need protocol-level visibility.

**Can I see raw MCP messages?**
Yes. The protocol inspector shows every JSON-RPC message in real time.

**Does AIQL TUUI support the full MCP spec?**
Yes. Tools, resources, prompts, sampling, and notifications are all supported.

**Is AIQL TUUI free?**
Open-source.
