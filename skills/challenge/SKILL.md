---
name: challenge
description: Check a recommendation before acting on it, whether this AI made it or another agent did. Shows how the decision was reached, checks it against the codebase's own style and structure with real examples, names the alternatives it skipped, and when the case looks weak brings in a fresh devil's-advocate reviewer. Read-only. Use for "is this right?", "why this one?", "how did you decide?", "does this match our code?", "challenge this", or "I'm not sure about this". (Dev Mentor)
---

# Challenge

Use this when the person doubts a recommendation: yours, or one pasted in from another agent. The goal is a decision they understand and trust, not a defence of the first answer. It's read-only, and it stays on the current lesson step.

## 1. Restate it

One line each: the recommendation, the options it was chosen from, and the reasons it gave. Take a pasted recommendation as written; don't fill in reasons it didn't give.

## 2. Show how it got there

Re-read the code now; don't trust the earlier reply. Give every reason one row:

| Reason given | Evidence | Status |
| --- | --- | --- |
| "Builds on the existing direct-database design" | `src/api/items.ts:40` queries the table directly | ✓ checked |
| "The project prefers direct resolvers" | Not in the README, AGENTS.md or `docs/adr/` | ✗ unsupported |
| "Two queries cover today's needs" | The ticket names two cases; nothing about more | ~ assumption |

Use absolute-path file links, as in the ground rules.

## 3. Check it against this codebase

Find how the code already solves the same kind of problem:

- **Neighbours:** two or three existing examples of the same thing (other resolvers, handlers, jobs, components). Say how you searched, so they learn the move.
- **Written rules:** AGENTS.md, CONTRIBUTING, ADRs, `docs/`, lint and formatter config, the README.
- **Structure:** where files like this live, how they're named, tested and deployed.

For each, say **matches**, **differs** (and how), or **no precedent**. "Matches our style" needs at least one cited example.

## 4. What else could work

Name the options the recommendation didn't consider: keeping things as they are, a smaller version, or the pattern the neighbours use. One line each on why it would or wouldn't win, tied to evidence.

## 5. In doubt? Bring in a fresh challenger

Any of these means you're questioning the recommendation:

- a key reason is unsupported,
- the codebase points the other way,
- an alternative looks as good or better,
- the person still disagrees after steps 2–4.

Then don't argue it out in your own head. Call the Skill tool with "devils-advocate" and give it an evidence pack: the decision, every option (including the ones from step 4), the table from step 2, the findings from step 3, and the commit. It picks the models and runs a multi-model debate where the host allows. If it can only run a single-model challenge and this session can start a subagent, run that challenge in a fresh subagent that hasn't seen your reasoning, and label it **same model, fresh context**.

If nothing raised doubt, say so, and offer it once: *"Want a devil's-advocate check anyway?"*

## 6. Verdict

One card, then stop:

- **Stands:** why, the strongest evidence, and the one thing still worth checking.
- **Change it:** to what, and which evidence changed the call.
- **Unclear:** what would settle it (a test, a measurement, a question for the team).

Say plainly what changed from the original recommendation and why. Then go back to the step it came from; the person chooses what's next.

Never edit, commit or post anything.

## Style and ground rules

Before your first reply, call the Skill tool with "mentor-style" and follow it for the rest of the conversation. It holds the settings (experience level, tone, pace, build, ADHD mode), how to read and save them, and the ground rules. If it can't be loaded, use the defaults (mid-level, balanced tone, one step per reply, ask who makes each edit, ADHD mode off), cite real code, never invent results, and don't push, post or merge unless asked.
