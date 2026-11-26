# Review lenses

A lens is one question to ask of a diff. Pick **at most two** whose cues appear in the diff, so the review goes deep on what matters instead of skimming everything. Name the lens and the changed line that made you pick it.

| Lens | Spot it in the diff | The question | One way to check |
| --- | --- | --- | --- |
| **Logging and tracing** | `print`, a hand-built log string, a new handler or job | If this fails halfway, could someone tell which step failed and what happens next, without seeing secrets? | Look for the project's existing logger; check the log has an ID that survives a retry, the step and the outcome, and no secrets or raw payloads. |
| **Retries and rollback** | Two or more writes, a retry loop, a timeout, a broad `try` | If the second operation fails, what did the first already change? Is it safe to run again? | Write `before → after step 1 → step 2 fails`. Make the second call fail in a test and assert what remains, not just that an error was raised. |
| **Inputs and configuration** | A raw event, request body, environment variable or parsed file | What enters from outside, and where is it checked before it's used? | A test with a missing or malformed value; configuration checked once at startup rather than deep in a request. |
| **Permissions and exposure** | A policy, role, wildcard, public flag, CORS or auth change | Who can now see or change what, and is that the least they need? | Name the principal, the action and the resource. A wildcard needs a written reason. |
| **Helpers and ownership** | A new helper, export, wrapper that forwards calls, or dependency | Does this live with the code that owns the decision, and does it earn its place? | Find the nearest existing example. Can you follow the main path without opening several tiny helpers? |
| **Test evidence** | New or changed tests, mocks, sleeps, near-identical cases | Would this test fail if the behaviour broke, and keep passing if only the internals changed? | In a safe local run, break the behaviour on purpose, see the test fail for the right reason, then undo it. |

## The person's own standards

If the profile has a `standards:` line (a folder such as an Obsidian vault, or a link), search it for the lens's cue words and the rule IDs it uses, e.g. `try`, `print`, `wildcard`, `LAM013`. For each matching rule, cite:

- its ID and whether it's **MUST** (binding) or **SHOULD** (a strong default that needs a reason to deviate);
- its plain-English line, quoted;
- a link to the rule note, and to the official source if the note links one.

The repository's own written standards (`AGENTS.md`, `CONTRIBUTING`, `docs/standards/`, ADRs, lint config) win when they disagree with the notes: the notes are an index, the repo is the source of truth. Say when they disagree.

If there's no `standards:` line and the person mentions their standards, offer once to add it to `~/.dev-mentor/profile.md`, e.g. `standards: ~/Notes/Coding Standards`.

## In `coach`: before they ask for review

When a feature is done, turn the matching lenses into a short self-review checklist, scaled to the change: a quick scan for a small diff, more time only where a mistake would be hard to undo or would touch users, data or access. Each item names the line in their diff it applies to. They tick it off; it's not a list of new work.
