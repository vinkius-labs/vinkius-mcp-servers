---
title: MCP Tools — Toggle, Edit Descriptions, Set Annotations & Cache Policies | Vinkius Cloud
description: Manage MCP tools with granular server-side governance. Toggle tools on/off, organize by group, edit AI-facing descriptions, set behavioral annotations (read-only, destructive, idempotent), configure cache policies, and manage Agent Skills — without modifying your upstream API.
head:
  - - meta
    - name: keywords
      content: MCP tools, MCP tool editor, AI tool annotations, MCP cache control, agent skills, MCP server-side governance, tool management
  - - meta
    - property: og:title
      content: MCP Tools — Toggle, Edit & Annotate AI Tools | Vinkius Cloud
  - - meta
    - property: og:description
      content: Manage MCP tools with granular server-side governance. Toggle, edit descriptions, set annotations, configure cache policies, and manage Agent Skills.
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can I disable a tool without deleting it?","acceptedAnswer":{"@type":"Answer","text":"Yes. Each tool has an individual toggle. When disabled, the tool is excluded from tools/list responses and cannot be called by AI clients. The configuration and annotations are preserved."}},{"@type":"Question","name":"What are MCP tool annotations and why do they matter?","acceptedAnswer":{"@type":"Answer","text":"Annotations are behavioral hints: Read Only (no side effects), Destructive (irreversible changes), Idempotent (safe to retry), and Return Direct (output goes straight to the user). AI clients use these to make safety decisions automatically."}},{"@type":"Question","name":"Can I customize tool descriptions without modifying my API?","acceptedAnswer":{"@type":"Answer","text":"Yes. The tool editor lets you override the auto-generated OpenAPI description with a human-written one. A well-written description directly improves how accurately the AI model selects and uses the tool."}},{"@type":"Question","name":"What are Agent Skills and how are they different from tools?","acceptedAnswer":{"@type":"Answer","text":"Tools map 1:1 to HTTP endpoints and generate API calls. Skills are markdown-based knowledge documents that the AI model can reference during conversations. Skills extend your MCP server beyond API tools without custom code."}},{"@type":"Question","name":"Do tool changes propagate to connected AI clients automatically?","acceptedAnswer":{"@type":"Answer","text":"Yes. Toggle and edit changes trigger notifications/tools/list_changed events. Adding or deleting tools fully re-establishes SSE connections. No client restart required."}},{"@type":"Question","name":"What cache control options are available per tool?","acceptedAnswer":{"@type":"Answer","text":"Three options: None (clients decide), no-store (prevents caching for real-time data), and immutable (permanently cacheable for static data like schemas and configurations)."}}]}'
---

# MCP Tools

The Tools tab gives you granular control over every tool your MCP server exposes to AI clients. Toggle tools on or off, organize them by group, edit descriptions, set behavioral annotations, define system rules, and configure cache policies — all from a single interface.

Most MCP platforms treat tools as static definitions: whatever your OpenAPI spec declares is what the AI model sees. Vinkius Cloud introduces server-side tool governance — you control which tools are active, how the AI should interpret each one, and what behavioral constraints apply, without modifying your upstream API.

---

## Tool list

Tools are displayed in a searchable list with per-tool toggles. The view supports two layout modes:

### Grouped view (default)

Tools are organized by their OpenAPI tag. Each group has a collapsible header with a group-level toggle:

<!-- Grouped tool list UI recreation -->
<div style="margin:24px 0;font-family:ui-monospace,monospace">

<!-- Header -->
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
<span style="font-size:9px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:600">MCP TOOLS</span>
<div style="display:flex;align-items:center;gap:12px">
<div style="position:relative">
<input style="width:160px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);padding:5px 10px 5px 24px;font-size:11px;color:rgba(255,255,255,0.5);font-family:ui-monospace,monospace;outline:none" placeholder="Search tools..." />
</div>
<div style="padding:4px 12px;background:rgba(255,255,255,0.9);border-radius:4px;font-size:11px;color:#000;font-weight:600;font-family:Inter,sans-serif">+ Add Tool</div>
</div>
</div>

