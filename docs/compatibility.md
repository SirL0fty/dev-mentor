# Host compatibility

Checked against the linked documentation on 2026-10-26. The shared delivery format is Agent Skills, installed by the standard skills CLI. [Native plugin installation](plugins.md) is also packaged for Cursor, Claude Code, and Codex. ChatGPT desktop can use the same repository marketplace in Work or Codex; add it on each machine using the [installation guide](../README.md#install-chatgpt). One root `skills/` directory serves every route; execution capabilities come from the current assistant.

| Assistant or editor | Installation target / entry | Status |
| --- | --- | --- |
| Cursor | CLI `--agent cursor`, or native repository import using `.cursor-plugin/marketplace.json`; select/request `mentor` | CLI skills installation and official template validation passed; Cursor UI/plugin loading untested |
| Claude Code | CLI `--agent claude-code`, or native marketplace using `.claude-plugin/marketplace.json`; plugin entry is `/dev-mentor:mentor` | CLI skills installation and strict manifest/catalogue validation passed; native installation and conversation untested |
| Codex | CLI `--agent codex`, or native marketplace using `.agents/plugins/marketplace.json` and root `plugin.json` | CLI skills installation, portable schema validation, and native catalogue discovery passed; native installation and live lesson untested |
| OpenCode | CLI `--agent opencode`, then request the `mentor` skill | Standard skills path; native skill discovery checked with OpenCode 1.19.4 |
| OpenChamber | Choose the active provider's CLI target; `opencode` for an OpenCode-backed session | Provider-dependent; UI untested |
| T3 Code | Choose its active provider, such as `codex`, `claude-code`, or `opencode`, then its skill picker | Provider-dependent; source/docs inspected, UI untested |
| VS Code | Choose the actual assistant, such as `github-copilot` or `codex` | Extension-dependent; UI untested |
| Devin | CLI `--agent devin` for Devin for Terminal; repository skill discovery for other Devin surfaces | Documented discovery; no live Devin check |
| Other skill-capable hosts | Select the host in `npx skills add` | See the current CLI support list; no blanket runtime guarantee |
| File-reading assistants | Read `skills/mentor/SKILL.md`, then the chosen skill's `SKILL.md` | Manual activation; requires accessible files and instruction following |

The [skills CLI agent list](https://github.com/vercel-labs/skills/blob/main/docs/agents.md) owns target names and installation paths. Use the installed CLI's help when versions differ. Do not install both native plugin and standalone copies in the same host unless you deliberately want duplicate entries. Namespace and skill-picker behaviour differ by host. ChatGPT/Codex supports selecting the whole plugin with `@`; Claude Code uses `/dev-mentor:<skill>`. Display metadata labels individual skills `Dev Mentor: <workflow>` in hosts that read `agents/openai.yaml`; other hosts may still show the short skill names. Live rendering of the new labels and icons remains untested.

Native metadata checks used Claude Code 2.1.310, Codex CLI 0.164.0-alpha.11.1, the published Agent Plugins 1.0.0 JSON Schema, and Cursor's official template validator. Codex discovery used a command-scoped local marketplace configuration without changing personal settings. Cursor's validator reports optional missing hooks/MCP files; this skills-only plugin intentionally has neither. These checks do not establish successful GUI installation or vendor-directory approval.

## Runtime capabilities

Normal teaching needs the selected model and access to relevant evidence. The ten workflows share the same session and export rules. Each skill is a self-contained `SKILL.md`, with its own `references/` folder only where it needs longer detail. Install the whole pack so `mentor` can route to the other skills; if one is missing, mentor says so instead of imitating it.

Three-model debate additionally needs independent sessions, three selectable distinct models, routing/identity evidence, and a way to exchange follow-up rounds. Some hosts restrict subagents to one provider or inherit the parent model. The pack never silently substitutes a model to claim diversity. Use an already configured multi-model tool when authorised, or move the brief to a capable host. User-run sessions with attributable results are a manual option; simulated perspectives do not satisfy the requirement.

These instructions guide behaviour. Read-only enforcement, process cancellation, model routing, and tool availability remain host responsibilities. Consensus is not proof of correctness or authorisation to implement. Full debate execution has not been tested with three live models here.

Notion exports need the user's own integration. Portable Markdown specifications need no additional tool. OpenSpec conversion invokes the official `openspec-propose` skill and needs its CLI, configured project/store, and installed skill or equivalent official command. These are optional dependencies, not bundled or silently installed by Dev Mentor. Matt Pocock and pstack options adapt document conventions without claiming native import compatibility or running their publishing/implementation workflows. None is required for basic mentoring. Installation on one machine does not publish files to a cloud or remote workspace. OS-independent file formats do not establish tested Windows/Linux behaviour; packaging checks ran on macOS.

The expanded spec formats and official propose handoff have passed packaging/reference checks and source inspection. They have not been exercised end to end in a separate assistant session. The earlier OpenSpec CLI/template smoke check does not establish that the new skill handoff executes correctly in every host.

PR watch mode belongs to `mentor`; `review` teaches the developer how to review a colleague's PR. A background watch needs a host scheduler that can access the selected repository and retain event state. Without one, the workflow can run a bounded session watch or provide a single status check, stating the limit. The package does not install a daemon or schedule a watch merely by being installed. Comments and CI must both be readable; a CI-only watcher does not cover review comments. Live scheduled monitoring and notification delivery have not been tested here.

## Official host references

- [Cursor plugins](https://cursor.com/docs/plugins), [Claude plugin manifests](https://code.claude.com/docs/en/plugins/manifest-reference), and [OpenAI plugin packaging](https://developers.openai.com/plugins/build/plugins) describe the native formats and marketplaces. The root manifest uses the [Agent Plugins standard](https://agent-plugins.org/); Claude and Cursor manifests retain their host-specific layouts. Native plugin support is not identical across all coding tools.
- [Codex skills](https://learn.chatgpt.com/docs/build-skills) and [OpenCode skills](https://opencode.ai/docs/skills/) describe their loaders.
- [OpenChamber providers](https://docs.openchamber.dev/providers/) and [T3 Code composer](https://github.com/pingdotgg/t3code/blob/main/docs/user/composer.md) describe provider selection and skill entry points.
- [VS Code skills](https://code.visualstudio.com/docs/agent-customization/agent-skills) apply to compatible chat assistants, not every VS Code extension.
- [Devin skills](https://docs.devin.ai/product-guides/skills) document repository skill discovery; the skills CLI's `devin` target is specifically Devin for Terminal.
