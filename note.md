# **Webpack 4.0 学习笔记**

## **第二章**
- npm install 安装项目依赖包  

- npm init 配置完后有package.json
- npm init -y 默认配置
- npm install webpack webpack-cli -g 全局安装（不推荐）
- webpack -v 查看版本号
- npm uninstall webpack webpack-cli -g 卸载全局安装
- npm install webpack-cli --save-dev 与 npm install webpack-cli -D 等价
- npx webpack -v 局部安装后用npx命令运行webpack
- npm info webpack 查看的webpack版本信息
- npm install webpack@4.x webpack-cli -D 安装特别版本
- npx webpack --config xxx.js 把xxx.js当作webpack.config.js配置文件打包

## **第三章**

- loader 图片篇
  >file-loader , url-loader 
  - npm install file-loader -D 

  - file-loader 处理静态资源的打包

  ```javascript
  module: {
    rules: [{
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'file-loader',
        options: {
          // placeholder 占位符
          name: '[name]_[hash].[ext]',
          outputPath: 'images/'
        }
      }
    }]
  },
  ```

  - npm install url-loader -D
  >url-loader 依赖于 file-loader，如果不安装 file-loader，会报错误
  
  ```javascript
  rules: [{
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          // placeholder 占位符
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limit: 12.6*1024
        }
      }
    }]
  ```
- loader 样式篇 
  >style-loader , css-loader , sass-loader , postcss-loader 
  - npm install style-loader css-loader -D
  
  - npm install sass-loader node-sass --save-dev 使用sass-loader
  - npm i -D postcss-loader
  - 添加各浏览器前缀的兼容性配置
  ```javascript
  rules: [{
      test: /\.scss$/,     
      // 执行顺序从下到上，从右到左
      use: ['style-loader','css-loader','sass-loader', 'postcss-loader']
    }]
  ```
  - npm install autoprefixer --save
  >*项目根目录下postcss.config.js的配置如下*
  ```javascript
  module.exports = {
    plugins: [
      require('autoprefixer')({
        browsers: [
          // 加这个后可以出现额外的兼容性前缀
          "> 0.01%"
        ]
      })
    ]
  }
  ```
  - 打包字体图标
  ```javascript
  {
    test: /\.(eot|ttf|svg|woff)$/,
    use: {
      loader: 'file-loader'
    }
  },
  ```






