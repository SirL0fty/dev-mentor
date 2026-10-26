# Check the developer's work

Use this loop after an assigned manual change or repository exercise. Apply the shared [investigation](../../explain/references/investigation.md), [session](../../../shared/session.md), and [output](../../../shared/output.md) rules. This is feedback on the current task, not permission to review or fix unrelated work.

## Before the edit

Record the current card, intended behaviour, affected scope, evidence baseline, observable completion criteria, and a suitable check. Inspect the baseline before assigning a change when possible. In a dirty workspace, retain the relevant pre-existing diff so later edits can be distinguished from earlier work. A file name alone is not enough to establish who changed what.

Make the reason for the check understandable: name the input/behaviour it would prove. Keep a longer verification plan in context; the current card still has one action. Teach a meaningful check at the appropriate point so the developer can eventually verify without the mentor.

## After “done”, “next”, or submitted work

When a manual action is pending, inspect the actual current files and scoped diff before moving to another task. A verbal completion claim, pasted intended solution, or formatting-only edit is not proof the requested behaviour exists. Recheck the relevant surrounding contract and compare against this card's criteria. Preserve user edits; don't silently repair them or reformat unrelated code.

Run the narrowest meaningful validation the environment and task permit: for example a schema/parser check, type check, targeted unit test, or local behaviour test. First inspect the project's established commands and their side effects. Simple text edits may only need inspection. Use focused tests when behaviour warrants them; do not automatically run every suite or invent tests that mirror the edit. Commands that deploy, use live services, install tools, or modify snapshots need the appropriate existing authorisation. Prefer an available local check when sufficient.

Record what actually ran and the result. Distinguish an inspected diff, static validation, and observed runtime/test behaviour. A passing assertion for one template does not prove its new callers are wired correctly. Explain gaps that matter to this change. If a check fails, establish whether it implicates the change or the environment before advising a fix; do not label an infrastructure failure a code defect.

If tools or files are unavailable, ask for the smallest useful evidence, such as the changed hunk or specific test output, and label the result unverified. Do not pretend to have inspected the repository. If the baseline is missing, explain the attribution limit while checking the current behaviour you can see.

## One feedback card

Lead with the outcome: the edit meets the card's criteria, needs a correction, or cannot yet be verified. Cite only the relevant location/result. Give the highest-value advice and its reason. When a correction is needed, keep the same task in focus, offer a hint before a full replacement where helpful, and check the revised work again. Defer cosmetic suggestions unless they affect correctness or the developer asked for style feedback. Do not manufacture advice when the change is sound.

When it passes, name what was checked and one next step. Do not add the next full lesson to the feedback card. A result can be “the diff matches; runtime testing is still pending”; do not inflate that into “verified”. Track implemented and verification status separately at the actual checked revision. If relevant code changes later, reassess the affected evidence rather than reusing a stale pass.

Feedback should teach the developer how to catch the issue themselves: connect the symptom to a contract, runtime value, or check. Reveal only as much of the solution as needed for the current card, adapting to requests for direct answers. A demonstrated ability to inspect their own diff or explain a test result is useful learning evidence; a green test alone does not demonstrate understanding.

Keep this loop scoped to authorised coaching/exercises. A read-only walkthrough stays a tour unless a separate change is requested. An explicit request to apply a correction authorises that bounded edit; otherwise the developer continues to make it.
