---
title: "Connect MCP Server to Semantic Kernel — Setup Guide | Vinkius"
description: "Add MCP servers to Microsoft Semantic Kernel, the enterprise AI orchestration SDK. C# and Python, kernel functions, planners, and MCP tool integration."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Semantic Kernel — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to Semantic Kernel. Enterprise AI orchestration with MCP tools."
  - - meta
    - name: keywords
      content: "Semantic Kernel MCP, MCP Semantic Kernel, Microsoft Semantic Kernel MCP, connect MCP server Semantic Kernel, Vinkius Semantic Kernel"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Semantic Kernel","step":[{"@type":"HowToStep","name":"Install","text":"Add the Semantic Kernel MCP connector package."},{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Register","text":"Add MCP tools as kernel functions in your Semantic Kernel agent."}]}'
---

# Semantic Kernel

Semantic Kernel is Microsoft's open-source SDK for AI orchestration, used in production across Microsoft 365, Azure, and enterprise applications. Written in **C#** and **Python**, it treats AI capabilities as **kernel functions** that compose into planners and pipelines. MCP tools register as kernel functions, making them available to Semantic Kernel's automatic function calling and planning systems.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#7c3aed,#5b21b6);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">SK</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Semantic Kernel</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Microsoft · <a href="https://learn.microsoft.com/semantic-kernel" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">learn.microsoft.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">C# · Python · SDK</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">MCP Connector</div></div>
</div>
</div>

## Enterprise AI Orchestration with MCP Functions

Semantic Kernel is the AI backbone of Microsoft products. Its **kernel function** abstraction treats everything — prompts, code, APIs, MCP tools — as composable units. Planners chain these functions into multi-step workflows, and automatic function calling lets the LLM decide which functions to invoke.

MCP tools become kernel functions through the MCP connector. Once registered, they participate in planning alongside your existing functions — no special handling needed.

Features:

- **Kernel functions** — MCP tools register as first-class kernel functions
- **Planners** — automatic multi-step plan generation using MCP tools
- **Auto function calling** — LLM invokes MCP tools through standard function calling
- **C# and Python** — dual SDK with feature parity
- **Azure integration** — Azure OpenAI, Cognitive Services, and Azure AI
- **Memory and RAG** — built-in memory stores and retrieval
- **Enterprise-ready** — production-tested across Microsoft 365

## C# Integration

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Register MCP Plugin

```csharp
var kernel = Kernel.CreateBuilder()
    .AddAzureOpenAIChatCompletion(...)
    .Build();

await kernel.ImportMcpPluginFromUrl(
    "vinkius",
    new Uri("https://edge.vinkius.com/{TOKEN}/mcp")
);
```

### 3. Use in Planners

MCP tools participate in Semantic Kernel's planning and automatic function calling alongside native kernel functions.

---

## FAQ

**Do MCP tools work with Semantic Kernel planners?**
Yes. MCP tools registered as kernel functions are available to all planners and automatic function calling.

**Is C# required?**
No. Semantic Kernel has both C# and Python SDKs with MCP support.

**Can I mix MCP tools with native kernel functions?**
Yes. MCP tools and native functions are interchangeable kernel functions.

**Is Semantic Kernel free?**
Open-source under MIT. Azure services have their own pricing.
