---
title: "Connect MCP Server to NextChat — Setup Guide | Vinkius"
description: "Add MCP servers to NextChat (ChatGPT Next Web). Deploy anywhere — Vercel, Docker, or self-hosted. 80k+ GitHub stars and MCP tool support."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to NextChat — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP servers to NextChat. Deploy anywhere with 80k+ stars on GitHub."
  - - meta
    - name: keywords
      content: "NextChat MCP, MCP NextChat, ChatGPT Next Web MCP, connect MCP server NextChat, Vinkius NextChat, NextChat self-hosted MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to NextChat","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add the Vinkius MCP server URL in NextChat settings."},{"@type":"HowToStep","name":"Use","text":"Chat with MCP tool access on any platform — web, desktop, or mobile."}]}'
---

# NextChat

NextChat (formerly ChatGPT Next Web) is one of the most popular open-source AI chat interfaces, with over 80,000 GitHub stars. You can deploy it to Vercel with a single click, run it in Docker, or self-host it on any infrastructure. MCP support transforms it from a simple chat wrapper into an extensible AI assistant.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#14b8a6,#0d9488);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">NC</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">NextChat</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://github.com/ChatGPTNextWeb/NextChat" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">github.com/ChatGPTNextWeb</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web · Desktop · Mobile</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Settings Panel</div></div>
</div>
</div>

## Deploy Anywhere, Extend with MCP

NextChat's zero-dependency architecture means you can get a fully functional AI chat interface in minutes. One-click Vercel deploy, a single `docker run` command, or a simple `npm start` — your instance is ready. Adding MCP servers lets every user on your instance access external tools without additional configuration.

For teams, this creates a shared AI workspace where the same MCP tools are available to everyone. Self-hosted instances keep all conversation data on your infrastructure while still reaching out to Vinkius Cloud for tool access.

Highlights:

- **One-click deploy** — Vercel, Railway, Docker, bare metal
- **Multi-platform** — responsive web UI that works on phones, tablets, and desktops
- **Custom masks** — create reusable chat presets with specific system prompts
- **Markdown rendering** — code blocks, LaTeX, tables, and diagrams
- **Multi-provider** — OpenAI, Anthropic, Google, Azure, and custom endpoints
- **80k+ stars** — one of the most battle-tested open-source AI UIs

## Setting Up MCP

### 1. Get Your Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add to NextChat

Open **Settings** → **MCP Servers** → paste your URL:

```
https://edge.vinkius.com/{TOKEN}/mcp
```

If self-hosting, you can also configure MCP servers via environment variables for all users.

### 3. Chat with Tools

Start a conversation. MCP tools are listed in the toolbar and invoked automatically when the model decides they're relevant.

---

## FAQ

**Can I pre-configure MCP for all users on a self-hosted instance?**
Yes. Set MCP server URLs via environment variables in your deployment config. All users on that instance will have access to the configured tools.

**Does NextChat work offline?**
The UI caches locally (PWA), but conversations require a connection to the LLM provider and MCP servers.

**What are masks in NextChat?**
Masks are chat presets — a saved combination of system prompt, model, temperature, and now MCP servers. Share them with your team for consistent AI workflows.

**Is NextChat free?**
Fully open-source under MIT. Self-host at no cost. You provide your own API keys.
