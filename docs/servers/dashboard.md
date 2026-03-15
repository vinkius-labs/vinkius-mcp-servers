---
title: MCP Server Dashboard — Real-Time Stats, Live Feed & Configuration | Vinkius Cloud
description: Monitor MCP server performance in real time. View request throughput, P95 latency, error rates, live tool execution feeds, Quick Connect setup, and per-server configuration — all from a single dashboard.
head:
  - - meta
    - name: keywords
      content: MCP server dashboard, MCP monitoring, real-time MCP stats, AI tool execution feed, MCP server configuration, server observability
  - - meta
    - property: og:title
      content: MCP Server Dashboard — Real-Time Stats & Live Feed | Vinkius Cloud
  - - meta
    - property: og:description
      content: Monitor MCP server performance in real time. View request throughput, P95 latency, error rates, live tool execution feeds, and per-server configuration.
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What information does the MCP server dashboard show?","acceptedAnswer":{"@type":"Answer","text":"The dashboard provides a real-time command center with eight infrastructure metrics, a live streaming feed of tool executions, Quick Connect integration, and full server configuration management."}},{"@type":"Question","name":"Does the dashboard update in real time?","acceptedAnswer":{"@type":"Answer","text":"Yes. The infrastructure stats refresh automatically when you return to the Dashboard tab. The live request feed streams tool executions as they happen via SSE, with a green pulse indicator confirming real-time data flow."}},{"@type":"Question","name":"Can I configure DLP and FinOps Guard per server from the dashboard?","acceptedAnswer":{"@type":"Answer","text":"Yes. Click the Edit button to open the server configuration modal. You can toggle DLP Protection and FinOps Guard per server, add custom DLP patterns, set max payload size and bytes limits, and configure tool exposition mode."}},{"@type":"Question","name":"What is the Quick Connect feature?","acceptedAnswer":{"@type":"Answer","text":"Quick Connect generates a ready-to-paste MCP configuration for any AI client. It provides the SSE URL, JSON config block, and client-specific instructions for Claude Desktop, Cursor, VS Code with Copilot, Windsurf, and Antigravity."}},{"@type":"Question","name":"Can I disable a server without deleting it?","acceptedAnswer":{"@type":"Answer","text":"Yes. Click the ONLINE/OFFLINE badge to instantly toggle server status. When disabled, the server stops accepting MCP requests but all configuration, tokens, tools, and deployment history are preserved."}},{"@type":"Question","name":"What happens when I delete a server with Marketplace subscribers?","acceptedAnswer":{"@type":"Answer","text":"The platform warns with the active subscriber count and last billing cycle end date. A force-scheduled deletion waits until all current billing cycles end before removing the server."}}]}'
---

# Server Dashboard

The default tab when opening any server. A real-time command center for monitoring performance, watching tool executions as they happen, and managing server configuration — all from a single view.

Most MCP platforms give you a list of servers and nothing else. Vinkius Cloud provides per-server observability at the level you would expect from a production infrastructure platform.

---

## Server banner

The banner at the top of every server detail view shows identity, status, and governance at a glance:

<!-- Server banner recreation -->
<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#09090f;padding:20px 24px;font-family:ui-monospace,monospace">

<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:16px">
<div style="min-width:0;flex:1">
<span style="font-size:9px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:600">SERVER</span>
<div style="font-size:22px;color:#fff;font-family:Inter,system-ui,sans-serif;font-weight:700;margin-top:4px;letter-spacing:-0.5px">my-api-server</div>
</div>
<div style="display:flex;align-items:center;gap:8px;flex-shrink:0;padding-top:4px">
<div style="padding:4px 10px;background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.2);border-radius:4px;font-size:11px;color:rgba(245,158,11,0.7);font-weight:600;font-family:Inter,sans-serif">Quick Connect</div>
<div style="padding:4px 8px;border:1px solid rgba(255,255,255,0.08);border-radius:4px;font-size:11px;color:rgba(255,255,255,0.3)">Sync</div>
<div style="padding:4px 8px;border:1px solid rgba(255,255,255,0.08);border-radius:4px;font-size:11px;color:rgba(255,255,255,0.3)">Edit</div>
<div style="padding:4px 8px;border:1px solid rgba(239,68,68,0.15);border-radius:4px;font-size:11px;color:rgba(239,68,68,0.4)">Delete</div>
</div>
</div>

