---
title: "How to Deploy MCP Servers — 3 Methods | Vinkius Cloud"
description: "Deploy an MCP server in under 60 seconds via OpenAPI import, manual API configuration, or AI Agent Skills. Built-in governance, DLP, and edge runtime included."
head:
  - - meta
    - property: og:title
      content: "How to Deploy MCP Servers — 3 Methods | Vinkius Cloud"
  - - meta
    - property: og:description
      content: "Deploy an MCP server in under 60 seconds via OpenAPI import, manual API, or Agent Skills. Built-in governance and edge runtime included."
  - - meta
    - name: keywords
      content: "deploy MCP server, create MCP server, MCP deployment, OpenAPI MCP server, manual API MCP, agent skills MCP, Model Context Protocol deployment, MCP hosting"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What deployment methods does Vinkius Cloud support?","acceptedAnswer":{"@type":"Answer","text":"Vinkius Cloud offers three ways to deploy an MCP server: OpenAPI Import (paste a spec URL to auto-generate all tools), Manual API (connect any HTTPS endpoint and define tools individually), and Agent Skills (deploy text-based knowledge, procedures, and playbooks without any API backend)."}},{"@type":"Question","name":"How fast is the deployment process?","acceptedAnswer":{"@type":"Answer","text":"All three methods deploy in under 60 seconds. OpenAPI Import is the fastest: paste a spec URL, select auth, click Deploy. The server is live on the global edge with DLP, FinOps Guard, and HMAC-authenticated connection tokens already configured."}},{"@type":"Question","name":"What happens behind the scenes when I click Deploy?","acceptedAnswer":{"@type":"Answer","text":"The platform provisions an isolated V8 sandbox, configures the security layer (AES-256 credential encryption, SSRF protection), activates data protection (DLP and FinOps Guard), and distributes the server to the global edge. You receive an MCP URL, a Config JSON block, and a connection token."}},{"@type":"Question","name":"Can I mix deployment methods on the same account?","acceptedAnswer":{"@type":"Answer","text":"Yes. Each server is independent. You can have an OpenAPI-imported server for your public API, a Manual API server for internal tools, and an Agent Skills server for company policies — all managed from the same dashboard."}},{"@type":"Question","name":"Do I need to redeploy when I add or change tools?","acceptedAnswer":{"@type":"Answer","text":"No. After the initial deployment, you can add new tools, edit existing ones, or toggle them on and off from the server detail page. Changes take effect immediately without any redeployment or downtime."}},{"@type":"Question","name":"What security features are included with every deployment?","acceptedAnswer":{"@type":"Answer","text":"Every server automatically includes DLP (PII redaction for emails, SSNs, credit cards, phone numbers), FinOps Guard (smart array truncation to reduce token consumption), SSRF protection (blocks requests to private networks), and AES-256 credential encryption with runtime-only decryption."}}]}'
---

# How to Deploy

Deploying an MCP server on Vinkius Cloud means taking an existing API, a spec file, or even plain text knowledge — and making it discoverable and callable by AI models. The platform handles runtime, authentication, protocol translation, and governance. You focus on what the server exposes; Vinkius Cloud handles everything else.

The entire deployment process takes less than 60 seconds regardless of which mode you choose.

---

<!-- Editorial break: Three paths -->
<div style="margin:48px 0;padding:56px 40px;background:#09090f;border:1px solid rgba(255,255,255,0.05);border-radius:12px;position:relative;overflow:hidden">
<div style="position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(129,140,248,0.3),transparent)"></div>
<span style="font-size:9px;color:rgba(129,140,248,0.6);letter-spacing:3px;font-weight:700">THREE PATHS</span>
<div style="font-size:36px;color:#fff;font-weight:700;font-family:Inter,system-ui,sans-serif;letter-spacing:-1.5px;margin-top:12px;line-height:1.1">Spec. Code. Knowledge.<br><span style="color:rgba(255,255,255,0.25)">Choose your starting point.</span></div>
<div style="font-size:14px;color:rgba(255,255,255,0.4);margin-top:16px;max-width:540px;line-height:1.7;font-family:Inter,sans-serif">Every deployment starts from the same wizard — <strong style="color:rgba(255,255,255,0.55)">Servers → Create Server</strong> — and branches based on how your tools are defined.</div>
</div>

