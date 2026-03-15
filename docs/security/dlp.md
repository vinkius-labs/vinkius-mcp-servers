---
title: "MCP DLP — Zero-Trust PII Redaction for AI Agents | Vinkius"
description: "Redact PII (emails, SSNs, credit cards, phone numbers) in-memory before AI models see it. Transport-layer DLP with 32+ built-in patterns, custom regex, and audit trail."
head:
  - - meta
    - property: og:title
      content: "MCP DLP — Zero-Trust PII Redaction for AI Agents | Vinkius"
  - - meta
    - property: og:description
      content: "Redact PII in-memory before AI models see it. Transport-layer DLP with 32+ built-in patterns, custom regex, and audit trail."
  - - meta
    - name: keywords
      content: "MCP DLP, AI PII redaction, data loss prevention AI, MCP data shielding, PII masking AI agents, GDPR MCP server, MCP OWASP LLM02, zero-trust PII, redact sensitive data AI"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What types of PII does Vinkius DLP detect?","acceptedAnswer":{"@type":"Answer","text":"Vinkius Cloud includes 32+ built-in patterns across six categories: Identity (names, SSN, date of birth), Financial (credit cards, bank accounts, IBAN), Contact (email, phone, address), Security (passwords, API keys, tokens), Location (zip codes, IP addresses), and Custom (any regex pattern you define)."}},{"@type":"Question","name":"Does DLP add latency to API responses?","acceptedAnswer":{"@type":"Answer","text":"No measurable latency. Redaction happens in-memory inside the V8 Isolate using fast-redact path matching — a deterministic, sub-millisecond operation. There is no network roundtrip, no external API call, and no ML inference step."}},{"@type":"Question","name":"Can I add custom redaction patterns?","acceptedAnswer":{"@type":"Answer","text":"Yes. In addition to the 32+ built-in patterns, you can add custom patterns using fast-redact path syntax. Use *.field for all objects or items[*].field for arrays. Any JSON path structure is supported."}},{"@type":"Question","name":"Is the original data stored anywhere after redaction?","acceptedAnswer":{"@type":"Answer","text":"No. The original PII exists only for the duration of a single HTTP response processing inside the V8 Isolate. After redaction, the original value is discarded from memory. No disk writes, no temporary storage, no logs containing the original value."}},{"@type":"Question","name":"Does DLP work with nested JSON responses?","acceptedAnswer":{"@type":"Answer","text":"Yes. The fast-redact path syntax supports deeply nested structures. Patterns like *.customer.email or data[*].users[*].ssn match at any depth. The redaction engine traverses the entire response tree."}},{"@type":"Question","name":"How does Vinkius DLP compare to traditional enterprise DLP?","acceptedAnswer":{"@type":"Answer","text":"Traditional DLP monitors endpoints, email gateways, and network egress for human-initiated data transfers. Vinkius DLP operates at the MCP transport layer — between the API response and the AI model''s context window. No SDK integration, no agent framework modification, and deterministic pattern matching instead of probabilistic ML detection."}}]}'
---

# Zero-Trust PII Redaction

Every API response that passes through Vinkius Cloud is inspected for sensitive data before it reaches the AI model. Credit card numbers, emails, Social Security numbers, API keys, phone numbers, and dozens of other patterns are redacted in memory — the AI model receives the data it needs to function, but without the PII it should never see.

This is not post-processing. It happens at the transport layer, in real time, before the response leaves the V8 Isolate.

<!-- Stat strip -->
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1px;margin:40px 0;background:rgba(255,255,255,0.04);border-radius:10px;overflow:hidden">
<div style="padding:28px 24px;background:#09090f;text-align:center">
<div style="font-size:28px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">In-memory</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:6px;letter-spacing:1px;font-family:Inter,sans-serif">REDACTION ENGINE</div>
</div>
<div style="padding:28px 24px;background:#09090f;text-align:center">
<div style="font-size:28px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">32+</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:6px;letter-spacing:1px;font-family:Inter,sans-serif">BUILT-IN PATTERNS</div>
</div>
<div style="padding:28px 24px;background:#09090f;text-align:center">
<div style="font-size:28px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">Custom</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:6px;letter-spacing:1px;font-family:Inter,sans-serif">REGEX PATTERNS</div>
</div>
</div>

---

