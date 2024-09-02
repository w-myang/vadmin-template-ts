<!-- 左侧菜单栏 -->
<template>
  <!-- @open="handleOpen"
    @close="handleClose" -->
  <el-scrollbar height="calc(100vh - 60px)">
    <el-menu :default-active="activeMenu" class="el-menu" router :collapse="isCollapse">
      <template v-for="(menuItem, menuIndex) in menuList" :key="menuIndex">
        <!-- 展开没有子菜单 -->
        <el-menu-item
          v-if="
            (!menuItem.children && !menuItem.meta.hideInMenu) ||
            (menuItem.children && menuItem.children.length == 0 && !menuItem?.meta?.hideInMenu)
          "
          :index="menuItem.path"
        >
          <!-- <template #title>
            {{ menuItem.meta?.title }}
          </template> -->
          <template #title>
            <span v-if="menuItem.meta.icon.includes('icon-')" :class="`iconfont ${menuItem.meta.icon} ali-icon`"></span>
            <el-icon v-else>
              <component :is="menuItem.meta.icon"></component>
            </el-icon>
            <span>{{ menuItem.meta?.title }}</span>
          </template>
        </el-menu-item>

        <!-- 展开有子菜单 -->
        <el-sub-menu
          v-else-if="
            menuItem.children &&
            menuItem.children.length > 0 &&
            !menuItem?.meta?.hideInMenu
          "
          :index="menuItem.path"
        >
          <template #title>
            <span v-if="menuItem.meta.icon.includes('icon-')" :class="`iconfont ${menuItem.meta.icon} ali-icon`"></span>
            <el-icon v-else>
              <component :is="menuItem.meta.icon"></component>
            </el-icon>
            <span>{{ menuItem.meta?.title }}</span>
          </template>
          <div
            v-for="(subMenuItem, subMenuIndex) in menuItem.children"
            :key="subMenuIndex"
          >
            <el-menu-item
              :index="menuItem.path + '/' + subMenuItem.path"
              v-if="!subMenuItem?.meta?.hideInMenu"
              >{{ subMenuItem?.meta?.title }}</el-menu-item
            >
          </div>
        </el-sub-menu>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
import { onMounted,computed, ref, getCurrentInstance } from "vue";
import { useRouter, useRoute } from "vue-router";
import routes from "@/router/routes";
import { useStore } from "vuex";

const route = useRoute();
const menuList = ref([]); // 菜单列表
const activeMenu = ref("");

const store = useStore();
const isCollapse = computed(() => store.state.isCollapse)

// 页面加载好后执行
onMounted(() => {
  // 根据路由渲染左侧菜单，除去首页路由
  menuList.value = routes;
  activeMenu.value = route.path;
});
</script>


<style>

</style>

<style lang="less" scoped>

.el-menu{
  border:none;
}
// .el-menu:not(.el-menu--collapse){
//   width: 200px;
//   height: 100%;
//   font-weight: 500;
//   border-right: none;
// }
.el-menu-item.is-active {
  font-weight: 700;
  border-right: 4px solid #f60;
}

.el-menu--collapse{
  .el-sub-menu.is-active{
    .el-sub-menu__title{
      .el-icon{
        color:#f60;
      }
    }
  }
}

.ali-icon{
  font-size:19px;
  margin-right:8px;
  margin-left:2px;
}
</style>

