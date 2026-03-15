---
title: "Getting Started with MCP Servers | Vinkius Cloud"
description: "Set up your first MCP server in under 60 seconds. Connect Claude, Cursor, or VS Code to a managed Model Context Protocol runtime with built-in DLP and FinOps."
head:
  - - meta
    - property: og:title
      content: "Getting Started with MCP Servers | Vinkius Cloud"
  - - meta
    - property: og:description
      content: "Set up your first MCP server in under 60 seconds. Connect Claude, Cursor, or VS Code to a managed MCP runtime with built-in DLP and FinOps."
  - - meta
    - name: keywords
      content: "MCP server setup, getting started MCP, Model Context Protocol guide, configure MCP Claude, MCP Cursor setup, create MCP server, MCP server tutorial"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Vinkius Cloud and how does it relate to MCP?","acceptedAnswer":{"@type":"Answer","text":"Vinkius Cloud is a managed runtime for Model Context Protocol (MCP) servers. It sits between your existing APIs and AI clients — handling protocol translation, authentication, data protection, and hosting so you don''t need to build or maintain MCP infrastructure yourself."}},{"@type":"Question","name":"How long does it take to set up my first MCP server?","acceptedAnswer":{"@type":"Answer","text":"Most users go from sign-in to a live MCP server in under 60 seconds. The fastest path is OpenAPI Import: paste a spec URL, configure authentication, and click Deploy. The server is immediately accessible to AI clients."}},{"@type":"Question","name":"Which AI clients can connect to Vinkius Cloud MCP servers?","acceptedAnswer":{"@type":"Answer","text":"Any MCP-compatible client works, including Claude Desktop, Claude Code, Cursor, VS Code with GitHub Copilot, Windsurf, Cline, and OpenAI Codex. The platform provides a ready-to-paste Config JSON block and Cursor deep link for instant setup."}},{"@type":"Question","name":"Do I need an existing API to create an MCP server?","acceptedAnswer":{"@type":"Answer","text":"No. While OpenAPI Import and Manual API modes require an API, the Agent Skills mode lets you create MCP servers from pure text — procedures, playbooks, FAQs, and decision trees that AI agents can discover and follow without any API backend."}},{"@type":"Question","name":"What security features are included by default?","acceptedAnswer":{"@type":"Answer","text":"Every server automatically gets Data Loss Prevention (DLP) that redacts PII from responses, FinOps Guard that prevents token waste from oversized payloads, SSRF protection that blocks internal network access, and AES-256 credential encryption in an isolated vault."}},{"@type":"Question","name":"What does the Dashboard show?","acceptedAnswer":{"@type":"Answer","text":"The Dashboard provides real-time visibility into your entire MCP infrastructure: server count and status, total tools deployed, token consumption analytics, DLP redaction counts, FinOps savings, and a live feed of every tool execution with timestamps, latency, and HTTP status codes."}}]}'
---

# Getting Started

Vinkius Cloud is a managed runtime for Model Context Protocol (MCP) servers. It sits between your existing APIs and AI clients like Claude, Cursor, and VS Code — turning any REST endpoint into a governed, observable tool that AI agents can discover and call.

This means you don't need to write MCP server code, manage WebSocket infrastructure, or implement authentication flows. You provide an API; Vinkius Cloud handles the protocol translation, data protection, and global distribution.

