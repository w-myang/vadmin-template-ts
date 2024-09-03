<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="web-title">
          <span>
            <img src="@/assets/logo.svg" />
            <h3 class="ml10" v-if="!isCollapse">{{config.title}}</h3>
          </span>
        </div>
        <SideMenu/>
      </el-aside>
      <el-container>
        <el-header>
          <TopHeader/>
        </el-header>
        <el-main>
          <div class="page-container p5">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import TopHeader from "./top-header.vue"
import SideMenu from "./side-menu.vue"
import config from "@/config"

import {
  ref,
  watch,
  computed,
  onMounted,
  getCurrentInstance,
  onUnmounted,
} from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import routes from "@/router/routes.ts";
import { getUserInfo,User } from "@/libs/userinfo.ts";

const { proxy } = getCurrentInstance();
const breadcrumbData = ref([]);
const route = useRoute();
const router = useRouter();
const userinfo = computed<User>(() => getUserInfo());
const getBreadcrumbData = () => {
  breadcrumbData.value = route.matched.filter(
    (item) => item.meta && item.meta.title
  );
};
const store = useStore();
const isCollapse = computed({
  get() {
    return store.state.isCollapse;
  },
});

const menuList = ref([]); // 菜单列表
const activeMenu = ref("");
// 页面加载好后执行
onMounted(() => {
  // 根据路由渲染左侧菜单，除去首页路由
  menuList.value = routes;
  activeMenu.value = route.path;
});

onMounted(async () => {});

// 获取通用审核的未审核数量
</script>

<style lang="less" scoped>
.common-layout {
  height: 100%;
  width: 100%;
  .el-container {
    height: 100%;
    width: 100%;
    .el-aside {
      height:100%;
      background: white;
      overflow: hidden;
      .web-title {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          height: 20px;
          width: 18px;
          position: relative;
          top: 3px;
        }
        h3 {
          display: inline-block;
        }
      }
    }

    .el-header {
      border-left:1px solid rgb(232, 232, 232);
      background: white;
    }
    .el-main {
      height:100%;
      width:100%;
      background: rgb(237, 237, 237);
      padding:5px;
    }
  }

}
</style>


