# Getting it to them

Ask once, after the document is saved, offering only options that work in this session. An HTML file is the default.

**Share** · How should this reach them?
- HTML file (default) · One page that opens in any browser, with an optional password. You send it yourself.
- Markdown file · The saved Markdown as it is; it reads well in GitHub, Slack and most editors.
- `<connected tool>` · Saves it in a tool you already use, such as Notion, Confluence or a Slack canvas.

Show a connected tool only if this session has a tool for it. Never upload to a public paste site or any service they didn't choose.

## Markdown file

Give the full path of the saved Markdown. Done.

## HTML file

Make an HTML page next to the saved Markdown: for an outcome, fill [outcome.html](../assets/outcome.html); for a plan, use its styles and the plan's own sections. A Markdown plan must be turned into HTML first, because the password script only encrypts what it's given. The page is one self-contained file that opens in any browser. Ask once, with the picker if there is one:

**Password** · Lock the file with a password?
- No password (default) · Send the file as it is. Anyone who gets it can read it.
- Add a password · They need a password you send separately to open it.

- **No password:** give the full path of the HTML page. Done.
- **Add a password:** run `node <this skill>/scripts/protect.mjs <page.html> <page-locked.html>`. It prints a generated password and writes one HTML file that opens in any browser and asks for it. Nothing is uploaded. Tell them: *"Send the file and the password by different routes (for example, the file by email and the password in a chat). The title stays visible; everything else is locked. It doesn't expire: anyone with both can open it."* Show the password once. Never save it to a file. If `node` isn't available, say so and give the unlocked file instead.

## Connected tool

Write the report into the tool with its own tools (a page, a canvas, a document), read it back, and give the link. Say who can see it, as the tool reports it. Never change sharing or access settings unless they ask.

## Feedback

When feedback comes back, record who said what, update the document where the evidence supports it, and keep disagreements visible. Feedback doesn't approve building anything. Return to the lesson step you came from.
