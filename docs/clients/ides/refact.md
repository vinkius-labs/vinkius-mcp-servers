---
title: "Connect MCP Server to Refact — Setup Guide | Vinkius"
description: "Add MCP servers to Refact, the self-hosted AI coding assistant. On-premise deployment, fine-tuned models on your codebase, and MCP tool integration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Refact — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Refact. Self-hosted AI with fine-tuned models and MCP."
  - - meta
    - name: keywords
      content: "Refact MCP, MCP Refact, Refact self-hosted MCP, connect MCP server Refact, Vinkius Refact"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Refact","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP server in Refact settings."},{"@type":"HowToStep","name":"Code","text":"Fine-tuned models use MCP tools alongside codebase-specific knowledge."}]}'
---

# Refact

Refact is a **self-hosted AI coding assistant** that lets you run models on your own infrastructure and **fine-tune them on your codebase**. Code never leaves your servers. MCP tools add controlled external access while keeping the core AI pipeline completely private. Ideal for organizations with strict data residency requirements.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#14b8a6,#0d9488);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Rf</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Refact</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://refact.ai" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">refact.ai</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">VS Code · JetBrains</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Agent Settings</div></div>
</div>
</div>

## Self-Hosted AI with Fine-Tuning and MCP

Features:
- **Self-hosted** — run on your infrastructure
- **Fine-tuning** — train models on your codebase
- **Data privacy** — code never leaves your servers
- **Agent mode** — autonomous coding with MCP
- **VS Code + JetBrains** — IDE plugins
- **RAG** — retrieval-augmented generation on your repos
- **Open-source** — Apache 2.0

## Setup

### 1. Create a Token
In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Server
In Refact → **Settings** → **MCP** → add your URL.

### 3. Private + External
Fine-tuned models stay private. MCP provides controlled external data access.

---

## FAQ

**Can I fine-tune models on my codebase?**
Yes. Refact supports fine-tuning models using your proprietary code on your own GPUs.

**Does code leave my servers?**
No. Models run locally. MCP tools provide controlled external access only.

**Does Refact work in JetBrains?**
Yes. Plugins available for VS Code and JetBrains.

**Is Refact free?**
Open-source. Self-hosted is free. Cloud tier available.
