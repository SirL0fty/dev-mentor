# devils-advocate

[Skill file](../../skills/devils-advocate/SKILL.md)

## What it does

`devils-advocate` stress-tests a proposal. The quick mode argues the strongest case against it with one model, clearly labelled as such. The debate mode has three distinct models (your `debate models` setting) challenge each other until all three agree to the same written decision.

## When to reach for it

Say "poke holes in this" for the quick mode, or ask for a multi-model debate. `set up debate models` picks the three models.

## It's working if

- A quick challenge is labelled "Single-model challenge, not an independent review."
- With only one model available, a debate is reported as incomplete; it never role-plays the missing reviewers.
- A configured model that isn't available makes it stop and ask, not swap silently.
- `set up debate models` lists only models it can actually reach and suggests three from different families.
- The result is a recommendation, not approval to build.
