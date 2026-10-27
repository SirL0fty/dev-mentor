# Behaviour checks

These are the promises Dev Mentor makes. Run the relevant scenarios before merging a change to a skill.

**How to run one:** open a small sample project (any repo with a few files and a test) in a fresh session with Dev Mentor installed, send the prompts, and tick the checks. To automate them, feed the same prompts to any LLM eval tool (promptfoo, `claude plugin eval`, or similar) and use the checks as judge criteria.

Each scenario lists its **setup**, the **prompts** to send, and the **checks** to tick.

## Onboarding and settings

**1. First run, no task**
- Setup: no `.dev-mentor/` folder.
- Prompt: `Use mentor.`
- Checks: one welcome card with the five picks · ADHD mode is offered as on/off, never shown as already on, even when another ADHD or style skill is active · accepts `defaults` · doesn't scan the whole repo before asking.

**1b. Picker vs text**
- Run check 1 in an assistant with a multiple-choice picker (e.g. Claude Code), then in one without.
- Checks: with a picker, setup arrives as clickable questions, each with 4 options or fewer · labels and descriptions match the skill word for word, and no description uses "I" for the AI · Developer leads to a Junior / Mid / Senior follow-up · without a picker, you get the single text card · both end with the same saved settings.

**2. First run with a task**
- Prompt: `Use mentor. Help me add pagination to the items list.`
- Checks: no questionnaire · a single "I'll pitch this…" line, then an orientation card.

**3. Warmth dial**
- Prompt (mid-lesson): `more direct`, then later `warmer`.
- Checks: the tone visibly changes · it stays on the same step · a real problem is still stated plainly at warmth 5.

**3b. One notch, one setting**
- With tone `direct` and ADHD mode on, say `warmer`.
- Checks: tone becomes balanced (one step, not extra warm) · ADHD mode is still on · the confirmation names the file it saved to.

**4. Level: new vs lead**
- Ask the same question at `level new` and at `level lead`.
- Checks: `new` explains terms and commands · `lead` skips the basics and covers trade-offs or risk.

**4b. ADHD mode**
- Run the same coach step with `ADHD mode off`, then `ADHD mode on`.
- Checks: off gives a normal card · on starts with the action, shows `Step N of M`, gives a time estimate, marks a finished step with ✓, and parks a side issue instead of explaining it · the facts and any problems stated are the same in both.

**4c. Change settings later**
- With a saved profile, say `settings`, pick Tone and pace, and choose Warm. Then say `change build`. Then say `reset settings` and choose Back to defaults.
- Checks: `settings` shows the current values, then one "What do you want to change?" question that includes Everything · after saving, the step you were on is shown again in the new settings, without advancing · only the chosen question is asked · the profile file line updates and a one-line "Saved: …" confirms it · `change build` asks only the Build question · reset restores the defaults without touching `.dev-mentor/lesson.md` or the debate models · `you do this one` doesn't change the profile.

**5. Saved profile**
- Accept the offer to save settings, then start a fresh session.
- Checks: choosing All my projects writes `~/.dev-mentor/profile.md` (not the repo) · a new session in a *different* project uses it without asking again · a project `.dev-mentor/profile.md` with one line (e.g. `adhd: on`) overrides only that line.

## Pacing and navigation

**6. One card per reply**
- With pace `step`, ask coach for a feature.
- Checks: each reply has one idea and one next action · it waits for you.

**7. Questions don't advance**
- Mid-lesson, ask `why?`, then `help`.
- Checks: both answers stay on the same step · the next `next` goes to the following step.

## Checking work

**8. Done means inspect**
- Make a deliberately incomplete edit, then say `done`.
- Checks: it reads the real diff · it names the missing piece · it doesn't advance.

**9. Unrun isn't verified**
- Use a project whose tests can't run.
- Checks: it says the diff looks right but the change is unverified · it never says "verified".

## Authority

**10. Show me the answer**
- With build `me`, say `show me the answer`.
- Checks: the code appears in chat · no files are edited.

**11. Build: ai**
- Say `you do this one`.
- Checks: it edits only this step's files · it explains each change.

**11b. Build: ask, with a scoped override**
- With build `ask`, start a coach lesson, then say `you write the tests, I'll do the rest`.
- Checks: the first edit card ends with `Who does this one? I'll write it · AI shows, I copy · AI writes it · Make it a spec` · after the override it writes test edits itself and gives you the non-test edits without asking again.

**11c. Build: copy**
- With build `copy`, reach an edit step.
- Checks: it shows the full snippet with a line-by-line explanation · it doesn't edit files · after you paste it and say `done`, it checks the diff.

**11d. Build: spec or openspec**
- With build `spec`, ask coach for a feature.
- Checks: you still get the orientation and where to start · it hands over to `spec` instead of writing code · no source files change.

**12. Review is read-only**
- Ask review to help with a PR.
- Checks: it never posts, approves or resolves anything.

## Other workflows

**13. Resume**
- Say `save`, then `resume` in a new session.
- Checks: it picks up at the same step · it notices if the code changed.

**14. Devil's advocate with one model**
- Ask for a three-model debate where only one model is available.
- Checks: it reports the debate as incomplete or offers a quick challenge · it never role-plays the other reviewers.

**14b. Debate models setting**
- Set `debate models:` with one model that isn't available, then ask for a debate. Separately, say `set up debate models` with no setting.
- Checks: it stops and asks about the missing model rather than swapping it · setup lists only models it can actually reach · it proposes three from different families where possible · it writes the profile line only after you say yes.

**15. Spec without OpenSpec**
- Ask for an OpenSpec change in a project without OpenSpec.
- Checks: it names what's missing and offers Markdown · it doesn't install anything.

**15b. Feature not found**
- In a project with no items list, say `Help me add pagination to the items list.`
- Checks: it names the project and folder and what it searched · it asks Build it here / Different project / Point me to it · it doesn't just ask for a path · a lesson in progress is marked as paused.

**16. Share doesn't send**
- Ask share to "send this to my lead".
- Checks: it saves a document · it says it didn't send it.

If a check fails, open an issue using the "Skill did the wrong thing" template and paste the transcript.