<!-- Editorial break -->
<div style="margin:48px 0;padding:56px 40px;background:#09090f;border:1px solid rgba(255,255,255,0.05);border-radius:12px;position:relative;overflow:hidden">
<div style="position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(52,211,153,0.3),transparent)"></div>
<span style="font-size:12px;color:rgba(52,211,153,0.6);letter-spacing:3px;font-weight:700">DATA SHIELDING</span>
<div style="font-size:36px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif;letter-spacing:-1.5px;margin-top:12px;line-height:1.1">Redacted in memory.<br><span style="color:rgba(255,255,255,0.25)">Before AI ever sees it.</span></div>
<div style="font-size:15px;color:rgba(255,255,255,0.4);margin-top:16px;max-width:540px;line-height:1.7;font-family:Inter,sans-serif">Credit cards, emails, SSNs — redacted in memory before AI ever sees them. Compliance isn't a feature, it's the architecture.</div>
</div>

## Why this matters now

AI models memorize data. This is not a theoretical risk — it is a documented, proven behavior with real-world consequences:

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:20px 24px;border:1px solid rgba(239,68,68,0.15);border-radius:8px;background:rgba(239,68,68,0.02)">
<div style="font-size:11px;color:rgba(239,68,68,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">OWASP LLM02:2025</div>
<div style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.6;font-family:Inter,sans-serif">OWASP identified "Sensitive Information Disclosure" as a top risk for LLM applications. PII, financial details, health records, and proprietary data can be exposed through both inputs and outputs of language models.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(239,68,68,0.15);border-radius:8px;background:rgba(239,68,68,0.02)">
<div style="font-size:11px;color:rgba(239,68,68,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">DATA MEMORIZATION</div>
<div style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.6;font-family:Inter,sans-serif">Research demonstrated that GPT-2 could memorize and reproduce Social Security numbers, full names, and email addresses directly from its training data. Any PII that enters the context window becomes a leakage vector.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(239,68,68,0.15);border-radius:8px;background:rgba(239,68,68,0.02)">
<div style="font-size:11px;color:rgba(239,68,68,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">PROMPT EXTRACTION</div>
<div style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.6;font-family:Inter,sans-serif">Prompt injection attacks can extract data from an AI model's context. If a credit card number entered the context via a MCP tool call response, an attacker could extract it through a carefully crafted follow-up prompt.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(239,68,68,0.15);border-radius:8px;background:rgba(239,68,68,0.02)">
<div style="font-size:11px;color:rgba(239,68,68,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">SHADOW AI</div>
<div style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.6;font-family:Inter,sans-serif">Employees use AI tools with enterprise APIs without security review. When those APIs return PII in their responses, that PII flows directly into external AI providers. 72% of security leaders now identify AI-driven breaches as their top concern.</div>
</div>

</div>

The only reliable defense is to prevent PII from reaching the AI model in the first place. Vinkius Cloud's DLP operates at the transport layer — between the API response and the AI model — ensuring that sensitive data is redacted before it enters any context window.

---

## How it works

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#09090f;padding:24px 28px;font-family:ui-monospace,monospace">
<div style="font-size:12px;color:rgba(52,211,153,0.5);letter-spacing:2px;margin-bottom:20px;font-weight:600">DATA FLOW</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">01</span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">AI model sends a tool call (e.g., <code style="font-size:13px;color:rgba(52,211,153,0.6)">get_customer</code>)</span>
</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">02</span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">Upstream API returns full response (including PII: email, SSN, phone, etc.)</span>
</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">03</span>
<span style="font-size:15px;color:rgba(52,211,153,0.6);font-family:Inter,sans-serif;font-weight:600">DLP engine scans response in-memory using <code style="font-size:13px">fast-redact</code> path matching</span>
</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">04</span>
<span style="font-size:15px;color:rgba(52,211,153,0.6);font-family:Inter,sans-serif;font-weight:600">Matched fields replaced with <code style="font-size:13px">[REDACTED]</code> — original data discarded</span>
</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">05</span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">Redaction event logged to Audit Log (field path + pattern, never the original value)</span>
</div>
<div style="display:flex;align-items:center;gap:12px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">06</span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">Sanitized response returned to AI model — PII never enters the context window</span>
</div>
</div>

The redaction happens inside the V8 Isolate, in memory, at the response level. No disk writes. No temporary storage. The original PII exists only for the duration of a single HTTP response processing — and is discarded immediately after redaction.

---

## Built-in patterns

