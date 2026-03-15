---
title: "Deploy MCP Server from OpenAPI Spec | Vinkius Cloud"
description: "Paste an OpenAPI or Swagger spec URL and auto-generate a fully governed MCP server in under 30 seconds. Zero code, instant edge deployment with DLP and FinOps."
head:
  - - meta
    - property: og:title
      content: "Deploy MCP Server from OpenAPI Spec | Vinkius Cloud"
  - - meta
    - property: og:description
      content: "Paste an OpenAPI or Swagger spec URL and auto-generate a fully governed MCP server in under 30 seconds. Zero code, instant edge deployment."
  - - meta
    - name: keywords
      content: "deploy MCP server OpenAPI, Swagger MCP tools, OpenAPI to MCP, auto-generate MCP server, import OpenAPI spec, Model Context Protocol OpenAPI, REST API to MCP tools"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Which OpenAPI versions does Vinkius Cloud support?","acceptedAnswer":{"@type":"Answer","text":"Vinkius Cloud supports OpenAPI 2.0 (Swagger), OpenAPI 3.0, and OpenAPI 3.1 specifications in both JSON and YAML formats. You can paste a public URL to the spec or upload the file directly."}},{"@type":"Question","name":"How does the platform convert OpenAPI endpoints into MCP tools?","acceptedAnswer":{"@type":"Answer","text":"The platform parses every path and operation in your spec, generates typed MCP tools with names, descriptions, and input schemas derived from your OpenAPI parameters and request bodies, and applies semantic annotations (read-only, idempotent, or destructive) based on the HTTP verb."}},{"@type":"Question","name":"Can I control which endpoints become MCP tools?","acceptedAnswer":{"@type":"Answer","text":"Yes. After import, all tools are enabled by default, but you can toggle individual tools on or off from the server detail page. You can also edit their descriptions, rename them, or adjust input schemas — without modifying the original spec."}},{"@type":"Question","name":"What authentication methods are supported for the upstream API?","acceptedAnswer":{"@type":"Answer","text":"Vinkius Cloud supports Bearer Token, Basic Auth, Custom Header, and None (public APIs). Credentials are AES-256 encrypted at rest and decrypted only in-memory at the moment the AI calls the tool."}},{"@type":"Question","name":"Do I need to host the OpenAPI spec myself?","acceptedAnswer":{"@type":"Answer","text":"No. You can use any publicly accessible URL — GitHub raw file links, Swagger UI endpoints, API documentation pages that serve the spec. The platform fetches the spec once at import time."}},{"@type":"Question","name":"What happens if I update my API specification later?","acceptedAnswer":{"@type":"Answer","text":"You can re-import the spec at any time from the server detail page. Vinkius Cloud will detect new, modified, and removed endpoints and update your MCP tools accordingly — no need to create a new server."}}]}'
---

# Deploy via OpenAPI Import

Thousands of APIs already publish an OpenAPI or Swagger specification — payment processors, CRMs, project management tools, cloud infrastructure, monitoring platforms, communication services. Every major SaaS product has one.

Vinkius Cloud turns **any of them** into a fully functional MCP server in under 30 seconds. Paste the spec URL, and the platform auto-discovers every endpoint, generates typed MCP tools with semantic annotations, configures authentication, and deploys to the global edge. No code to write, no SDK to install, no infrastructure to manage.

That means every API that already has a spec is one click away from being callable by AI models.

<!-- Stat strip -->
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1px;margin:40px 0;background:rgba(255,255,255,0.04);border-radius:10px;overflow:hidden">
<div style="padding:28px 24px;background:#09090f;text-align:center">
<div style="font-size:28px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">83%</div>
<div style="font-size:13px;color:rgba(255,255,255,0.3);margin-top:6px;letter-spacing:1px;font-family:Inter,sans-serif">API SPEC ADOPTION RATE</div>
</div>
<div style="padding:28px 24px;background:#09090f;text-align:center">
<div style="font-size:28px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">#1</div>
<div style="font-size:13px;color:rgba(255,255,255,0.3);margin-top:6px;letter-spacing:1px;font-family:Inter,sans-serif">API STANDARD WORLDWIDE</div>
</div>
<div style="padding:28px 24px;background:#09090f;text-align:center">
<div style="font-size:28px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">< 30s</div>
<div style="font-size:13px;color:rgba(255,255,255,0.3);margin-top:6px;letter-spacing:1px;font-family:Inter,sans-serif">SPEC TO MCP SERVER</div>
</div>
</div>

## Why this changes everything

Before Vinkius Cloud, connecting an AI model to a REST API required writing a custom MCP server — defining tools by hand, mapping parameters, handling authentication, implementing error handling, and deploying infrastructure. For a 20-endpoint API, that could mean days of work.

With OpenAPI Import, the entire surface area of an existing API becomes available to AI in seconds. The spec already describes every endpoint, every parameter type, every response shape. Vinkius Cloud reads that machine-readable contract and transforms it into MCP tools automatically — complete with:

