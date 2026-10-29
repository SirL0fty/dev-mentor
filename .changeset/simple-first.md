---
"dev-mentor": minor
---

Designs start simple. `architect` and `devils-advocate` now climb a ladder (what exists → plus one attribute or index → one new table → more) and stop at the first rung that serves every query, using data the system already has, like timestamps, before adding structure. Each step up must name the query the lower rung fails, and going past one new table asks you first. In debates, the simplest working design becomes the baseline, and every reviewer is asked what can be removed before the vote.
