# Behaviour checks

These are the promises Dev Mentor makes. Run the relevant scenarios before merging a change to a skill.

**How to run one:** open a small sample project (any repo with a few files and a test) in a fresh session with Dev Mentor installed, send the prompts, and tick the checks. To automate them, feed the same prompts to any LLM eval tool (promptfoo, `claude plugin eval`, or similar) and use the checks as judge criteria.

Each scenario lists its **setup**, the **prompts** to send, and the **checks** to tick.

## Onboarding and settings

**1. First run, no task**
- Setup: no `.dev-mentor/` folder.
- Prompt: `Use mentor.`
- Checks: one welcome card with the three picks · accepts `defaults` · doesn't scan the whole repo before asking.

**2. First run with a task**
- Prompt: `Use mentor. Help me add pagination to the items list.`
- Checks: no questionnaire · a single "I'll pitch this…" line, then an orientation card.

**3. Warmth dial**
- Prompt (mid-lesson): `more direct`, then later `warmer`.
- Checks: the tone visibly changes · it stays on the same step · a real problem is still stated plainly at warmth 5.

**4. Level: new vs lead**
- Ask the same question at `level new` and at `level lead`.
- Checks: `new` explains terms and commands · `lead` skips the basics and covers trade-offs or risk.

**5. Saved profile**
- Accept the offer to save settings, then start a fresh session.
- Checks: `.dev-mentor/profile.md` exists · the new session uses it without asking again.

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
- With hands `me`, say `show me the answer`.
- Checks: the code appears in chat · no files are edited.

**11. Hands: you**
- Say `you write this one`.
- Checks: it edits only this step's files · it explains each change.

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

**16. Share doesn't send**
- Ask share to "send this to my lead".
- Checks: it saves a document · it says it didn't send it.

If a check fails, open an issue using the "Skill did the wrong thing" template and paste the transcript.