- **Typed input schemas** derived from your spec's parameter definitions
- **Semantic annotations** (read-only, destructive, idempotent) inferred from HTTP verbs
- **Authentication injection** configured once, applied to every upstream request
- **DLP and FinOps governance** active from the first tool call

The result: any API that publishes a spec is instantly AI-ready. No glue code. No custom server. No deployment pipeline.

---

<!-- Editorial break: The wizard -->
<div style="margin:48px 0;padding:56px 40px;background:#09090f;border:1px solid rgba(255,255,255,0.05);border-radius:12px;position:relative;overflow:hidden">
<div style="position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(129,140,248,0.3),transparent)"></div>
<span style="font-size:12px;color:rgba(129,140,248,0.6);letter-spacing:3px;font-weight:700">THE WIZARD</span>
<div style="font-size:36px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif;letter-spacing:-1.5px;margin-top:12px;line-height:1.1">One URL in,<br><span style="color:rgba(255,255,255,0.25)">every tool out.</span></div>
<div style="font-size:14px;color:rgba(255,255,255,0.4);margin-top:16px;max-width:540px;line-height:1.7;font-family:Inter,sans-serif">Paste your spec URL and we do the rest — endpoints discovered, tools generated, annotations mapped. All on the fly.</div>
</div>

The deployment wizard is a split-screen experience. On the left, a contextual sidebar explains what's happening at each step. On the right, a minimal form collects only what's needed. Three steps — or two, if your API is public.

## Step 1 — Connection

<!-- Sidebar recreation -->
<div style="margin:24px 0;display:grid;grid-template-columns:1fr 1fr;gap:1px;border-radius:10px;overflow:hidden">

<div style="background:#09090f;padding:32px;border:1px solid rgba(255,255,255,0.06);border-radius:10px 0 0 10px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);letter-spacing:2px;font-weight:600">02 — CONNECTION</span>
<div style="font-size:24px;color:rgba(255,255,255,0.9);font-weight:800;font-family:Inter,system-ui,sans-serif;letter-spacing:-1px;margin-top:16px;line-height:1.15">One URL.<br>Every tool.</div>
<div style="font-size:16px;color:rgba(255,255,255,0.4);margin-top:16px;line-height:1.7;font-family:Inter,sans-serif">Paste your spec URL and we do the rest — endpoints discovered, tools generated, annotations mapped. All on the fly.</div>
<div style="font-size:14px;color:rgba(255,255,255,0.2);margin-top:16px;border-left:2px solid rgba(255,255,255,0.08);padding-left:12px;line-height:1.6;font-family:ui-monospace,monospace">OpenAPI 2.0, 3.0, 3.1. JSON or YAML. We handle it.</div>
</div>

<div style="background:#000;padding:32px;border:1px solid rgba(255,255,255,0.06);border-radius:0 10px 10px 0">
<div style="display:flex;align-items:center;gap:6px;margin-bottom:20px">
<div style="width:5px;height:5px;border-radius:50%;background:rgba(255,255,255,0.15)"></div>
<span style="font-size:12px;color:rgba(255,255,255,0.3);letter-spacing:2px;font-family:ui-monospace,monospace">VINKIUS CLOUD SETUP</span>
<span style="font-size:11px;color:rgba(96,165,250,0.8);padding:1px 6px;border:1px solid rgba(96,165,250,0.2);border-radius:2px;background:rgba(96,165,250,0.05)">OpenAPI</span>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);letter-spacing:1.5px;font-weight:700;margin-bottom:6px;font-family:ui-monospace,monospace">OPENAPI / SWAGGER URL</div>
<div style="display:flex;border:1px solid rgba(255,255,255,0.1);border-radius:4px;overflow:hidden;margin-bottom:4px">
<div style="padding:8px 12px;flex:1;font-size:14px;color:rgba(255,255,255,0.35);font-family:ui-monospace,monospace">https://api.company.com/openapi.json</div>
</div>
<div style="display:flex;align-items:center;gap:6px;margin-bottom:20px">
<span style="font-size:13px;color:rgba(52,211,153,0.8)">✦</span>
<span style="font-size:13px;color:rgba(52,211,153,0.7);font-family:Inter,sans-serif">24 endpoints ready for AI</span>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);letter-spacing:1.5px;font-weight:700;margin-bottom:6px;font-family:ui-monospace,monospace">SERVER NAME</div>
<div style="padding:8px 12px;border:1px solid rgba(255,255,255,0.1);border-radius:4px;font-size:14px;color:rgba(255,255,255,0.5);font-family:ui-monospace,monospace;margin-bottom:4px">Production ERP</div>
<div style="font-size:12px;color:rgba(52,211,153,0.5);font-family:Inter,sans-serif;margin-bottom:20px">Auto-filled from spec</div>
<div style="display:flex;align-items:center;gap:6px">
<div style="font-size:13px;color:rgba(255,255,255,0.4);letter-spacing:1.5px;font-weight:700;font-family:ui-monospace,monospace">BASE URL</div>
<span style="font-size:11px;color:rgba(255,255,255,0.2);padding:1px 5px;border:1px solid rgba(255,255,255,0.08);border-radius:2px">Optional</span>
</div>
<div style="padding:8px 12px;border:1px solid rgba(255,255,255,0.1);border-radius:4px;font-size:14px;color:rgba(255,255,255,0.25);font-family:ui-monospace,monospace;margin-top:6px">https://api.company.com/v1</div>
<div style="font-size:12px;color:rgba(255,255,255,0.15);font-family:Inter,sans-serif;margin-top:4px">Auto-detected from the OpenAPI spec if left empty.</div>
</div>

