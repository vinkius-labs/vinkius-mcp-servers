---
title: Manage MCP Servers — Fleet Overview, Monitoring & Configuration | Vinkius Cloud
description: Monitor, configure, and control your MCP servers from a single dashboard. View fleet-wide metrics, manage per-server settings, and access real-time observability with Vinkius Cloud.
head:
  - - meta
    - name: keywords
      content: manage MCP servers, MCP server fleet, MCP server monitoring, MCP dashboard, AI server management, MCP server configuration
  - - meta
    - property: og:title
      content: Manage MCP Servers — Fleet Overview & Configuration | Vinkius Cloud
  - - meta
    - property: og:description
      content: Monitor, configure, and control your MCP servers from a single dashboard. View fleet-wide metrics, manage per-server settings, and access real-time observability.
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How many MCP servers can I manage on Vinkius Cloud?","acceptedAnswer":{"@type":"Answer","text":"There is no hard limit on the number of MCP servers per account. Free plans allow up to 3 servers; paid plans scale to 10, 25, or unlimited servers depending on tier. Each server runs independently in its own V8 Isolate with separate metrics, tokens, and configuration."}},{"@type":"Question","name":"What metrics are available in the fleet overview?","acceptedAnswer":{"@type":"Answer","text":"The fleet overview shows eight real-time metrics: Requests 24h, P95 Latency, Error Rate, Avg Response, Slowest Tool, Busiest Tool, Active Clients, and Last Activity."}},{"@type":"Question","name":"Can I disable a server without deleting it?","acceptedAnswer":{"@type":"Answer","text":"Yes. Click the ONLINE/OFFLINE badge on any server to toggle its status. When disabled, the server stops accepting MCP requests but all tokens, tools, configuration, and deployment history are preserved."}},{"@type":"Question","name":"How do per-server settings work with global defaults?","acceptedAnswer":{"@type":"Answer","text":"Vinkius Cloud follows a global-to-per-server inheritance chain. Configure DLP patterns, FinOps Guard limits, and tool exposition once in Settings — every server inherits those defaults automatically. Then selectively override on individual servers when needed."}},{"@type":"Question","name":"Does Vinkius Cloud support multiple deployment methods?","acceptedAnswer":{"@type":"Answer","text":"Yes. You can deploy MCP servers via three methods: OpenAPI Import, Manual API, and Vurb.ts Framework. All three methods produce servers that work identically with AI clients."}},{"@type":"Question","name":"What AI clients are supported?","acceptedAnswer":{"@type":"Answer","text":"Any client that implements the MCP protocol. Built-in Quick Connect configuration is provided for Claude Desktop, Cursor, VS Code with Copilot, Windsurf, ChatGPT, Cline, Continue, Zed, and Antigravity."}}]}'
---

# Server Management

Monitor, configure, and control every MCP server you deploy — from a fleet-wide overview to individual server tabs.

---

## Infrastructure overview

The **Servers** page opens with a 4×2 metrics grid showing real-time performance across your entire fleet:

<!-- 4×2 infra stats grid -->
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1px;margin:24px 0;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.06);overflow:hidden">

<div style="padding:16px;background:#09090f">
<span style="font-size:9px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:600">REQUESTS 24H</span>
<div style="font-size:24px;color:rgba(255,255,255,0.9);font-weight:700;margin-top:8px;font-family:Inter,sans-serif">1,247</div>
<div style="font-size:9px;color:rgba(255,255,255,0.15);margin-top:4px;letter-spacing:1px">THROUGHPUT</div>
</div>

<div style="padding:16px;background:#09090f">
<span style="font-size:9px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:600">P95 LATENCY</span>
<div style="font-size:24px;color:rgba(255,255,255,0.9);font-weight:700;margin-top:8px;font-family:Inter,sans-serif">142</div>
<div style="font-size:9px;color:rgba(255,255,255,0.15);margin-top:4px;letter-spacing:1px">P95_MS</div>
</div>

<div style="padding:16px;background:#09090f">
<span style="font-size:9px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:600">ERROR RATE</span>
<div style="font-size:24px;color:rgba(52,211,153,0.8);font-weight:700;margin-top:8px;font-family:Inter,sans-serif">0%</div>
<div style="font-size:9px;color:rgba(255,255,255,0.15);margin-top:4px;letter-spacing:1px">ERROR_RATE</div>
</div>

<div style="padding:16px;background:#09090f">
<span style="font-size:9px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:600">AVG RESPONSE</span>
<div style="font-size:24px;color:rgba(255,255,255,0.9);font-weight:700;margin-top:8px;font-family:Inter,sans-serif">89</div>
<div style="font-size:9px;color:rgba(255,255,255,0.15);margin-top:4px;letter-spacing:1px">AVG_MS</div>
</div>

