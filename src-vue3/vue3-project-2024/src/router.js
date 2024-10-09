// 使用 vue-router 进行路由管理
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutMeView from './views/AboutMeView.vue'

// 创建顶层路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 路由列表
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: AboutMeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/AboutView.vue')
    }
  ]
})

export default router
