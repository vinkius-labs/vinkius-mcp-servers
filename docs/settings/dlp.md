---
title: Data Shielding Settings — Global PII Redaction Patterns for MCP Servers | Vinkius Cloud
description: Define account-wide DLP redaction patterns using fast-redact path syntax. 32+ built-in PII detectors with autocomplete, per-server override support, and global-to-server inheritance — protect sensitive data across every MCP server.
head:
  - - meta
    - name: keywords
      content: DLP settings MCP, PII redaction configuration, fast-redact patterns, data shielding, MCP data loss prevention, global DLP rules
  - - meta
    - property: og:title
      content: Data Shielding Settings — Global PII Redaction | Vinkius Cloud
  - - meta
    - property: og:description
      content: Define account-wide DLP redaction patterns with 32+ built-in PII detectors. Per-server override support and global-to-server inheritance.
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What path syntax does the DLP pattern editor use?","acceptedAnswer":{"@type":"Answer","text":"Patterns use fast-redact path syntax. Use *.field to match any object with that field name, and items[*].field to match arrays. The asterisk wildcard matches at any nesting depth."}},{"@type":"Question","name":"How many built-in DLP patterns are available?","acceptedAnswer":{"@type":"Answer","text":"The autocomplete provides 32+ built-in patterns across six categories: Identity, Financial, Contact, Security, Location, and Medical."}},{"@type":"Question","name":"Can I add custom DLP patterns beyond the built-in ones?","acceptedAnswer":{"@type":"Answer","text":"Yes. Type any valid fast-redact path into the input field and click add. Custom patterns appear as chips alongside built-in ones with no limit."}},{"@type":"Question","name":"Do global DLP patterns merge with per-server patterns?","acceptedAnswer":{"@type":"Answer","text":"By default, per-server patterns inherit the global set. You can add additional patterns on top or replace the global set entirely from the server''s Edit modal."}},{"@type":"Question","name":"Does DLP work with all deployment methods?","acceptedAnswer":{"@type":"Answer","text":"Yes. DLP redaction runs at the proxy layer, after the API response is received and before it reaches the AI client. It works identically across all deployment methods."}},{"@type":"Question","name":"Where can I learn about the DLP architecture and compliance impact?","acceptedAnswer":{"@type":"Answer","text":"See the Zero-Trust PII Redaction page under Security & Governance for data flow diagrams, compliance mapping (GDPR, HIPAA, SOC 2), and industry context."}}]}'
---

# Data Shielding (DLP)

Define account-wide PII redaction patterns that apply to every new MCP server. Individual servers can override these defaults.

Access via **Settings → DLP Protection** in Vinkius Cloud.

---

## Global DLP configuration

The global Data Shielding tab provides a master toggle and a pattern editor with smart autocomplete. Patterns use `fast-redact` path syntax to target specific JSON fields across any API response structure.

<!-- DLP config recreation -->
<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#09090f;font-family:ui-monospace,monospace">
<div style="padding:14px 24px;border-bottom:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:space-between">
<div>
<span style="font-size:12px;color:rgba(255,255,255,0.4);letter-spacing:2px;font-weight:600">GLOBAL DATA SHIELDING</span>
<div style="font-size:11px;color:rgba(255,255,255,0.2);margin-top:2px;font-family:Inter,sans-serif">Define default redaction patterns applied to every new server.</div>
</div>
<div style="width:36px;height:20px;border-radius:10px;background:rgba(34,211,238,0.8);position:relative">
<div style="width:16px;height:16px;border-radius:50%;background:white;position:absolute;right:2px;top:2px"></div>
</div>
</div>

<div style="padding:16px 24px;border-bottom:1px solid rgba(255,255,255,0.04)">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">

<span style="font-size:13px;color:rgba(255,255,255,0.7);font-weight:500;font-family:Inter,sans-serif">Protected Fields</span>
<span style="font-size:10px;color:rgba(34,211,238,0.6);border:1px solid rgba(34,211,238,0.2);padding:1px 8px;border-radius:10px;background:rgba(34,211,238,0.08);font-weight:700;letter-spacing:1px">5 FIELDS PROTECTED</span>
</div>

