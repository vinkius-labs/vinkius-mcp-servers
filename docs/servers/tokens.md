---
title: MCP Connection Tokens — HMAC-SHA256 Authentication & Revocation | Vinkius Cloud
description: Generate, name, and revoke HMAC-SHA256 connection tokens for your MCP servers. Show-once disclosure, plan-based quotas, instant revocation, and Quick Connect integration for Claude, Cursor, and VS Code.
head:
  - - meta
    - name: keywords
      content: MCP connection token, MCP authentication, HMAC SHA256 MCP, MCP token revocation, MCP Quick Connect, AI server access token
  - - meta
    - property: og:title
      content: MCP Connection Tokens — HMAC-SHA256 Auth & Revocation | Vinkius Cloud
  - - meta
    - property: og:description
      content: Generate, name, and revoke HMAC-SHA256 connection tokens for your MCP servers. Show-once disclosure, instant revocation, and Quick Connect for AI clients.
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How does HMAC-SHA256 token authentication work?","acceptedAnswer":{"@type":"Answer","text":"Every connection token is hashed with HMAC-SHA256 before storage. The database never contains plaintext credentials. On each MCP request, the incoming token is hashed and compared against stored hashes."}},{"@type":"Question","name":"Can I recover a lost connection token?","acceptedAnswer":{"@type":"Answer","text":"No. Tokens use show-once disclosure — the full value is displayed exactly once at creation and never persisted in the database. If you lose a token, generate a new one and update your AI client configuration."}},{"@type":"Question","name":"How many tokens can I create per server?","acceptedAnswer":{"@type":"Answer","text":"Token quotas depend on your plan: Free (1 token), Developer (3 tokens), Team (10 tokens), Business (25 tokens). The quota counter is always visible in the token list footer."}},{"@type":"Question","name":"What AI clients support Quick Connect?","acceptedAnswer":{"@type":"Answer","text":"Quick Connect provides client-specific configuration for Cursor, VS Code with Copilot, Claude Desktop, Windsurf, ChatGPT, Cline, Continue, Zed, and Antigravity."}},{"@type":"Question","name":"Is token revocation instant?","acceptedAnswer":{"@type":"Answer","text":"Yes. Revocation is immediate and propagated via Redis pub/sub. The token hash is deleted from the database, active SSE connections are terminated within milliseconds, and the event is recorded in the Audit Log."}},{"@type":"Question","name":"Can seller and buyer tokens access each other?","acceptedAnswer":{"@type":"Answer","text":"No. When a server is listed on the Marketplace, buyer tokens and seller tokens are completely isolated. One cannot access the other''s credentials or see each other''s token list."}}]}'
---

# Connection Tokens

Every MCP request to Vinkius Cloud is authenticated by a connection token — a named, HMAC-SHA256 credential that binds a client to a specific server. Tokens are the access control layer that sits between your AI clients and your infrastructure.

Most MCP platforms either rely on static API keys stored in environment variables or have no authentication at all. Vinkius Cloud provides per-server, named, instantly revocable tokens with usage tracking and plan-based quotas — the level of credential management you expect from production infrastructure.

---

## Token list

The Connection Tokens tab displays all active tokens for the current server:

<!-- Token list UI recreation -->
<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#020202;font-family:ui-monospace,monospace">

<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="display:flex;align-items:center;gap:12px">
<span style="font-size:9px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:600">CONNECTION TOKENS</span>
<span style="font-size:10px;color:rgba(255,255,255,0.2)">2 / 10</span>
</div>
<div style="padding:4px 12px;background:rgba(255,255,255,0.9);border-radius:4px;font-size:11px;color:#000;font-weight:600;font-family:Inter,sans-serif">+ Generate</div>
</div>

<!-- Header row -->
<div style="display:grid;grid-template-columns:120px 1fr 80px 80px;gap:12px;padding:6px 20px;font-size:11px;color:rgba(255,255,255,0.2);border-bottom:1px solid rgba(255,255,255,0.04)">
<span>CLIENT</span>
<span>TOKEN</span>
<span style="text-align:right">LAST USED</span>
<span style="text-align:right">ACTIONS</span>
</div>

