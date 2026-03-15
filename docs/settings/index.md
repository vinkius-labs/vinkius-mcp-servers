---
title: MCP Server Settings — Platform-Wide Defaults for DLP, FinOps & Tool Configuration | Vinkius Cloud
description: Configure platform-wide defaults for all your MCP servers. Manage tool grouping, TOON compression, DLP redaction patterns, FinOps response limits, profile, and billing — with global-to-per-server inheritance.
head:
  - - meta
    - name: keywords
      content: MCP server settings, MCP platform configuration, MCP defaults, DLP settings, FinOps Guard, tool grouping, TOON compression
  - - meta
    - property: og:title
      content: MCP Server Settings — Platform-Wide Defaults | Vinkius Cloud
  - - meta
    - property: og:description
      content: Configure platform-wide defaults for DLP, FinOps, tool grouping, and TOON compression. Global-to-per-server inheritance for all MCP servers.
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What settings can I configure globally?","acceptedAnswer":{"@type":"Answer","text":"Five areas: MCP Defaults (tool grouping, TOON compression, Response Presenters), Data Shielding (PII redaction patterns), FinOps Guard (response limits, OOM Shield), Profile, and Billing."}},{"@type":"Question","name":"Do global settings apply retroactively to existing servers?","acceptedAnswer":{"@type":"Answer","text":"No. Global settings apply to new servers at creation time. Existing servers keep their current configuration."}},{"@type":"Question","name":"Can I override global settings per server?","acceptedAnswer":{"@type":"Answer","text":"Yes. Every global setting can be overridden at the server level. Per-server settings always take priority over global defaults."}},{"@type":"Question","name":"What is the inheritance model?","acceptedAnswer":{"@type":"Answer","text":"Vinkius Cloud uses a global-to-per-server inheritance chain: configure defaults globally, new servers inherit those defaults, per-server overrides take priority, and changing global defaults does not overwrite existing per-server settings."}},{"@type":"Question","name":"Is there a way to reset a server''s settings to global defaults?","acceptedAnswer":{"@type":"Answer","text":"Yes. From the server''s Edit modal, remove the per-server override and the server reverts to the current global default."}},{"@type":"Question","name":"How do I access the Settings panel?","acceptedAnswer":{"@type":"Answer","text":"Click the gear icon in the sidebar or navigate to Settings from the main navigation. The panel opens with a five-tab sidebar: MCP Settings, DLP Protection, FinOps Guard, Profile, and Billing."}}]}'
---

# Settings

Configure platform-wide defaults that apply to every MCP server you deploy. Each setting area reflects a tab in the Vinkius Cloud Settings panel.

---

<!-- Navigation cards -->
<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:32px 0">

<a href="/settings/mcp-defaults" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(129,140,248,0.12);border-radius:8px;background:rgba(129,140,248,0.02)">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">

<span style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:600">MCP</span>
</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">MCP Defaults</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Tool grouping, TOON compression, and Response Presenters — global defaults for every server.</div>
<span style="font-size:13px;color:rgba(129,140,248,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Configure →</span>
</a>

<a href="/settings/dlp" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(52,211,153,0.12);border-radius:8px;background:rgba(52,211,153,0.02)">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">

<span style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:600">DLP</span>
</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Data Shielding</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Define global PII redaction patterns using <code style="font-size:12px">fast-redact</code> paths. 32+ built-in patterns with autocomplete.</div>
<span style="font-size:13px;color:rgba(52,211,153,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Configure →</span>
</a>

<a href="/settings/finops" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(245,158,11,0.12);border-radius:8px;background:rgba(245,158,11,0.02)">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">

<span style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:600">FINOPS</span>
</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">FinOps Guard</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Response limits, OOM shield, TOON compression — control token costs across all servers.</div>
<span style="font-size:13px;color:rgba(245,158,11,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Configure →</span>
</a>

<a href="/settings/profile" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">

<span style="font-size:11px;color:rgba(255,255,255,0.3);letter-spacing:2px;font-weight:600">PROFILE</span>
</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Profile & Account</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Name, email, avatar, and the danger zone — account deletion with confirmation.</div>
<span style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:12px;display:block;font-family:Inter,sans-serif">Configure →</span>
</a>

<a href="/settings/billing" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(34,211,238,0.12);border-radius:8px;background:rgba(34,211,238,0.02);grid-column:span 2">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">

