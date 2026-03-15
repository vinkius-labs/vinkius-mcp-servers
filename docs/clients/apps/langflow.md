---
title: "Connect MCP Server to Langflow — Setup Guide | Vinkius"
description: "Add MCP servers to Langflow, the visual IDE for building AI agents and RAG pipelines. Drag-and-drop component assembly, Python extensibility, and MCP integration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Langflow — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Langflow. Visual IDE for AI agents and RAG with MCP tools."
  - - meta
    - name: keywords
      content: "Langflow MCP, MCP Langflow, Langflow AI IDE MCP, connect MCP server Langflow, Vinkius Langflow, Langflow visual agent builder"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Langflow","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add component","text":"Drag an MCP Server component into your Langflow workspace and configure it."},{"@type":"HowToStep","name":"Build","text":"Wire MCP to your agent or RAG pipeline and deploy."}]}'
---

# Langflow

Langflow is a visual IDE for building AI agents and RAG pipelines. It combines the approachability of a drag-and-drop builder with the power of full Python extensibility. Components snap together like building blocks — LLMs, retrievers, tools, memory, and now MCP servers — and you can open any component to customize its Python code.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#f97316,#ea580c);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">Lf</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Langflow</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">DataStax · <a href="https://langflow.org" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">langflow.org</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Web · Self-hosted · Cloud</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">MCP Component</div></div>
</div>
</div>

## Visual IDE: Drag-and-Drop Meets Python

Langflow bridges visual building and code. Start by dragging components — an LLM, a retriever, an MCP server tool — and wiring them together. If you need custom behavior, click into any component and edit its Python implementation. This hybrid approach works for both no-code users and Python developers.

The MCP component connects your agent or RAG pipeline to remote tool servers. The agent reasons about its task, calls MCP tools for external data, and feeds results into the rest of the pipeline — all visible as connected nodes on the canvas.

What Langflow provides:

- **Visual IDE** — drag-and-drop component assembly with live preview
- **Python extensibility** — edit any component's Python source inline
- **Agent builder** — multi-step reasoning with tool selection
- **RAG pipelines** — document ingestion, vector search, and retrieval chains
- **API auto-generation** — every flow becomes a deployable API endpoint
- **Component marketplace** — community-built and shared components
- **DataStax-backed** — enterprise support and cloud hosting available

## Connecting MCP

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Component

In the Langflow workspace, drag the **MCP Server** component from the tool palette. Configure it with your URL:

```
https://edge.vinkius.com/{TOKEN}/mcp
```

### 3. Wire and Deploy

Connect the MCP component to your agent or pipeline nodes. Test in the playground, then deploy as an API endpoint.

---

## FAQ

**Can I customize MCP tool behavior in Langflow?**
Yes. Click into the MCP component to edit its Python implementation. Add preprocessing, caching, or transformation logic to tool inputs and outputs.

**Does Langflow support RAG and MCP together?**
Yes. Wire MCP tools alongside RAG components. The agent can query your document index and call external MCP tools in the same flow.

**Is Langflow suitable for production?**
Yes. Langflow generates API endpoints from your flows. DataStax offers cloud hosting for enterprise-grade deployments.

**Is Langflow free?**
Open-source under Apache 2.0. Langflow Cloud by DataStax has free and paid tiers.
