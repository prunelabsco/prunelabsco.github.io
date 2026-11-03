---
title: This Repo Lets AI Reverse Engineer Any App
summary: "REA lets your agent take apart an app it doesn't have the code for, from websites down to native binaries. Every answer comes with evidence."
published: 2026-10-28
---

- Repo: [morluto/rea](https://github.com/morluto/rea)

REA stands for Reverse Engineer Anything. See a feature you like in some app? Point your agent at the finished app, not the source, and it traces how that one feature works.

## What it can open

Websites, JavaScript and Electron apps, Android APK files, all the way down to native binaries. The README lists 28 kinds of targets.

## Two case studies from the repo

- **Notion's copy and paste**, followed from the page into the desktop app's core.
- **A nineties game**, where rebuilt code matched the original byte for byte.

## Why I trust the output more

Every answer comes with evidence: what it saw, what it guessed, and what it still doesn't know. It plugs into Claude Code, Codex or Cursor, and runs on your own machine.

I built my own lab around it. Its first project is [Prism](/prism/).