## The deployment wizard

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:8px;overflow:hidden;background:#09090f;font-family:ui-monospace,monospace">

<!-- Header -->
<div style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;gap:8px">
<span style="width:6px;height:6px;border-radius:50%;background:#22c55e;display:inline-block"></span>
<span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">VINKIUS CLOUD SETUP</span>
</div>
<div style="padding:20px 20px 8px">
<div style="font-size:22px;color:#fff;font-family:Inter,system-ui,sans-serif;font-weight:700">Deploy MCP Server.</div>
<span style="font-size:12px;color:rgba(255,255,255,0.3)">How would you like to configure your server?</span>
</div>

<!-- Option 1: OpenAPI -->
<div style="margin:8px 16px;padding:16px 20px;border:1px solid rgba(255,255,255,0.06);border-radius:6px;display:flex;align-items:flex-start;gap:16px">
<div style="width:36px;height:36px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;flex-shrink:0">
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(129,140,248,0.8)" stroke-width="1.5"><path d="M4 7l8 4 8-4M4 12l8 4 8-4M4 17l8 4 8-4"/></svg>
</div>
<div>
<div style="font-size:13px;color:#fff;font-weight:600;font-family:Inter,sans-serif">OpenAPI / Swagger</div>
<div style="font-size:10px;color:rgba(255,255,255,0.35);margin-top:4px;font-family:Inter,sans-serif">One URL in, every tool out. Auto-discovers endpoints and generates MCP tools instantly.</div>
<div style="display:flex;gap:12px;margin-top:8px">
<span style="font-size:9px;color:rgba(129,140,248,0.7)">Auto-generates tools</span>
<span style="font-size:9px;color:rgba(34,197,94,0.7)">MCP annotations</span>
</div>
</div>
</div>

<!-- Option 2: Manual -->
<div style="margin:8px 16px;padding:16px 20px;border:1px solid rgba(255,255,255,0.06);border-radius:6px;display:flex;align-items:flex-start;gap:16px">
<div style="width:36px;height:36px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;flex-shrink:0">
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(129,140,248,0.8)" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 12l3 3 5-6"/></svg>
</div>
<div>
<div style="font-size:13px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Manual API</div>
<div style="font-size:10px;color:rgba(255,255,255,0.35);margin-top:4px;font-family:Inter,sans-serif">Start from scratch. Name your server, set the base URL, and add endpoints when you are ready.</div>
</div>
</div>

<!-- Option 3: Agent Skills -->
<div style="margin:8px 16px 16px;padding:16px 20px;border:1px solid rgba(255,255,255,0.06);border-radius:6px;display:flex;align-items:flex-start;gap:16px">
<div style="width:36px;height:36px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;flex-shrink:0">
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(129,140,248,0.8)" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>
</div>
<div>
<div style="font-size:13px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Agent Skills</div>
<div style="font-size:10px;color:rgba(255,255,255,0.35);margin-top:4px;font-family:Inter,sans-serif">Define reusable knowledge and instructions that AI agents can discover and follow.</div>
<div style="display:flex;gap:12px;margin-top:8px">
<span style="font-size:9px;color:rgba(129,140,248,0.7)">Progressive disclosure</span>
<span style="font-size:9px;color:rgba(34,197,94,0.7)">SKILL.md standard</span>
</div>
</div>
</div>

</div>

The wizard adapts based on the mode you select. Each mode has a dedicated guide with step-by-step instructions and screenshots:

---

## Choosing a deployment mode

<!-- Mode cards -->
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin:32px 0">

