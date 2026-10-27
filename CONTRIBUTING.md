# Contributing

Thanks for helping. Dev Mentor is just Markdown, so no build step is needed.

## Layout

```text
skills/<name>/SKILL.md          one skill, self-contained
skills/<name>/references/       only for long, rarely needed detail
skills/<name>/agents/openai.yaml  display name for Codex / ChatGPT
evals/README.md                 behaviour checks
```

Every skill ends with the same **Style settings** and **Ground rules** sections. If you change them, change them in all ten skills (`mentor` has a slightly longer version).

## Writing style for skills

- Keep it short. If a rule doesn't change behaviour, cut it.
- Say what to do, not only what not to do.
- Show an example rather than describing one.
- Each rule lives in one place.

## Before opening a PR

1. Run the [behaviour checks](evals/README.md) that touch what you changed.
2. Keep each skill's `description:` free of `: ` (colon then space). It breaks the YAML header and the skill fails to install or update.
3. If you change the version, update it in `plugin.json`, `.claude-plugin/plugin.json` and `.cursor-plugin/plugin.json`.
4. Add a line to [CHANGELOG.md](CHANGELOG.md).