<!-- Group: Users -->
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#020202;margin-bottom:8px">

<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;cursor:pointer">
<div style="display:flex;align-items:center;gap:6px">
<span style="font-size:10px;color:rgba(255,255,255,0.2)">&#x25B6;</span>
<span style="font-size:12px;color:rgba(255,255,255,0.5);font-weight:500;letter-spacing:1px">USERS</span>
<span style="font-size:10px;color:rgba(255,255,255,0.15)">4</span>
</div>
<div style="display:flex;align-items:center;gap:6px">
<span style="font-size:10px;color:rgba(255,255,255,0.12)">ALL_ON</span>
<div style="width:28px;height:16px;border-radius:8px;background:rgba(6,182,212,0.8);position:relative"><div style="width:12px;height:12px;border-radius:50%;background:#fff;position:absolute;right:2px;top:2px"></div></div>
</div>
</div>

<div style="border-top:1px solid rgba(255,255,255,0.04);padding:0 16px">
<div style="display:flex;align-items:center;gap:0;padding:6px 0;font-size:12px;border-bottom:1px solid rgba(255,255,255,0.02)">
<span style="width:40px;text-align:center;flex-shrink:0"><span style="display:inline-block;width:28px;height:16px;border-radius:8px;background:rgba(6,182,212,0.8);position:relative"><span style="display:block;width:12px;height:12px;border-radius:50%;background:#fff;position:absolute;right:2px;top:2px"></span></span></span>
<span style="width:60px;flex-shrink:0;color:rgba(52,211,153,0.5);font-size:10px;font-weight:700">GET</span>
<span style="flex:1;color:rgba(255,255,255,0.5)">list_users</span>
<span style="width:200px;text-align:right;color:rgba(255,255,255,0.2);font-size:11px">/api/v1/users</span>
</div>
<div style="display:flex;align-items:center;gap:0;padding:6px 0;font-size:12px;border-bottom:1px solid rgba(255,255,255,0.02)">
<span style="width:40px;text-align:center;flex-shrink:0"><span style="display:inline-block;width:28px;height:16px;border-radius:8px;background:rgba(6,182,212,0.8);position:relative"><span style="display:block;width:12px;height:12px;border-radius:50%;background:#fff;position:absolute;right:2px;top:2px"></span></span></span>
<span style="width:60px;flex-shrink:0;color:rgba(56,189,248,0.5);font-size:10px;font-weight:700">POST</span>
<span style="flex:1;color:rgba(255,255,255,0.5)">create_user</span>
<span style="width:200px;text-align:right;color:rgba(255,255,255,0.2);font-size:11px">/api/v1/users</span>
</div>
<div style="display:flex;align-items:center;gap:0;padding:6px 0;font-size:12px">
<span style="width:40px;text-align:center;flex-shrink:0"><span style="display:inline-block;width:28px;height:16px;border-radius:8px;background:rgba(255,255,255,0.1);position:relative"><span style="display:block;width:12px;height:12px;border-radius:50%;background:#fff;position:absolute;left:2px;top:2px"></span></span></span>
<span style="width:60px;flex-shrink:0;color:rgba(239,68,68,0.5);font-size:10px;font-weight:700">DEL</span>
<span style="flex:1;color:rgba(255,255,255,0.5);opacity:0.4">delete_user</span>
<span style="width:200px;text-align:right;color:rgba(255,255,255,0.2);font-size:11px">/api/v1/users/{id}</span>
</div>
</div>

</div>

<!-- Footer -->
<div style="font-size:10px;color:rgba(255,255,255,0.1);display:flex;gap:16px">
<span>5/6 ENABLED</span>
<span>2 GROUPS</span>
</div>

</div>

### Flat view

When the server's tool exposition is set to `flat`, the same tools are displayed in a single list without group headers — useful for servers with no OpenAPI tags or few tools.

