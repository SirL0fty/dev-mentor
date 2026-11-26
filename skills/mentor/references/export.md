# Export a lesson

`export lesson` turns a lesson into a **learning note** the person can reread later. It's not the resume file, and it's not a `share` review document. `save note` saves one moment instead of a whole lesson: see [Save a note](#save-a-note).

- `export lesson`: the current lesson.
- `export lesson pagination`: a saved one.
- `export all lessons`: every saved lesson in this project, one note each.

## The note

```markdown
---
title: Slide navigation
project: my-slides-app
date: 2026-10-27
tags: [dev-mentor, react, state]
status: step 2 of 3
---

# Slide navigation

**Goal:** understand how a button or arrow key changes the slide.

## Where to start
`src/App.jsx:21`: found by searching for the arrow-key handler.

## How it flows
button / arrow key → `setIndex` → `index` → slide renders

## What I learned
1. **The current slide:** `index` is React state; `0` is the first slide…
2. …

## Next time
How to find where to start on a similar feature: …

## Still open
- Step 3 not done yet: …
```

Write steps in plain words at the person's **level**, with only the snippets that matter. Mark anything unverified as unverified. Leave out internal bookkeeping (pending edits, commit hashes) except the commit in a short "Source" line at the end.

## Where it goes

Use the `export` line in the profile (`~/.dev-mentor/profile.md`, or the project file), e.g. `export: notion Dev Mentor notes` or `export: obsidian ~/Notes/Dev Mentor`. If there isn't one, ask with the picker if there is one, word for word:

**Export** · Where should lesson notes go?
- Notion · A page under one of your Notion pages (needs Notion connected).
- Obsidian · A note in a folder in your Obsidian vault.
- Markdown folder · A `.md` file in a folder you choose.
- Just show me · Show the note here; nothing is saved.

Then ask for the place (the Notion page, the vault folder, or the folder) and offer once to save it as the `export` line in the global profile.

### Notion

- Use only a Notion connection the person has already set up in this assistant (a Notion connector or MCP server). Check that its tools are actually available; never invent them.
- If there's no connection, say so in one line ("Notion isn't connected in this assistant") and offer Markdown or Obsidian instead. Don't ask for tokens or try to install anything.
- Find the parent page they named. If several match, ask which one. Create the note as a child page titled after the lesson, with the frontmatter fields as a short properties line at the top (or as real properties if the parent is a database with matching columns).
- Record the new page's ID or URL in the lesson's file (`notion: <url>`), so exporting the same lesson again updates that page instead of creating a duplicate.
- Read the page back to confirm it saved, and give the link.

### Obsidian

- Write `<vault folder>/<lesson title>.md` with the frontmatter above. Optionally link related notes with `[[Other lesson]]` when they're in the same folder.
- If the file exists, update it, keeping anything the person added below a `## My notes` heading.

### Markdown folder

Same as Obsidian, without the `[[links]]`.

## Save a note

`save note` keeps one thing worth having again: something that clicked, a catch, a reusable move or a decision (see **Worth saving** in mentor-style). It adds one entry to a single learning log, not a new note per moment, so the log reads like a field guide over time.

```markdown
### 2026-11-26 · An error isn't proof of its cause
- Situation and source: pagination lesson, `tests/items.test.ts:42`, my-shop
- What I thought → what actually happened: a 404 meant the record was missing → a typo in the route also returns 404
- Next time I'll check: the same route returns 200 for a record that exists
- Practise on: the missing-user test in a different service
- Progress: explained
```

For a decision, the second line is *What we chose and why*, with the option it beat. Write it at the person's **level**, in their words where they said it well, with at most one short snippet. Mark anything unverified as unverified.

**Progress** moves through `explained → tried with help → repeated solo → used on a different task`. When the same lesson comes up again, update that entry's progress and date instead of adding a duplicate.

**Where:** the `export` destination (ask the **Export** question above if there isn't one), in a note called `Learning log`:

- **Obsidian / Markdown folder:** `<folder>/Learning log.md`; newest entry first, under a `## Learning log` heading. Create the file with that heading if it doesn't exist. If the person names an existing note (their own field guide, say), add entries under its `## Learning log` heading instead, and leave the rest of the note untouched.
- **Notion:** a child page called `Learning log` under the export page; add the entry at the top.

Read it back, give the link in one line (*"Saved to Learning log.md in Obsidian · Dev Mentor."*), then show the step they were on again. Saving a note never moves the lesson forward.

## Always

- Exporting never shares, publishes, invites anyone or changes access. If a tool would notify people, warn first.
- Read back what you saved and give its location or link. If saving failed, say so and show the note so nothing is lost.
- Exporting doesn't move the lesson forward. Afterwards, show the step they were on again.
