---
title: "Connect MCP Server to Junie CLI — Setup Guide | Vinkius"
description: "Add MCP servers to Junie CLI, JetBrains' terminal AI agent. LLM-agnostic, repo-aware, and designed for developers who live in JetBrains IDEs."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Junie CLI — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP servers to Junie CLI. JetBrains terminal agent, LLM-agnostic."
  - - meta
    - name: keywords
      content: "Junie CLI MCP, MCP Junie CLI, JetBrains Junie MCP, connect MCP server Junie, Vinkius Junie CLI, Junie terminal agent MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Junie CLI","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add Vinkius as an MCP server in Junie CLI configuration."},{"@type":"HowToStep","name":"Use","text":"Run Junie and invoke external tools through natural language."}]}'
---

# Junie CLI

Junie CLI is JetBrains' terminal-based AI agent. It shares the same intelligence layer as the Junie plugin in IntelliJ, WebStorm, and other JetBrains IDEs, but runs entirely in the shell. It is LLM-agnostic, understands your repository structure, and uses MCP to call external tools during coding tasks.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#e44332,#c73629);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Ju</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Junie CLI</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">JetBrains · <a href="https://www.jetbrains.com/junie/" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">jetbrains.com/junie</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Config File</div></div>
</div>
</div>

## JetBrains Intelligence in Your Shell

If your team already uses IntelliJ or WebStorm, Junie CLI feels like a natural extension. It inherits JetBrains' deep understanding of project structure, build systems, and test frameworks — but works anywhere a terminal runs, including CI/CD pipelines and remote servers.

MCP turns Junie CLI into more than a code assistant. By connecting external tools, the agent can query databases, check monitoring dashboards, or interact with deployment platforms — all through the same natural-language interface used for code edits.

Why Junie CLI pairs well with MCP:

- **LLM-agnostic** — choose Claude, GPT, Gemini, or any supported model
- **Repo-aware** — understands project structure, dependencies, and build files
- **IDE parity** — same capabilities as the JetBrains IDE plugin
- **Multi-language** — first-class support for Kotlin, Java, TypeScript, Python, Go, and more
- **CI-friendly** — non-interactive mode for automated pipelines

## Connecting Vinkius Cloud

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), navigate to your server and create a **Connection Token**. Copy the URL.

### 2. Add MCP Server

Configure the Vinkius MCP server in Junie CLI:

```json
{
  "mcpServers": {
    "vinkius": {
      "url": "https://edge.vinkius.com/{TOKEN}/mcp"
    }
  }
}
```

### 3. Start Junie

```bash
junie
```

The agent discovers MCP tools on startup. Ask it to perform any task — it will combine code intelligence with external tool calls as needed.

---

## FAQ

**How does Junie CLI differ from the JetBrains IDE plugin?**
Both share the same core engine. The CLI version runs headless in any terminal, while the plugin operates within JetBrains IDEs with visual diff previews and UI integrations.

**Can I use Junie CLI without a JetBrains license?**
Junie CLI has its own licensing terms separate from JetBrains IDEs. Check [jetbrains.com/junie](https://www.jetbrains.com/junie/) for the latest plan details.

**Which LLM providers does Junie support?**
Junie is LLM-agnostic and supports major providers including Anthropic, OpenAI, and Google, as well as custom endpoints.

**Does Junie CLI work in CI/CD?**
Yes. It supports non-interactive mode, making it suitable for automated code reviews, test generation, and documentation in CI/CD pipelines.
