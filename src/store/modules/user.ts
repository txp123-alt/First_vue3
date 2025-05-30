// 创建用户相关的小仓库
import { defineStore } from 'pinia'
//登录接口
import { reqLogin } from '@/api/user'
//引入数据类型
import type { loginForm, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/type'

//引入操作浏览器存储数据的方法
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'

let useUserStore = defineStore('User', {
  state: ():UserState => {
    return {
      token: GET_TOKEN("TOKEN"), //用户唯一标识符
    }
  },
  // 类似于计算属性
  getters: {},
  // 处理异步|逻辑的地方
  actions: {
    async userLogin(params:loginForm) {
      //用户登录
      console.log('请求参数：',params);
      
      let request:loginResponseData = await reqLogin(params)
      console.log('登录接口返回结果:',request);
      if  (request.code == 200) {
        this.token = (request.data.token as string)
        //本地保存一份Token，防止刷新页面丢失登录的用户信息
        SET_TOKEN('TOKEN',(request.data.token as string))
        return 'ok' //返回一个成功的promise
      }else {
        return Promise.reject(new Error(request.data.message))
      }   
    }
  }
})

//对外暴露获取小仓库的方法
export default useUserStore