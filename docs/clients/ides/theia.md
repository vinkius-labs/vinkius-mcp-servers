---
title: "Connect MCP Server to Theia — Setup Guide | Vinkius"
description: "Add MCP servers to Eclipse Theia, the open-source cloud IDE framework. Build custom IDE platforms with MCP, VS Code extension compatibility, and browser-based editing."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Theia — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Theia. Cloud IDE framework with VS Code extensions."
  - - meta
    - name: keywords
      content: "Theia MCP, MCP Theia, Theia IDE MCP, connect MCP server Theia, Vinkius Theia, Theia cloud IDE"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Theia","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP configuration in Theia settings or via extension."},{"@type":"HowToStep","name":"Code","text":"Use MCP tools in your custom Theia IDE deployment."}]}'
---

# Eclipse Theia

Eclipse Theia is an **open-source IDE framework** for building custom cloud and desktop development environments. Companies like Google (Cloud Shell), Gitpod, and Arduino use Theia as the foundation for their IDE products. If you need a custom IDE with MCP tool integration — white-labeled, self-hosted, or embedded in a platform — Theia is the building block.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#1a73e8,#1565c0);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Th</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Eclipse Theia</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Eclipse Foundation · <a href="https://theia-ide.org" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">theia-ide.org</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web · Desktop (Electron)</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Extensions / Settings</div></div>
</div>
</div>

## Build Your Own IDE with MCP Built In

Theia is not an IDE you install — it's a framework you use to build IDEs. VS Code extension compatibility means existing MCP extensions work. Theia's plugin API lets you create deep, custom MCP integrations specific to your platform's needs.

Features:

- **IDE framework** — build custom cloud or desktop IDEs
- **VS Code compatible** — extensions and Language Servers work
- **White-label** — fully brandable for your product
- **Cloud-native** — runs in containers, Kubernetes, browsers
- **Multi-language** — LSP-based support for any language
- **Extensible** — plugin API for custom MCP integrations
- **Open-source** — Eclipse Public License

## Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Extension or Config

Install an MCP extension (VS Code compatible) or add MCP configuration to your Theia deployment.

### 3. Custom Integration

Build platform-specific MCP workflows using Theia's plugin API.

---

## FAQ

**Is Theia an IDE or a framework?**
A framework. You build custom IDEs on top of it.

**Are VS Code extensions compatible?**
Yes. Theia supports VS Code extensions including MCP plugins.

**Who uses Theia?**
Google Cloud Shell, Gitpod, Arduino IDE, and many enterprise platforms.

**Is Theia free?**
Open-source under Eclipse Public License.
