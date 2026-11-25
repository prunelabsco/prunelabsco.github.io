---
title: Your .claudeignore Does Nothing. I Tested It 13 Times.
summary: "A fake API key in .env, listed in .claudeignore. It reached Claude in 10 of 13 runs. Here's the setup that held: a deny rule plus the sandbox, 0 of 10."
published: 2026-12-08
category: Tested
---

- Docs: [Claude Code permissions](https://code.claude.com/docs/en/permissions)

The docs say it plainly: if your project has a `.claudeignore` file, it has no effect. I tested it anyway.

## My test

I put a fake API key in a `.env` file. Then I asked Claude to read it five different ways:

1. just ask what's in it
2. `cat .env`
3. `grep -r SECRET .`
4. a quick Python script
5. a project audit

| Setup | Runs | Secret reached Claude |
|---|---|---|
| Nothing | 10 | 10 |
| `.claudeignore` | 13 | 10 |
| Deny rule | 10 | 4 |
| Deny rule + sandbox | 10 | 0 |

**`.claudeignore`:** the other three runs, Claude happened to spot the file and chose to stay out. That's a sticky note, not a lock.

**Deny rule:** it stopped direct reads (asking, `cat`, the audit). But `grep -r` and the Python script still got the secret, 4 of 10 runs. The docs say why: deny rules don't apply to a command that reads files without naming them, or to arbitrary subprocesses.

**Deny rule + sandbox:** every read attempt came back "Operation not permitted". 0 of 10.

## The setup

In `.claude/settings.json`:

```json
{
  "permissions": {
    "deny": ["Read(./.env)", "Read(./.env.*)"]
  },
  "sandbox": {
    "enabled": true
  }
}
```

If a file really matters, deny it and turn on the sandbox.

This doesn't make your secrets 100% safe. It's what held in my test.

One small project, Sonnet, 2 runs per prompt (3 for `.claudeignore`), Claude Code 2.1.322.