</div>

Paste your OpenAPI / Swagger spec URL. The platform fetches it live and detects:

- **Endpoint count** — displayed instantly as "24 endpoints ready for AI"
- **Server name** — auto-filled from `info.title`
- **Base URL** — auto-filled from `servers[0].url`, override if needed
- **Auth type** — detected from the `security` block and suggested in the next step

::: tip Supported formats
OpenAPI 2.0, 3.0, 3.1. JSON or YAML. External `$ref` references are resolved recursively.
:::

## Step 2 — Security

<!-- Sidebar recreation -->
<div style="margin:24px 0;display:grid;grid-template-columns:1fr 1fr;gap:1px;border-radius:10px;overflow:hidden">

<div style="background:#09090f;padding:32px;border:1px solid rgba(255,255,255,0.06);border-radius:10px 0 0 10px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);letter-spacing:2px;font-weight:600">03 — SECURITY</span>
<div style="font-size:24px;color:rgba(255,255,255,0.9);font-weight:800;font-family:Inter,system-ui,sans-serif;letter-spacing:-1px;margin-top:16px;line-height:1.15">Credentials never<br>leave the vault.</div>
<div style="font-size:16px;color:rgba(255,255,255,0.4);margin-top:16px;line-height:1.7;font-family:Inter,sans-serif">AI agents call your API through us. Keys are AES-256 encrypted at rest, injected at runtime, invisible to the LLM.</div>
<div style="font-size:14px;color:rgba(255,255,255,0.2);margin-top:16px;border-left:2px solid rgba(255,255,255,0.08);padding-left:12px;line-height:1.6;font-family:ui-monospace,monospace">Public API? Skip this — no auth required.</div>
<div style="margin-top:20px">
<span style="font-size:12px;padding:3px 8px;border-radius:3px;background:rgba(52,211,153,0.08);color:rgba(52,211,153,0.7);border:1px solid rgba(52,211,153,0.15);letter-spacing:1px;font-weight:700;font-family:ui-monospace,monospace">🔒 AES-256 VAULT</span>
</div>
</div>

<div style="background:#000;padding:32px;border:1px solid rgba(255,255,255,0.06);border-radius:0 10px 10px 0">
<div style="font-size:13px;color:rgba(255,255,255,0.4);letter-spacing:1.5px;font-weight:700;margin-bottom:12px;font-family:ui-monospace,monospace">AUTHENTICATION VAULT</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);letter-spacing:1.5px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">AUTH TYPE</div>
<div style="padding:8px 12px;border:1px solid rgba(255,255,255,0.1);border-radius:4px;font-size:14px;color:rgba(255,255,255,0.4);font-family:Inter,sans-serif;margin-bottom:16px">Bearer Token ▾</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);letter-spacing:1.5px;font-weight:700;margin-bottom:6px;font-family:ui-monospace,monospace">TOKEN</div>
<div style="padding:8px 12px;border:1px solid rgba(255,255,255,0.1);border-radius:4px;font-size:14px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;margin-bottom:8px">••••••••••••••••••••</div>
<div style="font-size:12px;color:rgba(255,255,255,0.15);font-family:Inter,sans-serif">AES-256 encrypted at rest. Credentials never leave your vault.</div>
</div>

</div>

If the spec declares a `security` block, the wizard detects and suggests the right authentication type. You choose:

| Auth type | What to provide |
|---|---|
| **None — Public API** | Nothing. Step is skipped entirely. |
| **Bearer Token** | Your API token or access key |
| **Basic Auth** | Username and password |
| **Custom Header** | Header name (e.g., `X-API-Key`) and value |

Credentials are **AES-256 encrypted at rest**, decrypted in-memory only when an AI model invokes a tool, and immediately discarded after the upstream call. They never appear in logs, dashboards, or API responses — not even to team admins.

::: tip Public APIs
If no `security` block is present in the spec and you leave auth as "None", this entire step is auto-skipped. The wizard jumps directly to Governance.
:::

## Step 3 — Governance

<!-- Sidebar recreation -->
<div style="margin:24px 0;display:grid;grid-template-columns:1fr 1fr;gap:1px;border-radius:10px;overflow:hidden">

