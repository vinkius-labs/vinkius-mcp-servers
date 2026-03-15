---
title: "Connect MCP Server to Cherry Studio — Setup Guide | Vinkius"
description: "Add MCP servers to Cherry Studio, the desktop AI client for teams. Multi-provider support, conversation management, built-in knowledge base, and MCP tool pipeline."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Cherry Studio — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP servers to Cherry Studio. Multi-provider desktop AI with knowledge base."
  - - meta
    - name: keywords
      content: "Cherry Studio MCP, MCP Cherry Studio, Cherry Studio LLM MCP, connect MCP server Cherry Studio, Vinkius Cherry Studio, Cherry Studio AI client"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Cherry Studio","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add server","text":"Open Cherry Studio Settings → MCP → Add your Vinkius URL."},{"@type":"HowToStep","name":"Chat","text":"Start a conversation. MCP tools complement multi-provider chats."}]}'
---

# Cherry Studio

Cherry Studio is a polished desktop AI client that unifies multiple LLM providers under one interface. Instead of switching between ChatGPT, Claude, and Gemini in separate tabs, you manage all your conversations in a single app — with a shared knowledge base, conversation folders, and now MCP tools that work across every provider.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#ef4444,#dc2626);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">CS</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Cherry Studio</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://github.com/kangfenmao/cherry-studio" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">github.com/kangfenmao</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Settings Panel</div></div>
</div>
</div>

## One Interface for Every Model, Extended by MCP

Cherry Studio consolidates OpenAI, Anthropic, Google, DeepSeek, Ollama, and custom OpenAI-compatible endpoints into a unified conversation view. You can compare responses across providers, organize chats into folders, and build a knowledge base from your documents.

MCP adds a new dimension to this: instead of the model being limited to its training data and your documents, it can now reach out to live systems. Check a production database, query a CI pipeline, or pull the latest pricing data — all within the same conversation thread.

Standout features:

- **Provider hub** — manage API keys and quotas for multiple providers in one place
- **Knowledge base** — index documents for retrieval-augmented generation
- **Conversation folders** — organize chats by project, client, or topic
- **Translation mode** — real-time language translation within conversations
- **Themes** — dark / light modes with customizable accent colors
- **Open-source** — community-maintained with frequent updates

## How to Connect

### 1. Generate a Token

In [Vinkius Cloud](https://cloud.vinkius.com), navigate to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add in Cherry Studio

Open **Settings** → **MCP** → **Add Server**. Enter a name ("vinkius") and paste the URL:

```
https://edge.vinkius.com/{TOKEN}/mcp
```

### 3. Use Across Providers

Start any conversation — whether you're chatting with Claude, GPT, Gemini, or a local model — MCP tools are available to all of them. Cherry Studio handles the plumbing.

---

## FAQ

**Do MCP tools work with all providers in Cherry Studio?**
Yes. MCP operates at the application level, not the provider level. All configured providers can call the same MCP tools.

**Can I use Cherry Studio's knowledge base alongside MCP?**
Absolutely. The AI can reference your indexed documents and call MCP tools in the same message. Document context and live external data complement each other.

**Does Cherry Studio support local models?**
Yes, through Ollama or any OpenAI-compatible local endpoint. MCP servers still require internet access.

**Is Cherry Studio free?**
Open-source. Bring your own API keys for cloud providers, or use local models at no cost.
