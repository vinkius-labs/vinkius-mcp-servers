---
title: "Connect MCP Server to Cline — Setup Guide | Vinkius"
description: "Add MCP servers to Cline, the autonomous coding agent for VS Code. Human-in-the-loop approval, diff previews, browser automation, and first-class MCP support."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Cline — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Cline. VS Code agent with approval workflow and MCP tools."
  - - meta
    - name: keywords
      content: "Cline MCP, MCP Cline, Cline VS Code MCP, connect MCP server Cline, Vinkius Cline, Cline autonomous agent MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Cline","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add server","text":"Add MCP server in Cline MCP Servers panel within VS Code."},{"@type":"HowToStep","name":"Approve","text":"Cline shows each MCP tool call for approval before execution."}]}'
---

# Cline

Cline is an autonomous coding agent that runs inside VS Code with a distinctive **human-in-the-loop** philosophy. Every action — file edit, terminal command, MCP tool call — is presented for your approval before execution. You see the exact diff, the exact command, the exact tool call parameters. Approve, reject, or modify. This makes Cline the safest agent for production codebases where you need full visibility into every change.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#f59e0b,#d97706);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Cl</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Cline</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://github.com/cline/cline" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">GitHub</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">stdio · Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">VS Code</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">First-class MCP Panel</div></div>
</div>
</div>

## Approval-First Agent with Transparent MCP Calls

Cline's approval workflow extends to MCP tool calls. Before any MCP tool is invoked, you see exactly what parameters the agent is sending. This transparency is critical when MCP tools interact with production systems — you control what data goes in and what comes out.

The agent handles multi-step tasks: read files, analyze code, write changes, run tests, call MCP tools for external data, and iterate. Each step pauses for approval unless you opt into auto-approval for specific action types.

**Browser automation** is built in. Cline can launch a browser, navigate to URLs, take screenshots, and interact with web pages — useful for testing web applications or scraping data during development.

Features:

- **Human-in-the-loop** — every action shown for approval before execution
- **Diff previews** — see exact code changes before they're applied
- **First-class MCP** — dedicated MCP panel for server management
- **Browser automation** — navigate, screenshot, and interact with web pages
- **Multi-model** — Claude, GPT, Gemini, Ollama, any OpenAI-compatible API
- **Cost tracking** — real-time token usage and API cost display
- **Auto-approval** — optionally skip approval for specific action types
- **Open-source** — Apache 2.0 license

## Setup in VS Code

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Server

In the Cline panel → **MCP Servers** tab → **Add** → paste your Vinkius URL.

### 3. Approve and Execute

When the agent calls an MCP tool, you see the parameters and can approve, reject, or modify before it executes.

---

## FAQ

**Can I skip the approval step for MCP tool calls?**
Yes. Enable auto-approval for specific action types if you trust the MCP server.

**Does Cline show what data is sent to MCP tools?**
Yes. Every MCP tool call shows the exact parameters before execution.

**Does Cline support browser automation?**
Yes. The agent can launch browsers, navigate, take screenshots, and interact with web pages.

**Is Cline free?**
Open-source. Bring your own LLM API keys.
