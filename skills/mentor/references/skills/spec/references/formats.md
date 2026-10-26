# Requested specification formats

These are document adaptations of inspected upstream conventions, not bundled copies or claims of native compatibility. A style choice changes the artifact's structure; it does not authorise upstream publishing, model delegation, code generation, or implementation. Keep the portable spec's evidence, unresolved decisions, and verification distinctions.

## Matt Pocock inspired

Organise the feature around the user's problem, intended solution, actor-oriented stories, settled implementation decisions, testing decisions, scope exclusions, and outstanding notes. Ground test boundaries in the existing codebase, favouring observable behaviour and existing test seams. Use stable module/contract descriptions for decisions; keep revision-specific code links in the evidence section. Do not pad the document with invented stories or reopen settled design questions.

The inspected official `to-spec` workflow also publishes to an issue tracker. A request for this **style** in Dev Mentor saves a document through the shared export mechanism; it does not invoke that publishing workflow, create an issue, or mark work ready for an agent. If the user requests a native workflow handoff, inspect its current input and output requirements and establish any publication scope separately.

Source: [Matt Pocock's to-spec skill](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/to-spec/SKILL.md), inspected 2026-10-26.

## pstack inspired

Lead with the consumer's usage and a realistic call or interaction, then describe the data shape, interfaces, state transitions, and invariants that support it. Capture design rationale, considered alternatives, accepted trade-offs, unanswered questions, and small implementation steps with verifiable outcomes. Preserve the distinction between a proposed invariant and one actually enforced by existing code.

Use these as a design-focused view of the same feature requirements. The inspected pstack sources provide design and feature workflows, not a universal spec-import schema. Do not invent a `pstack spec` command, claim schema validation, or invoke `architect`/`poteto-mode` just to format a document: their workflows can proceed into implementation. Document code sketches inline when useful without writing production scaffolding.

Sources: [Architect rationale](https://github.com/cursor/plugins/blob/99b609a72323b70204eab407c622f436e858e112/pstack/skills/architect/references/rationale-template.md) and [feature playbook](https://github.com/cursor/plugins/blob/99b609a72323b70204eab407c622f436e858e112/pstack/skills/poteto-mode/playbooks/feature.md), inspected 2026-10-26.

For another requested format, inspect its project template or official input contract and adapt this same evidence. If no format can be established, label the result portable Markdown rather than inventing compatibility.
