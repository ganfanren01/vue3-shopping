<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutHeader2 from './components/LayoutHeader2.vue'

import { useCategoryStore } from '@/stores/class.js'
import { onMounted } from 'vue'
const classStore = useCategoryStore()
onMounted(() => classStore.getCategory())
</script>

<template>
  <LayoutHeader2 />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>