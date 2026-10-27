---
name: walkthrough
description: Dev Mentor - Provide an interactive guided tour of completed code changes and help the developer explain the implementation to colleagues. Use for requests to walk through what changed or tour a PR; use review to prepare to review a colleague's PR.
---

# Walkthrough

Examples: “Walk me through what changed.” “Help me explain this implementation to my senior.” “Give me a guided tour of this PR.”

Read explain's [investigation](../explain/references/investigation.md) and [teaching](../explain/references/teaching.md), plus the [session contract](../../shared/session.md). They own evidence gathering, teaching, and navigation; do not create a separate teaching framework for this workflow.

1. Establish the intended changeset, resolved comparison base and target, relevant hunk/path scope, and exclusions. Keep unrelated local or branch changes outside the tour. Inspect the actual diff, original/new code, surrounding execution path, and relevant tests at that evidence version.
2. Orient the developer with the original behaviour, new behaviour, and reason for the change. Label inferred rationale when intent is undocumented. Show the execution-flow map before detailed teaching when it helps, with the current checkpoint and scope exclusions visible.
3. Order the tour by behaviour and execution flow. Explain differences from implementation order. Use manageable checkpoints with adjustable detail, tracing a realistic input and relevant failures/edge cases. At each point distinguish design intent from what the code actually enforces.
4. Preserve the map, example, evidence version, and position across `next`, `back`, `map`, questions, and detail changes using the shared navigation rules. Questions are detours, not an instruction to advance.
5. Explain test coverage, actual run results, and remaining verification gaps. Finish with the shared end-to-end explanation, suitable for a conversation with colleagues.

A walkthrough is read-only unless a bounded change is separately authorised. Mention discoveries accurately and offer a separate assessment if warranted, but do not silently expand the tour into a code review, fix code, or post PR feedback. Use `review` when the developer wants to prepare to review a colleague's PR. For a saved colleague-review artifact use `share` through the [export mechanism](../../shared/export.md); keep the tour's position.