<div style="background:#09090f;padding:32px;border:1px solid rgba(255,255,255,0.06);border-radius:10px 0 0 10px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);letter-spacing:2px;font-weight:600">04 — GOVERNANCE</span>
<div style="font-size:24px;color:rgba(255,255,255,0.9);font-weight:800;font-family:Inter,system-ui,sans-serif;letter-spacing:-1px;margin-top:16px;line-height:1.15">Invisible<br>armor.</div>
<div style="font-size:16px;color:rgba(255,255,255,0.4);margin-top:16px;line-height:1.7;font-family:Inter,sans-serif">PII is masked before it ever touches the model. Large payloads shrink automatically — fewer tokens, same intelligence.</div>
<div style="font-size:14px;color:rgba(255,255,255,0.2);margin-top:16px;border-left:2px solid rgba(255,255,255,0.08);padding-left:12px;line-height:1.6;font-family:ui-monospace,monospace">Both optional. Enable now or toggle later from settings.</div>
<!-- DLP comparison -->
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:20px">
<div>
<span style="font-size:11px;color:rgba(239,68,68,0.5);letter-spacing:1.5px;font-weight:700;display:block;margin-bottom:4px;font-family:ui-monospace,monospace">RAW</span>
<div style="font-size:12px;color:rgba(239,68,68,0.35);font-family:ui-monospace,monospace;background:rgba(239,68,68,0.04);padding:6px 8px;border-radius:3px;border:1px solid rgba(239,68,68,0.08)">{ "email": "user@org.com" }</div>
</div>
<div>
<span style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:1.5px;font-weight:700;display:block;margin-bottom:4px;font-family:ui-monospace,monospace">REDACTED</span>
<div style="font-size:12px;color:rgba(52,211,153,0.5);font-family:ui-monospace,monospace;background:rgba(52,211,153,0.04);padding:6px 8px;border-radius:3px;border:1px solid rgba(52,211,153,0.08)">{ "email": "u***@***.com" }</div>
</div>
</div>
</div>

<div style="background:#000;padding:32px;border:1px solid rgba(255,255,255,0.06);border-radius:0 10px 10px 0">
<div style="font-size:13px;color:rgba(255,255,255,0.4);letter-spacing:1.5px;font-weight:700;margin-bottom:16px;font-family:ui-monospace,monospace">GOVERNANCE CONTROLS</div>

<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border:1px solid rgba(52,211,153,0.12);border-radius:6px;margin-bottom:8px">
<div>
<div style="font-size:15px;color:rgba(255,255,255,0.9);font-weight:600;font-family:Inter,sans-serif">Zero-Trust PII Redaction</div>
<div style="font-size:13px;color:rgba(255,255,255,0.3);margin-top:2px;font-family:Inter,sans-serif">Masks emails, SSNs, and credit cards in RAM before returning data to the AI. GDPR-compliant by default.</div>
</div>
<div style="width:32px;height:16px;border-radius:8px;background:#22c55e;position:relative;flex-shrink:0;margin-left:12px"><div style="width:12px;height:12px;border-radius:50%;background:#fff;position:absolute;right:2px;top:2px"></div></div>
</div>

<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border:1px solid rgba(245,158,11,0.12);border-radius:6px">
<div>
<div style="font-size:15px;color:rgba(255,255,255,0.9);font-weight:600;font-family:Inter,sans-serif">Smart Array Truncation</div>
<div style="font-size:13px;color:rgba(255,255,255,0.3);margin-top:2px;font-family:Inter,sans-serif">Large arrays shrink automatically. Same data, fewer tokens — your context window stays focused.</div>
</div>
<div style="width:32px;height:16px;border-radius:8px;background:#22c55e;position:relative;flex-shrink:0;margin-left:12px"><div style="width:12px;height:12px;border-radius:50%;background:#fff;position:absolute;right:2px;top:2px"></div></div>
</div>

</div>

</div>

Both controls are **enabled by default** and toggle on/off with a single switch:

- **Zero-Trust PII Redaction** — Scans every API response for emails, SSNs, credit cards, and personal identifiers. Masks them in-memory before the data reaches any AI model. GDPR-compliant by default.
- **Smart Array Truncation** — When an API returns arrays with hundreds or thousands of items, the truncation engine shrinks them automatically. The AI gets the same intelligence with fewer tokens. Cost control without losing context.

---

<!-- Editorial break: Deploy -->
<div style="margin:48px 0;padding:56px 40px;background:#09090f;border:1px solid rgba(255,255,255,0.05);border-radius:12px;position:relative;overflow:hidden">
<div style="position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(52,211,153,0.3),transparent)"></div>
<span style="font-size:12px;color:rgba(52,211,153,0.6);letter-spacing:3px;font-weight:700">DEPLOY</span>
<div style="font-size:36px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif;letter-spacing:-1.5px;margin-top:12px;line-height:1.1">Hit Deploy.<br><span style="color:rgba(255,255,255,0.25)">Watch it go live.</span></div>
</div>

## What happens when you deploy

