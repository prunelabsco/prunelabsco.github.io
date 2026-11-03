---
title: This Tool Says It Makes Claude 44% Cheaper. My Bill Went Up.
summary: "codegraph cut tool calls from 6 to 1 on my Laravel repo. The bill still went up 19%."
published: 2026-11-28
category: Tested
---

- Repo: [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph)

codegraph indexes your code into a graph, so Claude asks the graph instead of reading files. The README says 44% cheaper.

## My test

Five questions about a real Laravel codebase, with and without it. Same model. Indexing took about two seconds.

| | Without | With codegraph |
|---|---|---|
| Tool calls (median) | 6 | 1 |
| Files read per question | 3.2 | 0.5 |
| Tokens processed | | −22% |
| Cost per answer | | +19% |
| Key facts right | 41/44 | 40/44 |

- The bill was higher in all three rounds.
- Even a one-call answer cost at least 6.4 cents. Without it, the cheapest was 4.3.
- No speed difference I could prove.
- All three runs with it missed where vouchers change the order total. One said it only read the files codegraph returned.

## To be fair

Its own README says the savings shrink when the agent needs only a few calls. Mine needed about six.

## So

- Big repo, long searches? Try it.
- Small repo? Watch the bill.

One Laravel repo, Sonnet, 2-3 runs per question, blind-graded, codegraph 1.6.2.
