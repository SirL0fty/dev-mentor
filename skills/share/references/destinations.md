# Getting it to them

Ask once, after the document is saved, offering only options that work in this session. Plannotator is the default.

**Share** · How should this reach them?
- Plannotator link (default) · Opens in Plannotator; click Share there for an encrypted link that lasts 7 days.
- Password-protected file · One HTML file plus a password you send separately.
- `<connected tool>` · Saves it in a tool you already use, such as Notion, Confluence or a Slack canvas.
- Just the file · Keep the saved file; you send it yourself.

Show a connected tool only if this session has a tool for it. Never upload to a public paste site or any service they didn't choose.

## Plannotator (default)

[Plannotator](https://github.com/backnotprop/plannotator) by backnotprop is an open-source (MIT / Apache-2.0) review tool with built-in sharing.

**If `command -v plannotator` finds it:**

1. If the document is Markdown (a plan), first write an HTML copy next to it using the styles from [outcome.html](../assets/outcome.html). Then run `plannotator annotate <report.html>` in the background. It opens the report in the browser exactly as designed.
2. Tell them: *"Click **Share** in the Plannotator tab and send that link. Anyone with the full link can read it, so send it only to them. It expires after 7 days."*
3. If they annotate the page, their notes come back when the tab is closed or submitted; treat them as feedback, below.

Share the **HTML** report, not Markdown: Plannotator encrypts HTML and large documents (AES-256-GCM, key only in the link, expires after 7 days), but squeezes small Markdown documents into the link without encryption. Don't promise a shorter expiry; Plannotator doesn't offer one for documents. You never click Share yourself.

**If it isn't installed**, ask once (skip this if their profile has `plannotator: no`):

**Plannotator** · Install Plannotator to share this as a link?
- Install it · Downloads the official Plannotator program from plannotator.ai. The program only; no hooks or plugins.
- Not now · Choose another way to share this time.
- Don't ask again · Choose another way, and don't offer Plannotator again.

- **Install it** (macOS, Linux, WSL): `curl -fsSL https://plannotator.ai/install.sh | bash -s -- --minimal`. It installs only the `plannotator` program into `~/.local/bin`. Check with `plannotator --version`, then continue as above. On Windows, link the [installation guide](https://docs.plannotator.ai/open-source/start/installation) instead of running anything.
- **Don't ask again:** add `plannotator: no` to `~/.dev-mentor/profile.md` and say so in one line. `plannotator: yes` turns the offer back on.
- If the install fails, say what failed and offer the other options. Never retry in a loop.

## Password-protected file

Run `node <this skill>/scripts/protect.mjs <report.html> <report-locked.html>`. It prints a generated password and writes one HTML file that opens in any browser and asks for it. Nothing is uploaded.

Tell them: *"Send the file and the password by different routes (for example, the file by email and the password in a chat). The title stays visible; everything else is locked. It doesn't expire: anyone with both can open it."* Show the password once. Never save it to a file.

If `node` isn't available, say so and offer **Just the file**.

## Connected tool

Write the report into the tool with its own tools (a page, a canvas, a document), read it back, and give the link. Say who can see it, as the tool reports it. Never change sharing or access settings unless they ask.

## Feedback

When feedback comes back, record who said what, update the document where the evidence supports it, and keep disagreements visible. Feedback doesn't approve building anything. Return to the lesson step you came from.
