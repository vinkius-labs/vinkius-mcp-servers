---
aside: false
title: "MCP Clients for Desktop Apps — Claude, ChatGPT, Gemini & More | Vinkius"
description: "Connect your Vinkius Cloud MCP server to Claude Desktop, ChatGPT, Gemini, Cherry Studio, LM Studio, and other AI desktop applications. Step-by-step setup guides."
head:
  - - meta
    - property: og:title
      content: "MCP Clients for Desktop Apps — Claude, ChatGPT, Gemini & More | Vinkius"
  - - meta
    - property: og:description
      content: "Connect your Vinkius Cloud MCP server to Claude Desktop, ChatGPT, Gemini, and other AI desktop apps."
  - - meta
    - name: keywords
      content: "MCP Claude Desktop, MCP ChatGPT, MCP Gemini, MCP Cherry Studio, MCP LM Studio, MCP LibreChat, MCP desktop app, connect MCP server Claude, AI chat MCP client, MCP app setup"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Which AI desktop apps support MCP?","acceptedAnswer":{"@type":"Answer","text":"Claude Desktop, ChatGPT, Claude.ai (Web), Cherry Studio, LM Studio, LibreChat, Jan, and Groq Desktop all support MCP servers. These apps let you connect external tools to AI conversations."}},{"@type":"Question","name":"How do I connect an MCP server to Claude Desktop?","acceptedAnswer":{"@type":"Answer","text":"Open Claude Desktop → Settings → Developer → Edit Config. Add your Vinkius Cloud server URL to the mcpServers section in the JSON config file. Restart Claude Desktop and your tools become available."}},{"@type":"Question","name":"Does ChatGPT support remote MCP servers?","acceptedAnswer":{"@type":"Answer","text":"Yes. The ChatGPT desktop app supports remote MCP servers via Streamable HTTP transport. Add your Vinkius Cloud MCP URL in ChatGPT settings to connect."}},{"@type":"Question","name":"Can I use multiple MCP servers in one app?","acceptedAnswer":{"@type":"Answer","text":"Yes. All listed apps support multiple simultaneous MCP server connections. Add multiple entries in your config — each server appears as a separate set of tools in the chat interface."}},{"@type":"Question","name":"What is the difference between MCP in apps vs IDEs?","acceptedAnswer":{"@type":"Answer","text":"MCP works identically in both — the protocol is the same. Apps use chat-based UIs where tools supplement conversation, while IDEs integrate tools into coding workflows."}},{"@type":"Question","name":"Are MCP connections from desktop apps secure?","acceptedAnswer":{"@type":"Answer","text":"Yes. All connections use HTTPS with HMAC-SHA256 signed tokens. Your MCP server on Vinkius Cloud enforces DLP, FinOps limits, and SSRF protection regardless of which client connects."}}]}'
---

# App Clients

Connect your Vinkius Cloud MCP server to AI desktop applications. Each app below supports MCP natively — pick yours for a step-by-step setup guide.

---

<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;margin:24px 0">

<!-- Claude Desktop -->
<a href="./claude-desktop" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#d4a574,#c4916c);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Cl</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Claude Desktop</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Anthropic</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">The first native MCP client. Chat with Claude on macOS and Windows with full MCP server integration.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac</span>
</div>
</div>
</a>

<!-- ChatGPT -->
<a href="./chatgpt" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#10a37f,#0d8a6a);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">GP</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">ChatGPT</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">OpenAI</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">OpenAI's desktop app with MCP support. Connect external tool servers to ChatGPT conversations.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac</span>
</div>
</div>
</a>

<!-- Claude.ai Web -->
<a href="./claude-web" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#c8956c,#b07850);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Cw</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Claude.ai (Web)</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Anthropic</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Chat with Claude models directly in the browser with MCP server integrations. No desktop app required.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web Browser</span>
</div>
</div>
</a>

<!-- Cherry Studio -->
<a href="./cherry-studio" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#f43f5e,#e11d48);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Ch</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Cherry Studio</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Cherry AI · ★ 41.5k</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Multi-provider AI desktop app with MCP support, knowledge base, and document processing capabilities.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">SSE</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac</span>
</div>
</div>
</a>

