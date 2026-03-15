---
title: MCP Audit Logs — Per-Server Request Logging with DLP Tracking | Vinkius Cloud
description: Track every MCP tool call with structured audit logs. View tool names, semantic verbs (QUERY, MUTATION, DESTRUCTIVE), response latency, DLP redaction counts, and client identification via named tokens — with plan-based retention.
head:
  - - meta
    - name: keywords
      content: MCP audit log, MCP request logging, AI tool call tracking, MCP DLP tracking, MCP compliance log, server observability
  - - meta
    - property: og:title
      content: MCP Audit Logs — Per-Server Request Logging | Vinkius Cloud
  - - meta
    - property: og:description
      content: Track every MCP tool call with structured audit logs. View tool names, semantic verbs, response latency, DLP redaction counts, and client identification.
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does the MCP audit log track?","acceptedAnswer":{"@type":"Answer","text":"Every MCP tool call is logged with seven fields: timestamp, tool name, semantic verb (QUERY, MUTATION, DESTRUCTIVE), HTTP status code, response latency, DLP redaction count, and the named connection token that made the request."}},{"@type":"Question","name":"How is client identification handled in the audit log?","acceptedAnswer":{"@type":"Answer","text":"The Client column shows the name of the connection token used for the request. Since Vinkius tokens are named per-client (e.g., cursor-main, claude-prod), you can immediately identify which AI client made each request."}},{"@type":"Question","name":"What is the DLP column in the audit log?","acceptedAnswer":{"@type":"Answer","text":"The DLP column shows how many fields were redacted by Data Shielding before the response reached the AI client. This provides per-request evidence of data protection for compliance audits."}},{"@type":"Question","name":"How long are audit logs retained?","acceptedAnswer":{"@type":"Answer","text":"Retention depends on your plan: Free and Developer get real-time feed only, Team provides 7-day searchable history, and Business provides 30-day immutable logs."}},{"@type":"Question","name":"Can sellers see buyer logs on the Marketplace?","acceptedAnswer":{"@type":"Answer","text":"No. When a server has an active Marketplace listing, the Audit Logs tab activates a privacy guard. Request data is never loaded into the browser. Sellers see only aggregate metrics on the Dashboard."}},{"@type":"Question","name":"What are semantic verbs in the audit log?","acceptedAnswer":{"@type":"Answer","text":"Semantic verbs classify each tool call by impact: QUERY (GET — read-only), MUTATION (POST, PUT, PATCH — writes), and DESTRUCTIVE (DELETE — irreversible). Destructive operations are highlighted in red."}}]}'
---

# Audit Logs

Every MCP tool call that passes through your server is recorded in a structured audit log. Track which tool was called, by which client, with what result, the response latency, and whether DLP (Data Loss Prevention) redacted any fields — all from a single tab.

Most MCP platforms offer no built-in observability. If you need audit trails, you are expected to integrate external logging solutions like Datadog, Splunk, or ELK. Vinkius Cloud includes per-server audit logging as a core feature — purpose-built for MCP with semantic verb classification, DLP redaction tracking, client identification via named tokens, and plan-based retention policies.

---

## Log table

Logs are displayed in reverse chronological order with seven columns:

<!-- Log table UI recreation -->
<div style="margin:24px 0;font-family:ui-monospace,monospace">

<div style="font-size:9px;color:rgba(139,92,246,0.5);letter-spacing:2px;font-weight:600;margin-bottom:12px">AUDIT LOG</div>

<div style="border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#020202">

<!-- Header -->
<div style="display:flex;gap:0;padding:6px 16px;font-size:10px;color:rgba(255,255,255,0.2);border-bottom:1px solid rgba(255,255,255,0.06);letter-spacing:1px">
<span style="width:140px;flex-shrink:0">TIMESTAMP</span>
<span style="flex:1">TOOL</span>
<span style="width:90px;text-align:right">VERB</span>
<span style="width:50px;text-align:right">CODE</span>
<span style="width:70px;text-align:right">TIME</span>
<span style="width:40px;text-align:right">DLP</span>
<span style="width:100px;text-align:right">CLIENT</span>
</div>

