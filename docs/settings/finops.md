---
title: FinOps Guard — Token Cost Control, OOM Shield & Response Limits for MCP Servers | Vinkius Cloud
description: Control AI token costs with array truncation, OOM Shield byte ceilings, and TOON compression. Set global response limits that inherit to every MCP server — prevent oversized payloads from overwhelming your model's context window.
head:
  - - meta
    - name: keywords
      content: FinOps Guard MCP, AI token cost control, OOM shield, response limits, TOON compression, context window management, MCP cost optimization
  - - meta
    - property: og:title
      content: FinOps Guard — Token Cost Control & OOM Shield | Vinkius Cloud
  - - meta
    - property: og:description
      content: Control AI token costs with array truncation, OOM Shield byte ceilings, and TOON compression. Set global response limits for every MCP server.
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does FinOps Guard protect against?","acceptedAnswer":{"@type":"Answer","text":"FinOps Guard prevents oversized API responses from overwhelming your AI model''s context window. It sets array ceilings and byte limits to keep every response within budget."}},{"@type":"Question","name":"What is the OOM Shield?","acceptedAnswer":{"@type":"Answer","text":"OOM Shield is an absolute byte ceiling for response bodies, ranging from 100 KB to 50 MB (default: 2 MB). Any response exceeding this limit is truncated before reaching the AI model."}},{"@type":"Question","name":"How does Max Array Items work?","acceptedAnswer":{"@type":"Answer","text":"When an API returns a list with hundreds of records, FinOps truncates the array to the configured limit (default: 50, range: 5-500) and appends a count notice."}},{"@type":"Question","name":"Does FinOps Guard stack with TOON compression?","acceptedAnswer":{"@type":"Answer","text":"Yes. FinOps handles response payload truncation while TOON handles tool description optimization. Together they can reduce total token consumption by 50-70%."}},{"@type":"Question","name":"Can I disable FinOps Guard for specific servers?","acceptedAnswer":{"@type":"Answer","text":"Yes. Each server can have its own Max Array Items, OOM Shield, and TOON compression settings. Override them from the server''s Edit modal."}},{"@type":"Question","name":"How much token savings does FinOps typically provide?","acceptedAnswer":{"@type":"Answer","text":"Combined with TOON compression, FinOps Guard typically saves 30-50% on token consumption per request."}}]}'
---

# FinOps Guard

Control token costs and prevent oversized responses from overwhelming your AI model's context window. Define global limits that apply to every new server.

Access via **Settings → FinOps Guard** in Vinkius Cloud.

---

## Why FinOps matters

A single verbose API endpoint can return payloads that consume 10,000+ tokens — a significant portion of a model's context window. Without guardrails, one tool call can crowd out the conversation history and degrade response quality. FinOps Guard ensures no single response dominates the context budget.

<!-- Stat strip -->
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1px;margin:32px 0;background:rgba(255,255,255,0.04);border-radius:10px;overflow:hidden">
<div style="padding:24px 20px;background:#09090f;text-align:center">
<div style="font-size:24px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">30-50%</div>
<div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;letter-spacing:1px;font-family:Inter,sans-serif">TOKEN SAVINGS</div>
</div>
<div style="padding:24px 20px;background:#09090f;text-align:center">
<div style="font-size:24px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">5 – 500</div>
<div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;letter-spacing:1px;font-family:Inter,sans-serif">ARRAY ITEMS RANGE</div>
</div>
<div style="padding:24px 20px;background:#09090f;text-align:center">
<div style="font-size:24px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">OOM Shield</div>
<div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;letter-spacing:1px;font-family:Inter,sans-serif">PAYLOAD PROTECTION</div>
</div>
</div>

---

## Global FinOps configuration

<!-- FinOps UI recreation -->
<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#09090f;font-family:ui-monospace,monospace">

