---
title: "Connect MCP Server to Claude, Cursor & VS Code | Vinkius"
description: "Connect your MCP server to Claude Desktop, Cursor, VS Code, Windsurf, or any MCP-compatible AI client in seconds. One-click deep links and ready-to-paste config."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Claude, Cursor & VS Code | Vinkius"
  - - meta
    - property: og:description
      content: "Connect your MCP server to Claude Desktop, Cursor, VS Code, or any MCP-compatible AI client in seconds. One-click setup."
  - - meta
    - name: keywords
      content: "connect MCP server Claude, MCP Cursor setup, MCP VS Code configuration, MCP quick connect, MCP client setup, configure MCP Claude Desktop, MCP connection token"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I connect my MCP server to Claude Desktop?","acceptedAnswer":{"@type":"Answer","text":"Open Claude Desktop, go to Settings → Developer → Edit Config. Paste the Config JSON block provided by Vinkius Cloud into your claude_desktop_config.json file. Restart Claude Desktop — your tools are immediately available."}},{"@type":"Question","name":"Can I connect to Cursor without editing config files?","acceptedAnswer":{"@type":"Answer","text":"Yes. Vinkius Cloud generates a Cursor deep link for every server. Click it, and Cursor opens with the server pre-configured in your MCP settings. No manual JSON editing needed."}},{"@type":"Question","name":"What is a connection token and how is it secured?","acceptedAnswer":{"@type":"Answer","text":"A connection token is an HMAC-SHA256 signed credential that authenticates your AI client with a specific MCP server. Tokens are shown once at creation and can be revoked in under 40ms. Each token is scoped to a single server and user."}},{"@type":"Question","name":"Can I have multiple connection tokens for the same server?","acceptedAnswer":{"@type":"Answer","text":"Yes. You can create multiple tokens for a single server — useful for different team members, environments (dev, staging, production), or AI clients. Each token can be revoked independently."}},{"@type":"Question","name":"Which AI clients are supported?","acceptedAnswer":{"@type":"Answer","text":"Any MCP-compatible client works, including Claude Desktop, Claude Code, Cursor, VS Code with GitHub Copilot, Windsurf, Cline, OpenAI Codex, and any custom client implementing the Model Context Protocol."}},{"@type":"Question","name":"What MCP transport protocol does Vinkius Cloud use?","acceptedAnswer":{"@type":"Answer","text":"Vinkius Cloud uses the Streamable HTTP transport. The MCP URL follows the format https://mcp.vinkius.com/{TOKEN}/mcp, which works with all modern MCP clients that support HTTP-based transport."}}]}'
---

# Quick Connect

Quick Connect is the bridge between your deployed MCP server and the AI clients that consume it. Every server on Vinkius Cloud exposes a unique URL that works with any client supporting the Model Context Protocol — Claude, Cursor, VS Code, Windsurf, Cline, and any other MCP-compatible tool.

The connection is instant: generate a token, copy the URL, paste it into your client. No SDKs, no libraries, no handshake configuration.

---

<!-- Editorial break: One URL -->
<div style="margin:48px 0;padding:56px 40px;background:#09090f;border:1px solid rgba(255,255,255,0.05);border-radius:12px;position:relative;overflow:hidden">
<div style="position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(34,211,238,0.3),transparent)"></div>
<span style="font-size:9px;color:rgba(34,211,238,0.6);letter-spacing:3px;font-weight:700">ONE URL. ANY CLIENT.</span>
<div style="font-size:36px;color:#fff;font-weight:700;font-family:Inter,system-ui,sans-serif;letter-spacing:-1.5px;margin-top:12px;line-height:1.1">Your MCP server,<br><span style="color:rgba(255,255,255,0.25)">accessible everywhere.</span></div>
<div style="font-size:14px;color:rgba(255,255,255,0.4);margin-top:16px;max-width:540px;line-height:1.7;font-family:Inter,sans-serif">Every server gets a unique URL that encodes the server identity and authentication in a single string. Paste it into any MCP client and you're connected.</div>

