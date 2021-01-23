require("dotenv").config();
const path = require('path');

module.exports = {
  baseUrl: "/air-theory",
  assetPrefix: "/air-theory",
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
