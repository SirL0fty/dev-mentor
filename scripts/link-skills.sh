#!/usr/bin/env bash
# Symlink this repo's skills into ~/.agents/skills and ~/.claude/skills,
# so edits here are live in your assistant without `npx skills update`.
#
#   scripts/link-skills.sh           link every skill (backs up installed copies)
#   scripts/link-skills.sh --unlink  remove the links and restore the backups
#
# While linked, don't run `npx skills update`: it would write through the
# links into this repo. Unlink first, or reinstall with `npx skills add`.

set -euo pipefail

repo="$(cd "$(dirname "$0")/.." && pwd)"
targets=("$HOME/.agents/skills" "$HOME/.claude/skills")
backup_root="$HOME/.agents/.dev-mentor-backup"

unlink_mode=false
[[ "${1:-}" == "--unlink" ]] && unlink_mode=true

for skill_dir in "$repo"/skills/*/; do
  name="$(basename "$skill_dir")"
  for target in "${targets[@]}"; do
    dest="$target/$name"
    backup="$backup_root/$(basename "$(dirname "$target")")/$name"

    if $unlink_mode; then
      if [[ -L "$dest" && "$(readlink "$dest")" == "$repo/skills/$name" ]]; then
        rm "$dest"
        if [[ -e "$backup" || -L "$backup" ]]; then
          mv "$backup" "$dest"
          echo "restored $dest"
        else
          echo "unlinked $dest"
        fi
      fi
      continue
    fi

    mkdir -p "$target"
    if [[ -L "$dest" && "$(readlink "$dest")" == "$repo/skills/$name" ]]; then
      continue
    fi
    if [[ -e "$dest" || -L "$dest" ]]; then
      mkdir -p "$(dirname "$backup")"
      rm -rf "$backup"
      mv "$dest" "$backup"
      echo "backed up $dest -> $backup"
    fi
    ln -s "$repo/skills/$name" "$dest"
    echo "linked $dest"
  done
done

$unlink_mode && rm -rf "$backup_root" 2>/dev/null || true
echo "Done. Start a new session in your assistant to pick up the changes."
