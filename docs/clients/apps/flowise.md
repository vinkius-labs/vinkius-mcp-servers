---
title: "Connect MCP Server to Flowise — Setup Guide | Vinkius"
description: "Add MCP servers to Flowise, the drag-and-drop LLM flow builder. Visual node editor, chatflow and agentflow modes, custom tools, and MCP server integration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Flowise — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Flowise. Drag-and-drop AI flows with MCP tool nodes."
  - - meta
    - name: keywords
      content: "Flowise MCP, MCP Flowise, Flowise LLM MCP, connect MCP server Flowise, Vinkius Flowise, Flowise drag drop AI"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Flowise","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add node","text":"Drag an MCP tool node into your Flowise canvas and paste the URL."},{"@type":"HowToStep","name":"Connect","text":"Wire the MCP node to your agent or chatflow."}]}'
---

# Flowise

Flowise is a visual LLM application builder where you create AI workflows by dragging and dropping nodes on a canvas. No coding required — connect LLM nodes, tool nodes, memory nodes, and output nodes with wires to build chatbots, agents, and automation flows. MCP servers appear as tool nodes you can wire into any flow.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#818cf8,#6366f1);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Fw</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Flowise</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://flowiseai.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">flowiseai.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web · Self-hosted</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">MCP Tool Node</div></div>
</div>
</div>

## Visual Canvas for MCP-Powered AI Flows

Flowise's node-based canvas makes MCP accessible to non-developers. Drag an "MCP Tool" node onto the canvas, paste your server URL, wire it to an agent node, and the agent can call your tools. No Python, no YAML, no JSON config files.

Two flow modes serve different needs. **Chatflow** mode creates conversational interfaces — chatbots that answer questions using MCP tools for live data. **Agentflow** mode builds autonomous agents that reason, plan, and execute multi-step tasks using MCP tools at each step.

Highlights:

- **Visual node editor** — drag-and-drop AI workflow builder
- **Chatflow mode** — conversational interfaces with tool access
- **Agentflow mode** — autonomous multi-step agent workflows
- **90+ integrations** — LLMs, vector stores, tools, and memory systems
- **Embeddable chat** — deploy flows as chat widgets on any website
- **API endpoints** — every flow gets a REST API automatically
- **Self-hosted** — Docker or npm, full data control

## Drag-and-Drop Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Tool Node

In the Flowise canvas, drag an **MCP Tool** node from the toolbox. Paste your Vinkius URL in the configuration panel:

```
https://edge.vinkius.com/{TOKEN}/mcp
```

### 3. Wire to an Agent

Connect the MCP Tool node to your Agent or Chatflow node. The agent discovers available tools automatically. Deploy as a chat widget or API endpoint.

---

## FAQ

**Do I need to code to use MCP in Flowise?**
No. Everything is visual. Drag the MCP Tool node, paste a URL, wire it to your agent — done.

**Can I embed MCP-powered Flowise flows on my website?**
Yes. Every Flowise flow can be deployed as an embeddable chat widget with a snippet of HTML.

**Does Flowise support multiple MCP servers?**
Yes. Add multiple MCP Tool nodes to the same flow, each connected to a different server. The agent decides which to use.

**Is Flowise free?**
Open-source under Apache 2.0. Self-host at no cost. Flowise Cloud offers managed hosting.