### Tool columns

| Column | Description |
|---|---|
| **Toggle** | Enable or disable the tool. Disabled tools are excluded from `tools/list` responses and cannot be called |
| **Method** | HTTP verb (`GET`, `POST`, `PUT`, `PATCH`, `DEL`) with color coding |
| **Name** | Tool name as exposed to AI clients. Click to open the editor |
| **Path** | The upstream API endpoint path |

### Search

The search input filters tools by name, endpoint path, or description. The filter applies across all groups in real time.

### Group toggle

Click the group-level toggle to enable or disable all tools in a tag group with a single action. The toggle shows `ALL_ON` or `PARTIAL` status.

---

## Tool editor

Click any tool name to open the slide-out editor panel. The editor provides full control over how the AI model sees and interacts with the tool:

<!-- Tool editor slide-out UI recreation -->
<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.06);border-radius:8px;overflow:hidden;background:#0a0a0a;font-family:ui-monospace,monospace;max-width:400px">

<!-- Header -->
<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div>
<div style="font-size:10px;color:rgba(255,255,255,0.25)">EDIT TOOL</div>
<div style="font-size:13px;color:rgba(255,255,255,0.6);font-weight:500;margin-top:2px">list_users</div>
</div>
<div style="width:20px;height:20px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.2);font-size:14px">x</div>
</div>

<!-- Body -->
<div style="padding:16px;space-y:16px">

<!-- Endpoint info -->
<div style="margin-bottom:16px">
<div style="font-size:10px;color:rgba(255,255,255,0.15);letter-spacing:1px;margin-bottom:6px">ENDPOINT</div>
<div style="display:flex;align-items:center;gap:6px;font-size:12px">
<span style="padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700;color:rgba(52,211,153,0.7);background:rgba(52,211,153,0.1)">GET</span>
<span style="color:rgba(255,255,255,0.35)">/api/v1/users</span>
</div>
<div style="font-size:11px;color:rgba(255,255,255,0.2);margin-top:4px"><span style="color:rgba(255,255,255,0.2)">Original:</span> Returns a paginated list of all users...</div>
</div>

<div style="border-top:1px solid rgba(255,255,255,0.04);margin:12px 0"></div>

<!-- 1. System Rules -->
<div style="margin-bottom:16px">
<div style="font-size:10px;color:rgba(255,255,255,0.15);letter-spacing:1px;margin-bottom:6px">SYSTEM RULES</div>
<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:4px;padding:8px 12px;min-height:50px;font-size:11px;color:rgba(255,255,255,0.4);line-height:1.6">
Never return more than 20 results<br/>
Always include pagination metadata
</div>
</div>

<div style="border-top:1px solid rgba(255,255,255,0.04);margin:12px 0"></div>

<!-- 2. Display Title -->
<div style="margin-bottom:12px">
<div style="font-size:10px;color:rgba(255,255,255,0.15);letter-spacing:1px;margin-bottom:6px">DISPLAY TITLE</div>
<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:4px;padding:6px 12px;font-size:12px;color:rgba(255,255,255,0.5)">List Users</div>
</div>

<!-- Custom Description -->
<div style="margin-bottom:16px">
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
<span style="font-size:10px;color:rgba(255,255,255,0.15);letter-spacing:1px">CUSTOM DESCRIPTION</span>
<span style="font-size:10px;color:rgba(255,255,255,0.15)">Reset to Original</span>
</div>
<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:4px;padding:8px 12px;min-height:40px;font-size:11px;color:rgba(255,255,255,0.4);line-height:1.5">
Retrieves a paginated list of users. Supports filtering by role, department, and status.
</div>
<div style="font-size:10px;color:rgba(245,158,11,0.35);margin-top:4px">This overrides the original OpenAPI description</div>
</div>

<div style="border-top:1px solid rgba(255,255,255,0.04);margin:12px 0"></div>

