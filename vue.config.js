const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    chainWebpack: (config) => {
        // 新增一个`hot-hash-webpack-plugin`
        // 注意：这里use的时候不需要使用`new HotHashWebpackPlugin()`
        config.plugin('WorkboxPlugin')
              .use(WorkboxPlugin.GenerateSW, [{
                clientsClaim: true,
                skipWaiting: true,
               }]);
    }
}