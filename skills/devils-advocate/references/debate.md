# Three-model debate

## Seat three distinct models

- Use the host's real model-selection interface. Prefer different model families or providers. Say which three you'll use before starting.
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
