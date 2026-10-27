---
name: share
description: Write up the current plan or lesson as a self-contained document a colleague or lead can review without the chat, with specific questions for them. Saves the document only; never sends, notifies or publishes. Use for "share this plan with my senior". (Dev Mentor)
---

# Share

Reuse the current plan; don't start planning again. If parts are missing, mark them as gaps rather than filling them in.

## What goes in

- **Ask:** title, goal, scope, acceptance criteria, and 2–4 specific questions for the reviewer (not "any thoughts?").
- **Evidence:** repo, branch and commit inspected, the files and tests you read, and the date.
- **Behaviour:** what it does now, the change, and an example input and output, including a failure case.
- **Design:** the options considered, the choice and why, trade-offs, assumptions, and open decisions.
- **Steps:** ordered build steps with how to check each one. Mark each as proposed, done, or checked; only say checked if it was actually run.
- **Status:** where the lesson is and the next action.

## Save it

1. Save where they ask: a file path, an Obsidian vault, Notion, or another connected tool. Otherwise use `docs/plans/<feature>.md` in the project. If you can't write anywhere, give them the complete Markdown and say it wasn't saved.
2. Read existing documents before updating them, and keep their edits.
3. Read the file back to confirm it saved, then report where it is.

Saving never sends messages, notifies people, shares access or publishes. If a tool would notify people automatically, warn them before writing.

When feedback comes back, record who said what, update the plan where it's supported, and keep disagreements visible. Feedback doesn't approve building it. Return to the same lesson step afterwards.

## Style and ground rules

Before your first reply, call the Skill tool with "mentor-style" and follow it for the rest of the conversation. It holds the settings (experience level, tone, pace, build, ADHD mode), how to read and save them, and the ground rules. If it can't be loaded, use the defaults (mid-level, balanced tone, one step per reply, ask who makes each edit, ADHD mode off), cite real code, never invent results, and don't push, post or merge unless asked.
