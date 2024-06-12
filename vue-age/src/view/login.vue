<template>
    <el-container id="el-container">
        <el-aside>
            <el-container>
                <el-header style="height: 150px">
                    <el-image :src="authorPicture" style="width: 50%" />
                </el-header>
                <el-main style="height: 500px">
                    <!-- 作者按钮和其抽屉显示 -->
                    <el-button
                        type="warning"
                        style="margin-top: 0px; margin-left: 0px"
                        @click="drawerAuthor = true"
                    >
                        作者
                    </el-button>
                    <el-drawer v-model="drawerAuthor" :with-header="false">
                        <h1>作者介绍：</h1>
                        <span>姓名：</span>
                        <span>山田杏奈的秋田犬太郎</span>
                    </el-drawer>

                    <!-- 简介按钮和其抽屉显示 -->
                    <el-button
                        type="warning"
                        style="margin-top: 0px; margin-left: 10px"
                        @click="drawerIntroduce = true"
                    >
                        简介
                    </el-button>
                    <el-drawer
                        v-model="drawerIntroduce"
                        title=""
                        :with-header="false"
                    >
                        <p>NBU小垃圾的试手项目</p>
                    </el-drawer>
                    <el-button
                        type="warning"
                        style="margin-top: 70px; margin-left: -128px"
                        @click="drawerUse = true"
                    >
                        使用
                    </el-button>
                    <el-drawer
                        v-model="drawerUse"
                        title=""
                        :with-header="false"
                    >
                        <h1>使用说明：</h1>
                    </el-drawer>
                </el-main>
            </el-container>
        </el-aside>
        <el-container>
            <el-header>
                <el-avatar
                    :src="agePicture"
                    :size="150"
                    style="margin-left: 400px; margin-top: 55px"
                />
                <p
                    style="
                        font-size: 40px;
                        margin-left: 300px;
                        margin-top: 0px;
                        color: rgba(0, 0, 0, 1);
                    "
                >
                    Repository of AGE
                </p>
            </el-header>
            <el-main id="el-main">
                <!--  登入的表单 -->
                <el-form label-width="auto" id="el-form">
                    <p style="font-size: 20px" align="center">
                        请先登入或者注册
                    </p>
                    <el-form-item label="">
                        <el-input
                            v-model="form.username"
                            placeholder="请输入用户名"
                        />
                    </el-form-item>
                    <el-form-item label="">
                        <el-input
                            v-model="form.password"
                            placeholder="请输入密码"
                            class="el-input"
                        />
                    </el-form-item>
                    <el-form-item label="">
                        <el-input
                            v-model="form.checkCode"
                            placeholder="请输入验证码"
                        />
                        <el-tag
                            class="el-tag"
                            @click="getCodeLogin"
                            size="large"
                        >
                            {{ viewCodeLogin }}
                        </el-tag>
                    </el-form-item>
                    <el-tooltip
                        content="什么？还没有账号吗"
                        placement="left"
                        effect="light"
                    >
                        <el-button
                            id="el-btn-reg"
                            type="primary"
                            @click="registerTableVisible = true"
                        >
                            注册</el-button
                        >
                    </el-tooltip>
                    <el-button type="primary" @click="submit" id="el-btn-login">
                        登入</el-button
                    >
                </el-form>
                <!--  登入的表单 -->

                <!-- 注册的dialog窗口 -->
                <el-dialog
                    v-model="registerTableVisible"
                    title="欢迎注册~~~  "
                    width="400"
                    id="el-dialog"
                >
                    <p></p>
                    <!-- 注册中的表单 -->
                    <el-form label-width="auto">
                        
                        <el-form-item label="">
                            <el-input
                                v-model="registerForm.username"
                                placeholder="请输入用户名"
                            />
                        </el-form-item>
                        <el-form-item label="">
                            <el-input
                                v-model="registerForm.password"
                                placeholder="请输入密码"
                                class="el-input"
                            />
                        </el-form-item>
                        <el-form-item label="">
                            <el-select
                                v-model="registerForm.userStatus"
                                placeholder="请选择登入身份"
                            >
                                <el-option label="用户" value="0" />
                                <el-option label="管理员" value="1" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="">
                            <el-input
                                v-model="registerForm.key"
                                placeholder="请输入邀请码(如果要成为管理员)"
                            />
                        </el-form-item>
                        <el-form-item label="">
                            <el-input
                                v-model="registerForm.checkCode"
                                placeholder="请输入验证码"
                            />
                            <el-tag
                                class="el-tag"
                                @click="getCodeRegister"
                                size="large"
                            >
                                {{ viewCodeRegister }}
                            </el-tag>
                        </el-form-item>
                        <el-button
                            id="el-btn-reg"
                            type="primary"
                            @click="resetRegisterForm"
                        >
                            重置</el-button
                        >
                        <el-button
                            type="primary"
                            @click="register"
                            id="el-btn-login"
                        >
                            注册</el-button
                        >
                    </el-form>
                    <!-- 注册中的表单 -->
                </el-dialog>
                
                <!-- 注册的dialog窗口 -->-
            </el-main>
            <!-- 底角的按钮来控制樱花动画 -->
            <el-footer>
                <el-affix  :offset="80" position="top" >
                    <el-button type="primary" @click="stopPink"></el-button>
                </el-affix>
   
            </el-footer>
        </el-container>
    </el-container>
  <div style="height: 800px;">asdad</div>
