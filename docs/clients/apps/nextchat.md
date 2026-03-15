---
title: "Connect MCP Server to NextChat — Setup Guide | Vinkius"
description: "Add MCP servers to NextChat (ChatGPT Next Web), the deploy-anywhere AI frontend. 80k+ stars, one-click Vercel deploy, masks/presets, and MCP plugin support."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to NextChat — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to NextChat. Deploy-anywhere frontend with 80k+ stars."
  - - meta
    - name: keywords
      content: "NextChat MCP, MCP NextChat, ChatGPT Next Web MCP, connect MCP server NextChat, Vinkius NextChat, NextChat deploy MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to NextChat","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP server in NextChat plugin settings."},{"@type":"HowToStep","name":"Deploy","text":"Deploy to Vercel, Docker, or run locally with MCP enabled."}]}'
---

# NextChat

NextChat (formerly ChatGPT Next Web) is one of the most starred open-source AI projects on GitHub with 80k+ stars. It is a deploy-anywhere frontend that gives your team a private ChatGPT-like interface. One-click Vercel deploy, Docker, or static hosting. **Masks** (presets) let you create custom AI personas, and MCP plugins extend them with external tools.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#8b5cf6,#6d28d9);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">NC</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">NextChat</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">★ 80k+ · <a href="https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">GitHub</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web · Docker · Vercel · PWA</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Plugin System</div></div>
</div>
</div>

## Deploy Your Own ChatGPT with MCP

NextChat's appeal is deployment flexibility. Click "Deploy to Vercel" and you have a private ChatGPT frontend running on a custom domain in minutes. Add MCP servers, and your team has an AI assistant with access to your internal systems — no vendor lock-in, no per-seat pricing beyond the LLM API costs.

Masks let non-technical users create role-specific AI personas. A "Customer Support" mask with the right system prompt and MCP tools creates a support agent. A "Code Reviewer" mask with code analysis MCP tools creates a review bot. Share masks across your team.

Highlights:

- **80k+ GitHub stars** — one of the most popular AI projects
- **One-click deploy** — Vercel, Docker, or static hosting
- **Masks** — reusable AI personas with custom prompts and tool configurations
- **PWA** — installable as a web app on any device
- **Multi-provider** — GPT-4, Claude, Gemini, and more
- **i18n** — internationalized UI supporting 20+ languages
- **Local storage** — conversations stay in the browser (configurable)

## Deployment with MCP

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Configure MCP Plugin

In NextChat → **Settings** → **Plugins** → **MCP** → **Add Server**. Paste your URL.

### 3. Deploy

Deploy via your preferred method. MCP tools are available in all conversations and masks.

---

## FAQ

**Can I deploy NextChat with MCP on Vercel for free?**
Yes. NextChat deploys on Vercel's free tier. MCP tool access adds no deployment cost — it uses your Vinkius Cloud token.

**How do Masks work with MCP?**
Create a mask with a specific system prompt and attach MCP tools. The mask becomes a reusable AI persona with tool access.

**Is NextChat suitable for team use?**
Yes. Deploy centrally and share access. Each user's conversations are stored locally in their browser.

**Is NextChat free?**
Open-source under MIT. Host it yourself. LLM API costs are separate.
