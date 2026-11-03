---
title: 3 Official Claude Skills Worth Stealing
summary: Anthropic published the skills that power Claude itself. Here are the three worth installing, and the exact commands to add them to Claude Code.
published: 2026-10-22
youtube: https://www.youtube.com/watch?v=R-hfgd0-5Bs
instagram: https://www.instagram.com/reel/DerNW8BElgx/
---

The repo is [anthropics/skills](https://github.com/anthropics/skills). Its `skills/` folder holds, among others, `docx`, `pdf`, `pptx`, `xlsx`, `mcp-builder` and `webapp-testing`.

## 1. The document skills

Word, PDF, PowerPoint and Excel. These are the same skills behind Claude's own file creation, shared as a reference.

They are **source-available, not open source**. Read them, learn from them, check the license before reusing them.

## 2. The MCP server builder

Describe what you want to connect, and it walks Claude through building the MCP server for it.

## 3. Web app testing

Claude tests your app the way a user would: it clicks through pages and checks that things work, before your users do.

## Install them in Claude Code

First add the marketplace. This only registers it, nothing is installed yet:

```
/plugin marketplace add anthropics/skills
```

Then install the pack you want:

```
/plugin install document-skills@anthropic-agent-skills
```

```
/plugin install example-skills@anthropic-agent-skills
```

## My pick

**Web app testing.** It clicks through your app so you don't have to.
