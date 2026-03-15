---
title: "Deploy MCP Server from Any REST API | Vinkius Cloud"
description: "Create an MCP server from any HTTPS endpoint — no OpenAPI spec needed. Define tools manually, configure auth, and deploy with built-in DLP and governance."
head:
  - - meta
    - property: og:title
      content: "Deploy MCP Server from Any REST API | Vinkius Cloud"
  - - meta
    - property: og:description
      content: "Create an MCP server from any HTTPS endpoint — no OpenAPI spec needed. Define tools manually, configure auth, and deploy with governance."
  - - meta
    - name: keywords
      content: "MCP server manual API, REST API to MCP, custom MCP endpoint, create MCP tools, MCP server without OpenAPI, internal API MCP, MCP server configuration"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"When should I use Manual API instead of OpenAPI Import?","acceptedAnswer":{"@type":"Answer","text":"Use Manual API when your API doesn''t have a published OpenAPI or Swagger specification, when you want to expose only specific endpoints instead of the entire API surface, or when you''re working with internal or legacy systems that require custom configuration."}},{"@type":"Question","name":"Can I add tools after the initial deployment?","acceptedAnswer":{"@type":"Answer","text":"Yes. Manual API is designed for incremental tool building. Deploy the server first (it starts empty), then add tools one at a time from the dashboard. Each new tool is available immediately — no redeployment needed."}},{"@type":"Question","name":"What do I need to define for each tool?","acceptedAnswer":{"@type":"Answer","text":"Each tool requires a path and HTTP verb (relative to your base URL), a description (what the AI reads to decide when to use the tool), an input schema (parameters the AI provides), and an annotation (read-only, idempotent, or destructive)."}},{"@type":"Question","name":"Does the base URL have to be publicly accessible?","acceptedAnswer":{"@type":"Answer","text":"The base URL must be a valid HTTPS domain — no localhost, no IP addresses. If your API is behind a firewall, you''ll need to allowlist the Vinkius Cloud egress IPs or use a reverse proxy."}},{"@type":"Question","name":"How are credentials handled for my API?","acceptedAnswer":{"@type":"Answer","text":"Vinkius Cloud supports Bearer Token, Basic Auth, Custom Header, and None (public APIs). Credentials are AES-256 encrypted at rest, decrypted only in-memory when the AI invokes a tool, and never logged or stored in plaintext."}},{"@type":"Question","name":"What''s the difference between Manual API and OpenAPI Import results?","acceptedAnswer":{"@type":"Answer","text":"Both produce identical results: a governed, sandboxed MCP server with HMAC-authenticated tokens, DLP, and FinOps Guard. The only difference is how tools are created — manually defined vs. auto-generated from a spec."}}]}'
---

# Deploy via Manual API

When your API doesn't have a published OpenAPI specification — or you want full control over which endpoints become AI tools — Manual API is the path. You define the server, connect the credentials, and add tools on your own terms.

This is the method for internal APIs, legacy systems, custom microservices, and any endpoint you want to expose to AI with surgical precision.

<!-- Stat strip -->
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1px;margin:40px 0;background:rgba(255,255,255,0.04);border-radius:10px;overflow:hidden">
<div style="padding:28px 24px;background:#09090f;text-align:center">
<div style="font-size:28px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">< 30s</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:6px;letter-spacing:1px;font-family:Inter,sans-serif">SERVER PROVISIONED</div>
</div>
<div style="padding:28px 24px;background:#09090f;text-align:center">
<div style="font-size:28px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">Zero spec</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:6px;letter-spacing:1px;font-family:Inter,sans-serif">NO OPENAPI REQUIRED</div>
</div>
<div style="padding:28px 24px;background:#09090f;text-align:center">
<div style="font-size:28px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">Add later</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:6px;letter-spacing:1px;font-family:Inter,sans-serif">TOOLS ON YOUR SCHEDULE</div>
</div>
</div>

### When to use Manual API

- Your API has **no published OpenAPI spec** — no Swagger, no YAML, no JSON schema
- You want to expose **specific endpoints only** — not the entire API surface
- The API is **internal or behind a firewall** — accessible only via a base URL you define
- You're building a **custom MCP server** from scratch — prototyping before committing to a full spec

---