<span style="font-size:11px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:600">BILLING</span>
</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Plans & Billing</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Free, Developer, Team, and Business plans. Usage tracking, Stripe checkout, and subscription management.</div>
<span style="font-size:13px;color:rgba(34,211,238,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">View plans →</span>
</a>

</div>

---

## Settings panel

The settings panel uses a sidebar navigation with five tabs. Each tab controls a different area of your account:

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#09090f;font-family:ui-monospace,monospace">

<div style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<span style="font-size:9px;color:rgba(129,140,248,0.6);letter-spacing:2px">// SETTINGS</span>
<div style="font-size:16px;color:#fff;font-family:Inter,system-ui,sans-serif;font-weight:700;margin-top:4px">Configuration</div>
<span style="font-size:11px;color:rgba(255,255,255,0.3)">Manage your profile and MCP defaults</span>
</div>

<div style="display:grid;grid-template-columns:180px 1fr;gap:0">
<!-- Sidebar -->
<div style="border-right:1px solid rgba(255,255,255,0.06);padding:12px">
<div style="padding:8px 12px;border-left:2px solid white;border-radius:0 6px 6px 0;background:rgba(255,255,255,0.06);font-size:12px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif;font-weight:500;display:flex;align-items:center;gap:8px">
MCP Settings
</div>
<div style="padding:8px 12px;border-left:2px solid transparent;font-size:12px;color:rgba(255,255,255,0.35);font-family:Inter,sans-serif;display:flex;align-items:center;gap:8px;margin-top:2px">
DLP Protection
</div>
<div style="padding:8px 12px;border-left:2px solid transparent;font-size:12px;color:rgba(255,255,255,0.35);font-family:Inter,sans-serif;display:flex;align-items:center;gap:8px;margin-top:2px">
FinOps Guard
</div>
<div style="padding:8px 12px;border-left:2px solid transparent;font-size:12px;color:rgba(255,255,255,0.35);font-family:Inter,sans-serif;display:flex;align-items:center;gap:8px;margin-top:2px">
Profile
</div>
<div style="padding:8px 12px;border-left:2px solid transparent;font-size:12px;color:rgba(255,255,255,0.35);font-family:Inter,sans-serif;display:flex;align-items:center;gap:8px;margin-top:2px">
Billing
</div>
</div>
<!-- Content summary -->
<div style="padding:16px 20px;font-size:13px;color:rgba(255,255,255,0.35);font-family:Inter,sans-serif;line-height:1.8">
Each tab controls account-wide defaults that new servers inherit. Individual servers can override these settings from their detail page.<br><br>
<strong style="color:rgba(255,255,255,0.6)">Global → Per-Server Inheritance</strong><br>
Changes here set the default. Each server's own settings take priority when explicitly configured.
</div>
</div>
</div>

### Inheritance model

Settings follow a **global → per-server** inheritance pattern:

1. **Global defaults** are configured in the Settings panel
2. **New servers** inherit these defaults at creation time
3. **Per-server overrides** can be set from each server's detail page
4. **Existing servers** keep their current settings when global defaults change

This means you can set your preferred DLP patterns, FinOps limits, and MCP configuration once — and every new server starts with those defaults automatically.

---

## Frequently Asked Questions

### What settings can I configure globally?
Five areas: MCP Defaults (tool grouping, TOON compression, Response Presenters), Data Shielding (PII redaction patterns), FinOps Guard (response limits, OOM Shield), Profile (name, account deletion), and Billing (plan management, usage tracking). Each area has its own tab in the Settings panel.

### Do global settings apply retroactively to existing servers?
No. Global settings apply to new servers at creation time. Existing servers keep their current configuration. You can manually update individual servers from their detail page if needed.

### Can I override global settings per server?
Yes. Every global setting can be overridden at the server level. Open any server's detail page, click Edit, and configure DLP patterns, FinOps limits, or tool exposition mode independently. Per-server settings always take priority over global defaults.

### What is the inheritance model?
Vinkius Cloud uses a global-to-per-server inheritance chain: (1) configure defaults globally, (2) new servers inherit those defaults, (3) per-server overrides take priority when explicitly set, (4) changing global defaults does not overwrite existing per-server settings.

### Is there a way to reset a server's settings to global defaults?
Yes. From the server's Edit modal, remove the per-server override and the server reverts to the current global default. This applies to DLP patterns, FinOps limits, and tool grouping configuration independently.

### How do I access the Settings panel?
Click the gear icon in the sidebar or navigate to Settings from the main navigation. The panel opens with a five-tab sidebar: MCP Settings, DLP Protection, FinOps Guard, Profile, and Billing.
