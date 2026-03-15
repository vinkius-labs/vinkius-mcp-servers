---
title: "Connect MCP Server to ChatWise — Setup Guide | Vinkius"
description: "Add MCP servers to ChatWise, the fast AI chatbot for Apple platforms. Optimized for macOS and iOS with native performance, conversation sync, and MCP tool access."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to ChatWise — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP servers to ChatWise. Fast AI chat for Mac and iOS."
  - - meta
    - name: keywords
      content: "ChatWise MCP, MCP ChatWise, ChatWise Mac MCP, connect MCP server ChatWise, Vinkius ChatWise, ChatWise iOS AI chat"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to ChatWise","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add server","text":"In ChatWise Settings → MCP, add your Vinkius URL."},{"@type":"HowToStep","name":"Chat","text":"Start a conversation. MCP tools work on both Mac and iOS."}]}'
---

# ChatWise

ChatWise is a native AI chat client built for Apple platforms. It runs on macOS and iOS with the speed and polish of a first-party app — fast launch times, smooth scrolling, and iCloud conversation sync between devices. MCP support brings external tool access to this mobile-friendly experience.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#fbbf24,#f59e0b);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">CW</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">ChatWise</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">chatwise.app · <a href="https://chatwise.app" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">chatwise.app</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">macOS · iOS</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Settings</div></div>
</div>
</div>

## AI Chat That Moves Between Mac and iPhone

ChatWise syncs conversations across macOS and iOS via iCloud. Start a chat on your Mac, continue on your iPhone during commute, and pick it up again on your desktop. MCP tools are configured once and available on both platforms.

The app leverages Apple-specific features like Spotlight integration, keyboard shortcuts, and system-level sharing. On iOS, it supports Siri Shortcuts for quick AI access.

Highlights:

- **iCloud sync** — seamless conversation handoff between Mac and iPhone
- **Native Swift** — no Electron, no web wrapper — real Apple performance
- **Multi-provider** — OpenAI, Anthropic, Google, and custom endpoints
- **Siri Shortcuts** — trigger AI actions from iOS shortcuts
- **Spotlight** — launch ChatWise from the macOS search bar
- **Markdown rendering** — code blocks, tables, and LaTeX display

## Setting Up MCP

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), select your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Configure in ChatWise

Open **Settings** → **MCP** → **Add Server**. Paste the URL. The configuration syncs to all your Apple devices.

### 3. Chat Anywhere

Start a conversation on Mac or iOS. MCP tools are available on both platforms with the same configuration.

---

## FAQ

**Does MCP config sync between Mac and iOS?**
Yes. ChatWise syncs MCP server settings via iCloud. Configure once, use everywhere.

**Is ChatWise available on Windows or Android?**
Currently Apple-only: macOS and iOS. No Windows or Android versions are planned.

**Can I use Siri Shortcuts with MCP?**
Siri Shortcuts trigger ChatWise conversations. If the conversation invokes MCP tools, they execute as part of the shortcut flow.

**What's the pricing?**
ChatWise is a paid app on the Mac App Store and iOS App Store. One-time purchase, no subscription. You bring your own API keys.
