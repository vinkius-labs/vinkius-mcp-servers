---
title: "Connect MCP Server to SillyTavern — Setup Guide | Vinkius"
description: "Add MCP servers to SillyTavern, the advanced AI roleplay and storytelling frontend. Character cards, world info, group chats, and MCP tools for immersive narratives."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to SillyTavern — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to SillyTavern. AI roleplay with character cards and MCP tools."
  - - meta
    - name: keywords
      content: "SillyTavern MCP, MCP SillyTavern, SillyTavern roleplay MCP, connect MCP server SillyTavern, Vinkius SillyTavern"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to SillyTavern","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP server in SillyTavern extensions settings."},{"@type":"HowToStep","name":"Chat","text":"Characters use MCP tools within roleplay scenarios."}]}'
---

# SillyTavern

SillyTavern is the most popular open-source frontend for AI-powered roleplay and creative storytelling. It supports **character cards** (personality definitions), **world info** (persistent lore), **group chats** (multiple AI characters interacting), and dozens of model backends. MCP tools add factual grounding — characters can access real data, look up information, or interact with external systems during roleplay.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#a855f7,#7c3aed);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">ST</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">SillyTavern</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://sillytavern.app" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">sillytavern.app</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Self-hosted · Web UI</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Extensions</div></div>
</div>
</div>

## Creative AI with Real-World Data Access

SillyTavern's extension system is its power. Dozens of community extensions add TTS, image generation, translation, summarization, and now MCP tool access. Characters in a roleplay scenario can look up real facts, check weather, reference actual events — grounding creative fiction in verifiable data when appropriate.

Group chats with multiple AI characters become more interesting when some characters have tool access. A "researcher" character calls MCP tools while a "narrator" character weaves the results into the story.

Features:

- **Character cards** — detailed personality, backstory, and behavior definitions
- **World info** — persistent lore triggered by keywords in conversation
- **Group chats** — multiple AI characters interacting simultaneously
- **Extension system** — TTS, image gen, translation, MCP tools, and more
- **Multi-backend** — OpenAI, Claude, Ollama, KoboldCpp, TabbyAPI, and others
- **Token management** — precise control over context window usage
- **Chat export** — save and share conversations in multiple formats

## Extension Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Install MCP Extension

In SillyTavern → **Extensions** → enable the MCP extension → paste your Vinkius URL.

### 3. Create Tool-Augmented Characters

Design characters that use MCP tools as part of their behavior. A character with research instructions will call MCP tools to provide accurate information.

---

## FAQ

**Can AI characters use MCP tools in roleplay?**
Yes. Characters can be instructed to use MCP tools for research, fact-checking, or any data access during conversations.

**Do group chats work with MCP?**
Yes. Specific characters in a group chat can have tool access while others don't, creating specialized roles.

**Which model backends does SillyTavern support?**
OpenAI, Claude, Ollama, KoboldCpp, TabbyAPI, OpenRouter, and many others.

**Is SillyTavern free?**
Open-source under AGPL. Self-hosted.