<!-- 3. Annotations -->
<div style="margin-bottom:16px">
<div style="font-size:10px;color:rgba(255,255,255,0.15);letter-spacing:1px;margin-bottom:10px">LLM ANNOTATIONS</div>

<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 0">
<div>
<div style="font-size:12px;color:rgba(255,255,255,0.4)">Read Only</div>
<div style="font-size:10px;color:rgba(255,255,255,0.15)">Only retrieves data, no side effects</div>
</div>
<div style="width:28px;height:16px;border-radius:8px;background:rgba(6,182,212,0.8);position:relative"><div style="width:12px;height:12px;border-radius:50%;background:#fff;position:absolute;right:2px;top:2px"></div></div>
</div>

<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 0">
<div>
<div style="font-size:12px;color:rgba(255,255,255,0.4)">Destructive</div>
<div style="font-size:10px;color:rgba(255,255,255,0.15)">May perform irreversible changes</div>
</div>
<div style="width:28px;height:16px;border-radius:8px;background:rgba(255,255,255,0.1);position:relative"><div style="width:12px;height:12px;border-radius:50%;background:#fff;position:absolute;left:2px;top:2px"></div></div>
</div>

<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 0">
<div>
<div style="font-size:12px;color:rgba(255,255,255,0.4)">Idempotent</div>
<div style="font-size:10px;color:rgba(255,255,255,0.15)">Repeated calls have no additional effect</div>
</div>
<div style="width:28px;height:16px;border-radius:8px;background:rgba(6,182,212,0.8);position:relative"><div style="width:12px;height:12px;border-radius:50%;background:#fff;position:absolute;right:2px;top:2px"></div></div>
</div>

<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 0">
<div>
<div style="font-size:12px;color:rgba(255,255,255,0.4)">Return Direct</div>
<div style="font-size:10px;color:rgba(255,255,255,0.15)">Output goes directly to the user</div>
</div>
<div style="width:28px;height:16px;border-radius:8px;background:rgba(255,255,255,0.1);position:relative"><div style="width:12px;height:12px;border-radius:50%;background:#fff;position:absolute;left:2px;top:2px"></div></div>
</div>

</div>

<div style="border-top:1px solid rgba(255,255,255,0.04);margin:12px 0"></div>

<!-- 4. Cache Control -->
<div>
<div style="font-size:10px;color:rgba(255,255,255,0.15);letter-spacing:1px;margin-bottom:6px">CACHE CONTROL</div>
<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:4px;padding:6px 12px;font-size:12px;color:rgba(255,255,255,0.4);display:flex;align-items:center;justify-content:space-between">
<span>immutable</span>
<span style="font-size:10px;color:rgba(255,255,255,0.15)">v</span>
</div>
</div>

</div>

<!-- Footer -->
<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-top:1px solid rgba(255,255,255,0.06)">
<span style="font-size:11px;color:rgba(255,255,255,0.2)">Delete</span>
<div style="display:flex;gap:8px">
<span style="padding:4px 12px;font-size:11px;color:rgba(255,255,255,0.4);border:1px solid rgba(255,255,255,0.08);border-radius:4px">Cancel</span>
<span style="padding:4px 12px;font-size:11px;color:#000;background:rgba(255,255,255,0.9);border-radius:4px;font-weight:600">Save</span>
</div>
</div>

</div>

### Editor sections

#### System Rules

Behavioral constraints injected into the tool's context. One rule per line. The AI model receives these rules alongside the tool definition, guiding how it constructs requests and interprets responses.

Examples:
- `Never return more than 20 results`
- `Always include pagination metadata`
- `Omit internal fields: _id, __v`

#### Identity overrides

| Field | Purpose |
|---|---|
| **Display Title** | Override the tool name shown to AI clients (e.g., `List Users` instead of `listUsers_get_api_v1_users`) |
| **Custom Description** | Replace the auto-generated description with a human-written one. A **Reset to Original** button restores the OpenAPI description |

