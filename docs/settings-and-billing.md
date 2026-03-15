---
title: Settings & Billing Overview — MCP Configuration, DLP, FinOps & Subscription Management | Vinkius Cloud
description: Complete reference for Vinkius Cloud settings. Configure tool grouping, TOON compression, DLP patterns, FinOps response limits, profile management, seller onboarding, and plan billing — all from a single page.
head:
  - - meta
    - name: keywords
      content: MCP server configuration, MCP settings billing, Vinkius Cloud settings, MCP DLP FinOps, tool grouping TOON, MCP subscription management
  - - meta
    - property: og:title
      content: Settings & Billing Overview — MCP Configuration | Vinkius Cloud
  - - meta
    - property: og:description
      content: Complete reference for Vinkius Cloud settings. Tool grouping, TOON compression, DLP, FinOps, profile, and subscription management.
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does Tool Grouping do and when should I enable it?","acceptedAnswer":{"@type":"Answer","text":"Tool Grouping collapses related MCP tools into navigable categories. Auto mode handles this automatically — flat below 20 tools, grouped above."}},{"@type":"Question","name":"How does TOON compression reduce AI token costs?","acceptedAnswer":{"@type":"Answer","text":"TOON rewrites verbose JSON schema definitions into compact tabular format, reducing token consumption by 30-50% per request."}},{"@type":"Question","name":"Can I configure DLP and FinOps differently for each server?","acceptedAnswer":{"@type":"Answer","text":"Yes. Global settings provide defaults that new servers inherit. You can override per server from their detail page. Per-server settings always take priority."}},{"@type":"Question","name":"What plans are available and what is included?","acceptedAnswer":{"@type":"Answer","text":"Four plans: Free (10 req/mo), Developer (10K), Team (100K), Business (500K). All include DLP, FinOps Guard, V8 Sandbox, SSRF Protection, and Stateful SSE. Flat rate, no per-seat fees."}},{"@type":"Question","name":"How do I cancel my subscription?","acceptedAnswer":{"@type":"Answer","text":"Click Cancel Subscription in Billing. You keep full access until the end of your billing period, then your plan reverts to Free."}},{"@type":"Question","name":"What is the Seller Profile tab for?","acceptedAnswer":{"@type":"Answer","text":"It appears after completing Marketplace seller onboarding. Manage your public profile — display name, bio, and payout configuration through Stripe Connect."}}]}'
---

# Settings and Billing

Configure platform-wide MCP behavior, manage your profile, and control your subscription.

---

## MCP Settings

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:8px;overflow:hidden;background:#09090f;font-family:ui-monospace,monospace">

<!-- Header -->
<div style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<span style="font-size:9px;color:rgba(129,140,248,0.6);letter-spacing:2px">// SETTINGS</span>
<div style="font-size:18px;color:#fff;font-family:Inter,system-ui,sans-serif;font-weight:700;margin-top:4px">Configuration</div>
<span style="font-size:11px;color:rgba(255,255,255,0.3)">Manage your profile and MCP defaults</span>
</div>

<!-- Tool Grouping -->
<div style="padding:20px;border-bottom:1px solid rgba(255,255,255,0.04)">
<span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TOOL GROUPING</span>
<div style="font-size:10px;color:rgba(255,255,255,0.4);margin-top:6px;font-family:Inter,sans-serif">Controls how tools are exposed to AI clients. Grouping reduces context window usage for large APIs.</div>

<!-- Radio: Flat -->
<div style="margin-top:16px;padding:12px 16px;border:1px solid rgba(255,255,255,0.06);border-radius:6px;display:flex;align-items:flex-start;gap:12px">
<div style="width:14px;height:14px;border-radius:50%;border:1.5px solid rgba(255,255,255,0.15);margin-top:1px;flex-shrink:0"></div>
<div>
<div style="font-size:12px;color:#fff;font-weight:500;font-family:Inter,sans-serif">Flat</div>
<div style="font-size:10px;color:rgba(255,255,255,0.3);margin-top:2px;font-family:Inter,sans-serif">Each endpoint becomes an individual MCP tool. Best for small APIs (&lt; 20 tools).</div>
</div>
</div>

<!-- Radio: Grouped -->
<div style="margin-top:8px;padding:12px 16px;border:1px solid rgba(255,255,255,0.06);border-radius:6px;display:flex;align-items:flex-start;gap:12px">
<div style="width:14px;height:14px;border-radius:50%;border:1.5px solid rgba(255,255,255,0.15);margin-top:1px;flex-shrink:0"></div>
<div>
<div style="font-size:12px;color:#fff;font-weight:500;font-family:Inter,sans-serif">Grouped</div>
<div style="font-size:10px;color:rgba(255,255,255,0.3);margin-top:2px;font-family:Inter,sans-serif">Related endpoints share one MCP tool with an action discriminator. Reduces token usage.</div>
</div>
</div>

