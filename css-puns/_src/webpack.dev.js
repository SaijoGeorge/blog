module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    publicPath: "/css-puns/",
    filename: "bundle.js"
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader?cacheDirectory"
      }
    ]
  }
}
