---
title: "Connect MCP Server to Continue — Setup Guide | Vinkius"
description: "Add MCP servers to Continue, the open-source AI code assistant for VS Code and JetBrains. Any LLM, context providers, tab autocomplete, and MCP tool integration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Continue — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Continue. Open-source AI assistant for VS Code and JetBrains."
  - - meta
    - name: keywords
      content: "Continue MCP, MCP Continue, Continue dev MCP, connect MCP server Continue, Vinkius Continue, Continue open source MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Continue","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP server to config.json in the Continue configuration directory."},{"@type":"HowToStep","name":"Code","text":"MCP tools available in chat and inline editing alongside context providers."}]}'
---

# Continue

Continue is the leading open-source AI code assistant, and its core principle is **bring your own everything**. Choose any LLM — GPT-4, Claude, Mistral, Ollama, self-hosted models — configure it in a JSON file, and Continue connects it to your IDE. **Context providers** pull project-specific data (files, Git history, documentation, web pages) into every conversation. MCP tools add external system access on top of this flexible foundation.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#d946ef,#a855f7);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Co</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Continue</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://continue.dev" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">continue.dev</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">VS Code · JetBrains</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Context Providers + MCP</div></div>
</div>
</div>

## The Open-Source Alternative with Total Control

Continue gives you control other AI assistants don't. The entire configuration lives in a `config.json` file: models, context providers, slash commands, MCP servers — all editable. Switch models mid-conversation. Add custom context providers that pull data from Jira, Confluence, or internal wikis. Share configs across your team via Git.

Context providers are Continue's superpower. Before MCP, Continue already solved the "bring external data to AI" problem through providers like `@Docs` (documentation), `@Git` (commit history), `@Web` (live web search), and `@Folder` (directory context). MCP extends this with any tool server — the two systems complement each other.

Features:

- **Any LLM** — OpenAI, Anthropic, Mistral, Ollama, LM Studio, self-hosted
- **Context providers** — `@File`, `@Git`, `@Docs`, `@Web`, `@Folder`, custom
- **VS Code + JetBrains** — both major IDE families supported
- **Tab autocomplete** — local or cloud-based completions
- **Inline editing** — highlight code → describe changes in natural language
- **JSON config** — complete control via `config.json`
- **Team sharing** — share configurations through version control
- **Open-source** — Apache 2.0, community-driven development

## Configuration

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Edit config.json

Add to `~/.continue/config.json`:

```json
{
  "mcpServers": [{
    "name": "vinkius",
    "url": "https://edge.vinkius.com/{TOKEN}/mcp"
  }]
}
```

### 3. Use in Chat

MCP tools are available alongside context providers in chat and inline editing sessions.

---

## FAQ

**How do MCP tools work with context providers?**
They complement each other. Context providers (`@Docs`, `@Git`) bring project data. MCP tools bring external system data. Both are available in every conversation.

**Can I use Continue with local models?**
Yes. Ollama, LM Studio, and any OpenAI-compatible local server work natively.

**Is configuration shareable?**
Yes. `config.json` can be committed to your repo for team-wide settings.

**Is Continue free?**
Open-source under Apache 2.0. Bring your own API keys.
