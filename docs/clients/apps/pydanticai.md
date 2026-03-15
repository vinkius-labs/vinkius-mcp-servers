---
title: "Connect MCP Server to PydanticAI — Setup Guide | Vinkius"
description: "Add MCP servers to PydanticAI, the type-safe Python agent framework by the creators of Pydantic. Validated tool inputs/outputs, dependency injection, and MCP integration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to PydanticAI — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to PydanticAI. Type-safe agents with validated MCP tool calls."
  - - meta
    - name: keywords
      content: "PydanticAI MCP, MCP PydanticAI, PydanticAI agent MCP, connect MCP server PydanticAI, Vinkius PydanticAI, Pydantic AI agent"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to PydanticAI","step":[{"@type":"HowToStep","name":"Install","text":"pip install pydantic-ai and configure your agent."},{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Run","text":"Agent calls MCP tools with fully typed, validated inputs and outputs."}]}'
---

# PydanticAI

PydanticAI is an agent framework built by the team behind Pydantic — the most-downloaded Python validation library. Every tool call input and output is validated against Pydantic models. MCP tools inherit this type safety: the framework generates Pydantic schemas from MCP tool definitions and validates all data flowing through them.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#e11d48,#be123c);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Py</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">PydanticAI</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Pydantic · <a href="https://ai.pydantic.dev" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">ai.pydantic.dev</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Python · Framework</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">MCP Tool Server</div></div>
</div>
</div>

## Type-Safe MCP Tool Calls

PydanticAI's core principle is that every piece of data entering or leaving an agent should be validated. MCP tool definitions specify parameter schemas — PydanticAI converts these into Pydantic models automatically. If the LLM generates a malformed tool call, the framework catches it before it reaches your server.

**Dependency injection** is the other standout feature. Your agent tools receive typed dependencies (database connections, API clients, configuration) through DI — no globals, no singletons. Clean, testable code.

Features:

- **Type-safe tools** — Pydantic model validation on all inputs and outputs
- **Dependency injection** — clean DI for tool dependencies
- **Structured responses** — typed agent return values validated by Pydantic
- **Logfire integration** — observability through Pydantic Logfire
- **Model-agnostic** — OpenAI, Anthropic, Gemini, Ollama, and more
- **Streaming** — typed streaming responses with validation
- **Python-first** — built by the Pydantic team, idiomatic Python

## Python Integration

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Connect MCP Tools

```python
from pydantic_ai import Agent
from pydantic_ai.mcp import MCPServerHTTP

server = MCPServerHTTP(url="https://edge.vinkius.com/{TOKEN}/mcp")
agent = Agent("claude-sonnet-4", mcp_servers=[server])
result = agent.run_sync("check server status")
```

### 3. Type-Safe Results

All tool outputs are validated. Structured responses use Pydantic models for downstream processing.

---

## FAQ

**How does PydanticAI validate MCP tool calls?**
It converts MCP tool schemas into Pydantic models and validates all parameters before sending the call.

**What is dependency injection in PydanticAI?**
Tools receive their dependencies (DB connections, configs) through typed DI containers instead of global variables. This makes agents testable.

**Does PydanticAI support streaming?**
Yes. Typed streaming responses with incremental validation as data arrives.

**Is PydanticAI free?**
Open-source under MIT. Logfire observability has free and paid tiers.