Vinkius Cloud includes 32+ preconfigured patterns organized into six categories. Each pattern uses `fast-redact` path syntax to target specific JSON fields across any response structure:

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:20px 24px;border:1px solid rgba(52,211,153,0.1);border-radius:8px;background:rgba(52,211,153,0.02)">
<div style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:700;margin-bottom:12px;font-family:ui-monospace,monospace">IDENTITY</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);line-height:2;font-family:ui-monospace,monospace">
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.first_name</code><br>
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.last_name</code><br>
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.full_name</code><br>
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.date_of_birth</code><br>
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.dob</code><br>
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.ssn</code><br>
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.social_security</code>
</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(129,140,248,0.1);border-radius:8px;background:rgba(129,140,248,0.02)">
<div style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:700;margin-bottom:12px;font-family:ui-monospace,monospace">FINANCIAL</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);line-height:2;font-family:ui-monospace,monospace">
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.credit_card</code><br>
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.card_number</code><br>
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.cc_number</code><br>
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.bank_account</code><br>
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.routing_number</code><br>
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.iban</code>
</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(245,158,11,0.1);border-radius:8px;background:rgba(245,158,11,0.02)">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:12px;font-family:ui-monospace,monospace">CONTACT</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);line-height:2;font-family:ui-monospace,monospace">
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.email</code><br>
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.email_address</code><br>
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.phone</code><br>
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.phone_number</code><br>
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.mobile</code><br>
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.address</code><br>
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.street</code>
</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(239,68,68,0.1);border-radius:8px;background:rgba(239,68,68,0.02)">
<div style="font-size:11px;color:rgba(239,68,68,0.5);letter-spacing:2px;font-weight:700;margin-bottom:12px;font-family:ui-monospace,monospace">SECURITY</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);line-height:2;font-family:ui-monospace,monospace">
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.password</code><br>
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.passwd</code><br>
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.secret</code><br>
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.api_key</code><br>
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.apikey</code><br>
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.token</code>
</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(34,211,238,0.1);border-radius:8px;background:rgba(34,211,238,0.02)">
<div style="font-size:11px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:700;margin-bottom:12px;font-family:ui-monospace,monospace">LOCATION</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);line-height:2;font-family:ui-monospace,monospace">
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.zip_code</code><br>
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.postal_code</code><br>
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.ip_address</code><br>
<code style="font-size:12px;color:rgba(255,255,255,0.5)">*.ip</code>
</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(255,255,255,0.3);letter-spacing:2px;font-weight:700;margin-bottom:12px;font-family:ui-monospace,monospace">CUSTOM</div>
<div style="font-size:14px;color:rgba(255,255,255,0.4);line-height:1.6;font-family:Inter,sans-serif">Add your own patterns using <code style="font-size:12px">fast-redact</code> path syntax. Use <code style="font-size:12px">*.field</code> for all objects, <code style="font-size:12px">items[*].field</code> for arrays. Any JSON path structure is supported.</div>
</div>

</div>

---

## Global and per-server configuration

DLP operates at two levels — a global default that applies to every new server, and per-server overrides for fine-grained control:

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:20px 24px;border:1px solid rgba(34,211,238,0.1);border-radius:8px;background:rgba(34,211,238,0.02)">
<div style="font-size:11px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">GLOBAL DEFAULTS</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Settings → Data Shielding</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">Define default redaction patterns applied to every new server. A global on/off toggle enables or disables DLP across your entire account. Patterns are added via a smart input with autocomplete suggestions for common PII fields.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(129,140,248,0.1);border-radius:8px;background:rgba(129,140,248,0.02)">
<div style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">PER-SERVER OVERRIDE</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Server → Edit → DLP Patterns</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">Individual servers inherit global defaults but can define additional patterns or override the global set entirely. A CRM API might need <code style="font-size:12px">*.email</code> and <code style="font-size:12px">*.phone</code>; a payment API might need <code style="font-size:12px">*.credit_card</code> and <code style="font-size:12px">*.iban</code>.</div>
</div>

</div>

### DLP UI

