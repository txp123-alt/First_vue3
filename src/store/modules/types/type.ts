//路由数据对象类型
import type {RouteRecordRaw} from 'vue-router'
//定义小仓库数据的state类型
export interface UserState{
    token:string | null,
    menuRoutes:RouteRecordRaw[]
}