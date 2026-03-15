---
title: "Connect MCP Server to Jules — Setup Guide | Vinkius"
description: "Add MCP servers to Jules, Google's asynchronous AI coding agent. GitHub-integrated, handles issues and PRs in the background, and uses MCP for external data."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Jules — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Jules. Google's async coding agent for GitHub issues."
  - - meta
    - name: keywords
      content: "Jules MCP, MCP Jules, Jules Google AI MCP, connect MCP server Jules, Vinkius Jules, Jules async agent"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Jules","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP server in Jules configuration."},{"@type":"HowToStep","name":"Assign","text":"Assign GitHub issues to Jules. It works asynchronously with MCP tools."}]}'
---

# Jules

Jules is Google's **asynchronous AI coding agent**. Unlike interactive assistants that work while you watch, Jules operates in the background — assign it a GitHub issue, and it clones the repo, analyzes the problem, writes code, runs tests, and submits a pull request. You review the PR when it's ready. MCP tools give Jules access to external systems during these autonomous sessions.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#4285f4,#34a853);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Ju</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Jules</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Google · <a href="https://jules.google" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">jules.google</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web (GitHub-integrated)</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Agent Configuration</div></div>
</div>
</div>

## Background Agent for GitHub Issues

Jules' asynchronous model is its differentiator. You keep coding while Jules works on a separate task. Assign a bug fix or feature request, and check back later for a ready-to-merge PR with tests and documentation.

Powered by Google's Gemini models, Jules excels at understanding complex codebases and generating contextually appropriate changes.

Features:

- **Asynchronous** — works in the background while you do other tasks
- **GitHub-native** — assign issues, review PRs
- **Self-testing** — runs tests and verifies its own changes
- **Plan preview** — review the approach before execution starts
- **Gemini-powered** — Google's advanced models for code understanding
- **Multi-file** — coherent changes across the codebase

## Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Configure MCP

Add your Vinkius URL in Jules' MCP configuration.

### 3. Assign and Wait

Assign a GitHub issue to Jules. Review the pull request when it's ready.

---

## FAQ

**Does Jules work while I code?**
Yes. Jules runs asynchronously. You continue your own work while Jules handles the assigned task.

**Can I review Jules' approach before it starts?**
Yes. Plan preview shows the proposed strategy before execution.

**How do I assign issues to Jules?**
Through GitHub issue assignment or the Jules web interface.

**Is Jules free?**
Free tier available through Google.
