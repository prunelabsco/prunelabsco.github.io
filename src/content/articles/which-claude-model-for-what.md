---
title: Which Claude Model I Use for What
summary: "Opus plans, Sonnet builds. Haiku and Fable cover the edges."
published: 2026-11-21
category: Claude Code
---

- Models: [Claude Fable 5.2 announcement](https://www.anthropic.com/claude-fable-and-mythos-5-2)

I don't use the best model for everything. Here's the split.

| Model | What it gets |
|---|---|
| Haiku 5.5 | Quick, small, high-volume jobs: summaries, sorting, subagent chores |
| Sonnet 5.5 | Running a plan that's already clear |
| Opus 5.5 | Planning, and heavy discussions where it needs to think twice |
| Fable 5.2 | Long jobs that run for hours: big refactors, migrations |

## My rule

Opus plans, Sonnet builds.

Opus does the thinking: what to build, in what order, what could break. Once the plan is clear, Sonnet runs it.

## So

- Not sure what to build yet? Start with Opus.
- Plan already clear? Hand it to Sonnet.
