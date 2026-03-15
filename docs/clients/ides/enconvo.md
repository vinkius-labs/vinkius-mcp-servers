---
title: "Connect MCP Server to Enconvo — Setup Guide | Vinkius"
description: "Add MCP servers to Enconvo, the macOS AI launcher with PopBar. System-wide AI access, automation workflows, and MCP tool integration via keyboard shortcuts."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Enconvo — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Enconvo. macOS AI launcher with PopBar and MCP tools."
  - - meta
    - name: keywords
      content: "Enconvo MCP, MCP Enconvo, Enconvo macOS MCP, connect MCP server Enconvo, Vinkius Enconvo"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Enconvo","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP server in Enconvo settings."},{"@type":"HowToStep","name":"Use","text":"PopBar provides instant MCP access from any app."}]}'
---

# Enconvo

Enconvo is a **macOS AI launcher** with **PopBar** — a floating toolbar that appears when you select text in any application. Select code, pop the bar, choose an AI action (with MCP tools). **Automation workflows** chain multiple AI actions together, similar to macOS Shortcuts but with LLM intelligence and MCP tool access.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#6366f1,#4f46e5);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">En</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Enconvo</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">macOS · <a href="https://enconvo.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">enconvo.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">macOS</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Settings</div></div>
</div>
</div>

## PopBar: Select Text → AI Action with MCP

Features:
- **PopBar** — floating toolbar on text selection in any app
- **Automation workflows** — chain AI actions with MCP tool calls
- **System-wide** — works in every macOS application
- **Keyboard shortcuts** — customizable quick access
- **Multi-provider** — OpenAI, Anthropic, Google, Ollama
- **Plugin system** — extend with custom AI actions
- **macOS native** — Swift, optimized for Apple Silicon

## Setup

### 1. Create a Token
In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP
In Enconvo → **Settings** → **MCP** → add your URL.

### 3. PopBar Access
Select text in any app → PopBar appears → AI + MCP tools available.

---

## FAQ

**What is PopBar?**
A floating toolbar that appears when you select text in any macOS app. Choose AI actions with MCP tool access.

**Can I chain multiple AI actions?**
Yes. Automation workflows let you chain AI steps with MCP tool calls.

**Is Enconvo macOS only?**
Yes. Native macOS app.

**Is Enconvo free?**
Free tier available. Pro features via subscription.
