# spec

[Skill file](../../skills/spec/SKILL.md)

## What it does

`spec` turns an agreed plan into a portable Markdown spec, a Matt Pocock or pstack style document, or an OpenSpec change through the official `openspec-propose` skill. It writes the spec only, after the project preflight has put the work on its own worktree or branch.

## When to reach for it

Say "turn this plan into a spec". For a review document instead, use `share`.

## It's working if

- It doesn't re-interview you about settled decisions; unclear agreement is labelled draft.
- Requirements have IDs and example scenarios, including failure cases.
- Asked for OpenSpec in a project without it, it names what's missing and offers Markdown. It doesn't install anything.
- No production code changes.
- Called directly on `main`, it runs the preflight first (*New worktree · New branch here*, then the branch name), confirms `✓ Preflight: branch <name> · <full path>`, and writes the spec in that checkout. If the preflight already ran for this lesson, it doesn't ask again.
