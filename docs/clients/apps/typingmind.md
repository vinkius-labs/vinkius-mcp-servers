---
title: "Connect MCP Server to TypingMind — Setup Guide | Vinkius"
description: "Add MCP servers to TypingMind, the premium AI chat interface. Custom presets, prompt library, model routing, plugins, and MCP tool integration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to TypingMind — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to TypingMind. Premium AI chat with plugins and MCP tools."
  - - meta
    - name: keywords
      content: "TypingMind MCP, MCP TypingMind, TypingMind AI chat MCP, connect MCP server TypingMind, Vinkius TypingMind"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to TypingMind","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add plugin","text":"Add MCP as a plugin in TypingMind settings."},{"@type":"HowToStep","name":"Chat","text":"Use custom presets with MCP tools for specialized workflows."}]}'
---

# TypingMind

TypingMind is a polished AI chat interface available as a one-time purchase — no subscription. Once purchased, it runs in your browser with your API keys. **Custom model presets**, an extensive **prompt library**, **plugins**, and **smart routing** between models make it a power user's choice. MCP tools integrate through the plugin system.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#3b82f6,#1d4ed8);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">TM</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">TypingMind</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">typingmind.com · <a href="https://typingmind.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">typingmind.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web · PWA</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Plugin System</div></div>
</div>
</div>

## One-Time Purchase, Lifetime AI Chat

TypingMind's business model is refreshingly simple: buy once, use forever. No monthly fees. Bring your own API keys, and you pay only for inference. The interface is among the most polished available, with keyboard shortcuts, search, folders, and character profiles.

Model presets combine a model, system prompt, temperature, and MCP tools into a reusable configuration. Switch between a "Code Review" preset (Claude + code analysis MCP tools) and a "Research" preset (GPT-4 + search MCP tools) with one click.

Features:

- **One-time purchase** — no subscription, lifetime access
- **Custom presets** — model + prompt + tools in reusable configs
- **Prompt library** — organized collection of system prompts
- **Plugin system** — extend with MCP tools and custom integrations
- **Smart routing** — automatically route queries to the best model
- **Search and folders** — organize conversations with full-text search
- **Team deployment** — TypingMind Custom for team licenses

## Plugin Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Plugin

In TypingMind → **Plugins** → **MCP** → paste your Vinkius URL.

### 3. Create Presets

Build custom presets that combine specific models with MCP tools for specialized workflows.

---

## FAQ

**Is TypingMind a subscription?**
No. One-time purchase with lifetime access. You provide your own API keys.

**Can I create presets with MCP tools?**
Yes. Presets combine model, system prompt, and MCP tools into reusable configurations.

**Does TypingMind support team use?**
Yes. TypingMind Custom offers team deployment with centralized configuration.

**Does data stay in my browser?**
Yes. Conversations are stored locally. API calls go directly to providers.
