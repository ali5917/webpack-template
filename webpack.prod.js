// webpack.prod.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  performance: {
    hints: false,
  },
  output: {
      publicPath: "./",
  },
});