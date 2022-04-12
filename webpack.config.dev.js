const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  //Configuracion del archivo js, donde se define la entrada y la salida
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
  },
  //Modo del archivo
  mode: "development",
  // watch: true,
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
    new MiniCssExtractPlugin({ filename: "style.css" }),
    //Mover archivos
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "./images"),
          to: "../dist/assets/images",
        },
        {
          from: path.resolve(__dirname, "src", "./header.php"),
          to: "../dist/header.php",
        },
        {
          from: path.resolve(__dirname, "src", "./footer.php"),
          to: "../dist/footer.php",
        },
        {
          from: path.resolve(__dirname, "src", "./functions.php"),
          to: "../dist/functions.php",
        },
        {
          from: path.resolve(__dirname, "src", "./screenshot.png"),
          to: "../dist/screenshot.png",
        },
      ],
    }),
  ],
};
