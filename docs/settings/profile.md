---
title: Profile & Account — Manage Your Vinkius Cloud Identity & Danger Zone | Vinkius Cloud
description: Update your display name, view OAuth-managed email and avatar, and access the danger zone for permanent account deletion. Manage your Vinkius Cloud identity from one page.
head:
  - - meta
    - name: keywords
      content: MCP account settings, Vinkius Cloud profile, account management, delete MCP account, OAuth profile
  - - meta
    - property: og:title
      content: Profile & Account — Manage Your Identity | Vinkius Cloud
  - - meta
    - property: og:description
      content: Update your display name, view OAuth-managed email and avatar, and access the danger zone for permanent account deletion.
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can I change my email address?","acceptedAnswer":{"@type":"Answer","text":"No. Your email is managed by your OAuth provider (Google or GitHub) and is read-only. Update it with your OAuth provider and sign in again."}},{"@type":"Question","name":"What happens when I delete my account?","acceptedAnswer":{"@type":"Answer","text":"Account deletion permanently removes all servers, tools, deployments, tokens, configuration, subscription data, and audit logs. Active subscriptions are canceled immediately."}},{"@type":"Question","name":"Can I recover a deleted account?","acceptedAnswer":{"@type":"Answer","text":"No. Account deletion is permanent and irreversible. There is no recovery process, grace period, or backup retrieval available."}},{"@type":"Question","name":"How is my avatar determined?","acceptedAnswer":{"@type":"Answer","text":"Your avatar is pulled automatically from your OAuth provider (Google or GitHub). It cannot be manually changed within Vinkius Cloud."}},{"@type":"Question","name":"What is my display name used for?","acceptedAnswer":{"@type":"Answer","text":"Your name appears across the platform and in team rosters. It is the only editable field on the Profile page."}},{"@type":"Question","name":"Is two-factor authentication available?","acceptedAnswer":{"@type":"Answer","text":"Authentication is delegated to your OAuth provider. If your provider supports 2FA, that protection applies to your Vinkius Cloud account."}}]}'
---

# Profile & Account

Manage your personal information and account settings.

Access via **Settings → Profile** in Vinkius Cloud.

---

## Profile information

<!-- Profile card recreation -->
<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#09090f;padding:20px 24px">
<span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PROFILE INFORMATION</span>

<!-- Avatar row -->
<div style="display:flex;align-items:center;gap:14px;margin-top:16px">
<div style="width:56px;height:56px;border-radius:50%;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;font-size:18px;color:rgba(255,255,255,0.3);font-weight:700;font-family:Inter,sans-serif">J</div>
<div>
<div style="font-size:14px;color:rgba(255,255,255,0.85);font-weight:500;font-family:Inter,sans-serif">Jane Doe</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);font-family:Inter,sans-serif">jane@example.com</div>
</div>
</div>

<!-- Name field -->
<div style="margin-top:20px">
<div style="font-size:12px;color:rgba(255,255,255,0.5);font-weight:500;font-family:Inter,sans-serif;margin-bottom:6px">Name</div>
<div style="padding:8px 12px;border:1px solid rgba(255,255,255,0.08);border-radius:6px;background:rgba(255,255,255,0.02);font-size:13px;color:rgba(255,255,255,0.7);font-family:Inter,sans-serif">Jane Doe</div>
</div>

<!-- Email field (disabled) -->
<div style="margin-top:14px">
<div style="font-size:12px;color:rgba(255,255,255,0.5);font-weight:500;font-family:Inter,sans-serif;margin-bottom:6px">Email</div>
<div style="padding:8px 12px;border:1px solid rgba(255,255,255,0.06);border-radius:6px;background:rgba(255,255,255,0.01);font-size:13px;color:rgba(255,255,255,0.4);font-family:Inter,sans-serif;opacity:0.6">jane@example.com</div>
<div style="font-size:10px;color:rgba(255,255,255,0.2);margin-top:4px;font-family:Inter,sans-serif">Managed by your OAuth provider</div>
</div>
</div>

### Editable fields

| Field | Editable | Notes |
|---|---|---|
| **Name** | ✓ | Used across the platform and in team rosters |
| **Email** | ✗ | Managed by your OAuth provider (Google or GitHub). Read-only. |
| **Avatar** | ✗ | Pulled automatically from your OAuth provider |

---

## Danger zone

At the bottom of the Profile tab, a destructive zone provides account deletion.

<!-- Danger zone recreation -->
<div style="margin:24px 0;border:1px solid rgba(239,68,68,0.15);border-radius:8px;overflow:hidden;background:rgba(239,68,68,0.02);padding:20px 24px">
<span style="font-size:9px;color:rgba(239,68,68,0.5);letter-spacing:2px;font-weight:700">DANGER ZONE</span>

<div style="display:flex;align-items:center;justify-content:space-between;margin-top:12px">
<div>
<div style="font-size:14px;color:rgba(255,255,255,0.85);font-weight:500;font-family:Inter,sans-serif">Delete Account</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);font-family:Inter,sans-serif">Permanently delete your account and all associated data.</div>
</div>
<div style="padding:6px 16px;border:1px solid rgba(239,68,68,0.3);background:rgba(239,68,68,0.1);border-radius:6px;font-size:12px;color:rgba(239,68,68,0.7);font-weight:500;font-family:Inter,sans-serif">Delete Account</div>
</div>
</div>

**What gets deleted:**

- All servers, tools, and deployments
- All connection tokens
- All DLP and FinOps configuration
- Subscription and billing data
- Audit log history

This action is **irreversible**. You must type `DELETE` to confirm. Active subscriptions are canceled immediately.

---

## Next steps

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:32px 0">

<a href="/settings/billing" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(34,211,238,0.12);border-radius:8px;background:rgba(34,211,238,0.02)">
<span style="font-size:11px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:600">BILLING</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Plans & Billing</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Manage your subscription and usage.</div>
<span style="font-size:13px;color:rgba(34,211,238,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">View plans →</span>
</a>

<a href="/settings/" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<span style="font-size:11px;color:rgba(255,255,255,0.3);letter-spacing:2px;font-weight:600">OVERVIEW</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Settings Overview</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Back to all settings tabs.</div>
<span style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:12px;display:block;font-family:Inter,sans-serif">Overview →</span>
</a>

</div>

---

## Frequently Asked Questions

### Can I change my email address?
No. Your email is managed by your OAuth provider (Google or GitHub) and is read-only in Vinkius Cloud. To change your email, update it with your OAuth provider and sign in again.

### What happens when I delete my account?
Account deletion permanently removes all servers, tools, deployments, connection tokens, DLP and FinOps configuration, subscription and billing data, and audit log history. Active subscriptions are canceled immediately. This action is irreversible — you must type DELETE to confirm.

### Can I recover a deleted account?
No. Account deletion is permanent and irreversible. All data is removed from the platform. There is no recovery process, grace period, or backup retrieval available after confirmation.

### How is my avatar determined?
Your avatar is pulled automatically from your OAuth provider (Google or GitHub profile picture). It cannot be manually changed within Vinkius Cloud.

### What is my display name used for?
Your name appears across the Vinkius Cloud platform and in any team rosters. It is the only editable field on the Profile page and can be updated at any time.

### Is two-factor authentication available?
Authentication is delegated to your OAuth provider (Google or GitHub). If your provider supports 2FA, that protection applies to your Vinkius Cloud account. There is no separate 2FA configuration within the platform.
