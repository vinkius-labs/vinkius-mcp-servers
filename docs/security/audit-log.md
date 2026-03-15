---
title: "MCP Audit Log — Immutable AI Agent Observability | Vinkius"
description: "Every MCP tool call logged immutably: request, response, DLP redactions, FinOps truncations. SOC 2, GDPR, HIPAA, and PCI-DSS compliance-ready audit trail."
head:
  - - meta
    - property: og:title
      content: "MCP Audit Log — Immutable AI Agent Observability | Vinkius"
  - - meta
    - property: og:description
      content: "Every MCP tool call logged immutably: request, response, DLP redactions, FinOps truncations. Compliance-ready audit trail."
  - - meta
    - name: keywords
      content: "MCP audit log, AI agent observability, MCP compliance, MCP SOC 2, MCP GDPR audit, AI agent monitoring, MCP tool call logging, immutable audit trail, MCP observability, AI governance logs"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What information does the audit log capture?","acceptedAnswer":{"@type":"Answer","text":"Every log entry records the timestamp (UTC, millisecond precision), tool name, semantic verb (QUERY, MUTATION, or DESTRUCTIVE), upstream HTTP status code, round-trip response time, number of DLP redactions, and which connection token initiated the request."}},{"@type":"Question","name":"Does the audit log contain sensitive data?","acceptedAnswer":{"@type":"Answer","text":"No. When DLP is enabled, the audit log records which fields were redacted and which pattern was matched, but it never stores the original sensitive value. For example, it logs customer.email: [REDACTED by pattern:email] — not the actual email address."}},{"@type":"Question","name":"How long are audit logs retained?","acceptedAnswer":{"@type":"Answer","text":"Retention depends on your plan: Free tier provides real-time feed only (no persistence), Team plan includes 7-day searchable history, and Business plan offers 30-day immutable logs that cannot be modified or deleted — even by account administrators."}},{"@type":"Question","name":"Can sellers see buyer request logs on the Marketplace?","acceptedAnswer":{"@type":"Answer","text":"No. When a server is published on the Marketplace, the audit log is automatically disabled for buyer privacy protection. Sellers can only see aggregate metrics (total requests, error rate, latency) on the Dashboard tab."}},{"@type":"Question","name":"Does the audit log track DLP and FinOps Guard activity?","acceptedAnswer":{"@type":"Answer","text":"Yes. Every DLP redaction event is logged with the redaction count, matched pattern, and affected field path. FinOps Guard truncations are also recorded with the original array length, truncated length, affected field, and configured limit."}},{"@type":"Question","name":"Is the audit log suitable for compliance audits?","acceptedAnswer":{"@type":"Answer","text":"Yes. The Business plan provides SOC 2 Type II, GDPR, HIPAA, and PCI-DSS compliance-ready logs. Entries are tamper-proof (write-once, no modifications), include full identity tracking via connection tokens, and document every AI agent interaction with your APIs."}}]}'
---

# Audit Log

Every MCP tool call that passes through Vinkius Cloud is logged immutably. Every request, every response, every redaction, every truncation — captured with full metadata, searchable, and tamper-proof.

You don't wonder what your AI agents are doing. You know.

<!-- Stat strip -->
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1px;margin:40px 0;background:rgba(255,255,255,0.04);border-radius:10px;overflow:hidden">
<div style="padding:28px 24px;background:#09090f;text-align:center">
<div style="font-size:28px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">100%</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:6px;letter-spacing:1px;font-family:Inter,sans-serif">TOOL CALLS LOGGED</div>
</div>
<div style="padding:28px 24px;background:#09090f;text-align:center">
<div style="font-size:28px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">30 days</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:6px;letter-spacing:1px;font-family:Inter,sans-serif">IMMUTABLE RETENTION</div>
</div>
<div style="padding:28px 24px;background:#09090f;text-align:center">
<div style="font-size:28px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">DLP-safe</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:6px;letter-spacing:1px;font-family:Inter,sans-serif">REDACTED PAYLOADS</div>
</div>
</div>

---

<!-- Editorial break -->
<div style="margin:48px 0;padding:56px 40px;background:#09090f;border:1px solid rgba(255,255,255,0.05);border-radius:12px;position:relative;overflow:hidden">
<div style="position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(34,211,238,0.3),transparent)"></div>
<span style="font-size:12px;color:rgba(34,211,238,0.6);letter-spacing:3px;font-weight:700">OBSERVABILITY</span>
<div style="font-size:36px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif;letter-spacing:-1.5px;margin-top:12px;line-height:1.1">Every request logged.<br><span style="color:rgba(255,255,255,0.25)">Every redaction tracked.</span></div>
<div style="font-size:15px;color:rgba(255,255,255,0.4);margin-top:16px;max-width:540px;line-height:1.7;font-family:Inter,sans-serif">Full observability into what your AI agents are doing, which tools they are calling, which data they accessed, and what governance layers transformed along the way.</div>
</div>

