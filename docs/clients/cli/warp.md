---
title: "Connect MCP Server to Warp Terminal — Setup Guide | Vinkius"
description: "Add MCP servers to Warp, the modern terminal with Agent Mode. Natural-language commands, block-based output, and MCP tool integration via YAML config."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Warp Terminal — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP servers to Warp terminal via Agent Mode settings. AI-powered terminal."
  - - meta
    - name: keywords
      content: "Warp MCP, MCP Warp terminal, Warp Agent Mode MCP, connect MCP server Warp, Vinkius Warp, Warp AI terminal MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Warp","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud and copy the URL."},{"@type":"HowToStep","name":"Add server","text":"In Warp Settings → Agent Mode → MCP Servers, add your Vinkius Cloud URL."},{"@type":"HowToStep","name":"Use","text":"Open Agent Mode and ask questions. Warp invokes MCP tools as needed."}]}'
---

# Warp

Warp replaces the traditional terminal with a GPU-accelerated, block-based interface that includes an AI Agent Mode. When MCP servers are configured, Agent Mode can reach beyond the local shell and call external APIs, databases, or monitoring dashboards — all through natural-language prompts.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#0ea5e9,#0284c7);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Wa</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Warp</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Warp · <a href="https://www.warp.dev" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">warp.dev</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Settings UI</div></div>
</div>
</div>

## Agent Mode + MCP

Agent Mode turns Warp from a conventional shell into an AI assistant that interprets your intent, writes commands, and explains output. Adding MCP servers expands what Agent Mode can do — instead of being limited to shell utilities, it gains access to any capability exposed by an MCP tool.

This is especially useful when you want the agent to combine shell commands with cloud services: "find the slowest endpoint in the last 24 hours and open a draft PR with an optimization" can involve an MCP monitoring tool, local `git` commands, and file edits, all orchestrated in a single block.

Warp-specific advantages:

- **Block-based output** — each MCP result renders in its own collapsible block, keeping long sessions readable
- **Team Warp Drive** — share MCP-augmented workflows with your team via synced commands
- **Command palette** — access MCP tools from Ctrl+P search
- **GPU rendering** — smooth scrolling even with large MCP payloads

## Setting Up

### 1. Get Your Vinkius URL

Go to [Vinkius Cloud](https://cloud.vinkius.com) → **Connection Tokens** → **Create**. Copy the Streamable HTTP URL.

### 2. Add the MCP Server in Warp

Open **Warp Settings** (⌘/Ctrl+,) → **Agent Mode** → **MCP Servers** → **Add Server**.

Paste:
```
https://edge.vinkius.com/{TOKEN}/mcp
```

Give it a name like "vinkius" and save.

### 3. Try It Out

Open Agent Mode (Ctrl+Shift+Space) and ask something that requires your MCP tools. Warp will show the tool invocation and results in a dedicated block.

---

## FAQ

**Can I add multiple MCP servers to Warp?**
Yes. Each server appears as a separate entry in the Agent Mode settings. All tools from all servers are available simultaneously.

**Does Warp support stdio MCP servers?**
Warp supports both Streamable HTTP and stdio transports. For Vinkius Cloud, Streamable HTTP is used.

**Is Warp free?**
Warp offers a free tier for individual use with limited Agent Mode queries. Team and enterprise plans remove those limits.

**Is Warp available on Windows?**
Currently Warp runs on macOS and Linux. Windows support is on the roadmap.
