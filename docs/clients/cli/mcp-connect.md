---
title: "Connect MCP Server to MCP Connect — Setup Guide | Vinkius"
description: "Add MCP servers to MCP Connect, the transport bridge for connecting any MCP client to remote servers. Proxy stdio to Streamable HTTP for local and cloud setups."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to MCP Connect — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Bridge MCP transports with MCP Connect. Proxy stdio to HTTP for any client."
  - - meta
    - name: keywords
      content: "MCP Connect, MCP transport bridge, MCP proxy, MCP Connect stdio HTTP, connect MCP server bridge, Vinkius MCP Connect"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect via MCP Connect","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Start proxy","text":"Run MCP Connect with your Vinkius URL to bridge transports."},{"@type":"HowToStep","name":"Connect client","text":"Point any stdio-based MCP client to the local MCP Connect process."}]}'
---

# MCP Connect

MCP Connect is a transport bridge that connects stdio-based MCP clients to remote Streamable HTTP servers. If your client only speaks stdio — the transport used for local processes — MCP Connect acts as a proxy: it starts as a local stdio process, then forwards all MCP messages to a remote HTTP endpoint like Vinkius Cloud.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#94a3b8,#64748b);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">MC</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">MCP Connect</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">DevTool · <a href="https://github.com/nicobailey/mcp-connect" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">github.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">stdio ↔ Streamable HTTP</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">CLI Proxy</div></div>
</div>
</div>

## Bridging the Transport Gap

The MCP specification defines two transports: **stdio** (for local processes) and **Streamable HTTP** (for remote servers). Most cloud MCP servers, including Vinkius Cloud, use Streamable HTTP. But some clients only support stdio — they expect to spawn a local process and communicate over standard input/output.

MCP Connect bridges this gap. You configure your client to start MCP Connect as a local stdio process, and MCP Connect relays every message to the remote HTTP server. From the client's perspective, it looks like a local MCP server. From the server's perspective, it looks like a normal HTTP client.

When you need MCP Connect:

- **Client only supports stdio** — some older or minimal clients lack HTTP transport
- **Firewall restrictions** — proxy through a controlled local process
- **Protocol debugging** — intercept and log all MCP messages
- **Multi-hop setup** — chain local preprocessing before reaching the cloud server

## Setup Guide

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Install MCP Connect

```bash
npm install -g mcp-connect
```

### 3. Configure Your Client

In your MCP client's config, register MCP Connect as a stdio server. Example for clients that use `command` + `args`:

```json
{
  "mcpServers": {
    "vinkius": {
      "command": "mcp-connect",
      "args": ["https://edge.vinkius.com/{TOKEN}/mcp"]
    }
  }
}
```

The client starts MCP Connect as a local process, and MCP Connect connects to Vinkius Cloud over HTTP transparently.

---

## FAQ

**When do I need MCP Connect?**
Only when your MCP client does not support Streamable HTTP transport. Most modern clients support HTTP natively and can connect to Vinkius Cloud directly.

**Does MCP Connect add latency?**
Minimal. MCP Connect is a thin proxy — it adds a few milliseconds per message for the stdio-to-HTTP translation.

**Can I use MCP Connect for debugging?**
Yes. You can configure verbose logging to see every MCP message passing through the proxy, which is useful for protocol debugging.

**Is MCP Connect free?**
Open-source. No licensing or account required.