<div style="padding:14px 24px;border-bottom:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:space-between">
<div>
<span style="font-size:12px;color:rgba(255,255,255,0.4);letter-spacing:2px;font-weight:600">GLOBAL FINOPS CONFIGURATION</span>
<div style="font-size:11px;color:rgba(255,255,255,0.2);margin-top:2px;font-family:Inter,sans-serif">Define default response limits and compression settings applied to every new server.</div>
</div>
<div style="width:36px;height:20px;border-radius:10px;background:rgba(245,158,11,0.8);position:relative">
<div style="width:16px;height:16px;border-radius:50%;background:white;position:absolute;right:2px;top:2px"></div>
</div>
</div>

<!-- Response Limits section -->
<div style="padding:20px 24px;border-bottom:1px solid rgba(255,255,255,0.04)">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:16px">

<span style="font-size:13px;color:rgba(255,255,255,0.6);font-weight:500;font-family:Inter,sans-serif">Response Limits</span>
</div>

<!-- Max Array Items -->
<div style="margin-bottom:16px;padding-left:16px">
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
<span style="font-size:12px;color:rgba(255,255,255,0.4);font-family:Inter,sans-serif">Max Array Items</span>
<span style="font-size:11px;color:rgba(245,158,11,0.7);background:rgba(245,158,11,0.1);padding:2px 10px;border-radius:10px;border:1px solid rgba(245,158,11,0.2)">50 items</span>
</div>
<div style="height:6px;border-radius:3px;background:rgba(255,255,255,0.06);overflow:hidden">
<div style="width:10%;height:100%;background:rgba(245,158,11,0.6);border-radius:3px"></div>
</div>
<div style="display:flex;justify-content:space-between;margin-top:4px">
<span style="font-size:9px;color:rgba(255,255,255,0.15)">5</span>
<span style="font-size:9px;color:rgba(255,255,255,0.15)">Maximum number of items in array responses</span>
<span style="font-size:9px;color:rgba(255,255,255,0.15)">500</span>
</div>
</div>

<!-- OOM Shield -->
<div style="padding-left:16px">
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
<div style="display:flex;align-items:center;gap:8px">
<span style="font-size:12px;color:rgba(255,255,255,0.4);font-family:Inter,sans-serif">Max Payload Size</span>
<span style="font-size:9px;color:rgba(239,68,68,0.7);background:rgba(239,68,68,0.1);padding:1px 6px;border-radius:4px;border:1px solid rgba(239,68,68,0.2);font-weight:700;letter-spacing:1px">OOM SHIELD</span>
</div>
<div style="width:32px;height:16px;border-radius:8px;background:rgba(245,158,11,0.7);position:relative">
<div style="width:12px;height:12px;border-radius:50%;background:white;position:absolute;right:2px;top:2px"></div>
</div>
</div>
<div style="height:6px;border-radius:3px;background:rgba(255,255,255,0.06);overflow:hidden">
<div style="width:4%;height:100%;background:rgba(245,158,11,0.6);border-radius:3px"></div>
</div>
<div style="display:flex;justify-content:space-between;margin-top:4px">
<span style="font-size:9px;color:rgba(255,255,255,0.15)">100 KB</span>
<span style="font-size:9px;color:rgba(245,158,11,0.5)">2.0 MB</span>
<span style="font-size:9px;color:rgba(255,255,255,0.15)">50 MB</span>
</div>
</div>
</div>

<!-- TOON Compression section -->
<div style="padding:20px 24px;border-bottom:1px solid rgba(255,255,255,0.04)">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">

<span style="font-size:13px;color:rgba(255,255,255,0.6);font-weight:500;font-family:Inter,sans-serif">Compression</span>
</div>

<div style="display:flex;align-items:center;gap:12px;padding-left:16px">
<div style="width:36px;height:20px;border-radius:10px;background:rgba(255,255,255,0.1);position:relative">
<div style="width:16px;height:16px;border-radius:50%;background:white;position:absolute;left:2px;top:2px"></div>
</div>
<div>
<span style="font-size:12px;color:rgba(255,255,255,0.5);font-family:Inter,sans-serif">TOON Compression</span>
<div style="font-size:10px;color:rgba(255,255,255,0.2);margin-top:2px;font-family:Inter,sans-serif">Compress tool descriptions to reduce token overhead from schema definitions.</div>
</div>
</div>
</div>

