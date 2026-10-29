# share

[Skill file](../../skills/share/SKILL.md)

## What it does

`share` starts by asking what you're sharing:

- **A plan,** before you build it: a version a colleague or senior dev can review without the chat (goal, evidence, design, steps, status), saved to `docs/plans/`.
- **A lesson,** as a learning note for your own history in Notion, Obsidian or a notes folder. This hands over to `mentor`'s `export lesson`.
- **An outcome** of a debate, challenge or review, as an architecture decision record (ADR) for a person or the team. It goes in the project's ADR folder (or `docs/decisions/`), marked **Status: Proposed**, with context, decision, consequences and alternatives, then where each reviewer started, what they disagreed about and what changed, what's still open, and the full record. It reports what happened; it doesn't turn it into a new plan or an approval request.

To send it, the default is a [Plannotator](https://github.com/backnotprop/plannotator) link (an open-source tool by backnotprop): the page opens in Plannotator and you click **Share** for an encrypted link that lasts 7 days. If you don't have Plannotator, it offers to install just the program once, or you can pick an HTML file, with a password if you want one, or a tool you already have connected.

## When to reach for it

Say `share`, or name it: "share this plan with my senior", "share this lesson", "write up this debate as an ADR for the team". To turn an agreed plan into a spec, use `spec`.

## It's working if

- `share` on its own asks **A plan · A lesson · An outcome** first. "Share this plan" skips the question.
- **A lesson** goes through `export lesson` and asks where to save it (Notion, Obsidian or a folder).
- **An outcome** is saved as the next numbered ADR in the project's ADR folder, using its template if it has one, with **Status: Proposed** unless you say the team accepted it.
- It asks what the document should do for the reader: answer their question, keep them informed, or ask for their input. Only the last adds questions for them.
- **An ordinary plan** still has goal, evidence, design and steps marked proposed, done or checked; only things actually run are called checked. It saves to `docs/plans/` unless you name a place.
- **A unanimous but conditional debate** is labelled "agreed · conditional", lists the conditions under Still open, and says model agreement isn't approval.
- **A debate with dissent** names who objected and why, and keeps the objection under Still open.
- **An incomplete debate** says "incomplete", shows the latest decision text, the open objections and where to resume.
- **When the reader asked the original question**, the report is framed as the answer to it, with no approval questions.
- Anything that wasn't recorded says "unknown"; it never invents reasons, concessions or test results.
- With Plannotator installed, it opens the HTML report with `plannotator annotate` and tells you to click Share; it never clicks Share itself. Without it, it asks once to install the program only, and `Don't ask again` sets `plannotator: no` in the profile that setting came from (a project file's line wins).
- Choosing **HTML file** asks whether to add a password; **No password** is the default and just gives you the file's path. With **Add a password**, the file opens in a browser, asks for the password, and shows the report. The password is shown once and never saved.
- Nothing is sent or published until you choose how, and it never changes who has access.
