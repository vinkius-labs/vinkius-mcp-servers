---
title: "Connect MCP Server to VS Code — Setup Guide | Vinkius"
description: "Add MCP servers to VS Code via GitHub Copilot Agent Mode. Sub-agents, background agents, Plan Mode, Hooks, and MCP tool integration in the world's most popular editor."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to VS Code — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to VS Code. Copilot Agent Mode with sub-agents and MCP tools."
  - - meta
    - name: keywords
      content: "VS Code MCP, MCP VS Code, VS Code Copilot MCP, connect MCP server VS Code, Vinkius VS Code, VS Code agent mode MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to VS Code","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud and copy the URL."},{"@type":"HowToStep","name":"Add server","text":"Open Settings, search for MCP, and add your Vinkius URL as a remote server."},{"@type":"HowToStep","name":"Use Agent Mode","text":"Open Copilot Chat in Agent Mode. MCP tools appear automatically."}]}'
---

# VS Code

VS Code is the world's most popular code editor, and since February 2025, **GitHub Copilot Agent Mode** has included production-ready MCP support. The Copilot agent autonomously reads files, runs terminal commands, edits code across multiple files, and calls MCP tools — all in a single workflow. **Sub-agents** delegate focused tasks, **background agents** handle long-running operations, and **Plan Mode** structures complex changes before executing them.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#007acc,#0065a9);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">VS</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">VS Code</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Microsoft · <a href="https://code.visualstudio.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">code.visualstudio.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">stdio · Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux · Web</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Copilot Agent Mode</div></div>
</div>
</div>

## Copilot Agent Mode: Autonomous Coding with MCP

Agent Mode transforms Copilot from an autocomplete tool into an autonomous pair programmer. It reads your codebase, plans changes across multiple files, runs terminal commands, self-corrects when tests fail, and calls MCP tools when it needs external data. The agent sees MCP tools as part of its toolkit — if a tool is relevant to the task, it invokes it automatically.

The agentic architecture extends further:

- **Sub-agents** — delegate focused tasks (test writing, documentation, code review) to specialized agents that run in parallel
- **Background agents** — kick off long-running operations that continue even when VS Code is closed, notifying you when done
- **Plan Mode** — review and refine an implementation plan before the agent executes any changes
- **Hooks** — custom shell commands at agent lifecycle events (pre-tool, post-file-edit, etc.)
- **Agent Skills** — workspace-defined `.github/copilot-instructions.md` files that teach the agent project-specific knowledge
- **Auto model selection** — the agent picks the best model per task (Claude for code, GPT for docs, etc.)
- **Extensions view MCP** — install MCP servers directly from the VS Code Extensions marketplace

## How to Connect

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Server in VS Code

Open **Settings** (⌘/Ctrl+,) → search **"MCP"** → click **"Edit in settings.json"** → add:

```json
{
  "mcp": {
    "servers": {
      "vinkius": {
        "type": "http",
        "url": "https://edge.vinkius.com/{TOKEN}/mcp"
      }
    }
  }
}
```

### 3. Use in Agent Mode

Open Copilot Chat → switch to **Agent Mode** (the agent icon). MCP tools appear automatically. Ask the agent to use them or let it discover them contextually.

---

## FAQ

**Where do I configure MCP servers in VS Code?**
Settings → search "MCP" → edit `settings.json`. Or add `.vscode/mcp.json` in your workspace for project-scoped servers.

**Do sub-agents have access to MCP tools?**
Yes. Sub-agents inherit the MCP configuration from the parent agent.

**Can background agents use MCP tools?**
Yes. Background agents run with full MCP access even when VS Code is closed.

**Is VS Code Copilot open-source?**
The Copilot Chat extension has been MIT-licensed since June 2025. VS Code itself is also MIT.
