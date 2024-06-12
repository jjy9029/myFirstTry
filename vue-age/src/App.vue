<script setup>
import { flowerDropPink, stopPink } from "@/util/flower.js";
import { onMounted } from "vue";
import  {userInfoStore} from '@/stores/userInfo.js'
const userInfo = userInfoStore();
onMounted(() => {
    window.L2Dwidget.init({
        tagMode: true,
        debug: false,
        model: {
            
            jsonPath:
                "/live2dw/live2d-widget-model-shizuku/assets/shizuku.model.json",
        },
        display: { position: "left", width: 145 * 1.2, height: 330 * 1.2 },
        mobile: { show: true },
        log: false,
    });
    const userInfo = userInfoStore();
    alert(userInfo.info.anime)
    if(userInfo.info.anime){
        flowerDropPink();
    }
    
});
</script>
<template>
    <router-view></router-view>
</template>
<style>
#app {
    height:100%;
    width: 100%;
     left:0;
     top: 0;
     padding: 0px;
     position: absolute;
}

</style>
