# Changelog

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
