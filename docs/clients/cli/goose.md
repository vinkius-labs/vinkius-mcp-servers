---
title: "Connect MCP Server to Goose — Setup Guide | Vinkius"
description: "Add MCP servers to Goose, Block Inc's configurable AI agent. Profile-based workflows, built-in extensions, and a plugin system powered by MCP."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Goose — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP servers to Goose via CLI or profiles. Configurable AI agent by Block."
  - - meta
    - name: keywords
      content: "Goose MCP, MCP Goose, Goose AI agent MCP, connect MCP server Goose, Vinkius Goose, Block Inc Goose MCP, Goose extensions MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Goose","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud and copy the URL."},{"@type":"HowToStep","name":"Add via CLI","text":"Run goose configure to add a remote MCP server with your Vinkius URL."},{"@type":"HowToStep","name":"Session","text":"Start a goose session. The agent discovers and invokes tools automatically."}]}'
---

# Goose

Goose is a configurable AI agent from Block, Inc. designed for software engineering. It runs locally on your machine, supports swappable LLM providers, and uses MCP as the backbone of its extension system — every Goose extension is, in fact, an MCP server under the hood.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#84cc16,#65a30d);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Go</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Goose</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Block, Inc. · <a href="https://github.com/block/goose" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">github.com/block/goose</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">CLI + Profiles</div></div>
</div>
</div>

## Extensions Are MCP Servers

Goose's architecture treats every extension as an MCP server. This means adding Vinkius Cloud gives the agent the same first-class access as its built-in tools for file editing, terminal commands, and web browsing.

Profiles let you bundle specific MCP servers and model settings into reusable presets. For example, a "backend-dev" profile might include a database MCP server and a monitoring tool, while a "frontend" profile loads a design-token API. Switching between them is a single command.

Other features that complement MCP:

- **Session persistence** — Goose remembers tool results across restarts
- **Provider flexibility** — Claude, GPT, Gemini, Ollama, or any OpenAI-compatible endpoint
- **Built-in safety** — approve or deny tool calls before execution
- **33k+ GitHub stars** — active open-source community

## Connecting Vinkius Cloud

### 1. Create a Connection Token

Log in to [Vinkius Cloud](https://cloud.vinkius.com), select your server, and generate a token. The URL format is:

```
https://edge.vinkius.com/{TOKEN}/mcp
```

### 2. Register via Goose CLI

```bash
goose configure
```

Select **Add Remote Extension** and paste your Vinkius URL. Goose writes the config and validates the connection in one step.

Alternatively, add to your `~/.config/goose/profiles.yaml`:

```yaml
default:
  extensions:
    vinkius:
      type: remote
      uri: https://edge.vinkius.com/{TOKEN}/mcp
```

### 3. Start a Session

```bash
goose session
```

Goose auto-discovers the available tools and uses them whenever they match the task at hand.

---

## FAQ

**Why does Goose use MCP for extensions?**
MCP provides a standardized protocol for tool communication. By adopting it, Goose ensures every extension works with the same transport, auth, and discovery mechanisms — no custom plugin APIs needed.

**Can I approve MCP tool calls before they run?**
Yes. Goose has a built-in approval prompt for destructive actions. You can configure auto-approve for read-only tools while requiring confirmation for writes.

**How do profiles relate to MCP?**
Profiles are named configurations that bundle an LLM provider, system prompt, and a set of MCP extensions. You can switch profiles mid-session with `goose use <profile>`.

**Is Goose free?**
Open-source, Apache 2.0. Bring your own API key for the LLM provider of your choice.