<!-- Row 1: successful query -->
<div style="display:flex;gap:0;padding:6px 16px;font-size:12px;border-bottom:1px solid rgba(255,255,255,0.03)">
<span style="width:140px;flex-shrink:0;color:rgba(255,255,255,0.2)">2025-03-14 16:42:31</span>
<span style="flex:1;color:rgba(255,255,255,0.5)">list_users</span>
<span style="width:90px;text-align:right;color:rgba(255,255,255,0.35)">QUERY</span>
<span style="width:50px;text-align:right;color:rgba(52,211,153,0.6)">200</span>
<span style="width:70px;text-align:right;color:rgba(255,255,255,0.3)">87ms</span>
<span style="width:40px;text-align:right;color:rgba(245,158,11,0.6)">3</span>
<span style="width:100px;text-align:right;color:rgba(255,255,255,0.2)">cursor-main</span>
</div>

<!-- Row 2: successful mutation -->
<div style="display:flex;gap:0;padding:6px 16px;font-size:12px;border-bottom:1px solid rgba(255,255,255,0.03)">
<span style="width:140px;flex-shrink:0;color:rgba(255,255,255,0.2)">2025-03-14 16:41:15</span>
<span style="flex:1;color:rgba(255,255,255,0.5)">create_order</span>
<span style="width:90px;text-align:right;color:rgba(255,255,255,0.35)">MUTATION</span>
<span style="width:50px;text-align:right;color:rgba(52,211,153,0.6)">201</span>
<span style="width:70px;text-align:right;color:rgba(255,255,255,0.3)">234ms</span>
<span style="width:40px;text-align:right;color:rgba(255,255,255,0.15)">0</span>
<span style="width:100px;text-align:right;color:rgba(255,255,255,0.2)">claude-prod</span>
</div>

<!-- Row 3: failed destructive -->
<div style="display:flex;gap:0;padding:6px 16px;font-size:12px;border-bottom:1px solid rgba(255,255,255,0.03)">
<span style="width:140px;flex-shrink:0;color:rgba(255,255,255,0.2)">2025-03-14 16:40:58</span>
<span style="flex:1;color:rgba(255,255,255,0.5)">delete_user</span>
<span style="width:90px;text-align:right;color:rgba(239,68,68,0.5)">DESTRUCTIVE</span>
<span style="width:50px;text-align:right;color:rgba(245,158,11,0.6)">403</span>
<span style="width:70px;text-align:right;color:rgba(255,255,255,0.3)">12ms</span>
<span style="width:40px;text-align:right;color:rgba(255,255,255,0.15)">0</span>
<span style="width:100px;text-align:right;color:rgba(255,255,255,0.2)">cursor-main</span>
</div>

<!-- Row 4: query with DLP -->
<div style="display:flex;gap:0;padding:6px 16px;font-size:12px">
<span style="width:140px;flex-shrink:0;color:rgba(255,255,255,0.2)">2025-03-14 16:39:44</span>
<span style="flex:1;color:rgba(255,255,255,0.5)">get_customer</span>
<span style="width:90px;text-align:right;color:rgba(255,255,255,0.35)">QUERY</span>
<span style="width:50px;text-align:right;color:rgba(52,211,153,0.6)">200</span>
<span style="width:70px;text-align:right;color:rgba(255,255,255,0.3)">145ms</span>
<span style="width:40px;text-align:right;color:rgba(245,158,11,0.6)">7</span>
<span style="width:100px;text-align:right;color:rgba(255,255,255,0.2)">claude-prod</span>
</div>

<!-- Footer -->
<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 16px;font-size:10px;color:rgba(255,255,255,0.12)">
<span>RETENTION_30D</span>
<div style="display:flex;align-items:center;gap:6px">
<span style="color:rgba(255,255,255,0.1)">&#x25C0;</span>
<span style="color:rgba(255,255,255,0.25)">1</span>
<span style="color:rgba(255,255,255,0.1)">&#x25B6;</span>
</div>
</div>

</div>
</div>

---

## Log fields

Each entry captures the complete context of an MCP tool call:

| Field | Description |
|---|---|
| **Timestamp** | When the request was processed (`YYYY-MM-DD HH:mm:ss`) |
| **Tool** | Which MCP tool was called |
| **Verb** | Semantic classification: `QUERY`, `MUTATION`, or `DESTRUCTIVE` |
| **Code** | HTTP status code from the upstream API, color-coded by range |
| **Time** | Response latency in milliseconds |
| **DLP** | Number of fields redacted by Data Shielding — highlighted amber when > 0 |
| **Client** | Named connection token that made the request (identifies the client/environment) |