Click **Deploy to Edge**. In real-time, the wizard shows each phase:

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#09090f;padding:24px 28px;font-family:ui-monospace,monospace">
<div style="font-size:12px;color:rgba(52,211,153,0.5);letter-spacing:2px;margin-bottom:20px;font-weight:600">DEPLOYING...</div>
<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
<span style="width:8px;height:8px;border-radius:50%;background:#22c55e;display:inline-block"></span>
<span style="font-size:15px;color:rgba(255,255,255,0.9);font-family:Inter,sans-serif">Parsing OpenAPI specs…</span>
<span style="font-size:12px;color:rgba(52,211,153,0.4);margin-left:auto">✓</span>
</div>
<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
<span style="width:8px;height:8px;border-radius:50%;background:#22c55e;display:inline-block"></span>
<span style="font-size:15px;color:rgba(255,255,255,0.9);font-family:Inter,sans-serif">Sealing V8 Isolate Sandbox…</span>
<span style="font-size:12px;color:rgba(52,211,153,0.4);margin-left:auto">✓</span>
</div>
<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
<span style="width:8px;height:8px;border-radius:50%;background:#22c55e;display:inline-block"></span>
<span style="font-size:15px;color:rgba(255,255,255,0.9);font-family:Inter,sans-serif">Injecting Zero-Trust DLP…</span>
<span style="font-size:12px;color:rgba(52,211,153,0.4);margin-left:auto">✓</span>
</div>
<div style="display:flex;align-items:center;gap:10px">
<span style="width:8px;height:8px;border-radius:50%;background:#22c55e;display:inline-block"></span>
<span style="font-size:15px;color:rgba(255,255,255,0.9);font-family:Inter,sans-serif">Distributing to Global Edge…</span>
<span style="font-size:12px;color:rgba(52,211,153,0.4);margin-left:auto">✓</span>
</div>
<div style="margin-top:20px;width:100%;height:3px;background:rgba(255,255,255,0.05);border-radius:2px"><div style="width:100%;height:100%;background:linear-gradient(90deg,#22c55e,#818cf8);border-radius:2px"></div></div>
</div>

Each phase runs sequentially in the background:

1. **Parsing OpenAPI specs** — The platform parses your spec, extracts every path/verb combination, and builds typed input schemas from parameter definitions.
2. **Sealing V8 Isolate Sandbox** — Your server is sealed inside a V8 Isolate — no filesystem, no network escape, no process injection. The sandbox enforces strict memory and execution limits.
3. **Injecting Zero-Trust DLP** — The PII redaction engine and array truncation rules are compiled into the request pipeline. Every tool call passes through governance controls before data reaches the AI.
4. **Distributing to Global Edge** — The sealed bundle is distributed to edge nodes worldwide. Your MCP server is live and reachable from any AI client within seconds.

### After deployment: you're live

When deployment completes, the wizard transitions to the success screen. You receive three outputs:

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1px;margin:24px 0;border-radius:10px;overflow:hidden">
<div style="background:#09090f;padding:24px;border:1px solid rgba(255,255,255,0.06)">
<div style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:700;margin-bottom:10px;font-family:ui-monospace,monospace">MCP URL</div>
<div style="font-size:14px;color:rgba(255,255,255,0.5);font-family:ui-monospace,monospace;word-break:break-all">https://edge.vinkius.com/tok_abc123/mcp</div>
<div style="font-size:13px;color:rgba(255,255,255,0.2);margin-top:8px;font-family:Inter,sans-serif;line-height:1.5">The SSE endpoint. Paste it into any MCP client.</div>
</div>
<div style="background:#09090f;padding:24px;border:1px solid rgba(255,255,255,0.06)">
<div style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:700;margin-bottom:10px;font-family:ui-monospace,monospace">CONFIG JSON</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);font-family:ui-monospace,monospace">{ "mcpServers": { ... } }</div>
<div style="font-size:13px;color:rgba(255,255,255,0.2);margin-top:8px;font-family:Inter,sans-serif;line-height:1.5">Download or copy — ready for Claude, Cursor, VS Code.</div>
</div>
<div style="background:#09090f;padding:24px;border:1px solid rgba(255,255,255,0.06)">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:10px;font-family:ui-monospace,monospace">CONNECTION TOKEN</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);font-family:ui-monospace,monospace">vk_••••••••••••</div>
<div style="font-size:13px;color:rgba(255,255,255,0.2);margin-top:8px;font-family:Inter,sans-serif;line-height:1.5">HMAC-SHA256 authenticated. Shown once — save it now.</div>
</div>
</div>

### Connection tokens

Every deployed server is protected by **connection tokens** — HMAC-SHA256 authenticated credentials that AI clients use to establish SSE connections.

- Tokens are generated on deploy and **shown exactly once**. The plaintext is never stored on the server side — only the HMAC hash is persisted.
- You can generate additional tokens from the server's Connection Tokens page, each labeled by client (e.g., "Cursor — Production", "Claude — Staging").
- Every token can be **revoked individually** without affecting other connected clients.

### Kill switch: 40ms global revocation

