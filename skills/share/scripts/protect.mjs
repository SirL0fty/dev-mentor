#!/usr/bin/env node
// Wrap an HTML page in a password-protected HTML file that opens in any browser.
//
//   node protect.mjs <in.html> <out.html>
//
// Prints the generated password on stdout. The page is encrypted with
// AES-256-GCM using a key derived from the password (PBKDF2-SHA256), and
// decrypted in the browser with Web Crypto. Nothing is uploaded anywhere.

import { readFileSync, writeFileSync } from "node:fs";
import { webcrypto as crypto } from "node:crypto";

const [input, output] = process.argv.slice(2);
if (!input || !output) {
  console.error("Usage: node protect.mjs <in.html> <out.html>");
  process.exit(2);
}

const ITERATIONS = 310000;
const alphabet = "abcdefghjkmnpqrstuvwxyz23456789";
const password = Array.from(crypto.getRandomValues(new Uint8Array(20)), (b) => alphabet[b % alphabet.length])
  .join("")
  .replace(/(.{5})(?!$)/g, "$1-");

const salt = crypto.getRandomValues(new Uint8Array(16));
const iv = crypto.getRandomValues(new Uint8Array(12));
const baseKey = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveKey"]);
const key = await crypto.subtle.deriveKey(
  { name: "PBKDF2", salt, iterations: ITERATIONS, hash: "SHA-256" },
  baseKey,
  { name: "AES-GCM", length: 256 },
  false,
  ["encrypt"],
);
const ciphertext = new Uint8Array(
  await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(readFileSync(input, "utf8"))),
);
const b64 = (bytes) => Buffer.from(bytes).toString("base64");
const title = (readFileSync(input, "utf8").match(/<title>([^<]*)<\/title>/i)?.[1] ?? "Shared page").trim();

writeFileSync(
  output,
  `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} (locked)</title>
<style>
  :root { --bg: #f7f7f5; --card: #fff; --text: #1d1d1b; --muted: #6b6b66; --accent: #3b5bdb; --bad: #c92a2a; }
  @media (prefers-color-scheme: dark) { :root { --bg: #161615; --card: #22221f; --text: #ededea; --muted: #a3a39c; --accent: #91a7ff; --bad: #ff8787; } }
  body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: var(--bg); color: var(--text);
         font: 16px/1.5 system-ui, -apple-system, "Segoe UI", sans-serif; padding: 16px; box-sizing: border-box; }
  form { background: var(--card); padding: 28px; border-radius: 14px; max-width: 380px; width: 100%;
         box-shadow: 0 8px 30px rgb(0 0 0 / 0.08); }
  h1 { font-size: 1.15rem; margin: 0 0 4px; } p { margin: 0 0 18px; color: var(--muted); }
  input, button { width: 100%; box-sizing: border-box; font: inherit; padding: 10px 12px; border-radius: 8px; }
  input { border: 1px solid var(--muted); background: transparent; color: var(--text); margin-bottom: 10px; }
  button { border: 0; background: var(--accent); color: #fff; cursor: pointer; }
  #err { color: var(--bad); margin: 10px 0 0; min-height: 1.5em; }
</style>
</head>
<body>
<form id="f">
  <h1>${title}</h1>
  <p>This page is locked. Enter the password you were sent separately.</p>
  <input id="pw" type="password" autocomplete="off" autofocus aria-label="Password" placeholder="Password">
  <button>Unlock</button>
  <p id="err" role="alert"></p>
</form>
<script>
const data = { salt: "${b64(salt)}", iv: "${b64(iv)}", ct: "${b64(ciphertext)}", iterations: ${ITERATIONS} };
const bytes = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
document.getElementById("f").addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const pw = document.getElementById("pw").value.trim();
    const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(pw), "PBKDF2", false, ["deriveKey"]);
    const key = await crypto.subtle.deriveKey({ name: "PBKDF2", salt: bytes(data.salt), iterations: data.iterations, hash: "SHA-256" },
      base, { name: "AES-GCM", length: 256 }, false, ["decrypt"]);
    const html = new TextDecoder().decode(await crypto.subtle.decrypt({ name: "AES-GCM", iv: bytes(data.iv) }, key, bytes(data.ct)));
    document.open(); document.write(html); document.close();
  } catch {
    document.getElementById("err").textContent = "That password didn't work. Check it and try again.";
  }
});
</script>
</body>
</html>
`,
);
console.log(password);
