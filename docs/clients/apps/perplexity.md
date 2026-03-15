---
title: "Connect MCP Server to Perplexity — Setup Guide | Vinkius"
description: "Add MCP servers to Perplexity, the AI search engine with cited sources. Research mode, academic search, internal data access via MCP, and real-time web results."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Perplexity — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Perplexity. AI search with citations and MCP tool access."
  - - meta
    - name: keywords
      content: "Perplexity MCP, MCP Perplexity, Perplexity AI MCP, connect MCP server Perplexity, Vinkius Perplexity, Perplexity search MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Perplexity","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add","text":"Configure the MCP server in Perplexity settings."},{"@type":"HowToStep","name":"Search","text":"Perplexity combines web search with MCP tool data, citing both."}]}'
---

# Perplexity

Perplexity is an AI-powered search engine that provides answers with cited sources. Unlike traditional chatbots, every Perplexity response includes numbered references to specific URLs, papers, and data sources. MCP adds a new category of sources — your own systems. Perplexity can cite both web results and MCP tool data in the same answer.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#22d3ee,#0891b2);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Px</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Perplexity</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">perplexity.ai · <a href="https://perplexity.ai" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">perplexity.ai</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web · iOS · Android</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Settings</div></div>
</div>
</div>

## Search the Web and Your Systems in One Query

Perplexity's value is verified, sourced information. Adding MCP means Perplexity can verify claims against your own data, not just the public web. Ask "are our servers performing within SLA this week?" and Perplexity cites both your monitoring MCP data and public benchmark articles.

Research mode deepens this further — it conducts multi-step searches, synthesizes findings, and produces a cited report. MCP tools become research sources alongside Google Scholar, Wikipedia, and news outlets.

Unique aspects:

- **Cited answers** — every claim links to a specific source
- **Research mode** — multi-step deep research with synthesis
- **Academic search** — access to scholarly papers and citations
- **Internal data via MCP** — your systems become searchable alongside the web
- **Collections** — organize research threads by topic
- **Focus modes** — scope searches to specific domains (academic, YouTube, Reddit)

## Adding Vinkius Cloud

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Configure MCP

In Perplexity → **Settings** → **MCP Servers** → **Add**. Paste your URL.

### 3. Search with Internal Data

Your MCP data appears as a citable source in Perplexity answers, alongside web results.

---

## FAQ

**Does Perplexity cite MCP data sources?**
Yes. MCP tool results appear as referenced sources in the answer, with the same citation format used for web results.

**Can Research mode use MCP?**
Yes. Research mode includes MCP tools as available sources during its multi-step research process.

**Is Perplexity available on mobile?**
Yes. iOS and Android apps with the same MCP tool access as the web version.

**Which Perplexity plan supports MCP?**
MCP is available on Perplexity Pro.
