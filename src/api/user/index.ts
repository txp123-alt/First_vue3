import request from "@/utils/request";

import type { loginForm,loginResponseData,userResponseData } from "./type";


//统一管理接口

//在此场景下加上 as const 是为了：
// 精确类型推导
// 提高类型安全性
// 替代 enum 实现模块化接口管理
// 兼容构建工具要求（如 Webpack/Babel）
const API = {
    LOGIN_URL : '/user/login',
    USERINFO_URL : '/user/info'
} as const;

//登录接口
export const reqLogin = (data:loginForm) => request.post<any,loginResponseData>(API.LOGIN_URL,data)
//获取用户信息
export const reqUserInfo = () => request.get<any,userResponseData>(API.USERINFO_URL);