<!-- OpenAPI -->
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:10px;overflow:hidden;background:#09090f">
<div style="padding:20px 24px;border-bottom:1px solid rgba(255,255,255,0.04)">
<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
<div style="width:32px;height:32px;border-radius:8px;background:rgba(129,140,248,0.12);border:1px solid rgba(129,140,248,0.25);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:rgba(129,140,248,0.8);font-family:Inter,sans-serif">O</div>
<span style="font-size:8px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:600">OPENAPI IMPORT</span>
</div>
<div style="font-size:15px;color:#fff;font-weight:600;font-family:Inter,sans-serif">From spec to tools in 60 seconds</div>
</div>
<div style="padding:20px 24px">
<div style="font-size:12px;color:rgba(255,255,255,0.35);line-height:1.7;font-family:Inter,sans-serif;margin-bottom:16px">Paste an OpenAPI or Swagger spec URL. The platform reads it, auto-discovers every endpoint, generates MCP tool descriptions with parameter schemas, and assigns semantic annotations (read-only, destructive, idempotent).</div>
<div style="font-size:10px;color:rgba(255,255,255,0.2);margin-bottom:8px;font-family:Inter,sans-serif">BEST FOR</div>
<div style="font-size:11px;color:rgba(255,255,255,0.4);line-height:1.6;font-family:Inter,sans-serif">REST APIs with a published OpenAPI/Swagger specification — Stripe, Twilio, any service with a public <code style="font-size:10px;color:rgba(129,140,248,0.6);background:rgba(129,140,248,0.06);padding:1px 5px;border-radius:3px">.yaml</code> or <code style="font-size:10px;color:rgba(129,140,248,0.6);background:rgba(129,140,248,0.06);padding:1px 5px;border-radius:3px">.json</code> spec.</div>
<a href="deploy-openapi.html" style="display:block;margin-top:16px;font-size:10px;color:rgba(129,140,248,0.7);text-decoration:none;font-family:Inter,sans-serif;font-weight:600">Full guide →</a>
</div>
</div>

<!-- Manual API -->
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:10px;overflow:hidden;background:#09090f">
<div style="padding:20px 24px;border-bottom:1px solid rgba(255,255,255,0.04)">
<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
<div style="width:32px;height:32px;border-radius:8px;background:rgba(34,211,238,0.12);border:1px solid rgba(34,211,238,0.25);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:rgba(34,211,238,0.8);font-family:Inter,sans-serif">M</div>
<span style="font-size:8px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:600">MANUAL API</span>
</div>
<div style="font-size:15px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Full control, no spec needed</div>
</div>
<div style="padding:20px 24px">
<div style="font-size:12px;color:rgba(255,255,255,0.35);line-height:1.7;font-family:Inter,sans-serif;margin-bottom:16px">Name your server, provide a base URL, and configure authentication. You define endpoints individually — each one becomes an MCP tool that AI models can invoke.</div>
<div style="font-size:10px;color:rgba(255,255,255,0.2);margin-bottom:8px;font-family:Inter,sans-serif">BEST FOR</div>
<div style="font-size:11px;color:rgba(255,255,255,0.4);line-height:1.6;font-family:Inter,sans-serif">Internal APIs without a public spec, custom endpoints, or services where you want to expose only specific routes rather than the entire surface area.</div>
<a href="deploy-manual-api.html" style="display:block;margin-top:16px;font-size:10px;color:rgba(34,211,238,0.7);text-decoration:none;font-family:Inter,sans-serif;font-weight:600">Full guide →</a>
</div>
</div>

