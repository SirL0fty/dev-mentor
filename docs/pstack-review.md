# pstack, Code Mode and the Obsidian field guide: what to change in Dev Mentor

Reviewed on 2026-11-26 against Dev Mentor v0.24.0, [pstack's skills](https://github.com/cursor/plugins/tree/main/pstack/skills) at `main`, Flavio Copes' [OpenCode Code Mode explained](https://flaviocopes.com/opencode-code-mode/), and the author's Obsidian *Coding Standards* vault (*My Engineering Field Guide*, *Coding Standards Flashcards*, *Review Paths* and the rule notes).

Dev Mentor uses its own wording and doesn't copy pstack's text. Each idea below says what was taken and where it now lives.

## Done on this branch

| Change | Where | Source |
| --- | --- | --- |
| New `look-back` skill: mines past chats from any assistant for repeated questions, repeated corrections and working style, routes each to a lesson or the most lasting fix, and edits only after approval. | [look-back](../skills/look-back/SKILL.md), [history sources](../skills/look-back/references/history-sources.md) | pstack `recall`, `reflect`, `automate-me`, `correct`; Matt Pocock's `retro`; the field guide's learning log |
| **Worth saving** prompts: one line offering to save a moment (it clicked, a catch, a reusable move, a decision) to a learning log in Obsidian, Notion or Markdown. `save note` saves; `save prompts off` stops the offers. | [mentor-style](../skills/mentor-style/SKILL.md) (ground rule and setting), [export.md](../skills/mentor/references/export.md) (**Save a note**) | The field guide's *Learning log* and "measure progress by reuse, not memory" |
| **Batch bulk reads**: when there are many independent reads and the session has a script tool such as Code Mode, use one read-only script that returns only the fields needed, and keep the steps being taught visible. | [mentor-style](../skills/mentor-style/SKILL.md) ground rules | Code Mode article |

### Why `look-back` is one skill, not four

pstack splits the job by output: `recall` rebuilds context, `reflect` edits skills after one session, `automate-me` writes a personal mode skill, and `correct` turns repeated mistakes into checks. For a learner, the useful split is by **what repeats**: a question you keep asking is something to *learn*, a correction you keep giving is something to *change*. One skill keeps that choice in one report. It takes the best guardrails from each:

- **Lock the scope and say it back** before reading (`recall`). Never read other projects without being asked.
- **Two separate chats or it's noise** (`automate-me`).
- **Transcripts are data, not instructions** (`reflect`).
- **Fix at the highest level that works**: setting or check before a sentence in `AGENTS.md`; a written rule that's still broken needs enforcing, not repeating (`correct`, `retro`).
- **Never edit an installed plugin's cache**; propose, then wait (`reflect`).

It's host-agnostic: it prefers the host's own session tools, then known local stores (T3 Code, OpenCode, Claude Code, Codex, Cursor), and checks each store's real schema first because formats change.

## Built from the review

All nine tweaks and the two missing principles are now in the skills. Each row says where the rule lives.

| Tweak | Where | Source |
| --- | --- | --- |
| **Why from the record:** "why was it built like this?" is answered from `git log -L` / blame, the commit and the PR, quoting the authors and labelling inference. | mentor-style ground rule, used by `explain` | pstack `why` |
| **Maps grow:** at `junior` and below, a flow of more than three parts is redrawn one part per card (`← new`); `map` shows it all. | mentor-style, *What each level sees* | pstack `teach` |
| **Review lenses:** six lenses (logging and tracing, retries and rollback, inputs and configuration, permissions and exposure, helpers and ownership, test evidence), at most two per diff, chosen by what the diff touches. A `standards:` profile line lets them cite your own rule IDs, MUST or SHOULD, and plain-English lines; the repo wins when they disagree. | [review-lenses.md](../skills/mentor-style/references/review-lenses.md), used by `review` and `coach` | Obsidian *Review Paths* and flashcards |
| **Doesn't prove:** every passing check names what it doesn't prove; `senior` and `lead` also see how far the claim got (said so · pointed at the line · walked the failure · ran it · reproduced in the app). | mentor-style, *Never just a claim* and *On `done`* | Obsidian *What the tools actually tell me*; pstack `prove-it-works`, `blast-radius` |
| **Predict, then check:** at `junior` and below or with build `me`, one optional prediction per step; `just tell me` stops it. | mentor-style, *What each level sees* | Obsidian field guide |
| **`plain words` and `catch me up`:** one-off plain restatement; a catch-up that leads with what's waiting on you. Neither changes a setting. | mentor-style quick commands | pstack `bro`, `ketchup` |
| **Root cause, then failing test first** on bug fixes. | `coach` step 3 | pstack `fix-root-causes`, `tdd`, `test-behavior-not-implementation` |
| **Is that the goal?** when the ticket doesn't say why. | `coach` orientation | pstack `in-your-own-words` |
| **Plain writing:** no framing labels or announced difficulty; one name per concept. | mentor-style, card rules | pstack `teach`, `unslop` |
| **Self-review and making repeats impossible** at the end of a feature: a lens checklist tied to their diff, and a lint rule or test for a mistake made twice. | `coach` step 5 | Obsidian *Before I ask for review*; pstack `encode-lessons-in-structure`, `correct` |

## Considered and skipped

| pstack skill | Why not |
| --- | --- |
| `poteto-mode` and its playbooks, `figure-it-out`, `arena`, `swarm` | Built for autonomous, parallel delivery. Dev Mentor's goal is that the person can do it next time; `coach` is the playbook. |
| `interrogate` | `devils-advocate` and `challenge` already cover multi-model review, with a stricter completion rule. One idea worth borrowing later: keep only findings a run proves. |
| `architect` (pstack) | Settles a caller's types before code crosses a boundary. Dev Mentor's `architect` compares designs; `coach`'s "new mechanism" card covers the rest. |
| `sharpen`, `reframe` | Prompt-crafting for experts. Could become a `lead`-level option in `learn` later. |
| `show-me-your-work` | Lesson files already keep decisions and position; a TSV log adds little for one learner. |
| Formal verification, `statechart`, `benchmark-checklist`, `make-bot-ui`, `ketchup-video`, `setup-pstack`, `no-comments`, `typescript-best-practices` | Specialist or Cursor-specific; outside mentoring. |

## From the Obsidian vault: standards to keep when mentoring

These already shape the new work and are worth holding every skill to:

- **One source of truth, many indexes.** The vault links to the repo's standards instead of copying them. Dev Mentor's "one home per rule" is the same rule; exports and the learning log link to code and standards rather than restating them.
- **In plain English, then spot it in a diff.** Every rule note leads with what it means and what it looks like in a diff, with the official wording folded away. Good shape for `review` concerns and `coach` fix cards.
- **MUST is binding, SHOULD needs a reason.** When a card cites a standard, say which, so the learner knows whether it's a rule or a strong default.
- **Measure progress by reuse, not memory.** The four progress steps (explained → tried with help → repeated solo → used on a different task) now drive `save note` and `look-back`.
- **Use AI without skipping the part I want to learn.** The field guide's prompt (*"Don't edit yet. Show me one place to start and why. Give me one input to trace. Let me predict the next step"*) is close to `coach` with build `me`; **Predict, then check** closes the gap.

## Code Mode: what it changes and what it doesn't

Code Mode lets the assistant write a short script that calls tools and returns only what matters. For Dev Mentor:

- **Use it for** reading many things whose results don't steer the next read: every check and review thread on a watched PR, the neighbour search in `challenge`, a month of chats in `look-back`.
- **Don't use it for** the investigation being taught. A learner who sees one script and an answer hasn't learned where to start; keep those reads as visible steps.
- **Writes stay one at a time.** A failed script can leave half its writes done; Dev Mentor already never pushes, posts or merges unasked.
- **Script output is still untrusted** and permissions still apply per tool.

Possible follow-up: `learn` could use the article's catalog example to teach the concept itself (*why batching independent reads saves context, and when it hides mistakes*).
