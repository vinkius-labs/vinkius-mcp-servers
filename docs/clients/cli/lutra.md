---
title: "Connect MCP Server to Lutra AI — Setup Guide | Vinkius"
description: "Add MCP servers to Lutra AI, the plain-English automation platform. Workflow builder, web extraction, multi-step tasks, and MCP tool integration — no code required."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Lutra AI — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP servers to Lutra AI. No-code automation with MCP tool integration."
  - - meta
    - name: keywords
      content: "Lutra AI MCP, MCP Lutra, Lutra automation MCP, connect MCP server Lutra, Vinkius Lutra AI, Lutra workflow MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Lutra AI","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add server","text":"Add MCP server in Lutra workflow builder settings."},{"@type":"HowToStep","name":"Automate","text":"Build workflows that combine web actions with MCP tool calls."}]}'
---

# Lutra AI

Lutra AI is a no-code automation platform where you describe tasks in plain English and the AI builds executable workflows. It can extract data from websites, process spreadsheets, send emails, and chain actions across services. MCP extends Lutra's reach by connecting it to data sources and APIs that require structured tool calls.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#ec4899,#db2777);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Lu</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Lutra AI</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">lutra.ai · <a href="https://lutra.ai" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">lutra.ai</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Workflow Settings</div></div>
</div>
</div>

## Plain-English Automation with MCP Tools

Lutra is designed for people who want to automate tasks without writing code. You describe what you need — "extract all product prices from this URL and save them to a spreadsheet" — and Lutra builds an executable workflow.

MCP tools add structured API access to this approach. Instead of Lutra having to figure out how to authenticate and call an internal service, it uses a pre-configured MCP tool that handles the details. This makes enterprise automation accessible to team members who don't have technical backgrounds.

What Lutra brings to MCP:

- **Plain-English workflows** — describe tasks in natural language, get executable automation
- **Web extraction** — scrape and parse websites as workflow steps
- **Scheduled runs** — trigger workflows on a cron schedule
- **Multi-step chains** — combine web actions, MCP tools, and data transformations
- **Visual builder** — drag-and-drop workflow editor
- **No code required** — built for non-developers

## How to Connect

### 1. Create a Token

Head to [Vinkius Cloud](https://cloud.vinkius.com) → your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Server in Lutra

Open the **Workflow Builder** → **Settings** → **MCP Servers** → **Add**. Paste your Vinkius URL:

```
https://edge.vinkius.com/{TOKEN}/mcp
```

### 3. Build Workflows

Now you can add MCP tool steps to any workflow. Combine them with web extraction, email, spreadsheet, and other built-in actions.

---

## FAQ

**Do I need to code to use MCP with Lutra?**
No. MCP tools appear as drag-and-drop steps in the workflow builder. You configure them through the visual interface.

**Can I schedule MCP-powered workflows?**
Yes. Set any workflow to run on a schedule — hourly, daily, or custom cron expressions. MCP tools execute automatically.

**Does Lutra work offline?**
No. Lutra is a web-based platform. Both the workflow builder and MCP servers require internet access.

**Is Lutra free?**
Lutra has a free tier for personal use with limited workflow runs. Pro plans are available for higher throughput.
