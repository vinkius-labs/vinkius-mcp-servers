---
title: "Connect MCP Server to Cursor — Setup Guide | Vinkius"
description: "Add MCP servers to Cursor IDE. AI-first editor with native MCP since v0.43, Agent Mode auto-discovery, Cursor 2.0 multi-agent, Mission Control, and Cursor Tab."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Cursor — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Cursor. AI-first editor with native MCP and Agent Mode."
  - - meta
    - name: keywords
      content: "Cursor MCP, MCP Cursor IDE, Cursor agent mode MCP, connect MCP server Cursor, Vinkius Cursor, Cursor AI MCP setup"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Cursor","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add server","text":"Go to Settings then Features then MCP then Add and paste URL."},{"@type":"HowToStep","name":"Code","text":"Agent Mode auto-discovers and invokes MCP tools during coding."}]}'
---

# Cursor

Cursor is the AI-first code editor built by Anysphere that redefined how developers interact with AI. Unlike traditional editors that bolt AI on as a sidebar, Cursor's entire UX is designed around **Agent Mode** — the AI reads your codebase, makes multi-file edits, runs commands, and self-corrects. **Native MCP** has been built in since v0.43, with the agent auto-discovering tools and invoking them without explicit instructions.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#1e1e2e,#313244);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0;border:1px solid rgba(255,255,255,0.15)">Cu</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Cursor</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Anysphere · <a href="https://cursor.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">cursor.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">stdio · Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Native Agent Mode</div></div>
</div>
</div>

## Agent Mode Auto-Discovers MCP Tools

When you activate Agent Mode in Cursor, it scans your configured MCP servers and auto-discovers available tools. If a tool is relevant to the current task, the agent calls it without you needing to mention it. Ask "check the deployment status and fix the failing test" — the agent calls your monitoring MCP tool, reads the error, edits the code, and re-runs the test.

**Cursor 2.0** introduced a multi-agent interface. **Mission Control** provides a grid view of all running agents, and you can spin up multiple agent sessions working on different tasks in parallel — each with full MCP access.

**Cursor Tab** predicts not just what you'll type, but where your cursor will move next. It rewrites entire blocks of code with one tab press — the most aggressive autocomplete in any editor.

Key capabilities:

- **Native MCP (v0.43+)** — stdio and Streamable HTTP transport
- **Auto-discovery** — agent finds and uses MCP tools contextually
- **Cursor 2.0** — multi-agent interface with parallel execution
- **Mission Control** — visual grid for managing multiple agent sessions
- **Cursor Tab** — predictive whole-block code editing
- **Semantic search** — `@Recommended` for full codebase context
- **VS Code compatible** — all extensions, themes, and keybindings work
- **ACP Registry** — register agents that also work in JetBrains

## How to Connect

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add in Settings

Go to **Settings** → **Features** → **MCP** → click **+ Add new MCP server** → paste your Vinkius URL.

### 3. Code with Agent Mode

Open the chat panel → select **Agent Mode**. The agent auto-discovers MCP tools and uses them when relevant.

---

## FAQ

**Does Agent Mode automatically use MCP tools?**
Yes. The agent auto-discovers available tools and invokes them when the task requires it. No explicit mention needed.

**Can I run multiple agents with MCP tools?**
Yes. Cursor 2.0's Mission Control lets you run parallel agents, each with full MCP access.

**Does Cursor support both stdio and HTTP MCP transport?**
Yes. Both are supported natively since v0.43.

**Is Cursor a VS Code fork?**
Yes. All VS Code extensions, themes, and keybindings are compatible.
