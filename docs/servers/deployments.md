---
title: Edge Deployments — Deploy MCP Servers to V8 Isolate Runtime | Vinkius Cloud
description: Deploy MCP servers to V8 Isolate edge runtime with the Vurb.ts framework. View deployment history, SHA-256 bundle hashes, deduplication, and post-deploy invalidation — zero infrastructure to manage.
head:
  - - meta
    - name: keywords
      content: MCP edge deployment, Vurb.ts deploy, V8 isolate MCP, MCP server deploy CLI, MCP deployment history, edge runtime MCP
  - - meta
    - property: og:title
      content: Edge Deployments — Deploy MCP Servers to V8 Runtime | Vinkius Cloud
  - - meta
    - property: og:description
      content: Deploy MCP servers to V8 Isolate edge runtime with Vurb.ts. View deployment history, SHA-256 hashes, deduplication, and post-deploy invalidation.
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I deploy an MCP server with Vurb.ts?","acceptedAnswer":{"@type":"Answer","text":"Three steps: (1) Run vurb remote --server-id to link your project, (2) Add your connection token to .env as VURB_DEPLOY_TOKEN, (3) Run vurb deploy. The CLI compiles, uploads, and activates your bundle on the V8 edge runtime."}},{"@type":"Question","name":"What happens when I deploy a duplicate bundle?","acceptedAnswer":{"@type":"Answer","text":"If the SHA-256 hash matches a previous deployment, the system restores the existing snapshot instead of creating a duplicate. The terminal shows Restored previous deployment and the status is restored."}},{"@type":"Question","name":"How large can a deployment bundle be?","acceptedAnswer":{"@type":"Answer","text":"Maximum 512KB raw JavaScript (750KB compressed). Vurb.ts compiles your project into a single V8-compatible bundle that is gzipped before upload."}},{"@type":"Question","name":"Do connected AI clients need to reconnect after a deployment?","acceptedAnswer":{"@type":"Answer","text":"No. After deployment, all connection tokens are invalidated via mcp:invalidate. The runtime boots the new bundle on the next client connection. SSE connections re-establish automatically."}},{"@type":"Question","name":"What authentication is required for deployments?","acceptedAnswer":{"@type":"Answer","text":"Deployments use the same connection tokens as MCP connections. Include the token in the Authorization: Bearer header. No separate deploy key is required."}},{"@type":"Question","name":"Can I see the deployment history?","acceptedAnswer":{"@type":"Answer","text":"Yes. The Deployments tab shows all deployments in reverse chronological order with the active deployment marked by a green dot. Each entry shows timestamp, SHA-256 hash, bundle size, and relative time."}}]}'
---

# Edge Deployments

The Deployments tab tracks the history of Vurb.ts framework deployments to your server. Each deployment is an immutable snapshot — a V8-compatible JavaScript bundle deployed to the edge runtime, identified by its SHA-256 hash, size, and timestamp.

Most MCP platforms require you to host your own server infrastructure or rely on generic container services. Vinkius Cloud provides a built-in edge deployment pipeline: write your MCP tools with the Vurb.ts framework, run `vurb deploy`, and the bundle is deployed to a V8 isolate runtime at the edge — zero infrastructure to manage.

---

## Vurb.ts banner

At the top of the Deployments tab, an educational banner introduces the Vurb.ts open-source framework:

<!-- Vurb.ts banner UI recreation -->
<div style="margin:24px 0;padding:24px 0 20px;border-bottom:1px solid rgba(255,255,255,0.06);font-family:ui-monospace,monospace">

<div style="display:flex;align-items:center;gap:8px;margin-bottom:16px">
<span style="width:6px;height:6px;border-radius:50%;background:#8B5CF6;box-shadow:0 0 6px rgba(139,92,246,0.6)"></span>
<span style="font-size:11px;font-weight:700;letter-spacing:2px;color:#8B5CF6">OPEN-SOURCE FRAMEWORK</span>
</div>

<div style="font-size:28px;font-weight:900;color:#fff;letter-spacing:-0.02em;line-height:1.08">
Build. Deploy. <span style="color:#8B5CF6">Perceive.</span>
</div>

