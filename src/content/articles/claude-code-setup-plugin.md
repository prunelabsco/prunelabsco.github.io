---
title: This Plugin Reads Your Codebase, Then Sets Up Claude
summary: "claude-code-setup is one of Anthropic's official plugins. On my Laravel + Next.js app it gave 10 suggestions across 5 categories. I'm keeping two."
published: 2026-10-20
category: Claude Code
youtube: https://www.youtube.com/watch?v=3jIcYpe_0DE
instagram: https://www.instagram.com/reel/Desfsc4Ep5_/
---

- Plugin: [claude-code-setup](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-code-setup) in [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)

It has Claude scan your project and recommend automations that actually fit it. It only reads; nothing in my repo changed.

## What it suggested

10 suggestions across 5 categories, in no particular order:

- **MCP:** Playwright, a database MCP
- **Skills:** project conventions, test generation
- **Hooks:** block edits to `.env` and lock files, run a type check
- **Subagents:** security reviewer, test writer
- **Plugins:** TypeScript and PHP language servers

## What I'm keeping

1. **Playwright MCP**, so Claude can actually click through my Next.js pages.
2. **The security reviewer subagent**, because my current reviewer never checks tenants or payments.

Your list will be different. That's the point: it reads your repo, not mine.