<!-- Agent Skills -->
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:10px;overflow:hidden;background:#09090f">
<div style="padding:20px 24px;border-bottom:1px solid rgba(255,255,255,0.04)">
<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
<div style="width:32px;height:32px;border-radius:8px;background:rgba(52,211,153,0.12);border:1px solid rgba(52,211,153,0.25);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:rgba(52,211,153,0.8);font-family:Inter,sans-serif">S</div>
<span style="font-size:8px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:600">AGENT SKILLS</span>
</div>
<div style="font-size:15px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Knowledge blocks, no API required</div>
</div>
<div style="padding:20px 24px">
<div style="font-size:12px;color:rgba(255,255,255,0.35);line-height:1.7;font-family:Inter,sans-serif;margin-bottom:16px">Write procedures, playbooks, FAQs, and decision trees as text. AI agents discover them through progressive disclosure — calling a skill returns structured knowledge the model can act on.</div>
<div style="font-size:10px;color:rgba(255,255,255,0.2);margin-bottom:8px;font-family:Inter,sans-serif">BEST FOR</div>
<div style="font-size:11px;color:rgba(255,255,255,0.4);line-height:1.6;font-family:Inter,sans-serif">Operational knowledge, support playbooks, onboarding guides, and any structured text that AI agents should follow — without needing an API backend.</div>
<a href="deploy-agent-skills.html" style="display:block;margin-top:16px;font-size:10px;color:rgba(52,211,153,0.7);text-decoration:none;font-family:Inter,sans-serif;font-weight:600">Full guide →</a>
</div>
</div>

</div>

### Quick comparison

| | OpenAPI Import | Manual API | Agent Skills |
|---|---|---|---|
| **Input** | Spec URL | Base URL + endpoints | Text content |
| **Tool generation** | Automatic | Manual per-endpoint | Automatic per-skill |
| **Auth config** | During wizard | During wizard | Not required |
| **Best for** | Published REST APIs | Internal/partial APIs | Knowledge & procedures |
| **Time to deploy** | ~30 seconds | ~2 minutes | ~1 minute |

---

<!-- Editorial break: Provisioning -->
<div style="margin:48px 0;padding:56px 40px;background:#09090f;border:1px solid rgba(255,255,255,0.05);border-radius:12px;position:relative;overflow:hidden">
<div style="position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(245,158,11,0.3),transparent)"></div>
<span style="font-size:9px;color:rgba(245,158,11,0.6);letter-spacing:3px;font-weight:700">PROVISIONING</span>
<div style="font-size:36px;color:#fff;font-weight:700;font-family:Inter,system-ui,sans-serif;letter-spacing:-1.5px;margin-top:12px;line-height:1.1">What happens when<br><span style="color:rgba(255,255,255,0.25)">you hit Deploy.</span></div>
</div>

## The deployment lifecycle

When you click **Deploy**, the platform executes a provisioning pipeline that transforms your input — whether it's a spec URL, an API config, or skill text — into a running MCP server. Here's what happens in sequence:

<div style="margin:32px 0">

<div style="display:flex;align-items:flex-start;gap:20px;margin-bottom:24px;padding:20px 24px;border-left:2px solid rgba(129,140,248,0.3);background:rgba(129,140,248,0.02);border-radius:0 8px 8px 0">
<span style="font-size:22px;color:rgba(129,140,248,0.5);font-weight:700;font-family:Inter,sans-serif;min-width:32px">01</span>
<div>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Spec parsing and validation</div>
<div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px;line-height:1.6;font-family:Inter,sans-serif">For OpenAPI deployments, the platform fetches your spec, validates syntax and schema, resolves <code style="font-size:10px;color:rgba(129,140,248,0.6);background:rgba(129,140,248,0.06);padding:1px 5px;border-radius:3px">$ref</code> references, and extracts endpoint metadata. For Manual API, it validates your base URL and auth configuration. For Skills, it parses SKILL.md structure.</div>
</div>
</div>

<div style="display:flex;align-items:flex-start;gap:20px;margin-bottom:24px;padding:20px 24px;border-left:2px solid rgba(34,211,238,0.3);background:rgba(34,211,238,0.02);border-radius:0 8px 8px 0">
<span style="font-size:22px;color:rgba(34,211,238,0.5);font-weight:700;font-family:Inter,sans-serif;min-width:32px">02</span>
<div>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Tool generation</div>
<div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px;line-height:1.6;font-family:Inter,sans-serif">Each endpoint or skill becomes an MCP tool with a structured name, description, and input schema derived from your spec's parameters and request bodies. The platform also assigns <strong style="color:rgba(255,255,255,0.55)">semantic annotations</strong> — marking GET endpoints as read-only, DELETE as destructive, and inferring idempotency from HTTP verbs.</div>
</div>
</div>

