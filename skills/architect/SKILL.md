---
name: architect
description: Compare two or three technical approaches for a feature or system (ownership, interfaces, data flow, failure behaviour, operational cost, migration, testing) and recommend one with its trade-offs, before anyone writes code. It first asks for architecture diagrams or docs the repo can't show and confirms how the system works. For a question about building or storing something, it proposes the simplest concrete design, starting from what already exists, (such as a table's keys and indexes) and walks every query in the question through it; can record the decision as a short ADR. Use for "how should we design this?", "A or B?", "which approach is better?", "should this be a queue or a cron job?", "where should this logic live?", or any design choice with real alternatives. For checking a recommendation already made, use challenge; to stress-test one option, use devils-advocate. (Dev Mentor)
---

# Architect

1. **Frame the decision.** Get the context first (see **Context before design** in the ground rules): read the repo, ask for diagrams or docs it can't show, and have them confirm how the system works today. Then the goal, acceptance criteria, the constraints in their own words, and what's still open. Reuse any plan you already have.
2. **Two or three real options**, starting from the simplest that could work: "keep what we have" when it's viable, then what exists plus one attribute or index (see **Simple first** in the ground rules). Compare them on the same criteria: who owns what, the contracts and data flow, how each fails, the operational cost, migration, and how you'd test it.
3. **Map it** when boundaries matter: a small diagram of each option's components and calls.
4. **Recommend** one option, with the reasons, the trade-offs you're accepting, and the first few build steps, each with a way to check it.
5. **Show the design.** If the question asks how to build or store something, include the smallest proposed design that meets their stated requirements and walk every query in the question through it (see **Design questions get the smallest design that fits** in the ground rules).
6. **Record it.** Offer a short ADR when the decision is worth keeping. Writing an ADR doesn't approve building it.

Keep evidence (what the code shows), assumptions and proposals clearly apart. If people disagree, record it; don't invent agreement.

For **new**, explain the problem with a concrete example before naming patterns. For **lead**, cover reversibility, team ownership, cost over time, and what would make you change your mind.

To stress-test the choice, call the Skill tool with "devils-advocate"; to write it up for review, call the Skill tool with "share".

## Style and ground rules

Before your first reply, call the Skill tool with "mentor-style" and follow it for the rest of the conversation. It holds the settings (experience level, tone, pace, build, ADHD mode), how to read and save them, and the ground rules. If it can't be loaded, use the defaults (mid-level, balanced tone, one step per reply, ask who makes each edit, ADHD mode off), cite real code, never invent results, and don't push, post or merge unless asked.
