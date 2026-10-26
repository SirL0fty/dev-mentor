# Plugin installation and updates

The [README installation section](../README.md#install) contains the full setup steps, first prompts, and verification for each assistant:

| Assistant | Detailed guide |
| --- | --- |
| ChatGPT desktop / Codex | [Add the GitHub marketplace](../README.md#install-chatgpt) |
| Cursor | [Import in Customize or use the skills CLI](../README.md#install-cursor) |
| Claude Code | [Install and use the namespaced plugin](../README.md#install-claude) |
| OpenCode | [Install the ten Agent Skills](../README.md#install-opencode) |
| Other assistants | [Select your host in the skills CLI](../README.md#install-other) |

Choose one installation route per assistant to avoid duplicate skill entries. Dev Mentor is distributed from **SirL0fty/dev-mentor** on GitHub; it has not been submitted to the vendors' public directories.

## ChatGPT desktop and Codex

On each machine, follow the [desktop guide](../README.md#install-chatgpt): source `SirL0fty/dev-mentor`, ref `main`, and no sparse paths. Install Dev Mentor from that marketplace. To invoke it, type `@`, select **Dev Mentor**, and say **help**.

## Cursor

Use the [Cursor guide](../README.md#install-cursor). Start a new Agent chat, then ask for Dev Mentor's `mentor` skill or filter the skill picker with `/mentor`.

## Claude Code

Use the [Claude Code guide](../README.md#install-claude). Start with `/dev-mentor:mentor help`; `/dev-mentor:` filters the plugin's skills.

## OpenCode

Use the [OpenCode guide](../README.md#install-opencode). Ask OpenCode to load the `mentor` skill from Dev Mentor. This route installs Agent Skills rather than an OpenCode JavaScript extension.

## Updates

**ChatGPT desktop / Codex**

Refresh the GitHub marketplace snapshot from a terminal:

```sh
codex plugin marketplace upgrade dev-mentor
```

Open Plugins and pick up the Dev Mentor update. Restart the desktop app if it still shows the previous version, then start a new chat. If the CLI is not available, use the marketplace refresh/update controls exposed by your desktop version.

**Cursor**

Refresh the imported repository marketplace in Customize and update Dev Mentor when offered. Team marketplace administrators can use **Refresh** or enable **Auto Refresh**. Start a new Agent chat to use the updated files. See [Cursor's update guide](https://cursor.com/docs/plugins#keep-plugins-up-to-date).

**Claude Code**

```sh
claude plugin marketplace update dev-mentor
claude plugin update dev-mentor@dev-mentor
```

Start a new session or run `/reload-plugins`. See [Claude Code's update guide](https://code.claude.com/docs/en/discover-plugins#keep-plugins-updated).

**OpenCode and other skills CLI installs**

Run from the project where you installed the skills:

```sh
npx skills update
```

Start a new assistant session. Keep using the same installation scope and route.

## If Dev Mentor does not appear

- **Another machine:** add the repository marketplace or install the skills there; public-directory search alone will not find this repository-distributed plugin.
- **Marketplace added, but no skills:** install the plugin from that marketplace, enable it, and start a new chat.
- **Crowded skill picker:** select the whole Dev Mentor plugin with `@` in ChatGPT/Codex, use `/dev-mentor:mentor` in Claude Code, or request the `mentor` skill by name in other hosts.
- **Duplicate skills:** check whether you installed both the native plugin and standalone skill copies. Choose the route you want to keep before removing the duplicate.
- **Remote environment:** local installation does not automatically enable Dev Mentor in Grok Bot, a cloud agent, or a different machine.

See [compatibility](compatibility.md) for checks actually run and host-specific limits. The [OpenAI marketplace guide](https://developers.openai.com/plugins/build/plugins) describes repository sources and desktop installation.