<div style="display:flex;align-items:flex-start;gap:20px;margin-bottom:24px;padding:20px 24px;border-left:2px solid rgba(52,211,153,0.3);background:rgba(52,211,153,0.02);border-radius:0 8px 8px 0">
<span style="font-size:22px;color:rgba(52,211,153,0.5);font-weight:700;font-family:Inter,sans-serif;min-width:32px">03</span>
<div>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Credential encryption</div>
<div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px;line-height:1.6;font-family:Inter,sans-serif">If you configured authentication (Bearer token, Basic Auth, or Custom Header), the credentials are encrypted at rest and stored in the server's vault. They are decrypted only at request time, injected into the upstream request, and never written to logs or exposed in the Dashboard.</div>
</div>
</div>

<div style="display:flex;align-items:flex-start;gap:20px;margin-bottom:24px;padding:20px 24px;border-left:2px solid rgba(245,158,11,0.3);background:rgba(245,158,11,0.02);border-radius:0 8px 8px 0">
<span style="font-size:22px;color:rgba(245,158,11,0.5);font-weight:700;font-family:Inter,sans-serif;min-width:32px">04</span>
<div>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Governance auto-setup</div>
<div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px;line-height:1.6;font-family:Inter,sans-serif">The Egress Firewall activates automatically. DLP (Data Loss Prevention) scans are enabled by default — every response will be inspected for PII before reaching AI models. FinOps Guard sets an initial payload budget. SSRF protection blocks internal network requests from the upstream API.</div>
</div>
</div>

<div style="display:flex;align-items:flex-start;gap:20px;padding:20px 24px;border-left:2px solid rgba(192,132,252,0.3);background:rgba(192,132,252,0.02);border-radius:0 8px 8px 0">
<span style="font-size:22px;color:rgba(192,132,252,0.5);font-weight:700;font-family:Inter,sans-serif;min-width:32px">05</span>
<div>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif">V8 Isolate provisioning</div>
<div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px;line-height:1.6;font-family:Inter,sans-serif">The server is deployed into a V8 Isolate sandbox — the same technology that powers Cloudflare Workers. Each server has its own isolated memory, no shared state between servers, and zero cold-start latency. The connection token is generated and the MCP URL becomes live immediately.</div>
</div>
</div>

</div>

---

## Automatic governance

Every deployment activates a set of security and governance features by default. You don't need to configure them — they're part of the platform:

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:32px 0">

<div style="border:1px solid rgba(255,255,255,0.08);border-radius:10px;overflow:hidden;background:#09090f;padding:20px 24px">
<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
<span style="font-size:8px;color:rgba(34,197,94,0.8);padding:3px 10px;border:1px solid rgba(34,197,94,0.2);border-radius:4px;font-weight:600;letter-spacing:1px">● DLP</span>
</div>
<div style="font-size:13px;color:#fff;font-weight:600;font-family:Inter,sans-serif;margin-bottom:8px">Data Loss Prevention</div>
<div style="font-size:12px;color:rgba(255,255,255,0.35);line-height:1.7;font-family:Inter,sans-serif">Scans every API response for PII — emails, phone numbers, credit card numbers, social security numbers — and redacts them in-place before the data reaches the AI model. The Dashboard tracks total redactions.</div>
</div>