Each entry also stores the **HTTP method**, **error message** (when applicable), and full **tool reference** for forensic analysis.

### Status code colors

| Range | Color | Meaning |
|---|---|---|
| **2xx** | <span style="color:rgba(52,211,153,0.8)">Green</span> | Successful response |
| **4xx** | <span style="color:rgba(245,158,11,0.8)">Amber</span> | Client error (auth, validation, not found) |
| **5xx** | <span style="color:rgba(239,68,68,0.8)">Red</span> | Server error (upstream failure) |

### Semantic verbs

Verbs are derived from the underlying HTTP method:

| Verb | HTTP Methods | Color |
|---|---|---|
| **QUERY** | `GET` | Neutral |
| **MUTATION** | `POST`, `PUT`, `PATCH` | Neutral |
| **DESTRUCTIVE** | `DELETE` | <span style="color:rgba(239,68,68,0.6)">Red</span> |

This classification helps you quickly identify potentially dangerous operations in the log stream.

---

## DLP redaction tracking

The **DLP** column shows how many fields were redacted by Data Shielding before the response reached the AI client. When the count is greater than zero, the number is highlighted in amber.

This gives you visibility into how effectively your data protection rules are working — which tools triggered redactions, how often, and for which clients.

::: info Why this matters for compliance
Regulatory frameworks like SOC 2, GDPR, and HIPAA require evidence that sensitive data is protected during processing. The DLP column provides a per-request audit trail of redactions, directly supporting compliance audits without additional tooling.
:::

---

## Client identification

The **Client** column shows the **name** of the connection token used for the request — not a generic session ID. Since Vinkius tokens are named per-client (e.g., `cursor-main`, `claude-prod`, `ci-pipeline`), you can immediately identify which AI client or environment made each request.

This is significantly more useful than raw token hashes or IP addresses: when a destructive operation fails, you know exactly which client attempted it and can take action.

---

## Plan-based access

Audit log retention varies by subscription plan:

<!-- Plan access UI recreations -->
<div style="margin:24px 0;display:grid;grid-template-columns:1fr 1fr;gap:12px">

<!-- Free/Developer: upgrade prompt -->
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:8px;background:#020202;padding:24px;text-align:center;font-family:ui-monospace,monospace">
<div style="color:rgba(255,255,255,0.1);font-size:24px;margin-bottom:12px">&#x1F512;</div>
<div style="font-size:12px;color:rgba(255,255,255,0.35);margin-bottom:8px">Your plan includes real-time feed only</div>
<div style="font-size:11px;color:rgba(255,255,255,0.2);margin-bottom:12px;line-height:1.5">Upgrade to Team or Business for persisted audit logs with retention.</div>
<div style="font-size:11px;color:rgba(6,182,212,0.7);display:flex;align-items:center;justify-content:center;gap:4px">Upgrade Plan &#x2197;</div>
<div style="font-size:10px;color:rgba(255,255,255,0.1);margin-top:12px;letter-spacing:1px">FREE / DEVELOPER</div>
</div>

<!-- Team/Business: full log table -->
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:8px;background:#020202;padding:24px;text-align:center;font-family:ui-monospace,monospace">
<div style="color:rgba(52,211,153,0.5);font-size:24px;margin-bottom:12px">&#x2705;</div>
<div style="font-size:12px;color:rgba(255,255,255,0.5);margin-bottom:8px">Full audit log with retention</div>
<div style="font-size:11px;color:rgba(255,255,255,0.25);margin-bottom:12px;line-height:1.5">Searchable log table, DLP tracking, semantic verbs, plan-based retention.</div>
<div style="font-size:10px;color:rgba(255,255,255,0.1);margin-top:12px;letter-spacing:1px">TEAM / BUSINESS</div>
</div>

</div>

| Plan | Retention | Access |
|---|---|---|
| **Free** | Real-time feed only | Dashboard live feed, no persisted logs |
| **Developer** | Real-time feed only | Dashboard live feed, no persisted logs |
| **Team** | 7 days | Full audit log table |
| **Business** | 30 days | Full audit log table |

