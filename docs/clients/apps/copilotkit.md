---
title: "Connect MCP Server to CopilotKit — Setup Guide | Vinkius"
description: "Add MCP servers to CopilotKit, the React framework for AI copilots. MCP Apps render interactive UI from tool calls, CoAgents for human-in-the-loop, LangGraph integration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to CopilotKit — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to CopilotKit. React copilots with MCP Apps and CoAgents."
  - - meta
    - name: keywords
      content: "CopilotKit MCP, MCP CopilotKit, CopilotKit MCP Apps, connect MCP server CopilotKit, Vinkius CopilotKit, CopilotKit React copilot MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to CopilotKit","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add the Vinkius MCP server to your CopilotKit app configuration."},{"@type":"HowToStep","name":"Build","text":"MCP tools render as interactive UI components in your copilot chat."}]}'
---

# CopilotKit

CopilotKit is an open-source React framework for building AI copilots that live inside your web application. What sets it apart is **MCP Apps** — when a tool call returns data, CopilotKit renders interactive React components (buttons, forms, confirmations) directly in the chat interface. Users don't just read tool results — they interact with them.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#ec4899,#be185d);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">CK</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">CopilotKit</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px"><a href="https://copilotkit.ai" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">copilotkit.ai</a> · <a href="https://github.com/CopilotKit/CopilotKit" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">GitHub</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">React · Angular · Framework</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">MCP Apps (Jan 2026)</div></div>
</div>
</div>

## MCP Tools That Render Interactive UI

In most clients, MCP tool results appear as text. CopilotKit changes that — MCP Apps turn tool responses into React components. A database query tool might render a sortable table. A deployment tool might show a confirmation dialog with a "Deploy" button. A monitoring tool might render a live chart.

This makes CopilotKit the framework for building production-grade AI features where end users need to confirm, select, or review before the agent acts. It's the difference between a chatbot and a copilot.

**CoAgents** take this further with human-in-the-loop agent workflows. Built on LangGraph, CoAgents share state between the agent and your React app, stream intermediate thinking to the UI, and let users steer agent behavior in real-time.

Key features:

- **MCP Apps** — MCP tools render as interactive React components (forms, buttons, tables)
- **CoAgents** — human-in-the-loop agent infrastructure with LangGraph
- **Shared state** — agent and app share state for seamless coordination
- **Intermediate streaming** — watch the agent think and reason in real-time
- **CopilotPortal** — plug-and-play in-app chat component
- **CopilotTextarea** — AI-powered text editing anywhere in your app
- **React hooks** — `useMakeCopilotReadable`, `useMakeCopilotActionable`
- **Generative UI** — AI dynamically generates UI components based on context

## Integration

### 1. Create a Token

Go to [Vinkius Cloud](https://cloud.vinkius.com) → your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add to Your App

In your CopilotKit configuration, register the Vinkius MCP server:

```typescript
<CopilotKit
  mcpServers={[{
    url: "https://edge.vinkius.com/{TOKEN}/mcp"
  }]}
>
  <CopilotPortal />
</CopilotKit>
```

### 3. Build MCP Apps

MCP tools from Vinkius Cloud appear in the copilot chat. Use the MCP Apps API to define how each tool result renders as a React component.

---

## FAQ

**How do MCP Apps display tool results?**
MCP Apps map tool responses to React components. You define a renderer for each tool — a table, form, chart, or custom component. The copilot renders it inline in the chat.

**What are CoAgents?**
CoAgents are human-in-the-loop agent workflows built on LangGraph. The agent and your React app share state, so users can see intermediate results and guide the agent's decisions.

**Does CopilotKit work with Angular?**
Yes. CopilotKit supports both React and Angular. MCP Apps and CoAgents work in both frameworks.

**Is CopilotKit free?**
Open-source. CopilotKit Cloud offers managed infrastructure for production copilots.
