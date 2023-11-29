# 本篇目录

前言

一、安装 Vue CLI

二、构建前端项目 1.通用方法 2.使用 IDE

三、Vue 项目结构分析

1.概览

2.index.html

3.App.vue

4.main.js

## 前言

从这篇文章开始，就进入真正的实践了。

在前端项目开发中，我们可以根据实际情况不同程度地使用 Vue。利用 Vue CLI（或写成 vue-cli，即 Vue 脚手架）搭建出来的项目，是最能体现 Vue 的特性的。这点在接下来的内容中我们可以慢慢感受。

关于项目的构建其实类似的文章网上有很多，但我还是重新写了一下，一是为了确保项目能够运行成功，二是对几个细节作了解释，三是加入了使用 IDE 的构建方法。

简单地说，前后端分离 的核心思想是前端页面通过 ajax 调用后端的 restful api 进行数据交互，而 单页面应用（single page web application，SPA），就是只有一张页面，并在用户与应用程序交互时动态更新该页面的 Web 应用程序。

附上 Vue 的官方教程：https://cn.vuejs.org/v2/guide/

这是第一手的学习资料，本篇的实践内容虽然用不上，但是日后要经常查阅。

## 一、安装 Vue CLI

使用 `npm install -g vue-cli` 安装脚手架。

## 二、构建前端项目

### 1.通用方法

新建 workspace 的文件夹。

执行 `vue init webpack wj-vue`，这里 webpack 是以 webpack 为模板指生成项目，还可以替换为 pwa、simple 等参数，这里不再赘述。 wj-vue 是我们的项目名称（White Jotter），大家也可以起别的名字。

在程序执行的过程中会有一些提示，可以按照默认的设定一路回车下去，也可以按需修改，比如下图问我项目名称是不是 wj-vue，直接回车确认就行。

这里还会问是否安装 vue-router，一定要选是，也就是回车或按 Y，vue-router 是我们构建单页面应用的关键。

可以看到 workspace 目录下生成了项目文件夹 wj-vue

执行 npm run dev

访问 http://localhost:8080，查看网页 demo，大工告成！

### 2.使用 IDE

对于习惯使用 IDE 的同学，可以使用更直观的方式构建项目。

## 三、Vue 项目结构分析

### 1.概览

使用 CLI 构建出来的 Vue 项目结构是这个样子的，其中我们最常修改的部分就是 components 文件夹了。

接下来我们分析几个文件，目的是理解各个部分是怎么联系到一起的。

### 2.index.html

首页文件的初始代码如下：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>wj-vue</title>
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

就是一个普普通通的 html 文件，让它不平凡的是 `<div id="app"></div>` ，下面有一行注释，构建的文件将会被自动注入，也就是说我们编写的其它的内容都将在这个 div 中展示。

还有不普通的一点是，整个项目只有这一个 html 文件，所以这是一个单页面应用，当我们打开这个应用，表面上可以有很多页面，实际上它们都只不过在一个 div 中。

### 3.App.vue

上面图上我把这个文件称为“根组件”，因为其它的组件又都包含在这个组件中。

.vue 文件是一种自定义文件类型，在结构上类似 html，一个 .vue 文件即是一个 vue 组件。先看它的初始代码

```vue
<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

大家可能注意到了，这里也有一句 `<div id="app">`，但跟 index.html 里的那个是没有关系的。这个 `id=app` 只是跟下面的 css 对应。

`<script>`标签里的内容即该组件的脚本，也就是 js 代码，export default 是 ES6 的语法，意思是将这个组件整体导出，之后就可以使用 import 导入组件了。大括号里的内容是这个组件的相关属性。

这个文件最关键的一点其实是第四行， `<router-view/>`，是一个容器，名字叫“路由视图”，意思是当前路由（ URL）指向的内容将显示在这个容器中。也就是说，其它的组件即使拥有自己的路由（URL，需要在 router 文件夹的 index.js 文件里定义），也只不过表面上是一个单独的页面，实际上只是在根组件 App.vue 中。

### 4.main.js

前面我们说 App.vue 里的 `<div id="app">` 和 index.html 里的 `<div id="app">` 没有关系，那么这两个文件是怎么建立联系的呢？让我们来看入口文件 main.js 的代码

~~~js
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
~~~

最上面 import 了几个模块，其中 vue 模块在 node_modules 中，App 即 App.vue 里定义的组件，router 即 router 文件夹里定义的路由。

Vue.config.productionTip = false ,作用是阻止 vue 在启动时生成生产提示。

在这个 js 文件中，我们创建了一个 Vue 对象（实例），el 属性提供一个在页面上已存在的 DOM 元素作为 Vue 对象的挂载目标，router 代表该对象包含 Vue Router，并使用项目中定义的路由。components 表示该对象包含的 Vue 组件，template 是用一个字符串模板作为 Vue 实例的标识使用，类似于定义一个 html 标签。
