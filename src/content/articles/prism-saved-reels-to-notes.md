---
title: "Prism 1.0: Turn Your Saved Reels Into Notes"
summary: "Give it your Instagram export. Your own AI agent writes one Markdown note per reel, with every claim labeled seen, guessed, or unknown."
published: 2026-11-10
category: Repos
---

Repo: [prunelabsco/prism](https://github.com/prunelabsco/prism)

Prism reads your Instagram export, then downloads each reel, cuts frames, and transcribes it on your machine. Your own AI agent looks at the frames and writes one Markdown note per reel. There's no Prism account and no server, and Prism itself uploads nothing. Curation goes through your agent, under that provider's terms.

## How to use it

It has two halves. The first runs in your terminal, no agent needed. The second needs an agent that can read images.

First, request your Instagram export: JSON format, Saved only. Meta can take from minutes to a few days to prepare it. Stay logged in to Instagram in your browser.

**In your terminal**

```bash
uv tool install git+https://github.com/prunelabsco/prism
prism init
prism doctor
prism fetch path/to/instagram-export.zip
prism process
```

Set your browser in `~/.prism/config.toml` and run `prism doctor` until every line says ok. `process` downloads each reel, cuts frames, and transcribes it, up to 30 reels per run.

**In your agent**

```bash
npx skills add prunelabsco/prism
```

Then ask your agent to curate your ready reels with Prism and export the notes. It works through 5 reels per session unless you ask for more, using its normal quota or API pricing. Notes land in `~/Documents/Prism`.

**Or hand it all to your agent**

Paste this, and it handles the install, config, processing and curation:

> Install Prism from https://github.com/prunelabsco/prism and set it up for me. Follow the "For AI agents" section of its README.

## Every claim gets a label

Each claim is marked seen, guessed, or unknown. My first 30 reels came back with 117 labeled claims: 80 seen, 32 unknown, 5 guessed. Four reels had nothing worth keeping.

One post promised viral health hacks with no sources. Prism kept one idea, box breathing, and marked the sources unknown.

## Your collections carry over

Map your Instagram collections to categories, and reels in them are filed there. All 23 of mine went straight into categories.

## It goes slow on purpose

Prism downloads at most 30 reels per run, because Instagram can temporarily lock accounts that download too much. For a big backlog, run it a few times across the day.
