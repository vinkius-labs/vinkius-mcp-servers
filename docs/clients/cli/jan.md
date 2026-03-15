---
title: "Connect MCP Server to Jan — Setup Guide | Vinkius"
description: "Add MCP servers to Jan, the privacy-first open-source AI. Run LLMs offline, use Jan CLI for terminal agents, and extend with MCP tools for external data access."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Jan — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP servers to Jan. Privacy-first AI, offline LLMs, terminal agents."
  - - meta
    - name: keywords
      content: "Jan MCP, MCP Jan, Jan AI MCP, connect MCP server Jan, Vinkius Jan, Jan offline AI MCP, Jan CLI agent"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Jan","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add server","text":"Configure MCP in Jan settings or via Jan CLI."},{"@type":"HowToStep","name":"Use","text":"Chat in the desktop app or run Jan CLI for terminal automation with MCP tools."}]}'
---

# Jan

Jan is a privacy-first, open-source AI application that emphasizes running large language models entirely on your own hardware. All data stays on your machine — conversations, model weights, and preferences never leave the device. MCP creates a controlled bridge to the outside world: the model gains external tool access only through servers you explicitly configure.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#3b82f6,#2563eb);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Ja</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Jan</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://jan.ai" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">jan.ai</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Settings + Jan CLI</div></div>
</div>
</div>

## Privacy-First AI with Controlled External Access

Jan's philosophy is local-first: download a model, run it on-device, keep your data private. This is great for sensitive workloads, but it limits what the model can do — it can't access APIs, check databases, or look up documentation.

MCP solves that gap while preserving Jan's privacy model. You decide exactly which external services the AI can reach. A Vinkius Cloud MCP server provides scoped, authenticated access to specific tools — nothing more, nothing less. Your conversations and model state remain entirely local.

Jan also ships a **CLI** for power users and automation. Jan CLI starts headless sessions that can call MCP tools, making it ideal for scripted workflows, cron jobs, and CI/CD pipelines.

Key points:

- **Local-first** — models, data, and conversations stay on your device
- **Jan CLI** — headless terminal agent for automation
- **Multi-model** — Ollama, GGUF, and cloud providers (OpenAI, Anthropic)
- **Plugin ecosystem** — MCP is one of several extension mechanisms
- **GPU acceleration** — CUDA, Metal, and Vulkan support
- **Open-source** — Apache 2.0, transparent development

## Connecting to Vinkius Cloud

### 1. Create a Token

Go to [Vinkius Cloud](https://cloud.vinkius.com) → your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Configure MCP

**Desktop app**: Open **Settings** → **MCP Servers** → **Add**. Paste your Vinkius URL.

**Jan CLI**: Add it to the CLI configuration:

```bash
jan mcp add vinkius "https://edge.vinkius.com/{TOKEN}/mcp"
```

### 3. Start Chatting

In the desktop app, start a conversation — MCP tools appear in the toolbar. With Jan CLI, tools are available in automated sessions.

---

## FAQ

**Does MCP compromise Jan's privacy model?**
MCP tool calls are outbound requests you explicitly configure. No conversation data is shared — only the specific tool call parameters. You control which servers have access.

**Can I use Jan entirely offline?**
Yes, with local models. MCP servers require network access, but they are only contacted when a tool call is made. Without MCP, Jan works fully offline.

**What is Jan CLI?**
A headless command-line interface for Jan that runs sessions without the desktop GUI. It supports MCP tools and is designed for scripting and automation.

**Is Jan free?**
Open-source under Apache 2.0. Free for local models. Cloud providers require their own API keys.
