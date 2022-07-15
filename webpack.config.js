const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 

module.exports = {
   mode: 'development',
   entry: {
      main: './src/index.js',
      analytics: './src/analytics.js',
   },
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html', 
      }),git remote add origin https://github.com/AnOnyM-03-03/webpack.git
      new CleanWebpackPlugin(),
   ],
};
