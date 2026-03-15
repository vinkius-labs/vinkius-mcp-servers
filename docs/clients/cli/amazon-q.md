---
title: "Connect MCP Server to Amazon Q Developer CLI — Setup Guide | Vinkius"
description: "Add MCP servers to Amazon Q Developer CLI. AWS-native AI with context-aware completions, MCP integration, and inline shell assistance."
head:
  - - meta
    - property: og:title
      content: "Connect MCP Server to Amazon Q Developer CLI — Setup Guide | Vinkius"
  - - meta
    - property: og:description
      content: "Add MCP servers to Amazon Q CLI. AWS-native AI with shell completions and MCP."
  - - meta
    - name: keywords
      content: "Amazon Q Developer CLI MCP, MCP Amazon Q, AWS Q CLI MCP, connect MCP server Amazon Q, Vinkius Amazon Q, Amazon Q terminal MCP"
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"HowTo","name":"Connect MCP Server to Amazon Q CLI","step":[{"@type":"HowToStep","name":"Get URL","text":"Create a Connection Token in Vinkius Cloud."},{"@type":"HowToStep","name":"Configure","text":"Add the Vinkius URL to your Amazon Q Developer CLI MCP configuration."},{"@type":"HowToStep","name":"Use","text":"Start a Q Developer session. MCP tools extend the agent beyond AWS services."}]}'
---

# Amazon Q Developer CLI

Amazon Q Developer CLI brings AWS-native AI assistance to your terminal. It provides context-aware shell completions, infrastructure generation, and debugging — right alongside your regular shell commands. MCP support lets you extend its reach beyond AWS, connecting tools for non-AWS databases, monitoring, or internal APIs.

---

<div style="margin:24px 0;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;background:#09090f;font-family:Inter,system-ui,sans-serif">
<div style="padding:24px;display:flex;align-items:center;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#ff9900,#e68a00);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff;flex-shrink:0">AQ</div>
<div>
<div style="font-size:20px;font-weight:700;color:#fff">Amazon Q Developer CLI</div>
<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">AWS · <a href="https://aws.amazon.com/q/developer/" rel="nofollow noopener noreferrer" target="_blank" style="color:rgba(34,211,238,0.7);text-decoration:none">aws.amazon.com/q</a></div>
</div>
</div>
<div style="padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap">
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">TRANSPORT</span><div style="font-size:13px;color:rgba(52,211,153,0.9);margin-top:4px">Streamable HTTP ✓</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">PLATFORM</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">Windows · macOS · Linux</div></div>
<div><span style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px">MCP VIA</span><div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">JSON Config</div></div>
</div>
</div>

## AWS Expertise Meets External Tools

Amazon Q Developer already understands AWS infrastructure — IAM policies, CloudFormation templates, Lambda functions, and more. MCP extends that knowledge by plugging in tools that cover everything AWS doesn't: your own database schemas, third-party monitoring, internal documentation, or deployment pipelines managed outside AWS.

This is particularly valuable in multi-cloud or hybrid setups. A single Q Developer session can generate an AWS Lambda function while also querying a non-AWS database schema via MCP to ensure type safety.

What stands out for MCP users:

- **Shell integration** — tab completions that include MCP tool suggestions
- **AWS context** — understands your AWS account structure, IAM roles, and services
- **Inline explanations** — the agent explains shell output and MCP tool results
- **Security scanning** — built-in code review for vulnerabilities
- **Free tier** — available in the AWS Q free tier with daily request limits

## Connecting to Vinkius Cloud

### 1. Create a Token

Head to [Vinkius Cloud](https://cloud.vinkius.com) → select your server → **Connection Tokens** → **Create**. Copy the resulting URL.

### 2. Add MCP Configuration

Configure your Vinkius MCP server in Amazon Q Developer CLI settings:

```json
{
  "mcpServers": {
    "vinkius": {
      "url": "https://edge.vinkius.com/{TOKEN}/mcp"
    }
  }
}
```

### 3. Start Using Tools

Open a Q Developer chat session. The agent now has access to both AWS-native tools and your Vinkius Cloud MCP tools in the same conversation.

---

## FAQ

**Can Amazon Q use MCP alongside AWS services?**
Yes. MCP tools appear alongside Q Developer's built-in AWS capabilities. The agent chooses the right tool based on your request.

**Is Amazon Q Developer CLI free?**
There is a free tier with daily request limits. Pro plans are available through AWS Builder ID or AWS IAM Identity Center.

**Does it work outside AWS environments?**
Absolutely. While Q Developer excels with AWS, its shell completions and MCP tools work on any project regardless of cloud provider.

**How does MCP auth work with Q Developer?**
Vinkius Cloud handles auth via the Connection Token embedded in the URL. No additional AWS IAM configuration is needed for MCP.