When an AI model has access to your production APIs, the ability to cut that access *instantly* is a security requirement. Vinkius Cloud revokes any connection token globally in 40 milliseconds.

<div style="margin:24px 0;padding:28px 32px;border:1px solid rgba(239,68,68,0.15);border-radius:10px;background:rgba(239,68,68,0.02);position:relative;overflow:hidden">
<div style="position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(239,68,68,0.3),transparent)"></div>
<div style="display:flex;align-items:center;gap:14px;margin-bottom:16px">
<div style="width:40px;height:40px;border-radius:10px;background:rgba(239,68,68,0.08);display:flex;align-items:center;justify-content:center;flex-shrink:0">
<span style="font-size:14px;color:rgba(239,68,68,0.6);font-weight:800;font-family:Inter,sans-serif">!</span>
</div>
<div>
<div style="font-size:18px;color:rgba(255,255,255,0.9);font-weight:800;font-family:Inter,sans-serif;letter-spacing:-0.5px">One click. Any token. Globally killed in 40 milliseconds.</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:3px;font-family:Inter,sans-serif">No blast radius, no lingering access, no exceptions.</div>
</div>
</div>
<div style="font-size:15px;color:rgba(255,255,255,0.35);line-height:1.8;font-family:Inter,sans-serif">When you revoke a token, it's invalidated across every edge node within 40ms. Active SSE connections using that token are terminated immediately — the AI model loses access mid-sentence if needed. No grace period, no retry window, no cache to expire.</div>
</div>

#### Why 40ms matters

An AI model with a compromised token can make dozens of tool calls per second — accessing production data, creating records, or triggering destructive actions. In enterprise environments, the window between compromise and revocation determines the blast radius. At 40ms, that window is effectively closed before the next tool call completes.

### Post-deploy security architecture

Your deployed MCP server runs inside a multi-layered security perimeter:

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">V8 ISOLATE</div>
<div style="font-size:16px;color:rgba(255,255,255,0.9);font-weight:600;font-family:Inter,sans-serif">Sandbox isolation</div>
<div style="font-size:14px;color:rgba(255,255,255,0.3);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">No filesystem, no network escape, no process injection. Each server runs in its own V8 Isolate with strict memory and CPU limits.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">HMAC LOCKFILE</div>
<div style="font-size:16px;color:rgba(255,255,255,0.9);font-weight:600;font-family:Inter,sans-serif">Signed deployments</div>
<div style="font-size:14px;color:rgba(255,255,255,0.3);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">Every deploy is HMAC-signed with a lockfile. If the API surface changes unexpectedly, the deploy stops automatically — no tampered code reaches production.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">EGRESS FIREWALL</div>
<div style="font-size:16px;color:rgba(255,255,255,0.9);font-weight:600;font-family:Inter,sans-serif">SSRF protection</div>
<div style="font-size:14px;color:rgba(255,255,255,0.3);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">Outbound requests are locked to the declared base URL. The server cannot reach internal networks, metadata services, or any host not in the allowlist.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">AUDIT LOG</div>
<div style="font-size:16px;color:rgba(255,255,255,0.9);font-weight:600;font-family:Inter,sans-serif">Full observability</div>
<div style="font-size:14px;color:rgba(255,255,255,0.3);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">Every request, every response, every tool call — logged immutably. You don't wonder what AI did. You know. Available from the server's Audit Log tab.</div>
</div>

</div>

---

<!-- Editorial break: After you deploy -->
<div style="margin:48px 0;padding:56px 40px;background:#09090f;border:1px solid rgba(255,255,255,0.05);border-radius:12px;position:relative;overflow:hidden">
<div style="position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(34,211,238,0.3),transparent)"></div>
<span style="font-size:12px;color:rgba(34,211,238,0.6);letter-spacing:3px;font-weight:700">AFTER YOU DEPLOY</span>
<div style="font-size:36px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif;letter-spacing:-1.5px;margin-top:12px;line-height:1.1">What you get.<br><span style="color:rgba(255,255,255,0.25)">And what you can change.</span></div>
</div>

## What you get after deploy

Your OpenAPI spec is transformed into a fully functional MCP server. Every endpoint becomes a tool that AI models can discover, understand, and call. But the platform doesn't just convert — it solves three problems that every team deploying AI on top of APIs will face.

### Problem 1 — Tool fatigue

When you expose a large API (50, 100, 200+ endpoints) to an AI model, every tool definition consumes tokens from the model's context window. Research shows that AI performance degrades significantly after just **10–15 tools** — the model starts choosing wrong tools, hallucinating parameters, or entering retry loops.

