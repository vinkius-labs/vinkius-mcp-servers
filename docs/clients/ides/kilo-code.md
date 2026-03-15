---
title: "Connect MCP Server to Kilo Code — Setup Guide | Vinkius"
description: "Add MCP servers to Kilo Code, the VS Code AI assistant with multi-LLM model groups. Create model groups for different tasks and budget controls."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Kilo Code — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Kilo Code. Multi-LLM model groups with budget controls."
  - - meta
    - name: keywords
      content: "Kilo Code MCP, MCP Kilo Code, Kilo Code VS Code MCP, connect MCP server Kilo Code, Vinkius Kilo Code"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Kilo Code","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add","text":"Configure MCP server in Kilo Code settings."},{"@type":"HowToStep","name":"Code","text":"Use model groups with specific MCP access per task type."}]}'
---

# Kilo Code

Kilo Code is a VS Code extension that organizes AI usage through **model groups** — predefined configurations that pair specific models with instructions, tool access, and budget limits. A "Fast Edits" group might use a smaller model with no MCP access for quick refactors, while a "Deep Analysis" group uses Claude with full MCP access and no spending cap. Switch between groups based on the task at hand.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#0ea5e9,#0284c7);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">KC</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Kilo Code</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://kilocode.ai" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">kilocode.ai</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">stdio · Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">VS Code</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Model Groups + MCP</div></div>
</div>
</div>

## Model Groups with Budget-Controlled MCP Access

Model groups bring order to multi-model AI workflows. Define groups by task type, set budget limits, and control which tools are available:

- **Quick Fix** — fast model, no MCP, $0.05/task limit
- **Architecture** — Claude, full MCP, higher budget
- **Review** — GPT-4, read-only MCP, analysis-focused

Each group is one click away. Budget tracking shows real-time spending per group to prevent surprises.

Features:

- **Model groups** — task-specific configurations with budget limits
- **Budget controls** — per-group spending limits and real-time tracking
- **Per-group MCP** — different MCP access levels per model group
- **Cline-compatible** — builds on the Cline agent architecture
- **Human-in-the-loop** — approval workflow for actions
- **Multi-provider** — OpenAI, Anthropic, Google, local models
- **Open-source** — community-driven

## Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Server

In Kilo Code → **Settings** → **MCP** → add your Vinkius URL.

### 3. Configure Model Groups

Create groups with different MCP access levels and budget limits.

---

## FAQ

**What are model groups?**
Pre-configured AI profiles that combine a model, instructions, tool access, and budget for specific task types.

**Can I set budget limits per group?**
Yes. Each model group has independent spending limits and real-time tracking.

**Is Kilo Code based on Cline?**
Yes. It extends Cline with the model groups system and budget controls.

**Is Kilo Code free?**
Open-source. You bring your own API keys.