<div style="border:1px solid rgba(255,255,255,0.08);border-radius:10px;overflow:hidden;background:#09090f;padding:20px 24px">
<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
<span style="font-size:8px;color:rgba(245,158,11,0.8);padding:3px 10px;border:1px solid rgba(245,158,11,0.2);border-radius:4px;font-weight:600;letter-spacing:1px">FINOPS</span>
</div>
<div style="font-size:13px;color:#fff;font-weight:600;font-family:Inter,sans-serif;margin-bottom:8px">FinOps Guard</div>
<div style="font-size:12px;color:rgba(255,255,255,0.35);line-height:1.7;font-family:Inter,sans-serif">Enforces a payload size budget. When an API response exceeds the threshold, FinOps Guard truncates it to prevent the AI model from wasting tokens parsing excessively large payloads.</div>
</div>

<div style="border:1px solid rgba(255,255,255,0.08);border-radius:10px;overflow:hidden;background:#09090f;padding:20px 24px">
<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
<span style="font-size:8px;color:rgba(239,68,68,0.8);padding:3px 10px;border:1px solid rgba(239,68,68,0.2);border-radius:4px;font-weight:600;letter-spacing:1px">SSRF</span>
</div>
<div style="font-size:13px;color:#fff;font-weight:600;font-family:Inter,sans-serif;margin-bottom:8px">SSRF Protection</div>
<div style="font-size:12px;color:rgba(255,255,255,0.35);line-height:1.7;font-family:Inter,sans-serif">Blocks requests to private IP ranges, localhost, and internal cloud metadata endpoints. This prevents a malicious upstream API from using the platform as a proxy to scan your internal network.</div>
</div>

<div style="border:1px solid rgba(255,255,255,0.08);border-radius:10px;overflow:hidden;background:#09090f;padding:20px 24px">
<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
<span style="font-size:8px;color:rgba(129,140,248,0.8);padding:3px 10px;border:1px solid rgba(129,140,248,0.2);border-radius:4px;font-weight:600;letter-spacing:1px">AUDIT</span>
</div>
<div style="font-size:13px;color:#fff;font-weight:600;font-family:Inter,sans-serif;margin-bottom:8px">Audit logging</div>
<div style="font-size:12px;color:rgba(255,255,255,0.35);line-height:1.7;font-family:Inter,sans-serif">Every deployment, configuration change, token generation, and tool invocation is recorded. The Audit Logs tab on each server shows the full history — who changed what, and when.</div>
</div>

</div>

::: tip Customize after deployment
All governance features can be fine-tuned after deployment. Toggle DLP on or off per server, adjust FinOps thresholds, or enable TOON compression from the server's Settings tab. See [Security and Governance](security/index.md) for details.
:::

---

<!-- Editorial break: Vurb.ts -->
<div style="margin:48px 0;padding:56px 40px;background:#09090f;border:1px solid rgba(255,255,255,0.05);border-radius:12px;position:relative;overflow:hidden">
<div style="position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(192,132,252,0.3),transparent)"></div>
<span style="font-size:9px;color:rgba(192,132,252,0.6);letter-spacing:3px;font-weight:700">FOR DEVELOPERS</span>
<div style="font-size:36px;color:#fff;font-weight:700;font-family:Inter,system-ui,sans-serif;letter-spacing:-1.5px;margin-top:12px;line-height:1.1">Build with Vurb.ts.<br><span style="color:rgba(255,255,255,0.25)">Deploy with one command.</span></div>
<div style="font-size:14px;color:rgba(255,255,255,0.4);margin-top:16px;max-width:540px;line-height:1.7;font-family:Inter,sans-serif">If you're building custom MCP servers with code, <a href="https://vurb.vinkius.com" style="color:rgba(192,132,252,0.7);text-decoration:none;font-weight:600">Vurb.ts</a> is the open-source TypeScript framework — and it ships with a direct deployment path to Vinkius Cloud.</div>
</div>

## Deploying from code with `vurb deploy`

