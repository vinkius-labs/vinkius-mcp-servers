---
title: "Connect MCP Server to LM Studio — Setup Guide | Vinkius"
description: "Add MCP servers to LM Studio, the desktop app for discovering and running local LLMs. Visual model browser, performance benchmarks, OpenAI-compatible API with MCP."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to LM Studio — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to LM Studio. Visual model browser with local inference and MCP."
  - - meta
    - name: keywords
      content: "LM Studio MCP, MCP LM Studio, LM Studio local LLM MCP, connect MCP server LM Studio, Vinkius LM Studio"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to LM Studio","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP server in LM Studio settings."},{"@type":"HowToStep","name":"Chat","text":"Local models call MCP tools for external data during conversations."}]}'
---

# LM Studio

LM Studio is a desktop application for discovering, downloading, and running LLMs on your own hardware. Its visual **model browser** lets you filter by size, quantization, and benchmarks before downloading. Once loaded, models run through a polished chat interface with configurable parameters. MCP plugs external tools into this local-first experience.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#0ea5e9,#0369a1);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">LM</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">LM Studio</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">lmstudio.ai · <a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">lmstudio.ai</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Settings</div></div>
</div>
</div>

## Visual Model Discovery + MCP Tools

LM Studio's model browser is its standout feature. Search HuggingFace directly from the app, filter by parameter count and quantization level, check community benchmarks, and download with one click. Models load instantly into the chat interface.

Once running, MCP tools extend what the model can do. Local inference handles reasoning and generation, while MCP provides live data from your external systems — a clean separation of concerns.

Highlights:

- **Model browser** — search HuggingFace, filter by size/quant, view benchmarks
- **One-click download** — models download and load without manual setup
- **Chat interface** — adjustable parameters: temperature, top-p, context length
- **Local server** — OpenAI-compatible API for third-party app integration
- **Multi-model** — load multiple models simultaneously, compare responses
- **GPU acceleration** — automatic Metal (macOS), CUDA (NVIDIA), Vulkan detection
- **GGUF support** — optimized for quantized model formats

## How to Connect

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Server

In LM Studio → **Settings** → **MCP** → **Add Server**. Paste your URL.

### 3. Chat with Tools

Select a model, start a conversation. MCP tools are available for external data queries.

---

## FAQ

**Can I compare how different models use MCP tools?**
Yes. LM Studio can load multiple models simultaneously. Ask the same question to different models and see how each handles MCP tool calls.

**Which model formats does LM Studio support?**
Primarily GGUF (quantized) models from HuggingFace. Both CPU and GPU inference are supported.

**Does LM Studio expose a local API with MCP?**
LM Studio's local server provides an OpenAI-compatible API. MCP tools configured in the app are accessible through this API.

**Is LM Studio free?**
Free for personal use. Commercial licenses available for enterprise deployments.
