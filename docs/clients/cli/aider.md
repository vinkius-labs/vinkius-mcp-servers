---
title: "Connect MCP Server to Aider — Setup Guide | Vinkius"
description: "Add MCP servers to Aider, the open-source Git-native AI pair programmer. Multi-file editing across any LLM with automatic commits and MCP tool access."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Aider — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Aider. Git-native AI coding, multi-file edits, automatic commits."
  - - meta
    - name: keywords
      content: "Aider MCP, MCP Aider, Aider AI coding MCP, connect MCP server Aider, Vinkius Aider, Aider Git AI pair programmer MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Aider","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Pass MCP server URL to Aider via CLI flag or config file."},{"@type":"HowToStep","name":"Use","text":"Start an Aider session. MCP tools complement Git-native pair programming."}]}'
---

# Aider

Aider is the original AI pair programmer for the terminal. It edits files across your entire repository, creates atomic Git commits for every change, and works with any LLM you prefer — from Claude and GPT to DeepSeek and local Ollama models. MCP support lets you bring external data into the pair-programming conversation.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#22c55e,#16a34a);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Ai</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Aider</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://github.com/paul-gauthier/aider" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">github.com/paul-gauthier/aider</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">CLI Flag / Config</div></div>
</div>
</div>

## Git-Native Pair Programming with External Tools

Aider's core strength is that every AI edit produces a clean Git commit. This means you can `git diff`, `git log`, and `git revert` any change the AI makes — a workflow that feels natural to experienced developers.

Adding MCP tools gives the AI something it normally lacks: live context from outside the repository. The agent can query a database schema, check deployment status, or pull monitoring data before making code changes. Because each change is still committed atomically, you always have a clear audit trail of what happened and why.

What makes Aider unique:

- **Atomic Git commits** — every edit is a self-contained commit with a descriptive message
- **Multi-file editing** — refactor across dozens of files in a single request
- **Any LLM** — Claude, GPT-4, DeepSeek, Ollama, or any compatible endpoint
- **Map-based context** — Aider builds a repo map to understand file relationships
- **Voice mode** — dictate coding requests via microphone
- **25k+ GitHub stars** — one of the most popular AI coding tools

## Setting Up MCP

### 1. Get Your Vinkius URL

Log in to [Vinkius Cloud](https://cloud.vinkius.com), select your server, and create a **Connection Token**. Copy the URL.

### 2. Pass to Aider

Add the MCP server when launching Aider:

```bash
aider --mcp-server "https://edge.vinkius.com/{TOKEN}/mcp"
```

Or persist it in your `.aider.conf.yml`:

```yaml
mcp-server:
  - https://edge.vinkius.com/{TOKEN}/mcp
```

### 3. Pair Programs with Tools

Start coding normally. When you ask Aider to perform a task that benefits from external data, it will invoke the relevant MCP tool, incorporate the result, and commit the changes.

---

## FAQ

**How does Aider handle MCP tool results in Git commits?**
Aider includes relevant context in commit messages. If a tool call influenced the change, the commit description reflects that.

**Can I use multiple MCP servers at once?**
Yes. Pass multiple `--mcp-server` flags or list them in `.aider.conf.yml`. All tools are available simultaneously.

**Which LLM works best with MCP in Aider?**
Claude and GPT-4 have the most reliable tool-calling capabilities, but any supported LLM can trigger MCP tools.

**Is Aider free?**
Open-source under the Apache 2.0 license. You bring your own API key for the LLM provider.
