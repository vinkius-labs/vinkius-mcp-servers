---
title: "Connect MCP Server to Supermaven — Setup Guide | Vinkius"
description: "Add MCP servers to Supermaven, the fastest AI code completion with 1M token context window. Sub-100ms latency, multi-file understanding, and MCP integration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Supermaven — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Supermaven. 1M token context, sub-100ms completion."
  - - meta
    - name: keywords
      content: "Supermaven MCP, MCP Supermaven, Supermaven fastest MCP, connect MCP server Supermaven, Vinkius Supermaven"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Supermaven","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP in Supermaven extension settings."},{"@type":"HowToStep","name":"Code","text":"Ultra-fast completions enhanced by MCP tool context."}]}'
---

# Supermaven

Supermaven is the fastest AI code completion engine available, delivering suggestions in under **100 milliseconds** with a **1 million token context window**. While other completions look at the current file, Supermaven processes your entire project for coherent cross-file suggestions. MCP tools add external data context to this already massive window.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#8b5cf6,#6d28d9);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Sm</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Supermaven</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px"><a href="https://supermaven.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">supermaven.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">VS Code · JetBrains · Neovim</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Extension Settings</div></div>
</div>
</div>

## 1M Token Context at Sub-100ms Speed

Features:
- **1M token window** — largest context of any completion engine
- **Sub-100ms latency** — faster than typing
- **Multi-file** — suggestions aware of your entire project
- **Chat** — conversational coding alongside completions
- **VS Code · JetBrains · Neovim** — broad editor support
- **Free tier** — generous free usage

## Setup

### 1. Create a Token
In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Configure MCP
In Supermaven extension → **Settings** → **MCP** → add your URL.

### 3. Fast + Context-Rich
Completions use your project context and MCP data together at sub-100ms speed.

---

## FAQ

**How fast is Supermaven?**
Sub-100ms latency. Suggestions appear before you finish thinking about what to type.

**What is the 1M token context?**
Supermaven processes up to 1 million tokens of your project for cross-file coherent completions.

**Does Supermaven work in Neovim?**
Yes. Plugins for VS Code, JetBrains, and Neovim.

**Is Supermaven free?**
Free tier with generous limits. Pro plans available.
