/// <reference types="vite/client" />

// 解决引入vue组件报红问题，默认导出组件
declare module '*.vue'{
  import {DefineComponent} from 'vue'
  const component: DefineComponent<{},{},any>
  export default component
}