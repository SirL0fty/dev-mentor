# Contributing

Thanks for helping. The rules for changing skills are in [AGENTS.md](AGENTS.md), which AI assistants read automatically. The skills are just Markdown; the only tooling is a check script and changesets for releases, run with [Bun](https://bun.sh).

## Layout

```text
skills/<name>/SKILL.md          one skill, self-contained
skills/<name>/references/       only for long, rarely needed detail
skills/<name>/agents/openai.yaml  display name for Codex / ChatGPT
docs/skills/<name>.md           guide per skill, ending in "It's working if"
scripts/check.mjs               repo checks (CI runs this)
scripts/sync-version.mjs        copies the version into the plugin manifests
scripts/link-skills.sh          live-test your checkout in your assistant
.changeset/                     pending release notes
```

Settings and ground rules live only in `skills/mentor-style/SKILL.md`. Every other skill ends with a short **Style and ground rules** section that calls the Skill tool with "mentor-style". Change the rules there, never by copying them into another skill.

## Writing style for skills

- Keep it short. If a rule doesn't change behaviour, cut it.
- Say what to do, not only what not to do.
- Show an example rather than describing one.
- Each rule lives in one place.

## Testing your changes live

```bash
scripts/link-skills.sh
```

This symlinks every skill in your checkout into `~/.agents/skills` and `~/.claude/skills`, backing up any installed copies. Edits are live in your next assistant session, with no reinstall. When you're done:

```bash
scripts/link-skills.sh --unlink
```

That removes the links and restores the installed copies. Don't run `npx skills update` while linked: it would write through the links into your checkout.

## Before opening a PR

1. Try the **It's working if** items in the [skill guide](docs/skills/README.md) for what you changed, in a fresh session. If you change how a skill behaves, update its guide too.
2. Run `bun install` once, then `bun run check`. It fails on a broken skill header (for example a `: ` in a description), mismatched versions, broken links, or a skill missing from the README. CI runs the same check on every push.
3. Run `bunx changeset` and describe the change in one line. Don't edit version numbers or `CHANGELOG.md` by hand: when your PR merges, the Release workflow bumps the version, updates the changelog, tags it and creates the GitHub release.
