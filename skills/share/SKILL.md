---
name: share
description: Write up a plan, a lesson, or the outcome of a debate, challenge or review as a self-contained document someone can read without the chat, then get it to them with a Plannotator link, a password-protected file, or a tool you already use. Outcome reports keep every reviewer's position, disagreement and open question instead of turning them into a new plan. Use for "share this plan with my senior", "share this outcome", or "send this debate to the team". (Dev Mentor)
---

# Share

Reuse what already exists: the current plan, or the recorded outcome. Don't plan again, rerun a debate, or fill gaps with guesses; mark missing parts as gaps or **unknown**.

## 1. Plan, or outcome?

- **Plan or lesson:** the current plan or lesson step. Use **What goes in a plan** below.
- **Outcome:** the result of a `devils-advocate` debate or challenge, a `challenge` verdict or a `review`. Read [outcome-report.md](references/outcome-report.md) and follow it.

If both exist and it's unclear, ask which one.

## 2. Ask who it's for and why

Ask once, with the picker if there is one:

**Purpose** · What should this do for them?
- Answer their question · They asked; this gives them the answer and the reasoning.
- Keep them informed · For their information; nothing is asked of them.
- Ask for their input · They review it and answer specific questions.

Only **Ask for their input** adds questions for the reader (2–4 specific ones, never "any thoughts?"). Never turn a shared outcome into a request for approval.

## What goes in a plan

- **Ask:** title, goal, scope, acceptance criteria, and, if they want input, 2–4 specific questions.
- **Evidence:** repo, branch and commit inspected, the files and tests you read, and the date.
- **Behaviour:** what it does now, the change, and an example input and output, including a failure case.
- **Design:** the options considered, the choice and why, trade-offs, assumptions, and open decisions.
- **Steps:** ordered build steps with how to check each one. Mark each as proposed, done, or checked; only say checked if it was actually run.
- **Status:** where the lesson is and the next action.

## 3. Save it

1. Save where they ask. Otherwise plans go to `docs/plans/<feature>.md` and outcome reports to `docs/decisions/<topic>.html` in the project. If you can't write anywhere, give them the complete document and say it wasn't saved.
2. Read existing documents before updating them, and keep their edits.
3. Read the file back to confirm it saved, then give its full path.

## 4. Get it to them

Read [destinations.md](references/destinations.md). Plannotator is the default; a password-protected file, a connected tool, or the plain file are the alternatives.

Nothing is sent, posted, published or shared until they choose how. Never change who has access unless they ask. If a tool would notify people automatically, warn them before writing.

## Style and ground rules

Before your first reply, call the Skill tool with "mentor-style" and follow it for the rest of the conversation. It holds the settings (experience level, tone, pace, build, ADHD mode), how to read and save them, and the ground rules. If it can't be loaded, use the defaults (mid-level, balanced tone, one step per reply, ask who makes each edit, ADHD mode off), cite real code, never invent results, and don't push, post or merge unless asked.
