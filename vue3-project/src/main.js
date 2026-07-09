import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

// 使用 pinia 进行状态管理
app.use(createPinia())
app.use(router)

app.mount('#app')