<div style="font-size:13px;color:rgba(255,255,255,0.35);margin-top:12px;max-width:520px;line-height:1.6;font-family:Inter,sans-serif">
Vurb.ts is an open-source TypeScript framework for building production MCP servers with structured routing, presenters, middleware, and built-in security.
</div>

<div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:12px">
<span style="padding:2px 8px;font-size:10px;color:rgba(255,255,255,0.25);background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06)">Structured Routing</span>
<span style="padding:2px 8px;font-size:10px;color:rgba(255,255,255,0.25);background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06)">Presenters</span>
<span style="padding:2px 8px;font-size:10px;color:rgba(255,255,255,0.25);background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06)">SSRF & DLP Security</span>
<span style="padding:2px 8px;font-size:10px;color:rgba(255,255,255,0.25);background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06)">Anti-Hallucination</span>
</div>

</div>

The banner is dismissible and includes direct links to the [Vurb.ts documentation](https://vurb.vinkius.com/) and the [GitHub repository](https://github.com/vinkius-labs/vurb.ts).

---

## Deployment history

Deployments are listed in reverse chronological order. The active deployment is marked with a green indicator:

<!-- Deployments table UI recreation -->
<div style="margin:24px 0;font-family:ui-monospace,monospace">

<div style="font-size:9px;color:rgba(139,92,246,0.5);letter-spacing:2px;font-weight:600;margin-bottom:12px">EDGE DEPLOYMENTS</div>

<div style="border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#020202">

<!-- Header -->
<div style="display:flex;gap:0;padding:6px 16px;font-size:11px;color:rgba(255,255,255,0.2);border-bottom:1px solid rgba(255,255,255,0.06)">
<span style="width:40px;flex-shrink:0"></span>
<span style="width:140px;flex-shrink:0">DEPLOYED</span>
<span style="flex:1">HASH</span>
<span style="width:80px;text-align:right">SIZE</span>
<span style="width:90px;text-align:right">AGO</span>
</div>

<!-- Active row -->
<div style="display:flex;gap:0;padding:8px 16px;font-size:12px;border-bottom:1px solid rgba(255,255,255,0.03)">
<span style="width:40px;flex-shrink:0;text-align:center"><span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:rgba(52,211,153,0.7)"></span></span>
<span style="width:140px;flex-shrink:0;color:rgba(255,255,255,0.6)">Mar 14, 16:42</span>
<span style="flex:1;color:rgba(255,255,255,0.5)">a3b8d1e7f9c2</span>
<span style="width:80px;text-align:right;color:rgba(255,255,255,0.3)">12.4KB</span>
<span style="width:90px;text-align:right;color:rgba(255,255,255,0.2)">2h ago</span>
</div>

<!-- Previous row -->
<div style="display:flex;gap:0;padding:8px 16px;font-size:12px;border-bottom:1px solid rgba(255,255,255,0.03)">
<span style="width:40px;flex-shrink:0"></span>
<span style="width:140px;flex-shrink:0;color:rgba(255,255,255,0.25)">Mar 13, 09:15</span>
<span style="flex:1;color:rgba(255,255,255,0.2)">c5d9e3f7a1b4</span>
<span style="width:80px;text-align:right;color:rgba(255,255,255,0.3)">11.8KB</span>
<span style="width:90px;text-align:right;color:rgba(255,255,255,0.2)">1d ago</span>
</div>

<!-- Older row -->
<div style="display:flex;gap:0;padding:8px 16px;font-size:12px">
<span style="width:40px;flex-shrink:0"></span>
<span style="width:140px;flex-shrink:0;color:rgba(255,255,255,0.25)">Mar 10, 14:03</span>
<span style="flex:1;color:rgba(255,255,255,0.2)">e7f1a2b3c4d5</span>
<span style="width:80px;text-align:right;color:rgba(255,255,255,0.3)">10.2KB</span>
<span style="width:90px;text-align:right;color:rgba(255,255,255,0.2)">4d ago</span>
</div>

<!-- Footer -->
<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 16px;font-size:10px;color:rgba(255,255,255,0.12)">
<span>3 DEPLOYMENTS</span>
<div style="display:flex;align-items:center;gap:6px">
<span style="color:rgba(255,255,255,0.1)">&#x25C0;</span>
<span style="color:rgba(255,255,255,0.25)">1/1</span>
<span style="color:rgba(255,255,255,0.1)">&#x25B6;</span>
</div>
</div>

</div>
</div>

### Table columns

| Column | Description |
|---|---|
| **Active** | Green dot — the currently live deployment. Only one deployment is active at a time |
| **Deployed** | Timestamp in `MMM DD, HH:mm` format |
| **Hash** | First 12 characters of the SHA-256 bundle hash |
| **Size** | Raw bundle size before compression (displayed in KB) |
| **Ago** | Relative timestamp — `just now`, `3h ago`, `2d ago` |

### Pagination

Deployment history is paginated at 15 records per page. Navigation controls at the bottom show page position and forward/back arrows.

---

## Getting started

When no deployments exist, the tab displays an inline getting-started guide with pre-filled commands specific to your server:

<!-- Getting started UI recreation -->
<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#020202;font-family:ui-monospace,monospace;padding:24px">

<div style="font-size:12px;color:rgba(255,255,255,0.35);margin-bottom:16px">No deployments yet. Get started with Vurb.ts:</div>

<!-- Step 1 -->
<div style="margin-bottom:12px">
<div style="font-size:11px;color:rgba(255,255,255,0.2);margin-bottom:6px">Step 1 — Link your project</div>
<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);padding:6px 12px;font-size:12px;color:rgba(6,182,212,0.5)">vurb remote --server-id abc123-def456</div>
</div>

