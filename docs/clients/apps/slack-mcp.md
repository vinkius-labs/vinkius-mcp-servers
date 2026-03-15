---
title: "Connect MCP Server to Slack MCP — Setup Guide | Vinkius"
description: "Add MCP servers to Slack through MCP integration. Query external tools and databases directly from Slack channels and threads with AI bot integration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Slack MCP — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Slack. Query tools and data from Slack channels."
  - - meta
    - name: keywords
      content: "Slack MCP, MCP Slack, Slack AI MCP, connect MCP server Slack, Vinkius Slack, Slack bot MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP to Slack","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Set up the MCP-Slack bridge with your Vinkius URL."},{"@type":"HowToStep","name":"Query","text":"Mention the bot in any channel to invoke MCP tools."}]}'
---

# Slack MCP

Slack MCP bridges the gap between your team's communication hub and MCP tool servers. Instead of switching to a separate AI client to query data, your team invokes MCP tools directly from Slack channels and threads. @mention the bot, ask a question, and MCP tool results appear in the conversation for everyone to see.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#e01e5a,#36c5f0);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Sl</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Slack MCP</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Integration · <a href="https://slack.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">slack.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Slack · Any platform</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Bot Integration</div></div>
</div>
</div>

## MCP Tools Where Your Team Already Works

The biggest friction with AI tools is context switching. Slack MCP eliminates it. Your team asks questions in the channels they already use, and MCP tool results appear inline. No new app to install, no new interface to learn.

Thread-based queries keep conversations organized. Ask a follow-up in a thread, and the bot maintains context from previous tool calls. Results are visible to the entire team, creating a shared knowledge base.

Features:

- **Channel integration** — invoke MCP tools with @mentions in any channel
- **Thread context** — follow-up queries maintain conversation history
- **Team visibility** — tool results visible to everyone in the channel
- **Slash commands** — `/mcp` commands for quick tool access
- **No context switching** — query data without leaving Slack
- **Notifications** — bot alerts when monitored MCP tools return specific results

## Setup

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Configure the Bridge

Set up the MCP-Slack bridge with your Vinkius Cloud URL and Slack workspace credentials.

### 3. Use in Channels

@mention the bot in any channel to invoke MCP tools. Results appear inline.

---

## FAQ

**Can my entire team see MCP tool results?**
Yes. Tool results appear as messages in the channel or thread, visible to all participants.

**Do threads maintain MCP context?**
Yes. Follow-up questions in a thread reference previous tool calls for coherent conversations.

**Can I restrict MCP access to specific channels?**
Yes. Configure the bot to respond only in designated channels.

**Is Slack MCP official?**
It is a community integration that connects Slack's bot API with MCP tool servers.
