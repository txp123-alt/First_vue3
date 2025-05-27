//通过 vue-router 插件实现模版路由配置
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantsRouter } from '@/router/routers'


//创建路由器
let router = createRouter({
    //指定路由模式
    history: createWebHashHistory(),
    //指定路由规则
    routes : constantsRouter,
    //滚动行为
    scrollBehavior() { 
        return {
            left: 0,
            top: 0
        }
    }
})

export default router;