<!-- Active chips -->
<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px">
<span style="display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border:1px solid rgba(34,211,238,0.2);background:rgba(34,211,238,0.08);border-radius:6px;font-size:12px;color:rgba(34,211,238,0.8)">*.email <span style="color:rgba(34,211,238,0.3);font-size:10px">✕</span></span>
<span style="display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border:1px solid rgba(34,211,238,0.2);background:rgba(34,211,238,0.08);border-radius:6px;font-size:12px;color:rgba(34,211,238,0.8)">*.ssn <span style="color:rgba(34,211,238,0.3);font-size:10px">✕</span></span>
<span style="display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border:1px solid rgba(34,211,238,0.2);background:rgba(34,211,238,0.08);border-radius:6px;font-size:12px;color:rgba(34,211,238,0.8)">*.credit_card <span style="color:rgba(34,211,238,0.3);font-size:10px">✕</span></span>
<span style="display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border:1px solid rgba(34,211,238,0.2);background:rgba(34,211,238,0.08);border-radius:6px;font-size:12px;color:rgba(34,211,238,0.8)">*.phone <span style="color:rgba(34,211,238,0.3);font-size:10px">✕</span></span>
<span style="display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border:1px solid rgba(34,211,238,0.2);background:rgba(34,211,238,0.08);border-radius:6px;font-size:12px;color:rgba(34,211,238,0.8)">*.password <span style="color:rgba(34,211,238,0.3);font-size:10px">✕</span></span>
</div>

<!-- Input -->
<div style="display:flex;align-items:center;gap:8px">
<div style="flex:1;padding:6px 10px;border:1px solid rgba(255,255,255,0.08);background:rgba(0,0,0,0.4);border-radius:4px">
<span style="font-size:12px;color:rgba(255,255,255,0.2)">e.g. *.email, *.ssn, users[*].credit_card</span>
</div>
<div style="padding:6px;border:1px solid rgba(255,255,255,0.08);border-radius:4px">
<span style="font-size:12px;color:rgba(255,255,255,0.3)">+</span>
</div>
</div>
</div>

<div style="padding:10px 24px">
<div style="font-size:10px;color:rgba(255,255,255,0.15);font-family:Inter,sans-serif">fast-redact paths — Use *.field for all objects, items[*].field for arrays.</div>
</div>
</div>

### Built-in suggestions

The input field includes autocomplete with 32+ built-in patterns organized across six categories: **Identity** (first name, last name, SSN, date of birth), **Financial** (credit card, bank account, IBAN), **Contact** (email, phone, address), **Security** (password, API key, token), **Location** (zip code, IP address), and **Medical** (patient ID, medical record).

### Path syntax

| Pattern | Matches | Example |
|---|---|---|
| `*.email` | Any object with an `email` field | `{ user: { email: "..." } }` |
| `users[*].ssn` | Every `ssn` inside a `users` array | `{ users: [{ ssn: "..." }] }` |
| `*.credit_card` | Any nested `credit_card` field | `{ payment: { credit_card: "..." } }` |

### Per-server override

Each server inherits global DLP patterns at creation. You can add additional patterns or replace the global set entirely from the server's detail page → Edit modal.

::: tip Deep dive
For the full technical reference on how DLP works — data flow, compliance impact, and industry context — see [Zero-Trust PII Redaction](/vinkius-mcp-servers/security/dlp).
:::

---

## Next steps

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:32px 0">

<a href="/security/dlp" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(52,211,153,0.12);border-radius:8px;background:rgba(52,211,153,0.02)">
<span style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:600">SECURITY</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Zero-Trust PII Redaction</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Architecture, compliance, and industry context.</div>
<span style="font-size:13px;color:rgba(52,211,153,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Learn more →</span>
</a>

<a href="/settings/finops" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(245,158,11,0.12);border-radius:8px;background:rgba(245,158,11,0.02)">
<span style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:600">FINOPS</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">FinOps Guard</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Response limits and cost control.</div>
<span style="font-size:13px;color:rgba(245,158,11,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Configure →</span>
</a>

</div>

---

## Frequently Asked Questions

### What path syntax does the DLP pattern editor use?
Patterns use `fast-redact` path syntax. Use `*.field` to match any object with that field name (e.g., `*.email`), and `items[*].field` to match arrays (e.g., `users[*].ssn`). The asterisk wildcard matches at any nesting depth.

### How many built-in DLP patterns are available?
The autocomplete provides 32+ built-in patterns across six categories: Identity (first name, last name, SSN, date of birth), Financial (credit card, bank account, IBAN), Contact (email, phone, address), Security (password, API key, token), Location (zip code, IP address), and Medical (patient ID, medical record).

### Can I add custom DLP patterns beyond the built-in ones?
Yes. Type any valid `fast-redact` path into the input field and click the add button. Custom patterns appear as chips alongside built-in ones. There is no limit on the number of patterns you can define.

### Do global DLP patterns merge with per-server patterns?
By default, per-server patterns inherit the global set. From the server's Edit modal, you can add additional patterns on top of the global set or replace the global set entirely with server-specific patterns.

### Does DLP work with all deployment methods?
Yes. DLP redaction runs at the proxy layer, after the upstream API response is received and before it reaches the AI client. It works identically across OpenAPI Import, Manual API, and Vurb.ts deployments.

### Where can I learn about the DLP architecture and compliance impact?
For the full technical reference — data flow diagrams, compliance mapping (GDPR, HIPAA, SOC 2), and industry context — see the Zero-Trust PII Redaction page under Security & Governance.