::: tip What is MCP?
The [Model Context Protocol](https://modelcontextprotocol.io) is an open standard created by Anthropic that defines how AI clients discover and invoke external tools. When Claude asks "what tools are available?", the MCP server responds with a structured list. When Claude decides to call a tool, the server translates that into an API request. Vinkius Cloud automates this entire layer.
:::

---

## Sign in

Go to [cloud.vinkius.com](https://cloud.vinkius.com) and authenticate with **Google** or **GitHub**. Authentication is passwordless — the platform uses OAuth 2.0 and creates your account on first login.

- **Google** — Works with Google Workspace and personal Gmail accounts.
- **GitHub** — Recommended if your team already collaborates through GitHub, since it simplifies team invites later.

Once authenticated, you land on the **Dashboard**.

---

<!-- Editorial break: Your command center -->
<div style="margin:48px 0;padding:56px 40px;background:#09090f;border:1px solid rgba(255,255,255,0.05);border-radius:12px;position:relative;overflow:hidden">
<div style="position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(129,140,248,0.3),transparent)"></div>
<span style="font-size:9px;color:rgba(129,140,248,0.6);letter-spacing:3px;font-weight:700;text-transform:uppercase">Your command center</span>
<div style="font-size:36px;color:#fff;font-weight:700;font-family:Inter,system-ui,sans-serif;letter-spacing:-1.5px;margin-top:12px;line-height:1.1">The Dashboard shows everything.<br><span style="color:rgba(255,255,255,0.25)">In real time.</span></div>
<div style="font-size:14px;color:rgba(255,255,255,0.4);margin-top:16px;max-width:540px;line-height:1.7;font-family:Inter,sans-serif">Servers, tools, token usage, DLP redactions, FinOps savings, live request feeds — one page, always current. You never need to leave the Dashboard to understand the state of your infrastructure.</div>
</div>

## The Dashboard

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:8px;overflow:hidden;background:#09090f;font-family:ui-monospace,monospace">

<!-- Header -->
<div style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:space-between">
<div>
<span style="font-size:10px;color:rgba(192,132,252,0.5);letter-spacing:2px">OVERVIEW</span>
<div style="font-size:16px;color:#fff;font-family:Inter,system-ui,sans-serif;font-weight:600;margin-top:4px">Welcome back</div>
<span style="font-size:11px;color:rgba(255,255,255,0.3)">Infrastructure overview</span>
</div>
<div style="text-align:right">
<span style="font-size:9px;color:rgba(192,132,252,0.7);letter-spacing:2px">BUSINESS PLAN</span>
<div style="margin-top:6px;width:160px;height:4px;background:rgba(255,255,255,0.06);border-radius:2px"><div style="width:4%;height:100%;background:linear-gradient(90deg,#c084fc,#818cf8);border-radius:2px"></div></div>
<span style="font-size:9px;color:rgba(255,255,255,0.25);margin-top:4px;display:block">21 / 500K requests</span>
</div>
</div>

<!-- Stats Grid -->
<div style="display:grid;grid-template-columns:repeat(4,1fr);border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="padding:16px 20px;border-right:1px solid rgba(255,255,255,0.06)">
<span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TOTAL SERVERS</span>
<div style="font-size:28px;color:#fff;font-weight:700;margin-top:8px;font-family:Inter,sans-serif">5</div>
<span style="font-size:8px;color:rgba(255,255,255,0.15);letter-spacing:1px">SERVERS_COUNT</span>
</div>
<div style="padding:16px 20px;border-right:1px solid rgba(255,255,255,0.06)">
<span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">ACTIVE</span>
<div style="font-size:28px;color:#fff;font-weight:700;margin-top:8px;font-family:Inter,sans-serif">5</div>
<span style="font-size:8px;color:rgba(255,255,255,0.15);letter-spacing:1px">ACTIVE_COUNT</span>
</div>
<div style="padding:16px 20px;border-right:1px solid rgba(255,255,255,0.06)">
<span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TOTAL TOOLS</span>
<div style="font-size:28px;color:#fff;font-weight:700;margin-top:8px;font-family:Inter,sans-serif">47</div>
<span style="font-size:8px;color:rgba(255,255,255,0.15);letter-spacing:1px">TOOLS_COUNT</span>
</div>
<div style="padding:16px 20px">
<span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">DLP ENABLED</span>
<div style="font-size:28px;color:#fff;font-weight:700;margin-top:8px;font-family:Inter,sans-serif">5</div>
<span style="font-size:8px;color:rgba(255,255,255,0.15);letter-spacing:1px">DLP_COUNT</span>
</div>
</div>

<!-- Token Analytics + Egress Firewall -->
<div style="display:grid;grid-template-columns:1fr 1fr">

<!-- Token Analytics -->
<div style="padding:20px;border-right:1px solid rgba(255,255,255,0.06)">
<span style="font-size:9px;color:rgba(245,158,11,0.7);letter-spacing:2px">// TOKEN ANALYTICS</span>
<div style="font-size:28px;color:#fff;font-weight:700;margin-top:12px;font-family:Inter,sans-serif">86K</div>
<span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:1px">TOTAL TOKENS (30D)</span>
<div style="display:flex;gap:24px;margin-top:12px">
<div><span style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif">2.8K</span><br><span style="font-size:8px;color:rgba(255,255,255,0.25)">AVG / REQUEST</span></div>
<div><span style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif">31</span><br><span style="font-size:8px;color:rgba(255,255,255,0.25)">TOTAL REQUESTS</span></div>
</div>
<div style="margin-top:16px;border-top:1px solid rgba(255,255,255,0.04);padding-top:12px">
<div style="display:flex;justify-content:space-between;padding:4px 0"><span style="font-size:10px;color:rgba(255,255,255,0.3)"><span style="color:rgba(255,255,255,0.15);margin-right:6px">01</span>pet_find_pets_by_status</span><span style="font-size:10px;color:rgba(255,255,255,0.2)">85K tk</span></div>
<div style="display:flex;justify-content:space-between;padding:4px 0"><span style="font-size:10px;color:rgba(255,255,255,0.3)"><span style="color:rgba(255,255,255,0.15);margin-right:6px">02</span>store_get_inventory</span><span style="font-size:10px;color:rgba(255,255,255,0.2)">71 tk</span></div>
<div style="display:flex;justify-content:space-between;padding:4px 0"><span style="font-size:10px;color:rgba(255,255,255,0.3)"><span style="color:rgba(255,255,255,0.15);margin-right:6px">03</span>pet_get_pet_by_id</span><span style="font-size:10px;color:rgba(255,255,255,0.2)">66 tk</span></div>
</div>
</div>

<!-- Egress Firewall -->
<div style="padding:20px">
<span style="font-size:9px;color:rgba(245,158,11,0.7);letter-spacing:2px">// EGRESS FIREWALL</span>
<div style="display:flex;align-items:baseline;gap:12px;margin-top:12px">
<span style="font-size:28px;color:#fff;font-weight:700;font-family:Inter,sans-serif">5</span>
<span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:1px">SERVERS PROTECTED</span>
</div>
<div style="display:flex;gap:8px;margin-top:12px">
<span style="font-size:8px;color:rgba(34,197,94,0.8);padding:2px 8px;border:1px solid rgba(34,197,94,0.2);border-radius:4px">● DLP</span>
<span style="font-size:8px;color:rgba(245,158,11,0.8);padding:2px 8px;border:1px solid rgba(245,158,11,0.2);border-radius:4px">FINOPS</span>
</div>
<div style="margin-top:16px;border-top:1px solid rgba(255,255,255,0.04);padding-top:12px">
<div style="display:flex;justify-content:space-between;padding:6px 0"><span style="font-size:11px;color:rgba(255,255,255,0.4)">PII redactions</span><span style="font-size:11px;color:#fff;font-weight:600;font-family:Inter,sans-serif">182</span></div>
<div style="display:flex;justify-content:space-between;padding:6px 0"><span style="font-size:11px;color:rgba(255,255,255,0.4)">Payloads truncated</span><span style="font-size:11px;color:#fff;font-weight:600;font-family:Inter,sans-serif">6</span></div>
</div>
<div style="margin-top:12px;display:flex;justify-content:space-between">
<span style="font-size:8px;color:rgba(255,255,255,0.15);letter-spacing:1px">EGRESS_STATUS</span>
<span style="font-size:8px;color:rgba(34,197,94,0.6);letter-spacing:1px">ACTIVE</span>
</div>
</div>

</div>

</div>

The Dashboard is your operational hub. Everything updates in real time, so you can monitor your entire MCP infrastructure without leaving the page.

### Stats grid

The top row shows four key metrics at a glance:

| Metric | What it tells you |
|---|---|
| **Total Servers** | How many MCP servers you have deployed across all modes (OpenAPI, Manual, Skills) |
| **Active** | How many are currently online and accepting connections. A gap between this and Total Servers means something needs attention. |
| **Total Tools** | The combined count of MCP tools across all servers. If you imported a 50-endpoint OpenAPI spec, this reflects those 50 tools. |
| **DLP Enabled** | How many servers have Data Loss Prevention active. Ideally, this matches your Active count. |

### Token analytics

AI models charge per token — and every MCP tool call consumes tokens for the tool description, the request payload, and the response. The Token Analytics panel tracks this over a rolling 30-day window:

- **Total Tokens** — Aggregate token consumption across all tool executions. This number directly correlates with your AI model costs.
- **Average per Request** — A per-call breakdown that helps you identify expensive tools. If a single tool averages 5,000 tokens per call, it may benefit from FinOps Guard or response optimization.
- **Top Tools** — A ranked list of your most token-intensive tools. Use this to find optimization targets — a tool consuming 85K tokens is worth investigating.

::: info No traffic yet?
If you haven't connected an AI client, this section shows a prompt guiding you to the [Quick Connect](quick-connect.md) flow. Token analytics populate automatically once your first tool call is processed.
:::

### Egress Firewall

The Egress Firewall is the security layer that sits between your upstream APIs and the AI models consuming your MCP tools. It operates at the response level: every payload is inspected before it reaches the requesting model.

The panel surfaces two key indicators:

- **PII Redactions** — How many sensitive fields (emails, phone numbers, credit cards) have been automatically removed from API responses. A high number here means DLP is actively protecting your data.
- **Payloads Truncated** — How many oversized responses were truncated by FinOps Guard to prevent context window waste.

### Live Feed

The bottom of the Dashboard streams tool executions in real time. Each entry shows the timestamp, which tool was called, the semantic verb (whether it was a read operation, a mutation, or a destructive action), latency in milliseconds, and the HTTP status code.

This feed is essential during integration: when you connect Claude Desktop and ask it to use a tool, you see the request appear here within seconds. It confirms the end-to-end connection is working and gives you immediate visibility into performance.

---

<!-- Editorial break: Three ways to deploy -->
<div style="margin:48px 0;padding:56px 40px;background:#09090f;border:1px solid rgba(255,255,255,0.05);border-radius:12px;position:relative;overflow:hidden">
<div style="position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(34,211,238,0.3),transparent)"></div>
<span style="font-size:9px;color:rgba(34,211,238,0.6);letter-spacing:3px;font-weight:700">THREE WAYS TO DEPLOY</span>
<div style="font-size:36px;color:#fff;font-weight:700;font-family:Inter,system-ui,sans-serif;letter-spacing:-1.5px;margin-top:12px;line-height:1.1">Spec. Code. Knowledge.<br><span style="color:rgba(255,255,255,0.25)">Pick your path.</span></div>

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-top:32px">

<!-- OpenAPI -->
<div style="padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
<span style="font-size:18px;color:rgba(129,140,248,0.7);font-weight:700;font-family:Inter,sans-serif">01</span>
<span style="font-size:8px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:600">OPENAPI IMPORT</span>
</div>
<div style="font-size:13px;color:#fff;font-weight:600;font-family:Inter,sans-serif;margin-bottom:8px">Paste a spec URL</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35);line-height:1.6;font-family:Inter,sans-serif">The platform reads your OpenAPI spec, auto-discovers every endpoint, and deploys them as MCP tools. Zero code. Under 60 seconds.</div>
</div>

<!-- Manual API -->
<div style="padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
<span style="font-size:18px;color:rgba(34,211,238,0.7);font-weight:700;font-family:Inter,sans-serif">02</span>
<span style="font-size:8px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:600">MANUAL API</span>
</div>
<div style="font-size:13px;color:#fff;font-weight:600;font-family:Inter,sans-serif;margin-bottom:8px">Point to any endpoint</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35);line-height:1.6;font-family:Inter,sans-serif">No published spec? Name your base URL, configure auth, and add tools manually. Full control over what gets exposed.</div>
</div>

