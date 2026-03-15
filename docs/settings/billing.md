---
title: MCP Server Plans & Billing — Free, Developer, Team & Business Pricing | Vinkius Cloud
description: "Compare Vinkius Cloud plans: Free (10 req/mo), Developer (10K), Team (100K), Business (500K). Flat-rate pricing with no per-seat fees. Includes Stripe checkout, usage tracking, grace-period cancellation, and annual discount."
head:
  - - meta
    - name: keywords
      content: MCP server pricing, MCP plans billing, Vinkius Cloud pricing, AI server subscription, MCP server cost, flat rate MCP
  - - meta
    - property: og:title
      content: MCP Server Plans & Billing — Pricing Comparison | Vinkius Cloud
  - - meta
    - property: og:description
      content: "Compare Vinkius Cloud plans: Free, Developer, Team, and Business. Flat-rate pricing with no per-seat fees, Stripe checkout, and annual discount."
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is Vinkius Cloud pricing per seat or flat rate?","acceptedAnswer":{"@type":"Answer","text":"All plans are flat rate — one price covers your entire team. There are no per-seat fees or per-user charges."}},{"@type":"Question","name":"What happens when I exceed my monthly request limit?","acceptedAnswer":{"@type":"Answer","text":"MCP tool calls return a rate-limit response. Your servers remain online and configuration is preserved. Upgrade to a higher plan for instant access."}},{"@type":"Question","name":"Can I switch between monthly and annual billing?","acceptedAnswer":{"@type":"Answer","text":"Yes. Annual billing saves approximately 17%. You can switch at any time — the change takes effect at the start of your next billing period."}},{"@type":"Question","name":"How do plan upgrades work?","acceptedAnswer":{"@type":"Answer","text":"Click Upgrade on any higher plan card. You are redirected to Stripe Checkout. After payment, your plan upgrades immediately with no downtime."}},{"@type":"Question","name":"What is the cancellation grace period?","acceptedAnswer":{"@type":"Answer","text":"You keep full access until the end of your billing period. After that date, your plan reverts to Free with 10 requests per month."}},{"@type":"Question","name":"Do all plans include DLP and security features?","acceptedAnswer":{"@type":"Answer","text":"Yes. DLP, FinOps Guard, V8 Sandbox, SSRF Protection, and Stateful SSE are included in every plan — including Free. Plans differ in request volume, tokens, storage, and log retention."}}]}'
---

# Plans & Billing

Manage your subscription, track usage, and upgrade or downgrade your plan.

Access via **Settings → Billing** in Vinkius Cloud.

---

## Current plan and usage

The top section shows your current plan, a progress bar for request consumption, and the next reset date.

<!-- Usage card recreation -->
<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#09090f;padding:20px 24px">
<span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">CURRENT PLAN</span>
<div style="display:flex;align-items:center;gap:12px;margin-top:12px">
<span style="font-size:18px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,sans-serif">Developer</span>
<span style="font-size:13px;color:rgba(255,255,255,0.35);font-family:Inter,sans-serif">1,240 / 10,000 requests used</span>
</div>
<div style="height:8px;border-radius:4px;background:rgba(255,255,255,0.06);overflow:hidden;margin-top:12px">
<div style="width:12%;height:100%;background:rgba(59,130,246,0.7);border-radius:4px"></div>
</div>
<div style="font-size:11px;color:rgba(255,255,255,0.2);margin-top:8px;font-family:Inter,sans-serif">Resets April 15, 2025</div>
</div>

Color-coded thresholds signal usage levels:

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:24px 0">
<div style="padding:12px 16px;border:1px solid rgba(59,130,246,0.15);border-radius:6px;background:rgba(59,130,246,0.03)">
<div style="display:flex;align-items:center;gap:8px">
<div style="width:8px;height:8px;border-radius:50%;background:rgba(59,130,246,0.7)"></div>
<span style="font-size:13px;color:rgba(255,255,255,0.7);font-weight:500;font-family:Inter,sans-serif">Blue</span>
</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:4px;font-family:Inter,sans-serif">Under 80% — normal usage</div>
</div>
<div style="padding:12px 16px;border:1px solid rgba(245,158,11,0.15);border-radius:6px;background:rgba(245,158,11,0.03)">
<div style="display:flex;align-items:center;gap:8px">
<div style="width:8px;height:8px;border-radius:50%;background:rgba(245,158,11,0.7)"></div>
<span style="font-size:13px;color:rgba(255,255,255,0.7);font-weight:500;font-family:Inter,sans-serif">Amber</span>
</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:4px;font-family:Inter,sans-serif">80-95% — review usage patterns</div>
</div>
<div style="padding:12px 16px;border:1px solid rgba(239,68,68,0.15);border-radius:6px;background:rgba(239,68,68,0.03)">
<div style="display:flex;align-items:center;gap:8px">
<div style="width:8px;height:8px;border-radius:50%;background:rgba(239,68,68,0.7)"></div>
<span style="font-size:13px;color:rgba(255,255,255,0.7);font-weight:500;font-family:Inter,sans-serif">Red</span>
</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:4px;font-family:Inter,sans-serif">Over 95% — consider upgrading</div>
</div>
</div>

---

## Available plans