::: info Why override descriptions
Auto-generated descriptions from OpenAPI specs are often technical and incomplete. A well-written description directly improves how accurately the AI model selects and uses the tool. This is one of the highest-impact changes you can make per tool.
:::

#### Annotations

MCP tool annotations are behavioral hints that tell AI clients how a tool operates. Toggle each annotation on or off:

| Annotation | Effect |
|---|---|
| **Read Only** | Indicates the tool only retrieves or computes information without modifying data |
| **Destructive** | Warns that the tool may perform irreversible changes (deletes, overwrites) |
| **Idempotent** | Signals that repeated calls with the same arguments produce no additional effect |
| **Return Direct** | Tells the client to return the tool's output directly to the user without further processing |

AI clients use these annotations to make safety decisions — for example, automatically approving read-only calls while requiring confirmation for destructive operations.

#### Cache Control

Configure how AI clients should cache this tool's responses:

| Option | Behavior |
|---|---|
| **None** | No cache directive — clients decide |
| **no-store** | Explicitly prevents caching. Use for real-time data (balances, live status) |
| **immutable** | Marks the response as permanently cacheable. Use for static data (schemas, enums, configurations) |

---

## Adding a manual tool

Click **Add Tool** to define a tool manually — useful for endpoints not covered by your OpenAPI spec import. Required fields:

| Field | Validation |
|---|---|
| **Name** | Required, max 255 characters |
| **HTTP Method** | `GET`, `POST`, `PUT`, `PATCH`, or `DELETE` |
| **Endpoint Path** | Required, max 500 characters |
| **Description** | Optional, max 1,000 characters |
| **Tag** | Optional group name, max 100 characters |

Manual tools are immediately available to connected AI clients after creation.

---

## Deleting a tool

In the tool editor, click **Delete** at the bottom. A confirmation modal requires you to type the exact tool name before deletion proceeds. This prevents accidental removal of critical tools.

After deletion, all active SSE connections are notified via `mcp:invalidate` so connected clients refresh their tool list immediately.

---

## Agent Skills

Below the tools list, the Tools tab also displays **Agent Skills** — markdown-based instructions that extend your MCP server's capabilities beyond API tools.

Skills are distinct from tools: while tools map to HTTP endpoints, skills provide contextual knowledge, decision frameworks, and behavioral guidelines that guide the AI model during conversations.

### Skill list

<!-- Skill list UI recreation -->
<div style="margin:24px 0;font-family:ui-monospace,monospace">

<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
<span style="font-size:9px;color:rgba(139,92,246,0.5);letter-spacing:2px;font-weight:600">AGENT SKILLS</span>
<div style="display:flex;align-items:center;gap:12px">
<div style="position:relative">
<input style="width:160px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);padding:5px 10px 5px 24px;font-size:11px;color:rgba(255,255,255,0.5);font-family:ui-monospace,monospace;outline:none" placeholder="Search skills..." />
</div>
<div style="padding:4px 12px;background:rgba(255,255,255,0.9);border-radius:4px;font-size:11px;color:#000;font-weight:600;font-family:Inter,sans-serif">+ Add Skill</div>
</div>
</div>

<div style="border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#020202">

<!-- Header -->
<div style="display:flex;align-items:center;gap:0;padding:6px 16px;font-size:11px;color:rgba(255,255,255,0.2);border-bottom:1px solid rgba(255,255,255,0.04)">
<span style="width:40px;flex-shrink:0;text-align:center">On</span>
<span style="width:200px;flex-shrink:0">Name</span>
<span style="flex:1">Description</span>
<span style="width:100px;text-align:right">Actions</span>
</div>

