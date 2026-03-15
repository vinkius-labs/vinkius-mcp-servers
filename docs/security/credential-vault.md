---
title: "MCP Credential Vault — AES-256 Encrypted API Secrets | Vinkius"
description: "Store API credentials with AES-256 encryption. Runtime-only decryption inside V8 Isolates — AI models never see your secrets. Crypto-shredding on deletion."
head:
  - - meta
    - property: og:title
      content: "MCP Credential Vault — AES-256 Encrypted API Secrets | Vinkius"
  - - meta
    - property: og:description
      content: "Store API credentials with AES-256 encryption. Runtime-only decryption inside V8 Isolates — AI never sees your secrets."
  - - meta
    - name: keywords
      content: "MCP credential vault, AES-256 API encryption, AI agent credential management, MCP secret storage, server-side credential injection, crypto-shredding, MCP API key security, zero-knowledge credential vault"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How are API credentials encrypted?","acceptedAnswer":{"@type":"Answer","text":"All credentials are encrypted with AES-256 at rest immediately upon submission. The plaintext is discarded from memory the moment encryption completes. Neither database administrators nor Vinkius Cloud operators can access the original values."}},{"@type":"Question","name":"Can the AI model see or access my API credentials?","acceptedAnswer":{"@type":"Answer","text":"No. Credentials are injected server-side inside the V8 Isolate into the outbound HTTP request header. The AI model sends a tool call with no credentials in the payload. The model has no mechanism to read, extract, or infer the credential value — it never enters the context window."}},{"@type":"Question","name":"What happens to credentials when I delete a server?","acceptedAnswer":{"@type":"Answer","text":"Crypto-shredding. The encryption key material is destroyed, rendering the ciphertext permanently unrecoverable. This satisfies data destruction requirements without the need for physical media wiping."}},{"@type":"Question","name":"What authentication methods are supported?","acceptedAnswer":{"@type":"Answer","text":"The vault supports four methods: Bearer Token (Authorization: Bearer), Basic Auth (Authorization: Basic), API Key (custom header name + value, e.g., X-API-Key), and Custom Header (any arbitrary header name + value pair). Multiple credentials can be configured per server."}},{"@type":"Question","name":"How does the Marketplace handle buyer credentials?","acceptedAnswer":{"@type":"Answer","text":"When a buyer subscribes to a Marketplace server, they provide their own API credentials through a privacy-guaranteed dialog. Credentials are encrypted end-to-end. The seller never sees buyer credentials, and Vinkius staff have no access."}},{"@type":"Question","name":"How does Vinkius Vault differ from environment variables?","acceptedAnswer":{"@type":"Answer","text":"Environment variables store credentials in plaintext accessible to all code in the process. Configuration files are readable by any tool with filesystem access. The agent context window is extractable via prompt injection. Vinkius Vault eliminates all three exposure vectors by injecting credentials at the proxy layer, invisible to the agent."}}]}'
---

# Credential Vault

Upstream API credentials — Bearer tokens, Basic Auth, API keys, Custom Headers — are stored in a dedicated vault, encrypted with **AES-256** at rest. At no point are these credentials accessible to the AI model, to team administrators via the UI, or to Vinkius Cloud's own operational infrastructure.

The AI model calls your API *through* Vinkius Cloud. It never sees the credentials. It does not know they exist.

<!-- Stat strip -->
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1px;margin:40px 0;background:rgba(255,255,255,0.04);border-radius:10px;overflow:hidden">
<div style="padding:28px 24px;background:#09090f;text-align:center">
<div style="font-size:28px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">AES-256</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:6px;letter-spacing:1px;font-family:Inter,sans-serif">ENCRYPTION AT REST</div>
</div>
<div style="padding:28px 24px;background:#09090f;text-align:center">
<div style="font-size:28px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">Runtime</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:6px;letter-spacing:1px;font-family:Inter,sans-serif">ONLY DECRYPTION</div>
</div>
<div style="padding:28px 24px;background:#09090f;text-align:center">
<div style="font-size:28px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">0</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:6px;letter-spacing:1px;font-family:Inter,sans-serif">EXPOSURE SURFACE</div>
</div>
</div>

---

