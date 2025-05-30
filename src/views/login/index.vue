<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginFormRef">
                    <div></div>
                    <h1>Hello</h1>
                    <h2>欢迎来到测试环境</h2>
                    <el-form-item prop="username">
                        <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="login_btn" type="success" size="default" @click="login" :loading="loginButLoading">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue';
import useUserStore from '@/store/modules/user' //引入用户仓库
import { useRouter } from 'vue-router'; //引入路由
import { ElNotification } from 'element-plus'; //引入提示框
import { getTime } from '@/utils/time'

let userStore = useUserStore() //获取用户仓库实例

let $router = useRouter() //获取路由实例


//收集登录信息
let loginForm = reactive({
    username: 'admin',
    password: '123456'
})

//表单校验的配置对象
const rules = reactive({
    username:[
        {required:true,min:3,max:10,message:'用户名长度在3-10个字符之间',trigger:'change'}
    ],
    password:[
        {required:true,min:3,max:10,message:'密码长度在3-10个字符之间',trigger:'change'}
    ]
})

//定义登录按钮状态
let loginButLoading = ref(false)

//获取表单的实例
let loginFormRef = ref()

const login = async() =>{
    //保证全部表单校验通过
    await loginFormRef.value.validate()
    
    loginButLoading.value = true
    try {
        //可以写.then()的语法
        await userStore.userLogin(loginForm);
        //通过编程式导航，跳转到首页
        $router.push('/')
        //登录成功的提示信息
        ElNotification({
            type: 'success',
            message: '欢迎回来',
            title: `hi, ${getTime()}`
        })
        loginButLoading.value = false
    } catch (error) {
        console.log(error);
        ElNotification({
            type: 'error',
            message: (error as Error).message
        })
        loginButLoading.value = false
    }
}
</script>
<style lang="scss" scoped>
.login_container{
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    .login_form{
        position: relative;
        width: 80%;
        top: 30vh;
        background: url('@/assets/images/formBackGround.jpg');
        background-size: cover;
        padding: 40px;
        h1{
          color: white;
          font-size: 40px;    
        }
        h2{
          color: white;
          font-size: 20px;    
          margin: 20px 0px;
        }
        .login_btn{
            width: 100%;
        }
    }
}
</style>