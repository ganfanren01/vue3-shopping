<script setup>
import HomeCategory from './content/HomeCategory.vue'
import HomeBanner from './content/HomeBanner.vue'
import HomeNew from './content/HomeNew.vue'
import HomeHot from './content/HomeHot.vue'
import HomeProduct from './content/HomeProduct.vue'
// import HomePanel from './content/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
  <!-- 测试封装的组件
  <HomePanel title="今日" subTitle="明日">
    <div>shiwo</div>
  </HomePanel>
  <HomePanel title="乌拉" subTitle="hi hi">
    <div>shiwo</div>
  </HomePanel> -->
</template>