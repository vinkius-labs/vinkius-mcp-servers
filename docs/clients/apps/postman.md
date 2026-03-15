---
title: "Connect MCP Server to Postman — Setup Guide | Vinkius"
description: "Add MCP servers to Postman, the world's leading API platform. Test MCP tools alongside REST, GraphQL, and WebSocket APIs in collections with team collaboration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Postman — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Postman. Test MCP tools alongside REST and GraphQL APIs."
  - - meta
    - name: keywords
      content: "Postman MCP, MCP Postman, Postman MCP testing, connect MCP server Postman, Vinkius Postman, Postman API MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Postman","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add collection","text":"Create an MCP collection in Postman with your Vinkius URL."},{"@type":"HowToStep","name":"Test","text":"Test MCP tools in the same workspace as your REST and GraphQL APIs."}]}'
---

# Postman

Postman is the API platform used by tens of millions of developers. It already handles REST, GraphQL, WebSocket, and gRPC — MCP adds a new protocol to that stack. Test MCP tool calls, inspect responses, and organize them in collections alongside your existing API tests. Share MCP tool tests with your team through Postman workspaces.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#ff6c37,#e5532e);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Pm</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Postman</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">postman.com · <a href="https://postman.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">postman.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux · Web</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">MCP Collections</div></div>
</div>
</div>

## API Testing Extended to MCP Tools

Postman's strength is making API testing collaborative and organized. MCP tools get the same treatment: collections for grouping tools, environments for switching between staging and production servers, and test scripts for validating tool responses.

The Postman AI assistant (Postbot) can suggest test cases for your MCP tools, generate documentation, and help debug unexpected responses — just as it does for REST APIs.

Features:

- **Collections** — organize MCP tools alongside REST and GraphQL endpoints
- **Environments** — switch between dev, staging, and production MCP servers
- **Test scripts** — automate MCP tool response validation
- **Team workspaces** — share MCP tool tests with your team
- **Postbot** — AI assistant for test generation and debugging
- **History** — full log of every MCP tool call and response
- **Newman CLI** — run MCP tests in CI/CD pipelines

## Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Create MCP Collection

In Postman, create a new collection for your MCP tools. Add your Vinkius URL as the server endpoint.

### 3. Test and Share

Send tool calls, inspect responses, write tests, and share with your team.

---

## FAQ

**Can I run MCP tests in CI/CD?**
Yes. Newman (Postman's CLI runner) can execute MCP collections in automated pipelines.

**Do Postman environments work with MCP?**
Yes. Use environments to switch between development and production MCP servers.

**Can Postbot help with MCP tools?**
Yes. Postbot generates test cases and documentation for MCP tools just as it does for REST APIs.

**Is Postman free?**
Free tier for individual use. Team and Enterprise plans for collaboration.
