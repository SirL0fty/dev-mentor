# challenge

[Skill file](../../skills/challenge/SKILL.md)

## What it does

`challenge` checks a recommendation before you act on it, whether Dev Mentor made it or you pasted it from another agent. It shows the reasoning as a table of reasons and their evidence, checks the idea against how your codebase already does similar things, and names the options it skipped. If the case looks weak, it brings in `devils-advocate` with a fresh reviewer instead of defending its first answer. It's read-only.

## When to reach for it

When a recommendation feels off: "is this right?", "why this one?", "how did you decide?", "does this match our code?". To stress-test a proposal you wrote yourself, use `devils-advocate`; to compare designs from scratch, use `architect`.

## It's working if

- Each reason in the recommendation gets a row: ✓ checked (with a file and line), ~ assumption, or ✗ unsupported. A claim like "the project prefers X" without a source is marked unsupported.
- "Matches our style" is backed by at least one existing example in the codebase, linked by its full path.
- It lists at least one option the recommendation didn't consider, such as keeping things as they are.
- If a key reason is unsupported or an alternative looks as good, it calls `devils-advocate` with an evidence pack. With only one model, the challenge runs in a fresh subagent, labelled "same model, fresh context".
- The verdict is one of Stands, Change it, or Unclear, says what changed and why, and the lesson stays on the same step.
- No files change.
