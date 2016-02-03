KISSY.add('slide-nav/index',["slide-nav/header/header","slide-nav/article/article"],function(S ,require, exports, module) {
 //初始化header模块
var header = require('slide-nav/header/header');
header.init();

//初始化article模块
var article = require('slide-nav/article/article');
article.init();
});