# OpenSpec handoff

Invoke the installed official **`openspec-propose`** skill with the agreed plan. That skill owns artifact creation; don't imitate it here. Note that `openspec-propose` is an assistant skill, not a shell command.

## Before

- Find the installed OpenSpec CLI (or the project-pinned dependency) and check its version. Don't use a package runner that would download it.
- Read the project's OpenSpec config, existing specs, and active changes. If a matching change already exists, ask whether to continue it or create a new one.
- Note the current file state so you can compare it afterwards.

## Hand off

Pass one brief containing: the goal, the scope and what's out of scope, the acceptance criteria, behaviour before and after with success and failure examples, the evidence (files, tests, commit), the decisions and alternatives, the ordered steps, and the open decisions. Leave lesson exercises out of the requirements, and leave new tasks unchecked.

Don't run apply, implement, archive, sync or setup as a side effect.

## After

Read the generated artifacts and run the installed validation command (check `--help` for strict, non-interactive options). Report the skill you invoked, the CLI version, the change name, the validation command and its result. Confirm that production code, baseline specs and unrelated files didn't change.

## If something's missing

If the skill, CLI, config or schema isn't there, say which piece is missing and stop. Don't install, initialise, or hand-write an imitation. Offer to set it up (as a separate request) or produce a portable Markdown spec instead.

References (checked 2026-10-26): [openspec-propose skill](https://github.com/Fission-AI/OpenSpec/blob/main/skills/openspec-propose/SKILL.md) · [supported tools](https://github.com/Fission-AI/OpenSpec/blob/main/docs/supported-tools.md) · [CLI](https://openspec.dev/docs/cli)