**How Vinkius Cloud solves this:**

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">AUTO-GROUPING</div>
<div style="font-size:16px;color:rgba(255,255,255,0.9);font-weight:600;font-family:Inter,sans-serif">Related endpoints share one tool</div>
<div style="font-size:14px;color:rgba(255,255,255,0.3);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">When your API exceeds the threshold, related endpoints are automatically grouped by OpenAPI tag. Instead of 50 individual tools flooding the context window, the AI sees 8 grouped tools with an action discriminator.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">TOON COMPRESSION</div>
<div style="font-size:16px;color:rgba(255,255,255,0.9);font-weight:600;font-family:Inter,sans-serif">30–50% fewer tokens per tool</div>
<div style="font-size:14px;color:rgba(255,255,255,0.3);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">TOON compresses tool descriptions into a compact tabular format. The AI model reads the same information in fewer tokens. Works best with GPT-4, Claude 3.5+, and Gemini 2.0+.</div>
</div>

</div>

### Problem 2 — Context window overflow

When an API returns arrays with hundreds or thousands of items — a list of all customers, all orders, all products — the raw response can consume the AI's entire context window in a single tool call. The model loses the ability to process the data, and the conversation stalls.

**How Vinkius Cloud solves this:**

Smart Array Truncation shrinks oversized arrays automatically. A `/customers` endpoint that returns 2,000 records is truncated to 50 items. The AI gets the same intelligence in a fraction of the tokens. You control the threshold — globally or per server.

### Problem 3 — Safe vs. destructive operations

AI models don't inherently know which API calls are safe and which aren't. A `GET /orders` is read-only; a `DELETE /orders/{id}` is destructive. Without annotations, the model treats both the same — which can lead to unintended data changes.

**How Vinkius Cloud solves this:**

Every generated tool receives **MCP annotations** inferred from the HTTP verb:

<div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px;margin:24px 0">

<div style="padding:16px;border-left:2px solid rgba(34,197,94,0.3);background:rgba(34,197,94,0.02);border-radius:0 6px 6px 0">
<div style="font-size:18px;color:rgba(34,197,94,0.5);font-weight:700;font-family:Inter,sans-serif">GET</div>
<div style="font-size:14px;color:rgba(255,255,255,0.9);font-weight:600;margin-top:6px;font-family:Inter,sans-serif">Read-only</div>
<div style="font-size:13px;color:rgba(255,255,255,0.3);margin-top:4px;line-height:1.5;font-family:Inter,sans-serif">AI calls freely without confirmation</div>
</div>

<div style="padding:16px;border-left:2px solid rgba(245,158,11,0.3);background:rgba(245,158,11,0.02);border-radius:0 6px 6px 0">
<div style="font-size:18px;color:rgba(245,158,11,0.5);font-weight:700;font-family:Inter,sans-serif">POST</div>
<div style="font-size:14px;color:rgba(255,255,255,0.9);font-weight:600;margin-top:6px;font-family:Inter,sans-serif">Non-idempotent</div>
<div style="font-size:13px;color:rgba(255,255,255,0.3);margin-top:4px;line-height:1.5;font-family:Inter,sans-serif">May prompt for confirmation</div>
</div>

<div style="padding:16px;border-left:2px solid rgba(129,140,248,0.3);background:rgba(129,140,248,0.02);border-radius:0 6px 6px 0">
<div style="font-size:18px;color:rgba(129,140,248,0.5);font-weight:700;font-family:Inter,sans-serif">PUT</div>
<div style="font-size:14px;color:rgba(255,255,255,0.9);font-weight:600;margin-top:6px;font-family:Inter,sans-serif">Idempotent</div>
<div style="font-size:13px;color:rgba(255,255,255,0.3);margin-top:4px;line-height:1.5;font-family:Inter,sans-serif">Safe to retry automatically</div>
</div>

<div style="padding:16px;border-left:2px solid rgba(239,68,68,0.3);background:rgba(239,68,68,0.02);border-radius:0 6px 6px 0">
<div style="font-size:18px;color:rgba(239,68,68,0.5);font-weight:700;font-family:Inter,sans-serif">DEL</div>
<div style="font-size:14px;color:rgba(255,255,255,0.9);font-weight:600;margin-top:6px;font-family:Inter,sans-serif">Destructive</div>
<div style="font-size:13px;color:rgba(255,255,255,0.3);margin-top:4px;line-height:1.5;font-family:Inter,sans-serif">Requires explicit user approval</div>
</div>

</div>

## What you can customize after deploy

Your server is live, but it's not locked. Everything generated automatically can be refined from the dashboard:

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">TOOL EDITOR</div>
<div style="font-size:16px;color:rgba(255,255,255,0.9);font-weight:600;font-family:Inter,sans-serif">Edit any generated tool</div>
<div style="font-size:14px;color:rgba(255,255,255,0.3);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">Override descriptions, change display titles, adjust annotations. Useful when a POST is actually idempotent (e.g., a search endpoint), or when a GET has side effects.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">SYSTEM RULES</div>
<div style="font-size:16px;color:rgba(255,255,255,0.9);font-weight:600;font-family:Inter,sans-serif">Guide how AI interprets responses</div>
<div style="font-size:14px;color:rgba(255,255,255,0.3);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">Inject instructions into tool responses — "Always respond in Portuguese", "Use tables for lists", "Amounts in cents, display as currency". The AI follows these rules when presenting data.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">TOGGLE ON/OFF</div>
<div style="font-size:16px;color:rgba(255,255,255,0.9);font-weight:600;font-family:Inter,sans-serif">Disable individual tools</div>
<div style="font-size:14px;color:rgba(255,255,255,0.3);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">Don't want AI to access certain endpoints? Toggle them off. The tool is removed from the MCP discovery response without deleting it — re-enable it anytime.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">CACHE CONTROL</div>
<div style="font-size:16px;color:rgba(255,255,255,0.9);font-weight:600;font-family:Inter,sans-serif">Tell AI when data is stale</div>
<div style="font-size:14px;color:rgba(255,255,255,0.3);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">Set cache hints per tool — "no-store" for volatile data the AI should always re-fetch, or "immutable" for reference data safe to cache forever.</div>
</div>