<div style="display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:8px">
<span style="font-size:13px;color:rgba(255,255,255,0.2)">https://api.example.com · 3 SSE</span>
<div style="display:flex;align-items:center;gap:6px">
<span style="font-size:10px;padding:3px 8px;border:1px solid rgba(52,211,153,0.2);background:rgba(52,211,153,0.06);color:rgba(52,211,153,0.7);display:flex;align-items:center;gap:4px"><span style="display:inline-block;width:5px;height:5px;border-radius:50%;background:rgba(52,211,153,0.7)"></span> ONLINE</span>
<span style="font-size:10px;padding:3px 8px;border:1px solid rgba(255,255,255,0.08);color:rgba(255,255,255,0.3)">24 tools</span>
<span style="font-size:10px;padding:3px 8px;border:1px solid rgba(255,255,255,0.08);color:rgba(255,255,255,0.3)">4 groups</span>
<span style="font-size:10px;padding:3px 8px;border:1px solid rgba(52,211,153,0.2);background:rgba(52,211,153,0.06);color:rgba(52,211,153,0.7)">DLP</span>
<span style="font-size:10px;padding:3px 8px;border:1px solid rgba(245,158,11,0.2);background:rgba(245,158,11,0.06);color:rgba(245,158,11,0.7)">FinOps</span>
</div>
</div>
</div>

### Banner actions

| Action | Description |
|---|---|
| **Quick Connect** | Generates a ready-to-paste MCP configuration for AI clients |
| **Sync** | Re-imports tools from the upstream OpenAPI spec (OpenAPI servers only) |
| **Edit** | Opens the server configuration modal for per-server overrides |
| **Delete** | Permanently removes the server, tokens, and deployment history |

### Status badges

| Badge | Description |
|---|---|
| **ONLINE / OFFLINE** | Clickable toggle — disable a server instantly without deleting it |
| **N tools** | Total registered MCP tools |
| **N groups** | Number of tag groups (grouped mode) or `FLAT` indicator |
| **DLP** | Data Loss Prevention is active |
| **FinOps** | FinOps Guard is active |

---

## Infrastructure stats

A 4×2 real-time metrics grid, identical in structure to the fleet overview but scoped to the individual server:

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

| Metric | Insight |
|---|---|
| **Requests 24h** | Total tool calls. Spot unexpected spikes or drops instantly. |
| **P95 Latency** | Worst-case latency for 95% of requests. Critical for SLA compliance. |
| **Error Rate** | Color-coded: green at 0%, amber at moderate, red above 5%. |
| **Avg Response** | Baseline for performance regression detection. |
| **Slowest Tool** | Identifies the bottleneck tool by average response time. |
| **Busiest Tool** | Identifies the most-called tool — useful for capacity planning. |
| **Active Clients** | Currently connected SSE sessions — see who is consuming your server. |
| **Last Activity** | Time since the last request — quickly detect stale or abandoned servers. |

Stats refresh automatically when you return to the Dashboard tab.

---

## Live request feed

Below the stats grid, a real-time streaming feed displays tool executions as they happen. Each entry shows:

<!-- Live feed recreation -->
<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#09090f;font-family:ui-monospace,monospace">

<div style="padding:12px 20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<span style="font-size:9px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:600">LIVE FEED</span>
</div>

<!-- Feed rows -->
<div style="padding:0 20px">
<div style="display:flex;gap:0;padding:6px 0;font-size:12px;border-bottom:1px solid rgba(255,255,255,0.03)">
<span style="color:rgba(255,255,255,0.2);width:70px;flex-shrink:0">14:23:01</span>
<span style="color:rgba(255,255,255,0.5);flex:1">list_users</span>
<span style="color:rgba(255,255,255,0.35);width:100px;text-align:right">QUERY</span>
<span style="color:rgba(255,255,255,0.3);width:70px;text-align:right">87ms</span>
<span style="color:rgba(52,211,153,0.6);width:40px;text-align:right">200</span>
</div>

<div style="display:flex;gap:0;padding:6px 0;font-size:12px;border-bottom:1px solid rgba(255,255,255,0.03)">
<span style="color:rgba(255,255,255,0.2);width:70px;flex-shrink:0">14:22:58</span>
<span style="color:rgba(255,255,255,0.5);flex:1">create_order</span>
<span style="color:rgba(255,255,255,0.35);width:100px;text-align:right">MUTATION</span>
<span style="color:rgba(255,255,255,0.3);width:70px;text-align:right">234ms</span>
<span style="color:rgba(52,211,153,0.6);width:40px;text-align:right">201</span>
</div>

<div style="display:flex;gap:0;padding:6px 0;font-size:12px;border-bottom:1px solid rgba(255,255,255,0.03)">
<span style="color:rgba(255,255,255,0.2);width:70px;flex-shrink:0">14:22:45</span>
<span style="color:rgba(255,255,255,0.5);flex:1">delete_user</span>
<span style="color:rgba(239,68,68,0.5);width:100px;text-align:right">DESTRUCTIVE</span>
<span style="color:rgba(255,255,255,0.3);width:70px;text-align:right">12ms</span>
<span style="color:rgba(245,158,11,0.6);width:40px;text-align:right">403</span>
</div>

