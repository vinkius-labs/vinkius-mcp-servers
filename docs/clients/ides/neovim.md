---
title: "Connect MCP Server to Neovim — Setup Guide | Vinkius"
description: "Add MCP servers to Neovim. Lua-native MCP plugins, modal editing, LSP integration, and extensible AI coding through the Neovim ecosystem."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Neovim — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Neovim. Lua-native MCP plugins with modal editing."
  - - meta
    - name: keywords
      content: "Neovim MCP, MCP Neovim, Neovim AI MCP, connect MCP server Neovim, Vinkius Neovim, Neovim Lua MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Neovim","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP server via Neovim Lua config or ChatGPT.nvim / avante.nvim plugin."},{"@type":"HowToStep","name":"Code","text":"Use MCP tools through AI plugins in Neovim with full modal editing."}]}'
---

# Neovim

Neovim is the modern evolution of Vim — a terminal-based, modal editor with a **Lua-first plugin architecture**. MCP integration comes through AI plugins like **avante.nvim**, **ChatGPT.nvim**, and **mcphub.nvim**. These plugins connect MCP servers while preserving Neovim's modal editing philosophy: you stay in your keyboard-driven flow while AI handles tool calls in the background.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#57a143,#3e8e2f);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Nv</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Neovim</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://neovim.io" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">neovim.io</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Terminal (all OS)</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Lua Plugins (avante, mcphub)</div></div>
</div>
</div>

## Keyboard-Driven AI with MCP in the Terminal

Neovim users choose their tools carefully. MCP integration respects this — install only the plugins you need, configure via Lua, and manage MCP servers through the plugin of your choice.

**avante.nvim** provides a Cursor-like AI chat experience inside Neovim with MCP support. **mcphub.nvim** is a dedicated MCP client for managing and interacting with MCP servers. Both integrate with Neovim's native LSP and Tree-sitter for code-aware AI responses.

Features:

- **Lua-native** — configure MCP through Lua scripts
- **Plugin ecosystem** — avante.nvim, mcphub.nvim, ChatGPT.nvim
- **Modal editing** — Vim keybindings preserved during AI interactions
- **LSP integration** — AI uses Language Server data for context
- **Tree-sitter** — syntax-aware code understanding
- **Terminal-native** — runs in any terminal, over SSH, in containers
- **Multi-model** — Claude, GPT, Gemini, Ollama via plugins
- **Open-source** — Apache 2.0 license

## Lua Configuration

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Plugin Config

Add to your Neovim config (e.g., via lazy.nvim with avante.nvim or mcphub.nvim):

```lua
require("mcphub").setup({
  servers = {
    vinkius = {
      url = "https://edge.vinkius.com/{TOKEN}/mcp"
    }
  }
})
```

### 3. Stay in the Flow

MCP tools work within your modal editing workflow. No mouse needed.

---

## FAQ

**Which Neovim plugin should I use for MCP?**
avante.nvim for a Cursor-like chat experience, mcphub.nvim for dedicated MCP server management.

**Does MCP break my Vim workflow?**
No. AI tools integrate with Neovim's modal editing. Stay in your keyboard flow.

**Can I use MCP over SSH?**
Yes. Neovim and MCP plugins work in terminal sessions, including remote SSH.

**Is Neovim free?**
Open-source under Apache 2.0. All plugins are community-maintained.
