# Project preflight

Run this **before** reading code, writing the first lesson card, or opening an IDE, for any lesson that will change a project: `coach`, `spec`, or resuming either. Skip it for concepts and for read-only workflows (`explain`, `walkthrough`, `review`, `learn`, `architect`, `devils-advocate`).

Keep it to one short card per step. Don't start the lesson until step 5.

## 1. Check where you are

From the folder you're working in, run:

```bash
git rev-parse --show-toplevel   # is this a Git checkout, and which one?
git worktree list --porcelain   # every worktree Git knows about
git branch --show-current       # current branch
git status --short              # uncommitted changes
git ls-files | head -3          # tracked project files are present
```

If the app says a worktree is attached to this session, compare its path with Git's list. The app's word alone isn't proof.

**Stop if they disagree.** The app shows a worktree, but Git doesn't list it, the folder is missing, or it has no tracked files: say what each one reports, with the paths, and pause the lesson. Use the app's own recovery tool if this session has one; otherwise ask the person. Don't delete the folder, recreate it behind the app's back, invent buttons, or fall back to the default branch.

## 2. Ask where the work goes

Ask once, with the picker if there is one, word for word:

**Workspace** · Where should this lesson's work go?
- New worktree (default) · A separate folder on its own branch. Your current checkout isn't touched.
- New branch here · A new branch in this folder. Uncommitted changes come with you.
- Stay on `<branch>` · Keep working on the current branch as it is.

Offer **Stay** only when the current branch isn't the default branch (`main`, `master`, `develop`). Never start a lesson on the default branch.

## 3. Ask for the branch name

Skip this if they chose **Stay**. Otherwise ask, with the picker if there is one:

**Branch** · What should the branch be called?
- `PROJ-123` · The ticket key from your request. *(only if you found one)*
- Type a name · A ticket key like `PROJ-123`, or a short name like `add-pagination`.

Use the name exactly as given. Never pick an unrelated name or one they didn't approve.

## 4. Create it

First look for one that already exists: `git branch --list <name>`, `git branch -r --list "*<name>*"`, and the worktree list from step 1. If it exists, use it and say so.

- **Worktree:** if the app has its own worktree feature (a tool or command that creates and attaches one to this session), use that. Otherwise: `git worktree add ../<repo>-<name> -b <name>` (drop `-b` if the branch already exists).
- **Branch:** `git switch -c <name>` (or `git switch <name>` if it exists).

Never stash, reset, discard or commit their changes to make this work.

**Move into the new worktree.** `git worktree add` doesn't change your folder. From now on, run every command in the new path (`cd <full path> && …`, or your tool's working-directory option) and read files by their full path there. Then rerun step 1 in it. Go on to step 5 only when `git rev-parse --show-toplevel` prints the new path and `git branch --show-current` prints `<name>`.

**If moving to the new worktree ends your turn** (some apps restart the session there), end with a line they can paste:

> `Continue Dev Mentor preflight for <name> in <full path>, then start the lesson.`

When that arrives, rerun step 1 in the new folder, with the same check, then step 5.

## 5. Confirm, then start

One line, then the lesson:

> `✓ Preflight: branch <name> · <full path> · clean` (or `· 3 uncommitted files`)

From here on, every file link uses this full path (see **File links** in the ground rules).

If they want it in an IDE, open that exact path (`open -a "PyCharm" <path>` on macOS, or the IDE's own command-line tool). Say *"Sent the open request for <path>."* Only say the IDE opened the right project once they confirm it, or you can see it.
