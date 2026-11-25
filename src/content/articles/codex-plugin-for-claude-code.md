---
title: OpenAI Built a Codex Plugin for Claude Code
summary: "The official Codex plugin for Claude Code: a read-only review, an adversarial review, a rescue command, and a review gate you should only turn on when you're watching."
published: 2026-12-10
category: Repos
---

- Repo: [openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc)

OpenAI built a plugin for its biggest rival's tool. It's the official Codex plugin for Claude Code: 35K stars on GitHub (as of Nov 25, 2026), Apache 2.0.

## The commands

- `/codex:review` runs a read-only Codex review on your changes.
- `/codex:adversarial-review` goes further. It questions your design, the tradeoffs, the failure modes.
- `/codex:rescue` hands a bug to Codex.
- `/codex:transfer` moves your whole session over.

There's also `/codex:status`, `/codex:result`, `/codex:cancel` and `/codex:setup`.

## The review gate

`/codex:setup --enable-review-gate` uses a Stop hook: Claude can't finish until Codex signs off. The README itself warns it can create a long-running Claude/Codex loop and drain your usage limits quickly.

## What it costs

It works on any ChatGPT plan, even Free, or with an OpenAI API key. Every review counts against your Codex usage. You need Node.js 18.18+.

## My take

"Clever, slightly chaotic, and honestly pretty useful." That's [one developer's take](https://dev.to/oldeucryptoboi/openai-just-shipped-a-plugin-so-codex-runs-inside-claude-code-51oa) on the review gate. I'd only turn it on when I'm watching. I haven't tested the plugin myself yet.

Want Claude Code and Codex side by side on the same bug? [Watch the duel](https://youtu.be/aiaVaSSWa9A).
