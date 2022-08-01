const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  lintOnSave: false, // 临时关闭代码检测
  devServer: {
    // 自定义端口
    // port: 8888,
    // 自动打开浏览器
    // open: true,
    // 用于配置反向代理
    proxy: {
      // 代理请求， 匹配所有以/api开头的请求
      '/jgckM': {
        // 目标服务器，所有以/api开头的请求接口代理到目标服务器
        target: 'http://wallpaper.apc.360.cn/',
        // 重写路径，此时用于匹配反向代理的/api可以替换为空
        pathRewrite: { '^/jgckM': '' },
        // 如果代理到HTTPS服务器需要设置secure为true，默认为false
        secure: true
      }
    }
  }

}
