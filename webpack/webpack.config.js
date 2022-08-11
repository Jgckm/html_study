const path = require('path') // nodejs 核心模块 专门处理路径问题
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 入口
    entry: "./src/main.js", // 相对路径
    // 输出
    output: {
        // path 所有文件输出路径
        // __dirname nodejs的变量 表示当前文件的文件夹目录
        path: path.resolve(__dirname, './dist'), // 绝对路径
        // 文件名
        filename: 'js/main.js',
        // 自动清空上一次打包内容
        // 原理：在打包前，将path 整个目录内容清空，在进行打包
        clean: true,
    },
    // 加载器
    module: {
        rules: [
            // loder的配置
            {
                test: /\.css$/, // 检测 .css结尾的文件  才可以
                use: [
                    // use的执行顺序是 从右到左（从上到下）
                    "style-loader", // 将js中的 css通过创建style标签添加html文件中生效
                    "css-loader" // 将css资源编译成commonjs的模块到js中
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    // compiles Less to CSS
                    "style-loader",
                    "css-loader",
                    "less-loader", // 将less编译为css
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader", // 将sass编译成css文件
                ],
            },
            {
                test: /\.styl$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "stylus-loader", // 将sass编译成css文件
                ],
            },
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
                    filename: 'static/images/[hash:10][ext][query]'
                }
            },
            {
                test: /\.(ttf|woff2?|mp3|mp4|avi)$/,
                type: 'asset/resource',
                generator: {
                    // 输出字体名称
                    filename: 'static/mida/[hash:10][ext][query]'
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/, // 排除node_modules 中的js 文件（这些文件不处理）
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    // 插件
    plugins: [
        // plugins的配置
        new ESLintWebpackPlugin({
            // 指定检查文件的根目录
            context: path.resolve(__dirname, "src"),
        }),
        new HtmlWebpackPlugin({
            // 模板：以public/index.html文件创建的html文件
            // 新的html文件的特点：1.和原来的一致 2.自动引入打包输出的文件
            template: path.resolve(__dirname, "public/index.html"),
        }),
    ],
    // 开发服务器：不会输出资源 ，在内存中编译打包
    devServer: {
        host: "localhost", // 启动服务器域名
        port: "3000", // 启动服务器端口号
        open: true, // 是否自动打开浏览器
    },
    // 模式
    mode: "development"
}