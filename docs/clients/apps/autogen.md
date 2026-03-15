---
title: "Connect MCP Server to AutoGen — Setup Guide | Vinkius"
description: "Add MCP servers to AutoGen, Microsoft's multi-agent conversation framework. Agent-to-agent chat, function calling, group chat manager, and MCP tool integration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to AutoGen — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to AutoGen. Multi-agent conversations with MCP tool access."
  - - meta
    - name: keywords
      content: "AutoGen MCP, MCP AutoGen, AutoGen multi-agent MCP, connect MCP server AutoGen, Vinkius AutoGen, Microsoft AutoGen MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to AutoGen","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Register the MCP server in your AutoGen agent configuration."},{"@type":"HowToStep","name":"Run","text":"Agents access MCP tools during multi-agent conversations."}]}'
---

# AutoGen

AutoGen is Microsoft's open-source framework for building multi-agent systems where AI agents converse with each other to solve tasks. Unlike single-agent frameworks, AutoGen orchestrates conversations between multiple agents — a coder, a reviewer, and a planner can discuss a task before producing output. MCP tools give these agents access to external data during their conversations.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#0ea5e9,#0284c7);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">AG</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">AutoGen</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Microsoft · <a href="https://github.com/microsoft/autogen" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">github.com/microsoft</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Python · Framework</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Function Registration</div></div>
</div>
</div>

## Multi-Agent Conversations with External Tools

AutoGen's agent-to-agent conversation pattern is unique. Agents don't just respond to user prompts — they discuss tasks with each other. A GroupChatManager coordinates the conversation, deciding which agent speaks next and when the task is complete.

MCP tools fit into this by giving agents access to real-world data during conversations. An analyst agent might query a database via MCP, share findings with a writer agent, who then drafts a report. The reviewer agent catches issues and sends the writer back to revise — all automatically.

Key features:

- **Agent-to-agent conversations** — agents discuss and iterate, not just respond
- **GroupChatManager** — coordinates multi-agent discussions with turn management
- **Function calling** — agents invoke registered functions including MCP tools
- **Human-in-the-loop** — configurable human participation in agent conversations
- **Code execution** — agents write and run code in sandboxed environments
- **Teachable agents** — agents that learn and remember across sessions
- **Microsoft-backed** — active development by Microsoft Research

## Python Integration

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Register MCP Tools

```python
from autogen import AssistantAgent, UserProxyAgent

assistant = AssistantAgent("analyst")
# Register MCP server tools with the agent
# MCP tools are available alongside other function calls
```

### 3. Start Conversations

Launch a multi-agent conversation. Agents call MCP tools as needed during their discussion, sharing results with other participants.

---

## FAQ

**How do MCP tools work in multi-agent conversations?**
Any agent in the group chat can call MCP tools. Results are shared with other agents in the conversation, allowing collaborative reasoning over external data.

**Can I mix MCP tools with native AutoGen functions?**
Yes. MCP tools are registered alongside custom functions. Agents choose the appropriate tool based on the task.

**Does AutoGen support human-in-the-loop with MCP?**
Yes. Configure the UserProxyAgent to require human approval before MCP tool calls execute.

**Is AutoGen free?**
Open-source under MIT. No licensing costs.