<!-- Jan -->
<a href="./jan" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#1e40af,#1e3a8a);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Ja</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Jan</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Menlo Research · ★ 41.1k</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Open-source ChatGPT alternative that runs 100% offline with local AI models, while also supporting cloud providers and MCP.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- LibreChat -->
<a href="./librechat" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#2563eb,#1d4ed8);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Lc</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">LibreChat</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Danny Avila · ★ 34.6k</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Open-source multi-model chat app for macOS and Windows with MCP server support and self-hosting options.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">SSE</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Web</span>
</div>
</div>
</a>

<!-- Le Chat (Mistral) -->
<a href="./le-chat" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#ff7000,#e65c00);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Mi</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Le Chat</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Mistral AI</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Mistral AI's conversational assistant with MCP server support for connecting external tools and data sources.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web</span>
</div>
</div>
</a>

<!-- LM Studio -->
<a href="./lm-studio" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#22c55e,#15803d);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">LM</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">LM Studio</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">LM Studio</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Desktop app for running local LLMs with MCP server support. Connects to both local and remote MCP servers.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Groq Desktop -->
<a href="./groq-desktop" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#f97316,#c2410c);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Gr</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Groq Desktop</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Groq</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Desktop app for Groq's ultra-fast AI models with MCP tool execution and streaming responses.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac</span>
</div>
</div>
</a>

<!-- 5ire -->
<a href="./5ire" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#3b82f6,#1d4ed8);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">5i</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">5ire</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">5ire</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Cross-platform desktop AI assistant and MCP client. Supports major providers with local knowledge bases and MCP tools.</div>
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
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#a855f7,#7c3aed);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Ms</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Msty</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Msty Studio</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">All-in-one AI studio with MCP toolbox. Plug into APIs, MCP tools, and knowledge stacks from a single app.</div>
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
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#facc15,#eab308);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#1a1a2e;flex-shrink:0">Bo</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">BoltAI</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">BoltAI</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Native macOS AI chat client with MCP support. Connects to multiple AI providers and local models in one app.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Mac</span>
</div>
</div>
</a>

<!-- HyperChat -->
<a href="./hyperchat" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#14b8a6,#0d9488);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">HC</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">HyperChat</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Multi-LLM chat client with MCP protocol integration for productivity tools and external service connections.</div>
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
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#6366f1,#4f46e5);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">DC</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">DeepChat</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">DeepChat</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Desktop AI partner with MCP support. Multi-model conversations with tool integrations on your desktop.</div>
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
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#0ea5e9,#0284c7);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">NC</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">NextChat</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source · ★ 85k+</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Popular open-source AI chat UI with MCP support. One-click deploy to Vercel with multi-provider support.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web · Desktop</span>
</div>
</div>
</a>

<!-- TypingMind -->
<a href="./typingmind" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#6366f1,#4f46e5);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">TM</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">TypingMind</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">TypingMind</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Advanced chat UI for AI models with MCP support. Supports multiple API providers, plugins, and custom agents.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web · PWA</span>
</div>
</div>
</a>

<!-- Chatbox -->
<a href="./chatbox" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#22c55e,#16a34a);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Cb</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Chatbox</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Chatbox AI</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Cross-platform desktop AI client with MCP support. Works with multiple AI APIs and local models via Ollama.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux · Mobile</span>
</div>
</div>
</a>

<!-- Open WebUI -->
<a href="./open-webui" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#3b82f6,#2563eb);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">OW</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Open WebUI</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source · ★ 85k+</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Self-hosted AI platform with MCP integration. Supports Ollama, OpenAI-compatible APIs, and local models.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web · Desktop</span>
</div>
</div>
</a>

<!-- GPT4All -->
<a href="./gpt4all" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#059669,#047857);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">G4</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">GPT4All</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Nomic AI · ★ 73k+</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Privacy-focused desktop app for running open-source LLMs locally with MCP tool support.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Poe -->
<a href="./poe" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#7c3aed,#5b21b6);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Po</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Poe</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Quora</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Multi-model AI platform by Quora with MCP support. Access GPT-4, Claude, Gemini, and custom bots in one app.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Web · Mobile</span>
</div>
</div>
</a>

<!-- Perplexity -->
<a href="./perplexity" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#20b89a,#1a9f85);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Px</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Perplexity</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Perplexity AI</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">AI-powered search and conversational assistant with MCP integration. Desktop and mobile apps with real-time web search.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Web · Mobile</span>
</div>
</div>
</a>

