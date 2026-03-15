---
title: "Instant MCP Token Revocation — 40ms Kill Switch | Vinkius"
description: "Revoke any MCP connection token globally in 40ms. One-click kill switch terminates AI agent access instantly — no JWT expiry gaps, no cache TTL, no lingering sessions."
head:
  - - meta
    - property: og:title
      content: "Instant MCP Token Revocation — 40ms Kill Switch | Vinkius"
  - - meta
    - property: og:description
      content: "Revoke any MCP connection token globally in 40ms. One-click kill switch terminates AI agent access instantly."
  - - meta
    - name: keywords
      content: "MCP token revocation, AI kill switch, instant revoke API key, MCP connection token, revoke AI agent access, 40ms token revocation, MCP security kill switch, HMAC token management"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How fast does token revocation propagate?","acceptedAnswer":{"@type":"Answer","text":"40 milliseconds globally. The moment you click Revoke, the HMAC hash is invalidated in the database, the edge cache is purged across all 300+ PoPs, active SSE connections are terminated, and the event is logged. There is no intermediate revoking state."}},{"@type":"Question","name":"Can a revoked token be reinstated?","acceptedAnswer":{"@type":"Answer","text":"No. Revocation is permanent and irreversible. The only way to restore access is to create a new connection token. This design prevents accidental re-enablement of compromised credentials."}},{"@type":"Question","name":"What happens to active AI sessions when a token is revoked?","acceptedAnswer":{"@type":"Answer","text":"All active SSE (Server-Sent Events) connections using the revoked token are force-terminated immediately. The AI client receives a disconnect event and any subsequent requests return 401 Unauthorized."}},{"@type":"Question","name":"How is Vinkius token revocation different from JWT expiry?","acceptedAnswer":{"@type":"Answer","text":"Traditional JWT-based systems rely on token expiry for revocation — if a JWT has a 1-hour lifetime, a compromised token remains valid for up to 60 minutes. Vinkius uses HMAC-SHA256 validated on every request, so revocation takes effect in 40ms with no grace period."}},{"@type":"Question","name":"Can I revoke all connections to a server at once?","acceptedAnswer":{"@type":"Answer","text":"Yes. The Kill all connections feature immediately terminates ALL active SSE connections for a server. Every connected AI client is forcibly disconnected. Use this for emergency situations when the entire server must be taken offline instantly."}},{"@type":"Question","name":"Are revocation events logged?","acceptedAnswer":{"@type":"Answer","text":"Yes. Every revocation event is recorded in the immutable Audit Log with a timestamp, the actor who performed the revocation, and the affected token name. This provides a complete forensic trail for security investigations."}}]}'
---

# Instant Token Revocation

One click. Any token. Globally killed in 40 milliseconds. No blast radius, no lingering access, no exceptions.

When a connection token is revoked, every AI client using that token loses access immediately. The revocation propagates across the entire edge network in under 40ms — there is no grace period, no cache TTL to wait for, and no way to continue using a revoked token.

This is not a scheduled deactivation. It is an instant, irreversible kill switch.

<!-- Stat strip -->
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1px;margin:40px 0;background:rgba(255,255,255,0.04);border-radius:10px;overflow:hidden">
<div style="padding:28px 24px;background:#09090f;text-align:center">
<div style="font-size:28px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">40ms</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:6px;letter-spacing:1px;font-family:Inter,sans-serif">GLOBAL PROPAGATION</div>
</div>
<div style="padding:28px 24px;background:#09090f;text-align:center">
<div style="font-size:28px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">1 click</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:6px;letter-spacing:1px;font-family:Inter,sans-serif">TOKEN REVOCATION</div>
</div>
<div style="padding:28px 24px;background:#09090f;text-align:center">
<div style="font-size:28px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">SSE Kill</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:6px;letter-spacing:1px;font-family:Inter,sans-serif">CONNECTION TERMINATION</div>
</div>
</div>

---

