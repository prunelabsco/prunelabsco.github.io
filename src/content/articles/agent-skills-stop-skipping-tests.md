---
title: This Repo Stops Your AI Agent From Skipping Tests
summary: "Your coding agent takes the shortest path, and the shortest path skips the tests. Agent Skills gives it 25 skills that walk it through the whole job."
published: 2026-12-02
category: Repos
---

- Repo: [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)

25 skills, by Addy Osmani, that walk your agent through the whole job: define, plan, build, test, review, ship. MIT licensed. Works in Claude Code, Cursor, Codex and Gemini CLI.

## One slash command per phase

`/spec` writes the spec before any code. `/plan` cuts it into small tasks. Then `/build`, `/test`, `/review`, `/ship`.

## My favorite part

Every skill lists the excuses agents use to skip a step, with a reply for each:

> "I'll write tests after the code works."
> "You won't."

And nothing ends on "looks right". Every skill finishes with proof: passing tests, build output, real data.

## Saw my Superpowers episode?

The repo has its own page comparing the two: `docs/comparison.md`. My episode: [One Plugin Stopped Claude From Coding 7 Out of 9 Times](https://youtu.be/yAjMdsWBL_g).
