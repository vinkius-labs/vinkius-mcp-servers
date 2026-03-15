---
title: "Connect MCP Server to DeepChat — Setup Guide | Vinkius"
description: "Add MCP servers to DeepChat, the desktop AI chat app with conversation branching. Explore multiple reasoning paths with tree-based conversation history and MCP tools."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to DeepChat — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to DeepChat. Conversation branching with MCP tool access."
  - - meta
    - name: keywords
      content: "DeepChat MCP, MCP DeepChat, DeepChat branching MCP, connect MCP server DeepChat, Vinkius DeepChat"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to DeepChat","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP server in DeepChat settings."},{"@type":"HowToStep","name":"Chat","text":"Explore branching conversations with MCP tool access at every node."}]}'
---

# DeepChat

DeepChat is a desktop AI client with a distinctive feature: **conversation branching**. Instead of linear chat history, DeepChat displays conversations as a tree. You can branch off at any message to explore alternative approaches, compare model responses, or test different MCP tool parameters — without losing your original thread.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#3b82f6,#1d4ed8);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">DC</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">DeepChat</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://github.com/nicepkg/gpt-runner" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">GitHub</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Settings</div></div>
</div>
</div>

## Branching Conversations for Better AI Exploration

Conversation branching changes how you interact with AI. After a tool call that returns unexpected results, you can branch: try the same question with different parameters, compare two models' handling, or explore an alternative approach — all visible in the same tree view.

Combined with MCP, this becomes a powerful exploration tool. Query a database one way, branch, query it differently, and compare results side by side. The tree structure preserves every experiment.

Key features:

- **Conversation branching** — tree-based history with branch/merge
- **Theme engine** — customizable colors, fonts, and layout
- **Multi-model** — switch models mid-conversation or per branch
- **Local storage** — all conversations stored locally, not in the cloud
- **Markdown rendering** — formatted code and text in responses
- **Prompt library** — save and organize frequently used prompts

## Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Server

Go to **Settings** → **MCP** → **Add**. Paste your Vinkius URL.

### 3. Branch and Explore

Use conversation branching to try different MCP tool approaches and compare results side by side.

---

## FAQ

**How does branching work with MCP tool calls?**
Branch after a tool call to try different parameters or questions. Each branch maintains its own tool call history, so you can compare approaches.

**Are conversations stored locally?**
Yes. All conversation data, including branches and MCP tool call history, is stored on your machine.

**Can I use different models on different branches?**
Yes. Switch the active model when branching to compare how different models handle the same MCP tools.

**Is DeepChat free?**
Open-source and free to use.
