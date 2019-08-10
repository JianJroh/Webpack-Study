// ES module 模块引入方式
//CommonJs
// CMD
// ADM
// import Header from './header'
// import Sidebar from './sidebar'
// import Content from './content'

var Header = require('./header.js')
var Sidebar = require('./sidebar.js')
var Content = require('./content.js')
var avatar = require('./avatar.jpg')

console.log(avatar)

new Header();
new Sidebar();
new Content();