<!-- Editorial break: The wizard -->
<div style="margin:48px 0;padding:56px 40px;background:#09090f;border:1px solid rgba(255,255,255,0.05);border-radius:12px;position:relative;overflow:hidden">
<div style="position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(129,140,248,0.3),transparent)"></div>
<span style="font-size:12px;color:rgba(129,140,248,0.6);letter-spacing:3px;font-weight:700">THE WIZARD</span>
<div style="font-size:36px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif;letter-spacing:-1.5px;margin-top:12px;line-height:1.1">Three steps.<br><span style="color:rgba(255,255,255,0.25)">Tools come later.</span></div>
<div style="font-size:15px;color:rgba(255,255,255,0.4);margin-top:16px;max-width:540px;line-height:1.7;font-family:Inter,sans-serif">Deploy first — an empty server ready for connections. Then add endpoints one at a time from the dashboard, exactly the ones you want the AI to access.</div>
</div>

## Step 1 — Connection

<!-- Sidebar + Form split -->
<div style="margin:24px 0;display:grid;grid-template-columns:1fr 1fr;gap:1px;border-radius:10px;overflow:hidden">

<div style="background:#09090f;padding:32px;border:1px solid rgba(255,255,255,0.06);border-radius:10px 0 0 10px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);letter-spacing:2px;font-weight:600">02 — CONNECTION</span>
<div style="font-size:24px;color:rgba(255,255,255,0.9);font-weight:800;font-family:Inter,system-ui,sans-serif;letter-spacing:-1px;margin-top:16px;line-height:1.15">Give it<br>a name.</div>
<div style="font-size:14px;color:rgba(255,255,255,0.4);margin-top:16px;line-height:1.7;font-family:Inter,sans-serif">Name your server and tell us where the API lives. Add endpoints later — whenever you're ready, from the detail page.</div>
<div style="font-size:13px;color:rgba(255,255,255,0.2);margin-top:16px;border-left:2px solid rgba(255,255,255,0.08);padding-left:12px;line-height:1.6;font-family:ui-monospace,monospace">This name is what AI agents see when they discover your tools.</div>
</div>

<div style="background:#000;padding:32px;border:1px solid rgba(255,255,255,0.06);border-radius:0 10px 10px 0">
<div style="font-size:13px;color:rgba(255,255,255,0.4);letter-spacing:1.5px;font-weight:700;margin-bottom:16px;font-family:ui-monospace,monospace">CONNECTION</div>

<div style="margin-bottom:16px">
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-bottom:6px;font-family:Inter,sans-serif">Server Name</div>
<div style="padding:12px 16px;border:1px solid rgba(255,255,255,0.1);border-radius:6px;font-size:14px;color:rgba(255,255,255,0.7);font-family:Inter,sans-serif">My Internal API</div>
</div>

<div style="margin-bottom:16px">
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-bottom:6px;font-family:Inter,sans-serif">Base URL</div>
<div style="padding:12px 16px;border:1px solid rgba(129,140,248,0.3);border-radius:6px;font-size:14px;color:rgba(255,255,255,0.5);font-family:ui-monospace,monospace">https://api.yourcompany.com/v1</div>
</div>

<div style="padding:12px 16px;border:1px solid rgba(255,255,255,0.04);border-radius:6px;text-align:center">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:Inter,sans-serif">HTTPS only · Valid domain required</span>
</div>
</div>

</div>

- **Server Name** — This is the display name AI clients see when discovering your server. Choose something descriptive: "Payments API", "Inventory Service", "Internal CRM".
- **Base URL** — The root endpoint of your API. All tools you add later will be relative to this URL. Must be HTTPS with a valid domain — no `localhost`, no IP addresses.

## Step 2 — Security

<!-- Sidebar + Form split -->
<div style="margin:24px 0;display:grid;grid-template-columns:1fr 1fr;gap:1px;border-radius:10px;overflow:hidden">

<div style="background:#09090f;padding:32px;border:1px solid rgba(255,255,255,0.06);border-radius:10px 0 0 10px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);letter-spacing:2px;font-weight:600">03 — SECURITY</span>
<div style="font-size:24px;color:rgba(255,255,255,0.9);font-weight:800;font-family:Inter,system-ui,sans-serif;letter-spacing:-1px;margin-top:16px;line-height:1.15">Credentials never<br>leave the vault.</div>
<div style="font-size:14px;color:rgba(255,255,255,0.4);margin-top:16px;line-height:1.7;font-family:Inter,sans-serif">AI agents call your API through us. Keys are AES-256 encrypted at rest, injected at runtime, invisible to the LLM.</div>
<div style="font-size:13px;color:rgba(255,255,255,0.2);margin-top:16px;border-left:2px solid rgba(255,255,255,0.08);padding-left:12px;line-height:1.6;font-family:ui-monospace,monospace">Public API? Skip this — no auth required.</div>
</div>