<!-- Agent Skills -->
<div style="padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
<span style="font-size:18px;color:rgba(52,211,153,0.7);font-weight:700;font-family:Inter,sans-serif">03</span>
<span style="font-size:8px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:600">AGENT SKILLS</span>
</div>
<div style="font-size:13px;color:#fff;font-weight:600;font-family:Inter,sans-serif;margin-bottom:8px">Write knowledge blocks</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35);line-height:1.6;font-family:Inter,sans-serif">Define procedures, playbooks, and FAQs as text. No API required. The AI discovers and uses them through progressive disclosure.</div>
</div>

</div>
</div>

## First steps

When you first create an account, an **Onboarding Banner** appears on the Dashboard. It walks you through three milestones:

1. **Deploy your first server** — Choose from OpenAPI Import (paste a spec URL), Manual API (name your endpoint), or Agent Skills (define text-based knowledge). Most users start with OpenAPI Import because it requires nothing more than a URL.
2. **Connect an AI client** — Use Quick Connect to link Claude Desktop, Cursor, VS Code, or any MCP-compatible client. You get a ready-to-paste Config JSON block.
3. **Observe your first request** — Ask the AI client to use one of your tools and watch the Live Feed update in real time.

The banner disappears automatically once your server begins receiving traffic.

---