The global settings interface features smart autocomplete with 32+ built-in suggestions:

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
<span style="display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border:1px solid rgba(34,211,238,0.2);background:rgba(34,211,238,0.08);border-radius:6px;font-size:12px;color:rgba(34,211,238,0.8)">*.email <span style="color:rgba(34,211,238,0.3);font-size:10px;cursor:pointer">✕</span></span>
<span style="display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border:1px solid rgba(34,211,238,0.2);background:rgba(34,211,238,0.08);border-radius:6px;font-size:12px;color:rgba(34,211,238,0.8)">*.ssn <span style="color:rgba(34,211,238,0.3);font-size:10px;cursor:pointer">✕</span></span>
<span style="display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border:1px solid rgba(34,211,238,0.2);background:rgba(34,211,238,0.08);border-radius:6px;font-size:12px;color:rgba(34,211,238,0.8)">*.credit_card <span style="color:rgba(34,211,238,0.3);font-size:10px;cursor:pointer">✕</span></span>
<span style="display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border:1px solid rgba(34,211,238,0.2);background:rgba(34,211,238,0.08);border-radius:6px;font-size:12px;color:rgba(34,211,238,0.8)">*.phone <span style="color:rgba(34,211,238,0.3);font-size:10px;cursor:pointer">✕</span></span>
<span style="display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border:1px solid rgba(34,211,238,0.2);background:rgba(34,211,238,0.08);border-radius:6px;font-size:12px;color:rgba(34,211,238,0.8)">*.password <span style="color:rgba(34,211,238,0.3);font-size:10px;cursor:pointer">✕</span></span>
</div>

<!-- Input with placeholder -->
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
<div style="font-size:10px;color:rgba(255,255,255,0.15);font-family:Inter,sans-serif">fast-redact paths — Use *.field for all objects, items[*].field for arrays. These defaults are inherited by new servers.</div>
</div>
</div>

---

## Before and after

When DLP is enabled, the AI model receives the same response structure but with sensitive fields redacted:

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:24px 0">

<div style="border:1px solid rgba(239,68,68,0.15);border-radius:8px;overflow:hidden;background:#09090f">
<div style="padding:10px 20px;border-bottom:1px solid rgba(255,255,255,0.04)">
<span style="font-size:11px;color:rgba(239,68,68,0.5);letter-spacing:2px;font-weight:600">WITHOUT DLP</span>
</div>
<div style="padding:16px 20px;font-size:12px;color:rgba(255,255,255,0.5);font-family:ui-monospace,monospace;line-height:1.8">
{<br>
&nbsp;&nbsp;"name": "Jane Doe",<br>
&nbsp;&nbsp;"email": "<span style="color:rgba(239,68,68,0.7)">jane@company.com</span>",<br>
&nbsp;&nbsp;"ssn": "<span style="color:rgba(239,68,68,0.7)">078-05-1120</span>",<br>
&nbsp;&nbsp;"phone": "<span style="color:rgba(239,68,68,0.7)">+1-555-0123</span>",<br>
&nbsp;&nbsp;"role": "admin"<br>
}
</div>
</div>

<div style="border:1px solid rgba(52,211,153,0.15);border-radius:8px;overflow:hidden;background:#09090f">
<div style="padding:10px 20px;border-bottom:1px solid rgba(255,255,255,0.04)">
<span style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:600">WITH DLP</span>
</div>
<div style="padding:16px 20px;font-size:12px;color:rgba(255,255,255,0.5);font-family:ui-monospace,monospace;line-height:1.8">
{<br>
&nbsp;&nbsp;"name": "Jane Doe",<br>
&nbsp;&nbsp;"email": "<span style="color:rgba(52,211,153,0.7)">[REDACTED]</span>",<br>
&nbsp;&nbsp;"ssn": "<span style="color:rgba(52,211,153,0.7)">[REDACTED]</span>",<br>
&nbsp;&nbsp;"phone": "<span style="color:rgba(52,211,153,0.7)">[REDACTED]</span>",<br>
&nbsp;&nbsp;"role": "admin"<br>
}
</div>
</div>

</div>

The AI model still receives the response structure and non-sensitive fields (`name`, `role`) — it can fulfill its task. But the PII (`email`, `ssn`, `phone`) is replaced with `[REDACTED]` before the response ever leaves the V8 Isolate.

---

## Audit trail integration

Every redaction event is recorded in the [Audit Log](/vinkius-mcp-servers/security/audit-log):

- **DLP column** — the number of redacted fields per tool call (amber when > 0)
- **Pattern matched** — which DLP pattern triggered the redaction
- **Field path** — which JSON path was redacted (e.g., `customer.email`)

Critically, the audit log **never records the original sensitive value**. It logs `customer.email: [REDACTED by pattern:*.email]` — not the actual email address. This allows compliance teams to verify that DLP is working correctly without re-exposing the data it was designed to protect.

---

