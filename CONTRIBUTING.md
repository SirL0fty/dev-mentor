# Contributing

Thanks for helping. The skills are just Markdown; the only tooling is a check script and changesets for releases.

## Layout

```text
skills/<name>/SKILL.md          one skill, self-contained
skills/<name>/references/       only for long, rarely needed detail
skills/<name>/agents/openai.yaml  display name for Codex / ChatGPT
evals/README.md                 behaviour checks
scripts/check.mjs               repo checks (CI runs this)
scripts/sync-version.mjs        copies the version into the plugin manifests
.changeset/                     pending release notes
```

Every skill ends with the same **Style settings** and **Ground rules** sections. If you change them, change them in all ten skills (`mentor` has a slightly longer version).

## Writing style for skills

- Keep it short. If a rule doesn't change behaviour, cut it.
- Say what to do, not only what not to do.
- Show an example rather than describing one.
- Each rule lives in one place.

## Before opening a PR

1. Run the [behaviour checks](evals/README.md) that touch what you changed.
2. Run `npm install` once, then `npm run check`. It fails on a broken skill header (for example a `: ` in a description), mismatched versions, broken links, or a skill missing from the README. CI runs the same check on every push.
3. Run `npx changeset` and describe the change in one line. Don't edit version numbers or `CHANGELOG.md` by hand: the Release workflow does both when its "chore: version" PR is merged.
