---
title: "Connect MCP Server to y-cli — Setup Guide | Vinkius"
description: "Add MCP servers to y-cli, the lightweight terminal assistant. Pipe-friendly, model-agnostic, and designed for shell scripting. MCP tools via YAML config."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to y-cli — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP servers to y-cli. Lightweight terminal AI with pipe support."
  - - meta
    - name: keywords
      content: "y-cli MCP, MCP y-cli, y-cli terminal MCP, connect MCP server y-cli, Vinkius y-cli, y-cli shell AI"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to y-cli","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP server to y-cli configuration file."},{"@type":"HowToStep","name":"Use","text":"Pipe data through y-cli or use it interactively with MCP tools."}]}'
---

# y-cli

y-cli is a minimal terminal AI assistant that treats simplicity as a feature. No TUI, no panels, no bloat — just a CLI tool that reads input, calls an LLM (and optionally MCP tools), and writes output. It's designed to fit into Unix pipelines: pipe text in, get AI-processed text out.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#64748b,#475569);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">y</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">y-cli</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://github.com/luohy15/y-cli" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">github.com/luohy15</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Config File</div></div>
</div>
</div>

## Unix Philosophy Meets AI and MCP

y-cli follows the Unix philosophy: do one thing well. It sends text to an LLM, optionally calls MCP tools if the model requests them, and returns the result. No session management, no history database, no plugins — just input → AI → output.

This makes y-cli composable. You can use it in shell scripts, cron jobs, Git hooks, or `Makefiles`. Pipe a log file in and get a summary out, pipe error messages in and get debugging suggestions with MCP tool data included.

Why y-cli works for MCP:

- **Pipe-friendly** — reads stdin, writes stdout, composable with Unix tools
- **Zero overhead** — no daemon, no TUI, no state file
- **Model-agnostic** — any OpenAI-compatible API, including local Ollama
- **YAML config** — MCP servers defined in a simple config file
- **Scriptable** — use in shell scripts, CI pipelines, and automation
- **Minimal footprint** — small binary, fast startup

## Configuration

### 1. Get Your Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add to Config

Edit the y-cli configuration file:

```yaml
mcp_servers:
  vinkius:
    url: "https://edge.vinkius.com/{TOKEN}/mcp"
```

### 3. Use in Pipelines

```bash
# Interactive mode
y-cli "check my server status"

# Pipe mode
cat error.log | y-cli "diagnose this error and suggest a fix"

# Script mode
echo "deploy status?" | y-cli --mcp
```

MCP tools are invoked automatically when the model needs external data.

---

## FAQ

**Can I use y-cli in shell scripts?**
That is its primary use case. y-cli reads from stdin and writes to stdout, making it composable with any Unix tool.

**Does y-cli maintain conversation history?**
No. Each invocation is stateless by design. For multi-turn conversations, use a more full-featured client.

**Which models work with y-cli?**
Any OpenAI-compatible endpoint: GPT, Claude (via compatible proxy), Ollama, and others.

**Is y-cli free?**
Open-source. You provide your own LLM API key.