</div>

## Real-world use cases

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">PAYMENTS</div>
<div style="font-size:16px;color:rgba(255,255,255,0.9);font-weight:600;font-family:Inter,sans-serif">Payment processors</div>
<div style="font-size:14px;color:rgba(255,255,255,0.3);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">Stripe, Adyen, PayPal — import the OpenAPI spec and let AI query charges, refunds, and subscriptions directly. DLP redacts credit card numbers automatically.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">CRM / ERP</div>
<div style="font-size:16px;color:rgba(255,255,255,0.9);font-weight:600;font-family:Inter,sans-serif">CRMs and ERPs</div>
<div style="font-size:14px;color:rgba(255,255,255,0.3);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">Salesforce, HubSpot, SAP — large APIs with 200+ endpoints. Auto-grouping reduces tool count from 200+ to manageable groups. AI navigates the entire CRM naturally.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">INFRASTRUCTURE</div>
<div style="font-size:16px;color:rgba(255,255,255,0.9);font-weight:600;font-family:Inter,sans-serif">Cloud infrastructure</div>
<div style="font-size:14px;color:rgba(255,255,255,0.3);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">AWS, Cloudflare, DigitalOcean — import the spec, disable destructive tools (DELETE), and let AI query infrastructure status, logs, and metrics safely.</div>
</div>

</div>

---

## Next steps

<!-- Navigation cards -->
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:32px 0">

<a href="quick-connect.html" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<span style="font-size:11px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:600">CONNECT</span>
<div style="font-size:14px;color:rgba(255,255,255,0.9);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Connect an AI client</div>
<div style="font-size:14px;color:rgba(255,255,255,0.3);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Paste your MCP URL into Claude, Cursor, VS Code, or any MCP client.</div>
<span style="font-size:13px;color:rgba(34,211,238,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Setup guide →</span>
</a>

<a href="managing-servers.html" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<span style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:600">MANAGE</span>
<div style="font-size:14px;color:rgba(255,255,255,0.9);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Manage your servers</div>
<div style="font-size:14px;color:rgba(255,255,255,0.3);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Monitor, configure, and control your MCP server fleet.</div>
<span style="font-size:13px;color:rgba(52,211,153,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Open fleet →</span>
</a>

<a href="security/index.html" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<span style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:600">SECURITY</span>
<div style="font-size:14px;color:rgba(255,255,255,0.9);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Security and governance</div>
<div style="font-size:14px;color:rgba(255,255,255,0.3);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">DLP, FinOps Guard, credential vault, and SSRF protection.</div>
<span style="font-size:13px;color:rgba(129,140,248,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Learn more →</span>
</a>

</div>

---

## Frequently Asked Questions

### Which OpenAPI versions does Vinkius Cloud support?
Vinkius Cloud supports OpenAPI 2.0 (Swagger), OpenAPI 3.0, and OpenAPI 3.1 specifications in both JSON and YAML formats. You can paste a public URL to the spec or upload the file directly.

### How does the platform convert OpenAPI endpoints into MCP tools?
The platform parses every path and operation in your spec, generates typed MCP tools with names, descriptions, and input schemas derived from your OpenAPI parameters and request bodies, and applies semantic annotations (read-only, idempotent, or destructive) based on the HTTP verb.

### Can I control which endpoints become MCP tools?
Yes. After import, all tools are enabled by default, but you can toggle individual tools on or off from the server detail page. You can also edit their descriptions, rename them, or adjust input schemas — without modifying the original spec.

### What authentication methods are supported for the upstream API?
Vinkius Cloud supports Bearer Token, Basic Auth, Custom Header, and None (public APIs). Credentials are AES-256 encrypted at rest and decrypted only in-memory at the moment the AI calls the tool.

### Do I need to host the OpenAPI spec myself?
No. You can use any publicly accessible URL — GitHub raw file links, Swagger UI endpoints, API documentation pages that serve the spec. The platform fetches the spec once at import time.

### What happens if I update my API specification later?
You can re-import the spec at any time from the server detail page. Vinkius Cloud will detect new, modified, and removed endpoints and update your MCP tools accordingly — no need to create a new server.
