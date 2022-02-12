const nav = require('./nav');
const sidebar = require('./sidebar');
module.exports = {
  title: 'MrSlimSlim',
  description: 'MrSlimSlim Blog',
  displayAllHeaders: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@img': '../../assets/images'
      }
    }
  },
  themeConfig: {
    nav,
    sidebar,
    algolia: {
      apiKey: 'd05b41bdde876b6d574e39383d71f158',
      indexName: 'prod_NAME',
      // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
      appId: '1ZMSVX3N4J'
    }
  }
}