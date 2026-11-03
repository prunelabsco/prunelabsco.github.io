---
title: My CLAUDE.md Setup That Fixed Bad AI Code
summary: "My AI kept writing code that ignored my project. One file fixed it: a CLAUDE.md that doesn't hold everything, it points to everything."
published: 2026-10-21
category: Claude Code
youtube: https://www.youtube.com/watch?v=Wjfb-u2-F6A
instagram: https://www.instagram.com/reel/DesfwJ3kr5Q/
---

## One file in the root

Every project I start gets a `CLAUDE.md` in the root. It doesn't hold everything. It points to everything.

## Six small files instead of one giant prompt

Inside a `.docs` folder:

```
CLAUDE.md
.docs/
  OVERVIEW.md
  STACK.md
  RULES.md
  COMPONENTS.md
  DESIGN.md
  PLAN.md
```

- **Overview**: what the project is and who it's for
- **Stack**: the tools and versions
- **Rules**: the conventions the code must follow
- **Components**: what already exists, so the agent reuses it
- **Design**: colors, type, spacing, and what you never want to see
- **Plan**: what's being built now, and what comes next

## Why it works

Every session starts the same way. The agent reads the rules before it touches the code, so it follows my conventions instead of guessing them.

## How much should go in it?

I tested three CLAUDE.md setups, nine runs each. The full results are in the long video: [I Tested 3 CLAUDE.md Setups 9 Times](https://www.youtube.com/watch?v=iGF4tP7DhZE).

## Want the template?

Comment "template" on [the reel](https://www.instagram.com/reel/DesfwJ3kr5Q/) and I'll send it.
