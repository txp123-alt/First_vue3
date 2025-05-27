<template>
  <div>
    <router-view></router-view>
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
