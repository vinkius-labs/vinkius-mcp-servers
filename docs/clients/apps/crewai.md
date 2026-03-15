---
title: "Connect MCP Server to CrewAI — Setup Guide | Vinkius"
description: "Add MCP servers to CrewAI, the multi-agent Python framework with 41k+ stars. MCP Adapter DSL for role-based agent crews, task delegation, async workflows."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to CrewAI — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to CrewAI. Multi-agent crews with role-based MCP tool access."
  - - meta
    - name: keywords
      content: "CrewAI MCP, MCP CrewAI, CrewAI MCP adapter, connect MCP server CrewAI, Vinkius CrewAI, CrewAI multi-agent MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to CrewAI","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Use the CrewAI MCP Adapter to connect agents to Vinkius Cloud tools."},{"@type":"HowToStep","name":"Run crew","text":"Kick off your crew. Agents call MCP tools autonomously during task execution."}]}'
---

# CrewAI

CrewAI is an open-source Python framework for orchestrating teams of AI agents. Each agent has a defined role, goal, and backstory, and they collaborate to complete complex tasks through sequential or hierarchical workflows. The **MCP Adapter** connects these agents to external tool servers like Vinkius Cloud, so your "researcher" agent can query databases while your "writer" agent drafts reports.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#3b82f6,#1d4ed8);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">CA</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">CrewAI</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">★ 41k+ · <a href="https://crewai.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">crewai.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Python · Framework</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">MCP Adapter DSL</div></div>
</div>
</div>

## Role-Based Agent Crews with MCP Tools

CrewAI's defining concept is the "crew" — a team of agents with distinct roles that collaborate on a shared objective. A sales analysis crew might have a data analyst agent (queries CRM via MCP), a market researcher agent (uses web search), and a report writer agent (generates summaries). Each agent accesses only the tools relevant to its role.

The MCP Adapter provides a simple DSL for connecting agents to any MCP server. It handles tool discovery, parameter mapping, and result parsing — you just point it at a URL and the agent's tools are ready.

v1.10 highlights for MCP:

- **MCP Adapter DSL** — one-liner to connect any agent to MCP servers
- **Role-based agents** — each with a role, goal, and backstory for specialized behavior
- **Sequential and hierarchical** — run agents in sequence or with a manager that delegates
- **Full async** — tasks, flows, knowledge, memory, and tools all support async
- **Code execution** — agents write and run code with `allow_code_execution`
- **Manager agents** — hierarchical coordinator that delegates subtasks
- **41k+ stars** — one of the most widely adopted agent frameworks

## Python Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Wire the MCP Adapter

```python
from crewai import Agent, Crew, Task
from crewai.tools import MCPServerAdapter

# Connect to Vinkius Cloud MCP server
mcp = MCPServerAdapter(url="https://edge.vinkius.com/{TOKEN}/mcp")

# Create an agent with MCP tools
analyst = Agent(
    role="Data Analyst",
    goal="Extract insights from production data",
    tools=mcp.tools()
)
```

### 3. Run the Crew

```python
crew = Crew(agents=[analyst], tasks=[...])
result = crew.kickoff()
```

Agents call MCP tools autonomously during crew execution.

---

## FAQ

**Can different agents in a crew access different MCP servers?**
Yes. Each agent can be configured with its own set of MCP tools. One agent might connect to a database server while another uses a monitoring server.

**How does the MCP Adapter discover tools?**
It queries the MCP server on initialization and maps each tool to a CrewAI-compatible format. Tool schemas, descriptions, and parameters are preserved.

**Does CrewAI support async MCP calls?**
Yes. v1.10 added full async support across tasks, tools, and agent executors. MCP calls benefit from this for parallel crew execution.

**Is CrewAI free?**
Open-source under MIT. CrewAI Enterprise is available for production deployments with additional features.
