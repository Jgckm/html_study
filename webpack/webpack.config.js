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
            // loder的配置
            {
                test: /\.css$/, // 检测 .css结尾的文件  才可以
                use: [  
                    // use的执行顺序是 从右到左（从上到下）
                    "style-loader", // 将js中的 css通过创建style标签添加html文件中生效
                    "css-loader" // 将css资源编译成commonjs的模块到js中
                ]
            },
        ]
    },
    // 插件
    plugins: [
        // plugins的配置
    ],
    // 模式
    mode: "development"
}