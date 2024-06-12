<template>
    <div class="day">
        <div class="header">
        <h1 style="top: 90%; position: absolute; left: 80%">
            jjy の first try
        </h1>
        <div class="shell" id="change" ref="shell"></div>
    </div>
    <div class="main">
        <div class="context">
            <div class="in"></div>
        </div>
        <div class="context"></div>
        <div class="context">
            <h1 style="">の front nest of the goat</h1>
        </div>
    </div>
    <div class="dark">
        aa
    </div>
    </div>
</template>
<script setup>
import { onMounted, ref,onUnmounted} from "vue";
const data  = ref(null);
const shell = ref(null);
//  屏幕当前的位置，用于滚轮位置判断
let screenPosition = 0;
//  屏幕上使用滚轮滚动带来效果函数
const scrollEvent = (event) => {
    const change = document.getElementById("change");
    if (event.deltaY > 0) {
        screenPosition += event.deltaY;
    } else {
        screenPosition += event.deltaY;
    }
    if (screenPosition < 0) {
        screenPosition = 0;
    }
    if (screenPosition > 300) {
        screenPosition = 300;
    }
    change.style.clipPath = `polygon(0 0,100% 0,100% ${
        60 + (300 - screenPosition) / 7.5
    }%,0 100%)`;
    change.style.transform = `scale(${1 + screenPosition / 1500})`;
    shell.value.onclick = ()=>{
        console.log(shell.value.style.clipPath);
    }
    change.setAttribute('he', value)
};
onMounted(() => {
    //给屏幕加上触发条件为wheel的监听器 ----函数名不要加（）
    window.addEventListener("wheel", scrollEvent);
    console.log(shell.value.style.clipPath);
});
onUnmounted(()=>{
    alert('over');
});
</script>
<style scoped>
/* 通用 */
*{
    margin: 0;
    padding: 0;
}
.shell {
    position: absolute;
    height: 700px;
    width: 100%;
    top: 0;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    background-size: 100% 100%;
    transform: scale(1);
    background-image: linear-gradient(
        0deg,
        rgb(241, 173, 255),
        rgb(191, 184, 255)
    );
    background-image: url("@/assets/pictures/image.png");
}
.main {
    height: 500px;
    position: relative;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
}
.header {
    position: relative;
    height: 700px;
    width: 100%;
    overflow: hidden;
    background-image: linear-gradient(
        0deg,
        rgb(241, 173, 255),
        rgb(191, 184, 255)
    );
}
.context {
    height: 200px;
    position: relative;
    border: 1px solid black;
    width: 500px;
    flex: 1;
}
.in {
    position: absolute;
    top: 10px;
    height: 10px;
    width: 100%;
    border: 1px solid black;
}
.ex{
    width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  background-attachment: fixed;
}

@keyframes  example{ 
    from {background-color: red;}
    to {background-color: yellow;}
}
/*  day主题 */

/* dark主题 */

</style>
