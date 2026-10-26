# Native plugin installation

Dev Mentor packages the same ten skills for Cursor, Claude Code, and Codex. Choose one installation method per assistant: a native plugin or the [skills CLI](../README.md#install). Installing both creates duplicate skill entries.

## Cursor

1. Open **Customize** and choose **From GitHub Repository**.
2. Enter `https://github.com/SirL0fty/dev-mentor`.
3. Install **Dev Mentor** and start a new Agent chat.
4. Select **mentor** in the skill picker and say **help**.

This uses the repository's `.cursor-plugin/marketplace.json`. If your version or team policy does not expose repository imports, use the skills CLI from your project:

```sh
npx skills add SirL0fty/dev-mentor --agent cursor --skill '*'
```

Teams and Enterprise can also import the repository through **Dashboard → Plugins & MCPs → Add Marketplace → Import from Repo**, then make it available through Customize. See [Cursor repository imports](https://cursor.com/docs/skills#installing-skills-from-a-repository) and [plugin installation](https://cursor.com/docs/plugins).

## Claude Code

Run in your terminal:

```sh
claude plugin marketplace add SirL0fty/dev-mentor
claude plugin install dev-mentor@dev-mentor
```

Start a new Claude Code session and enter:

```text
/dev-mentor:mentor help
```

You can also add the marketplace from inside a session with `/plugin marketplace add SirL0fty/dev-mentor`, then select Dev Mentor in `/plugin` to install it. See [Claude Code marketplaces](https://code.claude.com/docs/en/plugins/create-marketplace).

## Codex

Add the repository marketplace:

```sh
codex plugin marketplace add SirL0fty/dev-mentor
```

Open the plugin browser, choose the **Dev Mentor** marketplace, and install **Dev Mentor**. Restart the desktop app if the new source is not visible, then start a new chat with the plugin enabled and ask **“Use mentor. Help me find where to start.”**

On CLI versions with `codex plugin add`, you can install from the terminal:

```sh
codex plugin add dev-mentor@dev-mentor
```

The portable root `plugin.json` supplies the skills and OpenAI display metadata. `.agents/plugins/marketplace.json` supplies the repository catalogue. See [OpenAI's plugin packaging guide](https://developers.openai.com/plugins/build/plugins) and [CLI plugin commands](https://learn.chatgpt.com/docs/developer-commands).

## Updates

- **Cursor:** refresh the repository marketplace, update Dev Mentor when offered, and start a new chat. Team marketplaces can enable Auto Refresh.
- **Claude Code:** run `claude plugin marketplace update dev-mentor`, then `claude plugin update dev-mentor@dev-mentor`, and start a new session.
- **Codex:** run `codex plugin marketplace upgrade dev-mentor`, then use the plugin browser to pick up the update and start a new chat.
- **Skills CLI installs:** run `npx skills update` in the project where you installed the skills.

Dev Mentor is distributed from its own GitHub marketplace. It has not been submitted to the vendors' public directories. See [compatibility](compatibility.md) for what has actually been checked. Grok Bot and other remote environments need their own setup; local installation does not enable the plugin there automatically.
