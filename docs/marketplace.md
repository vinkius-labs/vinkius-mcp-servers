---
title: "MCP Server Marketplace — Buy & Sell AI Tools | Vinkius"
description: "Browse, subscribe to, or sell MCP servers on the Vinkius Marketplace. Every listing is a fully hosted, governed server with built-in Stripe Connect payouts."
head:
  - - meta
    - property: og:title
      content: "MCP Server Marketplace — Buy & Sell AI Tools | Vinkius"
  - - meta
    - property: og:description
      content: "Browse, subscribe to, or sell MCP servers on the Vinkius Marketplace. Every listing is fully hosted with built-in Stripe Connect payouts."
  - - meta
    - name: keywords
      content: "MCP marketplace, sell MCP server, buy MCP tools, MCP tool marketplace, monetize MCP server, AI tool marketplace, MCP server subscription, Stripe MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the Vinkius Marketplace?","acceptedAnswer":{"@type":"Answer","text":"The Vinkius Marketplace is a curated directory where you can browse and subscribe to MCP servers published by other creators, or list your own servers for others to use. Every listing is a live, fully hosted MCP server — not a code download or self-hosted package."}},{"@type":"Question","name":"How do I subscribe to a marketplace server?","acceptedAnswer":{"@type":"Answer","text":"Browse the marketplace, find a server that matches your needs, and click Subscribe. Vinkius Cloud generates a connection token and Config JSON instantly. Paste it into Claude, Cursor, or any MCP client — the tools are immediately available."}},{"@type":"Question","name":"Can I sell my own MCP servers on the marketplace?","acceptedAnswer":{"@type":"Answer","text":"Yes. Any server you deploy on Vinkius Cloud can be published to the marketplace. Set your pricing (free or paid), write a description, and submit for review. Payments are handled through Stripe Connect with automatic payouts."}},{"@type":"Question","name":"What pricing models are available for sellers?","acceptedAnswer":{"@type":"Answer","text":"Sellers can choose between free listings (to build a user base), monthly subscriptions, or per-request pricing. Stripe Connect handles all billing, payouts, and tax compliance."}},{"@type":"Question","name":"Are marketplace servers governed the same way as my own?","acceptedAnswer":{"@type":"Answer","text":"Yes. Every marketplace server runs on the same infrastructure with the same security guarantees: DLP, FinOps Guard, SSRF protection, V8 sandbox isolation, and HMAC-authenticated connection tokens."}},{"@type":"Question","name":"How is the marketplace different from other MCP directories?","acceptedAnswer":{"@type":"Answer","text":"Unlike registries like Smithery or OpenTools that list code packages you have to self-host, the Vinkius Marketplace provides fully hosted, running MCP servers. You subscribe, get a URL, and connect — no infrastructure to manage."}}]}'
---

# Marketplace

Browse and subscribe to MCP servers published by other creators, or become a seller and monetize your own.

---

## How the Marketplace works

The Marketplace connects MCP server creators with consumers. Every listing is a fully hosted, governed server — when you subscribe, the server appears in your account as if you deployed it yourself, with all the same Quick Connect, DLP, and monitoring features.

This is different from traditional API marketplaces: you're not downloading code or managing infrastructure. You're subscribing to a running service that your AI clients can connect to immediately.

---

## Browsing

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:8px;overflow:hidden;background:#09090f;font-family:ui-monospace,monospace">

<!-- Hero -->
<div style="padding:24px 20px;border-bottom:1px solid rgba(255,255,255,0.06);display:grid;grid-template-columns:1fr 1fr;gap:24px">

<!-- Left -->
<div>
<span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">// MARKETPLACE</span>
<div style="font-size:24px;color:#fff;font-family:Inter,system-ui,sans-serif;font-weight:700;margin-top:12px;line-height:1.1">Discover powerful</div>
<div style="font-size:24px;color:rgba(255,255,255,0.35);font-family:Inter,system-ui,sans-serif;font-weight:700;line-height:1.1">MCP servers</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35);margin-top:12px;font-family:Inter,sans-serif;line-height:1.6">Browse, subscribe, and connect AI-ready servers to Claude, Cursor, VS Code, and any MCP-compatible client.</div>

<!-- Search bar -->
<div style="margin-top:16px;display:flex;border:1px solid rgba(255,255,255,0.1);border-radius:4px;overflow:hidden">
<div style="flex:1;padding:8px 12px;font-size:11px;color:rgba(255,255,255,0.2)">Search listings...</div>
<div style="padding:8px 16px;background:#fff;color:#000;font-size:9px;font-weight:600;letter-spacing:1px;display:flex;align-items:center">BROWSE ALL</div>
</div>
</div>