<!-- Radio: Auto (selected) -->
<div style="margin-top:8px;padding:12px 16px;border:1px solid rgba(129,140,248,0.2);border-radius:6px;background:rgba(129,140,248,0.03);display:flex;align-items:flex-start;gap:12px">
<div style="width:14px;height:14px;border-radius:50%;border:1.5px solid #818cf8;display:flex;align-items:center;justify-content:center;margin-top:1px;flex-shrink:0"><div style="width:6px;height:6px;border-radius:50%;background:#818cf8"></div></div>
<div>
<div style="font-size:12px;color:#fff;font-weight:500;font-family:Inter,sans-serif">Auto <span style="font-size:10px;color:rgba(129,140,248,0.6);font-weight:400">(recommended)</span></div>
<div style="font-size:10px;color:rgba(255,255,255,0.3);margin-top:2px;font-family:Inter,sans-serif">Automatically groups when a server exceeds the threshold below.</div>
<div style="margin-top:8px;display:flex;align-items:center;gap:8px">
<span style="font-size:11px;color:rgba(255,255,255,0.4)">Threshold</span>
<span style="font-size:12px;color:#fff;padding:2px 12px;border:1px solid rgba(255,255,255,0.1);border-radius:4px;background:rgba(255,255,255,0.02)">20</span>
<span style="font-size:11px;color:rgba(255,255,255,0.25)">tools</span>
</div>
</div>
</div>
</div>

<!-- Token Compression -->
<div style="padding:20px">
<span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TOKEN COMPRESSION</span>
<div style="font-size:10px;color:rgba(255,255,255,0.4);margin-top:6px;font-family:Inter,sans-serif">TOON compresses tool descriptions into compact tabular format, reducing context window usage by ~30-50%.</div>
<div style="margin-top:12px;display:flex;align-items:center;gap:10px">
<div style="width:14px;height:14px;border-radius:3px;border:1.5px solid rgba(255,255,255,0.15)"></div>
<span style="font-size:11px;color:#fff;font-weight:500;font-family:Inter,sans-serif">Enable TOON compression</span>
</div>
<div style="font-size:9px;color:rgba(255,255,255,0.2);margin-top:6px;font-family:Inter,sans-serif">Works best with GPT-4, Claude 3.5+ and Gemini 2.0+.</div>
</div>

</div>

### Tool Grouping

When you deploy an API with 30, 50, or 100+ endpoints, each endpoint becomes an MCP tool. This creates a problem: AI models have limited context windows, and listing all tools at once consumes a significant portion of that budget — sometimes leaving too little room for the actual conversation.

Tool Grouping solves this by collapsing related tools into navigable groups. Instead of seeing 50 individual tools, the AI model sees 5 groups and drills into the one it needs. This reduces the tool listing overhead by an order of magnitude for large APIs.

| Mode | Behavior | When to use |
|---|---|---|
| **Flat** | Every endpoint is its own MCP tool | APIs with fewer than 20 endpoints |
| **Grouped** | Tools are always collapsed by tag | APIs where you want to control discoverability |
| **Auto** (default) | Flat below the threshold, grouped above it | Most APIs — the platform adapts automatically |

The **grouping threshold** (default: 20) controls when Auto mode switches from flat to grouped. Lower it if your AI model has a small context window; raise it if you want tools always visible.

### TOON Token Compression

TOON (Tool Object Optimized Notation) is a proprietary compression protocol that rewrites tool descriptions and response payloads into a compact tabular format. In benchmarks, this reduces token consumption by 30-50% per request without losing information.

How it works: instead of verbose JSON schema definitions, TOON encodes tools as structured tables that modern language models parse natively. The AI model receives the same semantic information in fewer tokens.

::: tip Compatibility
TOON works with Claude 3.5+, GPT-4, and Gemini 2.0+. Older models or clients that expect raw JSON schemas may behave unpredictably — test before enabling in production.
:::

### Response Presenters

Response Presenters transform raw API responses into structured, AI-optimized formats. When an API returns deeply nested JSON with metadata, pagination cursors, and wrapper objects, Presenters extract the useful data and flatten it into a format that models reason about more effectively.

The result: higher-quality AI responses because the model receives cleaner input. Disable only if your AI client expects unprocessed responses.

---

## DLP Protection

This tab provides account-wide Data Loss Prevention configuration:

- **Global patterns** — Define PII detection rules that apply to all servers. These run in addition to the built-in detectors (email, phone, SSN, credit card).
- **Redaction rules** — Choose how detected values are replaced: `[REDACTED]`, `[PII_REMOVED]`, or a custom marker.
- **Exceptions** — Exclude specific data types or endpoints from redaction. Useful when an endpoint legitimately returns email addresses (e.g., a user profile API).
- **Aggregate activity** — View total redaction counts across all servers with a 30-day trend.

Per-server DLP controls are available on each server's Edit modal. See [Security and Governance](security/index.md) for the full technical reference.