</template>
<script setup>
import { ElMessage, ElNotification } from "element-plus";
import { flowerDropPink, stopPink } from "@/util/flower.js";
import router from "@/router/index.js";
import { ref } from "vue";
import authorPicture from "@/assets/pictures/woxinwei.jpg";
import agePicture from "@/assets/pictures/av.png";


// 显示-隐藏
const drawerIntroduce = ref(false);
const drawerAuthor = ref(false);
const drawerUse = ref(false);
const registerTableVisible = ref(false);

//  登入的表单 form
const form = ref({
    id: "",
    username: "",
    password: "",
    checkCode: "",
});

// 注册表单   registerForm
const registerForm = ref({
    key: "",
    username: "",
    password: "",
    userStatus: "",
    checkCode: "",
});

const resetLoginForm = () => {
    form.value.username = "";
    form.value.password = "";
    form.value.checkCode = "";
};

// 清空注册表单-- ---对应注册中的重置按钮的函数
const resetRegisterForm = () => {
    registerForm.value.key = "";
    registerForm.value.username = "";
    registerForm.value.password = "";
    registerForm.value.userStatus = "";
    registerForm.value.checkCode = "";
};

//  邀请码
const myKey = "561204";

//  登入和注册所需的验证码可以不同 ---以及它们的点击随机生成函数
const viewCodeLogin = ref("点此获取验证码");
const viewCodeRegister = ref("点此获取验证码");

const getCodeLogin = () => {
    viewCodeLogin.value = "";
    let codeString =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let codeArray = codeString.split("");
    let num = codeArray.length;
    let newCodeArray = [];
    for (let i = 0; i < 5; i++) {
        let index = Math.floor(Math.random() * num);
        newCodeArray.push(codeArray[index]);
    }
    viewCodeLogin.value = newCodeArray.join("");
};
const getCodeRegister = () => {
    viewCodeRegister.value = "";
    let codeString =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let codeArray = codeString.split("");
    let num = codeArray.length;
    let newCodeArray = [];
    for (let i = 0; i < 5; i++) {
        let index = Math.floor(Math.random() * num);
        newCodeArray.push(codeArray[index]);
    }
    viewCodeRegister.value = newCodeArray.join("");
};

// 请求函数
import { checkAccount, addAccount, getId } from "@/api/login.js";
//   持久化
import { useTokenStore } from "@/stores/token";
import { userInfoStore } from "@/stores/userInfo";
const TokenStore = useTokenStore();
const userInfo = userInfoStore();
//  登入请求
const submit = async () => {
    if (
        form.value.checkCode.toUpperCase() == viewCodeLogin.value.toUpperCase()
    ) {
        let data = await checkAccount(form.value);
        alert(data.data);
        if (data.code.slice(3, 4) == "1") {
            ElMessage.success("登入成功");
            TokenStore.setToken(data.data.token);
            // 除了登录和注册以外的所有函数都要在拿到token 之后执行
            userInfo.setName(form.value.username);
            userInfo.setPass(form.value.password);
            userInfo.setId(data.data.id);
            alert(userInfo.info.id);
            router.push("/layout");
            resetLoginForm();
        } else {
            ElMessage.error("账号和密码不匹配");
        }
    } else {
        ElNotification.error("请输入正确的验证码");
    }
};

// 注册请求
const register = async () => {
    if (
        registerForm.value.key != myKey &&
        registerForm.value.userStatus == "1"
    ) {
        ElNotification.error("请先输入正确的邀请码");
    } else {
        if (
            registerForm.value.checkCode.toUpperCase() ==
            viewCodeRegister.value.toUpperCase()
        ) {
            let data = await addAccount(registerForm.value);
            alert(data.code)
            if (data.code.slice(3, 4) == "1") {
                ElMessage.success("注册成功");
                resetRegisterForm(); // 注册成功之后 会清除注册记录
            } else {
                ElMessage.error("账号已经存在，请换一个用户名");
            }
        } else {
            ElNotification.error("请输入正确的验证码");
        }
    }
};
</script>
<style scoped>
#el-btn-login {
    margin-left: 10px;
}
#el-btn-reg {
    margin-left: 220px;
}
#el-main {
    margin-top: 150px;
    margin-left: 100px;
    width: 100%;
}

#el-form {
    border: 20px solid transparent;
    border-radius: 15px;
    background-color: rgba(2550, 255, 255, 0.5);
    margin-left: 150px;
    margin-top: 50px;
    width: 500px;
}

#el-container {
    background: url("@/assets/pictures/back.png");
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: 100% 100%;
    position: absolute;
    opacity: 0.9;
    filter: brightness(0.95);
    
}

</style>
