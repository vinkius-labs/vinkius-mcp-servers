---
title: "Connect MCP Server to 5ire — Setup Guide | Vinkius"
description: "Add MCP servers to 5ire, the cross-platform desktop AI assistant with local knowledge bases. Multiple AI providers, file and web access, conversation threading."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to 5ire — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP servers to 5ire. Desktop AI assistant with knowledge bases and multi-provider."
  - - meta
    - name: keywords
      content: "5ire MCP, MCP 5ire, 5ire desktop AI MCP, connect MCP server 5ire, Vinkius 5ire, 5ire knowledge base MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to 5ire","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add server","text":"Open 5ire Settings → MCP Servers → Add your Vinkius URL."},{"@type":"HowToStep","name":"Chat","text":"Start a conversation. MCP tools appear alongside local knowledge bases."}]}'
---

# 5ire

5ire is a cross-platform desktop AI assistant that combines chat with local knowledge bases. You can index documents, connect multiple AI providers, and access files and the web — all from a polished native interface. MCP integration adds a layer of external tool access on top of that local-first approach.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#f59e0b,#d97706);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">5i</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">5ire</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://github.com/5ire-tech/5ire" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">github.com/5ire-tech</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Settings UI</div></div>
</div>
</div>

## Local Knowledge Bases Meet External Tools

5ire's core differentiator is its built-in RAG (Retrieval-Augmented Generation) system. You can drop PDFs, Markdown files, or entire folders into a knowledge base, and the AI will reference them during conversations. MCP extends this pattern to live data sources: databases, monitoring dashboards, internal APIs — anything that serves structured information.

The combination is powerful for teams that need both historical documentation context and real-time operational data in the same conversation. Ask about a deployment procedure (knowledge base) and then check the current deployment status (MCP tool) in a single chat thread.

Key features:

- **Knowledge bases** — local document indexing with vector search
- **Multi-provider** — OpenAI, Anthropic, Google AI, Groq, and local Ollama
- **File access** — attach documents, images, and spreadsheets to conversations
- **Web browsing** — fetch and summarize web pages inline
- **Conversation threads** — organize chats by topic with separate histories
- **Open-source** — community-driven with active development

## Adding Vinkius Cloud

### 1. Create a Token

Log in to [Vinkius Cloud](https://cloud.vinkius.com). Select your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Open 5ire Settings

In 5ire, go to **Settings** → **MCP Servers**. Click **Add** and paste your Vinkius URL:

```
https://edge.vinkius.com/{TOKEN}/mcp
```

### 3. Start a Conversation

Open a new chat. MCP tools are now available alongside your knowledge bases and file attachments. The AI decides whether to use local context, MCP tools, or both based on your question.

---

## FAQ

**Can 5ire use MCP tools and knowledge bases together?**
Yes. In a single conversation, the AI can reference indexed documents and call MCP tools. For example, it might look up a procedure in your knowledge base and then execute an action via MCP.

**Which AI providers work with MCP in 5ire?**
MCP functions independently of the AI provider. You can use OpenAI, Anthropic, Google, or Ollama — the MCP tools are always available.

**Does 5ire run offline?**
The desktop app and local knowledge bases work offline with Ollama models. MCP servers require an internet connection.

**Is 5ire free?**
Open-source. You provide your own API key for cloud AI providers, or use Ollama for free local inference.
