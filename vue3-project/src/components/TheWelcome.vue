<script setup>
// script setup 是 Vue 3 提供的一种语法糖，它进一步简化了setup函数的使用。
// 使用 script setup 时，不需要显式地定义setup函数，组件内部的顶层变量、函数等会自动暴露给模板使用，并且默认就是在setup函数的上下文中
// 引入欢迎组件和其他图标
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
</script>

<template>
  <!-- 欢迎组件1，内部插入 icon 和 heading，对应 react.children -->
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading> Documentation </template>
    Vue’s official documentation provides you with all information you need to get started.
  </WelcomeItem>

  <!-- 欢迎组件2 -->
  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading> Tooling </template>
    This project is served and bundled with Vite.
    <br/>
    The recommended IDE setup is VSCode + Volar.
    <br/>
    If you need to test your components and web pages,
    check out Cypress and Cypress Component Testing.
    <br/>
    More instructions are available in README.md.
  </WelcomeItem>

  <!-- 欢迎组件3 -->
  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading> Ecosystem </template>
    Get official tools and libraries for your project
    <br/>
    Pinia Vue Router Vue Test Utils Vue Dev Tools Awesome Vue
  </WelcomeItem>
</template>