<div style="background:#000;padding:32px;border:1px solid rgba(255,255,255,0.06);border-radius:0 10px 10px 0">
<div style="font-size:13px;color:rgba(255,255,255,0.4);letter-spacing:1.5px;font-weight:700;margin-bottom:16px;font-family:ui-monospace,monospace">AUTHENTICATION</div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px">
<div style="padding:12px;border:1px solid rgba(129,140,248,0.3);border-radius:6px;text-align:center;background:rgba(129,140,248,0.04)">
<div style="font-size:14px;color:rgba(255,255,255,0.7);font-weight:600;font-family:Inter,sans-serif">Bearer Token</div>
</div>
<div style="padding:12px;border:1px solid rgba(255,255,255,0.06);border-radius:6px;text-align:center">
<div style="font-size:14px;color:rgba(255,255,255,0.4);font-family:Inter,sans-serif">Basic Auth</div>
</div>
<div style="padding:12px;border:1px solid rgba(255,255,255,0.06);border-radius:6px;text-align:center">
<div style="font-size:14px;color:rgba(255,255,255,0.4);font-family:Inter,sans-serif">Custom Header</div>
</div>
<div style="padding:12px;border:1px solid rgba(255,255,255,0.06);border-radius:6px;text-align:center">
<div style="font-size:14px;color:rgba(255,255,255,0.4);font-family:Inter,sans-serif">None</div>
</div>
</div>

<div style="padding:12px 16px;border:1px solid rgba(52,211,153,0.12);border-radius:6px">
<div style="font-size:12px;color:rgba(52,211,153,0.6);font-family:Inter,sans-serif">AES-256 encrypted · Decrypted only at request time · Never logged</div>
</div>
</div>

</div>

| Auth type | What you provide |
|---|---|
| **Bearer Token** | Your API token or access key |
| **Basic Auth** | Username and password |
| **Custom Header** | Header name (e.g., `X-API-Key`) and value |
| **None — Public API** | Nothing. Step is skipped. |

Credentials are **AES-256 encrypted at rest**, decrypted in-memory only when an AI model invokes a tool, and immediately discarded after the upstream call.

## Step 3 — Governance

<!-- Sidebar + Form split -->
<div style="margin:24px 0;display:grid;grid-template-columns:1fr 1fr;gap:1px;border-radius:10px;overflow:hidden">

<div style="background:#09090f;padding:32px;border:1px solid rgba(255,255,255,0.06);border-radius:10px 0 0 10px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);letter-spacing:2px;font-weight:600">04 — GOVERNANCE</span>
<div style="font-size:24px;color:rgba(255,255,255,0.9);font-weight:800;font-family:Inter,system-ui,sans-serif;letter-spacing:-1px;margin-top:16px;line-height:1.15">Invisible<br>armor.</div>
<div style="font-size:14px;color:rgba(255,255,255,0.4);margin-top:16px;line-height:1.7;font-family:Inter,sans-serif">PII is masked before it ever touches the model. Large payloads shrink automatically — fewer tokens, same intelligence.</div>
<div style="font-size:13px;color:rgba(255,255,255,0.2);margin-top:16px;border-left:2px solid rgba(255,255,255,0.08);padding-left:12px;line-height:1.6;font-family:ui-monospace,monospace">Both optional. Enable now or toggle later from settings.</div>
</div>

<div style="background:#000;padding:32px;border:1px solid rgba(255,255,255,0.06);border-radius:0 10px 10px 0">
<div style="font-size:13px;color:rgba(255,255,255,0.4);letter-spacing:1.5px;font-weight:700;margin-bottom:16px;font-family:ui-monospace,monospace">GOVERNANCE CONTROLS</div>

