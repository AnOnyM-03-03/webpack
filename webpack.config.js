const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpuckPlugin = require('copy-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
   const config = {
      splitChunks: {
         chunks: 'all',
      },
   };
   if(isProd){
    config.minimizer = [
        new CssMinimizerPlugin(),
        new TerserPlugin()
    ]
   }
   return config
};

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
   optimization: optimization(),

   devServer: {
      port: 3000,
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './index.html',
         minify: {
            collapseWhitespace: isProd,
         },
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
      new MiniCssPlugin({
         filename: '[name].css',
      }),
   ],
   module: {
      rules: [
         {
            test: /\.css$/,
            use: [
               {
                  loader: MiniCssPlugin.loader,
               },
               'css-loader',
            ],
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
