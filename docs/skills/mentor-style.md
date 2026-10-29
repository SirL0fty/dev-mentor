# mentor-style

[Skill file](../../skills/mentor-style/SKILL.md)

## What it does

`mentor-style` holds the settings and ground rules every other Dev Mentor skill follows: experience level, tone, pace, build mode, ADHD mode, and rules like "cite real code" and "`done` means check the diff". Other skills load it automatically, so each rule lives in exactly one place.

## When to reach for it

You never call it yourself. Every Dev Mentor skill loads it before its first reply. Quick commands like `warmer`, `simpler`, `faster` and `ADHD mode on` are handled here.

## It's working if

- `more direct` then `warmer` visibly changes the tone, one step each time (direct → balanced, never straight to extra warm), and nothing else changes.
- With tone at 5, a real problem is still stated plainly.
- The same question at level `new` explains terms and commands; at `lead` it skips basics and covers trade-offs and risk.
- With ADHD mode on, every reply starts with the action, shows `Step N of M` and a time estimate, ticks off finished steps and parks side issues. With it off, you get normal cards. The facts are the same either way.
- `why`, `help` and questions answer without moving the lesson on; `next` then goes to the following step.
- Nothing is pushed, posted, merged or messaged unless you asked.
- A lesson that changes code (`coach`, `spec`) never starts on the default branch. The preflight asks worktree or branch, then the name, and confirms the branch and full path first. `explain` and `learn` skip it.
- If the app says a worktree is attached but `git worktree list` doesn't show it, the lesson stops and reports both paths; it doesn't delete, recreate or fall back to `main`.
- Opening an IDE says "sent the open request", not "opened", until you confirm.
