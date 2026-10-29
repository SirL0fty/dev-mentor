# Outcome as a decision record

For sharing the result of a debate, a `devils-advocate` challenge, a `challenge` verdict or a `review`, as an architecture decision record (ADR) for a person or the team. It records what happened and what was decided. It is not a new plan, not a request for approval unless that's the purpose, and not a rerun of the debate.

Build it from what was recorded: the debate record (`.dev-mentor/debates/<topic>.md`), the reviewers' replies, and the evidence pack. Anything not recorded is **unknown**; write "unknown", never a guess. Never invent private reasoning, exchanges, concessions or agreement beyond the recorded replies.

Write it as Markdown, using the project's ADR template if it has one: keep its headings and fit the sections below into them. Otherwise use these sections in this order, from short outcome to readable reasoning to technical evidence. Sections 1–5 must answer the question as asked on about one page; everything after supports it. For a shared page, fill [outcome.html](../assets/outcome.html) from the same content.

1. **Header.** `ADR NNNN: <decision title>`, the date, who it's for and the purpose from the **Purpose** question in the skill.
   - **Status: Proposed.** Reviewers agreeing doesn't make it accepted; only write **Accepted** (with who accepted it and when) if they tell you the team accepted it.
   - **Debate result:** **agreed**, **conditional**, **disputed** or **incomplete**.
2. **Bottom line.** What was agreed, its status, and one line on what agreement means: models agreeing is a recommendation, not a tested fact or approval.
3. **Context.** The original question, the material constraints, and anything added along the way. If the reader asked the question, say this answers it.
4. **Decision.** What was agreed, in the decided wording.
5. **Proposed design.** When the question asked for a design: the recorded design (keys, item types and indexes for a table) labelled *proposed, to validate*, and each query from the question walked through it. Conditional and deferred safeguards go under Still open as *If you later need…*, not into the design. If reviewers proposed different designs and none was agreed, show each, attributed, and say none was agreed.
6. **Consequences.** The trade-offs accepted, and what becomes easier or harder.
7. **Alternatives considered.** What was rejected or kept conditional, and why.
8. **Where each reviewer started.** Model, first position, main arguments, strongest objection to their own view. Keep minority positions.
9. **Where they disagreed, and what changed.** Every material disagreement: who argued what, the evidence or argument that changed the recommendation, and how it ended. Keep these even when asked for a short version.
10. **Claims that were corrected.** Factual claims that turned out wrong, and the evidence.
11. **Still open.** Separate the kinds: unresolved objections, unanswered questions, assumptions, and prerequisites that must be checked. Say what would settle each. If no reviewer objects to a conditional recommendation, say exactly that; it is not "nothing remains open".
12. **How the decision was made.** The real process (independent round, challenge rounds, ratification), the decision version voted on, and each seat's requested model, runtime-confirmed model and vote. If models couldn't be confirmed, say so.
13. **Evidence and limits.** Repository, branch, commit, key files, and the docs and diagrams the reviewers were given. State plainly what was not done: tests, payload checks, benchmarks, implementation. Never imply they happened.
14. **Full record.** Each reviewer's recorded replies and the exact decision text (collapsed sections on the page). Label any editorial note as editorial.

Use plain words and descriptive headings. Link to evidence where it helps. In Markdown, put the full record under a last heading.

Before saving, check it against these cases:

| Case | It must |
| --- | --- |
| Unanimous but conditional | Say "Status: Proposed" and "agreed · conditional", list the conditions under Still open, and not read as "approved". |
| Dissent | Name who objected and why, and keep the objection under Still open. |
| Incomplete | Say "incomplete", show the latest decision text, the open objections and where to resume. |
| Recipient asked the question | Frame it as the answer to their question, with no approval questions. |
