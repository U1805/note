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
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "e63f5b56b7a75cabfa89",
        clientSecret: "24b7640a9ca6757874aca65a448a9f6ecfe590cf",
        owner: "u1805",
        repo: "note",
      },
    ],
  ],
  themeConfig,
}