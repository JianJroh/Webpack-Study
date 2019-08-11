const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  module: {
    rules: [{
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          // placeholder 占位符
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limit: 12.6 * 1024
        }
      }
    }, {
      test: /\.scss$/,
      // 执行顺序从下到上，从右到左
      use: [
        'style-loader',
       {
         loader: 'css-loader',
         options: {
           importLoaders: 2,
          //  modules: true
         }
       }, 
       'sass-loader', 
       'postcss-loader'
      ]
    },
    {
      test: /\.(eot|ttf|svg|woff)$/,
      use: {
        loader: 'file-loader'
      }
    },
  ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}