<!-- Step 2 -->
<div style="margin-bottom:12px">
<div style="font-size:11px;color:rgba(255,255,255,0.2);margin-bottom:6px">Step 2 — Add token to <span style="color:rgba(255,255,255,0.25)">.env</span></div>
<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);padding:6px 12px;font-size:12px;color:rgba(6,182,212,0.5)">VURB_DEPLOY_TOKEN=your-connection-token</div>
</div>

<!-- Step 3 -->
<div style="margin-bottom:16px">
<div style="font-size:11px;color:rgba(255,255,255,0.2);margin-bottom:6px">Step 3 — Deploy</div>
<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);padding:6px 12px;font-size:12px;color:rgba(6,182,212,0.5)">vurb deploy</div>
</div>

<div style="font-size:10px;color:rgba(255,255,255,0.1);display:flex;gap:16px">
<span>EDGE_DEPLOY</span>
<span style="color:rgba(255,255,255,0.15)">Vurb.ts Framework</span>
</div>

</div>

The `server-id` is pre-filled with your actual server ID, so you can copy the command directly from the UI.

---

## Terminal output

After running `vurb deploy`, the CLI compiles your project, uploads the bundle, and displays the deploy result:

<!-- Terminal output recreation -->
<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#0c0c0c;font-family:ui-monospace,monospace;padding:16px 20px;font-size:12px;line-height:1.8">
<span style="color:rgba(255,255,255,0.25)">$</span> <span style="color:rgba(255,255,255,0.6)">vurb deploy</span><br/>
<br/>
<span style="color:rgba(139,92,246,0.6)">⠋</span> <span style="color:rgba(255,255,255,0.35)">Compiling bundle...</span><br/>
<span style="color:rgba(139,92,246,0.6)">⠋</span> <span style="color:rgba(255,255,255,0.35)">Uploading to edge...</span><br/>
<br/>
<span style="color:rgba(52,211,153,0.8)">✓</span> <span style="color:rgba(255,255,255,0.7);font-weight:600">Deployed successfully</span><br/>
<br/>
<span style="color:rgba(255,255,255,0.2)">  server</span>     <span style="color:rgba(255,255,255,0.5)">my-api-server</span><br/>
<span style="color:rgba(255,255,255,0.2)">  url</span>        <span style="color:rgba(52,211,153,0.6)">https://edge.vinkius.com/vk_a3b.../mcp</span><br/>
<span style="color:rgba(255,255,255,0.2)">  deployed</span>   <span style="color:rgba(255,255,255,0.4)">2025-03-14T16:42:00+00:00</span><br/>
<span style="color:rgba(255,255,255,0.2)">  cache</span>      <span style="color:rgba(52,211,153,0.5)">invalidated</span><br/>
</div>

