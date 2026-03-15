---
title: "Connect MCP Server to n8n — Setup Guide | Vinkius"
description: "Add MCP servers to n8n, the workflow automation platform with bidirectional MCP. MCP Server Trigger and MCP Client Tool nodes, 400+ integrations, visual AI agents."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to n8n — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to n8n. Bidirectional MCP with 400+ workflow integrations."
  - - meta
    - name: keywords
      content: "n8n MCP, MCP n8n, n8n workflow MCP, connect MCP server n8n, Vinkius n8n, n8n AI agents MCP, n8n MCP Server Trigger"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to n8n","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add node","text":"Add an MCP Client Tool node to your n8n AI agent workflow and paste the URL."},{"@type":"HowToStep","name":"Run","text":"Execute the workflow. The agent discovers and calls MCP tools automatically."}]}'
---

# n8n

n8n is a fair-code workflow automation platform with 400+ built-in integrations. Its v2.0 release introduced **bidirectional MCP** — two dedicated nodes that let n8n both consume and expose MCP tools. The **MCP Client Tool** connects your AI agents to external servers like Vinkius Cloud, while the **MCP Server Trigger** turns any workflow into an MCP endpoint other agents can discover.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#ea4b71,#ff6d5a);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">n8</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">n8n</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">v2.0 · <a href="https://n8n.io" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">n8n.io</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web · Self-hosted · Cloud</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">MCP Server Trigger + Client Tool</div></div>
</div>
</div>

## 400+ Integrations Become MCP-Accessible

Every n8n node — Slack, Gmail, PostgreSQL, Notion, Airtable, and hundreds more — can be wired into a workflow that the MCP Server Trigger exposes. This means an AI agent in Claude Desktop or Cursor can trigger a multi-step n8n workflow (send an email, update a database, post to Slack) through a single MCP tool call.

On the consumption side, the MCP Client Tool node plugs into n8n's visual AI agent builder. Your agent reasons through tasks, selects MCP tools from Vinkius Cloud, and chains results with other workflow nodes — all configured through drag-and-drop.

Core MCP features:

- **MCP Server Trigger** — expose any workflow as an MCP tool for external agents
- **MCP Client Tool** — connect n8n agents to external MCP servers
- **Visual AI agent builder** — drag-and-drop multi-step reasoning with memory
- **Task Runners** — isolated code execution for Python and JavaScript
- **Publish/Save** — version-controlled workflow management
- **Self-hosted or cloud** — run on your infrastructure or n8n Cloud

## Connecting to Vinkius Cloud

### 1. Get a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add the MCP Client Tool Node

In your n8n AI agent workflow, add an **MCP Client Tool** node. Paste the Vinkius URL:

```
https://edge.vinkius.com/{TOKEN}/mcp
```

n8n discovers the server's tools and makes them available to the agent.

### 3. (Optional) Expose Workflows via MCP

Add an **MCP Server Trigger** to any workflow. External agents can now discover and execute your n8n workflow as a standard MCP tool.

---

## FAQ

**Can n8n expose its workflows as MCP tools?**
Yes. The MCP Server Trigger node turns any workflow into an MCP endpoint. External agents (Claude Desktop, Cursor, etc.) discover and call it through standard MCP.

**Which n8n nodes can be used with MCP?**
All of them. Any node (Slack, Gmail, databases, HTTP, etc.) can be wired into a workflow exposed via MCP Server Trigger.

**Does n8n support AI agents?**
Yes. The AI Agent node provides multi-step reasoning, tool selection, memory, and autonomous decision-making within visual workflows.

**Is n8n free?**
n8n is fair-code (source-available). Self-hosting is free. n8n Cloud offers managed hosting with pricing tiers.
