---
title: "Connect MCP Server to Smithery — Setup Guide | Vinkius"
description: "Add MCP servers to Smithery, the MCP server registry and hosting platform. Discover, deploy, and manage MCP servers with one-click hosting and automatic scaling."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Smithery — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Smithery. MCP server registry with hosting and auto-scaling."
  - - meta
    - name: keywords
      content: "Smithery MCP, MCP Smithery, Smithery registry MCP, connect MCP server Smithery, Vinkius Smithery, MCP server hosting"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Smithery","step":[{"@type":"HowToStep","name":"Browse","text":"Discover MCP servers on the Smithery registry."},{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud for your own server."},{"@type":"HowToStep","name":"Deploy","text":"Host and manage MCP servers through the Smithery platform."}]}'
---

# Smithery

Smithery is a registry and hosting platform for MCP servers. Browse the directory to discover community-built servers, deploy them with one click, or host your own. Smithery handles infrastructure — scaling, uptime, and transport configuration — so you focus on building tools. Use it alongside Vinkius Cloud to discover complementary MCP servers.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#f97316,#ea580c);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Sm</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Smithery</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Platform · <a href="https://smithery.ai" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">smithery.ai</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web · Registry</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Server Registry</div></div>
</div>
</div>

## The npm for MCP Servers

Smithery is to MCP servers what npm is to JavaScript packages — a centralized registry for discovery and distribution. Search by category, check compatibility, read documentation, and deploy servers. Publishing your own server makes it discoverable by the community.

Features:

- **Server registry** — searchable directory of MCP server implementations
- **One-click deploy** — host discovered servers without infrastructure setup
- **Auto-scaling** — managed hosting scales with demand
- **Client configs** — pre-generated configuration for popular MCP clients
- **Categories** — browse servers by function: databases, APIs, development tools
- **Versioning** — server versioning and update management

## Using with Vinkius

### 1. Discover Servers

Browse the [Smithery registry](https://smithery.ai) to find MCP servers for specific use cases.

### 2. Connect Your Vinkius Server

In [Vinkius Cloud](https://cloud.vinkius.com), create a token → copy your URL. Add it to any client alongside Smithery-hosted servers.

### 3. Combine Sources

Use Vinkius Cloud for your custom servers and Smithery for community servers. Most clients support multiple MCP server connections.

---

## FAQ

**Is Smithery an MCP client?**
No. Smithery is a registry and hosting platform. You use it to discover and deploy servers, then connect from your preferred client.

**Can I publish my server on Smithery?**
Yes. Submit your MCP server implementation to the registry for community discovery.

**How does Smithery hosting work?**
One-click deploy provisions infrastructure, handles scaling, and provides a URL you add to your MCP client.

**Is Smithery free?**
Registry browsing is free. Hosting has free and paid tiers.
