# Changesets

Every change to a skill gets a changeset: run `bunx changeset`, pick patch / minor / major, and write one line about what changed for users. Commit the generated file with your change.

On every push to `main` that has pending changesets, the Release workflow releases straight away: it bumps the version in `package.json` and all three plugin manifests, updates `CHANGELOG.md`, commits that to `main` as "chore: release vX.Y.Z", tags it and creates the GitHub release. There's no version PR to merge.
