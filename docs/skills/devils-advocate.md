# devils-advocate

[Skill file](../../skills/devils-advocate/SKILL.md)

## What it does

`devils-advocate` stress-tests a proposal. By default it first checks which models your assistant can really run, then has three distinct models (or two, if that's all there is) challenge each other until every one agrees to the same written decision. With only one model, or when you ask for a quick take, one model argues the strongest case against it, clearly labelled as such.

## When to reach for it

Say "poke holes in this" or ask for a debate. Say "quick challenge" or "just you" for the single-model version. `set up debate models` picks the models.

## It's working if

- "Poke holes in this" checks the available models before choosing a mode; it doesn't jump straight to a single-model challenge.
- With saved debate models that are all available, it names them in one line and starts without asking again.
- With nothing saved, it recommends seats from the models it found (three families if possible), asks once, and saves only if you choose **Use and save**.
- In a host that only offers one supplier's models, it uses three distinct ones from it and says they may share blind spots.
- With two models, it runs a debate labelled "Two-model debate, not three". With one model, it runs a challenge labelled "Single-model challenge, not an independent review" and says why. It never role-plays a missing reviewer.
- Saved `debate models` are plain model IDs, and the `debate effort` line applies to every seat that supports it. A model name with an effort baked in isn't treated as a different model.
- A saved model that isn't available makes it say so and ask before swapping.
- "Quick challenge" or "just you" skips the debate.
- The report lists each seat's requested model, the model confirmed at runtime, and its session ID. Without confirmed distinct models, it's labelled unverified, not a consensus.
- The result is a recommendation, not approval to build.
- Before any reviewer starts, it reads the repo, says what it couldn't see, asks for architecture diagrams or docs, and has you confirm a short summary of how the system works. Every reviewer gets the same docs, not a summary of them.
- Your requirements reach the reviewers word for word; anything it added is labelled as an assumption.
- Each objection is sorted into Required now, Conditional or Deferred. Only Required now changes the design, and it asks you before an objection adds a new mechanism (an extra table, a state machine, a locking protocol).
- A reviewer can agree with deferred concerns; an objection must name the requirement or evidence the decision fails.
- You get one progress line per round, and the result opens with about a page that answers your question.
- When the question asks for a design, the decision the reviewers vote on includes the proposed design and a walkthrough of each query in the question, not only the direction ("use DynamoDB").