<div style="margin-top:24px;padding:16px 20px;border:1px solid rgba(34,211,238,0.15);border-radius:8px;background:rgba(34,211,238,0.03);font-family:ui-monospace,monospace">
<div style="font-size:9px;color:rgba(34,211,238,0.4);letter-spacing:2px;margin-bottom:8px">MCP URL FORMAT</div>
<div style="font-size:14px;color:rgba(34,211,238,0.8);word-break:break-all">https://edge.vinkius.com/<span style="color:rgba(52,211,153,0.8)">{token}</span>/mcp</div>
</div>
</div>

## How it works

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:8px;overflow:hidden;background:#09090f;font-family:ui-monospace,monospace">
<div style="padding:12px 20px;border-bottom:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:space-between">
<div style="display:flex;align-items:center;gap:8px">
<span style="width:6px;height:6px;border-radius:50%;background:#22c55e;display:inline-block"></span>
<span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">QUICK CONNECT</span>
</div>
<span style="font-size:9px;color:rgba(255,255,255,0.15)">Swagger Petstore</span>
</div>
<div style="padding:16px 20px">
<div style="font-size:10px;color:rgba(255,255,255,0.3);margin-bottom:6px">MCP URL</div>
<div style="padding:8px 12px;border:1px solid rgba(129,140,248,0.2);border-radius:4px;background:rgba(255,255,255,0.02);font-size:10px;color:rgba(129,140,248,0.8);word-break:break-all">https://edge.vinkius.com/tok_xxxx/mcp</div>
<div style="font-size:10px;color:rgba(255,255,255,0.3);margin-top:16px;margin-bottom:6px">Config JSON</div>
<div style="padding:10px 12px;border:1px solid rgba(255,255,255,0.06);border-radius:4px;background:rgba(255,255,255,0.02);font-size:10px;color:rgba(255,255,255,0.5);line-height:1.6">{ "mcpServers": { "swagger-petstore": { "url": "https://edge.vinkius.com/tok_.../mcp" } } }</div>
<div style="display:flex;gap:8px;margin-top:16px">
<div style="padding:6px 14px;background:#fff;color:#000;font-size:9px;font-weight:600;letter-spacing:1px;border-radius:3px;display:inline-block">COPY URL</div>
<div style="padding:6px 14px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.5);font-size:9px;border:1px solid rgba(255,255,255,0.1);border-radius:3px;display:inline-block">OPEN IN CURSOR →</div>
</div>
</div>
</div>

The Quick Connect dialog — accessible from the server banner, the Dashboard, and the token generation success screen — gives you two things:

1. **MCP URL** — The full URL with your server ID and token embedded. Copy and paste it directly.
2. **Config JSON** — A ready-to-paste JSON block formatted for the standard `mcpServers` configuration format that most clients expect.

The dialog also includes a **Cursor deep link** button that opens Cursor directly and pre-fills the MCP configuration — zero manual pasting.

### Generating a connection token

Before you can connect, you need a token. Tokens authenticate AI clients and let you control access at a granular level.

1. Open your server's **Connection Tokens** tab.
2. Click **Generate Token** and enter a descriptive name (e.g., "Claude Desktop — Production").
3. The platform returns the plaintext token and the full MCP URL — **this is the only time the plaintext is visible**.
4. Copy the URL or use the Quick Connect dialog to configure your client.

::: warning Token visibility
The plaintext token is shown exactly once. If you lose it, revoke the token and generate a new one. This is a security measure — tokens are stored as hashes and cannot be retrieved after creation.
:::

---

<!-- Editorial break: Every client -->
<div style="margin:48px 0;padding:56px 40px;background:#09090f;border:1px solid rgba(255,255,255,0.05);border-radius:12px;position:relative;overflow:hidden">
<div style="position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(129,140,248,0.3),transparent)"></div>
<span style="font-size:9px;color:rgba(129,140,248,0.6);letter-spacing:3px;font-weight:700">CLIENT SETUP</span>
<div style="font-size:36px;color:#fff;font-weight:700;font-family:Inter,system-ui,sans-serif;letter-spacing:-1.5px;margin-top:12px;line-height:1.1">Works with every<br><span style="color:rgba(255,255,255,0.25)">MCP-compatible client.</span></div>
</div>

## Connecting AI clients