<!-- Info banner -->
<div style="padding:12px 24px">
<div style="border:1px solid rgba(245,158,11,0.1);background:rgba(245,158,11,0.03);border-radius:6px;padding:10px 14px;display:flex;align-items:center;gap:8px">

<span style="font-size:11px;color:rgba(245,158,11,0.35);font-family:Inter,sans-serif">These defaults are inherited by new servers. Each server can override these settings individually from its detail page.</span>
</div>
</div>

</div>

---

## Response Limits

### Max Array Items

Controls the maximum number of items returned in array responses. When an API returns a list with 500 records, FinOps truncates it to the configured limit (default: 50) and appends a count notice.

| Value | Use case |
|---|---|
| **5–20** | Tight context budgets, small model context windows |
| **50** (default) | Balanced — enough data for the AI without overwhelming the context |
| **100–500** | Large context windows, APIs where complete lists matter |

### OOM Shield

An absolute byte ceiling for response bodies. Any response exceeding this limit is truncated before reaching the AI model.

The slider ranges from **100 KB** to **50 MB** with a default of **2 MB**. This protects against:

- APIs that return entire file contents in response bodies
- Unfiltered database dumps from misconfigured endpoints
- Binary payloads accidentally returned as base64

::: warning
The OOM Shield is your last line of defense against runaway responses. If disabled, a single 50MB response could consume your entire context window budget and cause out-of-memory errors in the runtime.
:::

---

## TOON Compression

Shared with the [MCP Defaults](/vinkius-mcp-servers/settings/mcp-defaults#toon-token-compression) tab. When enabled here, TOON compression applies globally. See the MCP Defaults page for details on compatibility and behavior.

---

## Inheritance

FinOps settings follow the global → per-server inheritance model:

1. **Configure here** — Set your preferred limits globally
2. **New servers inherit** — Every new server starts with these defaults
3. **Override per-server** — Adjust limits from each server's detail page
4. **Existing servers unaffected** — Changing global defaults does not overwrite existing per-server settings

---

## Next steps

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:32px 0">

<a href="/settings/dlp" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(52,211,153,0.12);border-radius:8px;background:rgba(52,211,153,0.02)">
<span style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:600">DLP</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Data Shielding</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">PII redaction patterns.</div>
<span style="font-size:13px;color:rgba(52,211,153,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Configure →</span>
</a>

<a href="/settings/billing" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(34,211,238,0.12);border-radius:8px;background:rgba(34,211,238,0.02)">
<span style="font-size:11px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:600">BILLING</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Plans & Billing</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Subscription management.</div>
<span style="font-size:13px;color:rgba(34,211,238,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">View plans →</span>
</a>

</div>

---

## Frequently Asked Questions

### What does FinOps Guard protect against?
FinOps Guard prevents oversized API responses from overwhelming your AI model's context window. Without limits, a single verbose endpoint can return 10,000+ tokens worth of data — crowding out conversation history and degrading response quality. FinOps sets array ceilings and byte limits to keep every response within budget.

### What is the OOM Shield?
OOM Shield is an absolute byte ceiling for response bodies. The slider ranges from 100 KB to 50 MB (default: 2 MB). Any response exceeding this limit is truncated before reaching the AI model. It protects against file contents in response bodies, unfiltered database dumps, and base64-encoded binary payloads.

### How does Max Array Items work?
When an API returns a list with hundreds of records, FinOps truncates the array to the configured limit (default: 50 items, range: 5–500) and appends a count notice. The AI model receives enough data to reason effectively without wasting context window space on excess records.

### Does FinOps Guard stack with TOON compression?
Yes. FinOps Guard handles response payload truncation, while TOON compression handles tool description optimization. Together, they can reduce total token consumption by 50-70% — FinOps controls the data volume, TOON controls the schema overhead.

### Can I disable FinOps Guard for specific servers?
Yes. FinOps Guard follows the global-to-per-server inheritance model. Each server can have its own Max Array Items, OOM Shield, and TOON compression settings. Override them from the server's Edit modal without affecting other servers.

### How much token savings does FinOps typically provide?
Combined with TOON compression, FinOps Guard typically saves 30-50% on token consumption per request. The exact savings depend on the verbosity of your upstream API responses and the configured array limits.
