---
title: "Connect MCP Server to Poe — Setup Guide | Vinkius"
description: "Add MCP servers to Poe by Quora. Multi-model chat with GPT-4, Claude, Gemini, custom bots, and MCP tool integration. One subscription, many models."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Poe — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Poe. Multi-model access and custom bots with MCP tools."
  - - meta
    - name: keywords
      content: "Poe MCP, MCP Poe, Poe Quora MCP, connect MCP server Poe, Vinkius Poe, Poe multi-model MCP, Poe custom bots"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Poe","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add","text":"Configure MCP server in Poe bot settings."},{"@type":"HowToStep","name":"Chat","text":"Interact with any model on Poe. MCP tools extend custom bots."}]}'
---

# Poe

Poe is Quora's multi-model AI platform. One subscription gives you access to GPT-4o, Claude 3.5, Gemini, Llama, and dozens of other models. You can build **custom bots** that combine specific models with system prompts and tools — MCP servers provide the tool access, making it possible to create purpose-built assistants without coding.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#6366f1,#4338ca);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Po</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Poe</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Quora · <a href="https://poe.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">poe.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web · iOS · Android</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Bot Settings</div></div>
</div>
</div>

## One Platform, Every Model, Your Tools

Poe eliminates the need for separate subscriptions to each AI provider. Access GPT-4o, Claude, Gemini, Llama, Mixtral, and specialized models through one interface. Custom bots let you wrap any model with a specific personality and tool set — MCP provides the tools.

The bot marketplace has thousands of community-created bots. Build your own with MCP tools and share it publicly, or keep it private for your team.

Features:

- **Multi-model** — GPT-4o, Claude, Gemini, Llama, Mixtral, and more in one platform
- **Custom bots** — build assistants with specific models, prompts, and MCP tools
- **Bot marketplace** — discover and share community-built bots
- **Cross-platform** — seamless experience on web, iOS, and Android
- **Bot API** — programmatic access for building server-side bots
- **One subscription** — access all models without separate API keys

## Setting Up MCP

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Configure a Custom Bot

In Poe → **Create Bot** → **Settings** → **MCP Servers** → paste your Vinkius URL. Choose the model and system prompt for your bot.

### 3. Chat or Share

Use the bot yourself, or publish it to the marketplace for others to discover.

---

## FAQ

**Can Custom Bots on Poe use MCP tools?**
Yes. When creating a custom bot, configure MCP servers in the bot settings. The bot can then call tools during conversations.

**Does Poe require separate API keys?**
No. One Poe subscription gives you access to all supported models. No individual API keys needed.

**Can I share my MCP-powered bot?**
Yes. Publish your custom bot to the Poe marketplace. Others can use it without configuring MCP themselves.

**Is Poe free?**
Free tier with limited usage. Poe subscription unlocks higher limits across all models.
