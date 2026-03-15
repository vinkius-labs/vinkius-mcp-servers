---
title: "Connect MCP Server to Amp — Setup Guide | Vinkius"
description: "Add MCP servers to Amp by Sourcegraph. Thread-based coding agent with persistent context, multi-thread orchestration, and MCP tool integration in VS Code."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Amp — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Amp. Sourcegraph coding agent with thread-based context."
  - - meta
    - name: keywords
      content: "Amp MCP, MCP Amp, Amp Sourcegraph MCP, connect MCP server Amp, Vinkius Amp, Amp coding agent"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Amp","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP server in Amp settings."},{"@type":"HowToStep","name":"Code","text":"Agent uses MCP tools within persistent coding threads."}]}'
---

# Amp

Amp is a coding agent by Sourcegraph built around **persistent threads**. Each thread maintains full context across sessions — come back tomorrow and the agent remembers exactly what you were working on, what MCP data it fetched, and what changes it made. **Multi-thread orchestration** lets you run parallel coding tasks, each with independent context and MCP tool access.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#ff6b6b,#ee5a24);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Am</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Amp</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Sourcegraph · <a href="https://ampcode.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">ampcode.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">VS Code · Terminal</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">MCP Settings</div></div>
</div>
</div>

## Persistent Threads That Remember MCP Context

Other agents lose context when you close the editor. Amp threads are persistent — the agent remembers prior MCP tool results, previous file changes, and the reasoning behind decisions from earlier sessions. This is valuable for multi-day tasks where you iteratively refine a feature using external data.

Sourcegraph's code search powers Amp's understanding of large codebases. The agent finds relevant code across repositories, not just in the current project.

Features:

- **Persistent threads** — full context preserved across sessions
- **Multi-thread** — parallel coding tasks with independent contexts
- **Sourcegraph search** — cross-repo code intelligence
- **Terminal + IDE** — works in both VS Code and the terminal
- **Multi-model** — Claude, GPT, and other providers
- **Checkpoints** — snapshot and restore agent state
- **Open-source** — Apache 2.0 license

## Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Server

In Amp → **Settings** → **MCP** → add your Vinkius URL.

### 3. Thread-Based Coding

Start a thread. MCP tool results persist alongside file changes and conversation context.

---

## FAQ

**Do threads remember MCP tool results?**
Yes. MCP data from previous sessions is available in the thread context.

**Can I run multiple coding tasks in parallel?**
Yes. Each thread is independent with its own context and MCP access.

**Does Amp have Sourcegraph's code search?**
Yes. Cross-repo code intelligence powers codebase understanding.

**Is Amp free?**
Free tier available. Pro plans through Sourcegraph.
