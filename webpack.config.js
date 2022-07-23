const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
   resolve:{
    extensions: ['.js','.jpg','.css'],
    alias:{
        '@': path.resolve(__dirname, 'src')
    }
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './index.html',
      }),
      new CleanWebpackPlugin(),
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
