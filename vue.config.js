const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { ESBuildMinifyPlugin } = require("esbuild-loader");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/homework-5/" : "/",

  lintOnSave: false,

  configureWebpack: {
    optimization: {
      minimizer: [
        new ESBuildMinifyPlugin({
          target: "es2015",
          css: true,
        }),
      ],
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'esbuild-loader',
          options: {
            loader: 'ts',
            target: 'es2015',
          }
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },

    plugins: [
      new MiniCssExtractPlugin(), 
      new BundleAnalyzerPlugin()
    ],

  },

  productionSourceMap: process.env.NODE_ENV != "production",
};