<div style="padding:16px;background:#09090f">
<span style="font-size:9px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:600">SLOWEST TOOL</span>
<div style="font-size:18px;color:rgba(139,92,246,0.7);font-weight:700;margin-top:8px;font-family:Inter,sans-serif">get_report</div>
<div style="font-size:9px;color:rgba(255,255,255,0.15);margin-top:4px;letter-spacing:1px">342MS</div>
</div>

<div style="padding:16px;background:#09090f">
<span style="font-size:9px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:600">BUSIEST TOOL</span>
<div style="font-size:18px;color:rgba(245,158,11,0.7);font-weight:700;margin-top:8px;font-family:Inter,sans-serif">list_users</div>
<div style="font-size:9px;color:rgba(255,255,255,0.15);margin-top:4px;letter-spacing:1px">891_CALLS</div>
</div>

<div style="padding:16px;background:#09090f">
<span style="font-size:9px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:600">ACTIVE CLIENTS</span>
<div style="font-size:24px;color:rgba(255,255,255,0.9);font-weight:700;margin-top:8px;font-family:Inter,sans-serif">3</div>
<div style="font-size:9px;color:rgba(255,255,255,0.15);margin-top:4px;letter-spacing:1px">CLIENTS_24H</div>
</div>

<div style="padding:16px;background:#09090f">
<span style="font-size:9px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:600">LAST ACTIVITY</span>
<div style="font-size:18px;color:rgba(255,255,255,0.9);font-weight:700;margin-top:8px;font-family:Inter,sans-serif">2m ago</div>
<div style="font-size:9px;color:rgba(255,255,255,0.15);margin-top:4px;letter-spacing:1px">LAST_REQ</div>
</div>

</div>

| Metric | Description |
|---|---|
| **Requests 24h** | Total MCP tool calls across all servers in the last 24 hours |
| **P95 Latency** | 95th percentile response time in milliseconds |
| **Error Rate** | Percentage of 4xx/5xx responses (green at 0%, amber at moderate, red above 5%) |
| **Avg Response** | Average response time across all tools |
| **Slowest Tool** | Tool with the highest average response time |
| **Busiest Tool** | Tool with the most calls in the period |
| **Active Clients** | Currently connected SSE clients across all servers |
| **Last Activity** | Timestamp of the most recent request |

---

## Server list

Below the stats grid, every deployed server appears as a clickable row. Each row displays:

<!-- Server list recreation -->
<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.06);overflow:hidden;background:#09090f;font-family:ui-monospace,monospace">

<!-- Server row 1 -->
<div style="display:flex;align-items:center;gap:16px;padding:12px 20px;border-bottom:1px solid rgba(255,255,255,0.04)">
<div style="width:36px;height:36px;border:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;flex-shrink:0">
<span style="font-size:14px;color:rgba(255,255,255,0.25)">S</span>
</div>
<div style="flex:1;min-width:0">
<div style="font-size:13px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">my-api-server</div>
<div style="font-size:11px;color:rgba(255,255,255,0.2);margin-top:2px">https://api.example.com · 3 SSE</div>
</div>
<div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
<span style="font-size:10px;padding:2px 8px;border:1px solid rgba(52,211,153,0.2);background:rgba(52,211,153,0.06);color:rgba(52,211,153,0.7);display:flex;align-items:center;gap:4px"><span style="display:inline-block;width:5px;height:5px;border-radius:50%;background:rgba(52,211,153,0.7)"></span> ONLINE</span>
<span style="font-size:10px;padding:2px 8px;border:1px solid rgba(255,255,255,0.08);color:rgba(255,255,255,0.3)">24 tools</span>
<span style="font-size:10px;padding:2px 8px;border:1px solid rgba(52,211,153,0.2);background:rgba(52,211,153,0.06);color:rgba(52,211,153,0.7)">DLP</span>
<span style="font-size:10px;padding:2px 8px;border:1px solid rgba(245,158,11,0.2);background:rgba(245,158,11,0.06);color:rgba(245,158,11,0.7)">FinOps</span>
</div>
<span style="font-size:14px;color:rgba(255,255,255,0.1)">→</span>
</div>

<!-- Server row 2 -->
<div style="display:flex;align-items:center;gap:16px;padding:12px 20px">
<div style="width:36px;height:36px;border:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;flex-shrink:0">
<span style="font-size:14px;color:rgba(255,255,255,0.25)">S</span>
</div>
<div style="flex:1;min-width:0">
<div style="font-size:13px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">skills-agent</div>
<div style="font-size:11px;color:rgba(255,255,255,0.2);margin-top:2px">Skills Server · 0 SSE</div>
</div>
<div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
<span style="font-size:10px;padding:2px 8px;border:1px solid rgba(255,255,255,0.08);color:rgba(255,255,255,0.3);display:flex;align-items:center;gap:4px"><span style="display:inline-block;width:5px;height:5px;border-radius:50%;background:rgba(255,255,255,0.3)"></span> OFFLINE</span>
<span style="font-size:10px;padding:2px 8px;border:1px solid rgba(255,255,255,0.08);color:rgba(255,255,255,0.3)">8 tools</span>
<span style="font-size:10px;padding:2px 8px;border:1px solid rgba(139,92,246,0.2);background:rgba(139,92,246,0.06);color:rgba(139,92,246,0.7)">LISTED</span>
</div>
<span style="font-size:14px;color:rgba(255,255,255,0.1)">→</span>
</div>

