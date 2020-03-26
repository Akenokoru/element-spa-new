module.exports = {
  title: "XXX Documents",
  themeConfig: {
    sidebar: {
      '/xxx/': [
        '',
        'A'
      ],
      '/bbb/': [
        '',
      ],
      "/intro": ["/intro"]
    },
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: 'XXX Api',
        link: '/xxx/'
      },
      {
        text: 'bbb Api',
        link: '/bbb/'
      },
      {
        text: "文档书写指南",
        link: "/intro"
      }
    ],
    lastUpdated: "最后编辑于 "
  },
  port: 20001
};
