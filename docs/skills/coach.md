# coach

[Skill file](../../skills/coach/SKILL.md)

## What it does

`coach` walks you through building a feature or fixing a ticket, one small step at a time. It always shows where to start and why first, so you learn the route even when the AI writes the code. Then for each edit you write it, copy an explained snippet, let the AI do it, or turn it into a spec.

It doesn't move on until your edit has been checked against the real diff.

## When to reach for it

Say "help me build this" or give it a ticket. For understanding code without changing it, use `explain`; for a tour of finished work, use `walkthrough`.

## It's working if

- The first card explains the ticket's why, what exists today, a small flow map, and one file to open. Nothing to edit yet.
- With pace `step`, each reply has one idea and one next action, and waits for you.
- A deliberately incomplete edit followed by `done` gets the missing piece named, and the lesson stays on that step.
- In a project whose tests can't run, it says the diff looks right but is unverified. It never says "verified".
- With build `ask`, edit cards end with *Who does this one? I'll write it · AI shows, I copy · AI writes it · Make it a spec*. "You write the tests, I'll do the rest" is remembered for the lesson.
- `show me the answer` puts code in chat without editing files; `you do this one` edits only that step's files and explains each change.
- With build `spec`, you still get the orientation, then it hands over to `spec` and no source files change.
