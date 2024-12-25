# Vue-Learning

VUE 学习和项目案例

## 项目架构

Vue 2 已于 2023 年 12 月 31 日停止维护。

Vue 3 是目前主流的版本，因此新项目将主要使用 Vue 3 进行开发。

~~~md

└── src-vue3 源码案例（vue3版本）

博客依赖的打包工具等

├── package-lock.json
├── package.json

├── demo 小案例（vue2）

├── docs 博客摘录（包括 2 和 3 版本，注意区分）
│   ├── README.md
│   ├── third-party 第三方博客
│   └── vue-spring-demo-blog：vue-spring 项目博客介绍

└── src-vue2 源码案例（注意，都是 vue2 版本）
    ├── vue+spring-demo vue-spring 项目
    ├── vue-cli
    └── zhihu-demo
~~~

### 目标

使用 Vue 框架，完成一个响应式的网站搭建。特别注意不同终端的适配、整体构建工具的使用、代码复用性和功能性。

### 视频学习资料

- [ ] Vue3新API项目实战-个人博客2022：https://study.163.com/course/courseMain.htm?courseId=1004461012

### 博客自动化生成配置说明

0、日常改动博客内容，增加删除博客，路径为 `docs/third-party/`

1、打开 docs 目录，`ls ./third-party > tree.js` 获取当前博客目录结构

2、`./convert.sh > new-tree.js` 转换目录结构

3、复制 new-tree.js 到 docs/.vuepress/config.js 中，根据实际情况调整

4、执行 npm run dev 本地开发，测试无误后，npm run move 编译并移动到个人博客。
