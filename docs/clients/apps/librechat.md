---
title: "Connect MCP Server to LibreChat — Setup Guide | Vinkius"
description: "Add MCP servers to LibreChat, the open-source multi-model chat platform. Self-hosted ChatGPT alternative with agent builder, file search, code interpreter, and MCP."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to LibreChat — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to LibreChat. Self-hosted multi-model chat with MCP tools."
  - - meta
    - name: keywords
      content: "LibreChat MCP, MCP LibreChat, LibreChat self-hosted MCP, connect MCP server LibreChat, Vinkius LibreChat, LibreChat ChatGPT alternative"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to LibreChat","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP server to LibreChat configuration file."},{"@type":"HowToStep","name":"Chat","text":"MCP tools extend every conversation with external data access."}]}'
---

# LibreChat

LibreChat is a self-hosted, open-source alternative to ChatGPT that supports multiple AI providers simultaneously. It includes an agent builder, file search, code interpreter, and conversation presets. Since it is fully self-hosted, your conversations never leave your infrastructure — MCP bridges the gap to external services on your terms.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#a78bfa,#7c3aed);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">LC</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">LibreChat</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://librechat.ai" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">librechat.ai</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web · Docker · Self-hosted</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Config File</div></div>
</div>
</div>

## A Self-Hosted ChatGPT with MCP Extensibility

LibreChat provides an experience similar to ChatGPT but on your own server. You manage users, set model permissions, and configure which tools are available — useful for organizations that need data sovereignty. MCP adds tool extensibility without compromising the self-hosted model.

The agent builder lets non-technical users create custom assistants with specific model settings, system prompts, and tool access. MCP servers provide the tools — database queries, API calls, monitoring checks — that make those assistants useful for real work.

Key features:

- **Multi-model** — OpenAI, Anthropic, Google, Azure, and any OpenAI-compatible endpoint
- **Agent builder** — create custom assistants with specific tool sets
- **File search** — upload and search across documents in conversations
- **Code interpreter** — execute Python code in sandboxed environments
- **User management** — admin panel with registration, quotas, and permissions
- **Conversation presets** — save and share model/tool configurations
- **Docker deployment** — single `docker-compose up` for the full stack

## Configuration

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add to Config

In your LibreChat configuration, add the MCP server:

```yaml
mcpServers:
  vinkius:
    url: "https://edge.vinkius.com/{TOKEN}/mcp"
```

### 3. Restart and Chat

Restart LibreChat. MCP tools are available in all conversations and custom agents.

---

## FAQ

**Can I restrict MCP tool access per user in LibreChat?**
Yes. LibreChat's admin panel lets you manage user permissions, including which tools and models are available to each user.

**Does LibreChat work with local models?**
Yes. Connect Ollama or any OpenAI-compatible local endpoint alongside cloud providers.

**Is file search and code interpreter available with MCP?**
Yes. These features work alongside MCP tools in the same conversation.

**Is LibreChat free?**
Open-source under MIT. Self-host at no cost. You provide your own API keys.
