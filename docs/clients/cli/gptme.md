---
title: "Connect MCP Server to gptme — Setup Guide | Vinkius"
description: "Add MCP servers to gptme, the personal AI agent for the terminal. Self-correcting code execution, script chaining, persistent conversation history, and MCP tool support."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to gptme — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP servers to gptme. Self-correcting terminal AI agent with MCP tools."
  - - meta
    - name: keywords
      content: "gptme MCP, MCP gptme, gptme terminal agent MCP, connect MCP server gptme, Vinkius gptme, gptme AI agent"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to gptme","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add the Vinkius MCP server to your gptme config."},{"@type":"HowToStep","name":"Use","text":"Start gptme. The agent calls MCP tools alongside code execution."}]}'
---

# gptme

gptme is a personal AI agent that lives in your terminal and specializes in running code. It executes Python, shell commands, and browser automation, self-corrects on errors, and chains multiple scripts together — all without leaving the chat. MCP extends its reach by connecting external services the agent can query or modify during execution.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#f59e0b,#d97706);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">gp</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">gptme</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://github.com/ErikBjare/gptme" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">github.com/ErikBjare/gptme</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Config File</div></div>
</div>
</div>

## Self-Correcting Execution with External Context

gptme's distinguishing feature is its execution loop. When it writes a script that fails, it reads the error output, corrects the code, and retries — all automatically. Adding MCP tools lets the agent gather context before writing code (e.g., fetching a database schema) and validate results after execution (e.g., checking deployment status).

This feedback loop makes gptme well-suited for automation scripts, data analysis pipelines, and DevOps tasks where getting it right on the second try is good enough — and the agent needs live data to do so.

What sets gptme apart:

- **Self-correcting** — automatic retry on execution errors
- **Python + shell + browser** — three execution environments in one agent
- **Conversation persistence** — resume past sessions with full context
- **Pipe-friendly** — accepts stdin, works in shell scripts
- **Model-agnostic** — Claude, GPT, local Ollama models
- **Web UI** — optional browser-based interface alongside the CLI

## Connecting Vinkius Cloud

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), navigate to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add to gptme Config

Add the MCP server in your gptme configuration:

```yaml
mcp_servers:
  vinkius:
    url: "https://edge.vinkius.com/{TOKEN}/mcp"
```

### 3. Start a Session

```bash
gptme
```

MCP tools load alongside gptme's built-in execution capabilities. The agent calls them as part of its reasoning and execution loop.

---

## FAQ

**Can gptme run MCP tool calls and Python scripts in the same session?**
Yes. gptme can query an MCP tool, use the result in a Python script, execute it, and iterate — all within a single conversation turn.

**What happens if an MCP tool call fails?**
gptme treats MCP failures like execution errors: it reads the error, adjusts its approach, and retries with a different strategy.

**Does gptme support local models?**
Yes. It works with Ollama and any OpenAI-compatible local endpoint. MCP functions the same regardless of which model is active.

**Is gptme free?**
Open-source under MIT. Bring your own API key for cloud LLM providers, or use free local models.
