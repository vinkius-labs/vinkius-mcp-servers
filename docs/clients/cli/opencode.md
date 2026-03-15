---
title: "Connect MCP Server to OpenCode — Setup Guide | Vinkius"
description: "Add MCP servers to OpenCode, the terminal-based coding agent with TUI interface. Provider-agnostic model support, real-time collaboration, and TOML configuration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to OpenCode — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP servers to OpenCode via config.toml. TUI coding agent with any LLM."
  - - meta
    - name: keywords
      content: "OpenCode MCP, MCP OpenCode, OpenCode CLI MCP, connect MCP server OpenCode, Vinkius OpenCode, SST OpenCode MCP terminal"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to OpenCode","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud and copy the URL."},{"@type":"HowToStep","name":"Configure TOML","text":"Add an MCP entry to opencode.toml with your Vinkius URL."},{"@type":"HowToStep","name":"Start OpenCode","text":"Run opencode in your terminal. Tools appear in the TUI sidebar."}]}'
---

# OpenCode

OpenCode is a terminal coding agent with a rich TUI (text user interface) — think full-screen panels, syntax highlighting, and keyboard shortcuts, all inside your terminal. It works with any LLM provider and treats MCP servers as first-class tool sources, making it easy to extend AI coding sessions with external data.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#8b5cf6,#6d28d9);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">OC</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">OpenCode</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">SST · <a href="https://github.com/sst/opencode" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">github.com/sst/opencode</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">opencode.toml</div></div>
</div>
</div>

## A Full-Screen TUI That Supports MCP

Unlike minimal chat-style CLIs, OpenCode presents a split-pane interface — one panel for the conversation, another for file diffs, and a toolbar showing connected MCP tools. This makes it straightforward to watch the agent iterate on code while MCP tools provide context from databases, APIs, or CI pipelines.

Because OpenCode is provider-agnostic, you can pair MCP with Claude, GPT, Gemini, DeepSeek, or local Ollama models. The MCP layer stays the same regardless of which LLM is driving the session.

Key MCP-related capabilities:

- **TOML config** — declare MCP servers in `opencode.toml`, versioned with your repo
- **Tool sidebar** — MCP tools appear alongside built-in file/terminal tools in the TUI
- **Real-time collaboration** — multiple users can connect to the same session
- **Session history** — browse and resume past conversations that used MCP tools
- **Open-source** — 122k+ GitHub stars, MIT license

## How to Connect

### 1. Grab Your Vinkius URL

Head to [Vinkius Cloud](https://cloud.vinkius.com), pick your server, and generate a **Connection Token**. Copy the resulting URL.

### 2. Edit `opencode.toml`

Create or open `opencode.toml` at the root of your project and add:

```toml
[mcp.vinkius]
type = "remote"
url = "https://edge.vinkius.com/{TOKEN}/mcp"
```

### 3. Run OpenCode

```bash
opencode
```

Your MCP tools appear in the TUI sidebar on launch. The agent uses them automatically when relevant — for instance, if a tool provides database schema lookups, OpenCode will invoke it when you ask about a migration.

---

## FAQ

**Which LLM providers work with OpenCode?**
Any provider supported by OpenCode — OpenAI, Anthropic, Google, Groq, DeepSeek, or local models via Ollama. MCP works independently of the model.

**Can I add more than one MCP server?**
Yes. Add multiple `[mcp.<name>]` sections to `opencode.toml`. Each appears as a separate tool source in the sidebar.

**How do I scope MCP servers to a single project?**
Place `opencode.toml` in the project directory. OpenCode reads the nearest config file on startup.

**Is OpenCode free?**
Open-source under MIT. Bring your own API key for the LLM provider.
