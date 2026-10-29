# Outcome report

For sharing the result of a debate, a `devils-advocate` challenge, a `challenge` verdict or a `review`. It reports what happened. It is not a new plan, not a request for approval unless that's the purpose, and not a rerun of the debate.

Build it from what was recorded: the debate record (`.dev-mentor/debates/<topic>.md`), the reviewers' replies, and the evidence pack. Anything not recorded is **unknown**; write "unknown", never a guess. Never invent private reasoning, exchanges, concessions or agreement beyond the recorded replies.

Copy [outcome.html](../assets/outcome.html) and fill it in. Its sections, in this order, go from short outcome to readable reasoning to technical evidence:

1. **Header.** Title, date, reading time, who it's for and the purpose from the **Purpose** question in the skill. If they asked the original question, say the report answers it.
2. **Bottom line.** What was agreed and its status: **agreed**, **conditional**, **disputed** or **incomplete**. One line on what agreement means: models agreeing is a recommendation, not a tested fact or approval.
3. **What was asked.** The original question, the material constraints, and anything added along the way.
4. **Where each reviewer started.** One card per reviewer: model, first position, main arguments, strongest objection to their own view. Keep minority positions.
5. **Where they disagreed, and what changed.** Every material disagreement: who argued what, the evidence or argument that changed the recommendation, and how it ended. Keep these even when asked for a short version.
6. **Claims that were corrected.** Factual claims that turned out wrong, and the evidence.
7. **What was agreed**, then **rejected or kept conditional**, with the reason for each.
8. **Still open.** Separate the kinds: unresolved objections, unanswered questions, assumptions, and prerequisites that must be checked. Say what would settle each. If no reviewer objects to a conditional recommendation, say exactly that; it is not "nothing remains open".
9. **How the decision was made.** The real process (independent round, challenge rounds, ratification), the decision version voted on, and each seat's requested model, runtime-confirmed model and vote. If models couldn't be confirmed, say so.
10. **Evidence and limits.** Repository, branch, commit, key files. State plainly what was not done: tests, payload checks, benchmarks, implementation. Never imply they happened.
11. **Full record.** Collapsed sections with each reviewer's recorded replies and the exact decision text. Label any editorial note as editorial.

Use plain words and descriptive headings. Link to evidence where it helps. If they want Markdown (for Obsidian, say), use the same sections in the same order, with the full record under a last heading.

Before saving, check it against these cases:

| Case | It must |
| --- | --- |
| Unanimous but conditional | Say "agreed · conditional", list the conditions under Still open, and not read as "approved". |
| Dissent | Name who objected and why, and keep the objection under Still open. |
| Incomplete | Say "incomplete", show the latest decision text, the open objections and where to resume. |
| Recipient asked the question | Frame it as the answer to their question, with no approval questions. |
