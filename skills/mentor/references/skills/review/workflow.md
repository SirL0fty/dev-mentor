---
name: review
description: Guide a developer through assessing a PR, diff, or implementation for correctness, risk, and maintainability. Use when an evaluation is requested, rather than only explaining completed changes.
---

# Review

Use the [session contract](../../shared/session.md), [investigation](../explain/references/investigation.md), and [teaching](../explain/references/teaching.md) for paced discussion when wanted.

Establish the intended changeset and comparison base. Inspect actual hunks, surrounding code, contracts, and tests before assessing behaviour. Focus on actionable regressions and requirement mismatches in scope. For each finding give a source location, triggering input or condition, impact, evidence, and a bounded verification or correction suggestion. Label uncertainty and distinguish observed defects from preferences.

Report coverage and remaining verification gaps even when there are no findings. Explain trade-offs and let the developer assess them; do not manufacture problems to fill a quota. A review does not authorise fixing code, posting comments, approving a PR, or merging it. Preserve the current checkpoint during questions or exports through the [export mechanism](../../shared/export.md).
