# mentor-style

[Skill file](../../skills/mentor-style/SKILL.md)

## What it does

`mentor-style` holds the settings and ground rules every other Dev Mentor skill follows: experience level, tone, pace, build mode, ADHD mode, and rules like "cite real code" and "`done` means check the diff". It also holds the project preflight: before `coach` or `spec` changes anything, it checks the checkout, asks worktree or branch and the branch name, and confirms the full path. Other skills load it automatically, so each rule lives in exactly one place.

## When to reach for it

You never call it yourself. Every Dev Mentor skill loads it before its first reply. Quick commands like `warmer`, `simpler`, `faster` and `ADHD mode on` are handled here.

## It's working if

- `more direct` then `warmer` visibly changes the tone, one step each time (direct → balanced, never straight to extra warm), and nothing else changes.
- With tone at 5, a real problem is still stated plainly.
- The same question at level `new` explains terms and commands; at `lead` it skips basics and covers trade-offs and risk.
- With ADHD mode on, every reply starts with the action, shows `Step N of M` and a time estimate, ticks off finished steps and parks side issues. With it off, you get normal cards. The facts are the same either way.
- `why`, `help` and questions answer without moving the lesson on; `next` then goes to the following step, never into another design workflow.
- During a coach lesson, `architect`, `challenge` and `devils-advocate` only run when you ask or doubt a recommendation, answer that one concern, and return to the same step.
- Before `architect` or `devils-advocate` designs anything, it asks **Context** (Add docs · Point me to it · Repo is enough) and waits for you to confirm its summary of the system.
- A design starts from what already exists and climbs one rung at a time (existing structures → plus one attribute or index → one new table → more), showing the query that breaks each lower rung. It asks you before going beyond one new table.
- A design question gets about a page first: the smallest design that fits, walked through each query you asked about. Extra machinery only appears if a stated requirement needs it.
- Settings hold for the whole lesson: a long lesson still uses your build mode's card shape and, with ADHD mode on, `Step N of M` and a time on every card.
- Every example (a code change, a command, a test result, an error, a traced request) shows real evidence. At `new` and `vibe` it's trimmed, with the important line pointed out, what it means and one real example traced step by step. At `junior` and up it's the full command and output.
- "Passed" or "works" never appears without its command and output.
- The first time something can be run, it asks **I'll run it** or **AI runs it**, at every level including junior and senior, and remembers that for the lesson. With **I'll run it** you get the exact command and where to type it, and it reads the output you paste.
- `show output`, `show the flow` and `how do I run that?` work at any level.
- Nothing is pushed, posted, merged or messaged unless you asked.
- A lesson that changes code (`coach`, `spec`) never starts on the default branch. The preflight asks worktree or branch, then the name, and confirms the branch and full path first. `explain` and `learn` skip it.
- In a repo whose default branch is `trunk` (`origin/HEAD` points to `origin/trunk`), the preflight on `trunk` doesn't offer *Stay on `trunk`*. On a feature branch in that repo, it does.
- With no remote, or with `origin/HEAD` unset, the preflight on `main`, `master` or `develop` still treats it as the default branch and doesn't offer *Stay*.
- If the app says a worktree is attached but `git worktree list` doesn't show it, the lesson stops and reports both paths; it doesn't delete, recreate or fall back to `main`.
- File links are absolute paths in the confirmed checkout (`/Users/you/code/shop-PROJ-123/src/items.ts`), never relative, and switch to the new path if the checkout changes.
- A design question ("how should we store X?") never ends at "use DynamoDB": the answer includes a proposed design, labelled proposed, with every query from the question walked through it.
- Opening an IDE says "sent the open request", not "opened", until you confirm.