<!-- Editorial break: Under the hood -->
<div style="margin:48px 0;padding:56px 40px;background:#09090f;border:1px solid rgba(255,255,255,0.05);border-radius:12px;position:relative;overflow:hidden">
<div style="position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(52,211,153,0.3),transparent)"></div>
<span style="font-size:9px;color:rgba(52,211,153,0.6);letter-spacing:3px;font-weight:700">ARCHITECTURE</span>
<div style="font-size:36px;color:#fff;font-weight:700;font-family:Inter,system-ui,sans-serif;letter-spacing:-1.5px;margin-top:12px;line-height:1.1">What happens when<br><span style="color:rgba(255,255,255,0.25)">an AI calls a tool.</span></div>
</div>

## The request lifecycle

When an AI client calls a tool through Vinkius Cloud, five things happen in sequence:

<!-- Request lifecycle flow -->
<div style="margin:32px 0">

<div style="display:flex;align-items:flex-start;gap:20px;margin-bottom:24px;padding:20px 24px;border-left:2px solid rgba(129,140,248,0.3);background:rgba(129,140,248,0.02);border-radius:0 8px 8px 0">
<span style="font-size:22px;color:rgba(129,140,248,0.5);font-weight:700;font-family:Inter,sans-serif;min-width:32px">01</span>
<div>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Authentication</div>
<div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px;line-height:1.6;font-family:Inter,sans-serif">The AI client sends an MCP tool invocation to your server's unique URL. The platform validates the connection token embedded in the path.</div>
</div>
</div>