<!-- Ollama -->
<a href="./ollama" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#f5f5f5,#e5e5e5);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#1a1a2e;flex-shrink:0">Ol</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Ollama</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Ollama · ★ 120k+</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Run LLMs locally with MCP server integration. Supports hundreds of open-source models with a simple API.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- AIQL TUUI -->
<a href="./aiql-tuui" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#ef4444,#dc2626);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">AQ</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">AIQL TUUI</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">AIQL</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Native cross-platform AI chat app with full MCP support. Configurable agents, dynamic LLM switching, and local model support.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Raycast AI -->
<a href="./raycast-ai" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#ff6363,#e84545);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Ra</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Raycast AI</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Raycast</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">macOS productivity launcher with built-in AI assistant and MCP integration. Access AI tools from anywhere via hotkey.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Mac</span>
</div>
</div>
</a>

<!-- Dive AI -->
<a href="./dive-ai" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#0ea5e9,#0284c7);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Di</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Dive AI</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Dive</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">AI agent with full MCP client integration. Connects to multiple providers and MCP servers for tool-enhanced conversations.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- chatmcp -->
<a href="./chatmcp" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#818cf8,#6366f1);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">CM</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">chatmcp</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Cross-platform MCP chat client. Supports OpenAI, Claude, Ollama, and DeepSeek with SSE transport and auto server selection.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- oterm -->
<a href="./oterm" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#a3e635,#65a30d);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">oT</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">oterm</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Terminal-based Ollama client with MCP tools and prompts integration. Persistent sessions and thinking mode support.</div>
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
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#f97316,#ea580c);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Si</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Superinterface</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Open-source platform for building AI-powered UIs with native MCP server support, voice chat, and interactive components.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web</span>
</div>
</div>
</a>

<!-- Postman -->
<a href="./postman" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#ff6c37,#e5532e);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Pm</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Postman</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Postman Inc.</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">API platform with built-in MCP client for developing and testing MCP servers. Generate MCP servers from existing APIs.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux · Web</span>
</div>
</div>
</a>

<!-- AnythingLLM -->
<a href="./anythingllm" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#8b5cf6,#7c3aed);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">AL</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">AnythingLLM</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Mintplex Labs</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">All-in-one AI desktop app with full MCP compatibility. Supports local and cloud LLMs, RAG, and multi-user workspaces.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- KoboldCpp -->
<a href="./koboldcpp" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#d946ef,#a855f7);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Kc</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">KoboldCpp</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Local AI text generation with MCP server support and tool calling. Single executable, CPU and GPU support.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- LocalAI -->
<a href="./localai" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#14b8a6,#0d9488);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">LA</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">LocalAI</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source · ★ 30k+</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Free, open-source OpenAI alternative with MCP/agentic capabilities. Run LLMs locally on consumer hardware.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux · Docker</span>
</div>
</div>
</a>

<!-- SillyTavern -->
<a href="./sillytavern" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#ec4899,#db2777);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">ST</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">SillyTavern</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">AI chat and roleplay UI with MCP-compatible backends. Supports cloud and local LLMs with extensive customization.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Khoj -->
<a href="./khoj" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#fbbf24,#f59e0b);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#1a1a2e;flex-shrink:0">Kh</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Khoj</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source · ★ 25k+</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Offline-first AI personal assistant with MCP integration. Search and chat with your notes, documents, and images.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux · Web</span>
</div>
</div>
</a>

<!-- CopilotKit -->
<a href="./copilotkit" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#3b82f6,#1d4ed8);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">CK</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">CopilotKit</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source · ★ 18k+</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Build in-app AI copilots with native MCP support. React components for AI chat, actions, and MCP server connections.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web · React</span>
</div>
</div>
</a>

<!-- Chainlit -->
<a href="./chainlit" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#22d3ee,#06b6d4);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Ch</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Chainlit</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source · ★ 12k+</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Build AI apps in Python with MCP client support. Modern UI for agentic workflows and MCP tool orchestration.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web · Python</span>
</div>
</div>
</a>

<!-- Copilot Studio -->
<a href="./copilot-studio" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#0078d4,#004578);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">CS</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Copilot Studio</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Microsoft</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Microsoft's SaaS agent platform with MCP integration. Build autonomous agents with MCP tool connections and M365 deployment.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web · Enterprise</span>
</div>
</div>
</a>

