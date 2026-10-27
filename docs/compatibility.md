# Host compatibility

Dev Mentor is plain Agent Skills, so it runs in any assistant that loads skills ([full list](https://github.com/vercel-labs/skills/blob/main/docs/agents.md)). Your assistant supplies the model, tools and permissions; installing Dev Mentor adds none of those.

| Assistant | Install | Tested |
| --- | --- | --- |
| Claude Code | Plugin, or `npx skills add … --agent claude-code` | Manifest validated (v0.8.3) |
| Cursor | Customize → From GitHub Repository, or `--agent cursor` | Manifest validated (v0.8.3) |
| Codex / ChatGPT desktop | Plugin marketplace, or `--agent codex` | Plugin listing appears in Codex (v0.8.3) |
| OpenCode | `--agent opencode` | Skills load (v0.8.3) |
| VS Code, T3 Code, OpenChamber, Devin, others | `npx skills add` and pick the assistant | Not tested |

**v0.9.0 has not been re-tested on any host yet.** The [behaviour checks](../evals/README.md) are how to test it. Packaging checks ran on macOS only.

Install all ten skills so `mentor` can hand off to the others; if one is missing, mentor says so. Don't install both the plugin and the `npx` copy in the same assistant, or you'll see every skill twice. See [installation](plugins.md) for step-by-step setup.

## Needs extra setup

| Feature | Needs |
| --- | --- |
| Three-model debate | Three distinct models your assistant can select, each in its own session. Without them you get the quick single-model challenge. |
| PR watch | A scheduler in your assistant, plus read access to the PR's comments and CI. Without one, mentor watches only while the session is open, or does a single check. |
| OpenSpec specs | The OpenSpec CLI, a configured project, and the official `openspec-propose` skill. Without them, you get a Markdown spec instead. |
| Notion / Obsidian export | Your own connected integration or vault. Without one, it saves Markdown in the project. |

Everything else needs only a model and access to your code.

These skills are instructions, not enforcement: read-only limits, model routing and tool access are up to your assistant.
