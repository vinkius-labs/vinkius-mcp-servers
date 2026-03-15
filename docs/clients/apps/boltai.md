---
title: "Connect MCP Server to BoltAI — Setup Guide | Vinkius"
description: "Add MCP servers to BoltAI, the native macOS AI assistant. SwiftUI-built, 300+ models, ShotSolve screenshot analysis, system-wide keyboard shortcut, and first-class MCP support."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to BoltAI — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to BoltAI. Native macOS AI with ShotSolve and keyboard shortcuts."
  - - meta
    - name: keywords
      content: "BoltAI MCP, MCP BoltAI, BoltAI macOS MCP, connect MCP server BoltAI, Vinkius BoltAI, BoltAI ShotSolve MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to BoltAI","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add server","text":"In BoltAI Settings, add your Vinkius URL as remote MCP server."},{"@type":"HowToStep","name":"Use anywhere","text":"Press your keyboard shortcut to invoke AI + MCP tools from any app."}]}'
---

# BoltAI

BoltAI is a macOS-exclusive AI assistant built with **SwiftUI and AppKit**, optimized for Apple Silicon. It lives in your menu bar and responds to a system-wide keyboard shortcut — press a key combination from any app to invoke AI with MCP tools. **ShotSolve** takes a screenshot and gets instant AI analysis. **AI Inline** uses AI within any text field without switching windows.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#fbbf24,#d97706);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#1a1a2e;flex-shrink:0">⚡</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">BoltAI</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">macOS Native · <a href="https://boltai.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">boltai.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">macOS only</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">First-class MCP Support</div></div>
</div>
</div>

## System-Level AI with MCP from Any App

BoltAI integrates at the macOS system level. The keyboard shortcut opens an instant chat overlay — no separate app to find. ShotSolve captures your screen region and analyzes it with AI. AI Inline works within any macOS text field. All of these entry points have access to MCP tools.

BoltAI v2 provides **first-class MCP** support: enable or disable individual tools within an MCP server, set custom environment variables per server, and configure both local and remote servers. The granular per-tool control is unique among macOS AI clients.

Features:

- **System-wide hotkey** — invoke AI + MCP from any application
- **ShotSolve** — screenshot → instant AI analysis with MCP context
- **AI Inline** — use AI in any text field without switching apps
- **First-class MCP v2** — per-tool enable/disable, custom env vars per server
- **300+ models** — OpenAI, Anthropic, Google, DeepSeek, Ollama, LM Studio
- **Custom assistants** — combine instructions, knowledge bases, and MCP tools
- **Project folders** — organize multi-chat threads with dedicated tool sets
- **Apple Silicon** — optimized for M1/M2/M3/M4 performance
- **Privacy** — local SQLite storage, encrypted API keys, sandboxed by Apple

## Quick Connect

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add Remote MCP Server

In **BoltAI** → **Settings** → **MCP Servers** → **Add Remote Server**. Paste your Vinkius URL. Enable individual tools as needed.

### 3. Use from Any App

Press your global keyboard shortcut. BoltAI opens overlaying your current app. MCP tools are immediately available.

---

## FAQ

**How is BoltAI different from Raycast AI?**
BoltAI is a dedicated AI assistant with deep MCP support (per-tool control), ShotSolve, AI Inline, and custom assistants. Raycast is a productivity launcher with AI as one feature.

**Can I enable only specific MCP tools?**
Yes. BoltAI v2 lets you toggle individual tools within an MCP server on or off.

**Does ShotSolve work with MCP?**
Yes. Take a screenshot, and BoltAI can analyze it while also calling MCP tools for context.

**Is BoltAI free?**
One-time purchase on the Mac App Store. No subscription.
