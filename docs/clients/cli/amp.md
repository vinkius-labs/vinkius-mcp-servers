---
title: "Connect MCP Server to Amp — Setup Guide | Vinkius"
description: "Add MCP servers to Amp, Sourcegraph's terminal coding agent. Codebase-wide search, cross-repo context, and MCP tool integration from the command line."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Amp — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP servers to Amp by Sourcegraph. Cross-repo coding agent in the terminal."
  - - meta
    - name: keywords
      content: "Amp MCP, MCP Amp, Sourcegraph Amp MCP, connect MCP server Amp, Vinkius Amp, Amp terminal agent MCP, Amp coding agent"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Amp","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add Vinkius as an MCP server in your Amp configuration."},{"@type":"HowToStep","name":"Use","text":"Start Amp. The agent combines Sourcegraph code intelligence with MCP tools."}]}'
---

# Amp

Amp is a terminal coding agent from Sourcegraph, the company behind universal code search. It leverages Sourcegraph's code intelligence to understand relationships across repositories, then uses MCP to extend that understanding with external data — deployment states, API schemas, monitoring metrics, or anything else your team needs while coding.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#ff6b35,#e55a2b);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Am</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Amp</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Sourcegraph · <a href="https://sourcegraph.com/amp" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">sourcegraph.com/amp</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Config File</div></div>
</div>
</div>

## Code Intelligence + External Tools

Sourcegraph's indexing engine powers Amp's ability to find symbols, usages, and relationships across multiple repositories. This code intelligence is the context that the LLM uses to reason about your codebase.

When you add MCP servers, the agent gains access to data that lives outside your code: production logs, feature flags, issue trackers, or API documentation. The result is a coding session that takes the full picture into account — not just what's in the source files.

This is particularly powerful for large-scale refactors that span multiple services. Amp can trace a function call across repositories, check its deployment state via MCP, and apply consistent changes everywhere.

Capabilities that benefit from MCP:

- **Cross-repo context** — search and understand code across multiple repositories simultaneously
- **Semantic code intelligence** — go-to-definition, find-references, and type information
- **Threads** — resume prior conversations with full context
- **Multi-model** — choose between Claude, GPT, or other supported providers
- **Checkpoint system** — preview and revert changes before committing

## Adding Vinkius Cloud

### 1. Create a Token

Go to [Vinkius Cloud](https://cloud.vinkius.com) → your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Configure Amp

Add the MCP server entry to your Amp configuration file:

```json
{
  "mcpServers": {
    "vinkius": {
      "url": "https://edge.vinkius.com/{TOKEN}/mcp"
    }
  }
}
```

### 3. Start Coding

```bash
amp
```

Amp discovers your MCP tools alongside Sourcegraph's built-in code intelligence.  Ask it to perform a task that combines code context with external data, and it will use both seamlessly.

---

## FAQ

**How does Amp use Sourcegraph code intelligence with MCP?**
Amp uses Sourcegraph for code-level context (symbols, types, references) and MCP for external systems (APIs, databases, monitoring). The LLM orchestrates both sources to complete tasks.

**Do I need a Sourcegraph instance?**
Amp works standalone, but connecting a Sourcegraph instance unlocks cross-repo search and richer code intelligence.

**Can I resume sessions that used MCP tools?**
Yes. Amp's thread system preserves the full conversation, including MCP tool calls and their results. You can pick up exactly where you left off.

**Is Amp free?**
Amp offers a free tier with limited usage. Pro and Enterprise plans are available through Sourcegraph.
