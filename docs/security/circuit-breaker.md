---
title: "Financial Circuit Breaker — Automatic Budget Protection | Vinkius"
description: "Automatically halt all AI agent traffic when request rates exceed your budget ceiling. Configurable detection window, request thresholds, and cooldown periods — with human-in-the-loop approval to resume."
head:
  - - meta
    - property: og:title
      content: "Financial Circuit Breaker — Automatic Budget Protection | Vinkius"
  - - meta
    - property: og:description
      content: "Automatically halt all AI agent traffic when request rates exceed your budget ceiling. Human approval required to resume."
  - - meta
    - name: keywords
      content: "MCP circuit breaker, AI budget protection, runaway AI prevention, AI agent rate limit, MCP cost control, AI spend ceiling, circuit breaker MCP server, financial guardrails AI"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the Financial Circuit Breaker?","acceptedAnswer":{"@type":"Answer","text":"The Financial Circuit Breaker automatically halts all AI agent traffic when request rates exceed your defined budget ceiling within a configurable time window. It requires explicit human approval to resume — preventing runaway AI agents from generating unexpected costs."}},{"@type":"Question","name":"How does the circuit breaker detect runaway behavior?","acceptedAnswer":{"@type":"Answer","text":"A sliding time window tracks the number of MCP requests across all your servers. When the count exceeds your configured max_requests threshold within the window, the breaker trips instantly. All subsequent requests receive a 429 response until a human approves resumption."}},{"@type":"Question","name":"Can the circuit breaker reset automatically?","acceptedAnswer":{"@type":"Answer","text":"Yes. After the configured cooldown period expires, the circuit breaker resets automatically and traffic resumes. You can also manually approve resumption at any time from the dashboard."}},{"@type":"Question","name":"Does the circuit breaker apply per-server or globally?","acceptedAnswer":{"@type":"Answer","text":"The circuit breaker applies globally across all servers on your account. This ensures that runaway behavior on any single server cannot exhaust your overall budget."}},{"@type":"Question","name":"What happens to active AI sessions when the breaker trips?","acceptedAnswer":{"@type":"Answer","text":"Active SSE connections remain open but all tool call requests return a 429 Too Many Requests response with a Retry-After header. The AI client receives an error message explaining that the budget ceiling has been reached."}},{"@type":"Question","name":"Can I configure different thresholds for different servers?","acceptedAnswer":{"@type":"Answer","text":"Currently, the circuit breaker operates at the account level with a single set of thresholds. This prevents runaway behavior on any server from bypassing budget controls by spreading requests across multiple servers."}}]}'
---

# Financial Circuit Breaker

Automatically halts all AI agent traffic when request rates exceed your budget ceiling. Requires human approval to resume. No exceptions.

When AI agents operate autonomously, a single misconfigured prompt or recursive tool chain can generate thousands of API requests in minutes. The Financial Circuit Breaker monitors request velocity across your entire account and trips the moment your defined threshold is exceeded — immediately blocking all further tool calls until a human explicitly approves resumption.

This is not a soft rate limit. It is a hard stop with a human-in-the-loop gate.

<!-- Stat strip -->
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1px;margin:40px 0;background:rgba(255,255,255,0.04);border-radius:10px;overflow:hidden">
<div style="padding:28px 24px;background:#09090f;text-align:center">
<div style="font-size:28px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">Instant</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:6px;letter-spacing:1px;font-family:Inter,sans-serif">TRIP ON THRESHOLD</div>
</div>
<div style="padding:28px 24px;background:#09090f;text-align:center">
<div style="font-size:28px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">Human</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:6px;letter-spacing:1px;font-family:Inter,sans-serif">APPROVAL TO RESUME</div>
</div>
<div style="padding:28px 24px;background:#09090f;text-align:center">
<div style="font-size:28px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">Global</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:6px;letter-spacing:1px;font-family:Inter,sans-serif">ACCOUNT-WIDE PROTECTION</div>
</div>
</div>

---

