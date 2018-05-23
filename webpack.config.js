const path = require("path");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;
const PeerDepsExternalsPlugin = require("peer-deps-externals-webpack-plugin");

module.exports = {
  entry: "./source/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    library: "semantic-ui-wordpress-components",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  plugins: [
    new PeerDepsExternalsPlugin()
    // new BundleAnalyzerPlugin({
    //   analyzerMode: "static",
    //   reportFilename: "report.html"
    // })
  ],
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          babelrc: false,
          presets: ["es2015", "react"]
        }
      }
    ]
  }
};