<!-- Token row 1 -->
<div style="display:grid;grid-template-columns:120px 1fr 80px 80px;gap:12px;padding:10px 20px;font-size:12px;align-items:center;border-bottom:1px solid rgba(255,255,255,0.02)">
<span style="color:rgba(255,255,255,0.5);font-weight:500">cursor-main</span>
<div style="display:flex;align-items:center;gap:6px;min-width:0">
<span style="font-size:10px;color:rgba(255,255,255,0.12)">&#x1F6E1;</span>
<span style="font-size:11px;color:rgba(255,255,255,0.2)">vk_...7f3a</span>
</div>
<span style="color:rgba(255,255,255,0.2);text-align:right">2m ago</span>
<span style="color:rgba(239,68,68,0.35);text-align:right;font-size:10px">Revoke</span>
</div>

<!-- Token row 2 -->
<div style="display:grid;grid-template-columns:120px 1fr 80px 80px;gap:12px;padding:10px 20px;font-size:12px;align-items:center">
<span style="color:rgba(255,255,255,0.5);font-weight:500">ci-pipeline</span>
<div style="display:flex;align-items:center;gap:6px;min-width:0">
<span style="font-size:10px;color:rgba(255,255,255,0.12)">&#x1F6E1;</span>
<span style="font-size:11px;color:rgba(255,255,255,0.2)">vk_...b2e1</span>
</div>
<span style="color:rgba(255,255,255,0.2);text-align:right">Never</span>
<span style="color:rgba(239,68,68,0.35);text-align:right;font-size:10px">Revoke</span>
</div>

<!-- Footer -->
<div style="padding:6px 20px;display:flex;justify-content:space-between;font-size:10px;color:rgba(255,255,255,0.12)">
<span>2 / 10 TOKENS</span>
</div>

</div>

### Token fields

| Field | Description |
|---|---|
| **Client** | Human-readable name you assign at creation (e.g., `cursor-main`, `ci-pipeline`, `mobile-app`) |
| **Token** | Masked hint showing only the last 4 characters — the full value is never stored or displayed again |
| **Last Used** | Relative timestamp of the most recent authenticated request via this token |
| **Actions** | Revoke button for immediate invalidation |

---

## Generating a token

Click **Generate** to create a new token. Provide a descriptive name that identifies the client or use case:

::: warning Show-once disclosure
The full token value is displayed **exactly once** at creation. It is returned directly from the API response and never persisted in the database. After you close the modal or navigate away, the token cannot be recovered — you must generate a new one.
:::

After creation, the modal displays:

- **The full token** — Copy it immediately. This is the only time it will be visible.
- **The MCP URL** — The complete `https://edge.vinkius.com/{token}/mcp` endpoint, ready to paste into any AI client.
- **Quick Connect** — Client-specific instructions with one-click copy for Cursor, Claude Desktop, and Antigravity.

---

## Quick Connect

Immediately after generating a token, the Quick Connect panel opens with client-specific instructions:

<!-- Quick Connect tabs recreation -->
<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#09090f;font-family:ui-monospace,monospace">

<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="display:flex;align-items:center;gap:8px">
<div style="width:28px;height:28px;border-radius:6px;background:rgba(52,211,153,0.1);border:1px solid rgba(52,211,153,0.2);display:flex;align-items:center;justify-content:center"><span style="font-size:12px;color:rgba(52,211,153,0.7)">></span></div>
<div>
<div style="font-size:13px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Quick Connect</div>
<div style="font-size:11px;color:rgba(255,255,255,0.25)">Copy and paste into your AI client</div>
</div>
</div>
<div style="display:flex;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:6px;padding:2px;gap:2px">
<div style="padding:4px 10px;background:rgba(255,255,255,0.1);border-radius:4px;font-size:11px;color:rgba(255,255,255,0.85);font-weight:600">Cursor / VSCode</div>
<div style="padding:4px 10px;font-size:11px;color:rgba(255,255,255,0.3)">Claude Desktop</div>
<div style="padding:4px 10px;font-size:11px;color:rgba(255,255,255,0.3)">Antigravity</div>
</div>
</div>

<div style="padding:16px 20px;background:rgba(0,0,0,0.4)">
<div style="display:flex;align-items:center;gap:12px;padding:10px 16px;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.06);border-radius:6px">
<code style="flex:1;font-size:13px;color:rgba(52,211,153,0.7);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">https://edge.vinkius.com/vk_abc123.../mcp</code>
<div style="padding:4px 10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:4px;font-size:11px;color:rgba(255,255,255,0.4);font-weight:600">Copy</div>
</div>
</div>

</div>

### Supported clients

| Tab | Client | Integration |
|---|---|---|
| **Cursor / VSCode** | Cursor, VS Code with Copilot, Windsurf | Paste the SSE URL directly into MCP settings |
| **Claude Desktop** | Claude Desktop | Add to `mcpServers` object in the JSON config file |
| **Antigravity** | Antigravity (Vinkius AI) | Paste the SSE URL into the MCP server field |

