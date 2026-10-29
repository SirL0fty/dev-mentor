# Changelog

## 0.22.0

### Minor Changes

- [#16](https://github.com/SirL0fty/dev-mentor/pull/16) [`ea5888d`](https://github.com/SirL0fty/dev-mentor/commit/ea5888dbf98e3d5bbb83fa9672066e40961611b5) - Designs start simple. `architect` and `devils-advocate` now climb a ladder (what exists → plus one attribute or index → one new table → more) and stop at the first rung that serves every query, using data the system already has, like timestamps, before adding structure. Each step up must name the query the lower rung fails, and going past one new table asks you first. In debates, the simplest working design becomes the baseline, and every reviewer is asked what can be removed before the vote.

## 0.21.0

### Minor Changes

- [#15](https://github.com/SirL0fty/dev-mentor/pull/15) [`5fed7ff`](https://github.com/SirL0fty/dev-mentor/commit/5fed7ff3c04c47a84893639aa122e1390cfdb886) - `share` no longer uses Plannotator, because its links can't be shared in Slack. It now offers an HTML file (the default, password optional), the Markdown file as it is, or a tool you already have connected. The `plannotator` setting is gone; an old `plannotator:` line in a profile is ignored.

## 0.20.0

### Minor Changes

- [#14](https://github.com/SirL0fty/dev-mentor/pull/14) [`22b193e`](https://github.com/SirL0fty/dev-mentor/commit/22b193e90ffd68d59a601e4c61030160c1979497) - Design reviews start from shared context and stay proportionate. `architect` and `devils-advocate` now ask for architecture diagrams or docs the repo can't show and confirm how the system works before designing, and every debate reviewer gets the same docs. Designs are the smallest that meet the stated requirements, objections are sorted into Required now, Conditional or Deferred, and results open with a one-page answer to the question asked.

## 0.19.0

### Minor Changes

- [#12](https://github.com/SirL0fty/dev-mentor/pull/12) [`d102776`](https://github.com/SirL0fty/dev-mentor/commit/d10277629e330a32df856ef56b7f0c922d760831) - Design questions now get a design: when you ask how to build or store something, `architect` and `devils-advocate` include a concrete proposed design (for a table, its keys, items and indexes) and walk every query from your question through it, and `share`'s ADR keeps it in a Proposed design section.

### Patch Changes

- [#8](https://github.com/SirL0fty/dev-mentor/pull/8) [`0d05d3c`](https://github.com/SirL0fty/dev-mentor/commit/0d05d3c6ad4fae46c3d60b3eb5450ed62c57d651) - Before an edit that adds a new architectural mechanism, `coach` now explains the requirement behind it, why the current code can't meet it, why it fits the repo and its trade-off, labelling ticket requirements apart from implementation choices.

- [#10](https://github.com/SirL0fty/dev-mentor/pull/10) [`fffc062`](https://github.com/SirL0fty/dev-mentor/commit/fffc0628fabbe6a6ce2a10f887d805af1096f007) - Skills trigger more reliably and hand off to each other consistently: clearer descriptions for architect, explain, learn, review, spec and walkthrough; preflight detects the repo's real default branch; and CI now enforces the skill-writing rules in AGENTS.md.

## 0.18.0

### Minor Changes

- [#4](https://github.com/SirL0fty/dev-mentor/pull/4) [`32d4ce3`](https://github.com/SirL0fty/dev-mentor/commit/32d4ce3da477913dceac3b0dd3258fab64b885ee) - Devil's advocate now defaults to a multi-model debate: it checks which models your assistant can really run, uses three (preferring different families) or two, starts straight away with saved models, and falls back to a labelled single-model challenge only when one model is available or you ask for a quick take.

- [#4](https://github.com/SirL0fty/dev-mentor/pull/4) [`32d4ce3`](https://github.com/SirL0fty/dev-mentor/commit/32d4ce3da477913dceac3b0dd3258fab64b885ee) - Add the `challenge` skill: say "is this right?" or "does this match our code?" about a recommendation and it shows how it was reached, checks it against your codebase's existing patterns, names skipped options, and brings in devil's advocate with a fresh reviewer when the case looks weak.

- [#4](https://github.com/SirL0fty/dev-mentor/pull/4) [`32d4ce3`](https://github.com/SirL0fty/dev-mentor/commit/32d4ce3da477913dceac3b0dd3258fab64b885ee) - Add a project preflight: before a coach or spec lesson, Dev Mentor checks the checkout, asks whether to use a new worktree or branch and what to call it (such as the ticket key), and never starts on the default branch.

  File links now use absolute paths in the verified checkout.

- [#6](https://github.com/SirL0fty/dev-mentor/pull/6) [`72df5de`](https://github.com/SirL0fty/dev-mentor/commit/72df5de8a991c2275a4f8a74a12aa01d33371dab) - `share` now asks whether you're sharing a plan (for review before building), a lesson (a note for Notion or Obsidian) or an outcome. It can report the outcome of a debate, challenge or review as an ADR that keeps every reviewer's position, disagreement and open question, and can share it as a Plannotator link (the default, installed only if you choose), an HTML file with an optional password, or in a tool you already use. `devils-advocate` now keeps a debate record for it.

### Patch Changes

- [#7](https://github.com/SirL0fty/dev-mentor/pull/7) [`85f6431`](https://github.com/SirL0fty/dev-mentor/commit/85f64312f8ae70254537f86b60f753b7540e793a) - During a ticket lesson, `coach` stays in charge: it recommends an implementation approach and teaches why it fits instead of asking you to choose, and `architect`, `challenge` and `devils-advocate` run only as short side checks that return to the same step.

## 0.17.1

### Patch Changes

- [`d141715`](https://github.com/SirL0fty/dev-mentor/commit/d141715a9b0054c72d05421d873e816f3a12e007) Thanks [@SirL0fty](https://github.com/SirL0fty)! - Use a generic project name in the export note example.

## 0.17.0

### Minor Changes

- [`b978c00`](https://github.com/SirL0fty/dev-mentor/commit/b978c00b9ea30b5f169b5b5fbf285b09ee0c015e) Thanks [@SirL0fty](https://github.com/SirL0fty)! - Move the shared settings and ground rules into one new skill, `mentor-style`. Every other skill now loads it instead of carrying its own copy, so the instructions are about 60% shorter and each rule lives in one place.

### Patch Changes

- [`80bb55f`](https://github.com/SirL0fty/dev-mentor/commit/80bb55f5741068a19afd8a610043ae252cdec55e) Thanks [@SirL0fty](https://github.com/SirL0fty)! - Add a repo check (skill headers, versions, links, README skill list) that runs on every push, and automatic versioning and GitHub releases through changesets.

- [`e993235`](https://github.com/SirL0fty/dev-mentor/commit/e99323504097cd3f8806673432d0e10a1543b73f) Thanks [@SirL0fty](https://github.com/SirL0fty)! - Replace the evals folder with a short guide per skill in `docs/skills/` (what it does, when to reach for it, and an "It's working if" list), and drop the out-of-date "Tested" column from the compatibility doc.

## 0.16.1

- README and skill descriptions brought up to date: build modes, Output and Export settings, saved lessons, export to Notion and Obsidian, a "Things you can say" reference, and the updated flow diagram.

## 0.16.0

- **Export lessons:** `export lesson`, `export lesson <name>` and `export all lessons` turn lessons into learning notes in **Notion** (through your existing Notion connection), **Obsidian** or a Markdown folder. Notes cover where to start, the flow, what you learned and how to start next time. Re-exporting updates the same note or page. Set a default with `export:` in your profile.

## 0.15.0

- **Several saved lessons:** each lesson saves to its own file in `.dev-mentor/lessons/`, so saving a new one never overwrites another. `resume` asks which one (most recent first, with your step), `resume <name>` goes straight there, `lessons` lists them and `delete lesson <name>` removes one. An old `.dev-mentor/lesson.md` is picked up and moved automatically.

## 0.14.2

- **Quick commands change one thing:** `warmer`, `more direct` and the rest move only their own setting by one step, never another setting.
- **Clearer saving:** the confirmation names the exact file. "Just this project" saves only the lines that differ from your global settings, so global changes still apply.
- **Not found:** when what you ask about isn't in the project, it names the project and what it searched, then asks: build it here as a new feature, use a different project, or point to the file.

## 0.14.1

- `settings` now offers **Everything** as well as one area at a time.
- After a settings change, the AI confirms it, then shows the step you were on again in your new settings, so you carry on from there.

## 0.14.0

- **Global settings:** settings now save to `~/.dev-mentor/profile.md` by default, so they follow you to every project. Pick "Just this project" to save `.dev-mentor/profile.md` instead; its lines override the global file. `save globally` and `save for this project` move them.

## 0.13.0

- **Change settings later:** `settings` shows your choices, then a picker asks what to change and re-asks only that question. `change tone`, `change build`, `change experience`… jump straight to one question; `change everything` runs the full setup again.
- **Auto-save:** if you saved a profile, any change updates it and the AI confirms in one line. Per-step overrides like `you do this one` are never saved.
- **`reset settings`:** go back to the defaults, or run setup again. Saved lessons and debate models are kept.

## 0.12.1

- **Clearer setup wording:** every picker label and description is now fixed text, and the AI is always called "the AI", so "I write, AI guides" can't be misread as the AI writing. The build value for AI-written edits is now `ai` (old `you` still works).

## 0.12.0

- **Clickable setup:** when your assistant has a multiple-choice picker, onboarding uses it, with every question at 4 options or fewer so it works in any picker. Experience has a Developer → Junior / Mid / Senior follow-up, and "build code or plan it as a spec / OpenSpec" is its own question. Assistants without a picker still get the single text card.
- `change settings` asks the setup questions again.

## 0.11.0

- **Finer onboarding:** five picks in about a minute: experience (brand new · vibe coder · junior · mid · senior · lead), tone 1–5, how much per reply, how to build, and ADHD mode.
- **Build replaces "who writes the code":** always shows where to start and why first, then `ask` (choose per edit) · `me` · `copy` (explained code to paste) · `you` · `spec` · `openspec`. Overrides can be scoped, e.g. "you write the tests, I'll do the rest".
- **ADHD mode is always a choice:** onboarding never shows it as already on, even when another skill in the session uses a similar style.
- Old profiles still work: `hands` maps to `build`, `growing` to `junior`, `experienced` to `senior`.

## 0.10.0

- **ADHD mode** (off by default): a new onboarding question and setting. When it's on, replies start with the one action to take, show the current step (`Step 3 of 5`), give time estimates, tick off finished steps, and park side topics. Turn it on or off anytime with `ADHD mode on` / `ADHD mode off`.

## 0.9.0

- **Onboarding:** `mentor` now welcomes new users with three quick picks (level, tone, who writes the code), or skips them when you arrive with a task.
- **Style settings:** level (new / growing / experienced / lead), warmth 1–5, pace, and hands. Change them anytime (`warmer`, `simpler`, `faster`…) and optionally save them to `.dev-mentor/profile.md`.
- **Simpler skills:** each skill is now one short, self-contained `SKILL.md`. The ten copies of the shared reference files are gone, and the instructions shrank from about 74k words to about 8k.
- **Save and resume:** `save` writes `.dev-mentor/lesson.md`; `resume` picks up at the same step.
- **Devil's advocate:** new quick single-model challenge mode, clearly labelled. The three-model debate is unchanged in spirit.
- **Debate models setting** (modelled on pstack's `pstack-models.mdc`): pin the debate's three models and a reasoning effort in `.dev-mentor/profile.md` or `~/.dev-mentor/profile.md`. `set up debate models` lists the models your assistant can reach and suggests three from different families. Unlike pstack, a missing model is never swapped silently.
- **Behaviour checks:** `evals/README.md` lists 16 scenarios covering the core promises.
- README now shows an example session, the settings, and the flow.

## 0.8.3

- Previous release: ten skills with shared references copied into each skill.
