<script setup>
// 使用 defineProps 函数来定义一个名为 msg 的 prop，并指定其类型和是否为必需的。
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with Vite + Vue 3
    </h3>
  </div>
</template>

<style scoped>
/* scoped 范围，表示样式只在该组件中生效，不会污染全局样式 */
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