<!-- Right — How it works -->
<div>
<span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">// HOW IT WORKS</span>
<div style="margin-top:16px">
<div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:16px">
<span style="font-size:10px;color:rgba(245,158,11,0.8);font-weight:600">01</span>
<div>
<div style="font-size:12px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Browse & discover</div>
<div style="font-size:10px;color:rgba(255,255,255,0.3);margin-top:2px;font-family:Inter,sans-serif">Explore MCP servers published by verified sellers</div>
</div>
</div>
<div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:16px">
<span style="font-size:10px;color:rgba(245,158,11,0.8);font-weight:600">02</span>
<div>
<div style="font-size:12px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Subscribe instantly</div>
<div style="font-size:10px;color:rgba(255,255,255,0.3);margin-top:2px;font-family:Inter,sans-serif">One click to connect — free trials available</div>
</div>
</div>
<div style="display:flex;align-items:flex-start;gap:10px">
<span style="font-size:10px;color:rgba(245,158,11,0.8);font-weight:600">03</span>
<div>
<div style="font-size:12px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Connect any client</div>
<div style="font-size:10px;color:rgba(255,255,255,0.3);margin-top:2px;font-family:Inter,sans-serif">Claude, Cursor, VS Code, and any MCP-compatible tool</div>
</div>
</div>
</div>
</div>

</div>

<!-- Clients strip -->
<div style="display:grid;grid-template-columns:repeat(6,1fr);border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="padding:12px 8px;text-align:center;border-right:1px solid rgba(255,255,255,0.04)"><span style="font-size:14px;color:rgba(255,255,255,0.7);font-weight:700;font-family:Inter,sans-serif">Claude</span><br><span style="font-size:8px;color:rgba(255,255,255,0.2);letter-spacing:1px">DESKTOP & CODE</span></div>
<div style="padding:12px 8px;text-align:center;border-right:1px solid rgba(255,255,255,0.04)"><span style="font-size:14px;color:rgba(255,255,255,0.7);font-weight:700;font-family:Inter,sans-serif">Cursor</span><br><span style="font-size:8px;color:rgba(255,255,255,0.2);letter-spacing:1px">IDE</span></div>
<div style="padding:12px 8px;text-align:center;border-right:1px solid rgba(255,255,255,0.04)"><span style="font-size:14px;color:rgba(255,255,255,0.7);font-weight:700;font-family:Inter,sans-serif">ChatGPT</span><br><span style="font-size:8px;color:rgba(255,255,255,0.2);letter-spacing:1px">OPENAI</span></div>
<div style="padding:12px 8px;text-align:center;border-right:1px solid rgba(255,255,255,0.04)"><span style="font-size:14px;color:rgba(255,255,255,0.7);font-weight:700;font-family:Inter,sans-serif">Windsurf</span><br><span style="font-size:8px;color:rgba(255,255,255,0.2);letter-spacing:1px">IDE</span></div>
<div style="padding:12px 8px;text-align:center;border-right:1px solid rgba(255,255,255,0.04)"><span style="font-size:14px;color:rgba(255,255,255,0.7);font-weight:700;font-family:Inter,sans-serif">VS Code</span><br><span style="font-size:8px;color:rgba(255,255,255,0.2);letter-spacing:1px">+ COPILOT</span></div>
<div style="padding:12px 8px;text-align:center"><span style="font-size:14px;color:rgba(255,255,255,0.7);font-weight:700;font-family:Inter,sans-serif">Cline</span><br><span style="font-size:8px;color:rgba(255,255,255,0.2);letter-spacing:1px">TERMINAL</span></div>
</div>

<!-- Filters -->
<div style="padding:10px 20px;display:flex;justify-content:space-between;align-items:center">
<div style="display:flex;gap:6px">
<span style="font-size:9px;color:#000;background:#fff;padding:3px 10px;border-radius:3px;font-weight:600">ALL</span>
<span style="font-size:9px;color:rgba(255,255,255,0.3);padding:3px 10px;border:1px solid rgba(255,255,255,0.1);border-radius:3px">TOOLS</span>
<span style="font-size:9px;color:rgba(255,255,255,0.3);padding:3px 10px;border:1px solid rgba(255,255,255,0.1);border-radius:3px">SKILLS</span>
</div>
<div style="display:flex;gap:6px">
<span style="font-size:9px;color:#000;background:#fff;padding:3px 10px;border-radius:3px;font-weight:600">ALL</span>
<span style="font-size:9px;color:rgba(255,255,255,0.3);padding:3px 10px;border:1px solid rgba(255,255,255,0.1);border-radius:3px">PAID</span>
<span style="font-size:9px;color:rgba(255,255,255,0.3);padding:3px 10px;border:1px solid rgba(255,255,255,0.1);border-radius:3px">FREE</span>
</div>
</div>

