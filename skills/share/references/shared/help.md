# Help in the current codebase

Use this when the developer asks `help` within Dev Mentor, “mentor help”, “what can I ask here?”, or “what should I work on?”. Do not intercept unrelated help requests or terminal `--help` commands. Help is a read-only orientation detour, not permission to edit, run a review, or create a backlog.

## Choose the useful kind of help

- **A lesson or task is active:** interpret bare `help` as help with the current point. Reuse its evidence and offer one concrete hint or smaller next action with a short reason. Do not replace a known goal with a menu. Keep the workflow, checkpoint/card, pending manual action, and progress unchanged; help is not `done` or `next`. If the developer explicitly asks for other things to work on, offer the choices below while retaining the lesson until they choose to switch.
- **No task is selected, or project ideas are requested:** inspect enough of the actual codebase to suggest a useful starting point. Do not ask the developer to pick from all ten skills or guess which file matters.
- **Commands or usage are requested explicitly:** show only the relevant controls and a short example. A command explanation does not require a repository scan.

When an existing feature plan is ready to capture, a relevant suggestion is “Turn our current plan into a portable spec.” If the developer asks about formats, explain that `spec` can adapt to Matt Pocock or pstack conventions, or invoke the official `openspec-propose` workflow when OpenSpec is selected and available. A help question does not itself create a document or start that workflow.

## Ground suggestions in evidence

Reuse fresh evidence first. Follow the [investigation reference](../skills/explain/references/investigation.md), bounded to orientation: read project instructions, the README or package manifest, a shallow file listing, and Git status if available. Use the current ticket or selected files when present. Inspect one or two promising entry points and their nearby callers/tests; stop once there is enough evidence for useful choices. Avoid exhaustive scans, generated/vendor trees, dependency installation, or test execution merely to build a help card.

Prefer choices that explain a real behaviour, trace a value, explore a small change connected to the developer's goal, or understand an existing test. Include a tour of completed work only when its changeset and base are established; dirty files alone are not evidence of completed work. Recheck cited code if the working tree has changed.

For every choice, identify a real path or symbol and a concrete outcome the developer can learn or work toward. Explain the recommended first choice briefly: for example, its entry point is easy to find and has a focused test. A suggested extension without a ticket is a **practice idea**, not an established requirement or discovered defect. Do not infer broken behaviour, missing coverage, passing tests, or product priorities from names or a quick scan. Help must not silently expand into a code review.

When the project is empty or unavailable, say so and give one useful next step, such as opening the intended project or sharing its entry file. Ask for only the missing context needed to ground a suggestion. Never invent paths, functions, tickets, or runtime behaviour to fill the card.

## One small help card

Follow the existing focused output rules. Give **up to three** numbered, concrete prompts the developer can use verbatim, with the recommended choice first and one short reason for it. Use fewer choices when evidence is limited. Keep the whole card around 40–100 prose words; no catalogue dump, full roadmap, or trailing command menu.

For example, **only if these files and behaviour were inspected**:

> **Start with the request path**
>
> The item route is a useful starting point: its handler has a focused test.
>
> 1. **Recommended:** “Trace `GET /items` from `src/routes/items.ts` to its response using one example.”
> 2. “Explain what `tests/items.test.ts` checks and how it reaches the handler.”
> 3. “Help me plan an optional item limit as a practice feature. I'll write the code.”
>
> Pick a number or paste a prompt.

Replace the example with observed project details; omit unsupported options. A choice is an invitation, not a task already started. Wait for the developer's selection. Then route to the narrowest existing workflow and start one card, reusing the evidence. Selecting a coaching idea authorises guidance, not automatic implementation. If an earlier lesson was paused, retain its pending work and offer to resume it when relevant. Questions about the choices leave both the selection and lesson position unchanged.
