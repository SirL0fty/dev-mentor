# Changelog

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
