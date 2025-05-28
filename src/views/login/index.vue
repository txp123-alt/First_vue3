<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form">
                    <div></div>
                    <h1>Hello</h1>
                    <h2>欢迎来到测试环境</h2>
                    <el-form-item>
                        <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="login_btn" type="success" size="default" @click="login">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive } from 'vue';
import useUserStore from '@/store/modules/user' //引入用户仓库

let userStore = useUserStore()


//收集登录信息
let loginForm = reactive({
    username: '用户名',
    password: '111'
})

const login = () =>{
    userStore.userLogin(loginForm);
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