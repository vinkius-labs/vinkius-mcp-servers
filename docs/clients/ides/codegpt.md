---
title: "Connect MCP Server to CodeGPT — Setup Guide | Vinkius"
description: "Add MCP servers to CodeGPT, the VS Code and JetBrains AI assistant with 1M+ installs. Bring your own AI provider, team-shared agents, and MCP tool integration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to CodeGPT — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to CodeGPT. Multi-provider AI with team agents and MCP."
  - - meta
    - name: keywords
      content: "CodeGPT MCP, MCP CodeGPT, CodeGPT VS Code MCP, connect MCP server CodeGPT, Vinkius CodeGPT"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to CodeGPT","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP server in CodeGPT extension settings."},{"@type":"HowToStep","name":"Use agents","text":"Create team-shared AI agents with specific MCP tool access."}]}'
---

# CodeGPT

CodeGPT is one of the most popular AI coding extensions with over **1 million installs** across VS Code and JetBrains. Its standout feature is **team-shared agents** — custom AI configurations that include model selection, instructions, knowledge bases, and MCP tool access. Share agents across your team so everyone benefits from the same AI setup.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#5457ee,#3d40d9);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">CG</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">CodeGPT</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px"><a href="https://codegpt.co" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">codegpt.co</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">VS Code · JetBrains</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Agent Settings</div></div>
</div>
</div>

## Team-Shared AI Agents with MCP Access

Create an agent with specific instructions ("always check CI status before suggesting fixes"), a preferred model (Claude Sonnet), and assigned MCP tools (monitoring, deployment). Share it with your team through CodeGPT's agent marketplace. Everyone gets the same AI setup without individual configuration.

Features:

- **Team agents** — shared AI configurations with MCP tools
- **1M+ installs** — widely adopted across VS Code and JetBrains
- **Agent marketplace** — discover and share community agents
- **Multi-provider** — OpenAI, Anthropic, Google, Azure, Ollama
- **Knowledge bases** — RAG with custom document collections
- **VS Code + JetBrains** — both major IDE families
- **Autocomplete** — inline code suggestions

## Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Configure MCP

In CodeGPT extension → **Settings** → **MCP** → add your URL.

### 3. Create Team Agents

Build agents with specific MCP tool access and share them across your team.

---

## FAQ

**Can I share AI agents with my team?**
Yes. Create agents with specific configs and share through the agent marketplace.

**Does CodeGPT work in JetBrains?**
Yes. The extension supports both VS Code and JetBrains IDEs.

**Can agents include knowledge bases?**
Yes. Attach document collections as RAG knowledge alongside MCP tools.

**Is CodeGPT free?**
Free tier available. Team plans for agent sharing.
