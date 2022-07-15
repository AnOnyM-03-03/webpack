const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //для создания html файла
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // для удаления файлов при изменении их

module.exports = {
   context: 'src',
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
         template: './src/index.html', //откуда взять страницу для отображения
      }),
      new CleanWebpackPlugin(),
   ],
};
