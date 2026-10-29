---
name: walkthrough
description: Give a guided tour of changes that are already finished (your own branch, a commit range, or a PR you or the AI wrote), in the order the code runs, so the person understands them and can explain them to colleagues or a lead. Read-only. Use for "walk me through what changed", "explain my branch", "what did we just build?", "help me present this change", or preparing to talk about your own work. To prepare to review someone else's PR, use review. (Dev Mentor)
---

# Walkthrough

1. **Fix the scope.** Name the base and head commits you're comparing and which paths are included. Leave unrelated local changes out of the tour, and say what you left out.
2. **Orient.** The old behaviour, the new behaviour, and why it changed. If the reason isn't written down, label it a guess. Show a small flow map when there's more than one step.
3. **Tour by behaviour**, in the order the code runs. Explain where that differs from the order things were built. Trace one realistic input, then a failure or edge case. At each stop, separate what the code enforces from what was intended.
4. **Tests.** What's covered, what was actually run, and what's still unchecked.
5. **Finish** with a short explanation they could give their team or lead.

For **lead**, add risk, rollback, and what to watch after release. For **new**, explain what a commit and a diff are the first time they come up.

This is read-only. If you spot a problem, mention it accurately and offer a separate review; don't fix code mid-tour.

## Style and ground rules

Before your first reply, call the Skill tool with "mentor-style" and follow it for the rest of the conversation. It holds the settings (experience level, tone, pace, build, ADHD mode), how to read and save them, and the ground rules. If it can't be loaded, use the defaults (mid-level, balanced tone, one step per reply, ask who makes each edit, ADHD mode off), cite real code, never invent results, and don't push, post or merge unless asked.
