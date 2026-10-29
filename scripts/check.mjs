#!/usr/bin/env node
// Repo checks run in CI and by `bun run check`:
// skill headers parse, names match folders, descriptions follow AGENTS.md,
// SKILL.md stays under 500 lines, metadata parses, manifests share one version,
// relative links resolve, README, guide index and mentor routing list every skill,
// every skill has a guide and loads mentor-style with an identical section.

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
  else {
    const d = meta.description;
    if (d.length > 1024) fail(`${file}: description is ${d.length} characters (max 1024)`);
    if (d.includes("\n")) fail(`${file}: description must be one line`);
    if (!d.trimEnd().endsWith("(Dev Mentor)")) fail(`${file}: description must end with "(Dev Mentor)"`);
  }

  const lines = text.split("\n").length;
  if (lines > 500) fail(`${file}: ${lines} lines; keep SKILL.md under 500 and move detail to references/`);
  if (/\]\(\.\.\/[^)]*SKILL\.md/.test(text) || /\.\.\/(?!assets|scripts|references)[a-z-]+\//.test(text.replace(/```[\s\S]*?```/g, "")))
    fail(`${file}: links to another skill's folder; write call the Skill tool with "name" instead`);

  const yamlFile = `skills/${name}/agents/openai.yaml`;
  if (!existsSync(join(repo, yamlFile))) fail(`${yamlFile}: missing`);
  else {
    try {
      const y = parse(readFileSync(join(repo, yamlFile), "utf8"));
      if (!y?.interface?.display_name?.startsWith("Dev Mentor: ")) fail(`${yamlFile}: display_name should start with "Dev Mentor: "`);
      if (!y?.interface?.short_description) fail(`${yamlFile}: missing short_description`);
    } catch (e) {
      fail(`${yamlFile}: not valid YAML ${e.message.split("\n")[0]}`);
    }
  }
}

// Versions
try {
  execFileSync(process.execPath, [join(repo, "scripts/sync-version.mjs"), "--check"], { stdio: "pipe" });
} catch (e) {
  fail(String(e.stderr).trim());
}

// Every skill has a guide and an index entry; every skill except mentor-style loads it
// with the same "Style and ground rules" section, so the fallback defaults can't drift.
const guideIndex = readFileSync(join(repo, "docs/skills/README.md"), "utf8");
const styleSection = (text) => text.split("## Style and ground rules")[1]?.trim();
const mentorText = readFileSync(join(repo, "skills/mentor/SKILL.md"), "utf8");
const canonical = styleSection(mentorText);
for (const name of skills) {
  if (!existsSync(join(repo, `docs/skills/${name}.md`))) fail(`docs/skills/${name}.md: missing guide`);
  if (!guideIndex.includes(`(${name}.md)`)) fail(`docs/skills/README.md: no link to ${name}.md`);
  if (name === "mentor-style") continue;
  const text = readFileSync(join(repo, `skills/${name}/SKILL.md`), "utf8");
  if (!text.includes('call the Skill tool with "mentor-style"')) fail(`skills/${name}/SKILL.md: doesn't load mentor-style`);
  if (text.includes("## Ground rules")) fail(`skills/${name}/SKILL.md: has its own Ground rules; they belong in mentor-style`);
  if (styleSection(text) !== canonical) fail(`skills/${name}/SKILL.md: "Style and ground rules" section differs from mentor's; keep them identical`);
  if (name !== "mentor" && !mentorText.includes(`| \`${name}\` |`)) fail(`skills/mentor/SKILL.md: routing table has no row for ${name}`);
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
  const text = readFileSync(file, "utf8").replace(/```[\s\S]*?```/g, "").replace(/`[^`\n]*`/g, "");
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
