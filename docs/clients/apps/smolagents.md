---
title: "Connect MCP Server to SmolAgents — Setup Guide | Vinkius"
description: "Add MCP servers to SmolAgents by Hugging Face. Minimalist Python agent framework with code-based reasoning, tool calling, and MCP support in under 1,000 lines."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to SmolAgents — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to SmolAgents. Hugging Face's minimalist agent framework."
  - - meta
    - name: keywords
      content: "SmolAgents MCP, MCP SmolAgents, Hugging Face SmolAgents MCP, connect MCP server SmolAgents, Vinkius SmolAgents"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to SmolAgents","step":[{"@type":"HowToStep","name":"Install","text":"pip install smolagents and configure your agent."},{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Run","text":"Agent generates and executes Python code that calls MCP tools."}]}'
---

# SmolAgents

SmolAgents is Hugging Face's minimalist agent framework — the entire core is under 1,000 lines of Python. Instead of generating JSON tool calls, agents write and execute **Python code** that calls tools. This code-based reasoning lets agents use loops, conditionals, and composition naturally. MCP tools become callable Python functions in this code execution context.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#fbbf24,#f59e0b);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#1a1a2e;flex-shrink:0">🤗</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">SmolAgents</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Hugging Face · <a href="https://huggingface.co/docs/smolagents" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">HF Docs</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Python · Framework</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Tool Integration</div></div>
</div>
</div>

## Code-Based Reasoning with MCP Tools

Most agent frameworks have the LLM generate JSON tool calls. SmolAgents takes a different approach: the LLM generates Python code that gets executed. This is more expressive — the agent can write loops that call a tool multiple times, use conditionals to decide between tools, and compose results using standard Python.

MCP tools appear as Python functions in the execution sandbox. The agent writes `result = mcp_tool("query")` and it executes.

Features:

- **Code agents** — LLM generates executable Python instead of JSON tool calls
- **Under 1,000 lines** — entire framework is auditable and understandable
- **Hugging Face Hub** — share tools and agents on the Hub
- **Sandboxed execution** — code runs in a controlled environment
- **Multi-model** — any model on HF Hub, OpenAI, Anthropic
- **Tool sharing** — push/pull tools from the Hugging Face Hub
- **Gradio UI** — built-in web interface for agent interaction

## Python Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Tools

```python
from smolagents import CodeAgent, MCPClient

mcp = MCPClient(url="https://edge.vinkius.com/{TOKEN}/mcp")
agent = CodeAgent(tools=mcp.get_tools(), model=...)
agent.run("analyze the production metrics")
```

### 3. Code-Based Execution

The agent writes Python code that calls MCP tools through natural code patterns.

---

## FAQ

**How is code-based reasoning different from JSON tool calls?**
The LLM writes Python that gets executed. It can use loops, conditionals, and composition — more expressive than single JSON tool calls.

**Is the code execution safe?**
Yes. SmolAgents runs generated code in a sandboxed environment with configurable restrictions.

**Can I share MCP tools on Hugging Face Hub?**
Yes. Tools can be pushed to and pulled from the Hub for community sharing.

**Is SmolAgents free?**
Open-source under Apache 2.0. Free to use.