The API response includes:

| Field | Value |
|---|---|
| **status** | `deployed` for new bundles, `restored` when the hash matches a previous deployment |
| **server_name** | Name of the target server |
| **url** | Full MCP endpoint URL ready for AI clients |
| **deployed_at** | ISO 8601 timestamp |
| **cache_invalidated** | `true` when all connected clients were notified to refresh |

::: tip Restored deployments
If you deploy a bundle identical to a previous one, the system restores the existing snapshot instead of creating a duplicate. The terminal shows `Restored previous deployment` and the status is `restored`.
:::

---

## After deploying

When `vurb deploy` completes, the deployment appears in the history table and the new bundle immediately becomes the active version. If you deployed through the server creation wizard, a success screen guides you through connecting your first AI client:

<!-- Post-deploy success UI recreation -->
<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;background:#0a0a0a;font-family:ui-monospace,monospace">

<!-- Header -->
<div style="padding:24px 24px 0">
<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px">
<span style="width:6px;height:6px;border-radius:50%;background:rgba(52,211,153,0.7)"></span>
<span style="font-size:10px;letter-spacing:2px;color:rgba(52,211,153,0.7)">SERVER DEPLOYED</span>
</div>
<div style="font-size:28px;font-weight:900;color:#fff;letter-spacing:-0.03em">my-api-server <span style="color:rgba(255,255,255,0.4);font-weight:400">is Live</span></div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:8px;font-family:Inter,sans-serif;font-weight:300;line-height:1.5">Your server is deployed and ready to accept connections. Configure your AI client below.</div>
</div>

<!-- Token section -->
<div style="margin:20px 24px;padding:16px 0;border-top:1px solid rgba(255,255,255,0.08);border-bottom:1px solid rgba(255,255,255,0.08)">
<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px">
<span style="color:rgba(245,158,11,0.8);font-size:12px">&#x1F512;</span>
<span style="font-size:11px;font-weight:700;letter-spacing:1.5px;color:rgba(245,158,11,0.8)">CONNECTION TOKEN</span>
</div>
<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);padding:6px 12px;font-size:12px;color:rgba(52,211,153,0.7);margin-bottom:8px;display:flex;align-items:center;justify-content:space-between">
<span>vk_a3b8d1e7f9c2...4f5a</span>
<span style="font-size:10px;color:rgba(255,255,255,0.15)">Copy</span>
</div>
<div style="font-size:11px;color:rgba(245,158,11,0.6);display:flex;align-items:center;gap:4px">
<span>&#x26A0;</span> This token is shown only once. Copy it now.
</div>
<div style="font-size:10px;color:rgba(255,255,255,0.2);margin-top:4px">The token cannot be retrieved later. Generate a new one from the Tokens tab if needed.</div>
</div>

<!-- Action buttons -->
<div style="display:flex;gap:8px;padding:0 24px;margin-bottom:16px">
<div style="flex:1;padding:8px;text-align:center;font-size:11px;color:rgba(255,255,255,0.7);background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:4px">Copy Config JSON</div>
<div style="flex:1;padding:8px;text-align:center;font-size:11px;color:rgba(255,255,255,0.7);background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:4px">Download mcp.json</div>
</div>

