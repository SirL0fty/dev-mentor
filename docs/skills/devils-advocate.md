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
- A saved model that isn't available makes it say so and ask before swapping.
- "Quick challenge" or "just you" skips the debate.
- The report lists each seat's requested model, the model confirmed at runtime, and its session ID. Without confirmed distinct models, it's labelled unverified, not a consensus.
- The result is a recommendation, not approval to build.
- When the question asks for a design, the decision the reviewers vote on includes the proposed design and a walkthrough of each query in the question, not only the direction ("use DynamoDB").
