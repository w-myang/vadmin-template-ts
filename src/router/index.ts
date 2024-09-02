// 项目路由配置
import { createRouter, createWebHistory } from 'vue-router';
import routes from "./routes";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

const router = createRouter({
  history: createWebHistory(), // history 模式
  // history: createWebHashHistory(), // hash 模式
  routes,
});

router.beforeEach((to,from,next) => {
  // 显示进度条
  NProgress.start()
  next()
})

router.afterEach(() => {
  // 关闭进度条
  NProgress.done()
})
export default router