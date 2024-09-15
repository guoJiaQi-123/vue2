const {defineConfig} = require('@vue/cli-service')


module.exports = defineConfig({
    transpileDependencies: true,

    // 修改项目启动端口号
    devServer: {
        port: 9999,
        // 只要请求的路径中匹配到了/api就走代理的逻辑
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true
            }
        }
    }
})
