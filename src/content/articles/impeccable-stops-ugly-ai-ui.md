---
title: This Repo Stops AI From Designing Ugly UIs
summary: "Every AI-built website looks the same. impeccable is one design skill with 24 commands. I ran it on my own portfolio: 14 out of 36, and a dark mode bug I never noticed."
published: 2026-10-16
category: Design
---

- Repo: [pbakaus/impeccable](https://github.com/pbakaus/impeccable)

One design skill for your AI agent, with 24 commands like `critique`, `polish` and `audit`. Works with Claude Code, Codex and more.

## What I ran

On my own portfolio landing page, in one session:

1. **`critique`** reviews the UI like a designer would: hierarchy, clarity, the stuff AI usually ignores. Mine scored **14 out of 36**. The one top-priority problem: in dark mode, my name almost disappeared.
2. **`polish`** fixed it by locking the page to light mode. Not what I'd pick, but it works. It changed 15 files.

## Worth knowing

- The fix was "light mode only", not a real dark theme. Read what `polish` changes before you keep it.
- Want your agent to stick to your brand from the start? See [give your AI agent a design system first](/a/design-system-first/).

Install steps change between versions, so follow the README.
