---
aside: false
title: "32 MCP Clients for CLI & Desktop — Claude Code, Gemini CLI, Aider & More | Vinkius"
description: "Connect your Vinkius Cloud MCP server to 32+ terminal and desktop AI tools: Claude Code, Gemini CLI, OpenCode, Aider, Codex CLI, Goose, Warp, and more."
head:
  - - meta
    - property: og:title
      content: "MCP Clients for CLI — Claude Code, Gemini CLI, OpenCode & More | Vinkius"
  - - meta
    - property: og:description
      content: "Connect your Vinkius Cloud MCP server to Claude Code, Gemini CLI, OpenCode, Goose, and more terminal AI tools."
  - - meta
    - name: keywords
      content: "MCP CLI client, MCP Claude Code, MCP Gemini CLI, MCP OpenCode, MCP Goose, MCP Warp, MCP terminal, GitHub Copilot CLI MCP, connect MCP server CLI, command line MCP, AI coding terminal MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Which CLI tools support MCP servers?","acceptedAnswer":{"@type":"Answer","text":"Claude Code, Gemini CLI, OpenCode, Goose, Warp, GitHub Copilot CLI, and Amazon Q Developer CLI all support MCP servers from the terminal."}},{"@type":"Question","name":"How do I connect an MCP server to Claude Code?","acceptedAnswer":{"@type":"Answer","text":"Run claude mcp add with your server name and Vinkius Cloud URL. Claude Code stores the configuration locally and makes the tools available in your next session."}},{"@type":"Question","name":"Can I use MCP servers with Gemini CLI?","acceptedAnswer":{"@type":"Answer","text":"Yes. Gemini CLI supports MCP servers via its settings.json configuration file. Add your Vinkius Cloud MCP URL as a remote server entry."}},{"@type":"Question","name":"What is the advantage of MCP in the terminal?","acceptedAnswer":{"@type":"Answer","text":"CLI MCP clients excel at automation, scripting, and CI/CD integration. You can pipe data, chain commands, and use MCP tools in shell scripts."}},{"@type":"Question","name":"Do CLI MCP clients support Streamable HTTP?","acceptedAnswer":{"@type":"Answer","text":"Yes. Claude Code, Gemini CLI, OpenCode and Warp support Streamable HTTP transport natively, which is the protocol used by Vinkius Cloud."}},{"@type":"Question","name":"Can I use MCP CLI tools in CI/CD pipelines?","acceptedAnswer":{"@type":"Answer","text":"Yes. CLI MCP clients are designed for scriptable, non-interactive use cases. Connect to your Vinkius Cloud MCP server in CI/CD pipelines."}}]}'
---

# CLI Clients

Connect your Vinkius Cloud MCP server to terminal-based AI coding tools. Each CLI below supports MCP natively — pick yours for a step-by-step setup guide.

---

<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;margin:24px 0">

<!-- Claude Code -->
<a href="./claude-code" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#d4a574,#a87c5a);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">CC</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Claude Code</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Anthropic</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Agentic coding tool in your terminal. Understands your codebase and helps you code faster through natural language.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Gemini CLI -->
<a href="./gemini-cli" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#4285f4,#1a73e8);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Ge</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Gemini CLI</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Google · ★ 97.8k</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Google's command-line tool with 1M token context window for querying large codebases and automating tasks.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- OpenCode -->
<a href="./opencode" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#8b5cf6,#6d28d9);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">OC</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">OpenCode</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">SST · ★ 122k</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Terminal-based coding agent with TUI interface, provider-agnostic model support, and real-time collaboration.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Goose -->
<a href="./goose" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#84cc16,#65a30d);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Go</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Goose</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Block, Inc. · ★ 33k</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Configurable AI agent that runs on your local machine for software engineering tasks with MCP tool support.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Warp -->
<a href="./warp" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#0ea5e9,#0284c7);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Wa</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Warp</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Warp</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Modern terminal with Agent Mode. Extend with MCP servers for specialized tools via natural language.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Mac · Linux</span>
</div>
</div>
</a>

<!-- GitHub Copilot CLI -->
<a href="./github-copilot-cli" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#6e40c9,#553098);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">GH</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">GitHub Copilot CLI</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">GitHub</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">GitHub Copilot's coding agent in your terminal with MCP extensibility and GitHub integration.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Amazon Q Developer CLI -->
<a href="./amazon-q" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#ff9900,#e68a00);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">AQ</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Amazon Q Developer CLI</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">AWS · ★ 1.9k</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">AWS command-line tool with context-aware completions, MCP integration, and shell environment support.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Junie CLI -->
<a href="./junie-cli" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#e44332,#c73629);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Ju</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Junie CLI</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">JetBrains</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">JetBrains terminal agent. LLM-agnostic with MCP server support for external tools.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Amp -->
<a href="./amp" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#ff6b35,#e55a2b);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Am</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Amp</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Sourcegraph</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Sourcegraph terminal agent with code intelligence and MCP integration.</div>
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
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#22c55e,#16a34a);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Ai</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Aider</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source · ★ 25k+</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Git-native AI pair programmer. Multi-file editing, any LLM, automatic commits.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Codex CLI -->
<a href="./codex-cli" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#10a37f,#0d8c6e);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Cx</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Codex CLI</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">OpenAI</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">OpenAI lightweight terminal agent with MCP support via config.toml.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- gptme -->
<a href="./gptme" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#f59e0b,#d97706);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">gp</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">gptme</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Personal AI agent for the terminal. Code execution, self-correcting, MCP tools.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Open Interpreter -->
<a href="./open-interpreter" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#000,#333);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">OI</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Open Interpreter</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source · ★ 50k+</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Natural language computing. Run code, control your system, MCP tool access.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Claude Desktop -->
<a href="./claude-desktop" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#d4a574,#a87c5a);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Cl</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Claude Desktop</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Anthropic</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">The reference MCP client. Full protocol — tools, resources, prompts, sampling.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">stdio · Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac</span>
</div>
</div>
</a>

