---
title: "Connect MCP Server to Groq Desktop — Setup Guide | Vinkius"
description: "Step-by-step guide to connect your Vinkius Cloud MCP server to Groq Desktop. LPU-powered AI (up to 625 tok/s) with built-in MCP server, GroqCloud MCP beta, and free API access."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Groq Desktop — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Connect your Vinkius Cloud MCP server to Groq Desktop. LPU-powered inference with MCP support."
  - - meta
    - name: keywords
      content: "Groq MCP, MCP Groq Desktop, Groq LPU MCP, connect MCP server Groq, Vinkius Groq, GroqCloud MCP, Groq Desktop MCP server, Groq speed inference"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does Groq support MCP?","acceptedAnswer":{"@type":"Answer","text":"Yes. Groq Desktop includes a built-in MCP server for function calling. GroqCloud also offers remote MCP server integration in beta (since September 2025), compatible with OpenAI remote MCP specification."}},{"@type":"Question","name":"How fast is Groq LPU inference?","acceptedAnswer":{"@type":"Answer","text":"Groq LPU achieves up to 625 tokens per second throughput. The chip provides 750 TOPS (INT8), 188 TFLOPs (FP16), and 230MB SRAM per chip with up to 80 TB/s on-die memory bandwidth."}},{"@type":"Question","name":"Is Groq free for developers?","acceptedAnswer":{"@type":"Answer","text":"Yes. GroqCloud offers free API keys with no waitlist and billions of free tokens daily for developers to build and test applications."}}]}'
---

# Groq Desktop

Connect your Vinkius Cloud MCP server to **Groq Desktop**, the AI desktop app powered by Groq's **LPU (Language Processing Unit)** chip — purpose-built hardware that delivers up to **625 tokens per second**. Groq Desktop includes a built-in MCP server, and GroqCloud offers remote MCP integration in beta since September 2025.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#f97316,#ea580c);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Gq</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Groq Desktop</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">by Groq · <a href="https://groq.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">groq.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Built-in MCP Server</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">SPEED</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Up to 625 tok/s</div></div>
</div>
</div>

## Why Groq for MCP

Groq's LPU chip makes MCP tool interactions feel instantaneous. When your AI reasons about which tools to call and how to use the results, that reasoning happens at 625 tokens per second — making complex multi-tool workflows dramatically faster than on GPU-based infrastructure.

**What makes Groq unique for MCP:**
- **LPU chip** — Purpose-built Language Processing Unit with 750 TOPS (INT8), 188 TFLOPs (FP16), 230MB SRAM per chip, and 80 TB/s on-die memory bandwidth
- **Up to 625 tokens/sec** — Deterministic, low-latency execution through software-controlled hardware with no external memory bottlenecks
- **Built-in MCP server** — Groq Desktop includes a native MCP server for function calling with multimodal input (image support)
- **GroqCloud MCP (beta)** — Remote MCP server integration on GroqCloud since September 2025, compatible with OpenAI's remote MCP specification
- **10x energy efficiency** — LPUs are up to 10x more energy-efficient than GPUs on an architectural level, air-cooled design
- **Free API access** — Free API keys with no waitlist and billions of free tokens daily for developers
- **Multi-modal** — Text, audio, and vision model support through GroqCloud

## Quick Connect

### 1. Create a Connection Token

In [Vinkius Cloud](https://cloud.vinkius.com), open your server's **Dashboard → Connection Tokens** and create a new token. Copy the generated URL:

```
https://edge.vinkius.com/{TOKEN}/mcp
```

### 2. Connect MCP in Groq Desktop

Open **Groq Desktop** → **MCP Server Settings**. Add your Vinkius Cloud URL. The built-in MCP server handles tool discovery and invocation at LPU speed.

---

## FAQ

**Does Groq support MCP?**
Yes. Built-in MCP server in Groq Desktop + GroqCloud remote MCP beta (September 2025), compatible with OpenAI's remote MCP spec.

**How fast is Groq?**
Up to 625 tokens/sec throughput. The LPU delivers 750 TOPS (INT8), 230MB SRAM, and 80 TB/s memory bandwidth per chip.

**Is Groq free?**
GroqCloud offers free API keys with no waitlist and billions of free daily tokens for developers.

**What is GroqCloud MCP?**
A remote MCP server integration in beta since September 2025 that lets AI agents use Groq's LPU-powered inference with tool capabilities.