</div>

Navigate to **Marketplace** from the sidebar. The page opens with:

- **Search** — Live search with instant dropdown results. As you type, matching listings appear with name, description, and price.
- **How It Works** — A three-step visual guide: browse → subscribe → connect.
- **Compatible Clients** — A horizontal strip showing supported AI clients. Every Marketplace server works with every MCP-compatible client.
- **Filters** — Narrow results by server type (API tools vs. Skills) and listing type (paid vs. free).

### Listing cards

Each listing appears as a card showing:

- **Title** and short description
- **Seller name** and avatar
- **Price** — Free or monthly subscription cost
- **Server type** badge — API (endpoint-based tools) or Skills (text-based knowledge)
- **Subscribe** or **Get Access** button

Click a card to open the listing detail page with the full description, tool inventory, pricing, and terms.

---

## Subscribing

Subscribing to a server is like deploying one yourself — the server appears in your account, you get connection tokens, and you can connect any AI client through Quick Connect.

1. Click **Subscribe** (paid) or **Get Free Access**.
2. For paid listings, Stripe Checkout handles the payment.
3. The server immediately appears in **My Subscriptions** and is ready for Quick Connect.

### My Subscriptions

Navigate to **My Subscriptions** from the sidebar. This page lists every server you're subscribed to:

| Column | What it shows |
|---|---|
| **Server name** | Name and seller |
| **Status** | Active or expired |
| **Tools** | Number of MCP tools available |
| **Subscription date** | When you subscribed |
| **Manage** | Link to cancel or modify |

---

## Becoming a seller

To sell access to your MCP servers, complete the Seller Account onboarding.

### Seller Account wizard

Navigate to **Seller Account** from the sidebar. The wizard has two steps:

1. **Profile Setup** — Enter your display name, bio, and contact information. This is how buyers see you on every listing.
2. **Payout Configuration** — Connect your Stripe account through Stripe Connect. This enables direct payouts when subscribers purchase your listings. Stripe handles invoicing, tax forms, and currency conversion.

### Seller Dashboard

After onboarding, the Seller Account page becomes a dashboard:

- **Revenue overview** — Total earnings, active subscriber count, and payout history.
- **Active listings** — All servers you've listed on the Marketplace with status and performance data.
- **Performance metrics** — Subscriber trends and listing views over time.

### Creating a listing

To list a server:

1. Open the server's **Detail** page.
2. Go to the **Sell Access** tab (visible only to sellers).
3. Configure: title, description, pricing (free or monthly), category, and terms.
4. Click **Publish**.

Your server becomes discoverable by all Marketplace users. You retain full control — update, pause, or remove the listing at any time. If you delete a server with active subscribers, a confirmation dialog lets you force-schedule the deletion after the current billing cycle ends.

---

## Next steps

- [Settings & Billing](settings-and-billing.md)
- [Deploy a new server](deploying-servers.md)
- [Security and governance](security/index.md)

---

## Frequently Asked Questions

### What is the Vinkius Marketplace?
The Vinkius Marketplace is a curated directory where you can browse and subscribe to MCP servers published by other creators, or list your own servers for others to use. Every listing is a live, fully hosted MCP server — not a code download or self-hosted package.

### How do I subscribe to a marketplace server?
Browse the marketplace, find a server that matches your needs, and click Subscribe. Vinkius Cloud generates a connection token and Config JSON instantly. Paste it into Claude, Cursor, or any MCP client — the tools are immediately available.

### Can I sell my own MCP servers on the marketplace?
Yes. Any server you deploy on Vinkius Cloud can be published to the marketplace. Set your pricing (free or paid), write a description, and submit for review. Payments are handled through Stripe Connect with automatic payouts.

### What pricing models are available for sellers?
Sellers can choose between free listings (to build a user base), monthly subscriptions, or per-request pricing. Stripe Connect handles all billing, payouts, and tax compliance.

### Are marketplace servers governed the same way as my own?
Yes. Every marketplace server runs on the same infrastructure with the same security guarantees: DLP, FinOps Guard, SSRF protection, V8 sandbox isolation, and HMAC-authenticated connection tokens.

### How is the marketplace different from other MCP directories?
Unlike registries like Smithery or OpenTools that list code packages you have to self-host, the Vinkius Marketplace provides fully hosted, running MCP servers. You subscribe, get a URL, and connect — no infrastructure to manage.
