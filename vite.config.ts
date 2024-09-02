// 忽略整个文件的类型检查,ts-ignore会忽略下面一行代码的类型检查
//@ts-nocheck 
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

import path from "path"

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 项目部署路径
const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/'
  : '/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 6166, // 设置开发服务器端口
  },
  base:BASE_URL,
  resolve: {
    alias: {
      // 设置别名
      '@': resolve('src'),
      // 可以设置多个别名
      // 例如，为 'components' 目录设置别名
      '_c':resolve('src/components'),
    },
  },
  build: {
    sourcemap: false, // 设置为 false 来禁用打包时 source map 生成
  },
})
