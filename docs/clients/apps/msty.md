---
title: "Connect MCP Server to Msty — Setup Guide | Vinkius"
description: "Add MCP servers to Msty, the offline-capable AI desktop app. RAG knowledge stacks, model comparison, conversation branching, and MCP tool integration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Msty — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Msty. Offline AI with RAG knowledge stacks and MCP tools."
  - - meta
    - name: keywords
      content: "Msty MCP, MCP Msty, Msty offline AI MCP, connect MCP server Msty, Vinkius Msty, Msty knowledge stacks"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Msty","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add server","text":"Configure MCP server in Msty MCP settings."},{"@type":"HowToStep","name":"Chat","text":"Combine knowledge stacks with MCP tools for grounded conversations."}]}'
---

# Msty

Msty is a desktop AI application that runs models both locally and through cloud APIs, with a focus on **offline capability** and **knowledge management**. Its standout feature is **knowledge stacks** — curated document collections that function as specialized RAG databases. Pair a knowledge stack with MCP tools and the model answers questions using both your documents and live external data.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#a78bfa,#7c3aed);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Ms</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Msty</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">msty.app · <a href="https://msty.app" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">msty.app</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">MCP Settings</div></div>
</div>
</div>

## Knowledge Stacks Meet Live MCP Data

Knowledge stacks are topic-specific document collections. Create a "Company Policies" stack from HR documents, a "Technical Docs" stack from your engineering wiki, or a "Sales Data" stack from quarterly reports. Each stack is independently searchable and can be activated per conversation.

When combined with MCP, the model cross-references static documents with live data. Ask "how does our current deployment status compare to the SLA in our policy docs?" and Msty searches the policy stack AND calls your monitoring MCP tool.

Features:

- **Knowledge stacks** — curated RAG document collections by topic
- **Model comparison** — send the same prompt to multiple models side by side
- **Offline mode** — full functionality with local models, no internet needed
- **Conversation branching** — explore alternative responses from any point
- **Multi-provider** — local Ollama, OpenAI, Anthropic, Google, and more
- **Image generation** — DALL-E and Stable Diffusion integration
- **Markdown export** — save conversations with formatting preserved

## Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Server

Go to **Settings** → **MCP** → **Add**. Paste your Vinkius URL.

### 3. Stack + Tools

Activate a knowledge stack and chat. The model uses RAG from the stack and MCP tools together.

---

## FAQ

**Can I use knowledge stacks and MCP tools in the same conversation?**
Yes. The model decides whether to search your document stack or call an MCP tool based on the question.

**Does Msty work offline?**
Yes. Local models run without internet. MCP tools require connectivity, but the rest works offline.

**What is model comparison?**
Send the same prompt to two or more models and see responses side by side. Useful for evaluating how different models use MCP tools.

**Is Msty free?**
Free version available. Pro features via purchase.
