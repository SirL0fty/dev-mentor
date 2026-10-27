# Changelog

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
