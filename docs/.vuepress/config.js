const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "Dai0v0's Blog",
  description: '知道的越多，知道的越少',
  base: '/note/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true,
  },

  head,
  plugins: [],
  themeConfig,
}