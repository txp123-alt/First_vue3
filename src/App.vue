<template>
  <div>
    <h1>app</h1>
    <SvgIcon name="time" width="100px" height="100px"></SvgIcon>
    <h1>测试elementUI</h1>
    <h5>服务器返回值：{{ response }}</h5>
    <el-button type="primary">按钮</el-button>
    <el-button type="success">按钮</el-button>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
import {reqLogin} from '@/api/user'

onMounted(() => {
  reqLogin({username:'admin',password:"111111"})
})

const response = ref('初始值')
</script>

<style scoped>

</style>
