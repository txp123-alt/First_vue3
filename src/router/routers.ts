//对外暴露配置路由
export const constantsRouter = [
        {
            path: '/login',
            component: () => import('@/views/login/index.vue'),
            name: 'login',
            meta:{
                title: '登录'
            }
        },
        {
            path: '/',
            component: () => import('@/layout/index.vue'),
            name: 'layout',
            meta:{
                title: 'layout'
            },
            children: [
                {
                    path: '/',
                    component: () => import('@/views/home/index.vue'),
                    name: 'home',
                    meta:{
                        title: '首页'
                    }
                }
            ]
        },
        {
            path: '/404',
            component: () => import('@/views/404/index.vue'),
            name: '404',
            meta:{
                title: '404'
            }
        },
        //未匹配的路由
        {
            path: '/:pathMatch(.*)*',
            redirect: '/404',
            name: 'any',
            meta:{
                title: '任意路由'
            }
        }
    ]