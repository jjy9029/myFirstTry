<template>
    <el-container id="el-container-main">
        <!-- 顶部menu -->
        <el-header id="el-header">
            <el-menu
                ellipsis
                class="el-menu-demo"
                mode="horizontal"
                id="mymenu"
            >
                <el-image :src="title" />
                <el-sub-menu index="2">
                    <template #title>Workspace</template>
                    <el-menu-item index="2-1">item one</el-menu-item>
                    <el-menu-item index="2-2">item two</el-menu-item>
                    <el-menu-item index="2-3">item three</el-menu-item>
                    <el-sub-menu index="2-4">
                        <template #title>item four</template>
                        <el-menu-item index="2-4-1">item one</el-menu-item>
                        <el-menu-item index="2-4-2">item two</el-menu-item>
                        <el-menu-item index="2-4-3">item three</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="3" disabled>Info</el-menu-item>
                <el-menu-item index="4">
                    <el-avatar :size="50" :src="userInfo.info.picture_URL" />
                </el-menu-item>
                <el-sub-menu index="3111">
                    <el-menu-item index="11" @click="abc"> </el-menu-item>
                    <el-menu-item index="2-2">item two</el-menu-item>
                    <el-menu-item index="2-3">item three</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-header>
        <!-- 左侧menu -->
        <el-aside> </el-aside>

        <!-- 内容呈现处 -->
        <el-container>
            <el-upload
                class="avatar-uploader"
                :auto-upload="false"
                :on-change="upload"
                :list-type="picture-card"
                :on-preview="picture"

            >
              <el-icon  class="avatar-uploader-icon"><Plus /></el-icon>
              <el-image style="width: 100px; height: 100px" :src="pic" :fit="fit" />
            </el-upload>
        </el-container>
    </el-container>
</template>
<script setup>
import { useTokenStore } from "@/stores/token";
import { userInfoStore } from "@/stores/userInfo";
import request from "@/util/request.js";
import { ElMessage } from "element-plus";
import { ref } from "vue";
import {DataLine, Plus} from '@element-plus/icons-vue'

// pictrue import

import title from "@/assets/pictures/title.png";
//

//  持久化仓库 token 和 userInfo
const TokenStore = useTokenStore();
const userInfo = userInfoStore();


// 发文件的模板
const upload = async (File,FileList)=>{
//     let data = new FormData()
//     data.append('file', File.raw)
//     await request.patch('/api/jjy/user/pictures',
//     data,
//     {headers: {
//     'Content-Type': 'multipart/form-data'
//   }})
}
const pictrue = (file)=>{
    pic.value = file.url;
}
const pic = ref(null)
const abc = () => {
    alert("aaa");
};

//  修改用户名和密码的 表单
const modifyForm = ref({
    newName: "",
    newPass: "",
});
//  重置
const resetForm = () => {
    modifyForm.value.newName = "";
    modifyForm.value.newPass = "";
};

modifyForm.value.newName = "jjy";
modifyForm.value.newPass = "123";

const modify = async () => {
    const obj = {
        token: TokenStore.token,
        username: modifyForm.value.newName,
        password: modifyForm.value.newPass,
        oldName: userInfo.info.username,
    };
    let data = await request.patch("api/jjy/modify", obj);
    if (data.code.slice(3, 4) == "1") {
        ElMessage.success("修改成功");
        // 更新令牌
        TokenStore.token = data.data;
        userInfo.setName(obj.username);
        userInfo.setPass(obj.password);
    } else {
        ElMessage.error(data.msg);
    }
    // 清除修改界面数据
    resetForm();
};
</script>
<style scoped>
#el-header {
    margin-top: 0px;
    height: 80px;
    border: 5px solid transparent;
    border-color: rgba(229, 175, 216, 0.616);
}
#mymenu {
    height: 70px;
    width: 100%;
    left: 0px;
    position: fixed;
    background-color: rgb(255, 255, 255);
}
#el-container-main {
    background-color: rgba(245, 242, 242, 0.8);
    width: 100%;
    height: 100%;
}
</style>
