import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

const app = createApp(App)

//svg矢量图配置， 报错暂时不用管
import 'virtual:svg-icons-register'

//1. ++++++++++++++++++ 引入 Element Plus ++++++++++++++++++
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn' //国际化的配置

app.use(ElementPlus, {
  locale: zhCn,
})

//3. ++++++++++++++++++ 注册全局组件 ++++++++++++++++++
//   ++++++++++++++++++ (在@/components下进行初始化的，这个位置会自动调用gloalComponent.install方法) ++++++++++++++++++
import gloalComponent from '@/components'
app.use(gloalComponent)

// 4. 最后引入全局样式(@use用不了 ！！！  这里引用的目的是为了清除默认样式！！！， 全局变量用不了！！！)
import '@/styles/index.scss'

//5. 引入路由
import router from '@/router'
app.use(router)

//6. 引入状态管理（仓库）
import pinia from '@/store'
app.use(pinia)


app.mount('#app')