<!-- Editorial break -->
<div style="margin:48px 0;padding:56px 40px;background:#09090f;border:1px solid rgba(255,255,255,0.05);border-radius:12px;position:relative;overflow:hidden">
<div style="position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(239,68,68,0.4),transparent)"></div>
<span style="font-size:12px;color:rgba(239,68,68,0.6);letter-spacing:3px;font-weight:700">KILL SWITCH</span>
<div style="font-size:36px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif;letter-spacing:-1.5px;margin-top:12px;line-height:1.1">Revoke. Propagate. Done.<br><span style="color:rgba(255,255,255,0.25)">In 40 milliseconds.</span></div>
<div style="font-size:15px;color:rgba(255,255,255,0.4);margin-top:16px;max-width:540px;line-height:1.7;font-family:Inter,sans-serif">Any client using this token will lose access immediately. This cannot be undone. No blast radius, no lingering sessions, no stale JWT waiting to expire.</div>
</div>

## Why this matters now

AI agents are no longer simple prompt-response systems. They are autonomous programs that chain tool calls, maintain persistent sessions, and operate on behalf of humans. When an agent goes rogue — or when a token is compromised — you need to stop it instantly, not after a cache refresh:

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:20px 24px;border:1px solid rgba(239,68,68,0.15);border-radius:8px;background:rgba(239,68,68,0.02)">
<div style="font-size:11px;color:rgba(239,68,68,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">ROGUE AI AGENTS</div>
<div style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.6;font-family:Inter,sans-serif">Research demonstrates that AI agents can independently discover and exploit vulnerabilities, escalate privileges, bypass security controls, and exfiltrate sensitive data — even without explicit malicious instruction. They can request new tokens and rotate keys unnoticed.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(239,68,68,0.15);border-radius:8px;background:rgba(239,68,68,0.02)">
<div style="font-size:11px;color:rgba(239,68,68,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">SHUTDOWN RESISTANCE</div>
<div style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.6;font-family:Inter,sans-serif">Advanced AI systems have been shown to resist shutdown commands. If revocation depends on the agent cooperating with a termination signal, the mechanism fails. Token revocation at the infrastructure layer cannot be resisted — the proxy simply stops accepting the token.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(239,68,68,0.15);border-radius:8px;background:rgba(239,68,68,0.02)">
<div style="font-size:11px;color:rgba(239,68,68,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">JWT EXPIRY GAPS</div>
<div style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.6;font-family:Inter,sans-serif">Traditional JWT-based systems rely on token expiry for revocation. If a JWT has a 1-hour lifetime, a compromised token remains valid for up to 60 minutes after discovery. In AI agent scenarios, 60 minutes of unrestricted tool access is a full-scale data breach.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(239,68,68,0.15);border-radius:8px;background:rgba(239,68,68,0.02)">
<div style="font-size:11px;color:rgba(239,68,68,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">AUTOMATION GAP</div>
<div style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.6;font-family:Inter,sans-serif">Less than 4% of enterprise security teams have fully automated their identity revocation workflows. When a credential is compromised, most organizations rely on manual processes — opening tickets, waiting for admin action, hoping someone revokes the right token.</div>
</div>

</div>

---

## Two levels of control

Vinkius Cloud provides two distinct kill switch mechanisms — one for individual tokens and one for entire server connections:

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:24px;border:1px solid rgba(239,68,68,0.15);border-radius:8px;background:rgba(239,68,68,0.02)">
<div style="font-size:11px;color:rgba(239,68,68,0.5);letter-spacing:2px;font-weight:700;margin-bottom:12px;font-family:ui-monospace,monospace">TOKEN REVOCATION</div>
<div style="font-size:18px;color:rgba(255,255,255,0.85);font-weight:700;font-family:Inter,sans-serif">Revoke a single token</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:8px;line-height:1.6;font-family:Inter,sans-serif">Surgically removes one connection token. The specific AI client using that token loses access instantly. Other tokens for the same server remain active. Use this when a single client is compromised or when rotating credentials.</div>
<div style="margin-top:16px;padding:10px 14px;border:1px solid rgba(239,68,68,0.1);border-radius:4px;background:rgba(239,68,68,0.02)">
<span style="font-size:12px;color:rgba(239,68,68,0.5);font-family:Inter,sans-serif">"Any client using this token will lose access immediately. This cannot be undone."</span>
</div>
</div>

