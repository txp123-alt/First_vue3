<template>
    <div class="layout_container">
        <!--左侧菜单-->
        <div class="layout_slider">123</div>
        <!--顶部导航-->
        <div class="layout_tabbar">345</div>
        <!--页面展示-->
        <div class="layout_main">
            <p style="height: 10000px;background-color: aqua;">6789</p>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
@use '@/styles/variable.scss' as styleVariable;

.layout_container {
    width: 100%;
    height: 100vh;
    background-color: red;
    .layout_slider {
        width: styleVariable.$base-menu-width;
        height: 100vh;
        background-color: styleVariable.$base-menu-bg-color;
    }
    .layout_tabbar {
        position: fixed;
        top: 0;
        left: styleVariable.$base-menu-width;
        width: calc(100% - styleVariable.$base-menu-width);
        height: styleVariable.$base-tabbar-height;
        background-color: green;
    }
    .layout_main {
        position: absolute;
        top: styleVariable.$base-tabbar-height;
        left: styleVariable.$base-menu-width;
        width: calc(100% - styleVariable.$base-menu-width);
        height: calc(100% - styleVariable.$base-tabbar-height);
        background-color: blue;
        padding: 20px;
        overflow: auto;
    }
}
</style>