# Start with Dev Mentor

Dev Mentor is a pack of ten skills for the coding assistant you already use. Your current model teaches and coordinates any supported subagents. There is no separate Dev Mentor application or agent to start.

## Install the pack

From a terminal in your working project, run:

```sh
npx skills add SirL0fty/dev-mentor
```

Choose the skills and assistants in the CLI; installation is project-scoped by default. It downloads the skills from the [public repository](https://github.com/SirL0fty/dev-mentor). Node.js 22.20+ with npm is required. Python is not required. The CLI may download its npm package on first use. [Official installation reference](https://github.com/vercel-labs/skills/blob/main/docs/commands.md).

For example, to select all ten skills and the three named hosts explicitly:

```sh
npx skills add SirL0fty/dev-mentor --skill '*' --agent cursor claude-code codex --copy
```

Review the proposed destinations and existing-name conflicts before confirming. These ten names are intentionally simple; an existing `review` or `mentor` skill may already occupy a destination. Do not overwrite an unrelated skill. Choose a project without that conflict or use the native plugin route with its namespaced invocation where supported.

Refresh/restart the assistant session if needed. Select `mentor` from its skill picker, or say:

> Use mentor to help me understand and implement this ticket. Explain the existing behaviour and guide me through the first checkpoint.

Expect one small card at a time. The mentor shows how to find a starting point and trace the runtime, then gradually lets you make those decisions with hints. After you edit manually, say “done” or “next”; it checks the actual change and gives focused feedback before moving on. Ask “why”, “example”, or “smaller” without losing your place. You can request the full explanation whenever you want.

For a tour, say “Use walkthrough to walk me through this PR.” For a debate, say “Use devils-advocate to stress-test this plan with three different models.” Ordinary teaching uses your current model. Debate requires three selectable models and only completes after all three agree on the same decision and reasons. Missing access or unresolved disagreement remains explicit.

## Other ways to use the same files

GitHub hosting is sufficient for the install command above. A [Skills Pack](https://www.skills.sh/docs/packs) is an optional alternate distribution; no Skills Pack ID has been created for this release. If you receive a ZIP instead, extract it and use `npx skills add /path/to/dev-mentor-pack`.

For Claude Code, a repository clone or extracted pack is also a plugin. Load that folder for a local session with:

```sh
claude --plugin-dir /path/to/dev-mentor-pack
```

Then invoke `/dev-mentor:mentor`. Cursor's plugin metadata points to the same skills; use its supported plugin import/distribution flow when available, or the `npx` route above. Installing skills does not also register a native plugin. See [host compatibility](docs/compatibility.md).

With a file-reading assistant that has no skills loader, ask it to read `skills/mentor/SKILL.md` in a repository clone or extracted folder and follow the relevant links. It needs access to the folder and project evidence. This fallback does not add tools or model access.

Install in the workspace used by the assistant, including remote/container workspaces. T3 Code uses its selected provider's skills; OpenChamber uses its active provider. For VS Code, select the coding assistant extension you use, such as GitHub Copilot or Codex. See the compatibility guide for provider-specific details.

## Update, remove, and resume

Use `npx skills update` to fetch updates from the repository. For a ZIP/local-folder release, extract the newer release and rerun `npx skills add` with its new path. Use `npx skills list` to inspect installation and `npx skills remove` to choose only the Dev Mentor skills you want removed. [CLI documentation](https://www.skills.sh/docs/cli).

Request saving when you want portable lesson state. The default project locations `.dev-mentor/preferences.md` and `.dev-mentor/state/` are separate from installed skills. A new chat can read a saved checkpoint and recheck the code revision; automatic memory across hosts is not assumed. Your assistant's usual permissions, usage costs, and connected services still apply. No notifications, invitations, or messages are sent by installing or exporting the skills.
