---
title: "Connect MCP Server to Claude Code — Setup Guide | Vinkius"
description: "Step-by-step guide to connect Vinkius Cloud MCP servers to Claude Code by Anthropic. One-command setup, subagent MCP scopes, lifecycle hooks, and extended thinking."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Claude Code — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP servers to Claude Code with a single CLI command. Subagents, hooks, parallel execution."
  - - meta
    - name: keywords
      content: "Claude Code MCP, MCP Claude Code, Claude Code CLI MCP server, claude mcp add, connect MCP server Claude Code, Vinkius Claude Code, Claude Code subagent MCP, Claude Code hooks"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Claude Code","step":[{"@type":"HowToStep","name":"Get connection URL","text":"Create a Connection Token in Vinkius Cloud and copy the Streamable HTTP URL."},{"@type":"HowToStep","name":"Register the server","text":"Run claude mcp add vinkius --transport http https://edge.vinkius.com/TOKEN/mcp"},{"@type":"HowToStep","name":"Verify","text":"Run claude mcp list to confirm the server appears, then start a session."}]}'
---

# Claude Code

Claude Code is Anthropic's agentic coding tool built for the terminal. It reads your project, edits files, runs commands, and commits changes — all from a natural-language conversation. Because it treats MCP as a first-class primitive, connecting external tools takes a single command.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#d4a574,#a87c5a);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">CC</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Claude Code</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Anthropic · <a href="https://docs.anthropic.com/en/docs/claude-code" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">docs.anthropic.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">stdio · Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">CLI Command</div></div>
</div>
</div>

## Subagents, Hooks, and Extended Thinking

Claude Code stands apart from other terminal agents thanks to three features that interact directly with MCP:

- **Subagents** — Claude spawns child agents that each receive their own MCP scope. This means a refactoring subagent and a test-running subagent can work on the same codebase in parallel without tool conflicts.
- **Hooks** — Lifecycle hooks let you run custom shell commands before or after MCP tool calls, giving you audit logs, notifications, or guardrails on every action.
- **Extended thinking** — When tackling multi-step problems, Claude can reason through a plan before calling MCP tools, reducing unnecessary round-trips.

Together, these make Claude Code ideal for complex tasks where MCP tools need orchestration rather than simple sequential invocation.

## Step-by-Step Setup

### 1. Generate a Vinkius Cloud Token

Open [Vinkius Cloud](https://cloud.vinkius.com) → select your server → **Connection Tokens** → **Create Token**. Copy the URL — it will look like:

```
https://edge.vinkius.com/abc123/mcp
```

### 2. Register the MCP Server

```bash
claude mcp add vinkius --transport http https://edge.vinkius.com/{TOKEN}/mcp
```

The server is stored in your local Claude Code config and persists across sessions.

### 3. Confirm and Start Coding

```bash
claude mcp list          # shows "vinkius" with status
claude                    # start a session — tools are auto-discovered
```

From here, Claude Code will call your MCP tools whenever they're relevant to the conversation. You don't need to invoke them manually.

::: tip Scoping
Use `--scope project` to limit a server to the current repository, or `--scope user` (default) to make it available everywhere.
:::

---

## FAQ

**How does Claude Code discover MCP tools?**
On session start and whenever the server emits `tools/list_changed`, Claude Code re-fetches the tool catalog. There is no manual refresh step.

**Can I restrict which tools Claude Code uses?**
Yes. You can set permission rules in `.claude/settings.json` to allow or deny specific tool names or patterns.

**What happens if the MCP server is unreachable?**
Claude Code skips unavailable servers and continues the session. Once the server is back, tools reappear automatically on the next listing refresh.

**Does Claude Code require a paid plan?**
You need an Anthropic API key or a Claude Max / Claude Team subscription. There is no free tier.
