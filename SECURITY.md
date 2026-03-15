# Security Policy

## Reporting a Vulnerability

The Vinkius team takes security seriously. If you discover a security vulnerability in any Vinkius project, please report it responsibly.

### How to Report

**Do NOT open a public issue.**

Instead, please email us at:

📧 **security@vinkius.com**

Include the following in your report:

- A description of the vulnerability
- Steps to reproduce the issue
- The potential impact
- Any suggested fixes (if applicable)

### Response Time

- **Acknowledgment:** Within 48 hours
- **Initial assessment:** Within 5 business days
- **Resolution timeline:** Communicated after assessment

### Scope

This security policy applies to:

- **Vurb.ts framework** (`@vurb/core` and all `@vurb/*` packages)
- **Vinkius Cloud** runtime and API
- **Vinkius Marketplace** platform
- All repositories under the [vinkius-labs](https://github.com/vinkius-labs) organization

### Security Features

Vinkius Cloud provides eight layers of security for every deployed MCP server:

1. **V8 Sandbox Isolation** — Sealed runtime with no filesystem or network access
2. **Zero-Trust DLP** — Data Loss Prevention with PII masking
3. **HMAC Lockfile** — SHA-256 behavioral fingerprinting of tool contracts
4. **SSRF Proxy** — All outbound requests pass through an SSRF-safe proxy
5. **Token Economics** — Per-tool token cost estimation and budget controls
6. **Stateful Sessions** — FSM gates enforce correct tool call ordering
7. **Audit Dashboard** — Complete audit trail of all AI agent actions
8. **Kill Switch** — Instant remote shutdown of any MCP server

For more details, visit our [Security Documentation](https://vinkius.com/docs/security).

## Responsible Disclosure

We appreciate researchers who practice responsible disclosure. We will:

- Acknowledge your contribution
- Work with you to understand and resolve the issue
- Credit you in our security advisories (unless you prefer to remain anonymous)

Thank you for helping keep Vinkius and the MCP ecosystem safe.