[Vurb.ts](https://vurb.vinkius.com) is the open-source TypeScript framework for building MCP servers. When your server is ready for production, a single CLI command deploys it to Vinkius Cloud:

```bash
npx vurb deploy
```

This command:

1. **Bundles** your server into a self-contained Fat Bundle (IIFE format) — all dependencies (Zod, MCP SDK, your tools) are included.
2. **Compresses** the bundle with gzip and computes a content hash for integrity verification.
3. **Uploads** the bundle to Vinkius Cloud Edge, where it runs in a V8 Isolate — the same runtime used by all other deployment modes.

The CLI reads configuration from `.vurbrc` in your project root:

```json
{
  "remote": "https://cloud.vinkius.com",
  "serverId": "srv_abc123"
}
```

Set your deploy token as an environment variable — typically in CI:

```bash
export VURB_DEPLOY_TOKEN=tok_xxxx
npx vurb deploy
```

::: info When to use `vurb deploy` vs. the Dashboard
Use the Dashboard's wizard (OpenAPI Import, Manual API, Agent Skills) when you want to deploy without writing code — the platform generates the MCP server for you. Use `vurb deploy` when you've built a custom server with Vurb.ts and want full control over tool logic, middleware, presenters, and the MCP lifecycle. Both paths end up running in the same V8 Isolate runtime with the same governance features.
:::

### What makes this different

Unlike the Dashboard wizard modes, `vurb deploy` gives you access to the entire Vurb.ts ecosystem:

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:20px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<div style="font-size:13px;color:#fff;font-weight:600;font-family:Inter,sans-serif;margin-bottom:8px">Custom middleware</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35);line-height:1.6;font-family:Inter,sans-serif">Auth, rate limiting, logging, caching — middleware runs before every tool call, giving you full request lifecycle control.</div>
</div>

<div style="padding:20px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<div style="font-size:13px;color:#fff;font-weight:600;font-family:Inter,sans-serif;margin-bottom:8px">Presenter layer</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35);line-height:1.6;font-family:Inter,sans-serif">Shape tool responses for AI consumption — select fields, transform data, add context — separating business logic from AI presentation.</div>
</div>

<div style="padding:20px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<div style="font-size:13px;color:#fff;font-weight:600;font-family:Inter,sans-serif;margin-bottom:8px">Governance lockfile</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35);line-height:1.6;font-family:Inter,sans-serif"><code style="font-size:10px;color:rgba(192,132,252,0.6);background:rgba(192,132,252,0.06);padding:1px 5px;border-radius:3px">vurb.lock</code> captures every tool's behavioral contract — SOC2-auditable, PR-diffable, and verifiable in CI.</div>
</div>

</div>

---

<!-- Editorial break: After deploy -->
<div style="margin:48px 0;padding:56px 40px;background:#09090f;border:1px solid rgba(255,255,255,0.05);border-radius:12px;position:relative;overflow:hidden">
<div style="position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(52,211,153,0.3),transparent)"></div>
<span style="font-size:9px;color:rgba(52,211,153,0.6);letter-spacing:3px;font-weight:700">DEPLOYMENT COMPLETE</span>
<div style="font-size:36px;color:#fff;font-weight:700;font-family:Inter,system-ui,sans-serif;letter-spacing:-1.5px;margin-top:12px;line-height:1.1">Deployed. Connected.<br><span style="color:rgba(255,255,255,0.25)">Ready for traffic.</span></div>
</div>

## What happens after deployment

Every deployment ends with a success screen that gives you everything needed to connect AI clients immediately:

<!-- Post-deploy items -->
<div style="margin:32px 0">

<div style="display:flex;align-items:flex-start;gap:20px;margin-bottom:24px;padding:20px 24px;border-left:2px solid rgba(129,140,248,0.3);background:rgba(129,140,248,0.02);border-radius:0 8px 8px 0">
<span style="font-size:22px;color:rgba(129,140,248,0.5);font-weight:700;font-family:Inter,sans-serif;min-width:32px">01</span>
<div>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif">MCP URL</div>
<div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px;line-height:1.6;font-family:Inter,sans-serif">Your server's unique endpoint with the auth token embedded. Copy it and paste into any MCP client — the connection is live immediately.</div>
</div>
</div>

