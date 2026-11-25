---
title: "Claude Artifacts Are Desktop Apps Now. Check What They Can Access."
summary: "Anthropic doesn't review installed apps. Start at the default, add access only when the app needs it."
published: 2026-11-27
category: Claude Code
---

- Docs: [Install an artifact as an app](https://support.claude.com/en/articles/18516354-install-an-artifact-as-an-app)

Since November 24, 2026 you can install a Claude artifact as its own app on Mac or Windows (beta, Claude Desktop 6.28899.0 or later). It gets its own window and icon, and it stays linked to the artifact.

The catch, in Anthropic's own words: "Anthropic doesn't review apps before you install them."

## The three levels of access

| Level | What the app can do |
|---|---|
| Default | Only what it could do in a browser |
| App permissions | Notifications, global keyboard shortcuts, windows that float on top, a menu bar or tray icon |
| Full computer access | Run programs and read, change, or delete your files without asking each time |

To be fair: full access is only possible for apps you made (or, on Team and Enterprise, apps made by people in your organization). Apps from anyone else show a warning.

## What can still change

Your "Allow" covers one version of the app. After any update, Claude asks again. But if part of an app loads from another website, that part can change without a new prompt.

## My rule

- Start at the default.
- Add access only when the app actually needs it.
- Full access? Only for code you've actually read.

## Take access back

- Mac: with the app open, click the app's name in the menu bar, then Permissions.
- Windows: right-click the title bar (or Alt+Space), then Permissions.
- Or in Claude Desktop: File > Apps, pick the app, then Permissions. Uninstall there removes every permission you allowed (the artifact stays).
