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
    sidebar
  }
}