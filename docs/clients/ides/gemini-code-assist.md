---
title: "Connect MCP Server to Gemini Code Assist — Setup Guide | Vinkius"
description: "Add MCP servers to Gemini Code Assist, Google's enterprise AI code assistant. 1M token context, Google Cloud integration, code customization, and MCP tool access."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Gemini Code Assist — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Gemini Code Assist. Google enterprise AI with 1M context."
  - - meta
    - name: keywords
      content: "Gemini Code Assist MCP, MCP Gemini Code Assist, Gemini AI MCP, connect MCP server Gemini Code Assist, Vinkius Gemini"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Gemini Code Assist","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP server in Gemini Code Assist settings."},{"@type":"HowToStep","name":"Code","text":"1M token context with MCP tools and Google Cloud integration."}]}'
---

# Gemini Code Assist

Gemini Code Assist is Google's enterprise AI coding assistant powered by the **Gemini model's 1 million token context window**. It sees your entire codebase at once — no chunking, no summarization. Combined with **Google Cloud integration** (Cloud Run, BigQuery, Firestore), it generates code that fits your infrastructure. MCP tools extend reach to non-Google systems.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#4285f4,#ea4335);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">G✦</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Gemini Code Assist</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Google · <a href="https://cloud.google.com/gemini/docs/codeassist/overview" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">cloud.google.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">VS Code · JetBrains · Cloud Shell</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Extension Settings</div></div>
</div>
</div>

## Google Cloud + Full Codebase Context

Features:
- **1M token context** — full codebase visibility without chunking
- **Google Cloud** — Cloud Run, BigQuery, Firestore awareness
- **Code customization** — fine-tune on private repos via Google Cloud
- **Agent mode** — autonomous multi-step coding
- **Full-stack** — frontend, backend, infrastructure code
- **Enterprise** — Google Cloud security and compliance
- **Multi-IDE** — VS Code, JetBrains, Cloud Shell Editor

## Setup

### 1. Create a Token
In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Configure MCP
In Gemini Code Assist → **Settings** → **MCP** → add your URL.

### 3. Full Context Coding
1M token window sees your entire project. MCP adds external system data.

---

## FAQ

**How big is the context window?**
1 million tokens. It processes your full codebase without summarization.

**Does it integrate with Google Cloud services?**
Yes. Native awareness of Cloud Run, BigQuery, Firestore, and other GCP services.

**Can I customize it on private code?**
Yes. Code customization feature fine-tunes through Google Cloud.

**Is Gemini Code Assist free?**
Free tier. Enterprise plans through Google Cloud.
