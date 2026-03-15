---
title: "Connect MCP Server to Codex CLI — Setup Guide | Vinkius"
description: "Add MCP servers to Codex CLI by OpenAI. Lightweight terminal agent with sandboxed code execution, automatic approval policies, and MCP via config.toml."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Codex CLI — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP servers to Codex CLI. OpenAI terminal agent, sandboxed exec."
  - - meta
    - name: keywords
      content: "Codex CLI MCP, MCP Codex CLI, OpenAI Codex MCP, connect MCP server Codex CLI, Vinkius Codex CLI, Codex terminal agent MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Codex CLI","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Edit config.toml","text":"Add an MCP server entry to ~/.codex/config.toml."},{"@type":"HowToStep","name":"Run","text":"Launch codex. MCP tools are available inside the sandboxed environment."}]}'
---

# Codex CLI

Codex CLI is OpenAI's lightweight terminal agent. It runs code inside a sandboxed environment, supports configurable approval policies (from full auto-approve to manual confirmation on every step), and connects to MCP servers through a `config.toml` file. It is purpose-built for quick coding tasks where safety and simplicity matter more than extensive IDE-like features.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#10a37f,#0d8c6e);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Cx</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Codex CLI</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">OpenAI · <a href="https://github.com/openai/codex-cli" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">github.com/openai/codex-cli</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">config.toml</div></div>
</div>
</div>

## Sandboxed Execution with MCP Access

Codex CLI runs generated code inside a sandbox by default — network access is blocked unless you enable it, and file writes are restricted to the project directory. MCP tool calls are treated as controlled external connections, operating through the same approval policies that govern shell commands.

This makes Codex CLI ideal when you want the AI to iterate quickly on code while keeping tight guardrails. The sandbox ensures generated scripts can't cause unintended side effects, while MCP provides the external context (database schemas, API specs, deployment configs) the agent needs to produce accurate code.

Key traits:

- **Sandbox-first** — code runs in an isolated environment with explicit permission grants
- **Approval policies** — choose `suggest`, `auto-edit`, or `full-auto` modes
- **TOML config** — MCP servers and preferences live in `~/.codex/config.toml`
- **OpenAI models** — optimized for GPT-4o and o-series reasoning models
- **Open-source** — MIT license, fast release cycle

## How to Connect

### 1. Create a Vinkius Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Edit `config.toml`

Open `~/.codex/config.toml` (create it if it doesn't exist) and add:

```toml
[mcp_servers.vinkius]
url = "https://edge.vinkius.com/{TOKEN}/mcp"
```

### 3. Launch Codex

```bash
codex
```

MCP tools load on startup. The agent uses them whenever the task requires external information, subject to your approval policy.

---

## FAQ

**Does the sandbox affect MCP calls?**
MCP calls go through the Codex approval system. In `suggest` mode, you confirm each call before it executes. In `full-auto`, calls run without prompts.

**Which OpenAI models work with Codex CLI?**
GPT-4o is the default. o-series reasoning models (o1, o3) are also supported for complex multi-step tasks.

**Can I use non-OpenAI models?**
Codex CLI is designed for OpenAI models. For other providers, consider Aider or OpenCode.

**Is Codex CLI free?**
Open-source. Requires an OpenAI API key with pay-as-you-go billing.