<!-- Editorial break -->
<div style="margin:48px 0;padding:56px 40px;background:#09090f;border:1px solid rgba(255,255,255,0.05);border-radius:12px;position:relative;overflow:hidden">
<div style="position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(245,158,11,0.4),transparent)"></div>
<span style="font-size:12px;color:rgba(245,158,11,0.6);letter-spacing:3px;font-weight:700">CIRCUIT BREAKER</span>
<div style="font-size:36px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif;letter-spacing:-1.5px;margin-top:12px;line-height:1.1">Budget exceeded. Traffic halted.<br><span style="color:rgba(255,255,255,0.25)">Awaiting your approval.</span></div>
<div style="font-size:15px;color:rgba(255,255,255,0.4);margin-top:16px;max-width:540px;line-height:1.7;font-family:Inter,sans-serif">AI agents don't have budgets. You do. The circuit breaker enforces your financial boundaries at the infrastructure layer — the agent cannot negotiate, bypass, or ignore it.</div>
</div>

## Why this matters now

AI agents are becoming more autonomous. They chain tool calls, retry on failure, and explore APIs without human supervision. A single recursive loop can turn a $5/month API bill into a $500 surprise overnight. Traditional rate limiting doesn't solve this — it slows requests down but never stops them entirely:

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:20px 24px;border:1px solid rgba(245,158,11,0.15);border-radius:8px;background:rgba(245,158,11,0.02)">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">RECURSIVE TOOL CHAINS</div>
<div style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.6;font-family:Inter,sans-serif">An AI agent calling a list endpoint, then calling a detail endpoint for each item, then calling related endpoints for each detail — can generate thousands of sequential requests from a single user prompt. Each request consumes tokens and API quota.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(245,158,11,0.15);border-radius:8px;background:rgba(245,158,11,0.02)">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">RETRY AMPLIFICATION</div>
<div style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.6;font-family:Inter,sans-serif">When a tool call fails, many AI clients automatically retry — sometimes with increasingly aggressive strategies. A temporary 500 error can trigger dozens of retries per second, each consuming your request quota. Without a hard stop, retries alone can exhaust your budget.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(245,158,11,0.15);border-radius:8px;background:rgba(245,158,11,0.02)">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">MULTI-AGENT STACKING</div>
<div style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.6;font-family:Inter,sans-serif">Multiple AI clients connected to the same account can independently generate high request volumes. Without account-level protection, the combined throughput of several agents can exceed any single-server rate limit.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(245,158,11,0.15);border-radius:8px;background:rgba(245,158,11,0.02)">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">OVERNIGHT SPENDING</div>
<div style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.6;font-family:Inter,sans-serif">Autonomous agents don't stop at 6 PM. A scheduled agent running overnight with a misconfigured loop can exhaust your monthly quota before you wake up — turning controllable costs into unrecoverable overages.</div>
</div>

</div>

---

## How it works

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#09090f;padding:24px 28px;font-family:ui-monospace,monospace">
<div style="font-size:12px;color:rgba(245,158,11,0.5);letter-spacing:2px;margin-bottom:20px;font-weight:600">TRIP SEQUENCE</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">01</span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">AI agents make MCP requests across your servers</span>
</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">02</span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">Each request is counted in a sliding time window (configurable, 1–60 minutes)</span>
</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">03</span>
<span style="font-size:15px;color:rgba(245,158,11,0.7);font-family:Inter,sans-serif;font-weight:600">Request count exceeds your configured threshold — breaker trips</span>
</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">04</span>
<span style="font-size:15px;color:rgba(245,158,11,0.7);font-family:Inter,sans-serif;font-weight:600">All subsequent tool calls return <code style="font-size:13px;color:rgba(245,158,11,0.6)">429 Too Many Requests</code></span>
</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">05</span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">Dashboard shows <strong style="color:rgba(245,158,11,0.7)">Circuit Breaker Tripped</strong> alert with resumption controls</span>
</div>
<div style="display:flex;align-items:center;gap:12px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">06</span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">Human clicks <strong>Approve Resumption</strong> — or waits for auto-reset after cooldown</span>
</div>
</div>