<div style="display:flex;align-items:flex-start;gap:20px;margin-bottom:24px;padding:20px 24px;border-left:2px solid rgba(34,211,238,0.3);background:rgba(34,211,238,0.02);border-radius:0 8px 8px 0">
<span style="font-size:22px;color:rgba(34,211,238,0.5);font-weight:700;font-family:Inter,sans-serif;min-width:32px">02</span>
<div>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Protocol translation</div>
<div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px;line-height:1.6;font-family:Inter,sans-serif">The platform translates the MCP call into an HTTP request to your upstream API, injecting stored credentials (Bearer token, Basic Auth, or Custom Header) from the encrypted vault.</div>
</div>
</div>

<div style="display:flex;align-items:flex-start;gap:20px;margin-bottom:24px;padding:20px 24px;border-left:2px solid rgba(245,158,11,0.3);background:rgba(245,158,11,0.02);border-radius:0 8px 8px 0">
<span style="font-size:22px;color:rgba(245,158,11,0.5);font-weight:700;font-family:Inter,sans-serif;min-width:32px">03</span>
<div>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif">API execution</div>
<div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px;line-height:1.6;font-family:Inter,sans-serif">Your API processes the request and returns a response. This happens inside a V8 Isolate sandbox with no shared memory between servers.</div>
</div>
</div>

<div style="display:flex;align-items:flex-start;gap:20px;margin-bottom:24px;padding:20px 24px;border-left:2px solid rgba(34,197,94,0.3);background:rgba(34,197,94,0.02);border-radius:0 8px 8px 0">
<span style="font-size:22px;color:rgba(34,197,94,0.5);font-weight:700;font-family:Inter,sans-serif;min-width:32px">04</span>
<div>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Egress Firewall</div>
<div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px;line-height:1.6;font-family:Inter,sans-serif">The response passes through the security layer: DLP scans for PII and redacts it in-place; FinOps Guard checks payload size and truncates if needed. Credentials are never logged.</div>
</div>
</div>

