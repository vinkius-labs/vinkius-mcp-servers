---
title: "Connect MCP Server to LangGraph — Setup Guide | Vinkius"
description: "Add MCP servers to LangGraph, the stateful agent orchestration framework by LangChain. Graph-based workflows, persistence, human-in-the-loop, and MCP tool nodes."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to LangGraph — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to LangGraph. Stateful graph-based agents with MCP tool nodes."
  - - meta
    - name: keywords
      content: "LangGraph MCP, MCP LangGraph, LangGraph agent MCP, connect MCP server LangGraph, Vinkius LangGraph, LangChain LangGraph MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to LangGraph","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add node","text":"Create a ToolNode with MCP tools in your LangGraph state graph."},{"@type":"HowToStep","name":"Run","text":"Execute the graph. Agents route to MCP tool nodes as part of their reasoning."}]}'
---

# LangGraph

LangGraph is the stateful agent orchestration framework by LangChain. It models agent workflows as directed graphs — nodes are actions (LLM calls, tool calls, human review) and edges define the flow between them. Unlike chain-based approaches, LangGraph supports cycles, branching, and persistent state, which are essential for complex agent behaviors. MCP tools plug in as graph nodes.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#22c55e,#16a34a);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">LG</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">LangGraph</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">LangChain · <a href="https://langchain-ai.github.io/langgraph/" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">langgraph docs</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Python · JavaScript · Framework</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">ToolNode</div></div>
</div>
</div>

## Graph-Based Agent Workflows with MCP Nodes

LangGraph's graph model gives you precise control over agent behavior. You define states, transitions, and conditions explicitly — no magic, no hidden prompt engineering. Cycles let agents retry failed operations. Branching lets them pursue multiple strategies simultaneously. Persistent state means they can pause, resume, and be interrupted.

MCP tools become ToolNodes in the graph. An agent node reasons about what to do, routes to the appropriate MCP ToolNode, processes the result, and decides the next step. The graph structure makes this flow transparent and debuggable.

Core features:

- **Directed graph model** — explicit states, transitions, and conditions
- **Cycles and branching** — agents retry, backtrack, and pursue parallel paths
- **Persistent state** — pause, resume, and time-travel through agent execution
- **Human-in-the-loop** — interrupt nodes for human review and approval
- **Streaming** — real-time output of agent reasoning and tool results
- **LangSmith integration** — trace, debug, and monitor graph execution
- **Python and JS** — first-class support in both languages

## Adding MCP Tools to Your Graph

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Create a ToolNode

```python
from langgraph.prebuilt import ToolNode
from langchain_mcp import MCPToolkit

toolkit = MCPToolkit(url="https://edge.vinkius.com/{TOKEN}/mcp")
tool_node = ToolNode(toolkit.get_tools())

# Add to your state graph
graph.add_node("tools", tool_node)
graph.add_edge("agent", "tools")
graph.add_edge("tools", "agent")
```

### 3. Run the Graph

Execute the graph. The agent node routes to MCP tools as part of its reasoning loop.

---

## FAQ

**How do MCP tools fit into the LangGraph model?**
MCP tools are wrapped as a ToolNode in the directed graph. The agent node decides when to call tools, routes to the ToolNode, and processes results — all as explicit graph transitions.

**Can I combine MCP with LangChain tools?**
Yes. ToolNodes can contain both MCP tools and native LangChain tools. The agent selects from all available tools.

**Does LangGraph support persistent state with MCP?**
Yes. Graph state — including MCP tool call history — is persisted. You can pause, resume, or replay agent sessions.

**Is LangGraph free?**
Open-source. LangSmith (monitoring) has free and paid tiers.