The breaker operates at the infrastructure layer. It cannot be bypassed, negotiated, or ignored by the AI agent — the proxy simply stops forwarding requests.

---

## Configuration

The circuit breaker is controlled from **Settings → Circuit Breaker** in the Vinkius Cloud dashboard. All parameters apply globally across your account.

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:24px;border:1px solid rgba(245,158,11,0.15);border-radius:8px;background:rgba(245,158,11,0.02)">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:12px;font-family:ui-monospace,monospace">MAX REQUESTS</div>
<div style="font-size:18px;color:rgba(255,255,255,0.85);font-weight:700;font-family:Inter,sans-serif">Request Threshold</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:8px;line-height:1.6;font-family:Inter,sans-serif">Maximum number of MCP requests allowed within the detection window before the breaker trips. Configurable from 100 to 50,000 requests. Default: <strong>5,000</strong>.</div>
<div style="margin-top:16px;padding:10px 14px;border:1px solid rgba(245,158,11,0.1);border-radius:4px;background:rgba(245,158,11,0.02)">
<span style="font-size:12px;color:rgba(245,158,11,0.5);font-family:Inter,sans-serif">Slider control with real-time value display</span>
</div>
</div>

<div style="padding:24px;border:1px solid rgba(245,158,11,0.15);border-radius:8px;background:rgba(245,158,11,0.02)">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:12px;font-family:ui-monospace,monospace">DETECTION WINDOW</div>
<div style="font-size:18px;color:rgba(255,255,255,0.85);font-weight:700;font-family:Inter,sans-serif">Time Window</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:8px;line-height:1.6;font-family:Inter,sans-serif">Sliding time window in minutes used to count requests. Shorter windows detect spikes faster but may trigger on normal bursts. Configurable from 1 to 60 minutes. Default: <strong>5 minutes</strong>.</div>
<div style="margin-top:16px;padding:10px 14px;border:1px solid rgba(245,158,11,0.1);border-radius:4px;background:rgba(245,158,11,0.02)">
<span style="font-size:12px;color:rgba(245,158,11,0.5);font-family:Inter,sans-serif">Shorter = faster detection, higher sensitivity</span>
</div>
</div>

</div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:0 0 24px 0">

<div style="padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(255,255,255,0.25);letter-spacing:2px;font-weight:700;margin-bottom:12px;font-family:ui-monospace,monospace">COOLDOWN PERIOD</div>
<div style="font-size:18px;color:rgba(255,255,255,0.85);font-weight:700;font-family:Inter,sans-serif">Auto-Reset Timer</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:8px;line-height:1.6;font-family:Inter,sans-serif">Duration in minutes the circuit stays open before automatically resetting. If you don't manually approve resumption within this period, traffic resumes automatically. Configurable from 1 to 1,440 minutes (24 hours). Default: <strong>15 minutes</strong>.</div>
</div>

<div style="padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(255,255,255,0.25);letter-spacing:2px;font-weight:700;margin-bottom:12px;font-family:ui-monospace,monospace">MASTER TOGGLE</div>
<div style="font-size:18px;color:rgba(255,255,255,0.85);font-weight:700;font-family:Inter,sans-serif">Enable / Disable</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:8px;line-height:1.6;font-family:Inter,sans-serif">The circuit breaker can be toggled on or off globally. When disabled, no request counting or threshold enforcement occurs. Enabled by default on all accounts.</div>
</div>

</div>

---

## Circuit breaker vs. traditional rate limiting

The circuit breaker is fundamentally different from per-endpoint rate limiting. Rate limiting throttles individual endpoints — the circuit breaker protects your entire budget:

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#09090f;font-family:ui-monospace,monospace">

<div style="display:grid;grid-template-columns:auto 1fr 1fr;gap:0;padding:8px 24px;border-bottom:1px solid rgba(255,255,255,0.06)">
<span style="font-size:11px;color:rgba(255,255,255,0.25);min-width:200px">BEHAVIOR</span>
<span style="font-size:11px;color:rgba(255,255,255,0.25);text-align:center">RATE LIMITING</span>
<span style="font-size:11px;color:rgba(255,255,255,0.25);text-align:center">CIRCUIT BREAKER</span>
</div>

