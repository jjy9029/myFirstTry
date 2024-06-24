<template>
    <router-view> </router-view>
</template>
<script setup>
import DevicePixelRatio from '@/util/ep.js'
import {flowerDropPink} from  '@/util/flower.js';

flowerDropPink();


//    使得界面自动以设计的比例自适应
const bodyScale = () => {
      var devicewidth = document.documentElement.clientWidth;//获取当前分辨率下的可是区域宽度
      var scale = devicewidth / 1680; // 分母——设计稿的尺寸
      document.body.style.zoom = scale;//放大缩小相应倍数
}
new DevicePixelRatio().init();
bodyScale()
</script>
<style scoped>
/* 保证 app能够全屏的设置 */
#app{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 0;
}
</style>