<!-- Skill row 1 -->
<div style="display:flex;align-items:center;gap:0;padding:8px 16px;font-size:12px;border-bottom:1px solid rgba(255,255,255,0.02)">
<span style="width:40px;flex-shrink:0;text-align:center"><span style="display:inline-block;width:28px;height:16px;border-radius:8px;background:rgba(139,92,246,0.8);position:relative"><span style="display:block;width:12px;height:12px;border-radius:50%;background:#fff;position:absolute;right:2px;top:2px"></span></span></span>
<span style="width:200px;flex-shrink:0;color:rgba(255,255,255,0.5);font-weight:500">code-review-guidelines</span>
<span style="flex:1;color:rgba(255,255,255,0.25);padding-right:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Standards and patterns for reviewing pull requests</span>
<span style="width:100px;display:flex;justify-content:flex-end;gap:8px;color:rgba(255,255,255,0.15)"><span style="font-size:14px">&#x270E;</span> <span style="font-size:14px;color:rgba(239,68,68,0.3)">&#x1F5D1;</span></span>
</div>

<!-- Skill row 2 -->
<div style="display:flex;align-items:center;gap:0;padding:8px 16px;font-size:12px">
<span style="width:40px;flex-shrink:0;text-align:center"><span style="display:inline-block;width:28px;height:16px;border-radius:8px;background:rgba(139,92,246,0.8);position:relative"><span style="display:block;width:12px;height:12px;border-radius:50%;background:#fff;position:absolute;right:2px;top:2px"></span></span></span>
<span style="width:200px;flex-shrink:0;color:rgba(255,255,255,0.5);font-weight:500">deployment-runbook</span>
<span style="flex:1;color:rgba(255,255,255,0.25);padding-right:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Step-by-step production deployment procedures</span>
<span style="width:100px;display:flex;justify-content:flex-end;gap:8px;color:rgba(255,255,255,0.15)"><span style="font-size:14px">&#x270E;</span> <span style="font-size:14px;color:rgba(239,68,68,0.3)">&#x1F5D1;</span></span>
</div>

</div>
</div>

Each skill has a **violet toggle** (distinct from the cyan tool toggles) to activate or deactivate it. Disabled skills are excluded from the tool listing sent to AI clients.

### Skill Studio

Click a skill name or the edit icon to open **Skill Studio** — a full-screen editor designed for writing and editing skill documents:

<!-- Skill Studio UI recreation -->
<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#0a0a0a;font-family:ui-monospace,monospace">

<!-- Top bar -->
<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-bottom:1px solid rgba(255,255,255,0.06);background:#0a0a0a">
<div style="display:flex;align-items:center;gap:8px">
<span style="color:rgba(139,92,246,0.6);font-size:14px">&#x1F9E0;</span>
<span style="font-size:11px;color:rgba(255,255,255,0.25)">Skill Studio</span>
<span style="color:rgba(255,255,255,0.08)">/</span>
<span style="font-size:13px;color:rgba(255,255,255,0.7);font-weight:500">code-review-guidelines</span>
<span style="padding:2px 6px;font-size:9px;letter-spacing:1px;font-weight:700;border-radius:3px;background:rgba(52,211,153,0.12);color:rgba(52,211,153,0.6)">ACTIVE</span>
</div>
<div style="display:flex;gap:6px">
<span style="padding:3px 10px;font-size:11px;color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08);border-radius:4px">Cancel</span>
<span style="padding:3px 10px;font-size:11px;color:#000;background:rgba(255,255,255,0.9);border-radius:4px;font-weight:600">Save</span>
</div>
</div>

<!-- Content -->
<div style="display:flex;min-height:200px">

<!-- Left sidebar -->
<div style="width:240px;border-right:1px solid rgba(255,255,255,0.06);background:#050505;padding:16px">
<div style="font-size:10px;color:rgba(255,255,255,0.15);letter-spacing:1px;margin-bottom:12px">SKILL</div>

<div style="margin-bottom:12px">
<div style="font-size:10px;color:rgba(255,255,255,0.4);font-weight:700;letter-spacing:1px;margin-bottom:4px">NAME</div>
<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:4px;padding:5px 8px;font-size:11px;color:rgba(255,255,255,0.5)">code-review-guidelines</div>
<div style="font-size:10px;color:rgba(255,255,255,0.2);margin-top:4px">Max 64 characters</div>
</div>

