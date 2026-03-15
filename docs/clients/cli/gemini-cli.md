---
title: "Connect MCP Server to Gemini CLI — Setup Guide | Vinkius"
description: "Configure MCP servers in Gemini CLI with a single JSON entry. 1M-token context, Plan Mode analysis, research subagents, and 70+ built-in extensions."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Gemini CLI — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Configure MCP in Gemini CLI via settings.json. 1M context, Plan Mode, extensions."
  - - meta
    - name: keywords
      content: "Gemini CLI MCP, MCP Gemini CLI, Gemini CLI settings.json MCP, connect MCP server Gemini CLI, Vinkius Gemini CLI, Google Gemini terminal MCP, Gemini CLI Plan Mode"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Gemini CLI","step":[{"@type":"HowToStep","name":"Generate URL","text":"Create a Connection Token in Vinkius Cloud and copy the Streamable HTTP URL."},{"@type":"HowToStep","name":"Edit settings.json","text":"Add an mcpServers entry in ~/.gemini/settings.json with your Vinkius URL."},{"@type":"HowToStep","name":"Launch Gemini","text":"Run gemini in your terminal. MCP tools appear alongside built-in extensions."}]}'
---

# Gemini CLI

Google's open-source terminal agent ships with a 1 million-token context window, letting you feed entire codebases into a single session. Adding an MCP server is a one-line JSON change — once configured, Gemini CLI treats your remote tools exactly like its 70+ built-in extensions.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#4285f4,#1a73e8);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Ge</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Gemini CLI</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Google · <a href="https://github.com/google-gemini/gemini-cli" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">github.com/google-gemini</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">settings.json</div></div>
</div>
</div>

## 1M Context Meets External Tools

A million tokens means Gemini CLI can hold roughly 20,000 lines of code in memory at once. When you pair that with MCP-powered tools — like a database introspector or a monitoring dashboard — the agent can reason across your full project and act on real-time data in the same session.

**Plan Mode** takes this further. Before executing changes, Gemini builds a read-only plan that can query MCP tools for validation. Once you approve, it switches to write mode and carries out the work. This two-phase approach drastically reduces mistakes on large refactors.

Other highlights that interact well with MCP:

- **Research subagents** — delegated workers that gather context from MCP before the main agent acts
- **Checkpointing** — built-in undo for any action, including MCP tool calls
- **Shell autocompletion** — tab-complete MCP tool names in the interactive prompt
- **Apache 2.0** — fully open-source, no vendor lock-in

## Configuration

### 1. Copy Your Vinkius URL

In [Vinkius Cloud](https://cloud.vinkius.com), navigate to **Connection Tokens** and create one. The resulting URL is your MCP endpoint.

### 2. Add the Server to `settings.json`

Open or create `~/.gemini/settings.json` and add the `mcpServers` block:

```json
{
  "mcpServers": {
    "vinkius": {
      "uri": "https://edge.vinkius.com/{TOKEN}/mcp"
    }
  }
}
```

### 3. Launch and Verify

```bash
gemini
```

Gemini CLI reads `settings.json` on startup and probes every MCP server. Your tools will show up in the session alongside built-in extensions — no separate import or plugin install.

::: tip Per-project config
Drop a `.gemini/settings.json` in the project root to add servers only for that repository. The project file merges with the global one.
:::

---

## FAQ

**Where does Gemini CLI store MCP configuration?**
Global config lives at `~/.gemini/settings.json`. You can also add a `.gemini/settings.json` per project for repository-scoped servers.

**Does Plan Mode support MCP tools?**
Yes, but in read-only mode. Plan Mode calls MCP tools whose descriptions are marked read-safe, giving you a dry-run preview before any mutations.

**Is there a free tier?**
Gemini CLI is Apache 2.0 open-source. Google offers a free Gemini API tier, though rate limits apply for heavy usage.

**How many MCP servers can I add?**
There is no hard limit. The `mcpServers` object in `settings.json` accepts as many entries as you need.
