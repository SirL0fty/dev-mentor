# Plugin installation and updates

Choose one route per assistant to avoid duplicate skills. Dev Mentor is distributed from `SirL0fty/dev-mentor` and has not been submitted to vendor public directories. For the short version, see the [README](../README.md#install).

**Prerequisites:** Have your assistant installed and signed in. Commands using `npx` require Node.js 22.20 or newer; check with `node --version`. Open the project you want to work on.

<a id="install-chatgpt"></a>
## ChatGPT desktop and Codex

**In the desktop app**

1. Open **Plugins**, then choose **Add plugin marketplace**.
2. Fill in the dialog using the values below.
3. Click **Add marketplace**.
4. Select the **Dev Mentor** marketplace in the plugin browser.
5. Open **Dev Mentor** by **SirL0fty** and install it.
6. Start a new chat with the plugin enabled. Use **Work or Codex with your project open** for codebase coaching.

| Field | Enter |
| --- | --- |
| Source | `SirL0fty/dev-mentor` |
| Git ref | `main` |
| Sparse paths | Leave blank |

Leave Sparse paths empty so the whole package is available. If the marketplace does not appear, restart the app and reopen Plugins.

**Start using it**

Type `@`, search **Dev Mentor**, select the plugin, and send `help`. You can also choose one of the starter prompts on the plugin's detail page. The mentor chooses the workflow for your request. See [OpenAI's plugin usage guide](https://learn.chatgpt.com/docs/plugins).

**On another machine**

Repeat the marketplace setup there. Dev Mentor is hosted in this GitHub repository and has not been submitted to the public plugin directory, so searching the public catalog alone will not find it.

**Terminal alternative**

If you use Codex CLI, register the source with:

```sh
codex plugin marketplace add SirL0fty/dev-mentor --ref main
```

Then open the plugin browser in the desktop app, or run `/plugins` inside Codex CLI, select the Dev Mentor marketplace, and install the plugin. Start a fresh session after installation.

**Check:** the plugin detail page should show **SirL0fty**, version **0.8.3** or newer, and **10 skills**. Adding a marketplace makes the plugin discoverable; installing it is a separate step. See [OpenAI's marketplace guide](https://developers.openai.com/plugins/build/plugins#add-a-marketplace-from-the-cli).


<a id="install-cursor"></a>
## Cursor

**Native plugin**

1. Open your project in Cursor, then open **Customize**.
2. Choose **From GitHub Repository**.
3. Paste `https://github.com/SirL0fty/dev-mentor` and complete the import.
4. Find **Dev Mentor** in the imported marketplace and install it.
5. Start a new Agent chat in your project.
6. Ask **“Use the mentor skill from Dev Mentor. Help me find where to start.”**

**Check:** Dev Mentor's skills should appear in Customize. In Agent chat, type `/mentor` to filter the skill list, then select the Dev Mentor skill. Start with that one entry; it routes to the other workflows. See [Cursor's repository installation guide](https://cursor.com/docs/skills#installing-skills-from-a-repository).

**If repository import is unavailable**

From your project's terminal, install the standalone skills:

```sh
npx skills add SirL0fty/dev-mentor --agent cursor --skill '*'
```

Follow the installer prompts, reopen the project or start a new Agent chat, and use the same mentor prompt.

**Teams:** an administrator can use **Dashboard → Plugins & MCPs → Add Marketplace → Import from Repo**, paste the repository URL, and make Dev Mentor available to the team. See [Cursor's team marketplace guide](https://cursor.com/docs/plugins#add-a-team-marketplace).


<a id="install-claude"></a>
## Claude Code

**From your terminal**

1. Open a terminal in your project.
2. Register Dev Mentor's marketplace, then install the plugin:

```sh
claude plugin marketplace add SirL0fty/dev-mentor
claude plugin install dev-mentor@dev-mentor
```

3. Start a new Claude Code session.
4. Enter:

```text
/dev-mentor:mentor help
```

The default installation scope is your user account on that machine. To enable it for only this repository without changing shared project settings, use `--scope local` on the install command.

**From an existing Claude Code session**

```text
/plugin marketplace add SirL0fty/dev-mentor
/plugin install dev-mentor@dev-mentor
```

Choose the scope offered by the installer. Start a new session or use `/reload-plugins`, then invoke `/dev-mentor:mentor help`.

**Check:** open the Installed tab in `/plugin`, or run `claude plugin list` in your terminal. Typing `/dev-mentor:` filters the skills to this plugin's namespace; for example, `/dev-mentor:walkthrough` starts a guided tour.

These instructions are for Claude Code, including its supported local desktop and IDE surfaces. See [Claude Code's installation guide](https://code.claude.com/docs/en/discover-plugins) for current scope and refresh behaviour.


<a id="install-opencode"></a>
## OpenCode

OpenCode loads Dev Mentor through its Agent Skills support. You do not need to add Dev Mentor to OpenCode's JavaScript plugin configuration.

1. Open a terminal in the project you want to work on.
2. Install the skills:

```sh
npx skills add SirL0fty/dev-mentor --agent opencode --skill '*'
```

3. Follow the prompts to install into the current project. Choose **Copy** if you prefer ordinary files instead of symlinks.
4. Start a new OpenCode session in that project.
5. Ask:

```text
Use the mentor skill from Dev Mentor.
Help me find where to start in this codebase.
```

**For every project on this machine**, use a global installation instead of the project command:

```sh
npx skills add SirL0fty/dev-mentor --agent opencode --skill '*' --global
```

**Check:** ask OpenCode to load the `mentor` skill. It should have access to all ten workflows. If it cannot find the skill, check the destination printed by the installer and your skill permissions. OpenCode discovers project and global skill directories, including `.agents/skills`; see its [discovery and troubleshooting guide](https://opencode.ai/docs/skills/).


<a id="install-other"></a>
## Other assistants

From your project, run:

```sh
npx skills add SirL0fty/dev-mentor
```

Choose your assistant, the skills to install, and project or global scope. You can select multiple assistant targets explicitly:

```sh
npx skills add SirL0fty/dev-mentor --skill '*' --agent cursor claude-code codex opencode
```

For T3 Code or OpenChamber, select the provider used inside the app. For VS Code, select your assistant extension, such as Codex or GitHub Copilot. Start a new assistant session and ask it to use Dev Mentor's `mentor` skill.

The standard installer places instructions in the selected host's skill directories. It does not add a custom agent, model subscription, or background service. See [host compatibility](compatibility.md) for checked paths and remaining limits.



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
