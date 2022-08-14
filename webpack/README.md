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
- [生产模式介绍](#生产模式介绍)
  - [生产模式的介绍](#生产模式的介绍)
    - [1. 目录文件](#1-目录文件)
    - [2. 修改 webpack.dev.js](#2-修改-webpackdevjs)
    - [3.修改 webpack.prod.js](#3修改-webpackprodjs)
- [Css处理](#css处理)
  - [提取 Scc 成单独的文件](#提取-scc-成单独的文件)
    - [1.下载包](#1下载包-4)
    - [2. 配置](#2-配置)
    - [3. 运行指令](#3-运行指令)
  - [Css 兼容处理](#css-兼容处理)
    - [1.下载包](#1下载包-5)
    - [2.配置](#2配置-5)
    - [3.控制兼容性](#3控制兼容性)
    - [4.运行指令](#4运行指令-1)
- [Css 压缩](#css-压缩)
  - [1.下载包](#1下载包-6)
  - [2.配置](#2配置-6)
  - [3.运行指令](#3运行指令)
- [总结](#总结)
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

# 生产模式介绍
生产模式是开发完成代码后，我们需要得到代码将来部署上线。

这个模式下我们主要对代码进行优化，让其运行性能更好。

优化主要从两个角度出发:

1. 优化代码的性能
2. 优化代码打包速度

## 生产模式的介绍
我们分别准备两个配置文件来放不同的配置

### 1. 目录文件
```
├── webpack-test (项目根目录)
    ├── config (Webpack配置文件目录)
    │    ├── webpack.dev.js(开发模式配置文件)
    │    └── webpack.prod.js(生产模式配置文件)
    ├── node_modules (下载包存放目录)
    ├── src (项目源码目录，除了html其他都在src里面)
    │    └── 略
    ├── public (项目html文件)
    │    └── index.html
    ├── .eslintrc.js(Eslint配置文件)
    ├── babel.config.js(Babel配置文件)
    └── package.json (包的依赖管理配置文件)
```
### 2. 修改 webpack.dev.js
因为文件目录变了，所以所有绝对路径需要回退一层目录才能找到对应的文件
```js
const path = require("path");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: undefined, // 开发模式没有输出，不需要指定输出目录
    filename: "static/js/main.js", // 将 js 文件输出到 static/js 目录中
    // clean: true, // 开发模式没有输出，不需要清空输出结果
  },
  module: {
    rules: [
      {
        // 用来匹配 .css 结尾的文件
        test: /\.css$/,
        // use 数组里面 Loader 执行顺序是从右到左
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
          },
        },
        generator: {
          // 将图片文件输出到 static/imgs 目录中
          // 将图片文件命名 [hash:8][ext][query]
          // [hash:8]: hash值取8位
          // [ext]: 使用之前的文件扩展名
          // [query]: 添加之前的query参数
          filename: "static/imgs/[hash:8][ext][query]",
        },
      },
      {
        test: /\.(ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "static/media/[hash:8][ext][query]",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除node_modules代码不编译
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new ESLintWebpackPlugin({
      // 指定检查文件的根目录
      context: path.resolve(__dirname, "../src"),
    }),
    new HtmlWebpackPlugin({
      // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
  // 其他省略
  devServer: {
    host: "localhost", // 启动服务器域名
    port: "3000", // 启动服务器端口号
    open: true, // 是否自动打开浏览器
  },
  mode: "development",
};
```
运行开发者模式的指令：
```
npx webpack serve --config ./config/webpack.dev.js
```

### 3.修改 webpack.prod.js
```js
const path = require("path");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "../dist"), // 生产模式需要输出
    filename: "static/js/main.js", // 将 js 文件输出到 static/js 目录中
    clean: true,
  },
  module: {
    rules: [
      {
        // 用来匹配 .css 结尾的文件
        test: /\.css$/,
        // use 数组里面 Loader 执行顺序是从右到左
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
          },
        },
        generator: {
          // 将图片文件输出到 static/imgs 目录中
          // 将图片文件命名 [hash:8][ext][query]
          // [hash:8]: hash值取8位
          // [ext]: 使用之前的文件扩展名
          // [query]: 添加之前的query参数
          filename: "static/imgs/[hash:8][ext][query]",
        },
      },
      {
        test: /\.(ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "static/media/[hash:8][ext][query]",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除node_modules代码不编译
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new ESLintWebpackPlugin({
      // 指定检查文件的根目录
      context: path.resolve(__dirname, "../src"),
    }),
    new HtmlWebpackPlugin({
      // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
  // devServer: {
  //   host: "localhost", // 启动服务器域名
  //   port: "3000", // 启动服务器端口号
  //   open: true, // 是否自动打开浏览器
  // },
  mode: "production",
};
```

运行生产模式的指令
```
npx webpack --config ./config/webpack.prod.js
```
4. 配置运行的指令
为了方便运行不同模式的指令，我们将指令定义在 package.json 中 scripts 里面
```json
// package.json
{
  // 其他省略
  "scripts": {
    "start": "npm run dev",
    "dev": "npx webpack serve --config ./config/webpack.dev.js",
    "build": "npx webpack --config ./config/webpack.prod.js"
  }
}
```
以后使用指令
- 开发模式 `npm statr` 或 `npm run dev`
- 生产模式 `npm buil`

# Css处理
## 提取 Scc 成单独的文件
Css 文件目前被打包到 js 文件中，当 js 文件加载时，会创建一个 style 标签来生成样式

这样对于网站来说，会出现闪屏现象，用户体验不好

我们应该是单独的 Css 文件，通过 link 标签加载性能才好

### 1.下载包
```
npm i mini-css-extract-plugin -D
```
### 2. 配置
- webpack.prod.js
```js
const path = require("path");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "../dist"), // 生产模式需要输出
    filename: "static/js/main.js", // 将 js 文件输出到 static/js 目录中
    clean: true,
  },
  module: {
    rules: [
      {
        // 用来匹配 .css 结尾的文件
        test: /\.css$/,
        // use 数组里面 Loader 执行顺序是从右到左
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.styl$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "stylus-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
          },
        },
        generator: {
          // 将图片文件输出到 static/imgs 目录中
          // 将图片文件命名 [hash:8][ext][query]
          // [hash:8]: hash值取8位
          // [ext]: 使用之前的文件扩展名
          // [query]: 添加之前的query参数
          filename: "static/imgs/[hash:8][ext][query]",
        },
      },
      {
        test: /\.(ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "static/media/[hash:8][ext][query]",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除node_modules代码不编译
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new ESLintWebpackPlugin({
      // 指定检查文件的根目录
      context: path.resolve(__dirname, "../src"),
    }),
    new HtmlWebpackPlugin({
      // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    // 提取css成单独文件
    new MiniCssExtractPlugin({
      // 定义输出文件名和目录
      filename: "static/css/main.css",
    }),
  ],
  // devServer: {
  //   host: "localhost", // 启动服务器域名
  //   port: "3000", // 启动服务器端口号
  //   open: true, // 是否自动打开浏览器
  // },
  mode: "production",
};
```

### 3. 运行指令
```
npm run build
```
## Css 兼容处理
### 1.下载包
```
npm i postcss-loader postcss postcss-preset-env -D
```
### 2.配置
```js
const path = require("path");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


// 处理样的loader
function getStyleLoader(pro) {
    return [
        MiniCssExtractPlugin.loader,
        "css-loader",
        {
            loader: "postcss-loader",
            options: {
                postcssOptions: {
                    plugins: [
                        "postcss-preset-env", // 能解决大多数样式兼容性问题
                    ],
                },
            },
        },
        pro,
    ].filter(Boolean)
}

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "../dist"), // 生产模式需要输出
        filename: "static/js/main.js", // 将 js 文件输出到 static/js 目录中
        clean: true,
    },
    module: {
        rules: [
            {
                // 用来匹配 .css 结尾的文件
                test: /\.css$/,
                // use 数组里面 Loader 执行顺序是从右到左
                use: getStyleLoader()
            },
            {
                test: /\.less$/,
                use: getStyleLoader("less-loader")
            },
            {
                test: /\.s[ac]ss$/,
                use: getStyleLoader("sass-loader")
            },
            {
                test: /\.styl$/,
                use: getStyleLoader("stylus-loader")
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
                    },
                },
                generator: {
                    // 将图片文件输出到 static/imgs 目录中
                    // 将图片文件命名 [hash:8][ext][query]
                    // [hash:8]: hash值取8位
                    // [ext]: 使用之前的文件扩展名
                    // [query]: 添加之前的query参数
                    filename: "static/imgs/[hash:8][ext][query]",
                },
            },
            {
                test: /\.(ttf|woff2?)$/,
                type: "asset/resource",
                generator: {
                    filename: "static/media/[hash:8][ext][query]",
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // 排除node_modules代码不编译
                loader: "babel-loader",
            },
        ],
    },
    plugins: [
        new ESLintWebpackPlugin({
            // 指定检查文件的根目录
            context: path.resolve(__dirname, "../src"),
        }),
        new HtmlWebpackPlugin({
            // 以 public/index.html 为模板创建文件
            // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
            template: path.resolve(__dirname, "../public/index.html"),
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/main.css'
        })
    ],
    // devServer: {
    //   host: "localhost", // 启动服务器域名
    //   port: "3000", // 启动服务器端口号
    //   open: true, // 是否自动打开浏览器
    // },
    mode: "production",
};
```

### 3.控制兼容性
我们可以在 `package.json` 文件中添加 `browserslist` 来控制样式的兼容性做到什么程度。
```json
{
  // 其他省略
  "browserslist": ["ie >= 8"]
}
```
想要知道更多的 `browserslist` 配置，查看 [browserslist](https://github.com/browserslist/browserslist) 文档

以上为了测试兼容性所以设置兼容浏览器 ie8 以上。

实际开发中我们一般不考虑旧版本浏览器了，所以我们可以这样设置：
```json
{
  // 其他省略
  "browserslist": ["last 2 version", "> 1%", "not dead"]
}
```
### 4.运行指令
```
npm run build
```
# Css 压缩
## 1.下载包
```
npm i css-minimizer-webpack-plugin -D
```
## 2.配置
```js
const path = require("path");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// 获取处理样式的Loaders
const getStyleLoaders = (preProcessor) => {
  return [
    MiniCssExtractPlugin.loader,
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            "postcss-preset-env", // 能解决大多数样式兼容性问题
          ],
        },
      },
    },
    preProcessor,
  ].filter(Boolean);
};

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "../dist"), // 生产模式需要输出
    filename: "static/js/main.js", // 将 js 文件输出到 static/js 目录中
    clean: true,
  },
  module: {
    rules: [
      {
        // 用来匹配 .css 结尾的文件
        test: /\.css$/,
        // use 数组里面 Loader 执行顺序是从右到左
        use: getStyleLoaders(),
      },
      {
        test: /\.less$/,
        use: getStyleLoaders("less-loader"),
      },
      {
        test: /\.s[ac]ss$/,
        use: getStyleLoaders("sass-loader"),
      },
      {
        test: /\.styl$/,
        use: getStyleLoaders("stylus-loader"),
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
          },
        },
        generator: {
          // 将图片文件输出到 static/imgs 目录中
          // 将图片文件命名 [hash:8][ext][query]
          // [hash:8]: hash值取8位
          // [ext]: 使用之前的文件扩展名
          // [query]: 添加之前的query参数
          filename: "static/imgs/[hash:8][ext][query]",
        },
      },
      {
        test: /\.(ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "static/media/[hash:8][ext][query]",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除node_modules代码不编译
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new ESLintWebpackPlugin({
      // 指定检查文件的根目录
      context: path.resolve(__dirname, "../src"),
    }),
    new HtmlWebpackPlugin({
      // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    // 提取css成单独文件
    new MiniCssExtractPlugin({
      // 定义输出文件名和目录
      filename: "static/css/main.css",
    }),
    // css压缩
    new CssMinimizerPlugin(),
  ],
  // devServer: {
  //   host: "localhost", // 启动服务器域名
  //   port: "3000", // 启动服务器端口号
  //   open: true, // 是否自动打开浏览器
  // },
  mode: "production",
};
```

## 3.运行指令
```
npm run build
```
# 总结
本章节我们学会了 Webpack 基本使用，掌握了以下功能：
1. 两种开发模式
   - 开发模式：代码能够编译自动化运行
   - 生产模式：代码编译优化输出

2. webpack基本功能
   - 开发模式：可以编译 ES Module 语法
   - 生产模式：可以编译 ES Module 语法，压缩 js 代码

3. Webpack 配置文件
- 5个核心概念
   - entry
   - output
   - loader
   - plugins
   - mode

- devServer 配置

4. webpack 脚本指令用法
   - `webpack` 直接打包输出
   - `webpack serve` 启动开发服务器，内存编译打包没有输出