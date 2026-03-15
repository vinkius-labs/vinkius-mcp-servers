---
title: "Connect MCP Server to Codex CLI — Setup Guide | Vinkius"
description: "Add MCP servers to OpenAI Codex CLI, the terminal-based coding agent. Sandbox execution, auto-approval modes, multimodal input, and MCP tool integration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Codex CLI — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Codex CLI. OpenAI terminal agent with sandbox and MCP."
  - - meta
    - name: keywords
      content: "Codex CLI MCP, MCP Codex CLI, OpenAI Codex CLI MCP, connect MCP server Codex CLI, Vinkius Codex CLI"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Codex CLI","step":[{"@type":"HowToStep","name":"Install","text":"npm install -g @openai/codex."},{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Run","text":"Launch codex with MCP config. Agent runs in sandboxed environment."}]}'
---

# Codex CLI

Codex CLI is OpenAI's open-source terminal coding agent. It runs in a **sandboxed environment** with three approval modes: **suggest** (review everything), **auto-edit** (auto-approve file changes, approve commands), and **full-auto** (approve everything). The agent reads your codebase, writes code, runs commands, and calls MCP tools — all from the terminal. Multimodal input lets you paste screenshots alongside text prompts.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#10a37f,#0d8c6c);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Cx</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Codex CLI</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">OpenAI · <a href="https://github.com/openai/codex" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">GitHub</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Terminal (macOS / Linux)</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Config File</div></div>
</div>
</div>

## Three Approval Modes for Different Trust Levels

Codex CLI's approval system adapts to your comfort level:

- **Suggest** — every action requires approval. See diffs and commands before execution
- **Auto-edit** — file changes apply automatically, terminal commands still need approval
- **Full-auto** — everything runs without prompting. Use in sandboxed environments

The sandboxed execution uses network-disabled containers, so even in full-auto mode, the agent can't make unexpected network calls. MCP tools are the controlled exception — they provide specific, approved network access.

**Multimodal input** lets you drag screenshots, mockups, or error images into the terminal. The agent "sees" the image and incorporates visual context into its coding decisions.

Features:

- **Three approval modes** — suggest, auto-edit, full-auto
- **Sandbox** — network-disabled environment for safe execution
- **Multimodal** — paste images alongside text prompts
- **OpenAI models** — GPT-4o, o3, o4-mini, and future models
- **Git-aware** — reads diffs, respects `.gitignore`
- **Custom instructions** — project-level `AGENTS.md` for context
- **Open-source** — Apache 2.0 by OpenAI

## Terminal Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Configure MCP

Add to your Codex CLI configuration file:

```json
{
  "mcpServers": {
    "vinkius": {
      "url": "https://edge.vinkius.com/{TOKEN}/mcp"
    }
  }
}
```

### 3. Run in Any Mode

```bash
codex --approval-mode auto-edit "check deployment and fix the issue"
```

---

## FAQ

**Is full-auto mode safe?**
The sandbox disables network access. MCP tools provide the only approved external connections.

**Can I paste screenshots?**
Yes. Multimodal input lets you provide images alongside text for visual context.

**What models does Codex CLI use?**
GPT-4o, o3, o4-mini, and future OpenAI models. Uses your OpenAI API key.

**Is Codex CLI free?**
Open-source. You pay for OpenAI API usage.
