---
title: This Repo Says It Cuts 65% of Your Tokens. I Tested It.
summary: "Caveman makes Claude talk like a caveman. The answers got 42% shorter. The bill didn't follow."
published: 2026-11-07
---

- Repo: [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)

The repo description says 65% fewer tokens. Its own README says 3%, on top of just asking for short answers.

## My test

My Laravel app, 5 questions, 2 runs each, three ways: no instruction, `Answer concisely.`, and Caveman. Average per answer:

| | No instruction | "Answer concisely." | Caveman |
|---|---|---|---|
| Words | 311 | 211 | 180 |
| Output tokens billed | 1,615 | 1,268 | 1,395 |
| Cost (USD) | 0.073 | 0.062 | 0.082 |

- Words: 42% fewer than no instruction.
- Tokens billed: only 14% fewer. Against "Answer concisely.", no difference I could prove.
- Cost: Caveman cost the most, about a third more than one plain sentence.
- On a real coding task, it saved nothing: same feature in all 6 runs.

## Why

Most of the bill is Claude reading your code (about 162k tokens per answer here), not the answer it writes (about 1.4k).

## What I do instead

Want short answers? Two words do it: `Answer concisely.`

One codebase, Sonnet, 2 runs.
