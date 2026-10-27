# Changesets

Every change to a skill gets a changeset: run `npx changeset`, pick patch / minor / major, and write one line about what changed for users. Commit the generated file with your change.

On push to `main`, the Release workflow collects pending changesets into a "chore: version" pull request that bumps the version in `package.json` and all three plugin manifests and updates `CHANGELOG.md`. Merging it tags the release and creates a GitHub release.