<!-- Editorial break -->
<div style="margin:48px 0;padding:56px 40px;background:#09090f;border:1px solid rgba(255,255,255,0.05);border-radius:12px;position:relative;overflow:hidden">
<div style="position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(129,140,248,0.3),transparent)"></div>
<span style="font-size:12px;color:rgba(129,140,248,0.6);letter-spacing:3px;font-weight:700">CREDENTIAL VAULT</span>
<div style="font-size:36px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif;letter-spacing:-1.5px;margin-top:12px;line-height:1.1">Credentials never leave the vault.<br><span style="color:rgba(255,255,255,0.25)">The AI model never sees them.</span></div>
<div style="font-size:15px;color:rgba(255,255,255,0.4);margin-top:16px;max-width:540px;line-height:1.7;font-family:Inter,sans-serif">AES-256 encrypted at rest. Decrypted only inside V8 Isolates at runtime. Injected server-side into HTTP headers — completely invisible to the AI model, the agent framework, and any tool call payload.</div>
</div>

## Credential lifecycle

Every credential goes through four distinct phases. At no point in this lifecycle is the credential accessible outside the vault.

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:20px 24px;border:1px solid rgba(129,140,248,0.1);border-radius:8px;background:rgba(129,140,248,0.02)">
<div style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">AT REST</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">AES-256 encrypted</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">Credentials are encrypted immediately upon submission and stored as ciphertext. The plaintext is discarded from memory the moment encryption completes. Neither database administrators nor Vinkius Cloud operators can access the original values. The vault displays only a masked hint — never the credential itself.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(52,211,153,0.1);border-radius:8px;background:rgba(52,211,153,0.02)">
<div style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">AT RUNTIME</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Decrypted in V8 Isolate only</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">When a tool call requires upstream authentication, the credential is decrypted inside the V8 Isolate, injected into the outbound HTTP request header, and discarded from memory immediately after the upstream call completes. The decrypted value exists for the duration of a single HTTP request — and nowhere else.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(245,158,11,0.1);border-radius:8px;background:rgba(245,158,11,0.02)">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">TO THE AI MODEL</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Never transmitted</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">Credentials are injected server-side, inside the proxy layer. The AI model sends a tool call; Vinkius Cloud adds the authentication header before forwarding the request upstream. The AI model has no mechanism to read, extract, or infer the credential value — it never enters the context window.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(239,68,68,0.1);border-radius:8px;background:rgba(239,68,68,0.02)">
<div style="font-size:11px;color:rgba(239,68,68,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">ON DELETION</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Crypto-shredded</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">When a server is deleted, the encryption key material is destroyed. The ciphertext remains in storage as random bytes — permanently unrecoverable. This satisfies data destruction requirements without the need for physical media wiping.</div>
</div>

</div>

---

## Vault UI

The Authentication Vault is configured during server creation or from the server's Edit modal. The interface supports four authentication methods:

<!-- Vault recreation -->
<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#09090f;font-family:ui-monospace,monospace">
<div style="padding:14px 24px;border-bottom:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;gap:10px">
<span style="font-size:12px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:600">AUTHENTICATION VAULT</span>
</div>

<div style="padding:16px 24px;border-bottom:1px solid rgba(255,255,255,0.04)">
<div style="display:flex;align-items:center;justify-content:space-between">
<div>
<div style="font-size:14px;color:rgba(255,255,255,0.7);font-family:Inter,sans-serif;font-weight:600">Bearer Token</div>
<div style="font-size:12px;color:rgba(255,255,255,0.25);margin-top:2px;font-family:Inter,sans-serif">Authorization: Bearer &lt;token&gt;</div>
</div>
<span style="font-size:11px;color:rgba(52,211,153,0.5);border:1px solid rgba(52,211,153,0.15);padding:2px 8px;border-radius:3px">MOST COMMON</span>
</div>
</div>

<div style="padding:16px 24px;border-bottom:1px solid rgba(255,255,255,0.04)">
<div>
<div style="font-size:14px;color:rgba(255,255,255,0.7);font-family:Inter,sans-serif;font-weight:600">Basic Auth</div>
<div style="font-size:12px;color:rgba(255,255,255,0.25);margin-top:2px;font-family:Inter,sans-serif">Authorization: Basic &lt;base64(username:password)&gt;</div>
</div>
</div>

<div style="padding:16px 24px;border-bottom:1px solid rgba(255,255,255,0.04)">
<div>
<div style="font-size:14px;color:rgba(255,255,255,0.7);font-family:Inter,sans-serif;font-weight:600">API Key</div>
<div style="font-size:12px;color:rgba(255,255,255,0.25);margin-top:2px;font-family:Inter,sans-serif">Custom header name + value (e.g., X-API-Key: &lt;key&gt;)</div>
</div>
</div>

<div style="padding:16px 24px">
<div>
<div style="font-size:14px;color:rgba(255,255,255,0.7);font-family:Inter,sans-serif;font-weight:600">Custom Header</div>
<div style="font-size:12px;color:rgba(255,255,255,0.25);margin-top:2px;font-family:Inter,sans-serif">Any arbitrary header name + value pair</div>
</div>
</div>

