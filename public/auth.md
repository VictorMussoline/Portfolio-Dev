# auth.md

## Overview
Victor Mussoline Portfolio AI Agent Registration and Discovery.

## Agent Registration
AI agents can discover authentication options via OAuth Protected Resource Metadata at `/.well-known/oauth-protected-resource` and OAuth Authorization Server metadata at `/.well-known/oauth-authorization-server`.

- **Audience**: AI Agents / Crawlers
- **Registration Endpoint**: `https://victormussoline.dev/agent/register`
- **Supported Identity Types**: `anonymous`
- **Supported Credential Types**: `api_key`
- **Claim Endpoint**: `https://victormussoline.dev/agent/claim`
