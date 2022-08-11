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
    - [4.打包](#4打包)
  - [处理 less 资源](#处理-less-资源)
    - [1.下载包](#1下载包-1)
    - [2.配置](#2配置)
    - [3.引入](#3引入)
  - [处理 sass 资源](#处理-sass-资源)
    - [1.安装](#1安装)
    - [2.配置](#2配置-1)
    - [3.引入](#3引入-1)
  - [处理 styl 资源](#处理-styl-资源)
    - [1.安装](#1安装-1)
    - [2.配置](#2配置-2)
    - [3.引入](#3引入-2)
- [处理图片](#处理图片)
    - [配置](#配置)
- [配置输出文件路径](#配置输出文件路径)
- [清空上一次打包内容](#清空上一次打包内容)
- [处理字体图标资源](#处理字体图标资源)
  - [引入](#引入)
  - [配置字体文件输出路径](#配置字体文件输出路径)
- [配置其他资源](#配置其他资源)
- [处理 js 资源](#处理-js-资源)
  - [1. 配置文件](#1-配置文件)
  - [2. 具体配置](#2-具体配置)
  - [3. 在 webpack 中使用](#3-在-webpack-中使用)
- [Babel](#babel)
  - [1. 配置文件](#1-配置文件-1)
  - [2. 具体配置](#2-具体配置-1)
  - [3. 在 Webpack 中使用](#3-在-webpack-中使用-1)
- [处理 Html 资源](#处理-html-资源)
  - [1.下载包](#1下载包-2)
  - [2.配置](#2配置-3)
  - [3.修改index.html](#3修改indexhtml)
  - [4.运行指令](#4运行指令)
- [开发服务器&自动化](#开发服务器自动化)
  - [1.下载包](#1下载包-3)
  - [2.配置](#2配置-4)
  - [3.运行命令](#3运行命令)
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
### 4.打包
1. 可以在 packpage.json 中配置 "build": "webpack"
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
```
运行 
```
npm run build
```
2. 直接运行
```
npx webpack
```

## 处理 less 资源
### 1.下载包
```
npm i less-loader less -D
```
### 2.配置
在 webpack 里面配置 module 的 rules
```javascript
{
    test: /\.less$/i,
    use: [
    // compiles Less to CSS
    "style-loader",
    "css-loader",
    "less-loader", // 将less文件编译为css文件
    ],
},
```
### 3.引入
```JavaScript
import './less/index.less'
```
配置好运行即可

## 处理 sass 资源
### 1.安装
```
npm i sass-loader sass -D
```
### 2.配置
```javascript
 {
    test: /\.s[ac]ss$/i,
    use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
    ],
},
```
### 3.引入
在入口文件 main.js 引入
```javascript
import './sass/index.sass'
import './sass/index.scss'
```
即可运行
## 处理 styl 资源
### 1.安装
```
npm i stylus stylus-loader -D
```
### 2.配置
在 webpack.config.js 配置
```javascript
{
    test: /\.styl$/i,
    use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "stylus-loader", // 将 stylus 编译成css文件
    ],
},
```
### 3.引入
在入口文件 引入文件
```JavaScript
import './stylus/index.styl'
```
运行即可

# 处理图片
将规定大小的图片 进行base64转换
### 配置
在 webpack.config.js module下 rules
```javascript
{
    test: /\.(png|jpe?g|gif|webp|svg)$/,
    type: 'asset',
    parser: {
        dataUrlCondition: {
            // 小于 10kb 的图片转base64
            // 有点：减少请求数量 缺点：体积会更大
            maxSize: 10 * 1024 // 10kb
        }
    }
}
```
运行即可
# 配置输出文件路径
1. 配置 js 输出路径
```javascript
output: {
    // path 所有文件输出路径
    // __dirname nodejs的变量 表示当前文件的文件夹目录
    path: path.resolve(__dirname, './dist'), // 绝对路径
    // 文件名
    filename: 'static/js/main.js'
},
```
2. 图片文件配置
```javascript
{
    test: /\.(png|jpe?g|gif|webp|svg)$/,
    type: 'asset',
    parser: {
        dataUrlCondition: {
            // 小于 10kb 的图片转base64
            // 有点：减少请求数量 缺点：体积会更大
            maxSize: 10 * 1024 // 10kb
        }
    },
    generator: {
        // 输出图片名称
        filename: 'static/images/[hash][ext][query]'
    }
}
```
[hash:10] hash值只取10位 [ext]文件拓展名

# 清空上一次打包内容
```javascript
output: {
    // path 所有文件输出路径
    // __dirname nodejs的变量 表示当前文件的文件夹目录
    path: path.resolve(__dirname, './dist'), // 绝对路径
    // 文件名
    filename: 'js/main.js',
    // 自动清空上一次打包内容
    // 原理：在打包前，将path 整个目录内容清空，在进行打包
    clean:true,
}
```
# 处理字体图标资源
## 引入
1. 在css中声明
```css
@font-face {
    font-family: 'iconfont';
    src: url("../fonts/iconfont.eot");
    src: url("../fonts/iconfont.eot?#iefix") format('embedded-opentype'),
    url("../fonts/iconfont.woff") format('woff'),
    url("../fonts/iconfont.ttf") format('truetype'),
    url("../fonts/iconfont.svg#iconfont") format('svg');
}
```
2. 在入口文件中引入字体 CSS文件 即可
```javascript
import './font/iconfont.css'
```
## 配置字体文件输出路径
在 webpack.config.js 文件下
```javascript
module: {
    rules: [
        {
            test: /\.(ttf|woff2?)$/,
            type: 'asset/resource',
            generator: {
                // 输出字体名称
                filename: 'static/mida/[hash:10][ext][query]'
            }
        }
    ]
}
```
# 配置其他资源 
处理其他的资源配置  在 webpack.config.js
```javascript
module: {
    rules: [
        {
            test: /\.(ttf|woff2?|mp3|mp4|avi)$/,
            type: 'asset/resource',
            generator: {
                // 输出字体名称
                filename: 'static/mida/[hash:10][ext][query]'
            }
        }
    ]
}
```
# 处理 js 资源
eslint
## 1. 配置文件
配置文件与很多种写法
- `eslint.*` 新建文件，位于根目录下
  - `.eslintrc`
  - `.eslint.js`
  - `.eslint.json`

- `package.json` 中 `eslintConfig` 不需要创建文件，在原有的基础上写

ESlint 会查找和自动读取它们，所以配置上述文件只需要存在一个即可

## 2. 具体配置
以 `.eslint.js` 为例
```javascript
module.exports = {
    // 解析选项
    parseOptions: {},
    // 具体检查规则
    rules: {},
    // 继承其他规则
    extends:[],
    // ...
}
```
1. parseOptions 解析选项
```javascript
parseOptions: {
    ecmaVersion: 6, // ES 语法版本
    sourceType: "modlue", // ES 模块化
    ecmaFeatures: { // ES 其他特性
        jsx: true // 如果是 react 项目
    }
}
```
2. rules 具体规则
   - `off` 或 0 - 关闭规则
   - `warn` 或 1 - 开启规则，使用警告级别的错误：`warn`(不会导致程序退出)
   - `error` 或 2 - 开启规则，使用错误级别的错误：`error`(当触发的时候程序会退出)
```javascript
rules: {
    semi: "error", // 静止使用分号
    'array-callback-return': 'warn',// 强制数组方法的回调函数中有 return 语句，否则报错
    'default-case': [
        'warn', // 要求 switch 语句中有 default 分支，否则警告
        {commentPatten: '^no default$'} // 允许在最后注释 no default,就不会有警告了
    ],
    eqeqeq: {
        'warn', // 强制使用 === 和 !== , 否则警告
        'smart' // 除了少数情况下不会有警告
    }
}
```
更多规则详情见[规则文档](http://eslint.cn/docs/rules/)

3. extends 继承
   - [官方的规则](https://eslint.bootcss.com/docs/rules/)
   - [Vue Cli官方规则](https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-plugin-eslint)
   - [React Cli官方规则](https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-plugin-eslint)

```javascript
// 例如在React项目中，我们可以这样写配置
module.exports = {
  extends: ["react-app"],
  rules: {
    // 我们的规则会覆盖掉react-app的规则
    // 所以想要修改规则直接改就是了
    eqeqeq: ["warn", "smart"],
  },
};
```
## 3. 在 webpack 中使用

1. 下载包
```
npm i eslint-webpack-plugin eslint -D
```
2. 然后把插件添加到你的 webpack 配置。例如：
```js
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
// 插件
plugins: [
    // plugins的配置
    new ESLintPlugin({
        // 指定检查文件的根目录
        context: path.resolve(__dirname, "src"),
    })
],
```
3. 运行指令
```
npx webpack
```
4. Vscode Eslint 插件

打开 VSCode，下载 Eslint 插件，即可不用编译就能看到错误，可以提前解决

但是此时就会对项目所有文件默认进行 Eslint 检查了，我们 dist 目录下的打包后文件就会报错。但是我们只需要检查 src 下面的文件，不需要检查 dist 下面的文件。

所以可以使用 Eslint 忽略文件解决。在项目根目录新建下面文件:

- .eslintignore
```
# 忽略dist目录下所有文件
dist
```
# Babel
JavaScript 编译器。

主要用于将 ES6 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中

## 1. 配置文件
配置文件由很多种写法：
- `babel.config.*`：新建文件，位于项目根目录
  - babel.config.js
  - babel.config.json
- `.babelrc.*`：新建文件，位于项目根目录
  - `.babelrc`
  - `.babelrc.js`
  - `.babelrc.json`
- `package.json` 中 `babel` 不需要创建文件，在原有文件基础上写
Babel 会查找和自动读取它们，所以以上配置文件只需要存在一个即可

## 2. 具体配置
我们以 babel.config.js 配置文件为例：
```js
module.exports = {
  // 预设
  presets: [],
}
```
1. presets 预设
简单理解：就是一组 Babel 插件, 扩展 Babel 功能

- `@babel/preset-env`: 一个智能预设，允许您使用最新的 JavaScript。
- `@babel/preset-react`：一个用来编译 React jsx 语法的预设
- `@babel/preset-typescript`：一个用来编译 TypeScript 语法的预设

## 3. 在 Webpack 中使用
1. 下载包
```
npm i babel-loader @babel/core @babel/preset-env -D
```
2. 定义 Babel 配置文件
- babel.config.js 
```js
module.exports = {
 // 智能预设，能够编译 ES6语法
  presets: ["@babel/preset-env"],
};
```
3. 配置
- 在 webpack.config.js
```js
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        // options: {
        //   presets: ['@babel/preset-env']
        // }
      }
    }
  ]
}
```
4. 运行指令
```
npx webpack
```
# 处理 Html 资源
## 1.下载包
```
npm i html-webpack-plugin -D
```
## 2.配置
```js
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
     // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
      template: path.resolve(__dirname, "public/index.html"),
  })],
};
```
## 3.修改index.html
去掉引入的 js 文件，因为 HtmlWebpackPlugin 会自动引入
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>webpack5</title>
  </head>
  <body>
    <h1>Hello Webpack5</h1>
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
    <div class="box4"></div>
    <div class="box5"></div>
    <i class="iconfont icon-arrow-down"></i>
    <i class="iconfont icon-ashbin"></i>
    <i class="iconfont icon-browse"></i>
  </body>
</html>
```
## 4.运行指令
```
npx webpack
```
# 开发服务器&自动化
## 1.下载包
```
npm i webpack-dev-server -D
```
## 2.配置
```js
module.exports = {
   // 开发服务器
  devServer: {
    host: "localhost", // 启动服务器域名
    port: "3000", // 启动服务器端口号
    open: true, // 是否自动打开浏览器
  },
}
```
## 3.运行命令
```
npx webpack serve
```