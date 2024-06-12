<template>
    <div id="back">
        <video
            id="video"
            ref="videoRef"
            :src="video"
            width="580"
            height="400"
            autoplay="false"
            controls
        ></video>
    </div>
    <el-button type="primary" @click="stopAnime"></el-button>
    <el-button type="primary" @click="mytest"></el-button>
    <el-button type="primary" @click="mytest1"></el-button>
    <iframe src="https://43.240.156.118:8443/vip/?url=age_45fePEdiYyreyuqrBN%2BO%2FpJv9KtmVtTgh9UdzewGRccPu%2FEInwEP%2FxcYmhwJr8tlwG7417FJin%2FEPShG9k73zKM%2FBw" frameborder="1" scrolling="no"></iframe>
</template>
<script setup >
import video from "@/assets/show.mp4";
import { stopPink } from "@/util/flower";
import { ref } from "vue";
const videoRef = ref(null); 
const mytest1 = () => {
    videoRef.value.pause();
};
import { userInfoStore } from "@/stores/userInfo";
const stopAnime = () => {
    alert("jjy");
    userInfo = userInfoStore();
    stopPink();
    userInfo.setAnime();
};

import request from "@/util/request.js";
const mytest = async () => {
    let data = await request.get("/api/alipay/mytest");
    alert(data);
    if (data) {
        let divForm = document.getElementsByTagName("divform");
        if (divForm.length) {
            document.body.removeChild(divForm[0]);
        }
        const div = document.createElement("divform");
        div.innerHTML = data;
        document.body.appendChild(div);
        document.forms[0].setAttribute("target", "_blank");
        document.forms[0].submit();
    }
};
</script>

<style scoped>
#video {
    margin-top: 150px;
    margin-left: 105px;
    border: 15px solid;
    border-color: black;
    border-radius: 15px;
    background-color: black;
}

#back {
    background: url("@/assets/image.png");
    background-repeat: no-repeat;
    height: 700px;
    width: 850px;
    margin-left: 400px;
    background-size: 100% 100%;
    position: fixed;
}
#test {
    height: 200px;
    width: 200px;
    margin-top: 0px;
    border: 10px solid;
}
#video {
    object-fit: cover;
}
</style>
