# Multi-model debate

## 1. Discover what this session can run

Do this on every invocation, before choosing a mode.

- **Delegation:** find the tools this session actually has for starting a reviewer with a chosen model: a subagent or task tool with a model option, a session-starting tool, or a multi-model tool the person has already set up and authorised. Use only tools you can see; never invent one.
- **Models:** list the models those tools accept. If the host shows the person's model list, use that too. If you can't find any list, ask them to paste the names they have access to; treat those as unconfirmed until a seat confirms them at runtime.
- **Don't assume from the host's name.** Some hosts (such as OpenCode) can reach several providers; others (such as Claude Code or Codex) often reach one supplier's models only. Check what this session offers.
- **What counts as distinct:** different model IDs, confirmed at runtime. Two models from the same family (e.g. two Claude models) are distinct, but say they may share blind spots. One model in several personas, sessions, effort levels or temperatures is one model.

Then count the distinct models you can seat and choose the mode from the table in the skill.

## 2. Pick the seats

Read the `debate models` line from `.dev-mentor/profile.md` in the project, or from `~/.dev-mentor/profile.md` for every project. The project file wins.

```text
debate models: claude-opus-5-5, sol-6.1, <a third model from your list>
debate effort: high
```

- **Models:** the seats, in order A, B, C, as plain model IDs. Effort goes on its own line, never in the model name. `current` means this chat's own model in a fresh session; it counts as one seat, so the others must be different models.
- **Effort:** `max`, `xhigh`, `high` or `medium`, for every seat whose model supports it. The default is `high`.

**Saved, and all available:** announce them in one line and start. Don't ask again:

> Debating with **A** · **B** · **C** (from `~/.dev-mentor/profile.md`). Say `set up debate models` to change them.

**Saved, but one is unavailable:** say which one and why, then ask before changing anything. Offer the closest available model from the same family, a different available model, or continuing with the models that are left (a two-model debate if two remain). Never swap silently: a quiet swap can leave two seats on the same model.

**Nothing saved, or they say `set up debate models`:** recommend seats from what step 1 found. Use three different families if available; otherwise three distinct models from one supplier, saying they may share blind spots; with only two models, those two. Ask once, with the picker if there is one, word for word:

**Debate** · Run the debate with these models?
- Use these (recommended) · Run with these models this time.
- Use and save · Run with these, and save them in `~/.dev-mentor/profile.md`.
- Change one · Pick a different model for one of the seats.
- Quick challenge · Skip the debate; one model argues against the proposal.

Write the profile line only if they choose **Use and save**.

## 3. Seat the reviewers

- Give each seat its own fresh context and the **identical evidence pack**, with its version number. Pass the person's docs and diagrams themselves (file paths each seat reads, or their full extracted text), not your summary of them. You coordinate; you are not a vote.
- Record each seat's **requested model**, the **model confirmed at runtime** (from the tool's or runtime's metadata, not the model's own claim), and its **session ID**.
- If two seats turn out to be the same model, count again and say what changed (e.g. it's now a two-model debate). If you can't confirm at runtime that the seats are distinct models, don't call the result an independent multi-model consensus: label it **unverified** and say which identities are missing.
- If the host can't start reviewers itself, prepare identical briefs they can paste into other sessions, or use a multi-model tool they've authorised. Never fall back silently to another model.

## Keep a record

Write `.dev-mentor/debates/<topic>.md` as you go, so `share` can report it later without guessing:

- the question, the person's requirements as quoted, the confirmed context summary, the docs and diagrams they gave, and the evidence pack version(s), with the commit;
- each seat's requested and confirmed model, session ID, and **first answer as returned**;
- the issue table after each challenge round, with each objection's class, and any corrected claims;
- every decision version's exact text, and each seat's vote and reasons on it.

Copy replies as returned; label anything you add as editorial. Don't record private reasoning you didn't see.

## 4. Rounds

1. **Independent round:** every seat gets the same evidence pack and returns: their preferred option and why, the **smallest design** that meets the stated requirements (when the question asks for one), the strongest case against it, and at most **three material objections**, each with what would resolve it. Collect every answer before anyone sees the others'. Don't hint at a preferred winner.
2. **Challenge rounds:** keep a small issue table (ID, claim, evidence, each seat's position, class, status). Share every material disagreement, minority ones included. Check disputed facts with read-only checks. If the evidence changes, bump the evidence version and have every seat reassess.

   **Sort every objection before acting on it:**

   | Class | Means | Effect on the decision |
   | --- | --- | --- |
   | Required now | A stated requirement or the evidence shows it will break | May change the design |
   | Conditional | Only matters if some requirement turns out to be true | Becomes an open question naming that requirement |
   | Deferred | A real risk, but nothing stated needs it handled now | Listed under *If you later need…* |

   Only **Required now** changes the design. For each one ask "which stated requirement, or which evidence, makes this necessary?" Evidence counts: code, tests or docs showing the proposal breaks an existing contract or caller is Required now even if the person never stated it. If no one can name either, it's Conditional or Deferred. If fixing an objection would add a new mechanism (a table, index, service, state machine, publication or locking protocol), stop and ask the person whether that requirement is real before adding it.
3. **Candidate decision:** the option, its scope, the smallest proposed design and its query walkthrough when the question asks for a design (see **Design questions get the smallest design that fits** in the ground rules), the reasons, the rejected alternatives, the trade-offs, the conditions, and what still needs verifying. "Defer until we measure X" is a valid decision; "needs more work" is not.
4. **Ratify:** send the exact same versioned text to every seat. Each replies `AGREE`, `AGREE with deferred concerns`, or `OBJECT`, with reasons, covering the design and its query walkthrough as well as the direction. Seats ratify the **simplest adequate** decision, not one that holds every safeguard anyone suggested. An `OBJECT` must name the stated requirement or evidence the decision fails; otherwise it's a deferred concern, recorded under Still open. If the text changes, everyone votes again.

Keep the person updated with one line per round (e.g. `Round 2: 2 agree, 1 objects on name matching`), never one message per vote.

## 5. Limits

By default, stop after 6 rounds or 20 minutes, unless the person says otherwise. Retry a failed call once with the same model. If you run out of budget, a model becomes unavailable, or there's no agreement, report **incomplete**: the current decision text, the outstanding objections, and the exact step to resume. Never claim consensus from silence or from a majority.

## 6. Report

Start with the label (e.g. **Three-model debate · one supplier: they may share blind spots** or **Two-model debate, not three**), then the decision and reasons as in the skill's Output section, then the seats:

| Seat | Requested | Confirmed at runtime | Session | Vote |
| --- | --- | --- | --- | --- |
| A | claude-opus-5-5 | claude-opus-5-5 | `ses_…` | AGREE v3 |

Reviewers only read; they don't edit code, publish, or change access.
