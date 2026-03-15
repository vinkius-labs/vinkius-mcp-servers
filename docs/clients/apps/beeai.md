---
title: "Connect MCP Server to BeeAI — Setup Guide | Vinkius"
description: "Add MCP servers to BeeAI, the open-source agent framework by IBM. Structured memory, tool validation, and MCP integration for enterprise AI agents."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to BeeAI — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to BeeAI. IBM's agent framework with structured memory and MCP."
  - - meta
    - name: keywords
      content: "BeeAI MCP, MCP BeeAI, BeeAI IBM MCP, connect MCP server BeeAI, Vinkius BeeAI, BeeAI agent framework MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to BeeAI","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Register MCP tools in your BeeAI agent configuration."},{"@type":"HowToStep","name":"Run","text":"Agents use MCP tools with structured memory and validation."}]}'
---

# BeeAI

BeeAI is an open-source agent framework backed by IBM Research. It focuses on reliability and transparency — **structured memory** tracks what the agent knows, **tool validation** ensures inputs match expected schemas before execution, and **observability** logs every reasoning step. MCP extends these validated agents with external tool access.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#facc15,#eab308);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#1a1a2e;flex-shrink:0">Be</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">BeeAI</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">IBM Research · <a href="https://github.com/i-am-bee/bee-agent-framework" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">GitHub</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">TypeScript · Framework</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Tool Registration</div></div>
</div>
</div>

## Enterprise-Grade Reliability for Agent Tools

BeeAI validates every tool call before execution — checking parameter types, required fields, and value constraints against the tool schema. MCP tool schemas feed directly into this validation system, so hallucinated or malformed tool calls are caught before they reach your server.

Structured memory means the agent maintains a typed knowledge base throughout a conversation. When an MCP tool returns data, BeeAI stores it in memory with metadata, making it available for future reasoning steps without re-fetching.

Features:

- **Tool validation** — schema-based input checking before every tool call
- **Structured memory** — typed knowledge persistence across conversation steps
- **Observability** — full reasoning traces with tool call logging
- **IBM-backed** — active development by IBM Research
- **TypeScript** — native TypeScript framework with strong typing
- **Serializable state** — pause and resume agent sessions
- **Granite models** — optimized for IBM Granite but works with any LLM

## Integration

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Register MCP Tools

Add MCP tools to your BeeAI agent configuration. The framework validates all tool schemas at initialization.

### 3. Run with Validation

Every MCP tool call is validated against the schema before execution. Invalid calls are rejected with clear error messages.

---

## FAQ

**How does BeeAI validate MCP tool calls?**
BeeAI checks tool call parameters against the MCP tool schema before sending the request. Type mismatches, missing fields, and invalid values are caught at the framework level.

**What is structured memory?**
A typed knowledge store that persists through the conversation. MCP tool results are stored with metadata for later reference without re-fetching.

**Does BeeAI work with non-IBM models?**
Yes. Optimized for Granite but supports OpenAI, Anthropic, and other providers.

**Is BeeAI free?**
Open-source under Apache 2.0.
