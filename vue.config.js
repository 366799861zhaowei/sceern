const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

module.exports={
    publicPath: './', //公共路径
    lintOnSave:false,
    runtimeCompiler: true,
    // 是否启用hash
    filenameHashing: true,
    css: {
        sourceMap: false
    },
    configureWebpack: {
        resolve: {
          alias: {
            "@": resolve("src"),
            vue: resolve("./node_modules/vue"),
          },
        },
      },
    chainWebpack: config => {
        config.module
            .rule('less')
            .test(/\.less$/)
            .oneOf('vue')
            .use('px2rem-loader')
            .loader('px2rem-loader')
            .before('postcss-loader')
            .options({ remUnit: 75, remPrecision: 8 })
            .end()
    },
    outputDir:"dist",
    devServer: {
        proxy: {
            '': {
                target: `http://106.52.232.75:45908/`,
                // target: `http://10.8.0.70:8888/`,
                // target: `http://192.168.43.146:8888/`,
                changeOrigin: true,
                logLevel: 'debug',
            },
        }
    },
}
