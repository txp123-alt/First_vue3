import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
//矢量图 SVG
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
    iconDirs :[path.resolve(__dirname,'src/assets/icons')],
  })],
  //相对路径的配置
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  //scss样式全局变量配置(不建议在这里引用, 改为在main.ts中显示引入)
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "@/styles/index.scss";`
  //     }
  //   }
  // }
})
