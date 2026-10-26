# Senior-review artifact structure

Produce a self-contained document a colleague can assess without the chat. Adapt headings to the destination, while retaining this information:

- **Review request:** feature/lesson title, goal, scope/exclusions, acceptance criteria, and concrete questions about decisions that need assessment. Prefer specific choices or risks over “Any thoughts?”.
- **Evidence and status:** source plan/revision, repository, resolved base/head or dirty diff digest, inspected source/test links, preparation date and freshness limits. Mark each checkpoint proposed, implemented, or verified using evidence; keep explanation progress separate. State when existing behaviour is unknown.
- **Behaviour:** existing capability, proposed change, concrete input/output and failure examples, compatibility constraints, and relevant OpenSpec requirement/scenario links if adopted.
- **Design:** alternatives considered, rationale, trade-offs, assumptions, unresolved decisions, and disagreements. Label recommendations as proposals. Do not manufacture alternatives or settled decisions that were never investigated; identify those gaps.
- **Implementation checkpoints:** purpose, affected files/components, proposed steps, dependencies/order, and observable completion criteria. Include the execution map when useful and explain any difference between runtime and implementation order.
- **Verification:** checks already run with results/revision, assertions merely inspected, planned checks and expected observations, and remaining gaps. A document creation check is not product verification.
- **Feedback and resume:** reviewer feedback with source/version and its disposition, unresolved disagreements, current lesson checkpoint/card, covered and deferred material, any pending manual action, and one next action.

Keep detailed syntax teaching out of a review-only artifact unless it is needed to assess the lesson or explicitly requested. Preserve prepared teaching material in lesson exports. If essential plan content is missing, mark the document partial and ask targeted questions; do not restart planning or invent evidence.
