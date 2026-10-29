# architect

[Skill file](../../skills/architect/SKILL.md)

## What it does

`architect` compares two or three real design options on the same criteria (ownership, contracts, failure modes, operating cost, migration, testing) and recommends one before anyone writes code.

## When to reach for it

Ask "how should we design this?", "A or B?" or "where should this logic live?". To check a recommendation that's already been made, use `challenge`; to stress-test the choice, use `devils-advocate`; to write it up, use `share`.

## It's working if

- Before proposing anything, it asks for diagrams or docs the repo can't show and has you confirm how the system works today.
- The design is the smallest that meets what you asked for; safeguards for requirements you didn't state are listed under *If you later need…*, not built in.
- Options start from the simplest: what exists, then what exists plus one attribute or index (such as a timestamp sort key), before any new table.
- "Keep what we have" is an option when it's viable.
- Evidence, assumptions and proposals are kept clearly apart.
- The recommendation lists the trade-offs it accepts and the first steps, each with a way to check it.
- Disagreements are recorded, not smoothed over.
- Asked how to store or build something ("design a table for…"), it gives a concrete proposed design, labelled proposed, and walks every query from the question through it, including awkward ones like "the client doesn't know the ID".
