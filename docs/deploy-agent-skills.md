---
title: "Deploy AI Agent Skills as MCP Server | Vinkius Cloud"
description: "Give AI agents access to procedures, playbooks, and domain knowledge — no API required. Deploy SKILL.md-compatible knowledge blocks as governed MCP servers."
head:
  - - meta
    - property: og:title
      content: "Deploy AI Agent Skills as MCP Server | Vinkius Cloud"
  - - meta
    - property: og:description
      content: "Give AI agents access to procedures, playbooks, and domain knowledge — no API required. Deploy SKILL.md knowledge as governed MCP servers."
  - - meta
    - name: keywords
      content: "AI agent skills, MCP knowledge base, SKILL.md, no-code MCP server, deploy agent skills, AI playbooks MCP, progressive disclosure MCP, AI procedures"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What are Agent Skills in Vinkius Cloud?","acceptedAnswer":{"@type":"Answer","text":"Agent Skills are structured instructions — procedures, playbooks, FAQs, and decision trees — that AI models discover progressively through MCP. Unlike API-based tools that let AI do things, skills let AI know things — your refund policy, escalation rules, compliance requirements, or any domain knowledge."}},{"@type":"Question","name":"Do I need an API or coding knowledge to deploy Agent Skills?","acceptedAnswer":{"@type":"Answer","text":"No. Agent Skills require no API backend, no code, and no technical setup. You write the skill content in Markdown (following the SKILL.md open standard), paste it into the editor, and click Deploy. The platform handles hosting, authentication, and governance."}},{"@type":"Question","name":"What is the SKILL.md open standard?","acceptedAnswer":{"@type":"Answer","text":"SKILL.md is an open standard for packaging AI procedural knowledge, published at agentskills.io. It defines a structured Markdown format supported natively by Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot, Cursor, VS Code, and Windsurf. Vinkius Cloud deploys these skills as governed, cloud-hosted MCP servers."}},{"@type":"Question","name":"How does progressive disclosure work?","acceptedAnswer":{"@type":"Answer","text":"The AI first sees only skill names and descriptions — lightweight metadata. When a user question matches a skill description, the AI loads the full body on demand. This keeps the context window clean: a server with 20 skills doesn''t consume 20× the tokens upfront."}},{"@type":"Question","name":"Can I attach files to skills?","acceptedAnswer":{"@type":"Answer","text":"Yes, on paid plans. Each skill supports three file directories: scripts/ (helper scripts and utilities), references/ (PDFs, spreadsheets, data files), and assets/ (email templates, configuration files, sample data)."}},{"@type":"Question","name":"What''s the difference between local SKILL.md files and Vinkius Cloud skills?","acceptedAnswer":{"@type":"Answer","text":"Local skills live in a git repository and work for one developer, in one project, in one IDE. Vinkius Cloud deploys the same SKILL.md content to the global edge — accessible from any MCP client, for any team member, with HMAC-authenticated tokens, DLP redaction, and audit logging."}}]}'
---

# Deploy Agent Skills

Give AI agents access to knowledge, procedures, and operational playbooks — no API endpoint required. Agent Skills are structured instructions that AI models discover progressively, loading only what's relevant to the current task.

This is the deployment mode for SOPs, compliance checklists, troubleshooting guides, onboarding flows, and any domain knowledge your AI needs to reason correctly.

<!-- Stat strip -->
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1px;margin:40px 0;background:rgba(255,255,255,0.04);border-radius:10px;overflow:hidden">
<div style="padding:28px 24px;background:#09090f;text-align:center">
<div style="font-size:28px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">No API</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:6px;letter-spacing:1px;font-family:Inter,sans-serif">PURE KNOWLEDGE</div>
</div>
<div style="padding:28px 24px;background:#09090f;text-align:center">
<div style="font-size:28px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">SKILL.md</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:6px;letter-spacing:1px;font-family:Inter,sans-serif">OPEN STANDARD</div>
</div>
<div style="padding:28px 24px;background:#09090f;text-align:center">
<div style="font-size:28px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif">Progressive</div>
<div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:6px;letter-spacing:1px;font-family:Inter,sans-serif">DISCLOSURE MODEL</div>
</div>
</div>

### How agent skills differ from API tools

