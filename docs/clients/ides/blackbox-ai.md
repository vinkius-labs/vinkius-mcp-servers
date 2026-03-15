---
title: "Connect MCP Server to Blackbox AI — Setup Guide | Vinkius"
description: "Add MCP servers to Blackbox AI, the VS Code AI assistant with code search across 200M repositories, vision for code screenshots, and MCP tool integration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Blackbox AI — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Blackbox AI. Code search across 200M repos with MCP."
  - - meta
    - name: keywords
      content: "Blackbox AI MCP, MCP Blackbox AI, Blackbox code search MCP, connect MCP server Blackbox AI, Vinkius Blackbox AI"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Blackbox AI","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add","text":"Configure MCP server in Blackbox AI settings."},{"@type":"HowToStep","name":"Search+Code","text":"Use code search and MCP tools together for informed coding."}]}'
---

# Blackbox AI

Blackbox AI is a VS Code extension specialized in **code search across 200M+ repositories**. Paste an error message, and Blackbox finds similar problems and solutions from open-source code. **Vision** reads code from screenshots — paste a photo of a whiteboard or a code screenshot, and Blackbox extracts the code. MCP tools extend searches to your private data sources.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#111,#333);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0;border:1px solid rgba(255,255,255,0.2)">BB</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Blackbox AI</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px"><a href="https://blackbox.ai" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">blackbox.ai</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">VS Code · Web</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Extension Settings</div></div>
</div>
</div>

## Code Search + Vision + MCP

Features:

- **200M+ repo search** — find similar code, error solutions, and patterns
- **Vision** — extract code from screenshots and images
- **Agent mode** — autonomous multi-file coding
- **Autocomplete** — real-time code suggestions
- **Chat** — conversational coding with code search context
- **Multi-model** — multiple model options
- **Web app** — browser-based alternative to the extension

## Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP

Configure MCP in Blackbox AI settings within VS Code.

### 3. Search + Build

Code search finds patterns. MCP tools provide your private data. AI generates informed code.

---

## FAQ

**Can Blackbox search open-source code for errors?**
Yes. Paste an error message and Blackbox searches 200M+ repos for similar issues and solutions.

**Does Vision support whiteboard photos?**
Yes. Paste images of code from whiteboards, screenshots, or documentation.

**Is Blackbox AI free?**
Free tier available. Pro plans for advanced features.

**Does Blackbox work outside VS Code?**
Yes. A web app is available at blackbox.ai.