---

## FinOps Guard

This tab provides account-wide FinOps configuration:

- **Default payload limits** — Set the maximum number of items in list responses for all new servers (default: 50). Existing servers keep their current setting.
- **Byte ceilings** — Set an absolute byte limit for response bodies. Responses exceeding this are truncated.
- **Truncation behavior** — Choose what happens when a response is truncated:
  - **Ellipsis** — Appends `...` and a count of omitted items
  - **Count notice** — Adds a structured note telling the model how many items were removed
  - **Silent drop** — Truncates without notification
- **Aggregate activity** — View estimated token savings and truncation counts across all servers.

::: info Why FinOps matters
A single verbose API endpoint can return payloads that consume 10,000+ tokens — that's a significant portion of a model's context window. Without guardrails, one tool call can crowd out the conversation history and degrade response quality. FinOps Guard ensures no single response dominates the context budget.
:::

---

## Profile

Manage your personal information:

- **Name** — Editable, used across the platform and in team rosters.
- **Email** — Managed by your OAuth provider (Google or GitHub). Read-only.
- **Avatar** — Pulled automatically from your OAuth provider.

### Danger zone

At the bottom of the Profile tab, a **Delete Account** button permanently removes your account, including all servers, tokens, subscriptions, and data. Active subscriptions are canceled immediately. This action is irreversible — you must type "DELETE" to confirm.

---

## Seller Profile

Available after completing the Seller Account onboarding (see [Marketplace](marketplace.md)). Manage how buyers see you: display name, bio, and payout configuration through Stripe Connect.

---

## Billing

### Current plan and usage

The top section shows your plan name (Free, Developer, Team, or Business), a progress bar for request consumption, and the next reset date.

Color-coded thresholds help you anticipate limits:
- **Blue** — Under 80% usage
- **Amber** — 80-95% — time to review usage patterns
- **Red** — Over 95% — consider upgrading or optimizing tool calls

### Available plans

Plans are displayed as side-by-side cards with a monthly/annual toggle. Annual billing saves approximately 17%.

Every plan includes these features at no extra cost:

- Stateful SSE connections
- SSRF protection
- Zero-config OpenAPI import
- Unlimited servers (paid plans) / 3 servers (Free)
- Free Marketplace listings

Plans differ in request volume, per-server token limits, and skill storage capacity:

| Feature | Free | Developer | Team | Business |
|---|---|---|---|---|
| **MCP Requests / month** | 10 | 10,000 | 100,000 | 500,000 |
| **Servers** | 3 | Unlimited | Unlimited | Unlimited |
| **Tokens per server** | 1 | 3 | 10 | 25 |
| **Skill Storage** | — | 100 MB | 200 MB | 500 MB |
| **Audit Log Retention** | Real-time only | Real-time only | 7 days | 30 days |

Click **Upgrade** on any higher plan to proceed to Stripe Checkout. Upgrades and downgrades are handled automatically — no need to cancel first.

### Managing your subscription

- **Manage Billing** — Opens the Stripe customer portal for payment methods, invoices, and receipts.
- **Cancel Subscription** — Initiates a grace-period cancellation. You keep full access until the end of your current billing period, then your plan reverts to Free.

---

## Next steps

- [Explore the Marketplace](marketplace.md)
- [Security & Governance](security/index.md)
- [Deploy a new server](deploying-servers.md)

---

## Frequently Asked Questions

### What does Tool Grouping do and when should I enable it?
Tool Grouping collapses related MCP tools into navigable categories. When your API has 30+ endpoints, listing every tool individually consumes a large portion of the AI model's context window. Auto mode (the default) handles this automatically — flat below 20 tools, grouped above.

### How does TOON compression reduce AI token costs?
TOON (Tool Object Optimized Notation) rewrites verbose JSON schema definitions into compact tabular format. This reduces token consumption by 30-50% per request. The AI model receives the same semantic information in fewer tokens, saving context window space and reducing API costs.

### Can I configure DLP and FinOps differently for each server?
Yes. Global settings provide defaults that every new server inherits. You can override DLP patterns, FinOps limits, and tool grouping on individual servers from their detail page. Per-server settings always take priority.

### What plans are available and what is included?
Four plans: Free (10 req/mo), Developer (10K), Team (100K), and Business (500K). All plans include DLP Protection, FinOps Guard, V8 Sandbox, SSRF Protection, and Stateful SSE. Plans differ in request volume, tokens per server, skill storage, and audit log retention. Pricing is flat rate with no per-seat fees.

### How do I cancel my subscription?
Click Cancel Subscription in the Billing tab. You keep full access until the end of your current billing period, then your plan reverts to Free. All servers and configuration are preserved — only request limits change.

### What is the Seller Profile tab for?
The Seller Profile tab appears after completing Marketplace seller onboarding. It lets you manage how buyers see your public profile — display name, bio, and payout configuration through Stripe Connect.
