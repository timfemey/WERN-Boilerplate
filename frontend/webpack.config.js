const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const outputDir = "dist";

module.exports = {
  entry: ["babel-polyfill", "./index.js"],
  output: {
    path: path.join(__dirname, outputDir),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|woff|jpeg|jpg|woff2|eot|ttf|svg)$/,
        loader: "url-loader",
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  devServer: {
    port: 5000,
    open: true,
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