<div style="display:flex;align-items:center;justify-content:space-between;padding:14px 18px;border:1px solid rgba(52,211,153,0.12);border-radius:6px;margin-bottom:10px">
<div>
<div style="font-size:14px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Zero-Trust PII Redaction</div>
<div style="font-size:13px;color:rgba(255,255,255,0.35);margin-top:3px;font-family:Inter,sans-serif">Masks emails, SSNs, and credit cards before data reaches the AI.</div>
</div>
<div style="width:36px;height:20px;border-radius:10px;background:#22c55e;position:relative;flex-shrink:0;margin-left:14px"><div style="width:14px;height:14px;border-radius:50%;background:rgba(255,255,255,0.9);position:absolute;right:3px;top:3px"></div></div>
</div>

<div style="display:flex;align-items:center;justify-content:space-between;padding:14px 18px;border:1px solid rgba(245,158,11,0.12);border-radius:6px">
<div>
<div style="font-size:14px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Smart Array Truncation</div>
<div style="font-size:13px;color:rgba(255,255,255,0.35);margin-top:3px;font-family:Inter,sans-serif">Shrinks oversized payloads to reduce token consumption.</div>
</div>
<div style="width:36px;height:20px;border-radius:10px;background:#22c55e;position:relative;flex-shrink:0;margin-left:14px"><div style="width:14px;height:14px;border-radius:50%;background:rgba(255,255,255,0.9);position:absolute;right:3px;top:3px"></div></div>
</div>
</div>

</div>

Both controls are **enabled by default**. You can toggle them off during setup or change them later from the server's settings page.

---

<!-- Editorial break: Deploy -->
<div style="margin:48px 0;padding:56px 40px;background:#09090f;border:1px solid rgba(255,255,255,0.05);border-radius:12px;position:relative;overflow:hidden">
<div style="position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(52,211,153,0.3),transparent)"></div>
<span style="font-size:12px;color:rgba(52,211,153,0.6);letter-spacing:3px;font-weight:700">DEPLOY</span>
<div style="font-size:36px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif;letter-spacing:-1.5px;margin-top:12px;line-height:1.1">Hit Deploy.<br><span style="color:rgba(255,255,255,0.25)">Then build your tools.</span></div>
</div>

## What happens when you deploy

Click **Deploy**. The server goes live in seconds — but it starts empty. No tools exist yet. This is intentional.

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#09090f;padding:24px 28px;font-family:ui-monospace,monospace">
<div style="font-size:12px;color:rgba(52,211,153,0.5);letter-spacing:2px;margin-bottom:20px;font-weight:600">DEPLOYING...</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="width:10px;height:10px;border-radius:50%;background:#22c55e;display:inline-block"></span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">Provisioning server…</span>
<span style="font-size:12px;color:rgba(52,211,153,0.4);margin-left:auto">done</span>
</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="width:10px;height:10px;border-radius:50%;background:#22c55e;display:inline-block"></span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">Configuring security layer…</span>
<span style="font-size:12px;color:rgba(52,211,153,0.4);margin-left:auto">done</span>
</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="width:10px;height:10px;border-radius:50%;background:#22c55e;display:inline-block"></span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">Activating data protection…</span>
<span style="font-size:12px;color:rgba(52,211,153,0.4);margin-left:auto">done</span>
</div>
<div style="display:flex;align-items:center;gap:12px">
<span style="width:10px;height:10px;border-radius:50%;background:#22c55e;display:inline-block"></span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">Live on the edge…</span>
<span style="font-size:12px;color:rgba(52,211,153,0.4);margin-left:auto">done</span>
</div>
<div style="margin-top:20px;width:100%;height:3px;background:rgba(255,255,255,0.05);border-radius:2px"><div style="width:100%;height:100%;background:linear-gradient(90deg,#22c55e,#818cf8);border-radius:2px"></div></div>
</div>

After deployment, you receive the same outputs as OpenAPI deploy: **MCP URL**, **Config JSON**, and a **Connection Token** (HMAC-SHA256, shown once).

---

<!-- Editorial break: Adding tools -->
<div style="margin:48px 0;padding:56px 40px;background:#09090f;border:1px solid rgba(255,255,255,0.05);border-radius:12px;position:relative;overflow:hidden">
<div style="position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(34,211,238,0.3),transparent)"></div>
<span style="font-size:12px;color:rgba(34,211,238,0.6);letter-spacing:3px;font-weight:700">AFTER DEPLOY</span>
<div style="font-size:36px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif;letter-spacing:-1.5px;margin-top:12px;line-height:1.1">Build your tools.<br><span style="color:rgba(255,255,255,0.25)">One endpoint at a time.</span></div>
</div>

