var path = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    firstEntry: "./first.js",
    secondEntry: "./second.js",
  },
  output: {
    path: path.join(
      __dirname,
      "dist",
      process.env.SKIP_TEMPLATE_TEMPLATE
        ? "skip-template-template"
        :  "template-template"
    ),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: process.env.SKIP_TEMPLATE_TEMPLATE
        ? "first.html"
        : "[name].html",
      filename: "[name].html",
    }),
  ],
};
