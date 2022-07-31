const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  lintOnSave: false // 临时关闭代码检测
  // devServer: {  // 配置方向代理
  //   Proxy: {
  //     '/ajax': {
  //       target: '/url',
  //       changeOrigin: true
  //     }
  //   }
  // }
  // '/jgckM': {
  //   tragert: 'http://baidu.com/',
  //   changeOrigin: true,
  //   pathRewrite: { // 替换字符串
  //     '^/jgckM': ''
  //   }
  // }
}
