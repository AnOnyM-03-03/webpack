const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpuckPlugin = require('copy-webpack-plugin');

module.exports = {
   context: path.resolve(__dirname, 'src'),
   mode: 'development',
   entry: {
      main: './index.js',
      analytics: './analytics.js',
   },
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
   resolve: {
      extensions: ['.js', '.jpg', '.css'],
      alias: {
         '@': path.resolve(__dirname, 'src'),
      },
   },
   optimization: {
      splitChunks: {
         chunks: 'all',
      },
   },
   devServer: {
      port: 3000,
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './index.html',
      }),
      new CleanWebpackPlugin(),
      new CopyWebpuckPlugin({
         patterns: [
            {
               from: path.resolve(__dirname, 'src/favicon.ico'),
               to: path.resolve(__dirname, 'dist'),
            },
         ],
      }),
   ],
   module: {
      rules: [
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|jpg|gif|svg)$/,
            type: 'asset/resource',
         },
         {
            test: /\.(ttf|woff|woff2|eot)$/,
            type: 'asset/resource',
         },
      ],
   },
};
