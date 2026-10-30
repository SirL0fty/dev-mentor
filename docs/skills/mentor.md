# mentor

[Skill file](../../skills/mentor/SKILL.md)

## What it does

`mentor` is where you start. It runs setup the first time (experience, tone, pace, how to build, ADHD mode), suggests where to start in your real code, and hands you to the right skill. It also owns everything that outlasts one reply: changing settings, saving and resuming several lessons, exporting lessons as notes, and watching a PR.

It never guesses a starting point from file names: every suggestion names a file or behaviour it actually read.

## When to reach for it

Say `use mentor`, or ask for help without naming a skill. Reach for it when you don't know which skill you need, want to change how Dev Mentor talks to you, or want to save, resume or export a lesson.

## It's working if

- First time, with no saved settings, you get the setup questions: clickable if your assistant has a picker, one text card if not. ADHD mode is offered as a choice, never shown as already on.
- If you arrive with a task, there's no questionnaire: one "I'll pitch this…" line, then the task.
- `settings` (or "what settings do I have?") shows every setting in one table, with the label you picked, its saved line, every choice and where it's saved. Then it asks what to change (Everything, or one area). `change tone` asks only that question; `reset settings` offers defaults or setup again.
- Asking to see your settings or their choices changes nothing. If one reply would change two settings, it shows both as before → after and asks first.
- Every change adds a line to `settings-history.md` next to the profile. `revert` offers Last change, One setting, Everything or Cancel; `revert build` puts back only build; `revert all` puts back everything changed in this conversation. A revert is logged too, so it can be undone.
- `change output` to Markdown spec saves `build: spec` in your profile; there's no separate `output` line.
- After a change, one line says which file it saved to, then the step you were on comes back in the new style without moving on.
- Saving for "All my projects" writes `~/.dev-mentor/profile.md`, and a different repo uses it without asking again. A project `.dev-mentor/profile.md` overrides only the lines it contains.
- `save` on three different lessons leaves three files in `.dev-mentor/lessons/`; `resume` asks which one, most recent first, with your step; `resume <name>` skips the question.
- `export lesson` asks where once, writes a learning note (goal, where to start, flow, what you learned, what's open), and a second export updates the same note or Notion page. Without Notion connected, it says so and offers Obsidian or Markdown.
- Asking for something that isn't in the project names the project and what it searched, then offers Build it here / Different project / Point me to it.
