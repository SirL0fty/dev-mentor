// Changelog lines from @changesets/changelog-github, without thanking the
// maintainers for their own changes. Other contributors are still thanked.

const github = require("@changesets/changelog-github").default;

const MAINTAINERS = ["SirL0fty"];

const thanks = (login) => ` Thanks [@${login}](https://github.com/${login})!`;

module.exports = {
  async getReleaseLine(changeset, type, options) {
    let line = await github.getReleaseLine(changeset, type, options);
    for (const login of MAINTAINERS) line = line.replace(thanks(login), "");
    return line;
  },
  getDependencyReleaseLine: github.getDependencyReleaseLine,
};