<div style="display:flex;align-items:flex-start;gap:20px;margin-bottom:24px;padding:20px 24px;border-left:2px solid rgba(34,211,238,0.3);background:rgba(34,211,238,0.02);border-radius:0 8px 8px 0">
<span style="font-size:22px;color:rgba(34,211,238,0.5);font-weight:700;font-family:Inter,sans-serif;min-width:32px">02</span>
<div>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Config JSON</div>
<div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px;line-height:1.6;font-family:Inter,sans-serif">A ready-to-paste JSON block formatted for Claude Desktop, VS Code, and other MCP clients. No manual formatting needed — just copy and paste into your client's config file.</div>
</div>
</div>

<div style="display:flex;align-items:flex-start;gap:20px;padding:20px 24px;border-left:2px solid rgba(52,211,153,0.3);background:rgba(52,211,153,0.02);border-radius:0 8px 8px 0">
<span style="font-size:22px;color:rgba(52,211,153,0.5);font-weight:700;font-family:Inter,sans-serif;min-width:32px">03</span>
<div>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Cursor deep link</div>
<div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px;line-height:1.6;font-family:Inter,sans-serif">One click opens Cursor and auto-configures the MCP connection. No copying, no pasting, no editing config files — the server is connected to your IDE in a single action.</div>
</div>
</div>

</div>

::: info Server quota
Each plan has a server limit. When you reach it, the wizard shows a message with a link to upgrade. See [Settings and Billing](settings-and-billing.md) for plan details.
:::

---

## Next steps

<!-- Navigation cards -->
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:32px 0">

<a href="deploy-openapi.html" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<span style="font-size:8px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:600">OPENAPI</span>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Deploy via OpenAPI Import</div>
<div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Paste a spec URL and auto-generate tools from every endpoint.</div>
<span style="font-size:10px;color:rgba(129,140,248,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Read guide →</span>
</a>

<a href="deploy-manual-api.html" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<span style="font-size:8px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:600">MANUAL</span>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Deploy via Manual API</div>
<div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Point to any HTTPS endpoint and define tools individually.</div>
<span style="font-size:10px;color:rgba(34,211,238,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Read guide →</span>
</a>

<a href="deploy-agent-skills.html" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<span style="font-size:8px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:600">SKILLS</span>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Deploy Agent Skills</div>
<div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Write knowledge blocks that AI agents can discover and follow.</div>
<span style="font-size:10px;color:rgba(52,211,153,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Read guide →</span>
</a>

</div>

---

## Frequently Asked Questions

### What deployment methods does Vinkius Cloud support?
Vinkius Cloud offers three ways to deploy an MCP server: OpenAPI Import (paste a spec URL to auto-generate all tools), Manual API (connect any HTTPS endpoint and define tools individually), and Agent Skills (deploy text-based knowledge, procedures, and playbooks without any API backend).

### How fast is the deployment process?
All three methods deploy in under 60 seconds. OpenAPI Import is the fastest: paste a spec URL, select auth, click Deploy. The server is live on the global edge with DLP, FinOps Guard, and HMAC-authenticated connection tokens already configured.

### What happens behind the scenes when I click Deploy?
The platform provisions an isolated V8 sandbox, configures the security layer (AES-256 credential encryption, SSRF protection), activates data protection (DLP and FinOps Guard), and distributes the server to the global edge. You receive an MCP URL, a Config JSON block, and a connection token.

### Can I mix deployment methods on the same account?
Yes. Each server is independent. You can have an OpenAPI-imported server for your public API, a Manual API server for internal tools, and an Agent Skills server for company policies — all managed from the same dashboard.

### Do I need to redeploy when I add or change tools?
No. After the initial deployment, you can add new tools, edit existing ones, or toggle them on and off from the server detail page. Changes take effect immediately without any redeployment or downtime.

### What security features are included with every deployment?
Every server automatically includes DLP (PII redaction for emails, SSNs, credit cards, phone numbers), FinOps Guard (smart array truncation to reduce token consumption), SSRF protection (blocks requests to private networks), and AES-256 credential encryption with runtime-only decryption.