<!-- TeamSpark -->
<a href="./teamspark" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#f472b6,#ec4899);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">TS</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">TeamSpark</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">TeamSpark AI</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">AI Workbench for building intelligent agents with MCP. Supports Anthropic, OpenAI, Google, AWS Bedrock, and Ollama.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- MCPJam -->
<a href="./mcpjam" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#a78bfa,#7c3aed);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">MJ</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">MCPJam</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">MCP inspector and client for testing and debugging MCP servers. Essential tool for MCP server development.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web</span>
</div>
</div>
</a>

<!-- Genkit -->
<a href="./genkit" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#4285f4,#ea4335);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Gk</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Genkit</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Google Firebase</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Firebase GenAI SDK with MCP client and server support via genkitx-mcp plugin. Build AI features with MCP tools.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Node.js · Go</span>
</div>
</div>
</a>

<!-- PydanticAI -->
<a href="./pydanticai" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#e11d48,#be123c);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Py</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">PydanticAI</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Pydantic · ★ 10k+</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Python AI agent framework with MCP and A2A support. Type-safe agents that connect to MCP servers for tool access.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Python</span>
</div>
</div>
</a>

<!-- Composio -->
<a href="./composio" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#f59e0b,#d97706);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Co</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Composio</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Composio · ★ 16k+</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">AI agent toolkit with 100+ MCP server connections. Secure API and tool integrations for agents and LLMs.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web · Python · JS</span>
</div>
</div>
</a>

<!-- Agno -->
<a href="./agno" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#06b6d4,#0891b2);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Ag</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Agno</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Agno · ★ 20k+</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Python framework for complex agentic workflows with MCP registry integration. Connect agents to MCP servers as tools.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Python</span>
</div>
</div>
</a>

<!-- Slack MCP -->
<a href="./slack-mcp" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#e01e5a,#36c5f0);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Sl</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Slack MCP</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Salesforce</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Bridge Slack conversations with AI models via MCP. Leverage tools and interact with systems directly through Slack.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web · Desktop · Mobile</span>
</div>
</div>
</a>

<!-- LobeHub -->
<a href="./lobehub" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#64748b,#475569);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">LH</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">LobeHub</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source · ★ 55k+</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Modern AI chat framework with MCP plugin support. Multi-model, plugin system, and extensive customization.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web · Desktop</span>
</div>
</div>
</a>

<!-- Smithery -->
<a href="./smithery" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#c084fc,#a855f7);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Sm</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Smithery</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Smithery</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">MCP server registry and gateway. Browse, deploy, and connect to thousands of MCP servers from one platform.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web</span>
</div>
</div>
</a>

<!-- MCPHub -->
<a href="./mcphub" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#34d399,#10b981);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">MH</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">MCPHub</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Unified MCP server management platform. Centralized configuration, marketplace, and smart routing for MCP servers.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web · Self-hosted</span>
</div>
</div>
</a>

<!-- MCP Chat -->
<a href="./mcp-chat" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#fb923c,#f97316);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">MC</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">MCP Chat</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Cross-platform desktop chat app built specifically for MCP. Interact with LLMs through a standardized MCP interface.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Win · Mac · Linux</span>
</div>
</div>
</a>

<!-- Apigene -->
<a href="./apigene" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#84cc16,#65a30d);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Ap</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Apigene</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Apigene</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">MCP Gateway for connecting AI agents to APIs and MCP servers. Runtime layer with API transformation and routing.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web · API</span>
</div>
</div>
</a>

<!-- Dify -->
<a href="./dify" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#1d4ed8,#3b82f6);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Di</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Dify</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source · ★ 55k+</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Open-source LLM app development platform with visual AI workflow builder. Create MCP-compatible chatbots and agents.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web · Self-hosted</span>
</div>
</div>
</a>

<!-- Flowise -->
<a href="./flowise" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#2563eb,#60a5fa);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Fw</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Flowise</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source · ★ 35k+</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Drag-and-drop UI for building LLM flows and AI agents with MCP tool integration. Low-code RAG pipelines.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web · Self-hosted</span>
</div>
</div>
</a>

<!-- n8n -->
<a href="./n8n" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#ea4b71,#ff6d5a);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">n8</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">n8n</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source · ★ 70k+</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Workflow automation platform with AI agent capabilities and MCP tool nodes. Connect 400+ integrations to AI.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web · Self-hosted</span>
</div>
</div>
</a>

<!-- Langflow -->
<a href="./langflow" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#ff7043,#ff5722);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Lf</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Langflow</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">DataStax · Open-Source</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Visual framework for building multi-agent AI applications with MCP component support. Code-customizable nodes.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Web · Python</span>
</div>
</div>
</a>

