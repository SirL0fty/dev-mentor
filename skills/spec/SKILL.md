---
name: spec
description: Convert an agreed feature plan into a portable Markdown specification, a requested Matt Pocock or pstack inspired format, or an OpenSpec change through the official openspec-propose skill. Use when asked to turn a plan or lesson into a spec; this prepares artifacts without implementing the feature.
---

# Spec

Examples: “Turn this plan into a spec.” “Use Matt Pocock's spec style.” “Prepare a pstack-style design spec.” “Convert this plan using OpenSpec.”

Read the [session contract](references/shared/session.md). Reuse the current plan, decisions, code evidence, and acceptance criteria; do not restart planning or interview the developer about settled points. Inspect additional material only for gaps or freshness. If agreement is unclear, label the result a draft and preserve unresolved decisions instead of inventing answers.

## Choose the output

Follow the user's choice, then the project's established specification convention. Otherwise produce portable Markdown; a generic spec request does not require a format interview or an OpenSpec installation. Merely having a third-party skill installed does not select its workflow.

| Output | Workflow |
| --- | --- |
| Portable Markdown (default) | Read [feature specification](references/skills/spec/references/feature-spec.md). Use the shared export mechanism to save the complete artifact. |
| Matt Pocock or pstack inspired | Read [feature specification](references/skills/spec/references/feature-spec.md) and [requested formats](references/skills/spec/references/formats.md). Adapt the document's structure; do not start another tool's publishing or implementation workflow. |
| OpenSpec | Read [OpenSpec handoff](references/skills/spec/references/openspec.md). Invoke the installed official **`openspec-propose`** skill with the agreed plan. Let it own artifact creation; do not reproduce its workflow here. |

Keep product behaviour, technical decisions, and implementation steps distinguishable. Exercises and learner progress stay in lesson state. For an adopted specification, update or link that canonical source; an export is a labelled snapshot, not another maintained copy of the requirements.

Read back the result and report its location, format, source evidence version, checks actually run, and unresolved decisions. Markdown content checks are not OpenSpec validation or product verification. A portable spec can be input to another workflow, but is not guaranteed to be directly importable by it.

Spec generation does not implement production code, publish issues, notify people, archive changes, or complete implementation tasks. Preserve the active lesson's exact position and pending manual action. OpenSpec is optional; missing setup or an unavailable official skill must not cause silent installation, initialisation, or an imitation handoff.
