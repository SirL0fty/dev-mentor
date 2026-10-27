# Other spec formats

These change the document's structure only. They are adaptations of each tool's conventions, not native imports, and they don't run that tool's publishing or implementation workflows. Keep the portable spec's evidence, open decisions, and the split between checks run and checks planned.

## Matt Pocock inspired

Organise around: the user's problem, the intended solution, user stories, settled implementation decisions, testing decisions (favour observable behaviour and the project's existing test seams), what's out of scope, and open notes. Don't pad it with invented stories.

His official `to-spec` workflow also publishes to an issue tracker. Asking for this *style* only saves a document; it doesn't create issues.

Source: [mattpocock/skills to-spec](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/to-spec/SKILL.md), inspected 2026-10-26.

## pstack inspired

Lead with the consumer's usage, using a realistic call or interaction. Then cover the data shapes, interfaces, state transitions and invariants; the rationale and alternatives; open questions; and small implementation steps with checkable outcomes. Keep a proposed invariant separate from one the code already enforces. There's no `pstack spec` command or schema; don't invent one.

Sources: [architect rationale template](https://github.com/cursor/plugins/blob/99b609a72323b70204eab407c622f436e858e112/pstack/skills/architect/references/rationale-template.md), [feature playbook](https://github.com/cursor/plugins/blob/99b609a72323b70204eab407c622f436e858e112/pstack/skills/poteto-mode/playbooks/feature.md), inspected 2026-10-26.

## Anything else

Look at the project's template or the tool's documented input and adapt to it. If you can't establish the format, deliver portable Markdown and say so.
