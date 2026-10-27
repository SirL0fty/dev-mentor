# Working on this repo

Dev Mentor is a set of Agent Skills: plain Markdown that any assistant can load. These rules are for anyone, human or AI, changing it.

## Layout

- `skills/<name>/SKILL.md`: one skill. `references/` only for long, rarely needed detail. `agents/openai.yaml`: Codex / ChatGPT display name and picker text.
- `skills/mentor-style/SKILL.md`: the **only** home of the settings and ground rules.
- `docs/skills/<name>.md`: the human guide for each skill (What it does · When to reach for it · It's working if).
- `scripts/check.mjs`: repo checks, run by CI on every push. `.changeset/`: pending release notes.
- `scripts/link-skills.sh`: symlinks the skills into `~/.agents/skills` and `~/.claude/skills` for live testing; `--unlink` restores the installed copies.

## When you add, rename or change a skill

Update all of these in the same change:

1. The skills table in `README.md` (link the name to its `SKILL.md`), plus any settings or command tables it affects.
2. Its guide in `docs/skills/`, and the index in `docs/skills/README.md`.
3. The routing table in `skills/mentor/SKILL.md`, if people can reach it.
4. Its `agents/openai.yaml`, and the plugin description in `plugin.json` if the feature list changed.

## Writing skills

- **One home per rule.** Settings and ground rules live in `mentor-style`; other skills end with the short "Style and ground rules" section that calls it. Never copy rules between skills.
- **Calling another skill:** write `call the Skill tool with "name"`, not a `../other-skill/` link.
- **Descriptions:** one line, under 1024 characters, ending in `(Dev Mentor)`, with the phrases people actually say. Never `: ` (colon then space) in a description: it breaks the YAML header and the skill fails to install.
- **Picker questions:** at most 4 options, headers of 12 characters or fewer, labels and descriptions given word for word. In labels "I" is the person; in descriptions "you" is the person; the assistant is always "the AI".
- Say what to do, not only what not to do. Show an example rather than describing one. Cut any rule that doesn't change behaviour.

## Before you push

1. `npm install` once, then `npm run check`. Fix every ✗.
2. `npx changeset`, with one user-facing line. Never edit version numbers or `CHANGELOG.md` by hand; the Release workflow does both.
3. Try the relevant **It's working if** items from the skill's guide in a fresh session. Run `scripts/link-skills.sh` first so your assistant uses this checkout.