<div style="display:grid;grid-template-columns:auto 1fr 1fr;gap:0;padding:10px 24px;border-bottom:1px solid rgba(255,255,255,0.03)">
<span style="font-size:13px;color:rgba(255,255,255,0.5);min-width:200px;font-family:Inter,sans-serif">Scope</span>
<span style="font-size:13px;color:rgba(245,158,11,0.6);text-align:center;font-family:Inter,sans-serif">Per endpoint</span>
<span style="font-size:13px;color:rgba(52,211,153,0.6);text-align:center;font-family:Inter,sans-serif">Entire account</span>
</div>

<div style="display:grid;grid-template-columns:auto 1fr 1fr;gap:0;padding:10px 24px;border-bottom:1px solid rgba(255,255,255,0.03)">
<span style="font-size:13px;color:rgba(255,255,255,0.5);min-width:200px;font-family:Inter,sans-serif">When triggered</span>
<span style="font-size:13px;color:rgba(245,158,11,0.6);text-align:center;font-family:Inter,sans-serif">Slows requests down</span>
<span style="font-size:13px;color:rgba(52,211,153,0.6);text-align:center;font-family:Inter,sans-serif">Stops all requests</span>
</div>

<div style="display:grid;grid-template-columns:auto 1fr 1fr;gap:0;padding:10px 24px;border-bottom:1px solid rgba(255,255,255,0.03)">
<span style="font-size:13px;color:rgba(255,255,255,0.5);min-width:200px;font-family:Inter,sans-serif">Recovery</span>
<span style="font-size:13px;color:rgba(245,158,11,0.6);text-align:center;font-family:Inter,sans-serif">Automatic after delay</span>
<span style="font-size:13px;color:rgba(52,211,153,0.6);text-align:center;font-family:Inter,sans-serif">Human approval required</span>
</div>

<div style="display:grid;grid-template-columns:auto 1fr 1fr;gap:0;padding:10px 24px;border-bottom:1px solid rgba(255,255,255,0.03)">
<span style="font-size:13px;color:rgba(255,255,255,0.5);min-width:200px;font-family:Inter,sans-serif">Multi-server protection</span>
<span style="font-size:13px;color:rgba(245,158,11,0.6);text-align:center;font-family:Inter,sans-serif">Each server independent</span>
<span style="font-size:13px;color:rgba(52,211,153,0.6);text-align:center;font-family:Inter,sans-serif">All servers combined</span>
</div>

<div style="display:grid;grid-template-columns:auto 1fr 1fr;gap:0;padding:10px 24px;border-bottom:1px solid rgba(255,255,255,0.03)">
<span style="font-size:13px;color:rgba(255,255,255,0.5);min-width:200px;font-family:Inter,sans-serif">Budget awareness</span>
<span style="font-size:13px;color:rgba(245,158,11,0.6);text-align:center;font-family:Inter,sans-serif">No</span>
<span style="font-size:13px;color:rgba(52,211,153,0.6);text-align:center;font-family:Inter,sans-serif">Yes</span>
</div>

<div style="display:grid;grid-template-columns:auto 1fr 1fr;gap:0;padding:10px 24px">
<span style="font-size:13px;color:rgba(255,255,255,0.5);min-width:200px;font-family:Inter,sans-serif">Prevents runaway loops</span>
<span style="font-size:13px;color:rgba(245,158,11,0.6);text-align:center;font-family:Inter,sans-serif">Partially</span>
<span style="font-size:13px;color:rgba(52,211,153,0.6);text-align:center;font-family:Inter,sans-serif">Completely</span>
</div>

</div>

---

