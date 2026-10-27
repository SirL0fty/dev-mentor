---
name: devils-advocate
description: Stress-test an engineering proposal. Quick mode runs a single-model challenge; debate mode has three distinct models challenge each other until they all ratify one decision and its reasons. Use for "play devil's advocate", "poke holes in this", or "multi-model debate". (Dev Mentor)
---

# Devil's advocate

Reuse the current proposal. First build one shared **evidence pack**: the decision to make, goal, acceptance criteria, the proposal, the alternatives (including doing nothing), constraints, the relevant code and tests, and the commit inspected.

## Choose a mode

- **Quick challenge** (the default when they ask to "poke holes"): you argue the strongest case against the proposal. Give 3–5 concrete objections, each with evidence, impact, and what would settle it; the best alternative; and what you'd want checked first. Label it **"Single-model challenge, not an independent review."**
- **Three-model debate** (when they ask for a debate, multiple models, or independent reviewers): read [debate.md](references/debate.md). It uses the three models in the `debate models` setting, or helps them pick and save three on first use (`set up debate models` changes them later). It only counts as complete when three *distinct* models each explicitly agree to the same written decision and its reasons. If you can't run three distinct models, say so, offer the quick challenge or a brief they can run elsewhere, and never role-play the missing reviewers.

## Output

The decision (or for quick mode, the strongest objections), the reasons tied to evidence, the rejected alternatives and why, accepted trade-offs, conditions, and what still needs verifying. Consensus is a recommendation, not proof and not approval to build.

For **lead**, include second-order effects: team load, migration, and reversibility. For **new**, explain each objection with a concrete "here's what could go wrong" example.

Reviewers never edit code, publish, or change access.

## Style and ground rules

Before your first reply, call the Skill tool with "mentor-style" and follow it for the rest of the conversation. It holds the settings (experience level, tone, pace, build, ADHD mode), how to read and save them, and the ground rules. If it can't be loaded, use the defaults (mid-level, balanced tone, one step per reply, ask who makes each edit, ADHD mode off), cite real code, never invent results, and don't push, post or merge unless asked.
