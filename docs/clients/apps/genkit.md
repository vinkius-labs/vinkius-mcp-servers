---
title: "Connect MCP Server to Genkit — Setup Guide | Vinkius"
description: "Add MCP servers to Firebase Genkit, Google's AI development framework. Type-safe tool definitions, flow system, dotprompt templates, and MCP plugin for external tools."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Genkit — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Genkit. Google's AI framework with type-safe tools and flows."
  - - meta
    - name: keywords
      content: "Genkit MCP, MCP Genkit, Firebase Genkit MCP, connect MCP server Genkit, Vinkius Genkit, Google Genkit AI MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Genkit","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Install","text":"Install the Genkit MCP plugin and configure Vinkius as a server."},{"@type":"HowToStep","name":"Use","text":"MCP tools integrate with Genkit flows and agent definitions."}]}'
---

# Genkit

Firebase Genkit is Google's open-source framework for building AI-powered applications in TypeScript/JavaScript and Go. It emphasizes type safety, testability, and production readiness. The flow system lets you define complex AI pipelines as debuggable, replayable sequences. An MCP plugin bridges Genkit's type-safe tool system with external MCP servers.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#4285f4,#1a73e8);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Gk</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Genkit</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Google · <a href="https://firebase.google.com/docs/genkit" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">firebase.google.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">TypeScript · Go · Framework</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">MCP Plugin</div></div>
</div>
</div>

## Type-Safe AI Flows with MCP Tools

Genkit's strength is bringing software engineering rigor to AI development. Tools have Zod schemas that are validated at compile time and runtime. Flows are debuggable with a built-in developer UI that lets you step through each action, inspect inputs/outputs, and replay with different parameters.

The MCP plugin imports external tools and wraps them in Genkit's type-safe system. MCP tool schemas map to Zod types, so you get the same validation and IntelliSense for external tools as for locally defined ones.

Notable features:

- **Type-safe tools** — Zod schemas for tool inputs and outputs
- **Flow system** — composable, debuggable AI pipelines
- **Dotprompt** — template-based prompt management with variables and conditionals
- **Developer UI** — step-through debugging for flows and agent runs
- **Firebase integration** — deploy to Cloud Functions, use Firestore for state
- **Multi-model** — Gemini, GPT, Claude, Ollama, and custom providers
- **Go support** — first-class Go SDK alongside TypeScript

## MCP Plugin Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Install and Configure

```typescript
import { genkit } from 'genkit';
import { mcpPlugin } from 'genkitx-mcp';

const ai = genkit({
  plugins: [
    mcpPlugin({
      servers: {
        vinkius: { url: 'https://edge.vinkius.com/{TOKEN}/mcp' },
      },
    }),
  ],
});
```

### 3. Use in Flows

MCP tools are available in Genkit flows and agent definitions with full type safety.

---

## FAQ

**Does the MCP plugin preserve type safety?**
Yes. MCP tool schemas are converted to Zod types. You get compile-time validation and IntelliSense for all MCP tool parameters.

**Can I debug MCP tool calls in Genkit Developer UI?**
Yes. MCP tool invocations appear as steps in the flow debugger. You can inspect inputs, outputs, and timing.

**Does Genkit work with Firebase?**
Yes. Deploy flows to Cloud Functions, use Firestore for state management, and leverage Firebase Auth for user authentication.

**Is Genkit free?**
Open-source under Apache 2.0. Firebase services have their own pricing.
