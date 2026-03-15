---
title: "Connect MCP Server to Aider — Setup Guide | Vinkius"
description: "Add MCP servers to Aider, the terminal-based AI pair programmer. Git-native workflow, multi-file editing, repository-map context, and MCP tool integration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Aider — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Aider. Terminal AI pair programmer with Git-native workflow."
  - - meta
    - name: keywords
      content: "Aider MCP, MCP Aider, Aider pair programmer MCP, connect MCP server Aider, Vinkius Aider, Aider terminal AI"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Aider","step":[{"@type":"HowToStep","name":"Install","text":"pip install aider-chat."},{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Run","text":"Launch aider with MCP configuration. It auto-commits clean changes."}]}'
---

# Aider

Aider is a terminal-based AI pair programmer that treats **Git as the source of truth**. Every code change is an atomic, well-described Git commit. No manual staging, no remembering to save — Aider writes code and commits it in one step. The **repository map** gives the AI a structural understanding of your entire codebase, and MCP tools extend this with access to external data during editing sessions.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#22c55e,#16a34a);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Ai</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Aider</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://aider.chat" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">aider.chat</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Terminal (Python)</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Config + CLI Flags</div></div>
</div>
</div>

## Git-Native AI Coding in the Terminal

Aider's Git integration is its defining feature. When you ask Aider to refactor a function, it makes the change and creates a commit with a descriptive message. If you ask for multiple changes, each gets its own commit. `git diff` and `git log` show exactly what the AI did, and `git revert` undoes any change cleanly.

The **repository map** uses Tree-sitter to parse your entire codebase into a structural overview — classes, functions, imports, and their relationships. This gives the AI context about code it hasn't explicitly read, reducing token usage while keeping changes consistent across files.

MCP tools bring external context into terminal sessions. The AI can check deployment status, query issue trackers, or read documentation through MCP while editing code.

Features:

- **Git-native** — auto-commits with descriptive messages
- **Repository map** — Tree-sitter structural overview of the entire codebase
- **Multi-file editing** — coherent changes across multiple files
- **Edit modes** — whole file, diff, and architect modes
- **Multi-model** — Claude, GPT, Gemini, DeepSeek, Ollama
- **Voice coding** — speak changes instead of typing
- **Leaderboard** — benchmark results for model/edit-format combinations
- **Open-source** — Apache 2.0 license

## Terminal Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Configure Aider

Add MCP server to your Aider configuration or pass via CLI flags.

### 3. Code and Commit

```bash
aider --model claude-sonnet-4
> check the CI status and fix the failing test
```

Aider calls MCP tools for CI data, fixes the code, and auto-commits the change.

---

## FAQ

**Does Aider auto-commit MCP-assisted changes?**
Yes. All changes — whether from direct editing or informed by MCP data — are auto-committed with descriptive messages.

**What is the repository map?**
A Tree-sitter-based structural overview of your codebase. It gives the AI context about all files without reading every line.

**Can I use Aider with local models?**
Yes. Ollama, LM Studio, and any OpenAI-compatible API work.

**Is Aider free?**
Open-source. Bring your own API keys.
