const nav = require('./nav');
const sidebar = require('./sidebar');
module.exports = {
  title: 'MrSlimSlim',
  description: 'MrSlimSlim Blog',
  displayAllHeaders: true,
  plugins: [
    '@vuepress/nprogress',
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@img': '../../assets/images'
      }
    }
  },
  themeConfig: {
    nav,
    sidebar
  }
}