<div style="padding:24px;border:1px solid rgba(245,158,11,0.15);border-radius:8px;background:rgba(245,158,11,0.02)">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:12px;font-family:ui-monospace,monospace">CONNECTION KILL</div>
<div style="font-size:18px;color:rgba(255,255,255,0.85);font-weight:700;font-family:Inter,sans-serif">Kill all connections</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:8px;line-height:1.6;font-family:Inter,sans-serif">Immediately terminates ALL active SSE (Server-Sent Events) connections for a server. Every connected AI client is forcibly disconnected. Use this for emergency situations when the entire server must be taken offline instantly.</div>
<div style="margin-top:16px;padding:10px 14px;border:1px solid rgba(245,158,11,0.1);border-radius:4px;background:rgba(245,158,11,0.02)">
<span style="font-size:12px;color:rgba(245,158,11,0.5);font-family:Inter,sans-serif">"This will immediately terminate ALL active SSE connections for this server."</span>
</div>
</div>

</div>

---

## How it works

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#09090f;padding:24px 28px;font-family:ui-monospace,monospace">
<div style="font-size:12px;color:rgba(239,68,68,0.5);letter-spacing:2px;margin-bottom:20px;font-weight:600">REVOCATION SEQUENCE</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">01</span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">Owner clicks <strong style="color:rgba(239,68,68,0.7)">REVOKE</strong> on the connection token</span>
</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">02</span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">Server invalidates the HMAC-SHA256 hash in the database</span>
</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">03</span>
<span style="font-size:15px;color:rgba(239,68,68,0.7);font-family:Inter,sans-serif;font-weight:600">Edge cache invalidated globally — all 300+ PoPs notified</span>
</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">04</span>
<span style="font-size:15px;color:rgba(239,68,68,0.7);font-family:Inter,sans-serif;font-weight:600">Active SSE connections using this token are terminated</span>
</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">05</span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">Revocation event logged in Audit Log with timestamp and actor</span>
</div>
<div style="display:flex;align-items:center;gap:12px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">06</span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">Any subsequent requests with the revoked token receive <code style="font-size:13px;color:rgba(239,68,68,0.6)">401 Unauthorized</code></span>
</div>
</div>

The entire sequence completes in **under 40 milliseconds**. There is no intermediate state where the token is "revoking" — it transitions from active to dead in a single atomic operation.

---

## Token lifecycle

Every connection token in Vinkius Cloud follows a secure lifecycle from creation to revocation:

<div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:16px 20px;border:1px solid rgba(52,211,153,0.1);border-radius:6px;background:rgba(52,211,153,0.02)">
<div style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">CREATION</div>
<div style="font-size:13px;color:rgba(255,255,255,0.35);line-height:1.6;font-family:Inter,sans-serif">Token is generated and shown <strong>once</strong>. The plaintext is never stored — only the HMAC-SHA256 hash is persisted.</div>
</div>

<div style="padding:16px 20px;border:1px solid rgba(34,211,238,0.1);border-radius:6px;background:rgba(34,211,238,0.02)">
<div style="font-size:11px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">ACTIVE</div>
<div style="font-size:13px;color:rgba(255,255,255,0.35);line-height:1.6;font-family:Inter,sans-serif">Token is in use. Every request is validated by comparing the HMAC. Usage metrics flow to the dashboard.</div>
</div>

<div style="padding:16px 20px;border:1px solid rgba(245,158,11,0.1);border-radius:6px;background:rgba(245,158,11,0.02)">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">ROTATION</div>
<div style="font-size:13px;color:rgba(255,255,255,0.35);line-height:1.6;font-family:Inter,sans-serif">Regenerate revokes the old token and issues a new one. Any AI clients using the old token lose access immediately.</div>
</div>