## What gets logged

Every log entry captures the complete context of a tool call. Below is the exact table structure visible in the Audit Log tab:

<!-- Log table recreation -->
<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#09090f;font-family:ui-monospace,monospace">

<div style="padding:14px 24px;border-bottom:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:space-between">
<span style="font-size:12px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:600">AUDIT LOG</span>
<span style="font-size:11px;color:rgba(255,255,255,0.15)">RETENTION_7D</span>
</div>

<!-- Header row -->
<div style="display:grid;grid-template-columns:140px 1fr 80px 50px 70px 40px 90px;gap:0;padding:8px 24px;border-bottom:1px solid rgba(255,255,255,0.06)">
<span style="font-size:11px;color:rgba(255,255,255,0.25)">TIMESTAMP</span>
<span style="font-size:11px;color:rgba(255,255,255,0.25)">TOOL</span>
<span style="font-size:11px;color:rgba(255,255,255,0.25);text-align:right">VERB</span>
<span style="font-size:11px;color:rgba(255,255,255,0.25);text-align:right">CODE</span>
<span style="font-size:11px;color:rgba(255,255,255,0.25);text-align:right">TIME</span>
<span style="font-size:11px;color:rgba(255,255,255,0.25);text-align:right">DLP</span>
<span style="font-size:11px;color:rgba(255,255,255,0.25);text-align:right">CLIENT</span>
</div>

<!-- Data row 1 -->
<div style="display:grid;grid-template-columns:140px 1fr 80px 50px 70px 40px 90px;gap:0;padding:8px 24px;border-bottom:1px solid rgba(255,255,255,0.03)">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-variant-numeric:tabular-nums">14:32:01.847</span>
<span style="font-size:12px;color:rgba(255,255,255,0.5)">get_pet_by_id</span>
<span style="font-size:12px;color:rgba(255,255,255,0.4);text-align:right">QUERY</span>
<span style="font-size:12px;color:rgba(34,197,94,0.7);text-align:right;font-variant-numeric:tabular-nums">200</span>
<span style="font-size:12px;color:rgba(255,255,255,0.3);text-align:right;font-variant-numeric:tabular-nums">42ms</span>
<span style="font-size:12px;color:rgba(255,255,255,0.25);text-align:right">0</span>
<span style="font-size:12px;color:rgba(255,255,255,0.25);text-align:right">Claude</span>
</div>

<!-- Data row 2 -->
<div style="display:grid;grid-template-columns:140px 1fr 80px 50px 70px 40px 90px;gap:0;padding:8px 24px;border-bottom:1px solid rgba(255,255,255,0.03)">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-variant-numeric:tabular-nums">14:32:03.214</span>
<span style="font-size:12px;color:rgba(255,255,255,0.5)">update_pet</span>
<span style="font-size:12px;color:rgba(255,255,255,0.4);text-align:right">MUTATION</span>
<span style="font-size:12px;color:rgba(34,197,94,0.7);text-align:right;font-variant-numeric:tabular-nums">200</span>
<span style="font-size:12px;color:rgba(255,255,255,0.3);text-align:right;font-variant-numeric:tabular-nums">118ms</span>
<span style="font-size:12px;color:rgba(255,255,255,0.25);text-align:right">0</span>
<span style="font-size:12px;color:rgba(255,255,255,0.25);text-align:right">Cursor</span>
</div>

<!-- Data row 3 — destructive + DLP -->
<div style="display:grid;grid-template-columns:140px 1fr 80px 50px 70px 40px 90px;gap:0;padding:8px 24px;border-bottom:1px solid rgba(255,255,255,0.03)">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-variant-numeric:tabular-nums">14:32:05.091</span>
<span style="font-size:12px;color:rgba(255,255,255,0.5)">delete_pet</span>
<span style="font-size:12px;color:rgba(239,68,68,0.6);text-align:right">DESTRUCTIVE</span>
<span style="font-size:12px;color:rgba(34,197,94,0.7);text-align:right;font-variant-numeric:tabular-nums">200</span>
<span style="font-size:12px;color:rgba(255,255,255,0.3);text-align:right;font-variant-numeric:tabular-nums">87ms</span>
<span style="font-size:12px;color:rgba(245,158,11,0.6);text-align:right;font-weight:600">2</span>
<span style="font-size:12px;color:rgba(255,255,255,0.25);text-align:right">Claude</span>
</div>