Each AI client has a slightly different configuration format, but the concept is universal: paste your MCP URL or Config JSON into the client's settings, and the connection is live. Below is the exact setup for every supported client.

<!-- Claude Desktop -->
<div style="margin:32px 0;border:1px solid rgba(255,255,255,0.08);border-radius:10px;overflow:hidden;background:#09090f">
<div style="padding:16px 24px;border-bottom:1px solid rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:space-between">
<div style="display:flex;align-items:center;gap:12px">
<div style="width:32px;height:32px;border-radius:8px;background:rgba(211,140,97,0.12);border:1px solid rgba(211,140,97,0.25);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:rgba(211,140,97,0.8);font-family:Inter,sans-serif">C</div>
<div>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Claude Desktop</div>
<span style="font-size:10px;color:rgba(255,255,255,0.25)">Anthropic · Desktop App</span>
</div>
</div>
<span style="font-size:8px;color:rgba(211,140,97,0.6);letter-spacing:2px;font-weight:600;padding:3px 10px;border:1px solid rgba(211,140,97,0.15);border-radius:4px">JSON CONFIG</span>
</div>
<div style="padding:20px 24px">
<div style="font-size:12px;color:rgba(255,255,255,0.4);line-height:1.7;font-family:Inter,sans-serif;margin-bottom:16px">Claude Desktop uses a JSON configuration file for MCP servers. Open settings, navigate to the MCP section, and add your server to the <code style="font-size:11px;color:rgba(129,140,248,0.7);background:rgba(129,140,248,0.08);padding:1px 6px;border-radius:3px">mcpServers</code> object:</div>
</div>
</div>

```json
{
  "mcpServers": {
    "your-server-name": {
      "url": "https://edge.vinkius.com/{token}/mcp"
    }
  }
}
```

Save and restart Claude Desktop. Your server's tools appear in Claude's tool picker — the model can now discover and call them during conversations.

::: tip Multiple servers
Add as many entries to `mcpServers` as you need. Each entry is a separate MCP server with its own URL and token. Claude lists all available tools from all connected servers in one unified picker.
:::

<!-- Cursor -->
<div style="margin:32px 0;border:1px solid rgba(255,255,255,0.08);border-radius:10px;overflow:hidden;background:#09090f">
<div style="padding:16px 24px;border-bottom:1px solid rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:space-between">
<div style="display:flex;align-items:center;gap:12px">
<div style="width:32px;height:32px;border-radius:8px;background:rgba(34,211,238,0.12);border:1px solid rgba(34,211,238,0.25);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:rgba(34,211,238,0.8);font-family:Inter,sans-serif">C</div>
<div>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Cursor</div>
<span style="font-size:10px;color:rgba(255,255,255,0.25)">Anysphere · AI IDE</span>
</div>
</div>
<span style="font-size:8px;color:rgba(34,211,238,0.6);letter-spacing:2px;font-weight:600;padding:3px 10px;border:1px solid rgba(34,211,238,0.15);border-radius:4px">DEEP LINK</span>
</div>
<div style="padding:20px 24px">
<div style="font-size:12px;color:rgba(255,255,255,0.4);line-height:1.7;font-family:Inter,sans-serif">Cursor has built-in MCP support and Vinkius Cloud generates a <strong style="color:rgba(34,211,238,0.7)">deep link</strong> on the deployment success screen. Click it to open Cursor, pre-fill the configuration, and save — zero manual editing required.</div>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-top:16px">
<div style="padding:12px;border:1px solid rgba(255,255,255,0.05);border-radius:6px;text-align:center">
<div style="font-size:16px;color:rgba(34,211,238,0.5);font-weight:700;font-family:Inter,sans-serif">01</div>
<div style="font-size:10px;color:rgba(255,255,255,0.3);margin-top:4px;font-family:Inter,sans-serif">Opens Cursor automatically</div>
</div>
<div style="padding:12px;border:1px solid rgba(255,255,255,0.05);border-radius:6px;text-align:center">
<div style="font-size:16px;color:rgba(34,211,238,0.5);font-weight:700;font-family:Inter,sans-serif">02</div>
<div style="font-size:10px;color:rgba(255,255,255,0.3);margin-top:4px;font-family:Inter,sans-serif">Pre-fills the server config</div>
</div>
<div style="padding:12px;border:1px solid rgba(255,255,255,0.05);border-radius:6px;text-align:center">
<div style="font-size:16px;color:rgba(34,211,238,0.5);font-weight:700;font-family:Inter,sans-serif">03</div>
<div style="font-size:10px;color:rgba(255,255,255,0.3);margin-top:4px;font-family:Inter,sans-serif">Saves to your workspace</div>
</div>
</div>
<div style="font-size:10px;color:rgba(255,255,255,0.2);margin-top:12px;font-family:Inter,sans-serif">Manual setup also supported — paste the same Config JSON format in Cursor's MCP settings.</div>
</div>
</div>

