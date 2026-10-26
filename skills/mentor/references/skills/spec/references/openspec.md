# OpenSpec handoff

When OpenSpec is selected, **invoke the official `openspec-propose` skill** with the existing plan. This reference owns Dev Mentor's handoff and verification, not OpenSpec's artifact-generation procedure. Do not vendor a copy of that skill or substitute a handwritten proposal workflow.

## Discover the installed workflow

Read project instructions and snapshot the current file state and lesson position. Locate the already installed OpenSpec executable or project-pinned dependency, its version/help, and the official skill or generated propose command available to this host. Do not use a package runner that implicitly downloads a missing CLI.

Inspect the project's configuration, existing specifications, active changes, selected schema, and any intended specification store using read-only commands supported by that installed version. Establish the actual planning destination and retain its scope throughout the handoff. Do not assume a fixed artifact layout or create an `openspec/` root during discovery. Preserve existing changes and user edits; if there is a matching active change, give that identity to the official workflow and resolve continue-versus-new ambiguity before creating a duplicate.

## Invoke, carrying the current plan

Use the host's skill invocation facility for `openspec-propose`. If the host loads skills by reading their files, read and execute the **installed official skill's instructions** as the selected workflow. An installed official propose command is also a valid delivery of that workflow; discover its actual registered invocation rather than assuming slash syntax is portable. `openspec-propose` is an assistant skill, not a shell command named `openspec propose`.

Pass one handoff containing:

- The agreed goal, scope/exclusions, acceptance criteria, and existing/proposed behaviour, with realistic success and failure examples.
- Source-plan location/revision, inspected code and tests, observed results, stale evidence, assumptions, and unresolved decisions. Reuse discovery while allowing the official skill to refresh what it needs.
- Technical decisions, alternatives and rationale, ordered product implementation/verification steps, and any selected change identity, planning root/store, or schema.
- The planning-only boundary: exclude exercises and learner progress from requirements; leave new implementation tasks unchecked; preserve unrelated files and baseline specifications.

The official skill and installed project schema determine the artifact names, templates, dependencies, and generation steps. Let it map intent to the proposal role, behaviour to requirements/scenarios, technical choices to design, and implementation steps to tasks in that schema. Preserve unresolved decisions; if a material choice blocks generation, surface it instead of selecting behaviour merely to complete the artifacts.

Do not run apply, implement, archive, sync, or setup workflows as a side effect. If the official skill prompts for a material decision, retain the handoff and lesson position while waiting; do not begin a second planning session.

## Verify after the handoff

Read back the artifacts and run the installed change-validation command with supported strict/non-interactive options, checking its help first. Record the actual skill/command invoked, CLI version, change/schema, exact validation command, exit status, and diagnostic summary. A skill's final status or artifact-existence check is not a substitute for validation. If validation is unavailable or fails, report that; preserve the useful artifacts without claiming success.

Compare the final file state with the initial snapshot, accounting for pre-existing edits. Check that production code, baseline specs, unrelated changes, and existing task completion states were not changed. Newly described implementation work stays unchecked. Link the resulting requirements/scenarios from lesson and review context, preserving the current card and pending manual action. A previously exported Markdown spec becomes a labelled source snapshot pointing at the canonical OpenSpec change, not a competing requirements document.

## Missing or incompatible setup

If the official propose skill/command, CLI, project configuration, or usable schema is missing, name the missing piece and stop the OpenSpec handoff. Do not silently emulate `propose`, substitute an older workflow, initialise a project, install/upgrade tooling, or claim the official skill ran.

Offer the relevant next choices: enable the official propose workflow using the installed version's setup guidance; select an existing configured project/store; or create a portable Markdown draft outside active OpenSpec changes. Wait for the user's choice when it changes their requested OpenSpec output. Setup requires a separate request. If the host cannot invoke or load the installed workflow, provide the exact available invocation and a copy-ready handoff; report it as prepared, not executed.

## Official references

Checked 2026-10-26. Prefer the installed skill and version-specific help over newer upstream instructions.

- [Official openspec-propose skill](https://github.com/Fission-AI/OpenSpec/blob/main/skills/openspec-propose/SKILL.md)
- [Supported tools and invocation forms](https://github.com/Fission-AI/OpenSpec/blob/main/docs/supported-tools.md)
- [CLI reference](https://openspec.dev/docs/cli)
- [Schema customization](https://openspec.dev/docs/customize)
