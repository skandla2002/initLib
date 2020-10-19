// const webpack = require("webpack");
const path = require("path");

// --mode, --entry, --output 세 개 옵션만 사용하면 코드를 묶을 수 있다
module.exports = {
  //   entry: {
  //     index: "src/index.js",
  //     // home: "home.js",
  //     // about: "about.js",
  //   },
  //   entry: {
  //     main: "./src/index.js",
  //   },
  //   output: {
  //     filename: "bundle.js",
  //     path: path.resolve("./dist"),
  //   },
  //   output: {
  //     path: path.resolve(__dirname, "dist"),
  //     filename: "[name].[chunkhash].js",
  //   },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.js$/,
  //         use: "babel-loader",
  //       },
  //     ],
  //   },
  //   optimization: {
  //     splitChunks: {
  //       cacheGroups: {
  //         commons: {
  //           test: /[\\/]node_modules[\\/]/,
  //           name: "vendors",
  //           chunks: "all",
  //         },
  //       },
  //     },
  //   },
  //   mode: "development",
};
