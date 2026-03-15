---
title: "Connect MCP Server to Emacs — Setup Guide | Vinkius"
description: "Add MCP servers to Emacs via mcp.el and gptel. Elisp configuration, Org-mode integration, and LLM-powered coding with MCP tools in the Emacs ecosystem."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Emacs — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Emacs. Elisp-powered MCP with Org-mode integration."
  - - meta
    - name: keywords
      content: "Emacs MCP, MCP Emacs, Emacs AI MCP, connect MCP server Emacs, Vinkius Emacs, Emacs mcp.el"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Emacs","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP server in mcp.el or gptel Elisp config."},{"@type":"HowToStep","name":"Code","text":"Use MCP tools in Emacs buffers with Org-mode and TRAMP context."}]}'
---

# Emacs

Emacs is the extensible, self-documenting editor where everything is programmable in **Elisp**. MCP integration comes through packages like **mcp.el** and **gptel**, which expose MCP tools to Emacs' AI capabilities. The unique advantage: **Org-mode** documents, **TRAMP** remote files, and **Magit** Git operations all serve as context for AI conversations enriched by MCP data.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#7b5ea7,#5b4084);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Em</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Emacs</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">GNU · <a href="https://www.gnu.org/software/emacs/" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">gnu.org/emacs</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">All (Terminal + GUI)</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">mcp.el / gptel</div></div>
</div>
</div>

## Elisp-Powered AI with Org-Mode Context

Emacs users live inside their editor for coding, writing, project management (Org-mode), version control (Magit), and remote work (TRAMP). MCP brings external data into this unified environment.

Use Org-mode tables and structures as AI context. Query MCP tools from within Org documents, and results flow into your notes and task lists. Combine MCP data with TRAMP to work on remote servers while accessing external tools locally.

Features:

- **Elisp configuration** — fully programmable MCP setup
- **mcp.el** — dedicated MCP client package
- **gptel** — LLM client with MCP tool support
- **Org-mode** — AI context from structured documents
- **TRAMP** — transparent remote file editing
- **Magit** — Git context for AI conversations
- **Multi-model** — Claude, GPT, Ollama, local models
- **Free software** — GNU GPL

## Elisp Configuration

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Configure in init.el

```elisp
(use-package mcp
  :config
  (mcp-add-server "vinkius"
    :url "https://edge.vinkius.com/{TOKEN}/mcp"))
```

### 3. Use in Buffers

Query MCP tools from any buffer. Results integrate with Org-mode and Emacs workflows.

---

## FAQ

**Which Emacs packages support MCP?**
mcp.el for dedicated MCP support, gptel for LLM interactions with MCP tools.

**Can I use MCP data in Org-mode?**
Yes. Query MCP tools and insert results into Org documents, tables, and task lists.

**Does MCP work over TRAMP?**
MCP calls are local. You can edit remote files via TRAMP while using MCP tools.

**Is Emacs free?**
Free software under GNU GPL.
