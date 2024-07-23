# Element Plus


### version

2.7.7 • 


### downloads

203,422 


### repository

github.com/element-plus/element-plus 


### homepage

element-plus.org/ 


## default readme

Element Plus - A Vue.js 3 UI library

  * 💪 Vue 3 Composition API
  * 🔥 Written in TypeScript

## Getting Started

Alright, for you to get started if you are looking for making Element Plus
better you should keep reading. For developers that uses Element Plus to
develop your website you should go ahead visit [Getting
Started](https://element-plus.org/).

  * 中国大陆[加速镜像站点](https://cn.element-plus.org/zh-CN/)

## Breaking change list

The first stable release of Element Plus suitable for use in production was
released on February 07, 2022. The APIs is stable right now, and here's also a
full list about how to get upgraded from [Element
UI](https://element.eleme.io) to Element Plus.

You can find the breaking change list here: [Breaking Change
List](https://github.com/element-plus/element-plus/discussions/5658).

### Migration Tool 🛠️

We have made a migration tool for you to migrate your project from [Element
UI](https://element.eleme.io) to Element Plus.

You can find the [gogo code migration
tool](https://github.com/thx/gogocode/tree/main/packages/gogocode-plugin-
element) here.

We have tested this on [Vue Element Admin](https://github.com/PanJiaChen/vue-
element-admin). You can find the transpiled code
[here](https://github.com/gogocodeio/vue-element-admin).



基于 Vue 3，面向设计师和开发者的组件库

Element UI 是国内使用最广泛的 Vue2 组件库之一，而 Element Plus 是 Element UI 的升级版，基于 Vue3 和 TypeScript，提供了 70 多个易于使用的组件。

- 官网：[element-plus.org/](https://link.juejin.cn/?target=https%3A%2F%2Felement-plus.org%2F)
- GitHub：[github.com/element-plu…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Felement-plus%2Felement-plus)
- NPM：[www.npmjs.com/package/ele…](https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Felement-plus)

Element Plus 于 2020年9月发布第一个 Beta 版本，2022年2月发布第一个稳定版本 v2.0.0，目前基主要由社区开发者在维护。

以下是截止到 2023.12.9 的数据情况：

| 指标       | 数值                    |
| ---------- | ----------------------- |
| Star       | 22k                     |
| NPM 周下载 | 155,168                 |
| Issue      | 1251(Open)+4682(Closed) |
| PR         | 397+6027                |
| 贡献者     | 540                     |
| 组件数     | 70                      |



https://element-plus.org/zh-CN/component/

完整引入

~~~js
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
~~~

按钮组件使用

~~~vue
<template>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>

  <el-row class="mb-4">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </el-row>

  <el-row class="mb-4">
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </el-row>

  <el-row>
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </el-row>
</template>

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>
~~~

