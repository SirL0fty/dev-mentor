# Three-model execution contract

Use the [runtime adaptation](../../../shared/runtime.md). The pack supplies a protocol; the host or an already configured tool supplies execution. No dedicated Dev Mentor agent, Python runner, or particular model provider is required.

## Select and confirm three models

Inspect the session's supported model-selection interface and available configuration. Use the developer's existing choices/preferences; otherwise choose three available distinct models and state them before dispatch. Prefer different model families or providers when available to reduce correlated blind spots. Different models do not guarantee an unbiased or correct outcome.

Use exactly three reviewer seats, A/B/C, with separate fresh contexts. Three personas, three sessions of the same model, or different reasoning/temperature settings of one model do not satisfy this requirement. Resolve aliases to canonical model identities where the host allows it. A parent model may also occupy one seat only through a separate fresh reviewer context; the coordinator is not a fourth vote.

Record for each seat: requested model, resolved model/provider, source of identity evidence, session/worker ID, and status. Reliable identity evidence is runtime metadata or documented routing that confirms a successful call used the selected model; a reviewer's self-description is insufficient. Configuration alone shows intent, not a successful invocation. Unknown identity stays unknown and prevents verified completion. If aliases resolve to the same model, the panel is incomplete.

Native subagents are preferred when they can select all three models. Use only actual tool-schema fields, and never silently fall back to the parent or another model on rejection. An authorised existing multi-model integration can supply missing seats. If no suitable route exists, prepare identical briefs for three user-run sessions and label the debate waiting for results. Pasted reviews need model/session provenance and the same ratification process; they are not automatic execution. Do not replace missing participants with the coordinator's role-play.

## Dispatch, follow up, and recover

Give each worker the same frozen evidence and the [debate protocol](debate.md), with no previous reviews in the first round. Use parallel dispatch when supported; sequential calls in fresh isolated contexts are equally valid. Each worker gets the full review rubric, not a forced position to defend.

Keep worker conversations available for cross-examination and ratification. On hosts without resume, send the complete versioned debate record and that seat's earlier responses to a new session on the same confirmed model, recording the replacement session. Continue to relay rounds in the coordinating conversation; do not claim background work continues after the host has stopped it.

Use read-only capabilities for reviewers. Prefer supplying an evidence snapshot without tools when sufficient. If further inspection is needed, coordinate read-only checks, add the results to a new evidence version, and give all three the update. Do not expose unrelated project material to external providers or weaken host permissions.

State a round/time budget before starting, using existing user preferences. Without a specified budget, allow up to six panel rounds and twenty minutes of active execution; a panel round is one request to each reviewer, including ratification. Follow any tighter host limits. Monitor progress and stop/cancel pending workers on user cancellation or budget exhaustion. A host that lacks cancellation cannot promise to terminate provider jobs; report their status and stop scheduling more work.

Timeouts and unavailable reviewers remain visible. Retry a transient failure within the remaining budget using the same model, evidence, and round ID. Never reuse an old vote for a changed decision. A model replacement requires an explicit new roster, an independent assessment from that model, and fresh ratification by all three. Preserve an incomplete checkpoint if the failure cannot be recovered. Exhaustion, repeated rounds without new evidence, or a decision requiring the developer's preference pauses the debate as unresolved; extending the budget requires the user's direction. Do not report success just to end a run.
