---
title: "Connect MCP Server to LocalAI — Setup Guide | Vinkius"
description: "Add MCP servers to LocalAI, the drop-in OpenAI replacement. Self-hosted, API-compatible, supports 50+ model families with MCP tool integration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to LocalAI — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to LocalAI. Drop-in OpenAI replacement with MCP tool support."
  - - meta
    - name: keywords
      content: "LocalAI MCP, MCP LocalAI, LocalAI self-hosted MCP, connect MCP server LocalAI, Vinkius LocalAI, LocalAI OpenAI alternative"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to LocalAI","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP server to your LocalAI configuration."},{"@type":"HowToStep","name":"Use","text":"Any app using the OpenAI API format gets MCP tool access through LocalAI."}]}'
---

# LocalAI

LocalAI is a drop-in replacement for the OpenAI API that runs entirely on your infrastructure. Point any OpenAI-compatible app at your LocalAI endpoint and it works — same API format, local inference. It supports 50+ model families across text, image, audio, and embeddings. MCP tools integrate through the function calling API.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#a855f7,#7c3aed);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">LA</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">LocalAI</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://localai.io" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">localai.io</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Docker · Self-hosted</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Function Calling API</div></div>
</div>
</div>

## Drop-In API Replacement with MCP

LocalAI's killer feature is API compatibility. Swap your OpenAI base URL from `api.openai.com` to your LocalAI instance, and existing applications work without code changes. This includes function calling — and by extension, MCP tool integration.

LocalAI supports more than just text. It handles image generation (Stable Diffusion), speech-to-text (Whisper), text-to-speech, and embeddings — all through the same OpenAI-compatible API. MCP tools add external data access to this multi-modal stack.

Capabilities:

- **OpenAI API drop-in** — same endpoints, same format, local execution
- **50+ model families** — LLMs, image gen, speech, embeddings, and more
- **Function calling** — tool/function calling API for MCP integration
- **Docker deployment** — `docker run` with GPU passthrough
- **Model gallery** — in-app model browser and downloader
- **Multi-modal** — text, image, audio, and embedding models in one API
- **No GPU required** — CPU inference supported (GPU accelerates)

## Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Configure MCP

Add MCP server configuration to your LocalAI setup. Tools are exposed through the function calling API:

```yaml
mcp_servers:
  - url: "https://edge.vinkius.com/{TOKEN}/mcp"
```

### 3. Use Existing Apps

Any application that calls the OpenAI function calling API now has MCP tool access — without knowing it's running locally.

---

## FAQ

**Can I replace OpenAI with LocalAI and keep MCP tools?**
Yes. LocalAI's function calling API is compatible with OpenAI's format. Existing applications work without code changes, and MCP tools integrate through the same interface.

**Does LocalAI require a GPU?**
No. CPU inference is supported for all model types. GPU acceleration (CUDA, Metal, ROCm) is optional but significantly faster.

**What modalities does LocalAI support?**
Text generation, image generation (Stable Diffusion), speech-to-text (Whisper), text-to-speech, and embeddings — all via the OpenAI API format.

**Is LocalAI free?**
Open-source under MIT. Self-host at no cost.
