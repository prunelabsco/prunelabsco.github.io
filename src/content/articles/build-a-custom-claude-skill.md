---
title: Build a Custom Claude Skill in 5 Minutes
summary: "You're typing the same instructions to Claude every day. Turn them into a skill: one folder, one file, two required fields."
published: 2026-10-23
youtube: https://www.youtube.com/watch?v=DhWfx6sFMg4
instagram: https://www.instagram.com/reel/De0OIvdkgl4/
---

## A skill is one folder with one file

The file is `SKILL.md`. At the top, YAML frontmatter with two required fields: a `name`, and a `description` of when to use it.

```
~/.claude/skills/project-kickoff/SKILL.md
```

A shortened example:

```markdown
---
name: project-kickoff
description: Use when I want to start a new project. Interview me first, then write CLAUDE.md and the docs folder.
---

1. Ask me the project's name and goal. One question at a time.
2. ...
```

## Below that, plain instructions

Steps, examples, rules. Write it like you're briefing a new teammate.

## The description matters most

It's how Claude decides when to pick your skill up. Write it as the situation, in the words you'd actually type.

## Mine: a project kickoff skill

It interviews me first, then writes my `CLAUDE.md` and the docs folder.

I tested it in a fresh Claude Code session by typing one sentence about starting a new project, without naming the skill. Claude ran the skill on its own and started with the first interview question. Now one sentence runs the whole routine.

## Start from the official template

Anthropic's [skills repo](https://github.com/anthropics/skills) includes a `template` folder as a starting point. See also [3 official Claude skills worth stealing](/a/official-claude-skills-worth-stealing/).
