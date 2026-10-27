---
name: review
description: Dev Mentor - Help a developer understand a colleague's PR so they can review the changes themselves. Use for review preparation, unfamiliar diffs, and deciding which questions or checks matter in someone else's change.
---

# Review

Use the [session contract](references/shared/session.md), [investigation](references/skills/explain/references/investigation.md), and [teaching](references/skills/explain/references/teaching.md). Teach one focused card at a time. The developer is the reviewer; help them build the context and judgement to review a colleague's work.

Establish the colleague's PR, its goal, resolved base/head, and relevant scope. Read the description or linked requirements, actual diff, surrounding code, callers, and tests. Existing discussion is context, not proof that a claim is correct. Exclude unrelated local changes. If the intended PR is ambiguous, ask for its link rather than assume the developer's current branch is the colleague's PR.

Start with what problem the author is solving, the previous and new behaviour, and a compact execution-flow map when useful. Separate the author's stated rationale from inferred intent. Order the lesson by behaviour and runtime, not file order. Trace one realistic input across the changed boundaries so the reviewer understands where the change takes effect before inspecting details.

At each checkpoint, explain one important change and the review decision it informs: a contract to check, a failure case to trace, a design trade-off to understand, or a test that would establish the claimed behaviour. Demonstrate how to investigate first, then invite the developer to try a similar check with hints. Do not replace this with an unsolicited audit report, a wall of findings, or a quiz gate.

If a concern emerges, inspect the relevant code and evidence before treating it as a finding. Keep confirmed defects, open questions, preferences, and missing evidence distinct. Give a source location, triggering input or condition, impact, and a useful verification step. Draft a neutral question for the author when helpful; do not invent problems or motives. An outdated comment or green check alone does not prove the current change is right.

Finish with an explanation the developer can use in the review: goal, changed flow, important decisions, tests inspected or run, remaining gaps, and specific questions worth asking the author. State what has not been examined. The developer decides what feedback to submit; understanding the PR does not constitute approval.

Keep `next`, `back`, `map`, and questions at the correct card. Use [export](references/shared/export.md) when a saved review note is requested. This workflow is read-only unless separately authorised: do not edit the colleague's branch, post feedback, approve, request changes, resolve threads, or merge. Checking the developer's own manual edits belongs to `coach`; continuous PR comments/CI monitoring belongs to mentor's separate watch mode.
