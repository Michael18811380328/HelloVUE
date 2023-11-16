// https://www.vuepress.cn/config/

module.exports = {
  title: "Vue 笔记",
  description: "Just playing around",
  // https://www.vuepress.cn/guide/markdown.html#%E8%A1%8C%E5%8F%B7
  markdown: {
    lineNumbers: true,
  },
  // https://www.vuepress.cn/config/#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7
  evergreen: true,

  themeConfig: {
    // 顶部导航栏
    // https://www.vuepress.cn/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F%E9%93%BE%E6%8E%A5
    nav: [
      { text: "博客主页", link: "https://michael18811380328.github.io/" },
      { text: "Vue笔记", link: "/" },
      {
        text: "第三方库",
        items: [
          { text: "常用资源", link: "/third-party/vue-all.md" },
          { text: "vuecli", link: "/third-party/vuecli.md" },
          { text: "vue-press", link: "/third-party/vuepress-basic.md" },
        ],
      },
      {
        text: "vue-spring 项目",
        items: [
          { text: "00-前言", link: "/vue-spring-demo-blog/00-前言.md" },
          { text: "01-项目介绍", link: "/vue-spring-demo-blog/01-项目介绍.md" },
          { text: "02-VUE-cli", link: "/vue-spring-demo-blog/02-VUE-cli.md" },
          { text: "03-登录", link: "/vue-spring-demo-blog/03-登录.md" },
          { text: "04-数据库", link: "/vue-spring-demo-blog/04-数据库.md" },
          { text: "05-element", link: "/vue-spring-demo-blog/05-element.md" },
          { text: "06-路由", link: "/vue-spring-demo-blog/06-路由.md" },
          { text: "07-导航", link: "/vue-spring-demo-blog/07-导航.md" },
          { text: "08-数据库设计", link: "/vue-spring-demo-blog/08-数据库设计.md" },
          { text: "09-前端检索", link: "/vue-spring-demo-blog/09-前端检索.md" },
        ],
      },
    ],
    // 左侧旁栏 sidebar 只显示文档内部的大纲，不需要额外配置
    // https://www.vuepress.cn/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F
  },
};
