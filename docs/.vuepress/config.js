// https://www.vuepress.cn/config/

module.exports = {
  base: "/vue/",
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
      { text: "概述", link: "/" },
      {
        text: "第三方库",
        items: [
          { text: "excalidraw", link: "/third-party/@excalidraw_excalidraw.md" },
          { text: "YesPlayMusic", link: "/third-party/YesPlayMusic.md" },
          { text: "ant-design-vue", link: "/third-party/ant-design-vue.md" },
          { text: "arco-design-vue", link: "/third-party/arco-design-vue.md" },
          { text: "awesome-vue", link: "/third-party/awesome-vue.md" },
          { text: "docxtemplater", link: "/third-party/docxtemplater.md" },
          { text: "element-plus", link: "/third-party/element-plus.md" },
          { text: "element-ui", link: "/third-party/element-ui.md" },
          { text: "file-saver", link: "/third-party/file-saver.md" },
          { text: "copilot-metrics-viewer", link: "/third-party/github-copilot-resources_copilot-metrics-viewer.md" },
          { text: "luckysheet", link: "/third-party/luckysheet.md" },
          { text: "mind-map", link: "/third-party/mind-map.md" },
          { text: "pure-admin_vue-pure-admin", link: "/third-party/pure-admin_vue-pure-admin.md" },
          { text: "quasar", link: "/third-party/quasar.md" },
          { text: "sortable", link: "/third-party/sortable.md" },
          { text: "streamsaver", link: "/third-party/streamsaver.md" },
          { text: "thingsboard-ui-vue3", link: "/third-party/thingsboard-ui-vue3.md" },
          { text: "tiny-vue", link: "/third-party/tiny-vue.md" },
          { text: "tui-image-editor", link: "/third-party/tui-image-editor.md" },
          { text: "v-viewer", link: "/third-party/v-viewer.md" },
          { text: "vee-validate", link: "/third-party/vee-validate.md" },
          { text: "viewerjs", link: "/third-party/viewerjs.md" },
          { text: "vite", link: "/third-party/vite.md" },
          { text: "vue-draggable-resizable", link: "/third-party/vue-draggable-resizable.md" },
          { text: "vue-virtual-scroller", link: "/third-party/vue-virtual-scroller.md" },
          { text: "vuecli", link: "/third-party/vuecli.md" },
          { text: "vuepress", link: "/third-party/vuepress.md" },
          { text: "vuetify", link: "/third-party/vuetify.md" },
          { text: "vuex", link: "/third-party/vuex.md" },
          { text: "vxe-table", link: "/third-party/vxe-table.md" },
          { text: "wangeditor", link: "/third-party/wangeditor.md" },          
        ],
      },
      { text: "更多", link: "https://michael18811380328.github.io/" },
    ],
    // 左侧旁栏 sidebar 只显示文档内部的大纲，不需要额外配置
    // https://www.vuepress.cn/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F
  },
};