<div style="display:flex;gap:0;padding:6px 0;font-size:12px">
<span style="color:rgba(255,255,255,0.2);width:70px;flex-shrink:0">14:22:30</span>
<span style="color:rgba(255,255,255,0.5);flex:1">get_report</span>
<span style="color:rgba(255,255,255,0.35);width:100px;text-align:right">QUERY</span>
<span style="color:rgba(255,255,255,0.3);width:70px;text-align:right">342ms</span>
<span style="color:rgba(52,211,153,0.6);width:40px;text-align:right">200</span>
</div>
</div>

<div style="padding:6px 20px;display:flex;justify-content:space-between;font-size:10px;color:rgba(255,255,255,0.12)">
<span>TOOL_EXECUTIONS</span>
<span style="display:flex;align-items:center;gap:6px">STREAMING <span style="width:6px;height:6px;border-radius:50%;background:rgba(52,211,153,0.6);display:inline-block"></span></span>
</div>

</div>

The feed columns:

| Column | Description |
|---|---|
| **Timestamp** | When the tool was called |
| **Tool Name** | Which MCP tool was executed |
| **Semantic Verb** | `QUERY` (read), `MUTATION` (write), `DESTRUCTIVE` (delete) — color-coded red for destructive operations |
| **Latency** | Response time in milliseconds |
| **Status Code** | HTTP response: green (2xx), amber (4xx), red (5xx) |

The streaming indicator (green pulse dot) confirms data is updating in real time. The feed shows the 10 most recent executions and refreshes on every tab switch.

### Marketplace privacy guard

When a server has an active Marketplace listing, the live feed is replaced with a privacy notice. This prevents sellers from seeing individual buyer request data — request details are never loaded into the browser, not even accessible via DevTools.

---

## Quick Connect

The one-click integration point. Quick Connect generates a ready-to-paste configuration for any MCP-compatible AI client:

```json
{
  "mcpServers": {
    "my-api-server": {
      "url": "https://edge.vinkius.com/{token}/mcp"
    }
  }
}
```

Paste this into Claude Desktop, Cursor, Windsurf, VS Code with Copilot, or any client that supports the MCP protocol. The URL includes your connection token for authenticated access.

The Quick Connect modal provides:

- **SSE URL** — The complete endpoint URL
- **JSON Config** — Copy-paste configuration block
- **Client selector** — See integration instructions for popular AI clients

::: tip
Quick Connect is also available from the token creation modal. Generate a token and immediately get the configuration — no extra steps required.
:::

---

## Server configuration

The **Edit** modal opens inline from the dashboard. This is where per-server governance overrides are applied:

<!-- Edit modal recreation -->
<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#09090f;padding:20px 24px">

<div style="font-size:14px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-bottom:16px">Server Configuration</div>

<div style="display:grid;grid-template-columns:140px 1fr;gap:12px;font-size:12px;font-family:ui-monospace,monospace">

<span style="color:rgba(255,255,255,0.3);padding:8px 0">Name</span>
<div style="padding:6px 12px;border:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.02);color:rgba(255,255,255,0.6)">my-api-server</div>

<span style="color:rgba(255,255,255,0.3);padding:8px 0">Description</span>
<div style="padding:6px 12px;border:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.02);color:rgba(255,255,255,0.4)">Production REST API</div>

<span style="color:rgba(255,255,255,0.3);padding:8px 0">Base URL</span>
<div style="padding:6px 12px;border:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.02);color:rgba(255,255,255,0.4)">https://api.example.com</div>

<span style="color:rgba(255,255,255,0.3);padding:8px 0">DLP Protection</span>
<div style="display:flex;align-items:center;gap:8px;padding:8px 0">
<span style="display:inline-block;width:28px;height:16px;border-radius:8px;background:rgba(34,211,238,0.8);position:relative"><span style="display:block;width:12px;height:12px;border-radius:50%;background:white;position:absolute;right:2px;top:2px"></span></span>
<span style="color:rgba(52,211,153,0.6)">Enabled</span>
</div>

<span style="color:rgba(255,255,255,0.3);padding:8px 0">FinOps Guard</span>
<div style="display:flex;align-items:center;gap:8px;padding:8px 0">
<span style="display:inline-block;width:28px;height:16px;border-radius:8px;background:rgba(34,211,238,0.8);position:relative"><span style="display:block;width:12px;height:12px;border-radius:50%;background:white;position:absolute;right:2px;top:2px"></span></span>
<span style="color:rgba(52,211,153,0.6)">Enabled</span>
</div>

<span style="color:rgba(255,255,255,0.3);padding:8px 0">Max Array Items</span>
<div style="padding:6px 12px;border:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.02);color:rgba(255,255,255,0.4)">50</div>