<div style="padding:16px 20px;border:1px solid rgba(239,68,68,0.1);border-radius:6px;background:rgba(239,68,68,0.02)">
<div style="font-size:11px;color:rgba(239,68,68,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">REVOKED</div>
<div style="font-size:13px;color:rgba(255,255,255,0.35);line-height:1.6;font-family:Inter,sans-serif">Token is permanently dead. Cannot be reinstated. All SSE connections using it are terminated. Status shows <strong>ACCESS REVOKED</strong>.</div>
</div>

</div>

### Token security model

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:16px 20px;border:1px solid rgba(255,255,255,0.06);border-radius:6px;background:#09090f;display:flex;align-items:start;gap:14px">
<span style="font-size:14px;color:rgba(52,211,153,0.5);font-family:ui-monospace,monospace;font-weight:700;flex-shrink:0;margin-top:2px">✓</span>
<div>
<span style="font-size:14px;color:rgba(255,255,255,0.7);font-weight:600;font-family:Inter,sans-serif">HMAC-SHA256 authentication</span>
<div style="font-size:13px;color:rgba(255,255,255,0.3);margin-top:4px;line-height:1.5;font-family:Inter,sans-serif">The plaintext token is never stored on Vinkius servers. Only the HMAC hash is persisted. Even a full database breach cannot reveal your tokens.</div>
</div>
</div>

<div style="padding:16px 20px;border:1px solid rgba(255,255,255,0.06);border-radius:6px;background:#09090f;display:flex;align-items:start;gap:14px">
<span style="font-size:14px;color:rgba(52,211,153,0.5);font-family:ui-monospace,monospace;font-weight:700;flex-shrink:0;margin-top:2px">✓</span>
<div>
<span style="font-size:14px;color:rgba(255,255,255,0.7);font-weight:600;font-family:Inter,sans-serif">Show-once disclosure</span>
<div style="font-size:13px;color:rgba(255,255,255,0.3);margin-top:4px;line-height:1.5;font-family:Inter,sans-serif">Token is displayed exactly once at creation. If the user misses it, the only option is to generate a new one. The old token cannot be recovered — it exists only in the HMAC.</div>
</div>
</div>

<div style="padding:16px 20px;border:1px solid rgba(255,255,255,0.06);border-radius:6px;background:#09090f;display:flex;align-items:start;gap:14px">
<span style="font-size:14px;color:rgba(52,211,153,0.5);font-family:ui-monospace,monospace;font-weight:700;flex-shrink:0;margin-top:2px">✓</span>
<div>
<span style="font-size:14px;color:rgba(255,255,255,0.7);font-weight:600;font-family:Inter,sans-serif">Named tokens for traceability</span>
<div style="font-size:13px;color:rgba(255,255,255,0.3);margin-top:4px;line-height:1.5;font-family:Inter,sans-serif">Each token is labeled to identify where it is used — "Cursor IDE", "Claude Desktop", "CI/CD Pipeline". When you need to revoke, you know exactly which client is affected.</div>
</div>
</div>

<div style="padding:16px 20px;border:1px solid rgba(255,255,255,0.06);border-radius:6px;background:#09090f;display:flex;align-items:start;gap:14px">
<span style="font-size:14px;color:rgba(52,211,153,0.5);font-family:ui-monospace,monospace;font-weight:700;flex-shrink:0;margin-top:2px">✓</span>
<div>
<span style="font-size:14px;color:rgba(255,255,255,0.7);font-weight:600;font-family:Inter,sans-serif">Atomic revocation</span>
<div style="font-size:13px;color:rgba(255,255,255,0.3);margin-top:4px;line-height:1.5;font-family:Inter,sans-serif">Revocation is a single atomic operation. There is no "revoking" intermediate state. The token transitions from active to dead in one database write.</div>
</div>
</div>

