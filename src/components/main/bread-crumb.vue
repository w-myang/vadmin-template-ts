<!-- 面包屑组件 -->

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadData" :key="index">
      <!-- 不可点击项 -->
      <span v-if="index === breadData.length - 1" class="no-redirect">{{
        item.meta.title
      }}</span>
      <!-- 可点击项 -->
      <a v-else class="redirect" @click.prevent="router.push(item.path)">{{
        item.meta.title
      }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { onMounted, ref, getCurrentInstance, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import  routes  from "@/router/routes";

const route = useRoute();
const router = useRouter();
const routers = ref(routes);
const breadData = ref([]); // 面包屑数据

// onMounted(() => {
//   getBreadData();
// });

watch(
  () => route,
  () => {
    getBreadData();
    // console.log(breadData.value);
  },
  {
    deep: true,
    immediate: true,
  }
);

// 根据当前路由计算当前的breaddata
function getBreadData() {
  breadData.value = route.matched.filter(
    (item) => item.meta && item.meta.title
  );
}
</script>

<style lang="less" scoped>
.el-breadcrumb__item {
  h4 {
    margin: 0 auto;
  }
}
</style>
