---
title: "Connect MCP Server to Msty — Setup Guide | Vinkius"
description: "Add MCP servers to Msty, the AI studio with RAG knowledge stacks. Side-by-side model comparison, offline mode, and MCP tool integration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Msty — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP servers to Msty. AI studio with RAG stacks and model comparison."
  - - meta
    - name: keywords
      content: "Msty MCP, MCP Msty, Msty AI studio MCP, connect MCP server Msty, Vinkius Msty, Msty knowledge stacks MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Msty","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add server","text":"In Msty, go to Settings → MCP Servers and add your Vinkius URL."},{"@type":"HowToStep","name":"Chat","text":"Open a chat. MCP tools extend your knowledge stacks with live data."}]}'
---

# Msty

Msty is a desktop AI studio that goes beyond simple chat. It features RAG-powered "knowledge stacks" that let you ground conversations in your own documents, side-by-side model comparison for evaluating different LLMs on the same prompt, and offline mode using local models. MCP support brings live external data into this mix.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#06b6d4,#0891b2);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Ms</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Msty</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">msty.app · <a href="https://msty.app" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">msty.app</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Settings UI</div></div>
</div>
</div>

## Knowledge Stacks + Live MCP Data

Knowledge stacks are Msty's version of RAG. You create a "stack" from local documents — PDFs, code, Markdown — and the AI references them during conversations. MCP adds a real-time dimension: instead of only reading static documents, the model can query live APIs, databases, or monitoring tools.

For example, pair a stack of your team's runbooks with an MCP server that reads production metrics. Ask "what's the recovery procedure for high memory usage, and is it happening now?" — Msty answers from both the runbook and the live data.

Unique features:

- **Knowledge stacks** — document-grounded RAG with vector search
- **Model comparison** — run the same prompt across Claude, GPT, Gemini, and Ollama side by side
- **Offline mode** — Ollama integration for fully local operation
- **Chat organization** — folders, tags, and search for past conversations
- **Export** — conversations export as Markdown or JSON
- **Cross-platform** — native desktop app for all operating systems

## Adding Vinkius Cloud

### 1. Get a Token

In [Vinkius Cloud](https://cloud.vinkius.com), open your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Configure in Msty

Open **Msty** → **Settings** → **MCP Servers** → **Add Server**. Paste your URL:

```
https://edge.vinkius.com/{TOKEN}/mcp
```

### 3. Use in Chat

Start or continue a conversation. MCP tools are available alongside your knowledge stacks. Msty decides automatically when to use each.

---

## FAQ

**Can Msty use knowledge stacks and MCP together?**
Yes. In a single conversation, the AI can reference your indexed documents and call MCP tools for live data. The model decides which source to consult based on your question.

**How does model comparison work with MCP?**
When comparing models side by side, all models have access to the same MCP tools. This lets you evaluate how different models use external data differently.

**Does Msty work offline?**
With Ollama models — yes. Knowledge stacks work locally. MCP servers require internet connectivity.

**Is Msty free?**
Msty has a free tier with basic features. Premium plans unlock advanced RAG, unlimited knowledge stacks, and priority support.
