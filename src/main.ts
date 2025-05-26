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

app.mount('#app')