<!-- CrewAI -->
<a href="./crewai" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#7c3aed,#a78bfa);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Cr</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">CrewAI</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source · ★ 25k+</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Multi-agent orchestration framework with MCP tool integration. Define AI agent teams with roles, goals, and MCP tools.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Python</span>
</div>
</div>
</a>

<!-- AutoGen -->
<a href="./autogen" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#0078d4,#00bcf2);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">AG</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">AutoGen</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Microsoft · ★ 40k+</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Microsoft's multi-agent framework with MCP tool support. Build conversational AI agent systems with AutoGen Studio GUI.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Python · Web</span>
</div>
</div>
</a>

<!-- Semantic Kernel -->
<a href="./semantic-kernel" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#5c2d91,#b4009e);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">SK</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Semantic Kernel</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Microsoft · ★ 27k+</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Microsoft's AI orchestration SDK with MCP integration. Build agents and multi-agent systems in C#, Python, and Java.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">C# · Python · Java</span>
</div>
</div>
</a>

<!-- LangGraph -->
<a href="./langgraph" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#1c3c3c,#2dd4bf);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">LG</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">LangGraph</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">LangChain</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Graph-based orchestration framework for stateful AI agents with MCP tool nodes. Build complex multi-actor workflows.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Python · JS</span>
</div>
</div>
</a>

<!-- SmolAgents -->
<a href="./smolagents" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#fcd34d,#f59e0b);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#1a1a2e;flex-shrink:0">🤗</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">SmolAgents</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Hugging Face</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">Lightweight AI agent library with native MCP server tool support. Code agents that execute actions from any MCP server.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Python</span>
</div>
</div>
</a>

<!-- Mastra -->
<a href="./mastra" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#6366f1,#818cf8);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0">Ma</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">Mastra</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">Open-Source</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">TypeScript AI framework that acts as both MCP client and server. Build AI apps with tools, resources, and prompts.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">TypeScript</span>
</div>
</div>
</a>

<!-- BeeAI -->
<a href="./beeai" style="text-decoration:none;color:inherit">
<div style="border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;background:#09090f;transition:border-color 0.2s,transform 0.2s;cursor:pointer" onmouseover="this.style.borderColor='rgba(34,211,238,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.transform='none'">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
<div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#facc15,#eab308);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#1a1a2e;flex-shrink:0">🐝</div>
<div>
<div style="font-size:16px;font-weight:700;color:#fff">BeeAI</div>
<div style="font-size:11px;color:rgba(255,255,255,0.35)">IBM Research · Linux Foundation</div>
</div>
</div>
<div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6">IBM's open-source multi-agent AI framework with MCP integration. Dynamic workflows, built-in memory, and observability.</div>
<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(52,211,153,0.1);color:rgba(52,211,153,0.8);border:1px solid rgba(52,211,153,0.15)">Streamable HTTP</span>
<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.08)">Python · TypeScript</span>
</div>
</div>
</a>

</div>

---

## FAQ

**Which AI desktop apps support MCP?**
Over 60 AI apps, platforms, and frameworks support MCP, including Claude Desktop, ChatGPT, Claude.ai, Cherry Studio, Jan, LibreChat, Le Chat (Mistral), LM Studio, Groq Desktop, Dify, n8n, Flowise, Langflow, LobeHub, AnythingLLM, Open WebUI, LocalAI, Postman, Copilot Studio, CrewAI, AutoGen, Semantic Kernel, LangGraph, SmolAgents, Mastra, BeeAI, and many more.

**How do I connect an MCP server to Claude Desktop?**
Open Claude Desktop → Settings → Developer → Edit Config. Add your Vinkius Cloud server URL to the `mcpServers` section. Restart Claude Desktop.

**Does ChatGPT support remote MCP servers?**
Yes. The ChatGPT desktop app supports remote MCP servers via Streamable HTTP transport.

**Can I use multiple MCP servers in one app?**
Yes. All listed apps support multiple simultaneous MCP server connections.

**What is the difference between MCP in apps vs IDEs?**
MCP works identically — apps use chat-based UIs, IDEs integrate tools into coding workflows.

**Are MCP connections from desktop apps secure?**
Yes. All connections use HTTPS with HMAC-SHA256 signed tokens. Vinkius Cloud enforces DLP, FinOps limits, and SSRF protection.