---

## Plan-based quotas

Token creation is governed by your subscription plan:

| Plan | Max Tokens per Server |
|---|---|
| **Free** | 1 |
| **Developer** | 3 |
| **Team** | 10 |
| **Business** | 25 |

When you reach your plan limit, the Generate button is disabled and an upgrade notice appears. The quota counter (`2 / 10 TOKENS`) is always visible in the token list footer and header.

---

## Token revocation

Click **Revoke** on any token to permanently invalidate it. Revocation is:

- **Immediate** — The token is deleted from the database and a `mcp:invalidate` event is published via Redis pub/sub in the same request
- **Propagated** — Active SSE connections authenticated with the revoked token are terminated within milliseconds through the [Kill Switch](/security/kill-switch) mechanism
- **Irreversible** — Once revoked, the token hash is removed. There is no "undo" or "suspend" — only delete and regenerate
- **Audited** — The revocation event appears in the [Audit Logs](/servers/logs)

::: tip Token rotation
To rotate a token without downtime, generate a new token first, update your client configuration, then revoke the old token. Because tokens are per-server and independently named, you can run multiple active tokens during the transition window.
:::

---

## Security model

### HMAC-SHA256 authentication

Every token is hashed with HMAC-SHA256 before storage. The database never contains plaintext credentials — only the hash is persisted. On each request, the incoming token is hashed and compared against stored hashes.

### Token-based routing

The MCP URL format is `https://edge.vinkius.com/{token}/mcp`. The token in the URL path is both the routing key (identifying which server to proxy to) and the authentication credential. There is no separate server ID or API key — one value handles both concerns.

### No credential leakage

- **Show-once** — Plaintext token returned only in the creation response
- **Hint only** — After creation, only the last 4 characters are visible
- **No export** — Token values cannot be retrieved, exported, or listed in plaintext
- **Redis pub/sub** — Revocation events propagate through the real-time messaging layer, not through polling

### Marketplace isolation

When a server is listed on the Marketplace, buyers receive their own provisioned tokens through a separate system. Seller tokens and buyer tokens are completely isolated — one cannot access the other's credentials or see each other's token list.

---

## Next steps

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:32px 0">

<a href="/servers/tools" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(52,211,153,0.12);border-radius:8px;background:rgba(52,211,153,0.02)">
<span style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:600">TOOLS</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">MCP Tools</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Toggle, search, and edit tools.</div>
<span style="font-size:13px;color:rgba(52,211,153,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Browse →</span>
</a>

<a href="/security/kill-switch" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(239,68,68,0.12);border-radius:8px;background:rgba(239,68,68,0.02)">
<span style="font-size:11px;color:rgba(239,68,68,0.5);letter-spacing:2px;font-weight:600">SECURITY</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Kill Switch</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Instant connection termination.</div>
<span style="font-size:13px;color:rgba(239,68,68,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Learn more →</span>
</a>

</div>

---

## Frequently Asked Questions

### How does HMAC-SHA256 token authentication work?
Every connection token is hashed with HMAC-SHA256 before storage. The database never contains plaintext credentials. On each MCP request, the incoming token is hashed and compared against stored hashes. This means even a database breach cannot expose token credentials.

### Can I recover a lost connection token?
No. Tokens use show-once disclosure — the full value is displayed exactly once at creation and never persisted in the database. If you lose a token, generate a new one and update your AI client configuration. The old token can be safely revoked.

### How many tokens can I create per server?
Token quotas depend on your plan: Free (1 token), Developer (3 tokens), Team (10 tokens), Business (25 tokens). The quota counter is always visible in the token list footer. When you reach your limit, the Generate button is disabled with an upgrade notice.

### What AI clients support Quick Connect?
Quick Connect provides client-specific configuration for Cursor, VS Code with Copilot, Claude Desktop, Windsurf, ChatGPT, Cline, Continue, Zed, and Antigravity. Each tab shows the exact steps and configuration format for that client. The SSE URL is included in the copy-paste ready config.

### Is token revocation instant?
Yes. Revocation is immediate and propagated via Redis pub/sub. The token hash is deleted from the database, active SSE connections using the revoked token are terminated within milliseconds, and the event is recorded in the Audit Log. There is no grace period.

### Can seller and buyer tokens access each other?
No. When a server is listed on the Marketplace, buyer tokens and seller tokens are completely isolated. One cannot access the other's credentials or see each other's token list. This ensures marketplace privacy and prevents cross-tenant access.
