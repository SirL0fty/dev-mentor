# Three-model debate

## Choose the three models

Read the `debate models` line from `.dev-mentor/profile.md` in the project, or from `~/.dev-mentor/profile.md` for every project on this machine. The project file wins.

```text
debate models: claude-opus-5-5-xhigh, sol-6.1, <a third model from your list>
debate effort: high
```

- **Models:** the three seats, in order A, B, C. `current` means this chat's own model in a fresh session; it counts as one of the three, so the other two must be different models.
- **Effort:** `max`, `xhigh`, `high` or `medium`. It sets the reasoning level for every seat whose model supports one. The default is `high`.

**If no line is set, or the person says `set up debate models`:**

1. List the models you can actually pass to the host's subagent or model-selection tool in this session. If the host exposes a list of the person's models, use that too. If you can't detect any, ask them to paste the names they have access to. Never suggest a model you haven't confirmed.
2. Propose three from **different families** (e.g. Claude, GPT, Gemini, Sol), using the highest reasoning level that fits the effort. If only one or two families are available, say so and say what that means: models from one family share more blind spots.
3. Show the three and ask them to accept them or swap any. Offer once to save them to the profile; write the line only if they say yes.

**If a configured model is rejected or missing**, stop and ask: offer the closest available model from the same family, or a different one. Don't swap it silently (pstack falls back automatically; this debate doesn't, because a quiet swap can leave two seats on the same model).

## Seat three distinct models

- Use the host's real model-selection interface. Say which three you'll use before starting.
- Each of seats A, B and C needs its own fresh context. Three personas, three sessions of one model, or different temperature settings don't count. You coordinate; you are not a vote.
- Record each seat's requested model, the model actually confirmed (from runtime metadata, not the model's own claim), and its session ID. If a model can't be confirmed, or two seats resolve to the same model, the debate is **incomplete**.
- If the host can't do this, an already configured multi-model tool may fill the seats, if the person has authorised it. Otherwise prepare three identical briefs they can paste into other sessions. Never fall back silently to another model.

## Rounds

1. **Independent round:** give all three the same evidence pack. Each returns: their preferred option and why, the strongest case against it, concrete failure cases, and their blocking objections plus what would resolve them. Collect all three before anyone sees the others' answers. Don't hint at a preferred winner.
2. **Challenge rounds:** keep a small issue table (ID, claim, evidence, A/B/C positions, status). Share every material disagreement, minority ones included. Check disputed facts with read-only checks. If the evidence changes, bump the evidence version and have everyone reassess.
3. **Candidate decision:** the option, its scope, the reasons, the rejected alternatives, the trade-offs, the conditions, and what still needs verifying. "Defer until we measure X" is a valid decision; "needs more work" is not.
4. **Ratify:** send the exact same text (versioned) to all three. Each replies `AGREE` or `OBJECT`, with reasons and any remaining objections. A reply that still asks for changes counts as `OBJECT`. If the text changes, everyone votes again.

## Limits

By default, stop after 6 rounds or 20 minutes, unless the person says otherwise. Retry a failed call once with the same model. If you run out of budget, a model is unavailable, or there's no agreement, report **incomplete**: the current decision text, the outstanding objections, and the exact step to resume. Never claim consensus from silence or from a majority.

Reviewers only read; they don't edit code, publish, or change access.
