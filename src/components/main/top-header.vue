<!-- 顶部header -->

<template>
  <div class="header-container mt20">
    <div class="header-container-left">
      <el-icon
        style="cursor: pointer"
        v-if="isCollapse"
        @click="store.commit('switchCollapse')"
        ><Expand
      /></el-icon>
      <el-icon
        style="cursor: pointer"
        v-if="!isCollapse"
        @click="store.commit('switchCollapse')"
        ><Fold
      /></el-icon>
      <BreadCrumb class="bread ml10"></BreadCrumb>
    </div>
    <div class="header-container-right">
      <el-dropdown>
        <div class="el-dropdown-link header-container-right-drop">
          <div class="right-img">
            <img src="@/assets/setting2.png" width="60" alt="" />
          </div>
          <div class="right-content">
            <span>{{ userinfo.name }}</span>
          </div>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            <!-- <el-dropdown-item @click="logUser"
                        >退出登录</el-dropdown-item
                      > -->
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import { getUserInfo,User } from "@/libs/userinfo";
import { useStore } from "vuex";
import BreadCrumb from "./bread-crumb.vue";

const userinfo = computed<User>(() => getUserInfo());
const store = useStore();
const isCollapse = computed(() => store.state.isCollapse)

function logout() {
  console.log("暂未实现")
}
</script>

<style lang="less" scoped>
.header-container {
  display: block;
  background-color: #fff;
  font-size: 20px;
  // margin-bottom: 6px;
  overflow: hidden;
  // padding: 20px 0px;

  .header-container-left {
    float: left;
    display: flex;
    align-items: center;
  }

  .header-container-right {
    float: right;
    .header-container-right-drop {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .right-img {
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 20px;
      }
    }

    .right-content {
      display: inline-block;
      margin-left: 10px;
      font-size: 14px;
    }
  }
}

// 取消鼠标点击下拉菜单出现外边框样式
:focus-visible {
    outline: none !important;
}

</style>