<span style="color:rgba(255,255,255,0.3);padding:8px 0">Tool Exposition</span>
<div style="padding:6px 12px;border:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.02);color:rgba(255,255,255,0.4)">Auto</div>

</div>
</div>

### Configurable settings

| Setting | Global Default | Per-Server Override |
|---|---|---|
| **Name** | Set at creation | Editable |
| **Description** | Optional | Editable |
| **Base URL** | Set at creation | Editable (except Agent Skills) |
| **DLP Protection** | Inherits from [Settings → Data Shielding](/settings/dlp) | Toggle + custom patterns per server |
| **DLP Patterns** | Inherits global patterns | Add or replace patterns per server |
| **FinOps Guard** | Inherits from [Settings → FinOps Guard](/settings/finops) | Toggle per server |
| **Max Payload Size** | Inherits global limit | Custom slider per server |
| **Max Payload Bytes** | Inherits global OOM Shield | Custom limit per server |
| **Tool Exposition** | From [MCP Defaults](/settings/mcp-defaults) | Flat, Grouped, or None |

::: info Inheritance model
Settings follow a **global-to-per-server** chain. When a per-server override is not set, the global default from Settings applies. This means you can configure governance once and have it apply to every server — then selectively override where needed.
:::

---

## Server lifecycle actions

Beyond editing, the dashboard provides critical lifecycle controls:

### Status toggle

Click the **ONLINE / OFFLINE** badge to instantly enable or disable a server. When disabled:

- The server stops accepting MCP requests
- Existing SSE connections are terminated
- The server remains in your account and can be re-enabled anytime
- All tokens, tools, and configuration are preserved

### Kill all connections

Force-close all active SSE connections immediately. Useful for emergencies or maintenance windows where you need to guarantee zero active sessions before making changes.

### Sync tools

For OpenAPI-based servers, the **Sync** button re-reads the upstream OpenAPI specification and updates the tool list. New endpoints become new tools, removed endpoints are deleted, and modified endpoints are updated.

The sync process runs asynchronously with a 3-second polling delay to account for large API specs.

### Delete server

Permanently and irreversibly removes the server. If the server has active Marketplace subscribers, the platform warns with the active subscriber count and last billing cycle end date before allowing deletion.

For servers with subscribers, a **force-scheduled deletion** waits until all current billing cycles end before removing the server.

---

## Next steps

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:32px 0">

<a href="/servers/tokens" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(34,211,238,0.12);border-radius:8px;background:rgba(34,211,238,0.02)">
<span style="font-size:11px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:600">TOKENS</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Connection Tokens</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Generate and manage access tokens.</div>
<span style="font-size:13px;color:rgba(34,211,238,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Manage →</span>
</a>

<a href="/servers/tools" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(52,211,153,0.12);border-radius:8px;background:rgba(52,211,153,0.02)">
<span style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:600">TOOLS</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">MCP Tools</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Toggle, search, and edit tools.</div>
<span style="font-size:13px;color:rgba(52,211,153,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Browse →</span>
</a>

</div>

---

## Frequently Asked Questions

### What information does the MCP server dashboard show?
The dashboard provides a real-time command center with eight infrastructure metrics (requests, P95 latency, error rate, avg response, slowest tool, busiest tool, active clients, last activity), a live streaming feed of tool executions, Quick Connect integration, and full server configuration management.

### Does the dashboard update in real time?
Yes. The infrastructure stats refresh automatically when you return to the Dashboard tab. The live request feed streams tool executions as they happen via SSE (Server-Sent Events), with a green pulse indicator confirming real-time data flow.

### Can I configure DLP and FinOps Guard per server from the dashboard?
Yes. Click the Edit button to open the server configuration modal. You can toggle DLP Protection and FinOps Guard per server, add custom DLP patterns, set max payload size and bytes limits, and configure tool exposition mode — all without leaving the dashboard.

### What is the Quick Connect feature?
Quick Connect generates a ready-to-paste MCP configuration for any AI client. It provides the SSE URL, JSON config block, and client-specific instructions for Claude Desktop, Cursor, VS Code with Copilot, Windsurf, and Antigravity. One click to copy, paste into your client, done.

### Can I disable a server without deleting it?
Yes. Click the ONLINE/OFFLINE badge to instantly toggle server status. When disabled, the server stops accepting MCP requests and existing SSE connections are terminated, but all configuration, tokens, tools, and deployment history are preserved.

### What happens when I delete a server with Marketplace subscribers?
The platform warns with the active subscriber count and last billing cycle end date. A force-scheduled deletion waits until all current billing cycles end before removing the server. This protects buyer subscriptions from abrupt service termination.