<div style="margin-bottom:12px">
<div style="font-size:10px;color:rgba(255,255,255,0.4);font-weight:700;letter-spacing:1px;margin-bottom:4px">DESCRIPTION</div>
<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:4px;padding:5px 8px;font-size:11px;color:rgba(255,255,255,0.4);min-height:80px;line-height:1.5">Standards and patterns for reviewing pull requests in our codebase</div>
<div style="font-size:10px;color:rgba(255,255,255,0.15);margin-top:4px">62 / 1024</div>
</div>

<div style="border-top:1px solid rgba(255,255,255,0.04);padding-top:12px;margin-bottom:12px">
<div style="font-size:10px;color:rgba(255,255,255,0.15);letter-spacing:1px;margin-bottom:8px">INFO</div>
<div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px"><span style="color:rgba(255,255,255,0.2)">Lines</span><span style="color:rgba(255,255,255,0.4)">47</span></div>
<div style="display:flex;justify-content:space-between;font-size:12px"><span style="color:rgba(255,255,255,0.2)">Characters</span><span style="color:rgba(255,255,255,0.4)">1,842</span></div>
</div>

<div style="border-top:1px solid rgba(255,255,255,0.04);padding-top:12px">
<div style="font-size:10px;color:rgba(255,255,255,0.15);letter-spacing:1px;margin-bottom:8px">SKILL FILES</div>
<div style="font-size:11px;color:rgba(255,255,255,0.25);line-height:1.5">Drag and drop auxiliary files — scripts, references, assets.</div>
</div>
</div>

<!-- Right editor pane -->
<div style="flex:1;display:flex;flex-direction:column">
<div style="padding:8px 16px;border-bottom:1px solid rgba(255,255,255,0.04);background:#070707;display:flex;align-items:center;gap:8px">
<span style="font-size:10px;color:rgba(255,255,255,0.15);letter-spacing:1px">SKILL BODY</span>
<span style="font-size:10px;color:rgba(255,255,255,0.2)">--</span>
<span style="font-size:10px;color:rgba(255,255,255,0.2)">Markdown supported</span>
</div>
<div style="flex:1;padding:12px 16px;font-size:12px;color:rgba(255,255,255,0.4);line-height:1.8;background:#0d0d0d">
<span style="color:rgba(255,255,255,0.15)">1</span>  <span style="color:rgba(129,140,248,0.5)"># Code Review Standards</span><br/>
<span style="color:rgba(255,255,255,0.15)">2</span><br/>
<span style="color:rgba(255,255,255,0.15)">3</span>  <span style="color:rgba(255,255,255,0.35)">When reviewing code, follow these principles:</span><br/>
<span style="color:rgba(255,255,255,0.15)">4</span><br/>
<span style="color:rgba(255,255,255,0.15)">5</span>  <span style="color:rgba(255,255,255,0.35)">- Check for proper error handling</span><br/>
<span style="color:rgba(255,255,255,0.15)">6</span>  <span style="color:rgba(255,255,255,0.35)">- Verify input validation</span><br/>
<span style="color:rgba(255,255,255,0.15)">7</span>  <span style="color:rgba(255,255,255,0.35)">- Ensure test coverage for new logic</span>
</div>
</div>

</div>

<!-- Status bar -->
<div style="display:flex;align-items:center;justify-content:space-between;padding:4px 16px;border-top:1px solid rgba(255,255,255,0.06);background:#050505;font-size:10px;color:rgba(255,255,255,0.2)">
<div style="display:flex;align-items:center;gap:6px">
<span style="width:6px;height:6px;border-radius:50%;background:rgba(52,211,153,0.7)"></span>
<span>Ready</span>
</div>
<div style="display:flex;gap:16px">
<span>Ln 7, Col 1</span>
<span>38 words</span>
<span>1,842 chars</span>
<span>Markdown</span>
</div>
</div>

</div>

### Skill Studio features

