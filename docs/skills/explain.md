# explain

[Skill file](../../skills/explain/SKILL.md)

## What it does

`explain` shows how existing code actually works by tracing one real example through the source: what goes in, what changes, what comes out, and one way it fails. It's read-only.

## When to reach for it

Ask "how does this work?" or "what happens when…". For finished changes, use `walkthrough`; for a colleague's PR, use `review`; for a general concept rather than this codebase, use `learn`.

## It's working if

- It starts with a small flow map of the real calls, with your position marked.
- Every claim points to a real file, line or test; guesses are labelled as guesses.
- It separates what the code enforces from what a comment or type only suggests.
- It ends with an explanation you could repeat to a colleague, plus what it didn't check.
- If it spots a bug, it says so and offers to look separately; no files change.