<!-- Data row 4 — error -->
<div style="display:grid;grid-template-columns:140px 1fr 80px 50px 70px 40px 90px;gap:0;padding:8px 24px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-variant-numeric:tabular-nums">14:32:06.432</span>
<span style="font-size:12px;color:rgba(255,255,255,0.5)">find_pets_by_status</span>
<span style="font-size:12px;color:rgba(255,255,255,0.4);text-align:right">QUERY</span>
<span style="font-size:12px;color:rgba(245,158,11,0.7);text-align:right;font-variant-numeric:tabular-nums">400</span>
<span style="font-size:12px;color:rgba(255,255,255,0.3);text-align:right;font-variant-numeric:tabular-nums">12ms</span>
<span style="font-size:12px;color:rgba(255,255,255,0.25);text-align:right">0</span>
<span style="font-size:12px;color:rgba(255,255,255,0.25);text-align:right">VS Code</span>
</div>

</div>

### Column reference

| Column | What it captures |
|---|---|
| **Timestamp** | Exact time of the tool call (UTC, millisecond precision) |
| **Tool** | Which MCP tool was invoked (e.g., `get_pet_by_id`, `delete_pet`) |
| **Verb** | Semantic classification: `QUERY` (read), `MUTATION` (write), or `DESTRUCTIVE` (delete) |
| **Code** | Upstream API HTTP response status (color-coded: green 2xx, amber 4xx, red 5xx) |
| **Time** | Round-trip response time in milliseconds |
| **DLP** | Number of fields redacted by the DLP engine (amber when > 0) |
| **Client** | Which connection token initiated the request (name hint, not the plaintext token) |

---

## Semantic verb classification

Every tool call is automatically classified based on its MCP annotation and HTTP method:

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(255,255,255,0.3);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">QUERY</div>
<div style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.6;font-family:Inter,sans-serif">Read-only operations. GET requests and tools annotated as <code>readOnlyHint: true</code>. No side effects on your data.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(255,255,255,0.3);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">MUTATION</div>
<div style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.6;font-family:Inter,sans-serif">Write operations. POST, PUT, PATCH requests that create or modify resources. Reversible changes.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(239,68,68,0.1);border-radius:8px;background:rgba(239,68,68,0.02)">
<div style="font-size:11px;color:rgba(239,68,68,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">DESTRUCTIVE</div>
<div style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.6;font-family:Inter,sans-serif">DELETE requests and tools annotated as <code>destructiveHint: true</code>. Highlighted in red so destructive actions are immediately visible in the log feed.</div>
</div>

</div>

---

## DLP-aware logging

When DLP is enabled, the audit log captures governance activity alongside the tool call:

- **Redaction count** — how many fields were redacted in this specific response (displayed in the DLP column; amber when > 0)
- **Pattern matched** — which DLP pattern triggered the redaction (credit card, email, SSN, or custom regex)
- **Field path** — which JSON path was redacted (e.g., `customer.email`, `payment.card_number`)

Critically, the audit log **never records the original sensitive value**. The log shows `customer.email: [REDACTED by pattern:email]` — not the actual email address. This allows compliance teams to verify that DLP is working correctly without re-exposing the data it was designed to protect.

---

## Buyer privacy guard

When a server is published on the Marketplace, the audit log is automatically disabled. Sellers cannot view individual buyer request logs — this protects buyer privacy and prevents sellers from identifying individual subscribers through per-request analysis.

<div style="margin:24px 0;padding:20px 24px;border:1px solid rgba(245,158,11,0.15);border-radius:8px;background:rgba(245,158,11,0.02)">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">BUYER PRIVACY ACTIVE</div>
<div style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.6;font-family:Inter,sans-serif">Audit logs are disabled while your listing is published. Aggregate metrics (total requests, error rate, latency) remain visible on the Dashboard tab. To inspect individual request logs, unpublish your listing first.</div>
</div>

---

## Retention tiers

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(255,255,255,0.2);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">FREE</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Real-time feed</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">Live stream of tool calls visible on the Dashboard tab. No historical persistence — when you navigate away, the feed resets. Sufficient for debugging and development.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(129,140,248,0.1);border-radius:8px;background:rgba(129,140,248,0.02)">
<div style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">TEAM</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">7-day retention</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">Searchable, paginated history with full tool call metadata and DLP event tracking. Filter by tool, status code, client token, or date range. Sufficient for operational troubleshooting and incident investigation.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(52,211,153,0.1);border-radius:8px;background:rgba(52,211,153,0.02)">
<div style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">BUSINESS</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">30-day immutable logs</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">Compliance-grade retention with tamper-proof storage. Logs cannot be modified or deleted — even by account administrators. Designed for regulated industries, internal audit requirements, and SOC 2 type II evidence.</div>
</div>

</div>

---

## FinOps Guard observability

Audit logs also capture FinOps Guard activity. When an API response contains arrays that exceed the configured maximum, the log entry records:

- The **original array length** before truncation
- The **truncated length** after FinOps processing
- Which **field** was truncated
- The **configured limit** that triggered truncation

This gives you full visibility into how FinOps Guard is affecting your AI model's data. If the model starts producing lower-quality outputs, you can trace the issue to specific truncations and adjust limits accordingly.

---

## Compliance readiness

AI agent observability is rapidly becoming a regulatory requirement. Vinkius Cloud's audit log is designed with compliance in mind:

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">SOC 2 TYPE II</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);line-height:1.6;font-family:Inter,sans-serif">Immutable logs demonstrate processing integrity. Every AI agent decision is recorded, with timestamp, identity (connection token), and outcome (status code). Logs cannot be altered retroactively — auditors can verify the complete history of agent operations.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">GDPR</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);line-height:1.6;font-family:Inter,sans-serif">Audit trails document what personal data was accessed by AI agents and when. DLP redaction events prove that PII was masked before transmission to the AI model. Data minimization is enforced and verifiable at the transport layer.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">HIPAA</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);line-height:1.6;font-family:Inter,sans-serif">For healthcare APIs, the audit log tracks every access to protected health information (PHI) by AI agents. Combined with DLP, PHI is redacted before reaching the AI model, and the redaction event is logged immutably.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(239,68,68,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">PCI-DSS</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);line-height:1.6;font-family:Inter,sans-serif">Payment card data access is logged with full metadata. DLP ensures card numbers are redacted before AI model exposure. Audit records provide the evidence trail required for PCI compliance assessments.</div>
</div>

</div>

---

## The industry context

Most MCP platforms today provide server-level logs — HTTP access logs, error logs, connection counts. These capture infrastructure events but not the semantic layer: which tool was called, what the AI model sent, what the API returned, and what governance transformations (DLP redaction, FinOps truncation) were applied in transit.

Without this level of observability, teams cannot answer fundamental questions about their AI agents:

- "What data did the AI model access last Tuesday?"
- "Which connection token made the most destructive tool calls?"
- "Was PII properly redacted in the response to that customer query?"
- "How many API responses were truncated by FinOps this week?"

Emerging solutions like MintMCP Gateway and Sentry's AI tracing address pieces of this problem. But they operate outside the MCP transport layer — they instrument the agent framework, not the proxy itself. This means they can log tool invocations but cannot capture the transformations that happen between the API response and the AI model.

Vinkius Cloud's audit log operates at exactly the right point in the data flow. It captures the tool call, the upstream response, every DLP redaction, every FinOps truncation, and the final sanitized payload — all in a single, immutable log entry. No SDK integration. No agent framework instrumentation. No configuration beyond toggling the feature on.

---

## Next steps

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:32px 0">

<a href="/security/" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<span style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:600">OVERVIEW</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Security Overview</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Back to the full security overview.</div>
<span style="font-size:13px;color:rgba(129,140,248,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Overview →</span>
</a>

<a href="/security/dlp" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<span style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:600">DLP</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Zero-Trust PII Redaction</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">In-memory PII masking before data reaches the AI model.</div>
<span style="font-size:13px;color:rgba(52,211,153,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Learn more →</span>
</a>

</div>

---

## Frequently Asked Questions

### What information does the audit log capture?
Every log entry records the timestamp (UTC, millisecond precision), tool name, semantic verb (QUERY, MUTATION, or DESTRUCTIVE), upstream HTTP status code, round-trip response time, number of DLP redactions, and which connection token initiated the request.

### Does the audit log contain sensitive data?
No. When DLP is enabled, the audit log records which fields were redacted and which pattern was matched, but it never stores the original sensitive value. For example, it logs `customer.email: [REDACTED by pattern:email]` — not the actual email address.

### How long are audit logs retained?
Retention depends on your plan: Free tier provides real-time feed only (no persistence), Team plan includes 7-day searchable history, and Business plan offers 30-day immutable logs that cannot be modified or deleted — even by account administrators.

### Can sellers see buyer request logs on the Marketplace?
No. When a server is published on the Marketplace, the audit log is automatically disabled for buyer privacy protection. Sellers can only see aggregate metrics (total requests, error rate, latency) on the Dashboard tab.

### Does the audit log track DLP and FinOps Guard activity?
Yes. Every DLP redaction event is logged with the redaction count, matched pattern, and affected field path. FinOps Guard truncations are also recorded with the original array length, truncated length, affected field, and configured limit.

### Is the audit log suitable for compliance audits?
Yes. The Business plan provides SOC 2 Type II, GDPR, HIPAA, and PCI-DSS compliance-ready logs. Entries are tamper-proof (write-once, no modifications), include full identity tracking via connection tokens, and document every AI agent interaction with your APIs.
