#!/usr/bin/env node
// Copies package.json's version into the three plugin manifests.
// Runs as part of `npm run version`, right after `changeset version`.
// With --check it changes nothing and exits 1 if any manifest differs.

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repo = join(dirname(fileURLToPath(import.meta.url)), "..");
const manifests = ["plugin.json", ".claude-plugin/plugin.json", ".cursor-plugin/plugin.json"];
const { version } = JSON.parse(readFileSync(join(repo, "package.json"), "utf8"));
const check = process.argv.includes("--check");
let stale = 0;

for (const file of manifests) {
  const path = join(repo, file);
  const source = readFileSync(path, "utf8");
  const current = JSON.parse(source).version;
  if (current === version) continue;
  if (check) {
    console.error(`${file} is ${current}, package.json is ${version}. Run \`node scripts/sync-version.mjs\`.`);
    stale++;
    continue;
  }
  // Rewrite only the version line, to keep key order and formatting.
  writeFileSync(path, source.replace(/("version"\s*:\s*")[^"]*(")/, `$1${version}$2`));
  console.log(`${file} ${current} -> ${version}`);
}

if (stale) process.exit(1);
if (check) console.log(`All manifests are ${version}.`);