<div style="padding:10px 24px;border-top:1px solid rgba(255,255,255,0.04)">
<div style="font-size:11px;color:rgba(255,255,255,0.2);font-style:italic;font-family:Inter,sans-serif">AES-256 encrypted at rest. Credentials never leave your vault.</div>
</div>
</div>

Multiple credentials can be configured per server when your upstream API requires compound authentication (e.g., API key plus a session token).

---

## Server-side injection

The injection mechanism is the critical differentiator. When the AI model sends a tool call:

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#09090f;padding:24px 28px;font-family:ui-monospace,monospace">
<div style="font-size:12px;color:rgba(129,140,248,0.5);letter-spacing:2px;margin-bottom:20px;font-weight:600">INJECTION FLOW</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">01</span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">AI model sends a tool call (e.g., <code style="font-size:13px;color:rgba(129,140,248,0.6)">get_customer</code>) — <strong>no credentials in the payload</strong></span>
</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">02</span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">Vinkius proxy receives the MCP request inside the V8 Isolate</span>
</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">03</span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">Credential decrypted in-memory, injected into the outbound HTTP <code style="font-size:13px;color:rgba(129,140,248,0.6)">Authorization</code> header</span>
</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">04</span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">Request forwarded to your upstream API with proper authentication</span>
</div>
<div style="display:flex;align-items:center;gap:12px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">05</span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">Credential discarded from memory — response returned to AI model (post-DLP)</span>
</div>
</div>

The AI model never constructs the authentication header. It does not know the header name, the header value, or the authentication scheme. It simply sends a tool call, and the vault handles the rest.

---

## Marketplace: buyer credentials

When a server is published on the Marketplace, sellers can require that each subscriber provides their own API credentials. This creates a zero-knowledge architecture between buyer, seller, and platform:

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">BUYER</div>
<div style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.6;font-family:Inter,sans-serif">Provides credentials through a privacy-guaranteed dialog. Credentials are encrypted end-to-end. Can update or delete at any time.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(239,68,68,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">SELLER</div>
<div style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.6;font-family:Inter,sans-serif">Defines what authentication type is required (Bearer, Basic, Custom Header) and provides setup instructions. <strong style="color:rgba(239,68,68,0.6)">Never sees buyer credentials.</strong></div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">PLATFORM</div>
<div style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.6;font-family:Inter,sans-serif">Stores encrypted credentials. Only the runtime proxy reads them — in memory only — to forward requests upstream. <strong style="color:rgba(52,211,153,0.6)">Vinkius staff have no access.</strong></div>
</div>

</div>

The buyer credential dialog includes:

- **Privacy guarantee banner** — visible on every interaction: *"Your credentials are encrypted end-to-end and are NEVER visible to the seller or to Vinkius staff."*
- **Seller-provided instructions** — how and where to obtain the required credentials
- **Toggle visibility** — eye/eye-off toggle for password fields
- **Delete confirmation** — explicit confirmation required before credential removal

---

## Three exposure vectors eliminated

Traditional AI agent frameworks create three distinct credential exposure surfaces. Vinkius Cloud eliminates all three:

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#09090f;font-family:ui-monospace,monospace">

<div style="display:grid;grid-template-columns:auto 1fr 1fr;gap:0;padding:8px 24px;border-bottom:1px solid rgba(255,255,255,0.06)">
<span style="font-size:11px;color:rgba(255,255,255,0.25);min-width:180px">EXPOSURE VECTOR</span>
<span style="font-size:11px;color:rgba(255,255,255,0.25);text-align:center">TRADITIONAL</span>
<span style="font-size:11px;color:rgba(255,255,255,0.25);text-align:center">VINKIUS VAULT</span>
</div>

<div style="display:grid;grid-template-columns:auto 1fr 1fr;gap:0;padding:12px 24px;border-bottom:1px solid rgba(255,255,255,0.03)">
<div style="min-width:180px">
<span style="font-size:13px;color:rgba(255,255,255,0.6);font-family:Inter,sans-serif">Environment variables</span>
<div style="font-size:11px;color:rgba(255,255,255,0.2);margin-top:2px;font-family:Inter,sans-serif">Accessible to all code in the process</div>
</div>
<span style="font-size:13px;color:rgba(239,68,68,0.6);text-align:center;font-family:Inter,sans-serif">Exposed</span>
<span style="font-size:13px;color:rgba(52,211,153,0.6);text-align:center;font-family:Inter,sans-serif">Eliminated</span>
</div>

