## 构建工具的开发日志
- 把tasks分开后一直报错，gulpfile找不到其他task，可能module.exports存在问题（环境），因此暂时把所有的tasks写在gulpfile中。
- 功能：compless编译less并压缩成.min.css，生成map
- 功能：copyres复制资源目录下的内容到dist目录下
- 功能：imagemin压缩图片资源
- 功能：server监视source的变动，已发生变动就执行compless命令，browserSync监视dist，一有变动实时响应到浏览器。