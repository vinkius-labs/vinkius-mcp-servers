---
title: MCP Defaults — Tool Grouping, TOON Compression & Response Presenters | Vinkius Cloud
description: Configure how MCP tools are exposed to AI clients. Set tool grouping mode (Flat, Grouped, Auto), enable TOON token compression for 30-50% savings, and activate Response Presenters for cleaner AI model input.
head:
  - - meta
    - name: keywords
      content: MCP tool grouping, TOON compression, AI token optimization, MCP response presenters, context window management, MCP server defaults
  - - meta
    - property: og:title
      content: MCP Defaults — Tool Grouping & TOON Compression | Vinkius Cloud
  - - meta
    - property: og:description
      content: Configure tool grouping mode, enable TOON compression for 30-50% token savings, and activate Response Presenters for cleaner AI model input.
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does Tool Grouping do?","acceptedAnswer":{"@type":"Answer","text":"Tool Grouping controls how MCP tools are presented to AI clients. For large APIs, grouping collapses related tools into navigable categories, reducing context window overhead by an order of magnitude."}},{"@type":"Question","name":"Which Tool Grouping mode should I use?","acceptedAnswer":{"@type":"Answer","text":"Use Auto (default) for most APIs. It keeps tools flat under the threshold (default: 20) and automatically groups above it. Use Flat for small APIs, Grouped for manual control."}},{"@type":"Question","name":"How much does TOON compression save?","acceptedAnswer":{"@type":"Answer","text":"TOON reduces token consumption by 30-50% per request by rewriting verbose JSON schema definitions into compact tabular format."}},{"@type":"Question","name":"Is TOON compression compatible with all AI models?","acceptedAnswer":{"@type":"Answer","text":"TOON works with Claude 3.5+, GPT-4, and Gemini 2.0+. Older models may behave unpredictably. Test before enabling in production."}},{"@type":"Question","name":"What are Response Presenters?","acceptedAnswer":{"@type":"Answer","text":"Response Presenters transform raw API responses into structured, AI-optimized formats by stripping pagination cursors, metadata wrappers, and deeply nested objects."}},{"@type":"Question","name":"Do MCP Defaults apply to existing servers?","acceptedAnswer":{"@type":"Answer","text":"No. These are creation-time defaults. Existing servers keep their current settings. You can update individual servers from their detail page."}}]}'
---

# MCP Defaults

Platform-wide defaults for how tools are exposed to AI clients. These settings apply to every new server — individual servers can override them.

Access via **Settings → MCP Settings** in Vinkius Cloud.

---

## Tool Grouping

When you deploy an API with 30, 50, or 100+ endpoints, each endpoint becomes an MCP tool. This creates a problem: AI models have limited context windows, and listing all tools at once consumes a significant portion of that budget — sometimes leaving too little room for the actual conversation.

Tool Grouping solves this by collapsing related tools into navigable groups. Instead of seeing 50 individual tools, the AI model sees 5 groups and drills into the one it needs.

<!-- Tool Grouping UI recreation -->
<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#09090f;padding:20px;font-family:ui-monospace,monospace">
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

### Modes

| Mode | Behavior | When to use |
|---|---|---|
| **Flat** | Every endpoint is its own MCP tool | APIs with fewer than 20 endpoints |
| **Grouped** | Tools are always collapsed by tag | APIs where you want to control discoverability |
| **Auto** (default) | Flat below the threshold, grouped above it | Most APIs — the platform adapts automatically |

The **grouping threshold** (default: 20) controls when Auto mode switches from flat to grouped. Lower it if your AI model has a small context window; raise it if you want tools always visible.

---

## TOON Token Compression

TOON (Tool Object Optimized Notation) is a compression protocol that rewrites tool descriptions and response payloads into a compact tabular format. In benchmarks, this reduces token consumption by **30-50%** per request without losing information.

Instead of verbose JSON schema definitions, TOON encodes tools as structured tables that modern language models parse natively. The AI model receives the same semantic information in fewer tokens.

<!-- TOON toggle recreation -->
<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#09090f;padding:20px;font-family:ui-monospace,monospace">
<span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TOKEN COMPRESSION</span>
<div style="font-size:10px;color:rgba(255,255,255,0.4);margin-top:6px;font-family:Inter,sans-serif">TOON compresses tool descriptions into compact tabular format, reducing context window usage by ~30-50%.</div>
<div style="margin-top:12px;display:flex;align-items:center;gap:10px">
<div style="width:14px;height:14px;border-radius:3px;border:1.5px solid rgba(255,255,255,0.15)"></div>
<span style="font-size:11px;color:#fff;font-weight:500;font-family:Inter,sans-serif">Enable TOON compression</span>
</div>
<div style="font-size:9px;color:rgba(255,255,255,0.2);margin-top:6px;font-family:Inter,sans-serif">Works best with GPT-4, Claude 3.5+ and Gemini 2.0+.</div>
</div>

::: tip Compatibility
TOON works with Claude 3.5+, GPT-4, and Gemini 2.0+. Older models or clients that expect raw JSON schemas may behave unpredictably — test before enabling in production.
:::

---

## Response Presenters

Response Presenters transform raw API responses into structured, AI-optimized formats. When an API returns deeply nested JSON with metadata, pagination cursors, and wrapper objects, Presenters extract the useful data and flatten it into a format that models reason about more effectively.

The result: higher-quality AI responses because the model receives cleaner input. Disable only if your AI client expects unprocessed responses.

---

## Next steps

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:32px 0">

<a href="/settings/dlp" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(52,211,153,0.12);border-radius:8px;background:rgba(52,211,153,0.02)">
<span style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:600">DLP</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Data Shielding</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Global PII redaction patterns.</div>
<span style="font-size:13px;color:rgba(52,211,153,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Configure →</span>
</a>

<a href="/settings/finops" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(245,158,11,0.12);border-radius:8px;background:rgba(245,158,11,0.02)">
<span style="font-size:11px;color:rgba(245,158,11,0.5);letter-spacing:2px;font-weight:600">FINOPS</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">FinOps Guard</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Response limits and cost control.</div>
<span style="font-size:13px;color:rgba(245,158,11,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Configure →</span>
</a>

</div>

---

## Frequently Asked Questions

### What does Tool Grouping do?
Tool Grouping controls how your MCP tools are presented to AI clients. For large APIs (30+ endpoints), listing every tool individually consumes a significant portion of the AI model's context window. Grouping collapses related tools into navigable categories, reducing context overhead by an order of magnitude.

### Which Tool Grouping mode should I use?
Use Auto (the default) for most APIs. It keeps tools flat when you have fewer than the threshold (default: 20) and automatically groups them above that number. Use Flat for small APIs under 20 tools, and Grouped when you want to manually control tool discoverability.

### How much does TOON compression save?
In benchmarks, TOON reduces token consumption by 30-50% per request. It rewrites verbose JSON schema definitions into compact tabular format that modern language models parse natively — the AI model receives the same semantic information in fewer tokens.

### Is TOON compression compatible with all AI models?
TOON works reliably with Claude 3.5+, GPT-4, and Gemini 2.0+. Older models or clients that expect raw JSON schemas may behave unpredictably. Always test in your environment before enabling in production.

### What are Response Presenters?
Response Presenters transform raw API responses into structured, AI-optimized formats. They strip pagination cursors, metadata wrappers, and deeply nested objects — delivering cleaner input that improves the quality of AI model reasoning. Disable only if your client expects unprocessed responses.

### Do MCP Defaults apply to existing servers?
No. These are creation-time defaults. Existing servers keep their current settings. You can update individual servers from their detail page at any time.
