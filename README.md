# Dev Mentor

**Build features you understand. Learn where to start next time.**

Dev Mentor helps you work through a feature in your own codebase: find the entry point, follow the runtime, choose a small change, and check the result. You write the code while your assistant guides you through the decisions.

The goal is independence. Start with a demonstration, try the next step with hints, then tackle a similar problem yourself.

Ten skills for Cursor, Claude Code, Codex, OpenCode, GitHub Copilot, and other skill-capable assistants.

[Install](#install) · [Get started](#get-started) · [Skills](#skills) · [Compatibility](docs/compatibility.md)

## Install

Run from your project:

```sh
npx skills add SirL0fty/dev-mentor
```

Choose your assistant and the skills to install. Requires Node.js 22.20+ and a configured coding assistant.

<details>
<summary>Choose your assistants explicitly</summary>

```sh
npx skills add SirL0fty/dev-mentor --skill '*' --agent cursor claude-code codex
```

For T3 Code or OpenChamber, choose the provider you use inside the app. For VS Code, choose your assistant extension. See [compatibility](docs/compatibility.md) for details.

</details>

## Get started

Not sure what to work on? Select **mentor** in your assistant's skill picker and say **help**, or ask:

```text
Use mentor to look at this codebase and suggest where I should start.
Give me a few concrete examples of what I can ask about the actual code.
```

You'll get one small card with up to three suggested prompts tied to real files, functions, or tests, with a recommended starting point. Pick a number or paste a prompt to begin. During a lesson, **help** gives you a hint for the current step and keeps your place.

Already have a feature in mind? Ask:

```text
Use mentor to help me add pagination to this search endpoint.
I don't know where to start, and I want to make the changes myself.
```

`mentor` chooses the workflow and keeps your place as you work. Start with your ticket, a question, or a change you want to understand.

A feature lesson follows this path:

```text
Find the entry point → Trace the runtime → Make a small change → Verify it
```

You learn why each step comes next, how to find the relevant code, and what evidence shows the change works.

## One step at a time

Lessons arrive as small cards: one idea or action, a short reason, and a next step. For example:

> **Find the entry point**
>
> Start with the endpoint path in your ticket. Its route registration tells you which handler receives the request.
>
> **Your next step:** Find that registration and share the handler it points to.

After you edit, say **done**. The mentor inspects your actual change, runs relevant checks when available, and gives focused feedback. A missing piece stays in focus before you move on.

| Say | What happens |
| --- | --- |
| `help` | Get a hint for the current step, or codebase-specific starting ideas when no task is selected. |
| `next` / `back` | Move one card. A pending edit is checked before advancing. |
| `why` / `example` | Explore the current point without losing your place. |
| `smaller` / `more detail` | Adjust the size or depth of the current explanation. |
| `map` | See the flow and where you are in it. |

Ask for the full explanation whenever you want it. To continue another day, ask the mentor to save your progress and resume from that checkpoint.

## Skills

Use **mentor** as your starting point, or name a skill directly.

<details>
<summary>Explore all ten skills</summary>

| Skill | Reach for it when… |
| --- | --- |
| [mentor](skills/mentor/SKILL.md) | You want help getting started or resuming a lesson. |
| [explain](skills/explain/SKILL.md) | You want to understand how existing code runs. |
| [coach](skills/coach/SKILL.md) | You're building a feature and want guidance while you implement it. |
| [learn](skills/learn/SKILL.md) | You're studying a concept, technology, or certification topic. |
| [review](skills/review/SKILL.md) | You want feedback on correctness, risks, or maintainability. |
| [architect](skills/architect/SKILL.md) | You need to compare approaches and understand the trade-offs. |
| [devils-advocate](skills/devils-advocate/SKILL.md) | You want three different models to challenge a proposal. |
| [walkthrough](skills/walkthrough/SKILL.md) | You want a guided tour of completed changes. |
| [share](skills/share/SKILL.md) | You want a plan or lesson prepared for a colleague's review. |
| [spec](skills/spec/SKILL.md) | You want an agreed feature plan converted into an OpenSpec change. |

</details>

### Try these prompts

**Understand the runtime**

```text
Use explain to trace a request from this API handler to the database
and back. Follow one example input, one step at a time.
```

**Explain your work to a colleague**

```text
Use walkthrough to guide me through this PR.
Help me explain what changed, why, and how it's tested.
```

**Get a plan ready for review**

```text
Use share to prepare our current plan for my senior.
Include the open decisions and specific questions for them.
```

### Challenge a decision with three models

```text
Use devils-advocate to challenge this design with three different models.
Work toward an agreed decision and explain the reasons behind it.
```

The models assess the same evidence independently, challenge each other's conclusions, and ratify the same decision and rationale. The result includes rejected alternatives, accepted trade-offs, and remaining checks.

Your assistant needs access to three distinct models. If a participant is unavailable or the debate remains unresolved, that stays explicit. Agreement is a recommendation; you decide whether to implement it.

## Update

```sh
npx skills update
```

## License

[MIT](https://github.com/SirL0fty/dev-mentor/blob/main/LICENSE).
