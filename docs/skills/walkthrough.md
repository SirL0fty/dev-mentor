# walkthrough

[Skill file](../../skills/walkthrough/SKILL.md)

## What it does

`walkthrough` gives a guided tour of changes that are already finished, in the order the code runs, so you can explain them to your team. It's read-only.

## When to reach for it

Say "walk me through what changed". To prepare to review someone else's PR, use `review`.

## It's working if

- It names the base and head commits it compares and what it left out.
- It explains old behaviour, new behaviour and why, labelling guesses about intent.
- It says which tests cover the change, which were actually run, and what's unchecked.
- If it spots a problem, it mentions it and offers a separate review; no files change.
