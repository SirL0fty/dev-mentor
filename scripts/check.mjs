#!/usr/bin/env node
// Repo checks run in CI and by `npm run check`:
// skill headers parse, names match folders, metadata parses,
// manifests share one version, relative links resolve, README lists every skill.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import { parse } from "yaml";

const repo = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const fail = (msg) => errors.push(msg);

// Skills
const skills = readdirSync(join(repo, "skills"), { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

for (const name of skills) {
  const file = `skills/${name}/SKILL.md`;
  const text = readFileSync(join(repo, file), "utf8");
  const header = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!header) {
    fail(`${file}: missing --- header`);
    continue;
  }
  let meta;
  try {
    meta = parse(header[1]);
  } catch (e) {
    fail(`${file}: header is not valid YAML (a ": " in the description?) ${e.message.split("\n")[0]}`);
    continue;
  }
  if (meta?.name !== name) fail(`${file}: name is "${meta?.name}", folder is "${name}"`);
  if (typeof meta?.description !== "string" || !meta.description.trim()) fail(`${file}: missing description`);
  else if (meta.description.length > 1024) fail(`${file}: description is ${meta.description.length} characters (max 1024)`);

  const yamlFile = `skills/${name}/agents/openai.yaml`;
  if (existsSync(join(repo, yamlFile))) {
    try {
      parse(readFileSync(join(repo, yamlFile), "utf8"));
    } catch (e) {
      fail(`${yamlFile}: not valid YAML ${e.message.split("\n")[0]}`);
    }
  }
}

// Versions
try {
  execFileSync("node", [join(repo, "scripts/sync-version.mjs"), "--check"], { stdio: "pipe" });
} catch (e) {
  fail(String(e.stderr).trim());
}

// README lists every skill
const readme = readFileSync(join(repo, "README.md"), "utf8");
for (const name of skills) {
  if (!readme.includes(`(skills/${name}/SKILL.md)`)) fail(`README.md: no link to skills/${name}/SKILL.md`);
}

// Relative links in Markdown resolve
const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    if (["node_modules", ".git"].includes(d.name)) return [];
    const p = join(dir, d.name);
    return d.isDirectory() ? walk(p) : p.endsWith(".md") ? [p] : [];
  });

for (const file of walk(repo)) {
  const text = readFileSync(file, "utf8").replace(/```[\s\S]*?```/g, "");
  for (const [, target] of text.matchAll(/\]\(([^)\s#]+)(?:#[^)]*)?\)/g)) {
    if (/^[a-z]+:/.test(target) || target.includes("<")) continue;
    if (!existsSync(join(dirname(file), target))) fail(`${relative(repo, file)}: broken link ${target}`);
  }
}

if (errors.length) {
  console.error(errors.map((e) => `✗ ${e}`).join("\n"));
  process.exit(1);
}
console.log(`✓ ${skills.length} skills checked, versions in sync, links resolve.`);
