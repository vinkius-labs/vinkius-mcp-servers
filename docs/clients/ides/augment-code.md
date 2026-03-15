---
title: "Connect MCP Server to Augment Code — Setup Guide | Vinkius"
description: "Add MCP servers to Augment Code, the enterprise AI assistant with team-wide codebase understanding. Shared context graph, SOC2 compliance, and MCP tool integration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Augment Code — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Augment Code. Enterprise AI with shared codebase context."
  - - meta
    - name: keywords
      content: "Augment Code MCP, MCP Augment Code, Augment Code enterprise MCP, connect MCP server Augment Code, Vinkius Augment Code"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Augment Code","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add MCP server in Augment Code extension settings."},{"@type":"HowToStep","name":"Code","text":"AI uses shared team context graph and MCP tools for enterprise coding."}]}'
---

# Augment Code

Augment Code is an enterprise AI coding assistant designed for large teams and complex codebases. Its distinguishing feature is a **shared context graph** — a team-wide understanding of your codebase that builds over time. When a teammate resolves a pattern, Augment learns it for everyone. MCP tools add external system access to this shared intelligence, connecting the AI to internal libraries, deployment systems, and custom APIs.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#8b5cf6,#7c3aed);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Au</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Augment Code</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Enterprise · <a href="https://augmentcode.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">augmentcode.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">VS Code · JetBrains</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Extension Settings</div></div>
</div>
</div>

## Team-Wide Codebase Intelligence with MCP

The shared context graph means Augment gets smarter the more your team uses it. Common patterns, internal conventions, and project-specific idioms are learned automatically. New team members get AI suggestions that already know how your team writes code.

MCP extends this with external data. The AI can pull deployment info, check CI/CD status, or query internal documentation systems while generating code that follows your team's established patterns.

Features:

- **Shared context graph** — team-wide codebase learning
- **SOC2 compliant** — enterprise security requirements met
- **VS Code + JetBrains** — both major IDE families
- **Large repo support** — designed for monorepos and multi-service architectures
- **Agent mode** — autonomous multi-step coding
- **Chat + inline** — conversational and in-line editing modes
- **SSO/SAML** — enterprise authentication integration

## Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Configure MCP

In Augment Code extension settings → **MCP Servers** → **Add** → paste your URL.

### 3. Enterprise Coding

AI uses your team's shared context and MCP tools together.

---

## FAQ

**What is the shared context graph?**
A team-wide learned understanding of your codebase's patterns, conventions, and idioms. It improves as more team members use Augment.

**Is Augment Code SOC2 compliant?**
Yes. Enterprise-grade security with SOC2 compliance and SSO/SAML integration.

**Does Augment work with large monorepos?**
Yes. Designed specifically for large, complex codebases.

**Is Augment Code free?**
Free tier for individual developers. Enterprise plans for teams.
