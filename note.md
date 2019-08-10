# Webpack 4.0 学习笔记

## 第二章
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

## 第三章

- npm install file-loader -D 处理静态资源的打包

````javascript
rules: [{
  test: /\.jpg$/,
  use: {
    loader: 'file-loader'
  }
}]
````    







