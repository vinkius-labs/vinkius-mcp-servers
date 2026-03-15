---
title: "Connect MCP Server to Zed — Setup Guide | Vinkius"
description: "Add MCP servers to Zed, the Rust-built code editor by Atom creators. GPU-accelerated, MCP context servers, Zeta model, ACP agent protocol, and parallel subagents."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Zed — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Zed. Rust-built editor with GPU rendering and MCP context."
  - - meta
    - name: keywords
      content: "Zed MCP, MCP Zed editor, Zed AI MCP, connect MCP server Zed, Vinkius Zed, Zed Rust MCP editor"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Zed","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP context server in Zed settings.toml."},{"@type":"HowToStep","name":"Code","text":"AI agent auto-invokes MCP tools during coding workflows."}]}'
---

# Zed

Zed is a code editor written from scratch in **Rust** by the creators of Atom and Tree-sitter. The result is near-instant startup, GPU-accelerated rendering at 120fps, and the smoothest editing experience available. AI is deeply integrated: **MCP context servers** provide external data, **Zeta** is Zed's own open-source completion model, and **ACP** (Agent Client Protocol) enables cross-editor agent interoperability.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#084eff,#6c9eff);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Zd</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Zed</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Zed Industries · <a href="https://zed.dev" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">zed.dev</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">macOS · Linux · Windows</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">MCP Context Servers + ACP</div></div>
</div>
</div>

## Performance-First Editor with AI Agent Integration

Zed's architecture is a complete departure from Electron-based editors. Everything — rendering, text buffers, syntax parsing, LSP communication — runs in native Rust code on the GPU. The result is an editor that handles massive files and complex projects without the lag that plagues VS Code forks.

The AI agent runs **parallel subagents** that work on separate tasks simultaneously. While one subagent writes tests, another refactors the implementation. MCP context servers feed both with external data.

**Zeta** is Zed's open-source completion model, trained specifically for code understanding. It runs alongside any cloud model (Claude, GPT, Gemini) or local model (Ollama, LM Studio).

**Multiplayer editing** lets team members collaborate in real time — pair programming with shared cursor, voice chat, and shared AI agent context.

Features:

- **Rust-native** — near-instant startup, GPU-accelerated rendering
- **MCP context servers** — external tools and knowledge bases in AI context
- **ACP** — Agent Client Protocol for cross-editor agent interoperability
- **Parallel subagents** — multiple agents working simultaneously
- **Zeta** — open-source completion model by Zed
- **Multi-model** — Claude, GPT, Gemini, Ollama, LM Studio
- **Multiplayer** — real-time collaborative editing with voice
- **Git AI** — merge conflict resolution and branch diff context
- **Privacy** — opt-in data sharing, zero retention with BYOK

## Configuration

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add to settings.toml

In Zed → **Settings** → add MCP context server:

```toml
[context_servers.vinkius]
url = "https://edge.vinkius.com/{TOKEN}/mcp"
```

### 3. AI Agent Access

The AI agent auto-invokes MCP tools when relevant to your workflow.

---

## FAQ

**Why is Zed faster than VS Code?**
Zed is written in Rust with GPU-accelerated rendering. No Electron, no JavaScript overhead. Everything runs natively.

**What is ACP?**
Agent Client Protocol — a standard for agent interoperability across editors. Agents built for one editor can work in others.

**Can I use Zed for multiplayer coding?**
Yes. Real-time collaborative editing with shared cursors, voice chat, and shared agent context.

**Is Zed free?**
Open-source under GPL 3.0. Free with hosted Zeta model.
