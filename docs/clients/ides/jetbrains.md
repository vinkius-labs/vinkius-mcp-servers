---
title: "Connect MCP Server to JetBrains IDEs — Setup Guide | Vinkius"
description: "Add MCP servers to JetBrains IDEs (IntelliJ, WebStorm, PyCharm, GoLand, etc.). Junie AI agent with MCP, deep language analysis, and refactoring intelligence."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to JetBrains IDEs — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP to JetBrains. Junie AI agent with deep language analysis."
  - - meta
    - name: keywords
      content: "JetBrains MCP, MCP JetBrains, IntelliJ MCP, JetBrains Junie MCP, connect MCP server JetBrains, Vinkius JetBrains"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to JetBrains","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Add server","text":"Settings then Tools then AI Assistant then MCP Servers then Add."},{"@type":"HowToStep","name":"Code","text":"Junie agent uses MCP tools alongside deep type analysis and refactoring."}]}'
---

# JetBrains IDEs

JetBrains IDEs — IntelliJ IDEA, WebStorm, PyCharm, GoLand, PhpStorm, Rider, and others — provide the deepest language-aware intelligence in any editor. Type resolution, cross-project refactoring, database tools, and framework-specific inspections are built in. **Junie**, JetBrains' AI agent, leverages this rich language understanding alongside MCP tools for coding that respects your project's type system and architecture.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#fc801d,#e76b1a);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">JB</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">JetBrains IDEs</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">JetBrains · <a href="https://jetbrains.com" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">jetbrains.com</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">stdio · Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">AI Assistant MCP</div></div>
</div>
</div>

## Deep Language Intelligence Meets MCP

JetBrains IDEs understand your code at the type level. When the AI agent makes changes, it leverages the IDE's type resolver, reference finder, and refactoring engine — not just pattern matching. This means AI-generated code respects your type hierarchy, catches type errors at edit time, and safely renames or moves symbols across the project.

MCP tools give the agent access to external systems while maintaining this language-level intelligence. Query a database through MCP, get schema information, and the agent generates type-safe code that matches the actual database structure.

**Junie** is JetBrains' AI agent that works across all IDEs in the family. It plans, codes, and runs tests with full access to the IDE's tooling — debugger, profiler, database console, and now MCP tools.

Features:

- **Junie agent** — AI coding agent with IDE-native tool access
- **Deep type analysis** — type-safe code generation and refactoring
- **All IDEs** — IntelliJ, WebStorm, PyCharm, GoLand, PhpStorm, Rider, etc.
- **Database tools** — SQL console, schema browser, and data editor
- **MCP integration** — external tools available to the AI assistant
- **Framework support** — Spring, Django, Next.js, Rails, and dozens more
- **Run/debug** — integrated debugger and profiler accessible to the agent

## Configuration

### 1. Create a Token

In [Vinkius Cloud](https://cloud.vinkius.com), go to your server → **Connection Tokens** → **Create**. Copy the URL.

### 2. Add MCP Server

Go to **Settings** → **Tools** → **AI Assistant** → **MCP Servers** → **Add** → paste your Vinkius URL.

### 3. Use with Junie

Junie accesses MCP tools during coding, testing, and refactoring workflows.

---

## FAQ

**Which JetBrains IDEs support MCP?**
All IDEs in the 2025+ line: IntelliJ IDEA, WebStorm, PyCharm, GoLand, PhpStorm, Rider, CLion, and others.

**Does the AI agent use the IDE's type system?**
Yes. Junie leverages JetBrains' type resolver and refactoring engine for type-safe changes.

**Can MCP data inform database code generation?**
Yes. The agent combines MCP data (schemas, API responses) with JetBrains' database tools for type-safe SQL and ORM code.

**Is JetBrains AI free?**
AI Assistant is included with JetBrains IDE subscriptions.
