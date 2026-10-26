# Focused conversation output

For interactive mentoring, show **one small card per reply**. A card is one thought, decision, or action, not a whole file or checkpoint. Use plain Markdown so it works in any assistant. Native cards or buttons are optional only when the host actually provides them; never require HTML, a dashboard, or a separate application.

## Default card

- A short bold title naming the current task or concept. Include only enough location to orient the developer, such as `Schema · teams`; do not repeat the full roadmap.
- One brief explanation of what matters and why.
- One action or example, with the minimum code needed. Usually use at most one short code block and one relevant source link.
- One next action, then stop. Do not append a recap, future work, optional cleanup, a quiz, and a command menu.

Aim for roughly 40–100 words of prose. The useful limit is one thing to process; do not compress a lecture into dense bullets or a giant code block. If a correct change needs inseparable edits, keep them together and explain the dependency briefly. Split unrelated edits, examples, edge cases, and checks into later cards. The developer can ask for longer responses or the whole explanation.

After presenting a card in an interactive lesson, wait for the developer's response before presenting another. Do not send the remaining cards as successive messages or commentary in the same turn. This pacing does not interrupt a separately requested autonomous implementation or artifact-generation task.

## Choose what belongs now

If the last exercise has a blocking omission, stay with it. Show the smallest correction; defer the next lesson and cosmetic suggestions. Do not label the exercise implemented or verified until evidence supports that status. A “done” or “next” reply after a pending manual action triggers the active workflow's inspection/verification loop, not automatic success. Return its outcome and the most useful advice as one card. Answer a question about the correction without advancing.

Investigate as deeply as needed, but surface only evidence relevant to the current card. Keep the rest in the lesson plan. A flow map can be its own orientation card before detailed teaching; keep it short and expand it on request. Never treat unseen material as covered. The [teaching reference](../skills/explain/references/teaching.md) owns what the lesson must cover across its cards.

“Why?”, “example”, “more detail”, and ordinary questions expand the current point without advancing. “Smaller” immediately reduces the current card to its next useful thought/action; do not restart onboarding. More detail means more depth on that point, not the rest of the file. `map` shows the compact route and current location. `next` and `back` follow the [session navigation](session.md). Avoid printing these controls on every reply; show only the relevant cue, and explain others when asked.

## Complete outputs still matter

This is a presentation rule, not permission to omit findings, requirements, rationale, or verification gaps. For requested full reviews, plans, or explanations, provide the complete requested result. For `share` and `spec`, produce complete artifacts and give a concise location/status reply. Do not truncate the artifact to fit a card or save extra documents without a request. If no artifact destination is available, supply the requested complete content rather than hide it.

For a three-model debate, workers need the full evidence and protocol; card pacing must not make them wait for the developer after each round. Keep progress updates compact. The final decision must retain its rationale, ratifications, conditions, and remaining verification gaps, even if it exceeds a normal teaching card. Never defer a material warning the developer needs before taking the current action.
