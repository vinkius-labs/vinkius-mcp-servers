---
title: "Connect MCP Server to Trae — Setup Guide | Vinkius"
description: "Add MCP servers to Trae IDE by ByteDance. AI-native editor with Builder agent mode, autonomous multi-file editing, and MCP tool integration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Trae — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Trae. ByteDance AI-native IDE with Builder mode and MCP."
  - - meta
    - name: keywords
      content: "Trae MCP, MCP Trae IDE, Trae ByteDance MCP, connect MCP server Trae, Vinkius Trae, Trae Builder mode"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Trae","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add","text":"Configure MCP server in Trae MCP settings."},{"@type":"HowToStep","name":"Build","text":"Builder mode uses MCP tools during autonomous coding."}]}'
---

# Trae

Trae is an AI-native IDE developed by ByteDance. Its **Builder** agent mode autonomously creates and modifies multi-file projects from natural language descriptions. Unlike traditional editors where AI assists your editing, Builder takes the lead — you describe what you want, and it generates the project structure, code, and configuration. MCP tools connect Builder to external data sources and APIs during generation.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#3b82f6,#2563eb);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Tr</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Trae</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">ByteDance · <a href="https://trae.ai" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">trae.ai</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">MCP Settings</div></div>
</div>
</div>

## Builder Mode: AI-First Project Generation

Builder mode is not an assistant — it's a project generator. Describe a web application, API service, or CLI tool in natural language, and Builder creates the complete project: directory structure, source files, configuration, and dependencies. MCP tools feed real data during generation — database schemas, API specifications, or team standards.

The IDE itself is a VS Code fork with both chat and inline editing modes for when you want to refine Builder's output manually.

Features:

- **Builder mode** — generate full projects from natural language
- **Chat + inline** — conversational and in-line editing alongside Builder
- **VS Code based** — familiar interface with extension compatibility
- **Multi-model** — Claude, GPT-4, and ByteDance models
- **Terminal integration** — agent runs and debugs commands
- **MCP support** — external tools available to Builder and chat
- **Free tier** — generous free usage

## Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Server

In Trae → **Settings** → **MCP** → **Add** → paste your Vinkius URL.

### 3. Build with External Data

Use Builder mode to generate projects with MCP tool data informing the structure and logic.

---

## FAQ

**What is Builder mode?**
An autonomous project generator. Describe what you want in natural language and Builder creates the full project.

**Can Builder access MCP tools during generation?**
Yes. Builder calls MCP tools to reference external data while generating code.

**Is Trae a VS Code fork?**
Yes. Compatible with VS Code extensions and themes.

**Is Trae free?**
Free tier with generous usage limits.
