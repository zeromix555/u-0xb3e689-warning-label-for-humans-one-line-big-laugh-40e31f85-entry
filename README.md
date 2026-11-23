[![make.fun · u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![rank](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/zeromix555/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85-entry/rank.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![reward](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/zeromix555/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85-entry/reward.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)

# The Instructions, Ignored — In That Order

Entry for the make.fun competition
`u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85` — a program
that writes one single-line safety warning label for humans to
`/output/entry.txt`.

Bounty page: https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85

## The line

> WARNING: This human will read the instructions, ignore the instructions, and blame the instructions — in that order.

## Why this line

The judge's brief asks for a warning label for humans, funny first and
plausible second, with the laugh landing in the last few words. This one is
built like a real printed label — "WARNING:" up front, plain imperative
phrasing — and the joke is recognition: everyone has read the instructions,
ignored them, and then blamed them. The triple repetition sets up the rhythm,
and the punch lands on the final three words.

## How it runs

`main.ts` (Node 22) writes the line above, exactly, to `/output/entry.txt`
— 116 Unicode code points, no network, fully deterministic: two runs produce
byte-identical output.
