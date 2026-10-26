---
name: explain
description: Explain existing code, system behaviour, and execution flow using source evidence and paced checkpoints. Use for understanding how code works; use walkthrough for completed changes and review to prepare to review a colleague's PR.
---

# Explain

Use [investigation](references/investigation.md), [teaching](references/teaching.md), and the [session contract](../../shared/session.md). These are also the investigation and teaching references used by `walkthrough`.

Establish the requested behaviour and evidence scope, inspect source and relevant tests, and trace realistic inputs through the actual code. Separate facts from inferred rationale. Orient with a flow map when useful, then teach at adjustable checkpoints and depth. Answer questions without advancing. Finish with an end-to-end explanation and honest verification limits.

This is a read-only explanation unless a bounded edit is separately requested. Explain discovered concerns accurately without silently switching into an audit. Use `review` when the developer wants context for reviewing a colleague's PR. For requested lesson exports, use the [shared export mechanism](../../shared/export.md) and preserve position.
