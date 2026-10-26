# Investigate code and changes

Read project instructions and inspect the repository's current state before drawing conclusions. Use the user's named feature, PR, commit range, files, or working-tree selection. Establish scope once; retain it throughout questions and exports.

## Changeset evidence

For a diff-based task, record the intended target and comparison semantics. A PR commonly uses its reported base and head with their merge-base; a commit comparison or working-tree request may mean something else. Discover the default branch from repository metadata when needed; do not assume `main` or fetch arbitrary history merely to choose a base. Resolve refs to commit IDs and state the selected comparison. Ask when competing plausible bases materially change the tour.

Useful read-only Git probes, adapted to the requested scope:

```sh
git status --short
git rev-parse HEAD
git symbolic-ref --quiet refs/remotes/origin/HEAD
git merge-base <base-ref> <head-ref>
git diff --name-status <resolved-base> <resolved-head>
git diff --find-renames <resolved-base> <resolved-head> -- <scoped-paths>
git show <resolved-base>:<original-path>
git show <resolved-head>:<current-path>
```

For working-tree scope distinguish staged, unstaged, and untracked files. Record their evidence separately from committed changes. Do not fold unrelated local changes into a PR tour; read the target revision rather than assuming checked-out files match it. If one file mixes relevant and unrelated changes, scope at hunk/behaviour level and name the excluded change. Note renames, generated files, mechanical changes, and exclusions explicitly. Missing base/history is a limitation: do not fabricate the original behaviour from the new code.

## Trace and corroborate

For a new feature, begin from observable behaviour rather than guessing the file to edit. Use the ticket's vocabulary, route/event/command, UI text, or a nearby test to locate a concrete entry point. Follow actual callers and data flow to the responsibility involved. Distinguish the runtime path from the eventual edit sequence: the first change might establish a contract or failing test before its caller can use it. Capture the evidence behind that choice so teaching can show how it was found, not just announce the destination.

Read actual hunks, original and new implementations, surrounding control flow, callers/callees, data contracts, and relevant tests. Follow dependencies only as far as the scoped behaviour requires. Mark unchanged dependencies as context, not part of the changeset. Relate inputs, transformations, state, external boundaries, errors, and outputs to source locations.

Trace at least one realistic input through the relevant runtime path and its observable outcome. Include asynchronous handoffs or service boundaries when they affect the behaviour; do not draw an uninspected path as established fact. Keep a lightweight set of source anchors for entry, affected responsibility, and verification so a developer can retrace the route independently. Broad exploration is preparation, not a requirement to print every discovery.

Use tests and fixtures for realistic examples, including the pre-change path when available. Separate an inspected assertion from a passing test run and separate both from untested runtime behaviour. Run focused checks when appropriate to the task and their side effects; read-only tours do not authorise commands that alter tracked files, contact live services, install dependencies, or update snapshots. Report what was read, run, failed, or could not be verified.

For each important claim, identify supporting code or evidence and any limits. A comment may express intent without enforcing it; types may not validate external input at runtime. Commit messages, tickets, and design notes can support a stated rationale. Otherwise label the apparent reason as an inference and retain unknown historical intent.

For repository-free learning, use the same evidence distinctions with authoritative documentation and worked examples rather than inventing code context.
