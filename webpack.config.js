const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "bundle.js",
  },
  mode: "production",
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css|.sass|.scss$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        type: "asset",
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/index.php",
      filename: "./index.php",
    }),
    new MiniCssExtractPlugin({ filename: "style.css" }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "./images"),
          to: "assets/images",
        },
      ],
    }),
  ],
  //Optimizacion de css y js con sus hash
  // optimization: {
  //   minimize: true,
  //   minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  // },
};
