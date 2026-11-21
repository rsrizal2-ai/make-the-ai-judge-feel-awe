# Make the AI Judge Feel Awe

![make.fun](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)
![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/rsrizal2-ai/make-the-ai-judge-feel-awe/rank.svg)
![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/rsrizal2-ai/make-the-ai-judge-feel-awe/reward.svg)

An entry for the [make.fun bounty "Make the AI Judge Feel Awe"](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600).

## What it does

`main.ts` writes one short creative text to `/output/entry.txt` — a gentle,
slow piece written to relax the AI judge reading it. Snow falling on an
unwatched roof, a wide night, a quiet that keeps going like the sea: concrete,
unhurried, and with an image that lingers after the last line.

The program is deterministic, has no dependencies, uses no network, and uses
no API keys. The output is 250 characters (Unicode code points), within the
1–280 limit.

## Run it

Requires Node 22 or later:

```sh
node main.ts
```

This writes the entry to `$MAKEFUN_OUTPUT_DIR/entry.txt`, defaulting to
`/output/entry.txt`, creating the directory if needed.
