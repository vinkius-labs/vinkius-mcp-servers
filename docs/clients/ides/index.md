---
aside: false
title: "MCP Clients for IDEs — Connect Your Code Editor | Vinkius"
description: "Connect your Vinkius Cloud MCP server to VS Code, Cursor, Windsurf, Zed, Cline, and 10+ more AI-powered code editors. Setup guides for every major IDE with MCP support."
head:
  - - meta
    - property: og:title
      content: "MCP Clients for IDEs — Connect Your Code Editor | Vinkius"
  - - meta
    - property: og:description
      content: "Connect your Vinkius Cloud MCP server to VS Code, Cursor, Windsurf, Zed, and 10+ more IDE. Setup guides for every major IDE with MCP support."
  - - meta
    - name: keywords
      content: "MCP IDE client, MCP VS Code, MCP Cursor, MCP Windsurf, MCP Zed, MCP Cline, MCP Continue, MCP Roo Code, MCP Neovim, MCP JetBrains, MCP Replit, AI code editor MCP, connect MCP server IDE"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Which IDEs support MCP servers?","acceptedAnswer":{"@type":"Answer","text":"VS Code (via GitHub Copilot agent mode), Cursor, Windsurf, Zed, Cline, Roo Code, Continue, Sourcegraph Cody, Refact, Neovim (via MCPHub.nvim), Replit, and Devin all support MCP servers. Each can connect to remote MCP servers hosted on Vinkius Cloud."}},{"@type":"Question","name":"How do I connect an MCP server to my IDE?","acceptedAnswer":{"@type":"Answer","text":"Create a connection token in Vinkius Cloud, copy the MCP URL (https://edge.vinkius.com/{TOKEN}/mcp), and paste it into your IDE MCP settings. Each IDE has a slightly different setup flow — see the individual guide for your editor."}},{"@type":"Question","name":"Do I need to install anything to use MCP in my IDE?","acceptedAnswer":{"@type":"Answer","text":"Most modern AI-powered IDEs include MCP support built-in. VS Code requires GitHub Copilot, Cursor and Windsurf have it natively, and Cline/Continue/Roo Code are extensions with MCP already integrated."}},{"@type":"Question","name":"Can I use the same MCP server across multiple IDEs?","acceptedAnswer":{"@type":"Answer","text":"Yes. Your Vinkius Cloud MCP server works with any MCP-compatible client. You can create separate connection tokens for each IDE or share the same token across editors."}},{"@type":"Question","name":"What transport protocol do IDE MCP clients use?","acceptedAnswer":{"@type":"Answer","text":"Vinkius Cloud uses Streamable HTTP transport. Most IDEs support this protocol natively. Some extensions like Cline and Continue connect via SSE, which is also compatible."}},{"@type":"Question","name":"Is VS Code or Cursor better for MCP?","acceptedAnswer":{"@type":"Answer","text":"Both offer excellent MCP support. VS Code uses GitHub Copilot agent mode with MCP tools, while Cursor has native MCP integration in its AI composer. Choose based on your workflow preference — both connect to Vinkius Cloud identically."}}]}'
---

# IDE Clients

Connect your Vinkius Cloud MCP server to any AI-powered code editor. Each IDE below supports MCP natively — pick yours for a step-by-step setup guide.

---

<!-- Tier 1: Top IDEs -->
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;margin:24px 0">

<!-- VS Code -->
<a href="./vscode" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#0078d4,#005a9e);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">VS</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">VS Code</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Microsoft</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">MCP support via GitHub Copilot agent mode. The most popular code editor with built-in AI integration.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Cursor -->
<a href="./cursor" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#7c3aed,#4f46e5);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Cu</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Cursor</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Anysphere</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">AI-first code editor with native MCP support. Connect servers directly from Cursor Settings.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Windsurf -->
<a href="./windsurf" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#06b6d4,#0891b2);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Wi</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Windsurf</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Codeium</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">AI-powered IDE with Cascade flow. Native MCP support for connecting external tool servers.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Antigravity -->
<a href="./antigravity" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#4285f4,#34a853);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Ag</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Antigravity</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Google DeepMind</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Agent-first IDE by Google DeepMind. Powered by Gemini with autonomous agent manager, browser integration, and full MCP support.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Zed -->
<a href="./zed" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#f59e0b,#d97706);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Ze</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Zed</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Zed Industries · ★ 77.2k</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">High-performance, open-source code editor with built-in MCP support in the AI assistant panel.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Mac · Linux</span>
</div>
</div>
</a>

<!-- Cline -->
<a href="./cline" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#ec4899,#be185d);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Cl</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Cline</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Cline Bot Inc. · ★ 59k</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Autonomous coding assistant VS Code extension with CLI capabilities and native MCP client support.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">SSE</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">VS Code Extension</span>
</div>
</div>
</a>

<!-- Continue -->
<a href="./continue" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#10b981,#059669);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Co</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Continue</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Continue Dev · ★ 31.9k</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Open-source coding assistant for VS Code and JetBrains with highly configurable MCP integration.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">SSE</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">VS Code · JetBrains</span>
</div>
</div>
</a>

<!-- Roo Code -->
<a href="./roo-code" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#f97316,#ea580c);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Ro</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Roo Code</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Roo Vet · ★ 22.7k</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Fork of Cline with additional customization. Autonomous coding assistant for VS Code with MCP support.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">SSE</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">VS Code Extension</span>
</div>
</div>
</a>

<!-- Sourcegraph Cody -->
<a href="./sourcegraph-cody" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#ff5543,#a112ff);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Sg</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Sourcegraph Cody</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Sourcegraph</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Coding assistant plugin for VS Code and JetBrains with context-aware code intelligence and MCP support.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">VS Code · JetBrains</span>
</div>
</div>
</a>

<!-- Refact -->
<a href="./refact" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#3b82f6,#1d4ed8);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Re</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Refact</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Refact</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">AI agent that handles coding tasks end-to-end in your IDE. Plans, executes, tests, and self-corrects with MCP tools.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">VS Code · JetBrains</span>
</div>
</div>
</a>

<!-- Neovim (MCPHub.nvim) -->
<a href="./neovim" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#57a143,#3e8731);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Nv</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Neovim</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">MCPHub.nvim · ★ 1.7k</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Neovim plugin for managing multiple MCP servers directly within your editor for AI-assisted development.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Replit -->
<a href="./replit" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#f26522,#e04e1b);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Re</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Replit</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Replit</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Cloud-based IDE with Replit Agent. Connects to MCP servers for external tools, databases, and API integrations.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web · Cloud IDE</span>
</div>
</div>
</a>

<!-- Devin -->
<a href="./devin" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#6366f1,#4338ca);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">De</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Devin</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Cognition</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">The AI software engineer. Autonomous agent with a full cloud IDE that collaborates on coding tasks via MCP.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Cloud Agent</span>
</div>
</div>
</a>

<!-- JetBrains (IntelliJ IDEA) -->
<a href="./jetbrains" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#fe2857,#c21325);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">JB</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">JetBrains IDEs</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">JetBrains</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">IntelliJ IDEA, WebStorm, PyCharm, and all JetBrains IDEs have native MCP client support via AI Assistant from 2025.1.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Augment Code -->
<a href="./augment-code" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#a855f7,#7c3aed);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Au</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Augment Code</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Augment</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">AI coding platform for VS Code and JetBrains with deep codebase context engine and native MCP support.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">VS Code · JetBrains</span>
</div>
</div>
</a>

<!-- Kilo Code -->
<a href="./kilo-code" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#14b8a6,#0d9488);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Ki</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Kilo Code</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Kilo Code</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Autonomous coding agent for VS Code with advanced features, custom modes, and MCP server integration.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">SSE</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">VS Code Extension</span>
</div>
</div>
</a>

<!-- Codex CLI -->
<a href="./codex-cli" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#000000,#333333);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Cx</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Codex</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">OpenAI</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">OpenAI's coding agent with CLI and VS Code extension. MCP support for tools, completions, and code generation.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Trae AI -->
<a href="./trae" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#0ea5e9,#0369a1);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Tr</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Trae</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">ByteDance</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">AI-powered IDE with built-in MCP marketplace. Supports GPT-4o and Claude models with native tool integration.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac</span>
</div>
</div>
</a>

<!-- Gemini Code Assist -->
<a href="./gemini-code-assist" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#4285f4,#1a73e8);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">GC</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Gemini Code Assist</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Google</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Google's AI coding assistant for VS Code and JetBrains with MCP server support in agent mode.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">VS Code · JetBrains</span>
</div>
</div>
</a>

<!-- Tabnine -->
<a href="./tabnine" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#e44d26,#c42112);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Tb</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Tabnine</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Tabnine</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">AI code assistant with MCP server management. Available for VS Code, JetBrains, Eclipse, and Visual Studio.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">VS Code · JetBrains</span>
</div>
</div>
</a>

<!-- CodeGPT -->
<a href="./codegpt" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#7c3aed,#5b21b6);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">CG</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">CodeGPT</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">CodeGPT</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">AI coding assistant extension for VS Code and JetBrains with MCP server integration and multi-model support.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">VS Code · JetBrains</span>
</div>
</div>
</a>

<!-- Void -->
<a href="./void" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#171717,#404040);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Vo</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Void</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Void · ★ 22.4k</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Open-source AI code editor (VS Code fork) with native MCP support and local/cloud LLM connections.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- PearAI -->
<a href="./pearai" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#a3e635,#65a30d);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Pe</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">PearAI</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">PearAI · ★ 16.8k</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Free open-source AI code editor (VS Code fork) with built-in AI tools, Aider integration, and MCP support.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Aider -->
<a href="./aider" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#ef4444,#b91c1c);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Ai</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Aider</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Aider · ★ 33.3k</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">AI pair programming in your terminal. Works with any editor and integrates with MCP for extended tool access.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Theia IDE -->
<a href="./theia" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#0284c7,#075985);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Th</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Theia IDE</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Eclipse Foundation</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">VS Code-compatible cloud and desktop IDE by Eclipse Foundation with MCP server support via extensions.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web · Desktop</span>
</div>
</div>
</a>

<!-- Jules (Google) -->
<a href="./jules" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#4285f4,#ea4335);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Ju</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Jules</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Google</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Google's autonomous AI coding agent powered by Gemini. Handles tasks asynchronously in a secure cloud VM with MCP support.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Cloud Agent</span>
</div>
</div>
</a>

<!-- Blackbox AI -->
<a href="./blackbox-ai" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#1a1a2e,#16213e);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Bb</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Blackbox AI</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Blackbox</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">AI coding assistant and MCP client with access to 300+ AI models. Available for VS Code, Jupyter, and Google Colab.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">VS Code · Web</span>
</div>
</div>
</a>

<!-- Emacs -->
<a href="./emacs" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#7f1d54,#5c1d7f);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Em</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Emacs</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">mcp.el</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">The extensible text editor with MCP client support via the mcp.el package for AI-assisted development.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Eclipse -->
<a href="./eclipse" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#2c2255,#41318d);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Ec</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Eclipse</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Eclipse Foundation</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Eclipse IDE with MCP support through GitHub Copilot plugin. Can also act as an MCP server for external AI agents.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Visual Studio -->
<a href="./visual-studio" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#68217a,#9b4dca);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">VS</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Visual Studio</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Microsoft</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Visual Studio (Windows) with MCP support in GitHub Copilot agent mode for connecting to MCP-compatible servers.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Windows</span>
</div>
</div>
</a>

<!-- Amp -->
<a href="./amp" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#ff6154,#ff3864);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Am</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Amp</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Sourcegraph</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Next-gen coding agent by Sourcegraph. Works in terminal and editors (VS Code, JetBrains, Neovim) with MCP integration.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">VS Code · JetBrains · Terminal</span>
</div>
</div>
</a>

<!-- Supermaven -->
<a href="./supermaven" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#f59e0b,#d97706);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Sm</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Supermaven</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Supermaven</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Ultra-fast AI code completions with 1M token context. Plugins for VS Code, JetBrains, and Neovim with MCP support.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">VS Code · JetBrains · Neovim</span>
</div>
</div>
</a>

<!-- Melty -->
<a href="./melty" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#ec4899,#db2777);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Me</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Melty</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Open-source AI code editor for conversational, context-rich workflows across large codebases with MCP integration.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Witsy -->
<a href="./witsy" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#06b6d4,#0891b2);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Wi</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Witsy</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Witsy</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Desktop AI assistant with MCP client support. Connects to multiple LLM providers with tool integration.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Enconvo -->
<a href="./enconvo" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#8b5cf6,#6d28d9);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">En</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Enconvo</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Enconvo</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">AI-powered launcher and coding assistant for macOS with native MCP client support and multi-model capabilities.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Mac</span>
</div>
</div>
</a>

<!-- ChatWise -->
<a href="./chatwise" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#10b981,#059669);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">CW</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">ChatWise</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">ChatWise</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Ultra-fast AI chatbot with native MCP client support. Multi-provider connections with tool integration.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Mac</span>
</div>
</div>
</a>

<!-- Glama -->
<a href="./glama" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#e879f9,#c026d3);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Gl</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Glama</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Glama</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">AI workspace with unified LLM interface and integrated MCP Server &amp; Tool Directory. Gateway for MCP tool discovery.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web</span>
</div>
</div>
</a>

</div>

---

## FAQ

**Which IDEs support MCP servers?**
Over 35 IDEs and coding tools support MCP, including Antigravity (Google DeepMind), VS Code, Cursor, Windsurf, Zed, JetBrains IDEs, Trae, Cline, Roo Code, Continue, Augment Code, Gemini Code Assist, Tabnine, CodeGPT, Amp (Sourcegraph), Supermaven, Sourcegraph Cody, Refact, Kilo Code, Codex (OpenAI), Void, PearAI, Melty, Aider, Theia, Jules (Google), Blackbox AI, Emacs, Eclipse, Visual Studio, Witsy, Enconvo, ChatWise, Glama, Neovim, Replit, and Devin.

**How do I connect an MCP server to my IDE?**
Create a connection token in Vinkius Cloud, copy the MCP URL (`https://edge.vinkius.com/{TOKEN}/mcp`), and paste it into your IDE's MCP settings. Each IDE has a slightly different setup flow — click on your editor above for a step-by-step guide.

**Do I need to install anything to use MCP in my IDE?**
Most modern AI-powered IDEs include MCP support built-in. VS Code requires GitHub Copilot, Cursor and Windsurf have it natively, JetBrains IDEs have AI Assistant, and Cline/Continue/Roo Code are VS Code extensions with MCP already integrated.

**Can I use the same MCP server across multiple IDEs?**
Yes. Your Vinkius Cloud MCP server works with any MCP-compatible client. You can create separate connection tokens for each IDE or share the same token across editors.

**What transport protocol do IDE MCP clients use?**
Vinkius Cloud uses Streamable HTTP transport. Most IDEs support this protocol natively. Some extensions like Cline and Continue connect via SSE, which is also compatible.

**Is VS Code or Cursor better for MCP?**
Both offer excellent MCP support. VS Code uses GitHub Copilot agent mode with MCP tools, while Cursor has native MCP integration in its AI composer. Choose based on your workflow preference — both connect to Vinkius Cloud identically.
