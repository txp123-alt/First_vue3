// 创建用户相关的小仓库
import { defineStore } from 'pinia'
//登录接口
import { reqLogin } from '@/api/user'
//引入数据类型
import type { loginForm } from '@/api/user/type'

let useUserStore = defineStore('User', {
  state: () => {
    return {}
  },
  // 类似于计算属性
  getters: {},
  // 处理异步|逻辑的地方
  actions: {
    userLogin(params:loginForm) {
      //用户登录
      console.log(params);
      
    }
  }
})

//对外暴露获取小仓库的方法
export default useUserStore