<p align="center">
  <a href="https://vinkius.com">
    <img src="https://site-assets.vinkius.com/vk/logo-black-min.png" alt="Vinkius — The Governance Layer for MCP Servers" width="280" />
  </a>
</p>

<h3 align="center">Turn Anything into an MCP Server — Governed from Day One</h3>

<p align="center">
  The AI Gateway Runtime. Deploy, secure, and monetize Model Context Protocol servers with V8 isolation, zero-trust DLP, audit trails, and kill switch — built into every deploy.
</p>

<p align="center">
  <a href="https://github.com/vinkius-labs/vinkius-mcp-servers/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="License: Apache 2.0" /></a>
  <a href="https://modelcontextprotocol.io/"><img src="https://img.shields.io/badge/MCP-Ready-success" alt="Model Context Protocol Ready" /></a>
  <a href="https://www.npmjs.com/package/@vurb/core"><img src="https://img.shields.io/npm/v/@vurb/core?label=%40vurb%2Fcore&color=orange" alt="npm @vurb/core" /></a>
  <a href="https://discord.gg/vinkius"><img src="https://img.shields.io/badge/Discord-Join_Community-7289DA?logo=discord&logoColor=white" alt="Join Discord" /></a>
  <a href="https://vinkius.com"><img src="https://img.shields.io/badge/Website-vinkius.com-brightgreen" alt="Vinkius Website" /></a>
</p>

<p align="center">
  <a href="https://docs.vinkius.com">Documentation</a> · <a href="https://cloud.vinkius.com">Cloud Dashboard</a> · <a href="https://vinkius.com/blog">Blog</a>
</p>

---

## What is Vinkius?

**Vinkius** is the infrastructure layer where AI meets enterprise data — with permissions, audit trails, and kill switches built into the protocol runtime.

The [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) — created by Anthropic, adopted by OpenAI, Google, Microsoft, Apple, and the Linux Foundation — is the standard for connecting AI agents to external tools and data. But MCP has no built-in governance. No authentication. No data loss prevention. No audit trail. **Vinkius fills that gap.**

Three pillars. One platform:

- **[Vurb.ts](https://vurb.vinkius.com)** — Open-source TypeScript framework for building production-grade MCP servers. OpenAPI → governed MCP server in one command.
- **[Vinkius Cloud](https://cloud.vinkius.com)** — Managed runtime with V8 sandbox isolation, zero-trust DLP, cost profiler, audit dashboard, and kill switch. Eight security layers ship with every deploy — zero config.
- **[Marketplace](https://vinkius.com/marketplace)** — Publish and sell MCP servers and domain expertise as recurring subscriptions.

> **HTTP needed TLS. Payments needed Stripe. MCP needs Vinkius.**

Works with **Claude Desktop**, **Cursor**, **Copilot**, **Windsurf**, **Cline**, and **ChatGPT**.

---

## Why MCP Servers Need Governance

MCP reached **97 million monthly SDK downloads** in just 16 months. But the infrastructure to run, govern, and monetize MCP servers securely **doesn't exist yet**.

| Threat | Impact |
|--------|--------|
| **24% of MCP servers** have zero authentication | 1,862 servers exposed on the public internet *(Zuplo, 2026)* |
| **89% of enterprise AI usage** is invisible to security teams | AI is the #1 data exfiltration channel *(ISF, 2026)* |
| **30+ MCP CVEs** filed in two months | Including remote code execution in Azure MCP *(NIST, 2026)* |
| **$4.44M** average breach cost | Shadow AI adds **$670K** per incident *(IBM, 2025)* |
| **EU AI Act enforcement: August 2, 2026** | Fines up to **7% of global revenue** |

McKinsey: *"Governance — not speed — is the differentiator."* JPMorgan Chase CISO: *"Convenience can no longer outpace control."*

**[Learn more about MCP security →](https://docs.vinkius.com/security/)**

---

## Key Features

### Eight Security Layers — Every Deploy, Zero Config

| Layer | What It Does |
|-------|-------------|
| **V8 Sandbox Isolation** | Every MCP server runs in a sealed V8 isolate — no `fs`, `process`, `require`, or network access. Auto-recovery on OOM. |
| **Zero-Trust DLP** | Data Loss Prevention with PII masking via `fast-redact`. Sensitive fields (passwords, SSNs, credit cards) are stripped before they reach the AI agent. |
| **HMAC Lockfile** | SHA-256 behavioral fingerprinting of every tool contract. CI/CD gate via `vurb lock --check` — blocks deploys on contract drift. |
| **SSRF Proxy** | All outbound requests pass through an SSRF-safe proxy. Only allowed public URLs can be accessed. |
| **Token Economics** | Per-tool token cost estimation. Field-level breakdown showing which response fields consume the most context. Risk classification per tool. |
| **Stateful Sessions** | Full session persistence with finite state machine gates — physically removes tools from `tools/list` based on workflow state. |
| **Audit Dashboard** | Real-time audit trail of every tool call, every response, every data access — exportable for compliance. |
| **Kill Switch** | Instant remote shutdown of any MCP server. One click. No waiting for deploys. |

**[Explore all security features →](https://docs.vinkius.com/security/)**

---

### Vurb.ts — The MCP Server Framework

Build production-grade MCP servers in TypeScript with built-in governance, full type safety, and the MVA (Model-View-Agent) architecture pattern.

```typescript
import { initVurb, defineModel, createPresenter } from '@vurb/core';

const f = initVurb<{ apiKey: string }>();

// Model — one file, one entity, one source of truth
const OrderModel = defineModel('Order', m => {
  m.casts({
    id:     m.string('Order ID'),
    status: m.enum('Status', ['pending', 'shipped', 'delivered', 'cancelled']),
    total:  m.number('Order total in cents'),
  });

  m.timestamps();
  m.hidden(['internal_id']);
  m.guarded(['id', 'created_at', 'updated_at']);

  m.fillable({
    create: ['status', 'total'],
    update: ['status'],
    filter: ['status'],
  });
});

// Presenter — Egress Firewall & perception layer
const OrderPresenter = createPresenter('Order')
  .schema(OrderModel)
  .systemRules([
    'Always display monetary values as formatted currency.',
    'Never expose internal IDs to the end user.',
  ]);

// Query — inputs derived from Model's 'filter' profile
f.query('orders.list')
  .describe('List recent orders for the authenticated user')
  .fromModel(OrderModel, 'filter')
  .withOptionalNumber('limit', 'Maximum number of orders (default: 20)')
  .returns(OrderPresenter)
  .handle(async (input, ctx) => {
    return await db.orders.findMany({ where: { status: input.status }, take: input.limit ?? 20 });
  });

// Mutation — inputs derived from Model's 'update' profile
f.mutation('orders.cancel')
  .describe('Permanently cancel an order')
  .withString('orderId', 'The order ID to cancel')
  .handle(async (input, ctx) => {
    return await db.orders.cancel(input.orderId);
  });
```

**Why Vurb.ts?**

- **Semantic verbs** — `f.query()` marks tools as read-only. `f.mutation()` marks them as destructive. AI clients show confirmation dialogs automatically.
- **`defineModel()` data layer** — Eloquent-inspired field definitions with `m.casts()`, `m.hidden()`, `m.guarded()`, and `m.fillable()` profiles. One model, one source of truth.
- **Presenter firewall** — `createPresenter()` binds a Model and system rules. Undeclared fields are stripped in RAM. PII never reaches the AI agent.
- **File-based routing** — `src/tools/orders/list.ts` → `orders.list`. No central imports.
- **OpenAPI generator** — `npx @vurb/openapi-gen --input ./api.yaml` generates a full governed MCP server from any OpenAPI spec.
- **Deploy anywhere** — Cloudflare Workers, Vercel, AWS Lambda, or Vinkius Cloud with one command.

```bash
npm install @vurb/core
```

**[Read the Vurb.ts documentation →](https://vurb.vinkius.com)**

---

### Vinkius Cloud — Managed MCP Runtime

Connect any API, deploy in seconds, and govern everything automatically. No code required when using API Proxy mode.

**Two deployment modes:**

| Mode | How It Works | Best For |
|------|-------------|----------|
| **API Proxy** | Paste your OpenAPI spec + credentials. The runtime generates MCP tools automatically via `@vurb/openapi-gen`. | API & Product Owners — no code required |
| **Edge Bundle** | Build a Vurb.ts server locally, compile to IIFE bundle (≤512KB), deploy to V8 isolate. | Developers — full control, custom logic |

**Connect to your AI editor in 30 seconds:**

```jsonc
// Claude Desktop: ~/Library/Application Support/Claude/claude_desktop_config.json
// Cursor: Settings → MCP Servers
{
  "mcpServers": {
    "my-server": {
      "url": "https://edge.vinkius.com/YOUR_TOKEN/mcp"
    }
  }
}
```

**Cloud plans:**

| | Free | Developer | Team | Business |
|--|------|-----------|------|----------|
| MCP Servers | 2 | 10 | 50 | Unlimited |
| Requests/mo | 1,000 | 50,000 | 500,000 | Custom |
| DLP & PII Masking | — | — | ✅ | ✅ |
| Audit Trail | — | — | ✅ | ✅ |
| Kill Switch | — | ✅ | ✅ | ✅ |
| HMAC Lockfile | — | — | ✅ | ✅ |
| SSO / SAML | — | — | — | ✅ |

**[Start free on Vinkius Cloud →](https://cloud.vinkius.com)**

---

### Marketplace — Monetize Your MCP Servers

The first commerce platform built specifically for MCP servers. Publish, sell, and distribute your integrations as recurring subscriptions.

- **For developers:** Build MCP servers with Vurb.ts, publish to the marketplace, earn recurring revenue.
- **For domain experts:** Turn compliance frameworks, medical protocols, or engineering standards into AI-ready Skills — no code required.
- **For buyers:** Discover and subscribe to governed MCP servers. Every server comes with Vinkius Cloud security built in.

**[Explore the Marketplace →](https://vinkius.com/marketplace)**

---

## MCP Server Platform Comparison

Vinkius is the only platform that covers all three layers of the MCP server economy: **infrastructure**, **governance**, and **distribution**.

### Infrastructure

| | V8 Sandbox | Stateful Sessions | Microsecond Cold Start | Resource Limits | Multi-Region |
|--|:---:|:---:|:---:|:---:|:---:|
| Generic compute (Cloudflare, AWS, etc.) | Partial | ❌ | ❌ | ✅ | ✅ |
| MCP hosting platforms | ❌ | ❌ | ❌ | Partial | ❌ |
| **Vinkius Cloud** | ✅ | ✅ | ✅ | ✅ | ✅ |

### Security & Governance

| | Zero-Trust DLP | HMAC Lockfile | Token Economics | Kill Switch | Audit Trail |
|--|:---:|:---:|:---:|:---:|:---:|
| Security scanners | Partial | ❌ | ❌ | ❌ | ❌ |
| MCP hosting platforms | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Vinkius Cloud** | ✅ | ✅ | ✅ | ✅ | ✅ |

### Distribution

| | Commerce (Stripe) | No-Code Skills | Managed Hosting | Governance Built-in |
|--|:---:|:---:|:---:|:---:|
| MCP directories | ❌ | ❌ | Partial | ❌ |
| **Vinkius Marketplace** | ✅ | ✅ | ✅ | ✅ |



---

## EU AI Act Compliance

The EU AI Act takes effect on **August 2, 2026**. Any organization deploying AI agents with MCP servers needs governance infrastructure that meets the new regulatory requirements.

Vinkius provides:

- **Audit trails** — Complete record of every AI agent action, tool call, and data access
- **Data Loss Prevention** — PII masking and field-level access controls prevent sensitive data from reaching AI models
- **Behavioral contracts** — HMAC-signed lockfiles ensure tool behavior doesn't change between deploys
- **Kill switch** — Instant shutdown capability for any MCP server in production
- **Token economics** — Cost visibility and budget controls for AI agent compute
- **Session governance** — Finite state machine gates enforce correct tool call ordering



---

## Ecosystem & Packages

The Vurb.ts ecosystem includes official packages for common integrations:

| Package | Description |
|---------|-------------|
| [`@vurb/core`](https://www.npmjs.com/package/@vurb/core) | Core framework — MVA architecture, Presenter, DLP engine |
| `@vurb/openapi-gen` | Generate governed MCP servers from any OpenAPI spec |
| `@vurb/n8n` | Connect n8n workflows as MCP tools with hot-reload |
| `@vurb/aws` | Auto-discover AWS Lambda functions and Step Functions |
| `@vurb/skills` | Author AI Skills in plain text (SKILL.md) |
| `@vurb/cloudflare` | Deploy to Cloudflare Workers |
| `@vurb/vercel` | Deploy to Vercel Edge Functions |
| `@vurb/oauth` | OAuth 2.0 authentication for MCP servers |
| `@vurb/jwt` | JWT-based authentication |
| `@vurb/api-key` | API key authentication |
| `@vurb/inspector` | Real-time debugging TUI for MCP servers |
| `@vurb/testing` | Testing utilities for MCP server development |



---

## Deploy to Vinkius Cloud

Go from zero to a live, fully governed MCP server in under 60 seconds using the `vurb` CLI.

### Step 1: Scaffold a New MCP Server

```bash
# Create a new project with the Vurb CLI
npx vurb create my-server

# Or with specific options
npx vurb create my-server --vector prisma --transport sse
```

Available vectors: `vanilla`, `prisma`, `n8n`, `openapi`, `oauth`

### Step 2: Develop Locally with Hot Reload

```bash
cd my-server
npm install

# Start the dev server with automatic reload on file changes
npx vurb dev --server ./src/server.ts
```

The dev server runs locally via stdio — test directly with Claude Desktop or Cursor while you build.

### Step 3: Generate the Governance Lockfile

```bash
# Generate vurb-lock.json — SHA-256 behavioral fingerprint of every tool
npx vurb lock --server ./src/server.ts

# Use in CI/CD to block deploys on contract drift
npx vurb lock --check
```

The lockfile captures the exact schema, parameters, and behavior of every tool. If a dependency silently changes your tool contract, the CI gate catches it before anything reaches production.

### Step 4: Link to Vinkius Cloud

```bash
# Set the target server (UUID from your Cloud dashboard)
npx vurb remote --server-id YOUR_SERVER_UUID
```

Then add your deploy token to `.env`:

```env
VURB_DEPLOY_TOKEN=your-connection-token-from-dashboard
```

### Step 5: Deploy to Edge

```bash
npx vurb deploy
```

The CLI bundles your server into a self-contained IIFE (esbuild, tree-shaken, minified), compresses it with gzip, and uploads it directly to a V8 isolate on Vinkius Cloud:

```
  ✔ Reading configuration
  ✔ Resolving entrypoint (src/server.ts)
  ✔ Bundling with esbuild
  ✔ Compressing (148.2KB -> 42.1KB gzip, 72% smaller)
  ✔ Deploying to Edge

  my-server — deployed to edge
  id:      d7f3a1b2-...
  entry:   src/server.ts
  size:    148.2KB -> 42.1KB gzip (72% smaller)
  url:     https://mcp.vinkius.com/sse?token=YOUR_TOKEN
  time:    3.8s

  Vurb -> Vinkius Edge
```

Your MCP server is now live — with all eight security layers active. Connect it to any AI editor:

```jsonc
// Claude Desktop: ~/Library/Application Support/Claude/claude_desktop_config.json
// Cursor: Settings → MCP Servers
{
  "mcpServers": {
    "my-server": {
      "url": "https://mcp.vinkius.com/sse?token=YOUR_TOKEN"
    }
  }
}
```

### CLI Reference

| Command | Description |
|---------|-------------|
| `vurb create <name>` | Scaffold a new MCP server project |
| `vurb dev --server <path>` | Start HMR dev server with auto-reload |
| `vurb lock` | Generate or update the governance lockfile |
| `vurb lock --check` | Verify lockfile is up to date (CI gate) |
| `vurb deploy` | Bundle, compress & deploy to Vinkius Edge |
| `vurb remote --server-id <id>` | Set target server UUID |
| `vurb inspect` | Launch real-time TUI debugging dashboard |

**[Full CLI documentation →](https://vurb.vinkius.com)**

---

## Quick Start (Alternative Paths)

### Generate from an OpenAPI Spec

Turn any existing API into a governed MCP server — no manual tool definitions needed:

```bash
# Generate a full Vurb.ts project from your OpenAPI spec
npx @vurb/openapi-gen --input ./your-api.yaml --output ./my-mcp-server

cd my-mcp-server
npm install

# Deploy immediately
npx vurb remote --server-id YOUR_SERVER_UUID
npx vurb deploy
```

**[OpenAPI generator docs →](https://vurb.vinkius.com)**

### Connect Any API via Vinkius Cloud (No Code)

1. Go to [cloud.vinkius.com](https://cloud.vinkius.com) and create an account
2. Click **"New Server"** → paste your OpenAPI spec URL or upload the YAML file
3. Add your API credentials (encrypted at rest)
4. Copy the MCP token and add it to your AI editor config
5. Your API is now an MCP server — secured with eight layers of protection

**[Cloud quickstart guide →](https://docs.vinkius.com/getting-started)**

### Sell Your Expertise on the Marketplace (Domain Experts)

1. Write a **Skill** in plain text (SKILL.md format)
2. Publish to the Vinkius Marketplace
3. AI agents discover and apply your expertise automatically
4. Earn recurring subscription revenue



---

## Documentation

| Resource | Link |
|----------|------|
| Full Documentation | [docs.vinkius.com](https://docs.vinkius.com) |
| Vurb.ts Quickstart | [vurb.vinkius.com](https://vurb.vinkius.com) |
| Cloud Dashboard | [cloud.vinkius.com](https://cloud.vinkius.com) |
| Security Overview | [docs.vinkius.com/security](https://docs.vinkius.com/security/) |
| Blog | [vinkius.com/blog](https://vinkius.com/blog) |
| Discord Community | [discord.gg/vinkius](https://discord.gg/vinkius) |

---

## Contributing

We welcome contributions from the community — bug reports, feature requests, documentation improvements, and code contributions all help make the project better.

Please read our [Contributing Guide](CONTRIBUTING.md) before submitting a pull request.

---

## Security

If you discover a security vulnerability, please report it responsibly. See our [Security Policy](SECURITY.md) for details.

---

## License

This project is licensed under the [Apache License 2.0](LICENSE) — the same license used by Kubernetes, TensorFlow, and the MCP SDK itself.

---

<p align="center">
  <a href="https://vinkius.com">vinkius.com</a> · <a href="https://cloud.vinkius.com">Cloud Dashboard</a> · <a href="https://docs.vinkius.com">Docs</a> · <a href="https://x.com/vinkiuslabs">X / Twitter</a>
</p>

<p align="center">
  Built by <a href="https://github.com/vinkius-labs">Vinkius Labs</a> · Europe · Portugal
</p>
