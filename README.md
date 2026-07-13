# Vue-Learning

VUE 学习和项目案例

## 项目架构

~~~md

├── vue3-project 案例
├── package.json 博客依赖的打包工具等
├── demo 小案例
├── docs 博客文档
~~~

### 博客自动化生成配置说明

0、日常改动博客内容，增加删除博客，路径为 `docs/third-party/`

1、打开 docs 目录，`ls ./third-party > tree.js` 获取当前博客目录结构

2、`./convert.sh > new-tree.js` 转换目录结构

3、复制 new-tree.js 到 docs/.vuepress/config.js 中，根据实际情况调整

4、执行 npm run dev 本地开发，测试无误后，npm run move 编译并移动到个人博客。
