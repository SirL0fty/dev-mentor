# OpenSpec integration

This is a version-adaptive conversion workflow. The installed tool and project schema determine filenames, artifact roles, and order. The standard proposal/specs/design/tasks layout is an example, not a required structure.

## Discover before generating

Read project instructions, source-plan evidence, current working-tree changes, OpenSpec configuration, existing specifications, active changes, and any local workflow instructions. Resolve the actual OpenSpec root; a project may reference a separate specification store. Do not assume the nearest `openspec/` holds the specifications or change its configuration to suit this workflow. If a resolved destination is outside the selected project scope, establish that it is the intended destination before writing.

Locate the already installed executable or project-pinned dependency. Inspect its version and help; do not use a package runner that implicitly downloads missing packages. For versions supporting them, useful probes include:

```sh
openspec --version
openspec --help
openspec list --help
openspec schemas --help
openspec status --help
openspec instructions --help
openspec templates --help
openspec validate --help
```

Use supported read-only commands to list specs/changes and inspect the resolved schema, configuration context/rules, templates, and artifact status. Existing changes may carry their own schema override; preserve it. Reuse an unambiguously matching active change when requested and preserve existing edits. Ask about competing matches rather than creating a duplicate.

## Convert using the configured workflow

Record the agreed plan's evidence version, selected change identity, schema, templates, and initial file state. Use the official creation command if supported and a new change is required; inspect its help before invoking it. Read artifact instructions/templates and dependencies before writing each artifact, then refresh status as necessary. A typical version may support `new change`, `status --change`, and `instructions <artifact> --change`; discover exact flags locally. Do not run apply, archive, schema fork, update, or init as part of conversion.

Map semantics to the schema's actual artifact roles:

| Plan content | OpenSpec content |
| --- | --- |
| Goal, motivation, scope, impact | Proposal or equivalent intent artifact |
| Acceptance criteria and observable behaviour | Requirements and concrete success/failure scenarios |
| Technical choices, alternatives, rationale, constraints | Design or equivalent decision artifact |
| Ordered product implementation and verification steps | Task artifact with unchecked new tasks |
| Unknowns and unresolved disagreements | Open decisions in the supported location, with affected requirements/tasks identified |

Requirements describe product behaviour. A lesson checkpoint such as “explain the parser” is not an implementation task; “add validation and verify invalid input” may be. Keep exercise completion and learner progress in lesson state. Link existing requirements for unchanged behaviour. Follow the installed format for added/modified/removed requirements, including required full replacement text where applicable; do not mutate baseline specs to simulate a completed/archived change.

For unresolved behaviour, preserve the question and its impact. Produce settled artifacts where possible and mark dependent work blocked/draft. If the schema cannot validate a partial artifact, report that honestly rather than inventing a decision. Existing completed task states are evidence to inspect, not states to reset or infer from generated documents. Never tick new implementation tasks simply because their descriptions exist.

## Validate and report

Discover and run the installed change-validation command with supported strict/non-interactive options where appropriate. Capture executable version, command, exit status, and diagnostic summary. Inspect artifact status separately: artifact presence is not implementation completion. Read back the generated files and compare the final file state with the initial one. Account for pre-existing changes and verify that production code, baseline specs, unrelated changes, and task completion states were not changed by this conversion.

Report generated/updated paths, schema, source-plan/evidence version, validation actually run, results and gaps, and open decisions. A passing structural check does not prove product correctness or approval. Add requirement/scenario links to lesson/review context without advancing its position; when those documents are saved, label any summaries as snapshots of canonical OpenSpec requirements.

## Missing or incompatible setup

If no executable, project setup, usable schema, or supported command is available, state exactly what is missing. Explain the options: use an existing project installation/configuration, separately request setup with official tooling, or continue with a labelled Markdown draft. Offer a copy-ready draft; save it outside OpenSpec's active changes only if requested. Do not install, initialise, upgrade, create global configuration, or claim OpenSpec validation happened. Inspect available project templates even if the CLI is unavailable, and report template-only checks distinctly.

## Official references

Consult documentation matching the installed version when local help or instructions are insufficient. These sources were checked on 2026-10-26; current upstream documentation may describe features newer than the installed CLI.

- [OpenSpec CLI reference](https://openspec.dev/docs/cli)
- [OpenSpec customization overview](https://openspec.dev/docs/customize)
- [Official source and version history](https://github.com/Fission-AI/OpenSpec)
