---
title: "Claude Code Hooks: Auto-format After Every Edit"
summary: Telling Claude "always run the linter" doesn't stick. A hook does. Here is the one I use, what I tested, and where it stops working.
published: 2026-10-24
category: Claude Code
youtube: https://www.youtube.com/watch?v=b6acJkc16jw
instagram: https://www.instagram.com/reel/De4FRxUkn8v/
---

A prompt is a suggestion. A hook is a rule.

Hooks are event handlers. Claude Code runs them on its own when Claude uses a tool, edits a file, or ends a session. Claude doesn't have to remember anything.

## What mine does

After every `Write` or `Edit`, Claude Code fires the `PostToolUse` event. My hook reads which file was touched and formats it:

- `.php`: finds the Laravel project root and runs **Laravel Pint** on that one file
- `.ts`, `.tsx`, `.js`, `.jsx`: runs **Prettier**
- anything else: does nothing

It always exits `0`, so a formatter error never blocks Claude.

## Register it

Add this to `~/.claude/settings.json` (all projects) or `.claude/settings.json` (one project):

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          { "type": "command", "command": "bash ~/.claude/hooks/auto-format.sh" }
        ]
      }
    ]
  }
}
```

The full script and setup steps are in [prunelabs-snippets/auto-format](https://github.com/prunelabsco/prunelabs-snippets/tree/main/auto-format).

## What I tested

On my own Laravel project, I broke a file's formatting through Claude's `Edit` tool. The hook put it back **byte-identical** to the original (empty `git diff`), including turning `array()` into `[]`.

What I have **not** tested yet:

- the Prettier branch
- files written with the `Write` tool

## Where it stops working

The hook only fires on Claude's `Write` and `Edit` tools. If Claude changes a file through `Bash` (say, with `sed`), the hook doesn't run.

## Next on my list

A hook that blocks edits to my `.env` file.
