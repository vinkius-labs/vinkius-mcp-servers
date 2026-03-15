---
title: "Connect MCP Server to Glama — Setup Guide | Vinkius"
description: "Add MCP servers to Glama, the AI gateway and MCP server hosting platform. Host, test, and monitor MCP servers with built-in analytics and team management."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Glama — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Glama. AI gateway with MCP server hosting and analytics."
  - - meta
    - name: keywords
      content: "Glama MCP, MCP Glama, Glama AI gateway MCP, connect MCP server Glama, Vinkius Glama"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Glama","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Connect","text":"Add Vinkius MCP server in Glama dashboard."},{"@type":"HowToStep","name":"Monitor","text":"Track usage, latency, and errors through Glama analytics."}]}'
---

# Glama

Glama is an **AI gateway and MCP server hosting platform**. It sits between your AI applications and LLM providers, adding routing, caching, and analytics. On the MCP side, Glama can host MCP servers, provide a testing playground, and monitor tool usage. Connect your Vinkius MCP server through Glama for centralized management alongside other AI infrastructure.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#f97316,#ea580c);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Gl</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Glama</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px"><a href="https://glama.ai" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">glama.ai</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web Dashboard</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Gateway + Hosting</div></div>
</div>
</div>

## AI Gateway with MCP Management

Features:
- **AI gateway** — routing, caching, and rate limiting for LLM calls
- **MCP hosting** — host MCP servers on Glama infrastructure
- **Playground** — test MCP tools interactively
- **Analytics** — usage, latency, and error monitoring
- **Team management** — role-based access for organizations
- **Multi-provider** — route between LLM providers

## Setup

### 1. Create a Token
In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add in Dashboard
In Glama → **MCP Servers** → **Add** → paste your Vinkius URL.

### 3. Monitor
Track tool usage, response times, and errors in the Glama analytics dashboard.

---

## FAQ

**Is Glama an IDE?**
No. Glama is an AI gateway and MCP hosting platform with a web dashboard.

**Can I host MCP servers on Glama?**
Yes. Glama provides MCP server hosting alongside its AI gateway features.

**Does Glama offer analytics?**
Yes. Usage, latency, and error metrics for all connected MCP servers.

**Is Glama free?**
Free tier available. Plans scale with usage.
