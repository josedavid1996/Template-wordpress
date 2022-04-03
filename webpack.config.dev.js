const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  //Configuracion del archivo js, donde se define la entrada y la salida
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "[name][contenthash].js",
  },
  //Modo del archivo
  mode: "development",
  watch: true,
  resolve: {
    extensions: [".js"],
  },
  module: {
    // Loder de babel
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      //Loader para css y sass
      {
        test: /\.css|.sass|.scss$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      //Optimizacion de imagenes
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
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    //Mover archivos
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "./images"),
          to: "assets/images",
        },
      ],
    }),
  ],
};
