---
title: "Connect MCP Server to Roo Code — Setup Guide | Vinkius"
description: "Add MCP servers to Roo Code, the VS Code AI agent with custom modes. Create specialized agents (architect, reviewer, debugger) with distinct MCP tool permissions."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Roo Code — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Roo Code. Custom agent modes with role-based MCP access."
  - - meta
    - name: keywords
      content: "Roo Code MCP, MCP Roo Code, Roo Code VS Code MCP, connect MCP server Roo Code, Vinkius Roo Code, Roo Code custom modes"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Roo Code","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add server","text":"Configure MCP server in Roo Code settings."},{"@type":"HowToStep","name":"Assign modes","text":"Create custom modes with specific MCP tool access per role."}]}'
---

# Roo Code

Roo Code is a VS Code extension that introduces **custom modes** — specialized agent personalities with distinct instructions, model choices, and tool permissions. Create a "Code Architect" mode that can only read files and call design MCP tools. Create a "Deployer" mode with access to deployment MCP tools and terminal execution. Each mode is a focused agent role with guardrails you define.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#10b981,#059669);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Ro</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Roo Code</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://roocode.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">roocode.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">stdio · Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">VS Code</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">MCP Settings + Custom Modes</div></div>
</div>
</div>

## Role-Based Agent Modes with MCP Permissions

Custom modes are Roo Code's key innovation. Each mode defines:

- **System prompt** — what the agent knows and how it behaves
- **Model** — which LLM powers this mode
- **Tool permissions** — which tools (file edit, terminal, browser, MCP) are enabled
- **File restrictions** — which files or directories the agent can read/write

This means you can give your "Reviewer" mode read-only file access and MCP tools for checking code quality metrics, while your "Implementer" mode gets full file write access but limited MCP tool access. The separation of concerns prevents accidental changes.

Features:

- **Custom modes** — specialized agents with distinct roles and permissions
- **Role-based MCP** — per-mode MCP tool access control
- **Cline-compatible** — fork of Cline with added mode system
- **Human-in-the-loop** — approval workflow inherited from Cline
- **Boomerang orchestration** — modes can delegate tasks to other modes
- **Multi-model** — different models per mode
- **Community modes** — share and import mode configurations
- **Open-source** — Apache 2.0 license

## Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Server

In Roo Code → **MCP Servers** → **Add** → paste your Vinkius URL.

### 3. Create Custom Modes

Define modes with specific MCP tool access. A "DevOps" mode might get deployment MCP tools; a "Writer" mode gets documentation tools only.

---

## FAQ

**Can I restrict MCP tool access per mode?**
Yes. Each custom mode defines which MCP tools are available. Read-only modes can't access destructive tools.

**What is Boomerang orchestration?**
A mode can delegate a subtask to another mode and get the result back. The "Architect" mode designs, then passes implementation to the "Coder" mode.

**Is Roo Code a Cline fork?**
Yes. It adds the custom modes system on top of Cline's approval-based agent workflow.

**Is Roo Code free?**
Open-source. Bring your own API keys.