<!-- VS Code -->
<div style="margin:32px 0;border:1px solid rgba(255,255,255,0.08);border-radius:10px;overflow:hidden;background:#09090f">
<div style="padding:16px 24px;border-bottom:1px solid rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:space-between">
<div style="display:flex;align-items:center;gap:12px">
<div style="width:32px;height:32px;border-radius:8px;background:rgba(59,130,246,0.12);border:1px solid rgba(59,130,246,0.25);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:rgba(59,130,246,0.8);font-family:Inter,sans-serif">V</div>
<div>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif">VS Code</div>
<span style="font-size:10px;color:rgba(255,255,255,0.25)">Microsoft · GitHub Copilot</span>
</div>
</div>
<span style="font-size:8px;color:rgba(59,130,246,0.6);letter-spacing:2px;font-weight:600;padding:3px 10px;border:1px solid rgba(59,130,246,0.15);border-radius:4px">SETTINGS JSON</span>
</div>
<div style="padding:20px 24px">
<div style="font-size:12px;color:rgba(255,255,255,0.4);line-height:1.7;font-family:Inter,sans-serif;margin-bottom:16px">VS Code with GitHub Copilot supports MCP servers through the settings JSON. Add your server to the <code style="font-size:11px;color:rgba(59,130,246,0.7);background:rgba(59,130,246,0.08);padding:1px 6px;border-radius:3px">mcp.servers</code> section:</div>
</div>
</div>

```json
{
  "mcp": {
    "servers": {
      "your-server-name": {
        "url": "https://edge.vinkius.com/{token}/mcp"
      }
    }
  }
}
```

Reload VS Code. The tools become available to GitHub Copilot, which discovers and invokes them during chat and inline completions.

<!-- Windsurf + Cline + Others -->
<div style="margin:32px 0;display:grid;grid-template-columns:1fr 1fr;gap:12px">

<!-- Windsurf -->
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:10px;overflow:hidden;background:#09090f;padding:20px 24px">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
<div style="width:32px;height:32px;border-radius:8px;background:rgba(52,211,153,0.12);border:1px solid rgba(52,211,153,0.25);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:rgba(52,211,153,0.8);font-family:Inter,sans-serif">W</div>
<div>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Windsurf</div>
<span style="font-size:10px;color:rgba(255,255,255,0.25)">Codeium · AI IDE</span>
</div>
</div>
<div style="font-size:12px;color:rgba(255,255,255,0.4);line-height:1.7;font-family:Inter,sans-serif">Open Windsurf's MCP configuration, add a new server entry with your MCP URL, and save. Windsurf discovers available tools on the next connection.</div>
</div>

<!-- Cline -->
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:10px;overflow:hidden;background:#09090f;padding:20px 24px">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
<div style="width:32px;height:32px;border-radius:8px;background:rgba(192,132,252,0.12);border:1px solid rgba(192,132,252,0.25);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:rgba(192,132,252,0.8);font-family:Inter,sans-serif">C</div>
<div>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Cline</div>
<span style="font-size:10px;color:rgba(255,255,255,0.25)">Autonomous · VS Code Extension</span>
</div>
</div>
<div style="font-size:12px;color:rgba(255,255,255,0.4);line-height:1.7;font-family:Inter,sans-serif">Open Cline's settings panel, navigate to <strong style="color:rgba(255,255,255,0.5)">MCP Servers</strong>, and add the MCP URL. Cline discovers available tools automatically and lists them in the tool picker.</div>
</div>

</div>

