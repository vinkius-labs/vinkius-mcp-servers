---
title: "Connect MCP Server to HyperChat — Setup Guide | Vinkius"
description: "Add MCP servers to HyperChat, the productivity-focused AI chat with prompt library and workflow chains. Assemble multi-step AI workflows with MCP tool calls."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to HyperChat — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to HyperChat. Prompt library and workflow chains with MCP."
  - - meta
    - name: keywords
      content: "HyperChat MCP, MCP HyperChat, HyperChat AI workflow MCP, connect MCP server HyperChat, Vinkius HyperChat"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to HyperChat","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add","text":"Configure MCP server in HyperChat settings."},{"@type":"HowToStep","name":"Build","text":"Create workflow chains that include MCP tool calls."}]}'
---

# HyperChat

HyperChat is a productivity-focused AI chat client built around **workflow chains** and a **prompt library**. Chains let you assemble multi-step AI workflows — each step can call a different model, use a different prompt, or invoke an MCP tool. The prompt library manages reusable templates. Together, they create repeatable AI-powered processes.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#06b6d4,#0891b2);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">HC</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">HyperChat</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · Desktop</div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Settings</div></div>
</div>
</div>

## Workflow Chains with MCP Tool Steps

A workflow chain might: (1) fetch data from MCP → (2) analyze with Claude → (3) format with GPT-4 → (4) save via another MCP tool. Each step feeds its output to the next. Create the chain once, run it repeatedly with different inputs.

The prompt library integrates with chains. Save specialized prompts ("extract key metrics", "summarize for executives") and insert them into chain steps.

Features:

- **Workflow chains** — multi-step processes with model and tool mixing
- **Prompt library** — organized, reusable prompt templates
- **Multi-model** — different models per chain step
- **MCP integration** — MCP tool calls as chain steps
- **Variables** — parameterized chains with dynamic inputs
- **History** — review past chain executions and results

## Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Server

Go to **Settings** → **MCP** → **Add**. Paste your Vinkius URL.

### 3. Build Chains

Create workflow chains that include MCP tool steps alongside model calls and prompt templates.

---

## FAQ

**What is a workflow chain?**
A sequence of steps where each step can call a model, invoke an MCP tool, or apply a prompt template. Output flows to the next step.

**Can different chain steps use different models?**
Yes. Use GPT-4 for creative steps, Claude for analysis, and MCP tools for data access — all in one chain.

**Are chains reusable?**
Yes. Build once, run with different inputs through parameterized variables.

**Is HyperChat free?**
Open-source and free.
