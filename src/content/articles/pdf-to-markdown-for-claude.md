---
title: I Converted My PDF to Markdown for Claude. It Got Worse.
summary: "MarkItDown cut the input tokens by 46%. It also cut the right answers from 10 out of 10 to 4."
published: 2026-11-14
---

- Repo: [microsoft/markitdown](https://github.com/microsoft/markitdown)

MarkItDown is Microsoft's tool for turning files into markdown for AI.

## My test

My own 32-page project report, once as the PDF and once as markdown. 10 questions, 3 runs each.

| | PDF | Markdown |
|---|---|---|
| Right answers | 10/10, every run | 4/10, every run |
| Input tokens | 176k | 95k (−46%) |
| Cost | | −7% |

## Why it got worse

Every miss was inside an image: an architecture diagram, a database diagram, a JSON screenshot, a color-coded schedule. Markdown keeps the text. The images are just gone.

Two things that went better than expected:

- Tables that looked broken in the markdown were still answered right.
- Claude never made anything up. It just said "not found".

## When to convert

- Mostly text? Convert it.
- The answer lives in a picture? Give Claude the PDF.

One document, Sonnet, 3 runs per version, MarkItDown 0.1.9.
