---
title: "Connect MCP Server to Agno — Setup Guide | Vinkius"
description: "Add MCP servers to Agno (formerly Phidata), the multimodal AI agent framework. 10,000x faster than LangGraph, AgentOS runtime, and MCP for external tools."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Agno — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Agno. Multimodal agents with first-class MCP and AgentOS."
  - - meta
    - name: keywords
      content: "Agno MCP, MCP Agno, Agno AI agent MCP, connect MCP server Agno, Vinkius Agno, Agno Phidata MCP, AgentOS MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Agno","step":[{"@type":"HowToStep","name":"Install","text":"pip install agno and import MCPTools."},{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Run agent","text":"Add MCPTools to your agent and run it."}]}'
---

# Agno

Agno (formerly Phidata) is an open-source Python framework for building multimodal AI agents. It processes text, images, audio, and video natively, with agent creation that benchmarks at 10,000x faster than LangGraph using 50x less memory. **AgentOS** provides the production runtime — observability, human-in-the-loop, monitoring — while MCP connects agents to external tool servers.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#14b8a6,#059669);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Ag</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Agno</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">formerly Phidata · <a href="https://agno.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">agno.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Python · Framework</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">First-class MCP Support</div></div>
</div>
</div>

## Multimodal Agents Without the Overhead

Agno's design philosophy prioritizes speed and simplicity. No complex abstractions or verbose configurations — define an agent with a model, tools, and instructions in pure Python. The framework handles routing, multi-agent coordination, and tool execution underneath.

MCP integrates through the dedicated `MCPTools` utility. Point it at a server URL, and the agent auto-discovers available tools. Multi-agent teams can share MCP tools or use separate servers for role-specific access.

AgentOS takes this into production with:

- **Multimodal** — text, images, audio, and video as native inputs
- **Pure Python** — no DSL, no YAML, just Python classes and functions
- **Multi-agent teams** — declarative composition with agent-to-agent collaboration
- **RAG** — vector databases, dynamic few-shot learning, knowledge stores
- **AgentOS** — observability dashboards, HITL checkpoints, monitoring
- **Model-agnostic** — OpenAI, Anthropic, Google, open-source models

## Python Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP to Your Agent

```python
from agno.agent import Agent
from agno.tools.mcp import MCPTools

agent = Agent(
    model="claude-sonnet-4",
    tools=[MCPTools(url="https://edge.vinkius.com/{TOKEN}/mcp")],
    instructions=["Use MCP tools for external data"]
)
agent.run("check the production server status")
```

### 3. Deploy with AgentOS

Package your agent for production with AgentOS observability and human-in-the-loop checkpoints.

---

## FAQ

**How does Agno compare to LangGraph for MCP?**
Agno creates agents 10,000x faster with 50x less memory. MCP tools integrate with a single import — no graph definitions or node wiring required.

**Can multi-agent teams share MCP tools?**
Yes. Configure shared MCP tool instances across team members, or assign different MCP servers to different agents for role-based access.

**What is AgentOS?**
The production runtime for Agno agents. It provides dashboards, observability, monitoring, and human-in-the-loop checkpoints for deployed agents.

**Is Agno free?**
Open-source. AgentOS cloud offering has free and paid tiers.
