require("dotenv").config();

module.exports = {
  assetPrefix: process.env.GITHUB_PAGES ? "/ashigirl96.github.io" : "",
};