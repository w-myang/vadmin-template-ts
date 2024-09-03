import { createApp } from 'vue'
import App from './App.vue'
import * as Icons from '@element-plus/icons';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router/index.js'
import store from "./store/index"
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import './css/base.less'
import './css/overide.less'

const app = createApp(App)

// 全局引入所有icon
Object.keys(Icons).forEach((key) => {
  //@ts-ignore
  app.component(key, Icons[key]);
});


app.use(ElementPlus,{
  locale:zhCn
}).use(store).use(router).mount('#app')