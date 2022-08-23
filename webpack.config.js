const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle[contenthash].js",
    publicPath: "/"
  },
  mode: "development",
  module: {
    rules: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, use: ["babel-loader"]},
      {test: /\.(png|jpg|jpeg|png|gif|woff|woff2)$/, use: ["file-loader"]},
      {test: /\.css$/, use: ["style-loader", "css-loader"] },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: "public/index.html"})
  ],
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devServer: {
    static: { directory: path.join(__dirname, "public") },
    port: 9000,
    open: true,
    historyApiFallback: true
  }
};
