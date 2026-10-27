# Host compatibility

Dev Mentor is plain Agent Skills, so it runs in any assistant that loads skills ([full list](https://github.com/vercel-labs/skills/blob/main/docs/agents.md)). Your assistant supplies the model, tools and permissions; installing Dev Mentor adds none of those.

| Assistant | Install |
| --- | --- |
| Claude Code | Plugin, or `npx skills add … --agent claude-code` |
| Cursor | Customize → From GitHub Repository, or `--agent cursor` |
| Codex / ChatGPT desktop | Plugin marketplace, or `--agent codex` |
| OpenCode, VS Code, T3 Code, OpenChamber, Devin and others | `npx skills add` and pick the assistant |

Install all the skills: every skill loads `mentor-style` for your settings, and `mentor` hands off to the others. Don't install both the plugin and the `npx` copy in the same assistant, or you'll see every skill twice. See [installation](plugins.md) for step-by-step setup.

To see whether it's working in your assistant, try the **It's working if** lists in the [skill guides](skills/README.md).

## Needs extra setup

| Feature | Needs |
| --- | --- |
| Clickable setup questions | A multiple-choice picker in your assistant. Without one, you get a single text card. |
| Three-model debate | Three distinct models your assistant can select, each in its own session. Without them you get the quick single-model challenge. |
| PR watch | A scheduler in your assistant, plus read access to the PR's comments and CI. Without one, mentor watches only while the session is open, or does a single check. |
| OpenSpec specs | The OpenSpec CLI, a configured project, and the official `openspec-propose` skill. Without them, you get a Markdown spec instead. |
| Notion / Obsidian export | Notion: a Notion connector or MCP server already set up in your assistant. Obsidian: just a vault folder. Without either, it saves Markdown. |

Everything else needs only a model and access to your code.

These skills are instructions, not enforcement: read-only limits, model routing and tool access are up to your assistant.
