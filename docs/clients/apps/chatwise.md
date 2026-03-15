---
title: "Connect MCP Server to ChatWise — Setup Guide | Vinkius"
description: "Add MCP servers to ChatWise, the Apple-native AI client with iCloud sync. macOS and iOS support, Siri Shortcuts, and MCP integration across your Apple devices."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to ChatWise — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to ChatWise. Apple-native AI chat with iCloud sync and Siri."
  - - meta
    - name: keywords
      content: "ChatWise MCP, MCP ChatWise, ChatWise Apple MCP, connect MCP server ChatWise, Vinkius ChatWise, ChatWise iCloud MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to ChatWise","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add server","text":"Configure MCP server in ChatWise settings on macOS or iOS."},{"@type":"HowToStep","name":"Chat","text":"MCP tools sync across devices via iCloud. Use from Mac, iPhone, or iPad."}]}'
---

# ChatWise

ChatWise is built for the Apple ecosystem. It's a SwiftUI-native AI client that runs on macOS and iOS with **iCloud sync** keeping conversations, settings, and MCP configurations synchronized across all your Apple devices. **Siri Shortcuts** let you invoke MCP tools from your phone's home screen or through voice commands.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#818cf8,#6366f1);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">CW</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">ChatWise</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Apple-Native · <a href="https://chatwise.app" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">chatwise.app</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">macOS · iOS</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Settings</div></div>
</div>
</div>

## Apple-Native AI with Cross-Device MCP Access

Configure MCP on your Mac, and it's available on your iPhone. iCloud sync handles everything — conversations, tool configurations, and API keys. Siri Shortcuts surface common MCP queries as one-tap actions on your home screen.

The SwiftUI interface feels native to Apple's design language — system fonts, haptics on iOS, Dark Mode, and Live Activities for long-running tool calls.

Features:

- **iCloud sync** — conversations and MCP configs across all Apple devices
- **Siri Shortcuts** — voice-activated MCP tool queries
- **SwiftUI-native** — Apple design language with haptics and Dynamic Island
- **iOS + macOS** — full-featured on both platforms
- **Multi-provider** — OpenAI, Anthropic, and other providers
- **Markdown rendering** — rich formatting with code highlighting
- **Privacy-focused** — data stays in iCloud, not third-party servers

## Apple Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add in Settings

In ChatWise → **Settings** → **MCP** → **Add**. Paste your URL. iCloud syncs to all devices.

### 3. Use Anywhere

Chat on your Mac, continue on your iPhone. Siri Shortcuts give quick access to common MCP queries.

---

## FAQ

**Do MCP configurations sync between Mac and iPhone?**
Yes. iCloud automatically syncs MCP server URLs, conversations, and settings across all your Apple devices.

**Can I use Siri to call MCP tools?**
Yes. Create Siri Shortcuts for common MCP tool queries and trigger them with voice.

**Is ChatWise available on iPad?**
Yes. The app runs natively on macOS, iOS, and iPadOS.

**Is ChatWise free?**
Free tier available. Pro features via in-app purchase.
