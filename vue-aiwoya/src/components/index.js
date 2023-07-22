
import Sku from '@/components/SKU/index.vue'
export const componentPlugin = {
  install (app) {
    // app.component('组件名字'，组件配置对象)
    app.component('Sku', Sku)
  }
}