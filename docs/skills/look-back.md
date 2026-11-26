# look-back

[Skill file](../../skills/look-back/SKILL.md)

## What it does

`look-back` reads your past AI chats, from T3 Code, OpenCode, Claude Code, Codex, Cursor or transcripts you paste, and finds what repeats: questions you keep asking, corrections you keep giving the AI, instructions you type at the start of every chat, and how you like to question things. Each pattern becomes either something to learn once (a short lesson and a learning-log entry) or something to change once (a Dev Mentor setting, a check in the repo, or one line in an instructions file). Nothing changes until you pick what to apply.

## When to reach for it

Ask "what do I keep asking?", "look back over my chats", "learn from how I work" or "why do I keep correcting the AI?". Run it every 2–4 weeks, or say `look back monthly` and the agent runs it on a schedule (where your assistant has a scheduler) and saves the report for you to read next time. The next run starts where the last report left off and shows what you've stopped asking.

You don't have to wait for it: during any lesson, Dev Mentor fixes a correction you give twice and offers the lasting fix there and then.

## It's working if

- Before reading anything, it asks which chats (This project · All projects · Pick a window · I'll paste them) and states the scope back with the number of chats it found. It never reads other projects unless you picked that.
- It checks each history store exists and looks at its real format first; if it can't read one, it says so and asks for an export.
- Raw chats stay out of the conversation: with many chats it uses subagents or one script and shows only the findings.
- Every pattern appears in at least two separate chats, with the count, dates and one short quote. Secrets and tokens are redacted.
- Repeated questions come first and lead to a lesson; repeated corrections lead to the most lasting fix (a setting or check before a sentence in `AGENTS.md`). A rule that's already written but still broken is proposed as a check, not repeated.
- Nothing is edited before you choose. Settings changes are logged in `settings-history.md`; instruction and skill edits go to your own copy, never an installed plugin's cache.
- A second run shows patterns that stopped appearing as wins (`✓ Stopped asking: …`).
- `look back monthly` creates a scheduled run only if your assistant has a scheduler, and says so with its ID; otherwise it says there isn't one. Scheduled runs use the scope you agreed, save a report marked unread, and change nothing. `stop looking back` cancels it.
