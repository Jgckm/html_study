- [安装](#安装)
- [基本使用](#基本使用)
  - [查看输出文件](#查看输出文件)
  - [小结](#小结)
- [五大核心概念](#五大核心概念)
- [基本配置](#基本配置)
- [开发模式介绍](#开发模式介绍)
- [处理样式资源](#处理样式资源)
  - [介绍](#介绍)
  - [处理 Css资源](#处理-css资源)
    - [1.下载包](#1下载包)
    - [2.引入](#2引入)
    - [3.配置](#3配置)
# 安装
安装使用 npm 安装 webpack和 webpack-cli -D表示安装在生产环境
```
npm i webpack webpack-cli -D
```
# 基本使用
在终端命令行执行 npx 是可以执行 node_modules 中 bin 目录下的文件  mode 表示模式 npx webpack 是运行本地安装的 webpack 包的
```
npx webpack ./src/main.js --mode=development # development 开发模式  

npx webpack ./src/main.js --mode=production  # production 生产模式
```
## 查看输出文件
webpack 默认输出是在 dist 目录下

## 小结
- `webpack` 本身功能较少，只能处理`js`资源，一旦遇到`css`等其他的资源就会报错，所以要主要学习`webpack`如何处理其他资源

# 五大核心概念

1.entry （入口）  
指示webpack从哪个文件开始打包

2.output （输出）  
指示webpack 打包完成后的输出文件到哪里，如何命名等

3.loader (加载器)  
webpack本身只能处理 js、json等资源，其他资源需要借助loader，webpack才能解析

4.plugins (插件)  
拓展webpack的功能

5.mode (模式)
- 开发者模式：development
- 生产模式：production

# 基本配置
在项目的目录下创建文件： webpack.config.js
```JavaScript
const path = require('path') // nodejs 核心模块 专门处理路径问题


module.exports = {
    // 入口
    entry:"./src/main.js", // 相对路径
    // 输出
    output: {
        // 文件输出路径
        // __dirname nodejs的变量 表示当前文件的文件夹目录
        path: path.resolve(__dirname,'./dist'), // 绝对路径
        // 文件名
        filename: 'main.js'
    },
    // 加载器
    module: {
        rules: [
            {
                // loder的配置
                test: /\.css$/, // 检测 .css结尾的文件  才可以
                use: [  
                    // use的执行顺序是 从右到左（从上到下）
                    "style-loader", // 将js中的 css通过创建style标签添加html文件中生效
                    "css-loader" // 将css资源编译成commonjs的模块到js中
                ]

            }
        ]
    },
    // 插件
    plugins: [
        // plugins的配置
    ],
    // 模式
    mode: "development"
}
```
# 开发模式介绍
开发模式顾名思义就是开发代码时使用的模式。

这个模式下主要做了两件事：

1.代码的编译 是浏览器能够识别运行

开发室有样式资源、字体图标、图片资源、html资源等，webpack默认都不能处理这些资源，所以要加载配置来编译这些资源  

2.代码质量检查，树立代码规范

体检检测代码的一些隐患，让代码运行时能够更健壮。  
提前加测代码格式和规范，统一团队编码风格，让代码更优雅美观

# 处理样式资源
使用webpack处理 css、sass、less、styl等样式资源

## 介绍
webpack本身是不能识别样式资源的，所以要借助 loader 来帮助 webpack 来解析样式资源

## 处理 Css资源
### 1.下载包
```
npm i css-loader style-loader -D
```
### 2.引入
在入口文件里引入CSS文件
```javascript
import './css/index.css'
```
### 3.配置
在 webpack.config.js 中给 module 添加配置
```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/, // 检测 .css结尾的文件  才可以
        use: [  // use的执行顺序是 从右到左（从上到下）
            'style-loader', // 将js中的 css通过创建style标签添加html文件中生效
            'css-loader' // 将css资源编译成commonjs的模块到js中
        ]
      }
    ]
  }
}
```