::: tip Real-time feed for all plans
Every plan — including Free — has access to the real-time live feed on the Dashboard tab. The live feed shows the 15 most recent requests in real time. Persisted audit logs with retention and pagination are available on Team and Business plans.
:::

---

## Buyer privacy guard

When a server has an active Marketplace listing, the Audit Logs tab activates a **privacy guard** to protect buyer confidentiality:

<!-- Privacy guard UI recreation -->
<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;background:#020202;padding:32px;text-align:center;font-family:ui-monospace,monospace;max-width:500px">

<div style="color:rgba(245,158,11,0.4);font-size:24px;margin-bottom:12px">&#x1F6E1;</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-bottom:8px;font-weight:500">Buyer Privacy Active</div>
<div style="font-size:11px;color:rgba(255,255,255,0.2);line-height:1.6;max-width:360px;margin:0 auto 12px">Audit logs are disabled while your listing is published.<br/>Sellers cannot identify individual buyers from per-request logs.</div>
<div style="font-size:10px;color:rgba(255,255,255,0.2);line-height:1.5;max-width:320px;margin:0 auto">Aggregate metrics (total requests, error rate, latency) are still visible on the Dashboard tab. To inspect individual request logs, unpublish your listing first.</div>

</div>

The privacy guard is not cosmetic — request data is **never loaded into the browser**. The API returns a `403 buyer_privacy_active` error, ensuring data cannot be inspected via browser DevTools.

This separation ensures:
- **Sellers** see aggregate metrics on the Dashboard tab (total requests, error rates, latency)
- **Buyers** retain full privacy — their individual requests are never exposed to the seller
- **Unpublishing** the listing re-enables individual audit logs

---

## Pagination

- Logs are paginated at **25 entries per page**
- The footer shows the retention badge (`RETENTION_7D`, `RETENTION_30D`) and page navigation
- Cursor-based pagination ensures consistent results even as new logs arrive

---

## Next steps

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:32px 0">

<a href="/security/data-shielding" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(245,158,11,0.12);border-radius:8px;background:rgba(245,158,11,0.02)">
<span style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:600">DLP</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Data Shielding</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Configure redaction rules for sensitive data.</div>
<span style="font-size:13px;color:rgba(245,158,11,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Configure →</span>
</a>

<a href="/servers/tokens" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(34,211,238,0.12);border-radius:8px;background:rgba(34,211,238,0.02)">
<span style="font-size:11px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:600">ACCESS</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Connection Tokens</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Named tokens for client identification.</div>
<span style="font-size:13px;color:rgba(34,211,238,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Manage →</span>
</a>

</div>

---

## Frequently Asked Questions

### What does the MCP audit log track?
Every MCP tool call is logged with seven fields: timestamp (UTC precision), tool name, semantic verb (QUERY, MUTATION, DESTRUCTIVE), HTTP status code, response latency in milliseconds, DLP redaction count, and the named connection token that made the request.

### How is client identification handled in the audit log?
The Client column shows the name of the connection token used for the request — not a generic session ID. Since Vinkius tokens are named per-client (e.g., cursor-main, claude-prod), you can immediately identify which AI client made each request.

### What is the DLP column in the audit log?
The DLP column shows how many fields were redacted by Data Shielding before the response reached the AI client. When the count is greater than zero, the number is highlighted in amber. This provides per-request evidence of data protection for compliance audits.

### How long are audit logs retained?
Retention depends on your plan: Free and Developer plans get real-time feed only (no persistence), Team plan provides 7-day searchable history, and Business plan provides 30-day immutable logs. All plans have access to the real-time live feed on the Dashboard tab.

### Can sellers see buyer logs on the Marketplace?
No. When a server has an active Marketplace listing, the Audit Logs tab activates a privacy guard. Request data is never loaded into the browser — the API returns a 403 error, ensuring data cannot be inspected even via DevTools. Sellers see only aggregate metrics on the Dashboard.

### What are semantic verbs in the audit log?
Semantic verbs classify each tool call by its impact: QUERY (GET requests — read-only), MUTATION (POST, PUT, PATCH — writes), and DESTRUCTIVE (DELETE — irreversible). Destructive operations are highlighted in red for quick identification.
