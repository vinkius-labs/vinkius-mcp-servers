---
title: "Connect MCP Server to Windsurf — Setup Guide | Vinkius"
description: "Add MCP servers to Windsurf IDE by Codeium. Cascade AI agent with deep codebase awareness, Supercomplete next-action prediction, Flows, and MCP tool integration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Windsurf — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Windsurf. Cascade agent with codebase awareness and MCP."
  - - meta
    - name: keywords
      content: "Windsurf MCP, MCP Windsurf IDE, Windsurf Cascade MCP, connect MCP server Windsurf, Vinkius Windsurf, Windsurf Codeium MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Windsurf","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP server in Windsurf Cascade MCP settings."},{"@type":"HowToStep","name":"Code","text":"Cascade uses MCP tools during multi-step coding tasks."}]}'
---

# Windsurf

Windsurf is the agentic IDE built by Codeium, and its headline feature is **Cascade** — an AI agent with deep awareness of your entire codebase, your in-IDE actions, and the terminal output. Cascade doesn't just see the file you're editing; it tracks every file you open, every command you run, and every diff you review, building a rich context graph. MCP tools extend Cascade's reach beyond the local codebase to external systems and APIs.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#00a67e,#00d4aa);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Wi</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Windsurf</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Codeium · <a href="https://windsurf.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">windsurf.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Cascade MCP Integration</div></div>
</div>
</div>

## Cascade: Codebase-Aware Agent + MCP

Cascade's distinguishing factor is **implicit context**. While other agents require you to explicitly reference files or symbols, Cascade already knows what you've been working on. It sees your terminal output, your recent file edits, and the pattern of changes across your project. MCP tools feed additional external context into this awareness graph.

**Supercomplete** goes beyond traditional code completion. It predicts your next *action*, not just your next token — suggest running a test, opening a related file, or calling an MCP tool based on what you just did.

**Flows** merge the copilot and agent paradigms. Instead of switching between "ask AI" and "let AI act", Cascade operates on a spectrum — sometimes completing your code, sometimes taking multi-step autonomous actions, always adapting to the situation.

Features:

- **Cascade** — deep codebase awareness with action-level context tracking
- **Supercomplete** — next-action prediction beyond code completion
- **Flows** — copilot and agent behavior in one seamless experience
- **Turbo mode** — auto-execute terminal commands without approval
- **Codelenses** — inline AI insights on code logic and complexity
- **Custom MCP** — add your own MCP servers for external data
- **Multi-model** — Gemini, Claude, and other leading models

## Configuration

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Server

In Windsurf → **Settings** → **Cascade** → **MCP Servers** → paste your Vinkius URL.

### 3. Code with Cascade

Cascade uses MCP tools during multi-step coding tasks. It calls tools, reads the results, and incorporates data into its coding decisions.

---

## FAQ

**How does Cascade use MCP tools differently?**
Cascade has deep codebase awareness. When it calls an MCP tool, it combines the result with its understanding of your project structure, recent changes, and terminal output.

**What is Supercomplete?**
An action-level prediction system. It suggests your next move (run test, open file, call MCP tool) rather than just completing code on the current line.

**Can I auto-execute terminal commands?**
Yes. Turbo mode lets Cascade run terminal commands without prompting for approval.

**Is Windsurf free?**
Free tier available. Pro plans unlock advanced Cascade features.
