---
title: "Connect MCP Server to HyperChat — Setup Guide | Vinkius"
description: "Add MCP servers to HyperChat, the open LLM chat client with productivity tools. Prompt library, workflow automation, multi-model sessions, and MCP integration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to HyperChat — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP servers to HyperChat. Open LLM client with productivity tools."
  - - meta
    - name: keywords
      content: "HyperChat MCP, MCP HyperChat, HyperChat LLM MCP, connect MCP server HyperChat, Vinkius HyperChat"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to HyperChat","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add server","text":"Configure the Vinkius MCP server in HyperChat settings."},{"@type":"HowToStep","name":"Use","text":"Open a chat. MCP tools integrate with prompts and productivity workflows."}]}'
---

# HyperChat

HyperChat is an open-source LLM chat client designed around productivity. It ships with a prompt library, workflow automation, and multi-model support — features that turn a simple chatbot into a daily work tool. MCP integration lets the AI interact with external services during these workflows.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#8b5cf6,#7c3aed);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">HC</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">HyperChat</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://github.com/BigSweetPotatoStudio/HyperChat" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">github.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Settings</div></div>
</div>
</div>

## Productivity Workflows Powered by MCP

HyperChat's prompt library and workflow system let you build reusable sequences: "summarize this document, extract action items, and create tasks." MCP adds the ability to execute those tasks — create Jira tickets, update a Notion page, or ping a Slack channel — directly from the workflow.

Features:

- **Prompt library** — curated and custom prompts for common tasks
- **Workflow chains** — sequence multiple prompts with MCP tool calls in between
- **Multi-model** — switch models mid-conversation for different strengths
- **History search** — full-text search across all past conversations
- **Responsive UI** — works well on both wide monitors and laptop screens
- **Open-source** — active community development

## Connecting Vinkius Cloud

### 1. Create a Token

Go to [Vinkius Cloud](https://cloud.vinkius.com) → your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Server

Open HyperChat → **Settings** → **MCP Servers** → **Add**. Paste your URL.

### 3. Build Workflows

Combine prompt templates with MCP tool calls to automate multi-step processes. Or simply chat — MCP tools are available in regular conversations too.

---

## FAQ

**Can I chain MCP tools in HyperChat workflows?**
Yes. Workflows can include a sequence of prompt steps and MCP tool invocations. The output of one step feeds into the next.

**Does HyperChat support local models?**
Yes, via Ollama or any OpenAI-compatible local endpoint. MCP tools work the same regardless of model.

**Is the prompt library customizable?**
Fully. Add, edit, or remove prompts. Share them with your team via export/import.

**Is HyperChat free?**
Open-source. You bring your own API keys.
