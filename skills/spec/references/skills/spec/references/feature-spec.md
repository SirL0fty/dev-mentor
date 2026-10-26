# Portable feature specification

Turn the existing plan into a self-contained product document another developer or assistant can use without the conversation. Reuse its evidence and decisions; do not create a second planning interview. Follow project conventions where present and use only the sections the feature needs, preserving the information below.

## Document content

- **Identity and evidence:** feature name, draft/agreed status, source plan and revision, repository/base/head or dirty-diff digest, inspection date, and freshness limits. Separate observed existing behaviour from proposed behaviour and unverified assumptions.
- **Problem and outcome:** who needs the change, why, goals, scope and exclusions, acceptance criteria, and relevant compatibility constraints.
- **Requirements and scenarios:** observable behaviour with stable identifiers such as `REQ-1`; realistic input, trigger and expected outcome; relevant failure/edge cases. Carry existing IDs forward and associate scenarios with their requirements. Record unresolved behaviour and affected requirements explicitly.
- **Design decisions:** the runtime path, affected components/contracts, data and state changes, rationale, considered alternatives, and accepted trade-offs. Include a flow map when it clarifies the feature. Mark recommendations that have not been agreed.
- **Implementation and verification:** ordered product checkpoints, dependencies, first actionable step, completion criteria, and proposed checks linked to requirements. Distinguish checks already run from future checks and their expected observations. Document existing implementation accurately; creating a spec never completes a task.
- **Open decisions:** assumptions to confirm, disagreements and their rationale, blockers, and questions the next developer must resolve. Missing evidence remains visible; do not fill gaps with invented decisions or test results.

Keep syntax exercises, optional comprehension checks, lesson cards, and learner progress outside this product document. A teaching exercise about an API is not an API requirement. A product acceptance scenario may also be useful in a lesson, but the spec owns the behaviour.

## Save, check, and hand off

Use the [shared export mechanism](../../../shared/export.md) with this content and a spec-specific default path: `docs/specs/<feature>.md` in the selected project. An explicit destination or established project convention takes precedence. Conversion authorises this artifact write, not issue publication or implementation. With no writable destination, return complete copy-ready Markdown and say it was not saved.

Read back the artifact. Check its fidelity to the source plan, requirement/scenario links, open decisions, honest status labels, and portable source references. Compare file state to confirm only intended documents changed, and restore the exact lesson position. Report these as content/link checks; there is no universal spec validator.

Another workflow can read this document as input. Follow that workflow's actual input contract when requested; do not claim automatic import or validation by OpenSpec, Matt Pocock's tools, or pstack. For a subsequent OpenSpec conversion, pass the spec as evidence to the [official propose handoff](openspec.md), then make the generated requirements canonical and label the earlier document as a source snapshot.
