// https://www.vuepress.cn/config/

module.exports = {
  title: 'Vue 笔记',
  description: 'Just playing around',
  // https://www.vuepress.cn/guide/markdown.html#%E8%A1%8C%E5%8F%B7
  markdown: {
    lineNumbers: true
  },
  // https://www.vuepress.cn/config/#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7
  evergreen: true,

  themeConfig: {
    // https://www.vuepress.cn/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F
    sidebar: [
      '/',
      '/vuecli.md',
      '/vuepress-basic.md',
    ]
  }

  // multiple sidebar entrys
  // sidebar: {
  //   '/foo/': [
  //     '',     /* /foo/ */
  //     'one',  /* /foo/one.html */
  //     'two'   /* /foo/two.html */
  //   ],

  //   '/bar/': [
  //     '',      /* /bar/ */
  //     'three', /* /bar/three.html */
  //     'four'   /* /bar/four.html */
  //   ],

  //   // fallback
  //   '/': [
  //     '',        /* / */
  //     'contact', /* /contact.html */
  //     'about'    /* /about.html */
  //   ]
  // }

}
