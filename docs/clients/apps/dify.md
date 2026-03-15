---
title: "Connect MCP Server to Dify — Setup Guide | Vinkius"
description: "Add MCP servers to Dify, the open-source LLM platform with 131k+ stars. Two-way MCP since v1.6.0 — call tools and publish workflows as MCP endpoints."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Dify — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Dify. Two-way MCP: call tools + publish workflows as MCP endpoints."
  - - meta
    - name: keywords
      content: "Dify MCP, MCP Dify, Dify MCP server, connect MCP server Dify, Vinkius Dify, Dify AI platform, Dify two-way MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Dify","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add MCP","text":"In your Dify agent or workflow, add MCP server and paste Vinkius URL."},{"@type":"HowToStep","name":"Use","text":"Your agents call MCP tools. Optionally publish Dify workflows as MCP endpoints."}]}'
---

# Dify

Dify is the most popular open-source LLM application platform, with 131k+ GitHub stars. Since v1.6.0, it supports **two-way MCP** — your agents call tools from external MCP servers, and your Dify workflows can be published as MCP endpoints that Claude Desktop, Cursor, and other clients consume natively.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#2563eb,#7c3aed);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Di</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Dify</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">★ 131k+ · <a href="https://dify.ai" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">dify.ai</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web · Docker · Cloud</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Two-way MCP (v1.6.0+)</div></div>
</div>
</div>

## Two-Way MCP: Consume and Expose

Most platforms only consume MCP tools. Dify goes further — it acts as both client and server in the MCP ecosystem. Your marketing team builds a lead-scoring workflow in Dify's visual builder, and that workflow becomes an MCP endpoint any IDE or terminal agent can call. Meanwhile, the same workflow consumes tools from Vinkius Cloud for data enrichment.

This bidirectional approach makes Dify a central hub for AI-powered automation. Build once in the drag-and-drop editor, expose everywhere via MCP.

Key capabilities:

- **Two-way MCP** — call external MCP tools + publish Dify apps as MCP servers
- **Visual workflow builder** — drag-and-drop with conditional logic, loops, and human-in-the-loop steps
- **RAG engine** — ingest PDFs, web pages, and documents with hybrid retrieval and reranking
- **Prompt IDE** — visual prompt orchestration and A/B testing
- **50+ built-in tools** — web search, DALL·E, scraping, and connectors
- **Plugin marketplace** — extensible architecture with community plugins
- **LLMOps** — log monitoring, cost tracking, and production data analysis
- **API-first** — every feature accessible via RESTful APIs

## Getting Set Up

### 1. Create a Token

Go to [Vinkius Cloud](https://cloud.vinkius.com) → your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Server in Dify

Open your agent or workflow → **Tools** → **Add Tool** → select **MCP Server** → paste:

```
https://edge.vinkius.com/{TOKEN}/mcp
```

Dify auto-discovers available tools and makes them available in the workflow editor and agent conversations.

### 3. (Optional) Publish as MCP Endpoint

To expose your Dify workflow as an MCP server, go to **Publish** → **MCP Endpoint**. Other clients can now consume your workflow as a standard MCP tool.

---

## FAQ

**What does "two-way MCP" mean in Dify?**
Dify can call tools from external MCP servers (like Vinkius Cloud) and also publish its own workflows as MCP endpoints. Claude Desktop, Cursor, and other clients can discover and call your Dify workflows through standard MCP.

**Can I use MCP inside Dify visual workflows?**
Yes. MCP tools appear as nodes in the drag-and-drop workflow builder. Wire them alongside conditionals, loops, and other Dify nodes.

**Do I need Docker to run Dify?**
Docker is the recommended self-hosted option, but Dify Cloud (dify.ai) offers a managed version with no infrastructure setup.

**Is Dify free?**
Open-source under a permissive license. Dify Cloud has a free tier. Self-hosting is fully free with Docker.