<!-- Other clients strip -->
<div style="margin:16px 0 32px;padding:20px 24px;border:1px solid rgba(255,255,255,0.05);border-radius:10px;background:rgba(255,255,255,0.01)">
<div style="display:flex;align-items:center;gap:12px">
<div style="width:32px;height:32px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;font-size:14px;color:rgba(255,255,255,0.3);font-family:Inter,sans-serif">+</div>
<div>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Any MCP-compatible client</div>
<div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:2px;font-family:Inter,sans-serif">The connection uses <strong style="color:rgba(255,255,255,0.45)">Streamable HTTP</strong> over HTTPS. No WebSocket upgrades, no special transport layers, no additional SDKs — just paste the URL.</div>
</div>
</div>
</div>

---

<!-- Editorial break: Under the hood -->
<div style="margin:48px 0;padding:56px 40px;background:#09090f;border:1px solid rgba(255,255,255,0.05);border-radius:12px;position:relative;overflow:hidden">
<div style="position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(52,211,153,0.3),transparent)"></div>
<span style="font-size:9px;color:rgba(52,211,153,0.6);letter-spacing:3px;font-weight:700">UNDER THE HOOD</span>
<div style="font-size:36px;color:#fff;font-weight:700;font-family:Inter,system-ui,sans-serif;letter-spacing:-1.5px;margin-top:12px;line-height:1.1">How connections<br><span style="color:rgba(255,255,255,0.25)">actually work.</span></div>
</div>

## Connection architecture

When an AI client connects to your MCP server, the platform establishes a stateful session over Streamable HTTP. Here's what happens technically:

<!-- Architecture flow -->
<div style="margin:32px 0">

<div style="display:flex;align-items:flex-start;gap:20px;margin-bottom:24px;padding:20px 24px;border-left:2px solid rgba(34,211,238,0.3);background:rgba(34,211,238,0.02);border-radius:0 8px 8px 0">
<span style="font-size:22px;color:rgba(34,211,238,0.5);font-weight:700;font-family:Inter,sans-serif;min-width:32px">01</span>
<div>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Token validation</div>
<div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px;line-height:1.6;font-family:Inter,sans-serif">The platform extracts the token from the URL path and validates it against the server's token pool. Invalid or revoked tokens are rejected immediately with no further processing.</div>
</div>
</div>

<div style="display:flex;align-items:flex-start;gap:20px;margin-bottom:24px;padding:20px 24px;border-left:2px solid rgba(129,140,248,0.3);background:rgba(129,140,248,0.02);border-radius:0 8px 8px 0">
<span style="font-size:22px;color:rgba(129,140,248,0.5);font-weight:700;font-family:Inter,sans-serif;min-width:32px">02</span>
<div>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Session establishment</div>
<div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px;line-height:1.6;font-family:Inter,sans-serif">A stateful MCP session is created inside a V8 Isolate sandbox. The session maintains context across multiple tool calls, enabling multi-step workflows where one tool call informs the next.</div>
</div>
</div>

<div style="display:flex;align-items:flex-start;gap:20px;margin-bottom:24px;padding:20px 24px;border-left:2px solid rgba(52,211,153,0.3);background:rgba(52,211,153,0.02);border-radius:0 8px 8px 0">
<span style="font-size:22px;color:rgba(52,211,153,0.5);font-weight:700;font-family:Inter,sans-serif;min-width:32px">03</span>
<div>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Tool discovery</div>
<div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px;line-height:1.6;font-family:Inter,sans-serif">The client requests the tool list. The platform returns all enabled tools with their descriptions, parameter schemas, and annotations. If Tool Grouping is active, tools are organized into navigable groups.</div>
</div>
</div>

<div style="display:flex;align-items:flex-start;gap:20px;padding:20px 24px;border-left:2px solid rgba(245,158,11,0.3);background:rgba(245,158,11,0.02);border-radius:0 8px 8px 0">
<span style="font-size:22px;color:rgba(245,158,11,0.5);font-weight:700;font-family:Inter,sans-serif;min-width:32px">04</span>
<div>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif">Ready for tool calls</div>
<div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px;line-height:1.6;font-family:Inter,sans-serif">The AI model can now invoke any tool. Each call is translated into an HTTP request to your upstream API, passed through the Egress Firewall (DLP + FinOps), and returned as a structured MCP result.</div>
</div>
</div>

