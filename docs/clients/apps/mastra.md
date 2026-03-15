---
title: "Connect MCP Server to Mastra — Setup Guide | Vinkius"
description: "Add MCP servers to Mastra, the TypeScript AI agent framework. Workflow engine, knowledge graphs, evaluation system, and MCP tool integration for production agents."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Mastra — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Mastra. TypeScript agent framework with workflow engine."
  - - meta
    - name: keywords
      content: "Mastra MCP, MCP Mastra, Mastra TypeScript MCP, connect MCP server Mastra, Vinkius Mastra, Mastra AI agent framework"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Mastra","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Register the MCP server in your Mastra app configuration."},{"@type":"HowToStep","name":"Run","text":"Agents use MCP tools within workflows and direct interactions."}]}'
---

# Mastra

Mastra is a TypeScript-first framework for building production AI agents. It provides a workflow engine with branching/parallel execution, a knowledge graph for structured memory, built-in evaluation for measuring agent quality, and native MCP support. If you are building agents in TypeScript (or JavaScript), Mastra provides the full stack.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#f43f5e,#e11d48);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Ma</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Mastra</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://mastra.ai" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">mastra.ai</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">TypeScript · Framework</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Native MCP Support</div></div>
</div>
</div>

## TypeScript-Native Agent Framework with MCP

Mastra treats MCP as a first-class integration. MCP servers register in your project configuration and their tools become available to all agents and workflows. The framework handles connection management, tool discovery, and type-safe parameter mapping.

The workflow engine goes beyond simple chains — branches run in parallel, conditions control flow, and steps can pause for human review. MCP tools participate in this system as regular workflow steps, making complex automation possible without leaving TypeScript.

Key capabilities:

- **TypeScript-first** — full type safety for agent configuration, tools, and workflows
- **Workflow engine** — branching, parallel execution, conditions, and human-in-the-loop
- **Knowledge graphs** — structured agent memory with relationships and entity tracking
- **Evaluation system** — measure agent quality with built-in metrics and custom evaluators
- **Native MCP** — register servers, auto-discover tools, type-safe invocation
- **Vercel AI SDK** — seamless integration with the Vercel ecosystem
- **RAG support** — document ingestion and retrieval with vector stores

## TypeScript Configuration

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Register the Server

```typescript
import { Mastra } from '@mastra/core';

const mastra = new Mastra({
  mcpServers: {
    vinkius: {
      url: 'https://edge.vinkius.com/{TOKEN}/mcp',
    },
  },
});
```

### 3. Use in Agents or Workflows

MCP tools from Vinkius Cloud are available in all Mastra agents and workflows automatically.

---

## FAQ

**How does Mastra handle MCP tool types?**
Mastra auto-generates TypeScript types from MCP tool schemas. You get full IntelliSense and compile-time checks for tool parameters.

**Can MCP tools run inside Mastra workflows?**
Yes. MCP tools are regular workflow steps. Wire them alongside conditions, branches, and parallel execution blocks.

**How does the evaluation system work?**
Define metrics (accuracy, latency, tool usage patterns) and run evaluations against test cases. Results help you improve agent behavior over time.

**Is Mastra free?**
Open-source under MIT. Use for any project without licensing costs.