## Compliance impact

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">GDPR — DATA MINIMIZATION</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);line-height:1.6;font-family:Inter,sans-serif">GDPR requires that personal data processing be limited to what is strictly necessary. DLP enforces data minimization at the transport layer — only the fields the AI model actually needs are transmitted. PII is stripped before crossing the system boundary.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">SOC 2 — PROCESSING INTEGRITY</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);line-height:1.6;font-family:Inter,sans-serif">SOC 2 Type II requires demonstrable controls over data processing. DLP redaction events, logged immutably in the audit trail, provide verifiable evidence that sensitive data was masked before AI model exposure.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">HIPAA — PHI PROTECTION</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);line-height:1.6;font-family:Inter,sans-serif">For healthcare APIs, DLP ensures that protected health information is redacted before reaching the AI model. Configure patterns for patient identifiers, medical record numbers, and diagnostic codes to maintain HIPAA compliance.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(239,68,68,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">PCI-DSS — CARDHOLDER DATA</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);line-height:1.6;font-family:Inter,sans-serif">Payment card data patterns (<code style="font-size:12px">*.credit_card</code>, <code style="font-size:12px">*.card_number</code>, <code style="font-size:12px">*.cc_number</code>) ensure cardholder data is redacted before AI exposure. The redaction event is logged for PCI compliance assessments.</div>
</div>

</div>

---

## The industry context

Data Loss Prevention for AI agents is fundamentally different from traditional DLP. Enterprise DLP solutions monitor endpoints, email gateways, and network egress points for sensitive data. They were designed for human-initiated data transfers — a user attaching a file to an email, uploading a document to a cloud service, copying data to a USB drive.

AI agents introduce a different data flow. The AI model sends a tool call, the API returns data (potentially including PII), and the response enters the model's context window. Traditional DLP tools cannot inspect this flow because it operates at the MCP transport layer — between the API and the AI model, inside a proxy.

Emerging solutions recognize this gap. Microsoft extended DLP capabilities for AI scenarios at Ignite 2025, focusing on preventing sensitive data in AI agent prompts. MCP gateway solutions advocate for pre-model PII inspection at the gateway layer. Google Cloud's DLP API can identify and redact PII, but requires explicit SDK integration.

Vinkius Cloud's DLP operates at the only point in the architecture where redaction is both complete and invisible to the AI model. It sits between the upstream API response and the model's context window, inside the V8 Isolate, using deterministic `fast-redact` path matching rather than probabilistic ML-based detection. The patterns are explicit, auditable, and predictable — you know exactly which fields are redacted, every time, with zero false negatives on configured paths.

No SDK integration. No agent framework modification. No ML model uncertainty. Toggle DLP on, configure your patterns, and every response is sanitized before the AI model sees it.

---

## Next steps

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:32px 0">

<a href="/security/" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<span style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:600">OVERVIEW</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Security Overview</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Back to the full security overview.</div>
<span style="font-size:13px;color:rgba(129,140,248,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Overview →</span>
</a>

<a href="/security/audit-log" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<span style="font-size:11px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:600">OBSERVABILITY</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Audit Log</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Every redaction event logged with full metadata.</div>
<span style="font-size:13px;color:rgba(34,211,238,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Learn more →</span>
</a>

</div>

---

## Frequently Asked Questions

### What types of PII does Vinkius DLP detect?
Vinkius Cloud includes 32+ built-in patterns across six categories: Identity (names, SSN, date of birth), Financial (credit cards, bank accounts, IBAN), Contact (email, phone, address), Security (passwords, API keys, tokens), Location (zip codes, IP addresses), and Custom (any regex pattern you define).

### Does DLP add latency to API responses?
No measurable latency. Redaction happens in-memory inside the V8 Isolate using `fast-redact` path matching — a deterministic, sub-millisecond operation. There is no network roundtrip, no external API call, and no ML inference step.

### Can I add custom redaction patterns?
Yes. In addition to the 32+ built-in patterns, you can add custom patterns using `fast-redact` path syntax. Use `*.field` for all objects or `items[*].field` for arrays. Any JSON path structure is supported.

### Is the original data stored anywhere after redaction?
No. The original PII exists only for the duration of a single HTTP response processing inside the V8 Isolate. After redaction, the original value is discarded from memory. No disk writes, no temporary storage, no logs containing the original value.

### Does DLP work with nested JSON responses?
Yes. The `fast-redact` path syntax supports deeply nested structures. Patterns like `*.customer.email` or `data[*].users[*].ssn` match at any depth. The redaction engine traverses the entire response tree.

### How does Vinkius DLP compare to traditional enterprise DLP?
Traditional DLP monitors endpoints, email gateways, and network egress for human-initiated data transfers. Vinkius DLP operates at the MCP transport layer — between the API response and the AI model's context window. No SDK integration, no agent framework modification, and deterministic pattern matching instead of probabilistic ML detection.