</div>

### Connection details

| Property | Value |
|---|---|
| **Protocol** | Streamable HTTP over HTTPS |
| **Authentication** | Token-based, embedded in the URL path |
| **Reconnection** | Automatic — clients reconnect if the connection drops |
| **Concurrency** | Multiple AI clients can connect to the same server simultaneously using the same or different tokens |
| **Active connections** | Visible in real time on the server's Dashboard tab and the fleet overview |
| **Latency** | Sub-100ms tool discovery; API call latency depends on your upstream endpoint |

---

## Revoking access

To disconnect a specific AI client, go to the server's **Connection Tokens** tab, find the token, and click **Revoke**.

Revocation is immediate: the active connection is terminated and any subsequent MCP requests using that token fail with an authentication error. Other tokens remain unaffected — you can revoke access to one client without disrupting others.

::: info When to revoke
Common scenarios: a team member leaves, a token is accidentally exposed, or you want to rotate credentials as part of a security policy. After revoking, generate a new token and update the affected client's configuration.
:::

---

## Next steps

<!-- Navigation cards -->
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:32px 0">

<a href="deploying-servers.html" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<span style="font-size:8px;color:rgba(129,140,248,0.5);letter-spacing:2px;font-weight:600">DEPLOY</span>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Deploy a new server</div>
<div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Import an OpenAPI spec, configure manually, or define agent skills.</div>
<span style="font-size:10px;color:rgba(129,140,248,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Start deploying →</span>
</a>

<a href="managing-servers.html" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<span style="font-size:8px;color:rgba(34,211,238,0.5);letter-spacing:2px;font-weight:600">MANAGE</span>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Manage your servers</div>
<div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">Monitor, configure, and control your entire MCP fleet.</div>
<span style="font-size:10px;color:rgba(34,211,238,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Open fleet →</span>
</a>

<a href="security/index.html" style="text-decoration:none;display:block;padding:24px;border:1px solid rgba(255,255,255,0.06);border-radius:8px;background:rgba(255,255,255,0.02)">
<span style="font-size:8px;color:rgba(52,211,153,0.5);letter-spacing:2px;font-weight:600">SECURITY</span>
<div style="font-size:14px;color:#fff;font-weight:600;font-family:Inter,sans-serif;margin-top:8px">Security and governance</div>
<div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px;line-height:1.5;font-family:Inter,sans-serif">DLP, FinOps Guard, credential vault, and SSRF protection.</div>
<span style="font-size:10px;color:rgba(52,211,153,0.6);margin-top:12px;display:block;font-family:Inter,sans-serif">Learn more →</span>
</a>

</div>

---

## Frequently Asked Questions

### How do I connect my MCP server to Claude Desktop?
Open Claude Desktop, go to Settings → Developer → Edit Config. Paste the Config JSON block provided by Vinkius Cloud into your `claude_desktop_config.json` file. Restart Claude Desktop — your tools are immediately available.

### Can I connect to Cursor without editing config files?
Yes. Vinkius Cloud generates a Cursor deep link for every server. Click it, and Cursor opens with the server pre-configured in your MCP settings. No manual JSON editing needed.

### What is a connection token and how is it secured?
A connection token is an HMAC-SHA256 signed credential that authenticates your AI client with a specific MCP server. Tokens are shown once at creation and can be revoked in under 40ms. Each token is scoped to a single server and user.

### Can I have multiple connection tokens for the same server?
Yes. You can create multiple tokens for a single server — useful for different team members, environments (dev, staging, production), or AI clients. Each token can be revoked independently.

### Which AI clients are supported?
Any MCP-compatible client works, including Claude Desktop, Claude Code, Cursor, VS Code with GitHub Copilot, Windsurf, Cline, OpenAI Codex, and any custom client implementing the Model Context Protocol.

### What MCP transport protocol does Vinkius Cloud use?
Vinkius Cloud uses the Streamable HTTP transport. The MCP URL follows the format `https://mcp.vinkius.com/{TOKEN}/mcp`, which works with all modern MCP clients that support HTTP-based transport.
