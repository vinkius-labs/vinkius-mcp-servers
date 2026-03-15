---
title: "Connect MCP Server to Jan — Setup Guide | Vinkius"
description: "Add MCP servers to Jan, the privacy-first desktop AI app. Local-first architecture, portable data, Jan CLI for automation, and controlled MCP external access."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Jan — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Jan. Privacy-first local AI with controlled MCP access."
  - - meta
    - name: keywords
      content: "Jan MCP, MCP Jan, Jan AI local MCP, connect MCP server Jan, Vinkius Jan, Jan privacy AI MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Jan","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add server","text":"Configure MCP server in Jan settings."},{"@type":"HowToStep","name":"Chat","text":"Models run locally. MCP provides controlled external data access."}]}'
---

# Jan

Jan is a privacy-first desktop AI application where everything runs locally by default — models, conversations, and data stay on your machine in a portable folder structure. You can move your entire Jan data directory between machines, back it up, or inspect it manually. MCP tools add targeted external access: the model stays local, but specific queries go to external systems when you explicitly allow it.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#3b82f6,#1d4ed8);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Jn</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Jan</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://jan.ai" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">jan.ai</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Settings</div></div>
</div>
</div>

## Privacy-First Architecture with Controlled External Access

Jan's data architecture is uniquely transparent. Conversations, model configs, and settings live in a plain folder structure you can inspect with any file manager. No database, no encrypted blobs — just JSON files. This makes Jan fully portable and auditable.

MCP adds external access in a controlled way. Local models handle reasoning, and when external data is needed, you decide which MCP servers are accessible. The model can call your monitoring system but can't reach anything else — privacy by design.

**Jan CLI** enables automation: run conversations, manage models, and invoke tools from scripts and CI pipelines.

Features:

- **Portable data** — plain JSON folder structure, fully inspectable
- **Privacy-first** — everything local by default, MCP for explicit external access
- **Jan CLI** — command-line automation for scripting and pipelines
- **OpenAI-compatible API** — local server for third-party app integration
- **Model hub** — download models from within the app
- **Extension system** — install extensions for additional capabilities
- **Open-source** — AGPLv3, community-driven

## Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Server

Go to **Settings** → **MCP** → **Add Server**. Paste your Vinkius URL.

### 3. Local + External

Models run on your machine. MCP tools provide the specific external data access you permit.

---

## FAQ

**Can I inspect my Jan data?**
Yes. Everything is stored as JSON files in a regular folder. No hidden databases.

**Does Jan work without internet?**
Yes. With local models. MCP tools require internet for external data access.

**What is Jan CLI?**
A command-line interface for automating Jan: run conversations, manage models, and invoke MCP tools from scripts.

**Is Jan free?**
Open-source under AGPLv3. Free to use.