<div style="display:flex;align-items:flex-start;gap:20px;padding:20px 24px;border-left:2px solid rgba(192,132,252,0.3);background:rgba(192,132,252,0.02);border-radius:0 8px 8px 0">
<span style="font-size:22px;color:rgba(192,132,252,0.5);font-weight:700;font-family:Inter,sans-serif;min-width:32px">05</span>
<div>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Delivery</div>
<div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px;line-height:1.6;font-family:Inter,sans-serif">The sanitized response is returned to the AI client as a structured MCP result. The entire lifecycle completes in milliseconds.</div>
</div>
</div>

</div>

---

## Key concepts

Before diving deeper into the platform, here are the concepts you'll encounter throughout the documentation:

| Concept | What it means |
|---|---|
| **MCP Server** | A hosted endpoint that exposes tools to AI clients via the Model Context Protocol |
| **Tool** | A single function that an AI model can discover and call — typically mapped to an API endpoint |
| **Connection Token** | A secret embedded in the MCP URL that authenticates AI client connections |
| **DLP** | Data Loss Prevention — automatically redacts PII from API responses before they reach AI models |
| **FinOps Guard** | Payload size control that prevents oversized API responses from consuming excessive tokens |
| **TOON** | Tool Object Optimized Notation — a compression format that reduces tool description size by 30-50% |
| **Egress Firewall** | The security layer that inspects every response before forwarding it to AI clients |
| **Agent Skills** | Text-based knowledge blocks (procedures, playbooks, FAQs) that AI agents can discover and use |

---

## Next steps

<!-- Editorial navigation cards -->
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:32px 0">

<a href="deploying-servers.html" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02);transition:border-color 0.2s">
<span style="font-size:8px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:600">DEPLOY</span>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Deploy your first server</div>
<div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Go live in under a minute with OpenAPI Import, Manual API, or Agent Skills.</div>
<span style="font-size:10px;color:rgba(129,140,248,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Start deploying →</span>
</a>

<a href="quick-connect.html" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02);transition:border-color 0.2s">
<span style="font-size:8px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:600">CONNECT</span>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Connect an AI client</div>
<div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Link Claude, Cursor, VS Code, or any MCP-compatible client in 30 seconds.</div>
<span style="font-size:10px;color:rgba(34,211,238,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Connect now →</span>
</a>

<a href="security/index.html" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02);transition:border-color 0.2s">
<span style="font-size:8px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:600">SECURITY</span>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Security and governance</div>
<div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Understand DLP, FinOps Guard, credential vault, and SSRF protection.</div>
<span style="font-size:10px;color:rgba(52,211,153,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Learn more →</span>
</a>

</div>

---

## Frequently Asked Questions

### What is Vinkius Cloud and how does it relate to MCP?
Vinkius Cloud is a managed runtime for Model Context Protocol (MCP) servers. It sits between your existing APIs and AI clients — handling protocol translation, authentication, data protection, and hosting so you don't need to build or maintain MCP infrastructure yourself.

### How long does it take to set up my first MCP server?
Most users go from sign-in to a live MCP server in under 60 seconds. The fastest path is OpenAPI Import: paste a spec URL, configure authentication, and click Deploy. The server is immediately accessible to AI clients.

### Which AI clients can connect to Vinkius Cloud MCP servers?
Any MCP-compatible client works, including Claude Desktop, Claude Code, Cursor, VS Code with GitHub Copilot, Windsurf, Cline, and OpenAI Codex. The platform provides a ready-to-paste Config JSON block and Cursor deep link for instant setup.

### Do I need an existing API to create an MCP server?
No. While OpenAPI Import and Manual API modes require an API, the Agent Skills mode lets you create MCP servers from pure text — procedures, playbooks, FAQs, and decision trees that AI agents can discover and follow without any API backend.

### What security features are included by default?
Every server automatically gets Data Loss Prevention (DLP) that redacts PII from responses, FinOps Guard that prevents token waste from oversized payloads, SSRF protection that blocks internal network access, and AES-256 credential encryption in an isolated vault.

### What does the Dashboard show?
The Dashboard provides real-time visibility into your entire MCP infrastructure: server count and status, total tools deployed, token consumption analytics, DLP redaction counts, FinOps savings, and a live feed of every tool execution with timestamps, latency, and HTTP status codes.
