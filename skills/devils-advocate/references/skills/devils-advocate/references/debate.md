# Evidence-led debate and ratification

## Common brief and independent first round

Identify the decision to make, scope, acceptance criteria, non-negotiable constraints, realistic use/failure cases, alternatives including doing nothing where viable, and open questions. Reuse the current feature plan. Assign an evidence version tied to commits/diff digest or a document revision, with freshness limits. References must be accessible to the workers; otherwise include the relevant excerpts and record omissions.

Give all three reviewers the same brief and ask each for:

- A preferred option with reasons linked to the criteria and evidence.
- The strongest case against that option and for the alternatives.
- Concrete failure/edge cases, missing evidence, and testable claims.
- Blocking objections versus acceptable trade-offs, with what would resolve each objection.

Collect all three initial responses before exposing anyone to the others' conclusions. Do not seed the brief with the coordinator's desired winner. Attribute claims to their source and distinguish inspected code, runtime results, and inference. Agreement alone does not establish a fact.

## Challenge and revise

Maintain a compact issue table: issue ID, claim, evidence, positions A/B/C, resolution criterion, and disposition. Share every material disagreement, including minority objections, with all three. Ask each reviewer to answer the strongest opposing argument, correct unsupported claims, and propose a resolution. Evidence can justify revising a position; popularity cannot.

Investigate disputed factual claims using permitted read-only checks. Do not implement an experiment in production as part of this debate. If evidence or constraints change, increment the evidence version and have all three reassess the affected claims. If a question is a product preference rather than an observable fact, preserve it for the developer unless their existing instructions settle it.

Draft a candidate decision from the discussion. Include the selected option, scope, reasons, alternatives rejected with reasons, accepted trade-offs, assumptions, conditional requirements, unresolved non-blocking risks, and verification needed. A legitimate decision can be to reject the proposal or defer it pending a named measurement. A vague “we agree more work is needed” is insufficient: specify what, why, and the criterion for reconsideration. An agreed deferral is reported as a deferral, not a settled design choice.

## Ratify the exact decision

Assign the candidate an immutable version and, when hashing is available, a content digest. Send the complete identical decision text and evidence version to all three independently. Request this response from each:

```text
Reviewer: A/B/C (model identity is recorded by the coordinator)
Evidence version:
Decision version/digest:
Verdict: AGREE or OBJECT
Reasons: why the decision and rationale satisfy the criteria
Remaining objections: none, or specific issue IDs and required changes
Accepted risks/conditions:
```

`AGREE` must endorse both the decision and its rationale, explicitly accepting the listed conditions/risks. A response that still demands a change is `OBJECT` even if it says “agree”. Missing, stale, ambiguous, or failed replies are not assent. Different reasons are acceptable when they support the same full rationale; conflicting material reasons must be resolved in the document.

The coordinator verifies the completion gate: all three confirmed distinct models, the same evidence version, the same complete decision version, three explicit agreements, and no outstanding blocking objections. If any text changes after a vote, create a new candidate and obtain all three votes again. Preserve prior objections and their dispositions instead of erasing the debate history. A fourth model, the coordinator, or a two-to-one majority cannot override this gate.

## Completion or resumable pause

After the gate passes, report the decision and reasons, alternatives, important resolved disagreements, accepted risks/conditions, verification gaps, roster and identity evidence, and the three ratifications. Link the current OpenSpec requirements if adopted. State that the panel agreed to a recommendation; only the developer's separate instruction can authorise implementation.

Before agreement, keep working through productive rounds within the [execution budget](execution.md). If work cannot continue, report **incomplete / no consensus** with the current evidence/decision versions, roster, round count, valid and stale responses, outstanding objections, and exact next step. Preserve a portable checkpoint in the conversation, or save it when requested. Questions and status requests do not reset the debate or advance the underlying lesson. User cancellation stops the work immediately.