## Adding tools

Navigate to your server's **Tools** tab. Each tool you add maps to a single API endpoint. You define:

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">ENDPOINT</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Path and HTTP verb</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">GET /customers, POST /orders, DELETE /invoices/{id} — the path is relative to the base URL you set during deployment.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">DESCRIPTION</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">What this tool does</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">This is what the AI reads to decide when to use the tool. Be clear and specific — "Retrieves all invoices for a given customer ID" beats "Gets invoices".</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">INPUT SCHEMA</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Parameters the AI provides</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">Define the parameters the AI model needs to fill: path params, query params, request body fields. Each has a name, type, and description.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(239,68,68,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">ANNOTATION</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Read-only, idempotent, or destructive</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">Tell the AI how to treat this tool. Read-only tools are called freely; destructive tools require explicit user confirmation before execution.</div>
</div>

</div>

::: tip Start small
You don't need to map every endpoint at once. Deploy with the 3–5 tools the AI needs most, test them with a client, and add more as you go. Every new tool is available immediately — no redeployment needed.
:::

## Manual vs. OpenAPI: which to choose

| | **Manual API** | **OpenAPI Import** |
|---|---|---|
| **Best for** | Internal APIs, prototypes, selective exposure | Public APIs with published specs |
| **Tool creation** | You define each tool individually | All tools generated automatically |
| **Speed** | Server deploys instantly; tools added incrementally | Full server with all tools in < 30s |
| **Control** | Maximum — you choose exactly which endpoints to expose | All endpoints imported; toggle off what you don't need |
| **Spec required** | No | Yes — OpenAPI 2.0, 3.0, or 3.1 |

Both methods produce the same result: a governed, sandboxed MCP server running on the global edge with HMAC-authenticated connection tokens, DLP, and FinOps Guard.

---

## Next steps

<!-- Navigation cards -->
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:32px 0">

<a href="quick-connect.html" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<span style="font-size:11px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:600">CONNECT</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Connect an AI client</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Paste your MCP URL into Claude, Cursor, VS Code, or any MCP client.</div>
<span style="font-size:13px;color:rgba(34,211,238,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Setup guide →</span>
</a>

<a href="managing-servers.html" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<span style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:600">MANAGE</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Manage your servers</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Edit tools, manage tokens, monitor audit logs, and configure governance.</div>
<span style="font-size:13px;color:rgba(52,211,153,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Dashboard →</span>
</a>

<a href="security/index.html" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<span style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:600">SECURITY</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Security and governance</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">40ms token revocation, V8 sandbox, DLP, SSRF protection, and audit logs.</div>
<span style="font-size:13px;color:rgba(129,140,248,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Learn more →</span>
</a>

</div>

---

## Frequently Asked Questions

### When should I use Manual API instead of OpenAPI Import?
Use Manual API when your API doesn't have a published OpenAPI or Swagger specification, when you want to expose only specific endpoints instead of the entire API surface, or when you're working with internal or legacy systems that require custom configuration.

### Can I add tools after the initial deployment?
Yes. Manual API is designed for incremental tool building. Deploy the server first (it starts empty), then add tools one at a time from the dashboard. Each new tool is available immediately — no redeployment needed.

### What do I need to define for each tool?
Each tool requires a path and HTTP verb (relative to your base URL), a description (what the AI reads to decide when to use the tool), an input schema (parameters the AI provides), and an annotation (read-only, idempotent, or destructive).

### Does the base URL have to be publicly accessible?
The base URL must be a valid HTTPS domain — no localhost, no IP addresses. If your API is behind a firewall, you'll need to allowlist the Vinkius Cloud egress IPs or use a reverse proxy.

### How are credentials handled for my API?
Vinkius Cloud supports Bearer Token, Basic Auth, Custom Header, and None (public APIs). Credentials are AES-256 encrypted at rest, decrypted only in-memory when the AI invokes a tool, and never logged or stored in plaintext.

### What's the difference between Manual API and OpenAPI Import results?
Both produce identical results: a governed, sandboxed MCP server with HMAC-authenticated tokens, DLP, and FinOps Guard. The only difference is how tools are created — manually defined vs. auto-generated from a spec.
