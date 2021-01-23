require("dotenv").config();
const path = require('path');

module.exports = {
  baseUrl: process.env.GITHUB_PAGES ? "/air-theory" : "",
  assetPrefix: process.env.GITHUB_PAGES ? "/air-theory" : "",
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
