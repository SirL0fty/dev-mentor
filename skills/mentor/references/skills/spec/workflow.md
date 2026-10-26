---
name: spec
description: Convert an agreed feature plan into the project's configured OpenSpec change artifacts when explicitly requested. Use for plan-to-spec conversion, not general teaching, implementation, or automatic OpenSpec setup.
---

# Spec

Examples: “Turn this plan into an OpenSpec spec.” “Prepare this lesson's feature as an OpenSpec change.”

Read the [session contract](../../shared/session.md) and [OpenSpec integration](references/openspec.md). Reuse the current agreed feature plan and evidence, retaining unresolved decisions. If the plan is absent or agreement is unclear, identify what is missing and offer a labelled draft rather than treating it as agreed.

Inspect existing OpenSpec configuration, specifications, active changes, installed version, and available workflow before generating artifacts. Use official installed tooling and resolved templates where available, following the project's schema and artifact dependencies. Map intent to proposal, behaviour to requirements/scenarios, technical decisions to design, and implementation steps to tasks using the corresponding roles in that schema.

Keep exercises, teaching progress, and optional understanding checks separate from product requirements. Preserve open decisions; do not choose product behaviour merely to make validation pass. Validate with available OpenSpec tooling and report generated paths, exact validation commands/results, limitations, and unresolved decisions.

Spec generation does not implement production code, archive the change, or complete implementation tasks. Keep an active lesson's position. OpenSpec is optional: if setup is missing, explain setup options and offer a draft without silently installing or initialising it. Once adopted, link lessons and review documents to its requirements instead of maintaining competing copies.