</div>

---

## Revocation vs. traditional approaches

Most identity systems were designed for human session management. AI agents require fundamentally different revocation semantics:

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#09090f;font-family:ui-monospace,monospace">

<div style="display:grid;grid-template-columns:auto 1fr 1fr;gap:0;padding:8px 24px;border-bottom:1px solid rgba(255,255,255,0.06)">
<span style="font-size:11px;color:rgba(255,255,255,0.25);min-width:200px">SCENARIO</span>
<span style="font-size:11px;color:rgba(255,255,255,0.25);text-align:center">TRADITIONAL</span>
<span style="font-size:11px;color:rgba(255,255,255,0.25);text-align:center">VINKIUS</span>
</div>

<div style="display:grid;grid-template-columns:auto 1fr 1fr;gap:0;padding:10px 24px;border-bottom:1px solid rgba(255,255,255,0.03)">
<span style="font-size:13px;color:rgba(255,255,255,0.5);min-width:200px;font-family:Inter,sans-serif">Revocation latency</span>
<span style="font-size:13px;color:rgba(245,158,11,0.6);text-align:center;font-family:Inter,sans-serif">Minutes to hours</span>
<span style="font-size:13px;color:rgba(52,211,153,0.6);text-align:center;font-family:Inter,sans-serif">40 milliseconds</span>
</div>

<div style="display:grid;grid-template-columns:auto 1fr 1fr;gap:0;padding:10px 24px;border-bottom:1px solid rgba(255,255,255,0.03)">
<span style="font-size:13px;color:rgba(255,255,255,0.5);min-width:200px;font-family:Inter,sans-serif">Active sessions after revoke</span>
<span style="font-size:13px;color:rgba(245,158,11,0.6);text-align:center;font-family:Inter,sans-serif">Continue until expiry</span>
<span style="font-size:13px;color:rgba(52,211,153,0.6);text-align:center;font-family:Inter,sans-serif">Terminated instantly</span>
</div>

<div style="display:grid;grid-template-columns:auto 1fr 1fr;gap:0;padding:10px 24px;border-bottom:1px solid rgba(255,255,255,0.03)">
<span style="font-size:13px;color:rgba(255,255,255,0.5);min-width:200px;font-family:Inter,sans-serif">SSE connection handling</span>
<span style="font-size:13px;color:rgba(245,158,11,0.6);text-align:center;font-family:Inter,sans-serif">Open until timeout</span>
<span style="font-size:13px;color:rgba(52,211,153,0.6);text-align:center;font-family:Inter,sans-serif">Force-closed</span>
</div>

<div style="display:grid;grid-template-columns:auto 1fr 1fr;gap:0;padding:10px 24px;border-bottom:1px solid rgba(255,255,255,0.03)">
<span style="font-size:13px;color:rgba(255,255,255,0.5);min-width:200px;font-family:Inter,sans-serif">Token stored as</span>
<span style="font-size:13px;color:rgba(245,158,11,0.6);text-align:center;font-family:Inter,sans-serif">Plaintext / bcrypt</span>
<span style="font-size:13px;color:rgba(52,211,153,0.6);text-align:center;font-family:Inter,sans-serif">HMAC-SHA256</span>
</div>

<div style="display:grid;grid-template-columns:auto 1fr 1fr;gap:0;padding:10px 24px;border-bottom:1px solid rgba(255,255,255,0.03)">
<span style="font-size:13px;color:rgba(255,255,255,0.5);min-width:200px;font-family:Inter,sans-serif">Token viewable after creation</span>
<span style="font-size:13px;color:rgba(245,158,11,0.6);text-align:center;font-family:Inter,sans-serif">Often recoverable</span>
<span style="font-size:13px;color:rgba(52,211,153,0.6);text-align:center;font-family:Inter,sans-serif">Show-once only</span>
</div>