<div style="display:grid;grid-template-columns:auto 1fr 1fr;gap:0;padding:12px 24px;border-bottom:1px solid rgba(255,255,255,0.03)">
<div style="min-width:180px">
<span style="font-size:13px;color:rgba(255,255,255,0.6);font-family:Inter,sans-serif">Configuration files</span>
<div style="font-size:11px;color:rgba(255,255,255,0.2);margin-top:2px;font-family:Inter,sans-serif">Readable by any tool with filesystem access</div>
</div>
<span style="font-size:13px;color:rgba(239,68,68,0.6);text-align:center;font-family:Inter,sans-serif">Exposed</span>
<span style="font-size:13px;color:rgba(52,211,153,0.6);text-align:center;font-family:Inter,sans-serif">Eliminated</span>
</div>

<div style="display:grid;grid-template-columns:auto 1fr 1fr;gap:0;padding:12px 24px">
<div style="min-width:180px">
<span style="font-size:13px;color:rgba(255,255,255,0.6);font-family:Inter,sans-serif">Agent context window</span>
<div style="font-size:11px;color:rgba(255,255,255,0.2);margin-top:2px;font-family:Inter,sans-serif">Extractable via prompt injection</div>
</div>
<span style="font-size:13px;color:rgba(239,68,68,0.6);text-align:center;font-family:Inter,sans-serif">Exposed</span>
<span style="font-size:13px;color:rgba(52,211,153,0.6);text-align:center;font-family:Inter,sans-serif">Eliminated</span>
</div>

</div>

---

## The industry context

Credential management for AI agents is one of the most critical unsolved problems in enterprise AI adoption. The challenge is structural: AI agents need API access, but every traditional method of providing that access creates an exposure surface.

**Environment variables** are the most common approach. Libraries like `claude_desktop_config.json`, `.env` files, and agent configuration files store API credentials in plaintext on the developer's machine. If the laptop is compromised, every credential is immediately accessible.

**Secret vaults** like HashiCorp Vault and Azure Key Vault were designed for static secrets consumed by servers and CI/CD pipelines. They assume predictable, human-initiated access patterns. Agentic AI introduces real-time, variable contexts and human-out-of-the-loop operation that these architectures were never built for.

**Identity-first systems** represent the emerging paradigm. Solutions like Aembit advocate for replacing static secrets entirely with dynamic credentials that authenticate agents directly. The concept of **credential injection** — where the agent itself holds no secrets, and a service mesh injects authentication at the network layer — is precisely what Vinkius Cloud implements.

The difference: Vinkius Cloud does this at the MCP transport layer, not at the application layer. The credential is injected by the proxy, inside a V8 Isolate, into an outbound HTTP header. The agent framework has no knowledge that authentication is occurring. There is no SDK to integrate, no secret to configure, no environment variable to set.

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
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Immutable, searchable log of every MCP request.</div>
<span style="font-size:13px;color:rgba(34,211,238,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Learn more →</span>
</a>

</div>

---

## Frequently Asked Questions

### How are API credentials encrypted?
All credentials are encrypted with AES-256 at rest immediately upon submission. The plaintext is discarded from memory the moment encryption completes. Neither database administrators nor Vinkius Cloud operators can access the original values. The vault displays only a masked hint — never the credential itself.

### Can the AI model see or access my API credentials?
No. Credentials are injected server-side inside the V8 Isolate into the outbound HTTP request header. The AI model sends a tool call with no credentials in the payload. The model has no mechanism to read, extract, or infer the credential value — it never enters the context window.

### What happens to credentials when I delete a server?
Crypto-shredding. The encryption key material is destroyed, rendering the ciphertext permanently unrecoverable. This satisfies data destruction requirements without the need for physical media wiping.

### What authentication methods are supported?
The vault supports four methods: Bearer Token (Authorization: Bearer), Basic Auth (Authorization: Basic), API Key (custom header name + value, e.g., X-API-Key), and Custom Header (any arbitrary header name + value pair). Multiple credentials can be configured per server for compound authentication.

### How does the Marketplace handle buyer credentials?
When a buyer subscribes to a Marketplace server, they provide their own API credentials through a privacy-guaranteed dialog. Credentials are encrypted end-to-end. The seller never sees buyer credentials, and Vinkius staff have no access. The buyer can update or delete credentials at any time.

### How does Vinkius Vault differ from environment variables?
Environment variables store credentials in plaintext accessible to all code in the process. Configuration files are readable by any tool with filesystem access. The agent context window is extractable via prompt injection. Vinkius Vault eliminates all three exposure vectors by injecting credentials at the proxy layer, invisible to the agent.
