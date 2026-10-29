---
name: share
description: Share a plan before building it (for a colleague or senior dev to review), a lesson as a learning note for Notion or Obsidian, or the outcome of a debate, challenge or review as a decision record (ADR) for a person or the team. Outcome records keep every reviewer's position, disagreement and open question instead of turning them into a new plan. Sends with a Plannotator link, an HTML file (optionally password-protected), or a tool you already use. Use for "share this plan with my senior", "share this lesson", "share this outcome", or "write up this debate as an ADR". (Dev Mentor)
---

# Share

Reuse what already exists: the current plan, lesson or recorded outcome. Don't plan again, rerun a debate, or fill gaps with guesses; mark missing parts as gaps or **unknown**.

## 1. What are you sharing?

Ask first, with the picker if there is one, unless their request already says (e.g. "share this plan"):

**Share what** · What do you want to share?
- A plan · Before building: a version a colleague or senior dev can review.
- A lesson · A record of what you learned, for Notion, Obsidian or a notes folder.
- An outcome · A debate, challenge or review result, written up as a decision record (ADR).

If they pick something that doesn't exist in this conversation or the project, say so and offer the ones that do.

- **A lesson:** this is a learning note for your own history. Call the Skill tool with "mentor" and run `export lesson`; it asks where it goes and writes it. Then stop here.
- **A plan:** go to step 2, then use **What goes in a plan** below.
- **An outcome:** go to step 2, then read [outcome-report.md](references/outcome-report.md) and follow it.

## 2. Ask who it's for and why

For a plan or an outcome, ask once, with the picker if there is one:

**Purpose** · What should this do for them?
- Ask for their input · They review it and answer specific questions. *(default for a plan)*
- Answer their question · They asked; this gives them the answer and the reasoning.
- Keep them informed · For their information; nothing is asked of them. *(default for an outcome)*

Name who it's for: a person (e.g. a senior dev) or the team. Only **Ask for their input** adds questions for the reader (2–4 specific ones, never "any thoughts?"). Never turn a shared outcome into a request for approval.

## What goes in a plan

- **Ask:** title, goal, scope, acceptance criteria, and, if they want input, 2–4 specific questions.
- **Evidence:** repo, branch and commit inspected, the files and tests you read, and the date.
- **Behaviour:** what it does now, the change, and an example input and output, including a failure case.
- **Design:** the options considered, the choice and why, trade-offs, assumptions, and open decisions.
- **Steps:** ordered build steps with how to check each one. Mark each as proposed, done, or checked; only say checked if it was actually run.
- **Status:** where the lesson is and the next action.

## 3. Save it

1. Save where they ask. Otherwise:
   - **Plan:** `docs/plans/<feature>.md`.
   - **Outcome:** the project's existing ADR folder if it has one (`docs/adr/`, `adr/`, `docs/decisions/`), following its numbering and file naming; otherwise `docs/decisions/NNNN-<topic>.md`, numbered after the last one.
   
   If you can't write anywhere, give them the complete document and say it wasn't saved.
2. Read existing documents before updating them, and keep their edits.
3. Read the file back to confirm it saved, then give its full path.

## 4. Get it to them

Read [destinations.md](references/destinations.md). Plannotator is the default; an HTML file (with an optional password) or a connected tool are the alternatives.

Nothing is sent, posted, published or shared until they choose how. Never change who has access unless they ask. If a tool would notify people automatically, warn them before writing.

## Style and ground rules

Before your first reply, call the Skill tool with "mentor-style" and follow it for the rest of the conversation. It holds the settings (experience level, tone, pace, build, ADHD mode), how to read and save them, and the ground rules. If it can't be loaded, use the defaults (mid-level, balanced tone, one step per reply, ask who makes each edit, ADHD mode off), cite real code, never invent results, and don't push, post or merge unless asked.
