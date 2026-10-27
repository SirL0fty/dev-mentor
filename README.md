<img src="assets/dev-mentor.png" alt="Dev Mentor logo" width="112" height="112">

# Dev Mentor

**Build features you understand. Learn where to start next time.**

Dev Mentor helps you find your way around a codebase, plan a feature, make changes one step at a time, and check your work. Start with **mentor**; it guides you to the right skill.

## Skills

| Skill | What it helps you do |
| --- | --- |
| [mentor](skills/mentor/SKILL.md) | Find where to start, resume a lesson, or watch a PR's comments and CI. |
| [explain](skills/explain/SKILL.md) | Understand how existing code runs. |
| [coach](skills/coach/SKILL.md) | Build a feature with guidance while you write the code. |
| [learn](skills/learn/SKILL.md) | Learn a concept or technology. |
| [review](skills/review/SKILL.md) | Understand a colleague's PR so you can review it. |
| [architect](skills/architect/SKILL.md) | Compare designs and trade-offs. |
| [devils-advocate](skills/devils-advocate/SKILL.md) | Challenge a proposal with three distinct models. |
| [walkthrough](skills/walkthrough/SKILL.md) | Take a guided tour of completed changes. |
| [share](skills/share/SKILL.md) | Prepare a plan or lesson for a colleague to review. |
| [spec](skills/spec/SKILL.md) | Turn a plan into a feature spec or an OpenSpec change. |

## Install

**For Cursor, OpenCode, Codex, and other skill-capable assistants**, open a terminal in your project and run:

```sh
npx skills add SirL0fty/dev-mentor
```

Choose your assistant and the skills you want. Choose **global** to use them across projects on that machine. `npx` requires Node.js 22.20 or newer. For T3 Code or OpenChamber, select the assistant provider used by the app.

Prefer a native plugin? Choose your assistant:

<a id="install-chatgpt"></a>
**ChatGPT desktop / Codex:** Open **Plugins → Add plugin marketplace**. Enter `SirL0fty/dev-mentor` as the source, `main` as the Git ref, and leave sparse paths blank. Add the marketplace, then install **Dev Mentor** by SirL0fty. Start a new chat.

<a id="install-cursor"></a>
**Cursor:** Open **Customize → From GitHub Repository**, enter `https://github.com/SirL0fty/dev-mentor`, then install Dev Mentor from the imported marketplace.

<a id="install-claude"></a>
**Claude Code:**

```sh
claude plugin marketplace add SirL0fty/dev-mentor
claude plugin install dev-mentor@dev-mentor
```

<a id="install-opencode"></a><a id="install-other"></a>
**OpenCode and other assistants:** Use the `npx` command above and select your assistant. Start a new session after installation.

[Detailed installation, updates and troubleshooting](docs/plugins.md) · [Host compatibility](docs/compatibility.md)

## Get started

Open your project and ask:

```text
Use mentor to help me find where to start in this codebase.
```

Or give it a ticket or feature: **“Help me build this one step at a time. I'll write the code.”** In ChatGPT/Codex desktop, select **Dev Mentor** with `@` first. In Claude Code, use `/dev-mentor:mentor help`.

The mentor explains the goal and current code, shows where to start, and guides you through small steps. After an edit, say **done** so it can inspect your change and run relevant checks. Say **help**, **next**, **back**, **why**, **example**, or **more detail** as you go.

<a id="help"></a><a id="create-a-spec"></a><a id="watch-a-pr"></a>
You can also ask it to **walk through a PR**, **prepare a plan for review**, **turn a plan into a spec**, or **watch a PR's comments and CI**. Watching needs a host that supports monitoring. OpenSpec conversion needs the project's OpenSpec setup and the official `openspec-propose` skill. The three-model debate needs access to three distinct models.

## Skill map

```mermaid
flowchart TB
    Mentor(["mentor<br/>Find your starting point"])
    Understand["UNDERSTAND<br/><br/>explain · Existing code<br/>learn · Concepts<br/>review · A colleague's PR<br/>walkthrough · Completed changes"]
    Coach["coach<br/>Plan one manageable step"]
    Prepare["CAPTURE THE PLAN<br/><br/>share · Review document<br/>spec · Feature spec"]
    Design["DESIGN HELP<br/><br/>architect · Compare approaches<br/>devils-advocate · Challenge a decision"]
    Edit["You write the code"]
    Check["Inspect your change<br/>Run focused checks"]
    Mentor --> Understand
    Mentor --> Coach
    Mentor --> Prepare
    Coach -. "if needed" .-> Design
    Coach --> Edit --> Check
    Check -->|"feedback or next step"| Coach
    classDef entry fill:#08224c,color:#ffffff,stroke:#0cbfaf,stroke-width:3px
    classDef understand fill:#e9f8f4,color:#123e35,stroke:#32a68e
    classDef build fill:#edf1fc,color:#182c59,stroke:#6d8cce
    classDef share fill:#fff4db,color:#594011,stroke:#dca735
    class Mentor entry
    class Understand understand
    class Coach,Edit,Check,Design build
    class Prepare share
```

## Update

For skills installed with `npx`, run `npx skills update` in your project. If you installed globally, use `npx skills update -g`. See the [update guide](docs/plugins.md#updates) for native plugins.

[MIT licence](https://github.com/SirL0fty/dev-mentor/blob/main/LICENSE) · By [SirL0fty](https://github.com/SirL0fty)
