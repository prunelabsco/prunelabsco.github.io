---
title: This Video Started as a Web Page
summary: "HyperFrames by HeyGen turns HTML and CSS into MP4. Install the skills once and your coding agent can plan, write, preview and render the video."
published: 2026-12-06
category: Repos
---

- Repo: [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)

HyperFrames is HeyGen's open source way to make videos from HTML. 89K stars on GitHub (as of Nov 25, 2026), Apache 2.0.

## How it works

You write a video like a web page: HTML and CSS, with timing set in data attributes like `data-start` and `data-duration`. Then one command renders it to MP4.

```bash
npx hyperframes init
npx hyperframes preview
npx hyperframes render
```

You need Node.js 22+ and FFmpeg.

## Let your agent do it

Install the skills once:

```bash
npx skills add heygen-com/hyperframes
```

Then your coding agent can plan the video, write it, preview it and render it. The README names Claude Code, Codex, Cursor and Gemini CLI.

- 9 skills
- about 450 ready-made blocks: captions, charts, maps, transitions

## Free or paid?

The framework is free under Apache 2.0. The Studio app has a free plan and a paid Pro plan ($25 a month) on top.

## My take

Your agent already knows HTML, which is the whole pitch. Just know it fails quietly if you break its rules. I haven't tested it myself yet.