API-based MCP servers give AI the ability to **do things** — query databases, create records, trigger webhooks. Agent Skills give AI the ability to **know things** — how your refund policy works, which escalation steps to follow, what your compliance requirements are.

The AI discovers skills through progressive disclosure: it sees the skill name and description first, then loads the full body only when the skill is relevant to the conversation. This keeps the context window clean and prevents information overload.

### The SKILL.md open standard

SKILL.md is an open standard for packaging AI procedural knowledge, published at [agentskills.io](https://agentskills.io). Initially developed by Anthropic and publicly released in December 2025, it defines a structured Markdown format that gives AI agents persistent domain expertise — turning them from generic assistants into specialists that follow your exact procedures.

The standard is supported natively by every major AI coding platform:

<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:24px 0">

<div style="padding:14px 16px;border:1px solid rgba(255,255,255,0.06);border-radius:6px;background:#09090f;text-align:center">
<div style="font-size:14px;color:rgba(255,255,255,0.7);font-weight:600;font-family:Inter,sans-serif">Claude Code</div>
<div style="font-size:12px;color:rgba(255,255,255,0.25);margin-top:4px;font-family:Inter,sans-serif">Anthropic</div>
</div>

<div style="padding:14px 16px;border:1px solid rgba(255,255,255,0.06);border-radius:6px;background:#09090f;text-align:center">
<div style="font-size:14px;color:rgba(255,255,255,0.7);font-weight:600;font-family:Inter,sans-serif">OpenAI Codex</div>
<div style="font-size:12px;color:rgba(255,255,255,0.25);margin-top:4px;font-family:Inter,sans-serif">OpenAI</div>
</div>

<div style="padding:14px 16px;border:1px solid rgba(255,255,255,0.06);border-radius:6px;background:#09090f;text-align:center">
<div style="font-size:14px;color:rgba(255,255,255,0.7);font-weight:600;font-family:Inter,sans-serif">Gemini CLI</div>
<div style="font-size:12px;color:rgba(255,255,255,0.25);margin-top:4px;font-family:Inter,sans-serif">Google</div>
</div>

<div style="padding:14px 16px;border:1px solid rgba(255,255,255,0.06);border-radius:6px;background:#09090f;text-align:center">
<div style="font-size:14px;color:rgba(255,255,255,0.7);font-weight:600;font-family:Inter,sans-serif">GitHub Copilot</div>
<div style="font-size:12px;color:rgba(255,255,255,0.25);margin-top:4px;font-family:Inter,sans-serif">Microsoft</div>
</div>

<div style="padding:14px 16px;border:1px solid rgba(255,255,255,0.06);border-radius:6px;background:#09090f;text-align:center">
<div style="font-size:14px;color:rgba(255,255,255,0.7);font-weight:600;font-family:Inter,sans-serif">Cursor</div>
<div style="font-size:12px;color:rgba(255,255,255,0.25);margin-top:4px;font-family:Inter,sans-serif">Anysphere</div>
</div>

<div style="padding:14px 16px;border:1px solid rgba(255,255,255,0.06);border-radius:6px;background:#09090f;text-align:center">
<div style="font-size:14px;color:rgba(255,255,255,0.7);font-weight:600;font-family:Inter,sans-serif">VS Code</div>
<div style="font-size:12px;color:rgba(255,255,255,0.25);margin-top:4px;font-family:Inter,sans-serif">Microsoft</div>
</div>

<div style="padding:14px 16px;border:1px solid rgba(255,255,255,0.06);border-radius:6px;background:#09090f;text-align:center">
<div style="font-size:14px;color:rgba(255,255,255,0.7);font-weight:600;font-family:Inter,sans-serif">Windsurf</div>
<div style="font-size:12px;color:rgba(255,255,255,0.25);margin-top:4px;font-family:Inter,sans-serif">Codeium</div>
</div>

<div style="padding:14px 16px;border:1px solid rgba(255,255,255,0.06);border-radius:6px;background:#09090f;text-align:center">
<div style="font-size:14px;color:rgba(255,255,255,0.7);font-weight:600;font-family:Inter,sans-serif">Antigravity</div>
<div style="font-size:12px;color:rgba(255,255,255,0.25);margin-top:4px;font-family:Inter,sans-serif">Google DeepMind</div>
</div>

</div>

### What Vinkius Cloud changes

On every platform above, skills exist as **local files in a repository**. They live in `.cursor/skills/`, `.claude/skills/`, or similar directories. They work — but only for that specific developer, in that specific project, in that specific IDE session.

Vinkius Cloud takes the same SKILL.md standard and deploys it to the cloud as a governed MCP server:

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(255,255,255,0.2);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">LOCAL SKILL.MD</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Lives in a git repo</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">One developer, one project, one IDE. No access control, no audit trail, no DLP. Skills are discoverable only in the local workspace.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(129,140,248,0.15);border-radius:8px;background:rgba(129,140,248,0.02)">
<div style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">VINKIUS CLOUD</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Deployed to the global edge</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">Any MCP client, any team member, any IDE. HMAC-authenticated tokens, DLP redaction, 40ms revocation, full audit log. Skills become organizational infrastructure.</div>
</div>

</div>

The same refund policy, the same escalation playbook, the same compliance checklist — accessible from Claude Desktop, from Cursor, from a custom agent, from any MCP-compatible client. Managed centrally, governed uniformly, updated once for everyone.

---

<!-- Editorial break: The wizard -->
<div style="margin:48px 0;padding:56px 40px;background:#09090f;border:1px solid rgba(255,255,255,0.05);border-radius:12px;position:relative;overflow:hidden">
<div style="position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(129,140,248,0.3),transparent)"></div>
<span style="font-size:12px;color:rgba(129,140,248,0.6);letter-spacing:3px;font-weight:700">THE WIZARD</span>
<div style="font-size:36px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif;letter-spacing:-1.5px;margin-top:12px;line-height:1.1">Teach AI<br><span style="color:rgba(255,255,255,0.25)">how to think.</span></div>
<div style="font-size:15px;color:rgba(255,255,255,0.4);margin-top:16px;max-width:540px;line-height:1.7;font-family:Inter,sans-serif">Skills are structured instructions that AI agents discover progressively — only loading what's needed for the current task. Less noise, better reasoning.</div>
</div>

## Step 1 — Define your skills

<!-- Sidebar + Form split -->
<div style="margin:24px 0;display:grid;grid-template-columns:1fr 1fr;gap:1px;border-radius:10px;overflow:hidden">

<div style="background:#09090f;padding:32px;border:1px solid rgba(255,255,255,0.06);border-radius:10px 0 0 10px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);letter-spacing:2px;font-weight:600">01 — SKILLS</span>
<div style="font-size:24px;color:rgba(255,255,255,0.9);font-weight:800;font-family:Inter,system-ui,sans-serif;letter-spacing:-1px;margin-top:16px;line-height:1.15">Teach AI<br>how to think.</div>
<div style="font-size:14px;color:rgba(255,255,255,0.4);margin-top:16px;line-height:1.7;font-family:Inter,sans-serif">Skills are structured instructions that AI agents discover progressively — only loading what's needed for the current task. Less noise, better reasoning.</div>
<div style="font-size:13px;color:rgba(255,255,255,0.2);margin-top:16px;border-left:2px solid rgba(255,255,255,0.08);padding-left:12px;line-height:1.6;font-family:ui-monospace,monospace">Following the SKILL.md open standard from agentskills.io.</div>
</div>

<div style="background:#000;padding:32px;border:1px solid rgba(255,255,255,0.06);border-radius:0 10px 10px 0">
<div style="font-size:13px;color:rgba(255,255,255,0.4);letter-spacing:1.5px;font-weight:700;margin-bottom:16px;font-family:ui-monospace,monospace">SKILLS (3)</div>

<!-- Skill 1 -->
<div style="padding:14px 18px;border:1px solid rgba(129,140,248,0.2);border-radius:6px;background:rgba(129,140,248,0.03);margin-bottom:8px">
<div style="display:flex;justify-content:space-between;align-items:center">
<div style="font-size:14px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Refund Policy</div>
<span style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:1px;font-weight:600">ACTIVE</span>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.35);margin-top:4px;font-family:Inter,sans-serif">Step-by-step procedure for processing customer refunds within 30 days.</div>
</div>

<!-- Skill 2 -->
<div style="padding:14px 18px;border:1px solid rgba(255,255,255,0.06);border-radius:6px;margin-bottom:8px">
<div style="display:flex;justify-content:space-between;align-items:center">
<div style="font-size:14px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Escalation Playbook</div>
<span style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:1px;font-weight:600">ACTIVE</span>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.35);margin-top:4px;font-family:Inter,sans-serif">Rules for when and how to escalate a conversation to a human agent.</div>
</div>

<!-- Skill 3 -->
<div style="padding:14px 18px;border:1px solid rgba(255,255,255,0.06);border-radius:6px;margin-bottom:12px">
<div style="display:flex;justify-content:space-between;align-items:center">
<div style="font-size:14px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Product FAQ</div>
<span style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:1px;font-weight:600">ACTIVE</span>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.35);margin-top:4px;font-family:Inter,sans-serif">Canonical answers for the most common customer questions.</div>
</div>

<div style="padding:10px 16px;border:1px dashed rgba(129,140,248,0.2);border-radius:6px;text-align:center">
<span style="font-size:12px;color:rgba(129,140,248,0.5);font-family:Inter,sans-serif">+ Add Skill</span>
</div>
</div>

</div>

Each skill has three fields:

| Field | Purpose |
|---|---|
| **Name** | Short identifier (up to 64 characters). This is what the AI reads first when scanning available skills. |
| **Description** | A concise explanation of what the skill covers. This helps the AI decide whether to load the full body. |
| **Body** | The complete content — Markdown with headings, lists, code blocks, tables. This is what the AI reads when it selects this skill. |

### Writing effective skills

The body field supports full Markdown. Structure your content the same way you would write documentation for a colleague:

```markdown
## Refund Policy

### Eligibility
- Order must be within 30 days of delivery
- Product must be unused and in original packaging
- Digital products are non-refundable after activation

### Process
1. Verify the order date in the Payments system
2. Confirm the item condition with the customer
3. Issue the refund through Stripe → Refunds → Create
4. Send confirmation email using the "Refund Processed" template

### Exceptions
- VIP customers (tier Gold+): extend window to 90 days
- Defective products: no time limit, escalate to Quality team
```

::: tip SKILL.md compatible
Skills follow the same format used by Cursor, Windsurf, and other AI-native editors. If you already have `SKILL.md` files in your repositories, paste them directly into the body field.
:::

## Step 2 — Governance

<!-- Sidebar + Form split -->
<div style="margin:24px 0;display:grid;grid-template-columns:1fr 1fr;gap:1px;border-radius:10px;overflow:hidden">

<div style="background:#09090f;padding:32px;border:1px solid rgba(255,255,255,0.06);border-radius:10px 0 0 10px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);letter-spacing:2px;font-weight:600">02 — GOVERNANCE</span>
<div style="font-size:24px;color:rgba(255,255,255,0.9);font-weight:800;font-family:Inter,system-ui,sans-serif;letter-spacing:-1px;margin-top:16px;line-height:1.15">Invisible<br>armor.</div>
<div style="font-size:14px;color:rgba(255,255,255,0.4);margin-top:16px;line-height:1.7;font-family:Inter,sans-serif">PII is masked before it ever touches the model. Large skill bodies shrink automatically — fewer tokens, same intelligence.</div>
<div style="font-size:13px;color:rgba(255,255,255,0.2);margin-top:16px;border-left:2px solid rgba(255,255,255,0.08);padding-left:12px;line-height:1.6;font-family:ui-monospace,monospace">No Security step needed — there is no external API to authenticate.</div>
</div>

<div style="background:#000;padding:32px;border:1px solid rgba(255,255,255,0.06);border-radius:0 10px 10px 0">
<div style="font-size:13px;color:rgba(255,255,255,0.4);letter-spacing:1.5px;font-weight:700;margin-bottom:16px;font-family:ui-monospace,monospace">GOVERNANCE CONTROLS</div>

<div style="display:flex;align-items:center;justify-content:space-between;padding:14px 18px;border:1px solid rgba(52,211,153,0.12);border-radius:6px;margin-bottom:10px">
<div>
<div style="font-size:14px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Zero-Trust PII Redaction</div>
<div style="font-size:13px;color:rgba(255,255,255,0.35);margin-top:3px;font-family:Inter,sans-serif">Masks any PII that appears in skill content before it reaches the AI.</div>
</div>
<div style="width:36px;height:20px;border-radius:10px;background:#22c55e;position:relative;flex-shrink:0;margin-left:14px"><div style="width:14px;height:14px;border-radius:50%;background:rgba(255,255,255,0.9);position:absolute;right:3px;top:3px"></div></div>
</div>

<div style="display:flex;align-items:center;justify-content:space-between;padding:14px 18px;border:1px solid rgba(245,158,11,0.12);border-radius:6px">
<div>
<div style="font-size:14px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Smart Array Truncation</div>
<div style="font-size:13px;color:rgba(255,255,255,0.35);margin-top:3px;font-family:Inter,sans-serif">Prevents oversized skill bodies from consuming too many tokens.</div>
</div>
<div style="width:36px;height:20px;border-radius:10px;background:#22c55e;position:relative;flex-shrink:0;margin-left:14px"><div style="width:14px;height:14px;border-radius:50%;background:rgba(255,255,255,0.9);position:absolute;right:3px;top:3px"></div></div>
</div>
</div>

</div>

Both controls are **enabled by default**. The Security step is skipped entirely — Agent Skills don't connect to any external API, so there's nothing to authenticate.

---

<!-- Editorial break: Deploy -->
<div style="margin:48px 0;padding:56px 40px;background:#09090f;border:1px solid rgba(255,255,255,0.05);border-radius:12px;position:relative;overflow:hidden">
<div style="position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(52,211,153,0.3),transparent)"></div>
<span style="font-size:12px;color:rgba(52,211,153,0.6);letter-spacing:3px;font-weight:700">DEPLOY</span>
<div style="font-size:36px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif;letter-spacing:-1.5px;margin-top:12px;line-height:1.1">You're live.<br><span style="color:rgba(255,255,255,0.25)">AI already knows.</span></div>
</div>

## What happens when you deploy

Click **Deploy**. The platform indexes your skills, builds a progressive disclosure tree, and distributes the server to the global edge.

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#09090f;padding:24px 28px;font-family:ui-monospace,monospace">
<div style="font-size:12px;color:rgba(52,211,153,0.5);letter-spacing:2px;margin-bottom:20px;font-weight:600">DEPLOYING...</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="width:10px;height:10px;border-radius:50%;background:#22c55e;display:inline-block"></span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">Indexing skill definitions…</span>
<span style="font-size:12px;color:rgba(52,211,153,0.4);margin-left:auto">done</span>
</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="width:10px;height:10px;border-radius:50%;background:#22c55e;display:inline-block"></span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">Building progressive disclosure tree…</span>
<span style="font-size:12px;color:rgba(52,211,153,0.4);margin-left:auto">done</span>
</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="width:10px;height:10px;border-radius:50%;background:#22c55e;display:inline-block"></span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">Sealing in V8 Isolate sandbox…</span>
<span style="font-size:12px;color:rgba(52,211,153,0.4);margin-left:auto">done</span>
</div>
<div style="display:flex;align-items:center;gap:12px">
<span style="width:10px;height:10px;border-radius:50%;background:#22c55e;display:inline-block"></span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">Live on the edge…</span>
<span style="font-size:12px;color:rgba(52,211,153,0.4);margin-left:auto">done</span>
</div>
<div style="margin-top:20px;width:100%;height:3px;background:rgba(255,255,255,0.05);border-radius:2px"><div style="width:100%;height:100%;background:linear-gradient(90deg,#22c55e,#818cf8);border-radius:2px"></div></div>
</div>

After deployment, you receive the same outputs as every server type: **MCP URL**, **Config JSON**, and a **Connection Token** (HMAC-SHA256, shown once).

### Progressive disclosure in action

When an AI client connects to your skills server, it doesn't download every skill body immediately. Instead:

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#09090f;padding:24px 28px;font-family:ui-monospace,monospace">
<div style="font-size:12px;color:rgba(129,140,248,0.5);letter-spacing:2px;margin-bottom:20px;font-weight:600">PROGRESSIVE DISCLOSURE</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">01</span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">AI discovers skill <strong>names and descriptions</strong> — lightweight metadata only</span>
</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">02</span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">User asks a question that matches a skill description</span>
</div>
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">03</span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">AI calls the relevant skill tool to load the <strong>full body</strong></span>
</div>
<div style="display:flex;align-items:center;gap:12px">
<span style="font-size:12px;color:rgba(255,255,255,0.2);font-family:ui-monospace,monospace;min-width:20px">04</span>
<span style="font-size:15px;color:rgba(255,255,255,0.85);font-family:Inter,sans-serif">AI reasons using the skill content and responds accordingly</span>
</div>
</div>

This means a server with 20 skills doesn't consume 20× the tokens upfront. The AI loads only what it needs — keeping the context window efficient and responses accurate.

---

<!-- Editorial break: Skill files -->
<div style="margin:48px 0;padding:56px 40px;background:#09090f;border:1px solid rgba(255,255,255,0.05);border-radius:12px;position:relative;overflow:hidden">
<div style="position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(245,158,11,0.3),transparent)"></div>
<span style="font-size:12px;color:rgba(245,158,11,0.6);letter-spacing:3px;font-weight:700">SKILL FILES</span>
<div style="font-size:36px;color:rgba(255,255,255,0.9);font-weight:700;font-family:Inter,system-ui,sans-serif;letter-spacing:-1.5px;margin-top:12px;line-height:1.1">Attach more<br><span style="color:rgba(255,255,255,0.25)">than just text.</span></div>
</div>

## Skill files

On paid plans, you can attach files to individual skills. These files are organized into three directories:

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">scripts/</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Helper scripts</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">Shell scripts, Python utilities, or any executable the skill references in its instructions.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">references/</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Reference documents</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">PDFs, spreadsheets, or data files the AI can cite when answering questions.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">assets/</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Templates and assets</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">Email templates, configuration files, sample data, or any resource the skill needs.</div>
</div>

</div>

::: info Paid plans only
Skill files are available on paid plans. On the free plan, skills are text-only (body Markdown). Save the skill first, then attach files from the detail page.
:::

---

## Real-world skill examples

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:24px 0">

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">CUSTOMER SUPPORT</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Support agent playbooks</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">Refund policies, escalation rules, SLA definitions. The AI follows the exact same procedures your human agents follow.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">ENGINEERING</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Deployment runbooks</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">Incident response procedures, release checklists, infrastructure patterns. The AI references your specific runbooks — not generic advice.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">COMPLIANCE</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">Regulatory procedures</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">GDPR data handling rules, SOC 2 controls, HIPAA patient data protocols. The AI enforces compliance without you having to repeat the rules.</div>
</div>

<div style="padding:20px 24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:#09090f">
<div style="font-size:11px;color:rgba(239,68,68,0.5);letter-spacing:2px;font-weight:700;margin-bottom:8px;font-family:ui-monospace,monospace">ONBOARDING</div>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif">New hire knowledge base</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.6;font-family:Inter,sans-serif">Architecture overviews, coding standards, team conventions. New team members get answers from the AI trained on your actual documentation.</div>
</div>

</div>

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
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Edit skills, manage tokens, monitor audit logs, and configure governance.</div>
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

### What are Agent Skills in Vinkius Cloud?
Agent Skills are structured instructions — procedures, playbooks, FAQs, and decision trees — that AI models discover progressively through MCP. Unlike API-based tools that let AI do things, skills let AI know things — your refund policy, escalation rules, compliance requirements, or any domain knowledge.

### Do I need an API or coding knowledge to deploy Agent Skills?
No. Agent Skills require no API backend, no code, and no technical setup. You write the skill content in Markdown (following the SKILL.md open standard), paste it into the editor, and click Deploy. The platform handles hosting, authentication, and governance.

### What is the SKILL.md open standard?
SKILL.md is an open standard for packaging AI procedural knowledge, published at agentskills.io. It defines a structured Markdown format supported natively by Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot, Cursor, VS Code, and Windsurf. Vinkius Cloud deploys these skills as governed, cloud-hosted MCP servers.

### How does progressive disclosure work?
The AI first sees only skill names and descriptions — lightweight metadata. When a user question matches a skill description, the AI loads the full body on demand. This keeps the context window clean: a server with 20 skills doesn't consume 20× the tokens upfront.

### Can I attach files to skills?
Yes, on paid plans. Each skill supports three file directories: scripts/ (helper scripts and utilities), references/ (PDFs, spreadsheets, data files), and assets/ (email templates, configuration files, sample data).

### What's the difference between local SKILL.md files and Vinkius Cloud skills?
Local skills live in a git repository and work for one developer, in one project, in one IDE. Vinkius Cloud deploys the same SKILL.md content to the global edge — accessible from any MCP client, for any team member, with HMAC-authenticated tokens, DLP redaction, and audit logging.
