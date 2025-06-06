<template>
    <template v-for="(item,index) in menuList" :key="item.path"> 
        <el-menu-item v-if="!item.children" :index="item.path">
            <template #title>
                <span>img&nbsp;</span>
                <span>{{ item.meta.title }}</span>
            </template>
        </el-menu-item>
        <el-menu-item v-if="item.children && item.children.length==1" >
            <template #title>
                <span>img&nbsp;</span>
                <span>{{ item.children[0].meta.title }}</span>
            </template>
        </el-menu-item>
        <el-sub-menu v-if="item.children && item.children.length>1"> 
        </el-sub-menu>
    </template>
</template>
<script setup lang="ts">
//接收父组件传递过来的路由数组
defineProps(['menuList'])
</script>
<style lang="sass" scoped>

</style>