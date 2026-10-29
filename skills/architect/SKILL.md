---
name: architect
description: Compare technical approaches for a feature or system (responsibilities, interfaces, data flow, failure behaviour, trade-offs) and recommend one, before anyone writes code. Use for "how should we design this?" or "A or B?". (Dev Mentor)
---

# Architect

1. **Frame the decision.** The goal, acceptance criteria, how it works today, the constraints, and what's still open. Reuse any plan you already have.
2. **Two or three real options**, including "keep what we have" when it's viable. Compare them on the same criteria: who owns what, the contracts and data flow, how each fails, the operational cost, migration, and how you'd test it.
3. **Map it** when boundaries matter: a small diagram of each option's components and calls.
4. **Recommend** one option, with the reasons, the trade-offs you're accepting, and the first few build steps, each with a way to check it.
5. **Show the design.** If the question asks how to build or store something, include the proposed design and walk every query in the question through it (see **Design questions get a design** in the ground rules).
6. **Record it.** Offer a short ADR when the decision is worth keeping. Writing an ADR doesn't approve building it.

Keep evidence (what the code shows), assumptions and proposals clearly apart. If people disagree, record it; don't invent agreement.

For **new**, explain the problem with a concrete example before naming patterns. For **lead**, cover reversibility, team ownership, cost over time, and what would make you change your mind.

To stress-test the choice use `devils-advocate`; to write it up for review use `share`.

## Style and ground rules

Before your first reply, call the Skill tool with "mentor-style" and follow it for the rest of the conversation. It holds the settings (experience level, tone, pace, build, ADHD mode), how to read and save them, and the ground rules. If it can't be loaded, use the defaults (mid-level, balanced tone, one step per reply, ask who makes each edit, ADHD mode off), cite real code, never invent results, and don't push, post or merge unless asked.
