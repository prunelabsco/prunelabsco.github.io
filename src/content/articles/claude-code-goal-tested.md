---
title: Claude Code's /goal Wouldn't Stop Until Every Test Passed
summary: "Same Laravel task, 3 runs with /goal and 3 without. Same score, 35% more cost, and one surprise about a test that was already broken."
published: 2026-11-25
---

- Docs: [/goal in Claude Code](https://code.claude.com/docs/en/goal)

`/goal` adds a checker: a small model reads the transcript and decides if Claude is done. It doesn't run anything.

## My test

Same Laravel task, same finish line. Three runs with `/goal`, three without.

| | Prompt only | Prompt + /goal |
|---|---|---|
| Hidden tests | 14/14, every run | 14/14, every run |
| Cost | | +35% |
| Time | | about a third longer |

The checker itself cost under one cent per run. The extra cost is the main model being sent back to work.

## The surprise

The repo had one test that was broken before Claude started.

- **With /goal:** all three runs kept going until it passed. Two changed how the app loads its routes. One rewrote the old test.
- **Without /goal:** all three left it alone and said it was already broken.

To be fair, the checker never said done when it wasn't.

## Before you use it

1. Start from a green test suite.
2. Read the diff for anything outside your task.

One Laravel task, Sonnet, 3 runs per version, Claude Code 2.1.307.
