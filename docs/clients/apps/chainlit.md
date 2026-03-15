---
title: "Connect MCP Server to Chainlit — Setup Guide | Vinkius"
description: "Add MCP servers to Chainlit, the Python framework for building production-ready LLM chat interfaces. Streaming, step visualization, multi-modal, and MCP tool display."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Chainlit — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Chainlit. Python chat UI framework with step visualization."
  - - meta
    - name: keywords
      content: "Chainlit MCP, MCP Chainlit, Chainlit LLM chat MCP, connect MCP server Chainlit, Vinkius Chainlit, Chainlit Python chat UI"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Chainlit","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Register MCP tools in your Chainlit app Python code."},{"@type":"HowToStep","name":"Run","text":"Start your Chainlit app. Tool calls display as expandable steps."}]}'
---

# Chainlit

Chainlit is a Python framework for building production-ready conversational AI interfaces. It specializes in **step visualization** — every LLM call, tool invocation, and retrieval step renders as an expandable node in the chat timeline. MCP tool calls appear as clearly labeled steps, making it easy for users to understand what the agent did and why.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#10b981,#059669);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Cl</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Chainlit</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://chainlit.io" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">chainlit.io</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Python · Web · Framework</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Python Integration</div></div>
</div>
</div>

## Step-by-Step Visibility into MCP Tool Calls

Chainlit's step visualization turns opaque agent behavior into a transparent timeline. Every MCP tool call shows as an expandable step: you see the tool name, input parameters, response data, and execution time. Users can click to inspect details or collapse steps they understand.

For production applications, this transparency builds trust. When a customer-facing agent queries a database via MCP, the step appears in the conversation — users know their question was answered with real data, not hallucination.

Key features:

- **Step visualization** — LLM calls, tool invocations, and retrieval steps render inline
- **Streaming** — real-time token-by-token delivery with smooth UI updates
- **Multi-modal** — images, files, audio, and interactive elements in conversations
- **Authentication** — built-in user auth with session management
- **Human feedback** — thumbs up/down, star ratings, and free-form feedback on messages
- **Data persistence** — conversation history with Literal AI or custom backends
- **Copilot mode** — embed Chainlit as a chat widget in any web page

## Python Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Register MCP in Your App

```python
import chainlit as cl

@cl.on_chat_start
async def start():
    # Register MCP server tools
    # Tools appear as callable functions in the agent
    pass
```

### 3. Launch

```bash
chainlit run app.py
```

MCP tool calls render as expandable steps in the chat interface.

---

## FAQ

**How do MCP tool calls display in Chainlit?**
As expandable steps in the conversation timeline. Each shows the tool name, parameters, response, and duration — click to inspect or collapse.

**Can I embed Chainlit on my website?**
Yes. Copilot mode lets you embed the chat interface as a widget on any page.

**Does Chainlit support authentication?**
Yes. Built-in auth with session management, user profiles, and conversation persistence.

**Is Chainlit free?**
Open-source. Literal AI offers optional cloud-based analytics and data persistence.
