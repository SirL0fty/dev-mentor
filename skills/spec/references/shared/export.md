# Shared export mechanism

Use this workflow for lesson exports, senior-review documents, and portable feature specifications. The caller chooses content and may provide an artifact-specific default path; destinations change how it is saved, not its evidence or progress semantics. Apply the [session contract](session.md).

1. Snapshot the existing plan, evidence version, prepared explanations, and lesson position, including its current card and deferred coverage. Reuse them. Inspect additional material only for material gaps or freshness, and label unrefreshed evidence. Do not restart planning to export.
2. Resolve the destination from the explicit request, saved preference, then project convention. A request to share/save a plan or convert it to a spec authorises the document write. Without a destination, use the caller's artifact-specific default, otherwise `docs/lesson-plans/<feature>.md` in the selected project; if there is no selected project, return copy-ready Markdown and explain that it has not been saved. Honour text-only requests. Ask only for missing destination identity or meaningful ambiguity.
3. Read an existing document before updating. Preserve user edits and unrelated content; resolve conflicting edits before replacing them. Use repository-relative or revision-specific source links for colleagues and stable document IDs for connected destinations. Never export credentials or unrelated project material.
4. Render the requested document from the same snapshot. For a review request, use the [review artifact structure](review-artifact.md). For a lesson, include goal/criteria, evidence/context, map, ordered checkpoints, explanations/examples already prepared, verification, open questions, and resume position. For a product spec, use the calling skill's format and keep learner progress outside the document. Mark unprepared material accurately; preparing it does not mark it taught.
5. Save via the appropriate available tool and read back the result. Verify content, links, statuses, review questions where applicable, and the unchanged resume position. A tool error or missing read-back means save/verification is uncertain; do not claim success or create duplicate documents blindly.
6. Return the artifact location and actual save status, then restore the active lesson's workflow and position. A copy-ready response is not a saved artifact.

## Destination handling

| Destination | Handling |
| --- | --- |
| Markdown | Write a portable `.md` file in the selected project or requested directory. Read back and check local links. |
| Obsidian | Use the user's selected vault and folder; resolve the vault path rather than guessing. Preserve frontmatter and user-authored sections. Markdown links are portable; use vault links only when requested or established. Saving a note does not publish the vault. |
| Notion | Prefer the connected integration. Resolve the exact parent/page and use stable IDs, reading existing content before updates. Follow the integration's content limits, preserve unrelated blocks, and read back. If unavailable, return/save a Markdown fallback and report that Notion was not updated. |
| Other available destinations | Discover the relevant integration and its supported create/update/read operations. Preserve the same content and position contract. If it cannot save or verify the document, report the limitation and provide Markdown. |

Preparing or saving an artifact does not send messages, notify reviewers, invite people, change permissions, publish, or create public links. Those actions require a separate explicit request. Choose operations without explicit notification/access changes; if the selected destination automatically notifies people or publishes content and that cannot be suppressed, surface that before writing and offer a local draft. Do not promise control over notifications the integration cannot establish.

## Returned feedback

Attribute feedback to its source/revision and the artifact version reviewed. Check whether it addresses the current evidence. Record accepted revisions with rationale and keep disputed or unanswered points visible alongside the competing positions. Update the document without rewriting disagreement as consensus. Reviewer comments may suggest scope changes but do not authorise implementation. Preserve lesson position; if the plan changes enough to invalidate a checkpoint, explain that and retain its history.

Link the canonical specification's requirements/scenarios and revision from lesson or review artifacts when available, whether Markdown or OpenSpec. Summaries are labelled snapshots. Product requirement changes belong in the canonical spec through an authorised update, not an independently maintained copy in each export. If a Markdown spec is later converted to OpenSpec, link the earlier document to the generated change and label it a source snapshot.
