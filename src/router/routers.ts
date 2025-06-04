//对外暴露配置路由
export const constantsRouter = [
        {
            path: '/login',
            component: () => import('@/views/login/index.vue'),
            name: 'login'
        },
        {
            path: '/',
            component: () => import('@/layout/index.vue'),
            name: 'layout'
        },
        {
            path: '/404',
            component: () => import('@/views/404/index.vue'),
            name: '404'
        },
        //未匹配的路由
        {
            path: '/:pathMatch(.*)*',
            redirect: '/404',
            name: 'any'
        }
    ]