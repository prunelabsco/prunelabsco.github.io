---
title: 5 MCP Servers vs 15. Both Passed 20 Out of 20.
summary: "Cutting your MCP servers to five? I ran the same 10 tasks with 5 servers, 15 servers, and 15 with tool search off. Here's what changed, and what didn't."
published: 2026-12-11
category: Tested
---

- Docs: [MCP in Claude Code](https://code.claude.com/docs/en/mcp)

The popular advice: keep it to three to five MCP servers, or Claude gets confused picking tools. I tested it.

## My test

Five MCP servers: time, memory, docs (Context7), SQLite and git. Then fifteen: the same five plus ten extra. Ten tasks, two for each server, two runs each.

| Setup | Answers passed | Target server called | Extra servers called |
|---|---|---|---|
| 5 servers | 20/20 | 14/20 | — |
| 15 servers | 20/20 | 13/20 | 0/20 |
| 15 servers, tool search off | 20/20 | 15/20 | 0/20 |

- None of the ten extra servers got called.
- Claude sometimes used Bash instead of the MCP server. Those answers still passed. So "target server called" isn't an accuracy score.

## What tool search changes

Tool search is on by default and holds MCP tools back until Claude needs them. With it off, the first turn started at about 115K tokens of context instead of about 34K. The answers still passed.

## Before you trust this

- These were simple tasks with clear answers.
- The memory server reused state between runs.
- One Claude Code version (2.1.322), one model (Sonnet 5.5).

So I wouldn't cut servers just to hit five. I'd check which tools Claude calls, and whether the answers pass.