<!-- Config preview -->
<div style="margin:0 24px 16px;background:#030303;border:1px solid rgba(255,255,255,0.08);padding:12px;font-size:11px;color:rgba(255,255,255,0.4);line-height:1.6">
{<br/>
&nbsp;&nbsp;"mcpServers": {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;"my-api-server": {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://edge.vinkius.com/vk_a3b.../mcp"<br/>
&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
&nbsp;&nbsp;}<br/>
}
</div>

<!-- Client tabs -->
<div style="display:flex;border-bottom:1px solid rgba(255,255,255,0.08);padding:0 24px">
<span style="flex:1;text-align:center;padding:8px 0;font-size:11px;letter-spacing:1px;color:rgba(255,255,255,0.7);border-bottom:2px solid #fff;background:rgba(255,255,255,0.04)">CLAUDE</span>
<span style="flex:1;text-align:center;padding:8px 0;font-size:11px;letter-spacing:1px;color:rgba(255,255,255,0.3)">CURSOR</span>
<span style="flex:1;text-align:center;padding:8px 0;font-size:11px;letter-spacing:1px;color:rgba(255,255,255,0.3)">VS CODE</span>
<span style="flex:1;text-align:center;padding:8px 0;font-size:11px;letter-spacing:1px;color:rgba(255,255,255,0.3)">ANTIGRAVITY</span>
<span style="flex:1;text-align:center;padding:8px 0;font-size:11px;letter-spacing:1px;color:rgba(255,255,255,0.3)">OTHERS</span>
</div>

<!-- Tab content -->
<div style="padding:16px 24px">
<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px">
<span style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.25)">01</span>
<span style="font-size:11px;letter-spacing:1px;color:rgba(255,255,255,0.35)">OPEN CONFIG FILE</span>
</div>
<div style="display:flex;gap:0;margin-bottom:8px">
<span style="padding:4px 8px;font-size:10px;color:rgba(255,255,255,0.3);letter-spacing:1px;border:1px solid rgba(255,255,255,0.06)">WINDOWS</span>
<span style="padding:4px 8px;font-size:10px;color:rgba(255,255,255,0.7);letter-spacing:1px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.06)">MACOS</span>
<span style="padding:4px 8px;font-size:10px;color:rgba(255,255,255,0.3);letter-spacing:1px;border:1px solid rgba(255,255,255,0.06)">LINUX</span>
</div>
<div style="background:#030303;border:1px solid rgba(255,255,255,0.08);padding:6px 12px;font-size:11px;color:rgba(255,255,255,0.4);margin-bottom:16px">~/Library/Application Support/Claude/claude_desktop_config.json</div>

<div style="display:flex;align-items:center;gap:6px;margin-bottom:6px">
<span style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.25)">02</span>
<span style="font-size:11px;letter-spacing:1px;color:rgba(255,255,255,0.35)">PASTE AND SAVE</span>
</div>
<div style="font-size:12px;color:rgba(255,255,255,0.25);line-height:1.5;font-family:Inter,sans-serif">Merge the JSON config above into your existing file and restart Claude Desktop.</div>
</div>

<!-- Footer -->
<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 24px;border-top:1px solid rgba(255,255,255,0.08)">
<span style="font-size:11px;color:rgba(255,255,255,0.3);display:flex;align-items:center;gap:4px">&#x26A1; Deploy Another</span>
<span style="padding:6px 16px;font-size:11px;color:#000;background:rgba(255,255,255,0.9);border-radius:4px;font-weight:600">View Servers →</span>
</div>

</div>

### What each client tab provides

| Tab | Content |
|---|---|
| **Claude** | OS selector (Windows, macOS, Linux) with the config file path for each platform, and instructions to merge the JSON |
| **Cursor** | One-click deep link (`cursor://...`) to install the server directly, plus manual SSE URL fallback |
| **VS Code** | SSE endpoint URL with step-by-step instructions (`Ctrl+Shift+P` → `MCP: Add Server` → select `HTTP (Server-Sent Events)`) |
| **Antigravity** | SSE endpoint URL with prompt instructions |
| **Others** | SSE endpoint URL with a list of additional supported clients: ChatGPT, Windsurf, Cline, Continue, Zed |

---

## Deploy pipeline

When `vurb deploy` executes, the following pipeline runs:

