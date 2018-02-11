const webpack = require("webpack")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const StaticSiteGeneratorPlugin = require("static-site-generator-webpack-plugin")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin
const HappyPack = require("happypack")
const { resolve } = require("path")
const { puns } = require("./data")

module.exports = {
  entry: "./index.js",
  output: {
    path: resolve(__dirname, ".."),
    publicPath: "/css-puns/",
    filename: "[name].[chunkhash].js",
    libraryTarget: "umd"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader?cacheDirectory"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["css-puns"], {
      root: resolve(__dirname, "../.."),
      exclude: [".git", "_assets", "_src", "OLD_COPY", ".nojekyll"],
      verbose: true
    }),
    // new HappyPack({
    //   loaders: ["babel-loader?cacheDirectory"],
    //   threads: 1
    // }),
    new StaticSiteGeneratorPlugin({
      paths: ["/", ...puns.map(pun => "/" + pun.slug)],
      globals: { window: { navigator: {} } }
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
    // new BundleAnalyzerPlugin({
    //   analyzerMode: "static",
    //   reportFilename: "report.html",
    //   openAnalyzer: true
    // })
  ]
}