</div>

### Server badges

| Badge | Meaning |
|---|---|
| **ONLINE / OFFLINE** | Server status with green/gray dot indicator |
| **N tools** | Total number of MCP tools registered |
| **DLP** | Data Loss Prevention is active on this server |
| **FinOps** | FinOps Guard is active on this server |
| **LISTED** | Server is published on the Marketplace |

Click any server row to open the server detail view.

---

## Server detail tabs

Each server has five management tabs:

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:32px 0">

<a href="/servers/dashboard" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(129,140,248,0.12);border-radius:8px;background:rgba(129,140,248,0.02)">
<span style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:600">DASHBOARD</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Server Dashboard</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Real-time stats, live feed, Quick Connect, and server configuration.</div>
<span style="font-size:13px;color:rgba(129,140,248,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">View details →</span>
</a>

<a href="/servers/tokens" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(34,211,238,0.12);border-radius:8px;background:rgba(34,211,238,0.02)">
<span style="font-size:11px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:600">TOKENS</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Connection Tokens</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Generate, name, and revoke HMAC-SHA256 tokens with show-once disclosure.</div>
<span style="font-size:13px;color:rgba(34,211,238,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Manage tokens →</span>
</a>

<a href="/servers/tools" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(52,211,153,0.12);border-radius:8px;background:rgba(52,211,153,0.02)">
<span style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:600">TOOLS</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">MCP Tools</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Toggle, search, and edit tools in flat or grouped view.</div>
<span style="font-size:13px;color:rgba(52,211,153,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Browse tools →</span>
</a>

<a href="/servers/deployments" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(139,92,246,0.12);border-radius:8px;background:rgba(139,92,246,0.02)">
<span style="font-size:11px;color:rgba(139,92,246,0.5);letter-spacing:2px;font-weight:600">DEPLOYMENTS</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Edge Deployments</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Vurb.ts deployment history with bundle hashes and active tracking.</div>
<span style="font-size:13px;color:rgba(139,92,246,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">View history →</span>
</a>

<a href="/servers/logs" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02);grid-column:span 2">
<span style="font-size:11px;color:rgba(255,255,255,0.3);letter-spacing:2px;font-weight:600">AUDIT</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Audit Logs</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Per-server request log with tool names, status codes, response times, DLP redaction counts, and buyer privacy guard.</div>
<span style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:12px;display:block;font-family:Inter,sans-serif">View logs →</span>
</a>

</div>

---

## Frequently Asked Questions

### How many MCP servers can I manage on Vinkius Cloud?
There is no hard limit on the number of MCP servers per account. Free plans allow up to 3 servers; paid plans scale to 10, 25, or unlimited servers depending on tier. Each server runs independently in its own V8 Isolate with separate metrics, tokens, and configuration.

### What metrics are available in the fleet overview?
The fleet overview shows eight real-time metrics: Requests 24h (total tool calls), P95 Latency (milliseconds), Error Rate (percentage of 4xx/5xx), Avg Response (average latency), Slowest Tool (bottleneck identification), Busiest Tool (most-called tool), Active Clients (connected SSE sessions), and Last Activity (time since the most recent request).

### Can I disable a server without deleting it?
Yes. Click the ONLINE/OFFLINE badge on any server to toggle its status. When disabled, the server stops accepting MCP requests and existing SSE connections are terminated, but all tokens, tools, configuration, and deployment history are preserved. Re-enable it at any time with a single click.

### How do per-server settings work with global defaults?
Vinkius Cloud follows a global-to-per-server inheritance chain. Configure DLP patterns, FinOps Guard limits, and tool exposition once in Settings — every server inherits those defaults automatically. Then selectively override on individual servers when needed, without affecting the fleet-wide configuration.

### Does Vinkius Cloud support multiple deployment methods?
Yes. You can deploy MCP servers via three methods: OpenAPI Import (paste a Swagger/OpenAPI URL), Manual API (define endpoints by hand for internal APIs without published specs), and Vurb.ts Framework (write structured MCP tools in TypeScript and deploy to the edge). All three methods produce servers that work identically with AI clients.

### What AI clients are supported?
Any client that implements the MCP protocol. Built-in Quick Connect configuration is provided for Claude Desktop, Cursor, VS Code with Copilot, Windsurf, ChatGPT, Cline, Continue, Zed, and Antigravity. Paste the SSE URL and you are connected.