## When the breaker trips

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">AI CLIENTS</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);line-height:1.6;font-family:Inter,sans-serif">Every tool call returns <code style="font-size:12px;color:rgba(245,158,11,0.6)">429 Too Many Requests</code> with a <code style="font-size:12px;color:rgba(245,158,11,0.6)">Retry-After</code> header indicating when the cooldown expires. Active SSE connections remain open but will not process further tool calls.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">DASHBOARD</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);line-height:1.6;font-family:Inter,sans-serif">The Circuit Breaker settings panel shows a prominent alert with the tripped status. An <strong>Approve Resumption</strong> button allows you to manually reset the breaker and restore traffic immediately.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">AUTO-RESET</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);line-height:1.6;font-family:Inter,sans-serif">After the configured cooldown period expires (default: 15 minutes), the breaker resets automatically and traffic resumes. This ensures that a tripped breaker never blocks traffic permanently if the human operator is unavailable.</div>
</div>

</div>

---

## Recommended configurations

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:20px 24px;border:1px solid rgba(52,211,153,0.15);border-radius:8px;background:rgba(52,211,153,0.02)">
<div style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">DEVELOPMENT</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:700;font-family:Inter,sans-serif">Low threshold</div>
<div style="font-size:13px;color:rgba(255,255,255,0.35);margin-top:8px;line-height:1.6;font-family:Inter,sans-serif">500 requests / 5 min window / 5 min cooldown. Catches runaway behavior early while you're iterating on prompts and tool configurations.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(129,140,248,0.15);border-radius:8px;background:rgba(129,140,248,0.02)">
<div style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">PRODUCTION</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:700;font-family:Inter,sans-serif">Balanced</div>
<div style="font-size:13px;color:rgba(255,255,255,0.35);margin-top:8px;line-height:1.6;font-family:Inter,sans-serif">5,000 requests / 5 min window / 15 min cooldown. The default configuration — allows normal production throughput while catching sustained runaway behavior.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(245,158,11,0.15);border-radius:8px;background:rgba(245,158,11,0.02)">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">HIGH-THROUGHPUT</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:700;font-family:Inter,sans-serif">Relaxed</div>
<div style="font-size:13px;color:rgba(255,255,255,0.35);margin-top:8px;line-height:1.6;font-family:Inter,sans-serif">20,000 requests / 15 min window / 30 min cooldown. For accounts with multiple active agents and high legitimate throughput — still provides a ceiling to catch extreme anomalies.</div>
</div>

</div>

---

## Next steps

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:32px 0">

<a href="/security/" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<span style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:600">OVERVIEW</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Security Overview</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Back to the full security overview.</div>
<span style="font-size:13px;color:rgba(129,140,248,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Overview →</span>
</a>

<a href="/security/kill-switch" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<span style="font-size:11px;color:rgba(239,68,68,0.5);letter-spacing:2px;font-weight:600">KILL SWITCH</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Token Revocation</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Revoke individual tokens in 40ms when you need surgical precision.</div>
<span style="font-size:13px;color:rgba(239,68,68,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Learn more →</span>
</a>

</div>

---

## Frequently Asked Questions

### What is the Financial Circuit Breaker?
The Financial Circuit Breaker automatically halts all AI agent traffic when request rates exceed your defined budget ceiling within a configurable time window. It requires explicit human approval to resume — preventing runaway AI agents from generating unexpected costs.

### How does the circuit breaker detect runaway behavior?
A sliding time window tracks the number of MCP requests across all your servers. When the count exceeds your configured max_requests threshold within the window, the breaker trips instantly. All subsequent requests receive a 429 response until a human approves resumption.

### Can the circuit breaker reset automatically?
Yes. After the configured cooldown period expires, the circuit breaker resets automatically and traffic resumes. You can also manually approve resumption at any time from the dashboard.

### Does the circuit breaker apply per-server or globally?
The circuit breaker applies globally across all servers on your account. This ensures that runaway behavior on any single server cannot exhaust your overall budget.

### What happens to active AI sessions when the breaker trips?
Active SSE connections remain open but all tool call requests return a 429 Too Many Requests response with a Retry-After header. The AI client receives an error message explaining that the budget ceiling has been reached.

### Can I configure different thresholds for different servers?
Currently, the circuit breaker operates at the account level with a single set of thresholds. This prevents runaway behavior on any server from bypassing budget controls by spreading requests across multiple servers.