| Step | Detail |
|---|---|
| **Bundle** | Vurb.ts compiles your project into a single V8-compatible JavaScript bundle |
| **Compress** | The bundle is gzipped before upload (max 750KB compressed, 512KB raw) |
| **Hash** | A SHA-256 hash of the raw JavaScript is computed for integrity verification |
| **Upload** | The compressed bundle, hash, and raw size are sent to the deploy API |
| **Verify** | The server decompresses the bundle and verifies the hash matches the raw content |
| **Deduplicate** | If the hash matches a previous deployment, it is restored instead of creating a new entry |
| **Activate** | The new deployment becomes the active version |
| **Invalidate** | All connection tokens are invalidated via `mcp:invalidate` — the runtime disposes old V8 isolates and boots the new bundle on next client connection |

::: info Deduplication
If you deploy a bundle with the same hash as a previous deployment, the system restores the existing snapshot instead of creating a duplicate. The response status will be `restored` instead of `deployed`.
:::

---

## Authentication

Deployments are authenticated via connection tokens — the same tokens used for MCP connections. The deploy API uses the `mcp.auth` middleware:

- The token in the `Authorization: Bearer <token>` header must belong to the target server
- Revoking a token blocks all future deploys from that token
- No separate deploy key is required

---

## Post-deploy invalidation

After a successful deployment, all connection tokens for the server are invalidated via Redis `mcp:invalidate`. This triggers the runtime to:

1. Evict the cached server configuration
2. Dispose the old V8 isolate
3. Boot the new bundle on the next client connection

Connected AI clients experience a seamless transition — the SSE connection re-establishes automatically with the updated tool definitions from the new bundle.

---

## Next steps

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:32px 0">

<a href="/servers/tools" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(52,211,153,0.12);border-radius:8px;background:rgba(52,211,153,0.02)">
<span style="font-size:11px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:600">TOOLS</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">MCP Tools</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Manage tools and agent skills.</div>
<span style="font-size:13px;color:rgba(52,211,153,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Configure →</span>
</a>

<a href="/servers/logs" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<span style="font-size:11px;color:rgba(255,255,255,0.3);letter-spacing:2px;font-weight:600">AUDIT</span>
<div style="font-size:16px;color:rgba(255,255,255,0.85);font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Audit Logs</div>
<div style="font-size:14px;color:rgba(255,255,255,0.35);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Per-server request history.</div>
<span style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:12px;display:block;font-family:Inter,sans-serif">View logs →</span>
</a>

</div>

---

## Frequently Asked Questions

### How do I deploy an MCP server with Vurb.ts?
Three steps: (1) Run `vurb remote --server-id <your-server-id>` to link your project, (2) Add your connection token to `.env` as `VURB_DEPLOY_TOKEN`, (3) Run `vurb deploy`. The CLI compiles, uploads, and activates your bundle on the V8 edge runtime. The server-id is pre-filled in the dashboard for one-click copy.

### What happens when I deploy a duplicate bundle?
If the SHA-256 hash matches a previous deployment, the system restores the existing snapshot instead of creating a duplicate. The terminal shows "Restored previous deployment" and the status is `restored`. This prevents unnecessary deployment entries while preserving the deploy history.

### How large can a deployment bundle be?
Maximum 512KB raw JavaScript (750KB compressed). Vurb.ts compiles your project into a single V8-compatible bundle that is gzipped before upload. The SHA-256 hash is computed from the raw content for integrity verification.

### Do connected AI clients need to reconnect after a deployment?
No. After a successful deployment, all connection tokens are invalidated via `mcp:invalidate`. The runtime disposes old V8 isolates and boots the new bundle on the next client connection. Connected AI clients experience a seamless transition — the SSE connection re-establishes automatically.

### What authentication is required for deployments?
Deployments use the same connection tokens as MCP connections. Include the token in the `Authorization: Bearer` header. No separate deploy key is required. Revoking a token blocks all future deploys from that token.

### Can I see the deployment history?
Yes. The Deployments tab shows all deployments in reverse chronological order with the active deployment marked by a green dot. Each entry shows the timestamp, first 12 characters of the SHA-256 hash, raw bundle size, and relative time since deployment. History is paginated at 15 records per page.
