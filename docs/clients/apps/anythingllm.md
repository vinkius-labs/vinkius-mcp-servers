---
title: "Connect MCP Server to AnythingLLM — Setup Guide | Vinkius"
description: "Add MCP servers to AnythingLLM, the all-in-one AI desktop app. Document RAG, multi-user workspaces, agent skills, and MCP support for external tool access."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to AnythingLLM — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to AnythingLLM. Document RAG and agent skills with MCP tools."
  - - meta
    - name: keywords
      content: "AnythingLLM MCP, MCP AnythingLLM, AnythingLLM RAG MCP, connect MCP server AnythingLLM, Vinkius AnythingLLM"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to AnythingLLM","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add skill","text":"Add MCP server as an agent skill in AnythingLLM settings."},{"@type":"HowToStep","name":"Chat","text":"Agents use MCP tools alongside RAG and other skills."}]}'
---

# AnythingLLM

AnythingLLM is a desktop application that bundles everything you need for AI document chat: a built-in embedding engine, vector database, RAG pipeline, and multi-model support — no separate services required. **Agent skills** let you extend the built-in agent with custom abilities, and MCP servers are one way to add those skills.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#6d28d9,#4c1d95);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">AL</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">AnythingLLM</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Mintplex Labs · <a href="https://anythingllm.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">anythingllm.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux · Docker</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Agent Skills</div></div>
</div>
</div>

## All-in-One Document Chat with Agent Skills

AnythingLLM embeds everything in a single install: LanceLanceDB for vector storage, a built-in embedding engine, a RAG pipeline, and an agent framework. You drag files into a workspace, and they're indexed for conversation immediately. No separate Pinecone, Weaviate, or ChromaDB setup.

Agent skills extend this beyond document chat. MCP tools become skills your agent can use — call an API, check a status, execute a query — alongside document retrieval decisions. The agent decides whether to search your uploaded docs or call an MCP tool.

Features:

- **All-in-one** — embedding, vector DB, RAG, and agent built in
- **Workspaces** — isolated document collections for different projects
- **Multi-user** — user management with workspace permissions
- **Agent skills** — extend agents with MCP tools and custom functions
- **Multi-model** — OpenAI, Anthropic, Ollama, LM Studio, and more
- **File support** — PDF, DOCX, TXT, CSV, and web page ingestion
- **Docker and desktop** — run as desktop app or self-host with Docker

## Adding MCP Skills

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add as Agent Skill

Go to **Settings** → **Agent** → **MCP Skills** → **Add**. Paste your Vinkius URL.

### 3. Chat in a Workspace

Create or open a workspace. The agent uses MCP tools alongside document RAG to answer questions.

---

## FAQ

**Can MCP tools and document RAG work together?**
Yes. The agent decides whether to search your workspace documents or call an MCP tool based on the question.

**Does AnythingLLM require external services?**
No. Embedding, vector storage, and RAG are built in. External LLM providers (OpenAI, Ollama) are configured for inference.

**Can multiple users share MCP tools?**
Yes. Agent skills including MCP are available to users with workspace access.

**Is AnythingLLM free?**
Open-source. Desktop app is free. Enterprise version adds additional management features.