| Area | Details |
|---|---|
| **Top bar** | Brain icon, name breadcrumb, ACTIVE badge (when skill is enabled), Cancel and Save buttons |
| **Left sidebar** | Name (max 64 characters), Description (max 1,024 characters with counter), document stats (lines, characters) |
| **Skill Files** | Drag-and-drop area for auxiliary files — scripts, references, assets. Available after the skill is created. Storage limits are plan-dependent |
| **Editor** | Full Monaco editor with syntax highlighting, line numbers, and minimap. Supports markdown |
| **Status bar** | Ready/Saving indicator, line/column position, word count, character count |
| **Frontmatter** | If you paste content with YAML frontmatter (name/description fields), the editor auto-extracts them into the sidebar fields |

::: tip Skills vs Tools
**Tools** map 1:1 to HTTP endpoints. They have methods, paths, and generate API calls.
**Skills** are knowledge documents. They provide context — guidelines, runbooks, decision frameworks — that the AI model can reference during conversations. Use skills for everything that is not a direct API call.
:::

---

## Real-time propagation

Tool and skill changes propagate to connected AI clients automatically through two mechanisms:

| Event | Trigger | Effect |
|---|---|---|
| **`mcp:tools-changed`** | Toggle, edit annotations, update description | Connected clients receive a `notifications/tools/list_changed` event and refresh their tool list |
| **`mcp:invalidate`** | Add or delete a tool | Active SSE connections are fully re-established with the updated tool set |

This means you can adjust tool availability, descriptions, and annotations in production without requiring clients to reconnect or restart.

---

## Next steps

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:32px 0">

<a href="/servers/deployments" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(129,140,248,0.12);border-radius:8px;background:rgba(129,140,248,0.02)">
<span style="font-size:11px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:600">EDGE</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Edge Deployments</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Deploy tools to the V8 edge runtime.</div>
<span style="font-size:13px;color:rgba(129,140,248,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Configure →</span>
</a>

<a href="/deploy-agent-skills" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(139,92,246,0.12);border-radius:8px;background:rgba(139,92,246,0.02)">
<span style="font-size:11px;color:rgba(139,92,246,0.5);letter-spacing:2px;font-weight:600">GUIDE</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Agent Skills Guide</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Learn how to write effective skills.</div>
<span style="font-size:13px;color:rgba(139,92,246,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Read →</span>
</a>

</div>

---

## Frequently Asked Questions

### Can I disable a tool without deleting it?
Yes. Each tool has an individual toggle. When disabled, the tool is excluded from `tools/list` responses and cannot be called by AI clients. The configuration, description, annotations, and system rules are preserved. Re-enable it with a single click.

### What are MCP tool annotations and why do they matter?
Annotations are behavioral hints that tell AI clients how a tool operates: Read Only (no side effects), Destructive (irreversible changes), Idempotent (safe to retry), and Return Direct (output goes straight to the user). AI clients use these annotations to make safety decisions — automatically approving read-only calls while requiring confirmation for destructive operations.

### Can I customize tool descriptions without modifying my API?
Yes. The tool editor lets you override the auto-generated OpenAPI description with a human-written one. A well-written description directly improves how accurately the AI model selects and uses the tool. You can always reset to the original description with one click.

### What are Agent Skills and how are they different from tools?
Tools map 1:1 to HTTP endpoints and generate API calls. Skills are markdown-based knowledge documents — guidelines, runbooks, and decision frameworks — that the AI model can reference during conversations. Skills extend your MCP server's capabilities beyond API tools without requiring custom code.

### Do tool changes propagate to connected AI clients automatically?
Yes. When you toggle, edit annotations, or update descriptions, connected clients receive a `notifications/tools/list_changed` event and refresh their tool list. When you add or delete a tool, active SSE connections are fully re-established with the updated tool set. No client restart required.

### What cache control options are available per tool?
Three options: None (clients decide), no-store (prevents caching — use for real-time data like balances or live status), and immutable (permanently cacheable — use for static data like schemas, enums, or configurations).