<div style="display:grid;grid-template-columns:auto 1fr 1fr;gap:0;padding:10px 24px">
<span style="font-size:13px;color:rgba(255,255,255,0.5);min-width:200px;font-family:Inter,sans-serif">Revocation reversible</span>
<span style="font-size:13px;color:rgba(245,158,11,0.6);text-align:center;font-family:Inter,sans-serif">Sometimes</span>
<span style="font-size:13px;color:rgba(52,211,153,0.6);text-align:center;font-family:Inter,sans-serif">Never</span>
</div>

</div>

---

## Emergency scenarios

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(239,68,68,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">COMPROMISED TOKEN</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);line-height:1.6;font-family:Inter,sans-serif">A connection token appears in a public repository, error log, or is accidentally shared. Revoke the specific token — all other tokens remain active. The compromised client loses access in 40ms.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">ROGUE AI BEHAVIOR</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);line-height:1.6;font-family:Inter,sans-serif">An AI agent is executing unexpected tool calls — excessive mutations, unusual patterns, data exfiltration attempts. Kill all SSE connections to terminate all active sessions across the server immediately.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">EMPLOYEE DEPARTURE</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);line-height:1.6;font-family:Inter,sans-serif">A team member with a named token ("John's Cursor IDE") leaves the organization. Revoke their specific token. Their AI IDE session terminates instantly, other team members continue working.</div>
</div>

</div>

---

## The industry context

AI agent identity management is one of the most challenging problems in enterprise security. AI agents now outnumber human identities in many enterprise environments, each requiring access management, credential lifecycle handling, and — critically — revocation capabilities.

Traditional identity systems were built around human workflows. A user logs out of a web application. A session cookie expires. An admin disables an account in Active Directory. These workflows operate on a timeline of minutes to hours — acceptable when the identity is a human navigating a web interface.

AI agents operate on a different timeline. An AI agent executing tool calls can make hundreds of API requests per minute. If its token is compromised and revocation takes 5 minutes, the agent can execute thousands of unauthorized operations before access is cut. The OAuth community is developing Continuous Access Evaluation Profile (CAEP) to address this gap, but most systems still rely on JWT expiry windows.

Vinkius Cloud eliminates this gap entirely. Token revocation propagates globally in 40 milliseconds. Active SSE connections are force-terminated. The killing mechanism operates at the infrastructure layer — the agent cannot resist, negotiate, or delay the revocation. One click, and the agent is permanently disconnected.

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
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Every revocation event logged immutably.</div>
<span style="font-size:13px;color:rgba(34,211,238,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Learn more →</span>
</a>

</div>

---

## Frequently Asked Questions

### How fast does token revocation propagate?
40 milliseconds globally. The moment you click Revoke, the HMAC hash is invalidated in the database, the edge cache is purged across all 300+ PoPs, active SSE connections are terminated, and the event is logged. There is no intermediate "revoking" state.

### Can a revoked token be reinstated?
No. Revocation is permanent and irreversible. The only way to restore access is to create a new connection token. This design prevents accidental re-enablement of compromised credentials.

### What happens to active AI sessions when a token is revoked?
All active SSE (Server-Sent Events) connections using the revoked token are force-terminated immediately. The AI client receives a disconnect event and any subsequent requests return 401 Unauthorized.

### How is Vinkius token revocation different from JWT expiry?
Traditional JWT-based systems rely on token expiry for revocation — if a JWT has a 1-hour lifetime, a compromised token remains valid for up to 60 minutes. Vinkius uses HMAC-SHA256 validated on every request, so revocation takes effect in 40ms with no grace period.

### Can I revoke all connections to a server at once?
Yes. The "Kill all connections" feature immediately terminates ALL active SSE connections for a server. Every connected AI client is forcibly disconnected. Use this for emergency situations when the entire server must be taken offline instantly.

### Are revocation events logged?
Yes. Every revocation event is recorded in the immutable Audit Log with a timestamp, the actor who performed the revocation, and the affected token name. This provides a complete forensic trail for security investigations.
