---
name: spec
description: Turn an agreed feature plan into a portable Markdown spec, a Matt Pocock or pstack inspired format, or an OpenSpec change through the official openspec-propose skill. Writes the spec only; doesn't implement anything. Use for "turn this plan into a spec". (Dev Mentor)
---

# Spec

Reuse the current plan, decisions and evidence; don't interview them again about settled points. If agreement is unclear, label the result **draft** and list the open decisions.

## Pick the format

Use what they ask for, then the project's existing spec convention, then portable Markdown. Having another tool installed doesn't select its format.

| Format | How |
| --- | --- |
| Portable Markdown (default) | The structure below. Save to `docs/specs/<feature>.md` unless told otherwise. |
| Matt Pocock or pstack style | Read [formats.md](references/formats.md). This changes the document's structure only; it doesn't run their publishing workflows. |
| OpenSpec | Read [openspec.md](references/openspec.md) and hand off to the installed official `openspec-propose` skill. |

## Portable spec structure

- **Status and evidence:** draft or agreed, the source plan, the commit inspected, and the date.
- **Problem and outcome:** who needs it and why, goals, what's out of scope, acceptance criteria.
- **Requirements:** observable behaviour with IDs (`REQ-1`…), each with an example scenario and its failure cases.
- **Design:** the runtime path, components and contracts touched, the decisions, the alternatives and why they lost.
- **Steps and checks:** ordered steps, each linked to the requirements it covers, with how to verify it. Keep checks already run separate from planned ones.
- **Open decisions:** assumptions, disagreements and blockers.

Leave lesson exercises and learner progress out; the spec describes the product.

## Finish

Read the file back. Report where it is, the format, the commit it's based on, what you checked (content and links, not product behaviour), and any open decisions. Writing a spec doesn't create issues, notify anyone, or implement tasks. Return to the same lesson step afterwards.

## Style and ground rules

Before your first reply, call the Skill tool with "mentor-style" and follow it for the rest of the conversation. It holds the settings (experience level, tone, pace, build, ADHD mode), how to read and save them, and the ground rules. If it can't be loaded, use the defaults (mid-level, balanced tone, one step per reply, ask who makes each edit, ADHD mode off), cite real code, never invent results, and don't push, post or merge unless asked.
