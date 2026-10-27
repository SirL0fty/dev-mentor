# What we learned from pstack

Inspected the upstream Cursor plugin on 2026-10-26, rather than assuming a community port is the original implementation.

Pstack's `poteto-mode` provides an entry workflow that selects focused skills. Its plugin manifest points at skill and agent directories. This supports keeping reusable workflow content separate from the host's packaging. [Entry skill](https://github.com/cursor/plugins/blob/main/pstack/skills/poteto-mode/SKILL.md), [plugin manifest](https://github.com/cursor/plugins/blob/main/pstack/.cursor-plugin/plugin.json).

Its `interrogate` workflow gives independent reviewers common evidence, then has a lead evaluate findings. It defaults to two models and permits substitutions when a requested model fails. It does not require unanimous ratification of one decision. Dev Mentor's requested three-model debate therefore needs a different completion rule. [Interrogate](https://github.com/cursor/plugins/blob/main/pstack/skills/interrogate/SKILL.md).

Pstack includes a Claude Code adapter for tool names, invocation, models, and unsupported host features. In particular, unsupported non-Claude model selections can inherit the session model. That is useful portability guidance, but would invalidate Dev Mentor's promise of three distinct models if copied blindly. [Claude adapter](https://github.com/cursor/plugins/blob/main/pstack/docs/harness/claude-code.md).

## Dev Mentor's design

Maintain ten plain Agent Skills with one set of teaching, session, and export references. `mentor` keeps the current conversational role and routes to the appropriate workflow. Native Cursor/Claude manifests reference the same content; a Skills Pack distributes it to the other supported hosts. No dedicated named agent or custom installer is necessary.

Adapt to available capabilities rather than copying Cursor tool names into every workflow. When native delegation supports three selected models, the current assistant coordinates them. Otherwise an authorised existing integration or user-run sessions can supply independent reviews. Missing capabilities remain visible instead of being simulated.

Devil's advocate first collects three independent assessments, then exchanges objections and evidence, revises a candidate decision, and requests three explicit approvals of its exact version and rationale. Disagreement is retained until resolved. A timeout or execution limit leaves the debate incomplete, with a resumable record. A ratified decision remains a recommendation until the developer authorises implementation.

This package uses its own instruction text and does not vendor pstack's skills. The comparison describes inspected upstream behaviour, not an endorsement or a claim that every host supports identical capabilities.

## PR monitoring

Pstack's [Babysit playbook](https://github.com/cursor/plugins/blob/main/pstack/skills/poteto-mode/playbooks/babysit.md) uses a GitHub-specific `watch-pr` tool, checks review threads and CI, and distinguishes a single status check from a continuing loop. Its broader workflow can drive fixes toward merge readiness; merging is a separate workflow.

Dev Mentor keeps a separate watch mode under `mentor`, using available host scheduling and repository tools. It alerts on actionable changes and coaches the developer through their own fixes. `review` instead prepares the developer to understand and review a colleague's PR. No pstack watcher code is bundled, and native background execution is not assumed across hosts.

## Teaching a feature

On 2026-10-27 we revisited pstack's [how](https://github.com/cursor/plugins/blob/main/pstack/skills/how/references/explainer-prompt.md) and [teach](https://github.com/cursor/plugins/blob/main/pstack/skills/teach/SKILL.md) guidance. Their useful ideas include grounding an architectural explanation in the actual flow, showing where the relevant code lives, combining how and why, and keeping evidence limits visible. Dev Mentor adapts those ideas to a learner who writes the code: a short initial ticket/codebase orientation, then an explanation of the existing code and a small before/after comparison before an edit. It does not depend on pstack, a particular model, subagents, or a Cursor-only capability.
