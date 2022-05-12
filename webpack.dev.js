const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'public'),
    open: true,
    // hot: true,
    // devMiddleware: {
    //   // writeToDisk: true
    // }
  },
  plugins: [
    ...['example1', 'example2'].map(
      (file) =>
        new HtmlWebpackPlugin({
          template: './src/pages/' + file + '.html',
          inject: true,
          chunks: ['index', 'main'],
          filename: './' + file + '.html',
        })
    ),
  ],
})
