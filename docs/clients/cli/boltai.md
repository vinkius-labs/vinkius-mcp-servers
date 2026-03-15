---
title: "Connect MCP Server to BoltAI — Setup Guide | Vinkius"
description: "Add MCP servers to BoltAI, the native Mac AI chat client. Multiple providers, custom AI agents, screenshot and PDF analysis, and MCP tool support."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to BoltAI — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP servers to BoltAI. Native Mac AI chat with custom agents."
  - - meta
    - name: keywords
      content: "BoltAI MCP, MCP BoltAI, BoltAI Mac MCP, connect MCP server BoltAI, Vinkius BoltAI, BoltAI Mac AI chat MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to BoltAI","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add server","text":"In BoltAI Preferences → MCP Servers, add your Vinkius URL."},{"@type":"HowToStep","name":"Use","text":"Open a chat or custom agent. MCP tools are available across all providers."}]}'
---

# BoltAI

BoltAI is a native macOS AI chat client built on SwiftUI. It connects to multiple providers simultaneously — switch between Claude, GPT, and Gemini within the same conversation — and supports custom AI agents with specific system prompts, models, and tool sets. MCP extends these agents by connecting them to external services.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#f97316,#ea580c);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Bo</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">BoltAI</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">boltai.com · <a href="https://boltai.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">boltai.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">macOS</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Preferences UI</div></div>
</div>
</div>

## Custom AI Agents Powered by MCP

BoltAI's agent system lets you create purpose-built assistants. Each agent has its own system prompt, preferred model, and temperature settings. When you add MCP servers, agents gain access to external tools that match their role — a "DevOps agent" might use a monitoring MCP server, while a "writing agent" might use a research API.

Because BoltAI supports multiple providers simultaneously, you can test how different models handle the same MCP tools. Ask Claude and GPT the same question in split view and compare how each one uses external data.

macOS-specific advantages:

- **Native SwiftUI** — feels like a first-party Apple app
- **Screenshot analysis** — capture and send screen content to the AI
- **PDF processing** — drag and drop documents directly into chat
- **Spotlight integration** — invoke BoltAI from anywhere on macOS
- **Quick Note** — AI-powered notes that integrate with conversations
- **Custom agents** — reusable AI personas with MCP tool access

## Setting Up MCP

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), select your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Open Preferences

In BoltAI, go to **Preferences** (⌘,) → **MCP Servers** → **Add Server**. Paste:

```
https://edge.vinkius.com/{TOKEN}/mcp
```

### 3. Assign to Agents

Optionally, limit the MCP server to specific agents in the agent configuration. Or leave it globally available so all agents can call its tools.

---

## FAQ

**Can I scope MCP tools to specific agents?**
Yes. Each BoltAI agent can be configured with a specific set of MCP servers. This lets you give a DevOps agent access to monitoring tools while keeping a writing agent focused on research tools.

**Does BoltAI work on iOS?**
Currently BoltAI is macOS-only. An iOS companion is in the roadmap.

**How does screenshot analysis work with MCP?**
Capture a screen region and send it to the AI. The model can then use MCP tools to take action based on what it sees — for instance, filing a bug report or querying a dashboard.

**What's the pricing?**
BoltAI is a one-time purchase from the Mac App Store. No subscription required. You bring your own API keys.
