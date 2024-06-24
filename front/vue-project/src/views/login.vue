<template>
    <div class="back"></div>
    <div class="form">
        <div class="logo" ref="logo">
            <el-avatar :size="150" class="img">
                <img src="@/assets/pictures/logo.png" />
            </el-avatar>
            <div class="font">
                <img
                    src="@/assets/pictures/font.png"
                    alt="missing"
                    style="position: absolute; margin-top: 20px; margin-left: 0"
                />
            </div>
            <span
                style="
                    font-size: 3em;
                    position: absolute;
                    margin-left: 125px;
                    font-family: Verdana, Geneva, Tahoma, sans-serif;
                "
            >
                会员管理系统</span
            >
            <button type="button" @click="chanegForm" class="btn" ref="btn">
                去注册
            </button>
            <button
                type="button"
                class="btn"
                style="margin-top: 350px"
                @click="drawer_show = true"
            >
                查看作者
            </button>
        </div>
    </div>
    <div class="main" ref="main">
        <h1
            style="
                font-size: 5em;
                color: white;
                position: absolute;
                margin-left: 127px;
            "
            ref="mainTitle"
        >
            Login
        </h1>
        <div class="login">
            <div class="input" id="username">
                <svg
                    viewBox="0 0 16 16"
                    fill="#2e2e2e"
                    height="30"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                    class="inputIcon"
                >
                    <path
                        d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 
                            2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 
                            2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 
                            0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 
                            2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4
                            0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 
                            1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 
                            2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 
                            9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"
                    ></path>
                </svg>
                <input
                    type="text"
                    class="inputField"
                    placeholder="Username"
                    v-model="loginForm.userName"
                />
            </div>
            <div class="input" id="password">
                <svg
                    viewBox="0 0 16 16"
                    height="25"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                    class="inputIcon"
                >
                    <path
                        d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 
                            0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"
                    ></path>
                </svg>
                <input
                    type="password"
                    class="inputField"
                    placeholder="Password"
                    autocomplete="new-password"
                    v-model="loginForm.password"
                />
            </div>
            <div class="input" id="checkCode">
                <input
                    class="inputField"
                    v-model="loginForm.checkCode"
                    placeholder="请输入验证码"
                />
                <el-tag
                    class="el-tag"
                    @click="getCodeLogin"
                    style="position: absolute; left: 220px; top: 143px"
                    size="large"
                >
                    {{ viewCodeLogin }}
                </el-tag>
            </div>
            <div class="input">
                <button
                    type="button"
                    class="btn"
                    style="
                        position: relative;
                        margin-top: 0px;
                        margin-left: 0;
                        font-size: 2em;
                        width: 70%;
                    "
                    @click="submitLogin"
                >
                    submit
                </button>
            </div>
        </div>
    </div>
    // 用一下组件 写不动了
    <el-drawer
        v-model="drawer_show"
        title="Owner's introduce"
        :with-header="true"
    >
        <span>Hi there!</span>
    </el-drawer>
</template>
<!-- Ciallo -->
<script setup>
import { ref, onMounted } from "vue";
// ref绑定标签
const logo = ref(null);
const main = ref(null);
const mainTitle = ref(null);
const btn = ref(null);
const isLogin = ref(true);
const drawer_show = ref(false);

//  登入/注册的表单数据--输入
const loginForm = ref({
    username: "",
    password: "",
    checkCode: "",
});


//   切换 登录和注册的表单
const chanegForm = () => {
    if (isLogin.value) {
        logo.value.style.transform = "translateX(0px)";
        main.value.style.transform = "translateX(0px)";
        mainTitle.value.innerText = "Register";
        mainTitle.value.style.marginLeft = "87px";
        btn.value.innerText = "去登陆";

        isLogin.value = false;
    } else {
        logo.value.style.transform = "translateX(-500px)";
        main.value.style.transform = "translateX(500px)";
        mainTitle.value.innerText = "Login";
        mainTitle.value.style.marginLeft = "127px";
        btn.value.innerText = "去注册";
        isLogin.value = true;
    }
};

//  产生随机的验证码
const viewCodeLogin = ref("点击获取验证码");
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

//   发送 登入或者是注册请求 并给出反馈
import { login,register } from "@/api/login.js";
import { ElMessage } from "element-plus";
const submitLogin = async () => {
    // 判断是登入还是
    if (isLogin.value) {
        if (loginForm.checkCode === viewCodeLogin) {
            let data = await login(loginForm.value);
            if (data.code.slice(3, 4) == "1") {
                ElMessage.success("登入成功");
            } else {
                ElMessage.warning("账号与密码不匹配");
            }
        } else {
            ElMessage.error("请输入正确的验证码");
        }
    } else {
        if (loginForm.checkCode === viewCodeLogin) {
            let data = await register(loginForm.value);
            if (data.code.slice(3, 4) == "1") {
                ElMessage.success("登入成功");
            } else {
                ElMessage.warning("账号与密码不匹配");
            }
        } else {
            ElMessage.error("请输入正确的验证码");
        }
    }
};
</script>
<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgb(251, 194, 235) 0%, #a6c1ee 100%);
}
.form {
    height: 500px;
    width: 1100px;
    position: absolute;
    margin-top: 150px;
    margin-left: 300px;
    /* border: 1px solid black; */
    overflow: hidden;
    background-color: #a6c1ee;
    border-radius: 15px;
    border: 5px transparent;
}
.logo {
    position: absolute;
    height: 100%;
    width: 45%;
    margin-left: 550px;
    transform: translateX(-500px);
    /* border: 1px solid black; */
    /* display: flex; */
}
.font {
    position: absolute;
    margin-top: 200px;
    margin-left: 185px;
    border: 1px solid black;
}
.img {
    margin-left: 200px;
    margin-top: 70px;
    position: absolute;
    border: 1px solid black;
}
.main {
    border-radius: 15px;
    border: none;
    position: absolute;
    height: 640px;
    width: 500px;
    margin-top: 70px;
    left: 350px;
    background-color: rgb(250, 139, 219);
    transition: all 0.3s;
    transform: translateX();
    text-align: center;
    transform: translateX(500px);
}
.btn {
    position: absolute;
    height: 40px;
    width: 150px;
    margin-top: 300px;
    margin-left: 200px;
    background: rgba(255, 255, 255, 0.658);
    border-radius: 15px;
    cursor: pointer;
}
.login {
    margin-left: 10%;
    width: 80%;
    height: 300px;
    display: flex;
    margin-top: 200px;
    position: absolute;
    gap: 30px;
    border: 1px solid black;
    flex-direction: column;
}
.inputIcon {
    position: absolute;
    margin: 5px 1px;
    z-index: 1;
}
.inputField {
    width: 70%;
    height: 40px;
    border: none;
    border-bottom: 3px solid rgba(255, 255, 255, 0.658);
    border-radius: 30px;
    color: black;
    font-size: 1em;
    font-weight: 500;
    box-sizing: border-box;
    padding-left: 30px;
    outline: none;
}
</style>
