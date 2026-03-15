---
title: "Connect MCP Server to MCPHub — Setup Guide | Vinkius"
description: "Add MCP servers to MCPHub, the centralized gateway for managing multiple MCP server connections. Single entry point for MCP tool orchestration across clients."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to MCPHub — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to MCPHub. Centralized gateway for managing MCP servers."
  - - meta
    - name: keywords
      content: "MCPHub MCP, MCP MCPHub, MCPHub gateway, connect MCP server MCPHub, Vinkius MCPHub, MCPHub server management"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to MCPHub","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Register","text":"Add Vinkius as a server in your MCPHub configuration."},{"@type":"HowToStep","name":"Connect clients","text":"Point any MCP client at MCPHub to access all registered servers."}]}'
---

# MCPHub

MCPHub is a centralized gateway that aggregates multiple MCP servers behind a single endpoint. Instead of configuring each server in every client, you configure them once in MCPHub and point your clients at the hub. Add, remove, or update servers centrally — all connected clients see the changes automatically.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#06b6d4,#0891b2);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">MH</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">MCPHub</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Open-Source · <a href="https://github.com/nicepkg/mcphub" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">GitHub</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Self-hosted · Gateway</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Server Aggregation</div></div>
</div>
</div>

## One Endpoint, All Your MCP Servers

MCPHub solves the configuration sprawl problem. When you have five MCP servers and ten clients, you'd normally configure 50 connections. MCPHub reduces this to 10 (clients to hub) + 5 (hub to servers) = 15 connections, with centralized management for all.

When a client queries MCPHub, it discovers tools from all registered servers transparently. Updates to server configurations propagate to all clients without reconfiguration.

Features:

- **Server aggregation** — multiple MCP servers behind one endpoint
- **Central management** — add, remove, update servers in one place
- **Tool discovery** — clients see tools from all registered servers
- **Configuration UI** — web interface for managing server connections
- **Self-hosted** — run on your own infrastructure

## Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Register in MCPHub

Add your Vinkius server to the MCPHub configuration alongside your other MCP servers.

### 3. Point Clients at MCPHub

Configure your AI clients with the MCPHub URL. They automatically discover all tools from all registered servers.

---

## FAQ

**What problem does MCPHub solve?**
Managing MCP server configurations across multiple clients. Configure once centrally instead of in every client.

**Does MCPHub merge tools from different servers?**
Yes. Clients see a unified list of tools from all registered servers when querying MCPHub.

**Can I use MCPHub with any MCP client?**
Yes. MCPHub exposes a standard MCP endpoint. Any client that supports MCP works with it.

**Is MCPHub free?**
Open-source and self-hosted.
