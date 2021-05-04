const path = require("path");

const mode = "development";

module.exports = {
  mode,
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public")
  },

  module: {
    rules: [{
      loader: "babel-loader",
      test: /\.js$|jsx/,
      exclude: /node_modules/
    }]
  },

  devServer: {
    contentBase: path.join(__dirname, "public")
  }
}