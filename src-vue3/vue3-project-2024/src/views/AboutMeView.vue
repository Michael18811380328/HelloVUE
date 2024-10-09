<template>
  <div class="about">
    <h1>这是我的个人介绍页面</h1>
    <p>本项目使用了 vue3 前端框架，同时使用 pinia 进行状态管理，vue-router 进行路由管理，使用 Vite 作为构建工具，使用 vitest 进行单元测试，使用 ESLint 和 Prettier 进行代码格式化</p>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
