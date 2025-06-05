<template>
    <div class="logo">
        <img :src="setting.logo" v-if="!setting.logoHidden" alt="">
        <p>{{ setting.title }}</p>
    </div>
</template>
<script setup lang="ts">
//引入标题及logo的配置文件
import setting from '@/setting';
</script>
<style lang="scss" scoped>
@use '../../styles/variable.scss' as styleVariable;
.logo {
    width: 100%;
    height: styleVariable.$base-logo-height;
    color: white;
    display: flex;
    align-items: center;
    padding: 20px;
    img {
        width: 40px;
        height: 40px;
    }
    p{
        font-size: styleVariable.$base-logo-tital-fontsize;
        margin-left: 10px;
    }
}
</style>