<!-- 5ire -->
<a href="./5ire" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#ec4899,#db2777);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">5i</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">5ire</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Cross-platform desktop AI assistant with MCP tools and knowledge bases.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Elia -->
<a href="./elia" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#a78bfa,#7c3aed);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">El</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Elia</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Terminal TUI for LLMs. Keyboard-centric, Ollama support, MCP client.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Msty -->
<a href="./msty" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#06b6d4,#0891b2);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Ms</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Msty</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">msty.app</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">AI studio with MCP tools, RAG knowledge stacks, and model comparison.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Jan -->
<a href="./jan" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#3b82f6,#2563eb);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Ja</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Jan</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Privacy-first offline AI with MCP. Run LLMs locally, Jan CLI for terminal agents.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- BoltAI -->
<a href="./boltai" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#f97316,#ea580c);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Bo</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">BoltAI</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">boltai.com</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Native Mac AI chat client. MCP tools, custom agents, multi-provider.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Mac</span>
</div>
</div>
</a>

<!-- Cherry Studio -->
<a href="./cherry-studio" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#ef4444,#dc2626);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">CS</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Cherry Studio</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Desktop AI client for multiple LLM providers with MCP tool integration.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- NextChat -->
<a href="./nextchat" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#14b8a6,#0d9488);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">NC</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">NextChat</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source · ★ 80k+</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Lightweight AI assistant. Deploy anywhere — Vercel, Docker, self-hosted. MCP support.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web · Desktop · Mobile</span>
</div>
</div>
</a>

<!-- chatmcp -->
<a href="./chatmcp" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#6366f1,#4f46e5);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">cm</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">chatmcp</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Dedicated MCP client with chat interface for tool discovery and interaction.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- DeepChat -->
<a href="./deepchat" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#06b6d4,#0891b2);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">DC</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">DeepChat</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">deepchat.dev</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Desktop AI partner. Multi-provider chat with MCP tool support.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- HyperChat -->
<a href="./hyperchat" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#8b5cf6,#7c3aed);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">HC</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">HyperChat</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Open LLM chat client with MCP productivity tools. Multi-model.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- ChatWise -->
<a href="./chatwise" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#fbbf24,#f59e0b);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">CW</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">ChatWise</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">chatwise.app</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Fast AI chatbot with MCP support. Optimized for speed on Apple platforms.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Mac · iOS</span>
</div>
</div>
</a>

<!-- AIQL TUUI -->
<a href="./aiql-tuui" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#a855f7,#9333ea);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">AQ</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">AIQL TUUI</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">aiql.com</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Full MCP protocol support — tools, prompts, resources, sampling. Native desktop.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Superinterface -->
<a href="./superinterface" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#22d3ee,#06b6d4);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">SI</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Superinterface</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">superinterface.ai</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Embeddable AI UI platform. MCP tools, voice chats, function calling.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web</span>
</div>
</div>
</a>

<!-- Lutra -->
<a href="./lutra" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#0ea5e9,#0284c7);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Lu</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Lutra</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">lutra.ai</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">MCP client built for everyone. Natural language workflows, non-developer friendly.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web</span>
</div>
</div>
</a>

<!-- y-cli -->
<a href="./y-cli" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#64748b,#475569);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">y</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">y-cli</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Minimalist terminal chat for AI models with MCP client support.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- MCP Playground -->
<a href="./mcp-playground" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#f43f5e,#e11d48);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">MP</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">MCP Playground</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">mcpplayground.com</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Online MCP server testing. Debug tools, inspect schemas, validate responses.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web</span>
</div>
</div>
</a>

<!-- MCP Connect -->
<a href="./mcp-connect" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#6366f1,#4f46e5);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">MC</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">MCP Connect</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Proxy bridge. Cloud AI ↔ local stdio MCP servers via HTTP.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">stdio ↔ HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

</div>

---

## FAQ

**Which CLI and desktop tools support MCP servers?**
Over 30 tools support MCP — Claude Code, Gemini CLI, OpenCode, Goose, Warp, GitHub Copilot CLI, Amazon Q Developer CLI, Aider, Codex CLI, Claude Desktop, Jan, Cherry Studio, and many more.

**How do I connect an MCP server to Claude Code?**
Run `claude mcp add vinkius https://edge.vinkius.com/{TOKEN}/mcp`. Configuration is stored locally.

**Can I use MCP servers with Gemini CLI?**
Yes. Add your Vinkius Cloud URL to `~/.gemini/settings.json` under the `mcpServers` key.

**What is the advantage of MCP in the terminal?**
CLI MCP clients excel at automation, scripting, and CI/CD integration. Pipe data, chain commands, and use MCP tools in shell scripts.

**Do CLI MCP clients support Streamable HTTP?**
Yes. All listed CLIs support Streamable HTTP transport, the protocol used by Vinkius Cloud.

**Can I use MCP CLI tools in CI/CD pipelines?**
Yes. CLI MCP clients are designed for scriptable, non-interactive use cases.
