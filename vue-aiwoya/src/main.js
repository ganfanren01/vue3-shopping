import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { componentPlugin } from '@/components/index.js'

import App from './App.vue'
import router from './router'
import { lazyPlugin } from '@/directives'
// 测试接口函数
// import { getCategoryAPI } from '@/apis/testAPI.js'
// getCategoryAPI().then(res => {
//   console.log(res)
// })// 全局指令注册
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'



const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)
app.use(componentPlugin)
app.use(pinia)
app.use(router)

app.mount('#app')
app.use(lazyPlugin)