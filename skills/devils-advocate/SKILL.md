---
name: devils-advocate
description: Stress-test an engineering proposal. It first gathers shared context (the repo plus any architecture diagrams or docs you add) so every reviewer starts from the same picture. By default it checks which models this assistant can really run, then has three (or two) distinct models challenge each other until they all ratify one decision and its reasons, including a concrete proposed design when the question asks for one, starting from the simplest design that works; with only one model, or when asked for a quick take, it runs a clearly labelled single-model challenge. Use for "play devil's advocate", "poke holes in this", "multi-model debate", or "quick challenge". (Dev Mentor)
---

# Devil's advocate

Reuse the current proposal. Every reviewer must start from the same full picture, so before choosing a mode:

1. **Get the context.** Follow **Context before design** in the ground rules: read the repo, ask for architecture diagrams, design docs or PDFs it can't show, and have the person confirm your summary of how the system works.
2. **Build one shared evidence pack** from that confirmed picture: the decision to make, the goal, their requirements **quoted word for word**, acceptance criteria, the proposal, the alternatives (including doing nothing), constraints, the relevant code and tests, the docs they gave, and the commit inspected. Label anything you added as an assumption; never strengthen a requirement they stated.

## Choose a mode

A multi-model debate is the default. Choose the mode only **after** checking what this session can really do, every time:

1. **Discover.** Read [debate.md](references/debate.md) and follow its step 1: find the tools that start a reviewer with a chosen model, which models they accept, and the saved `debate models`. Go by the tools this session actually has, not the host's name.
2. **Count the distinct models** you can seat, then pick:

| Distinct models you can seat | Mode | Label |
| --- | --- | --- |
| 3 or more | Three-model debate. Prefer three different families; if the host only offers one supplier's models, use three distinct ones from it. | "Three-model debate" (add "one supplier: they may share blind spots" when it applies) |
| 2 | Two-model debate | "Two-model debate, not three" |
| 1, or no way to choose a reviewer's model | Quick challenge | "Single-model challenge, not an independent review. Only one model is available here." |

Personas, extra sessions, or different settings of the same model are one model, not several. Never role-play a missing reviewer.

**Asked for a quick take** ("quick challenge", "just you", "single model", "no debate")? Skip discovery and run the quick challenge.

### Quick challenge

You argue the strongest case against the proposal. Give 3–5 concrete objections, each with evidence, impact, and what would settle it; the best alternative; and what you'd want checked first. Start with its label from the table, and when it's a fallback, say why.

### Debate

Follow [debate.md](references/debate.md). It only counts as complete when every seated model explicitly agrees to the same versioned decision and its reasons, and each model's identity is confirmed at runtime.

## Output

Open with about a page that answers exactly what was asked: the decision (or for quick mode, the strongest objections) and, when the question asks for a design, the smallest proposed design and its query walkthrough. After that: the reasons tied to evidence, the rejected alternatives and why, accepted trade-offs, conditions, and what still needs verifying. Consensus is a recommendation, not proof and not approval to build.

For **lead**, include second-order effects: team load, migration, and reversibility. For **new**, explain each objection with a concrete "here's what could go wrong" example.

Reviewers never edit code, publish, or change access.

## Style and ground rules

Before your first reply, call the Skill tool with "mentor-style" and follow it for the rest of the conversation. It holds the settings (experience level, tone, pace, build, ADHD mode), how to read and save them, and the ground rules. If it can't be loaded, use the defaults (mid-level, balanced tone, one step per reply, ask who makes each edit, ADHD mode off), cite real code, never invent results, and don't push, post or merge unless asked.
