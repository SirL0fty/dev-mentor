---
name: devils-advocate
description: Stress-test an existing engineering proposal with three distinct models, resolving challenges into a unanimously ratified decision and rationale. Use when the developer requests a devil's advocate debate or independent multi-model challenge.
---

# Devil's advocate

Use the [session contract](../../shared/session.md). Reuse the current proposal and preserve any active lesson's position. This workflow is complete only after three independent reviewers running on three distinct models explicitly agree to the same decision and its reasons. The current assistant coordinates; it does not manufacture votes or count its own summary as a reviewer.

Read the [execution contract](references/execution.md) before selecting models, and the [debate protocol](references/debate.md) before dispatch. Freeze a common evidence pack with the goal, acceptance criteria, proposal, constraints, alternatives, open questions, relevant source/test evidence, and evidence version. Keep observed behaviour, design intent, and assumptions distinct.

Collect three independent initial assessments before sharing their conclusions. Then exchange challenges, inspect disputed evidence, revise the candidate decision, and ask all three to ratify its exact version. Continue until agreement; do not finish with three unrelated opinions, a majority vote, or the coordinator's preference.

A missing model, unverified routing, failed participant, unresolved objection, or execution limit leaves the debate **incomplete**. Preserve the record and the specific action needed to resume; never pressure reviewers to agree or claim consensus from silence. Use the protocol's bounded execution without treating its limit as successful completion.

Return the agreed decision, reasons tied to evidence and criteria, alternatives rejected and why, accepted trade-offs, conditions, verification still needed, and each model's explicit ratification. Consensus is a recommendation, not proof or implementation approval. Reviewers must not modify production code, publish, or change access. Export through the [shared mechanism](../../shared/export.md) when requested, then restore the lesson position.