Plans are displayed as side-by-side cards with a **monthly/annual toggle**. Annual billing saves approximately 17%.

### Included in every plan

Every plan — including Free — includes these features at no extra cost:

<div style="margin:24px 0;padding:16px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f;text-align:center">
<span style="font-size:9px;color:rgba(255,255,255,0.2);letter-spacing:2px">INCLUDED IN ALL PLANS</span>
<div style="display:flex;align-items:center;justify-content:center;gap:16px;flex-wrap:wrap;margin-top:12px">
<span style="font-size:11px;color:rgba(255,255,255,0.4);font-family:ui-monospace,monospace">Stateful SSE</span>
<span style="color:rgba(255,255,255,0.15)">·</span>
<span style="font-size:11px;color:rgba(255,255,255,0.4);font-family:ui-monospace,monospace">SSRF Protection</span>
<span style="color:rgba(255,255,255,0.15)">·</span>
<span style="font-size:11px;color:rgba(255,255,255,0.4);font-family:ui-monospace,monospace">Zero-Config Import</span>
<span style="color:rgba(255,255,255,0.15)">·</span>
<span style="font-size:11px;color:rgba(255,255,255,0.4);font-family:ui-monospace,monospace">Unlimited Servers</span>
<span style="color:rgba(255,255,255,0.15)">·</span>
<span style="font-size:11px;color:rgba(255,255,255,0.4);font-family:ui-monospace,monospace">Unlimited Edge Deploys</span>
<span style="color:rgba(255,255,255,0.15)">·</span>
<span style="font-size:11px;color:rgba(255,255,255,0.4);font-family:ui-monospace,monospace">Free Marketplace Listings</span>
</div>
</div>

### Plan differences

Plans differ in request volume, per-server token limits, and skill storage:

| Feature | Free | Developer | Team | Business |
|---|---|---|---|---|
| **MCP Requests / month** | 10 | 10,000 | 100,000 | 500,000 |
| **Servers** | 3 | Unlimited | Unlimited | Unlimited |
| **Tokens per server** | 1 | 3 | 10 | 25 |
| **Skill Storage** | — | 100 MB | 200 MB | 500 MB |
| **Audit Log Retention** | Real-time only | Real-time only | 7 days | 30 days |
| **DLP & FinOps** | Included | Included | Included | Included |
| **V8 Sandbox** | Included | Included | Included | Included |

::: info Flat rate
All plans are **flat rate** — no per-seat fees. One price covers your entire team.
:::

---

## Checkout and subscription management

### Upgrading

Click **Upgrade to [Plan]** on any higher plan card. You are redirected to Stripe Checkout to complete payment. After checkout, your plan upgrades immediately and you are redirected back to the billing tab with a success banner.

### Downgrading

Click **Downgrade to [Plan]** on a lower plan. The change takes effect at the end of your current billing period. No Stripe redirect is needed for downgrades — the system handles the plan swap automatically.

### Managing billing

- **Manage Billing** — Opens the Stripe customer portal for payment methods, invoices, and receipts
- **Cancel Subscription** — Initiates a grace-period cancellation: you keep full access until the end of your current billing period, then your plan reverts to Free

### Grace period

After cancellation, a banner shows the date your access expires. Until that date, you retain full access to your current plan's features.

---

## Next steps

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:32px 0">

<a href="/settings/" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<span style="font-size:11px;color:rgba(255,255,255,0.3);letter-spacing:2px;font-weight:600">OVERVIEW</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Settings Overview</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Back to all settings tabs.</div>
<span style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:12px;display:block;font-family:Inter,sans-serif">Overview →</span>
</a>

<a href="/marketplace" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(129,140,248,0.12);border-radius:8px;background:rgba(129,140,248,0.02)">
<span style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:600">MARKETPLACE</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Marketplace</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Discover and publish MCP servers.</div>
<span style="font-size:13px;color:rgba(129,140,248,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Explore →</span>
</a>

</div>

---

## Frequently Asked Questions

### Is Vinkius Cloud pricing per seat or flat rate?
All plans are flat rate — one price covers your entire team. There are no per-seat fees, no per-user charges. Whether one person or twenty use the account, the price stays the same.

### What happens when I exceed my monthly request limit?
When you reach your plan's request limit, MCP tool calls return a rate-limit response. Your servers remain online and configuration is preserved. Upgrade to a higher plan from the Billing tab for instant access to more requests.

### Can I switch between monthly and annual billing?
Yes. The Billing tab includes a monthly/annual toggle. Annual billing saves approximately 17% compared to monthly pricing. You can switch at any time — the change takes effect at the start of your next billing period.

### How do plan upgrades work?
Click Upgrade on any higher plan card. You are redirected to Stripe Checkout to complete payment. After checkout, your plan upgrades immediately and you are redirected back to the billing tab with a success banner. No downtime.

### What is the cancellation grace period?
After cancellation, you keep full access to your current plan's features until the end of your billing period. A banner shows the exact date your access expires. After that date, your plan reverts to Free with 10 requests per month.

### Do all plans include DLP and security features?
Yes. DLP Protection, FinOps Guard, V8 Sandbox, SSRF Protection, and Stateful SSE connections are included in every plan — including Free. Plans differ in request volume, token quotas, skill storage, and audit log retention.
