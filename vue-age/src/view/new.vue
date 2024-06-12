<template>
    <div class="container">
        <div class="show">
            <div class="card">
                <div class="wrapper">
                    <img src="@/assets/pictures/gao2.png" alt="" class="last" />
                </div>
                <img src="@/assets/pictures/gaomu.png" alt="" class="img" />
            </div>
            <div class="card">
                <div class="wrapper">
                    <img src="@/assets/pictures/gao2.png" alt="" class="last" />
                </div>
                <img src="@/assets/pictures/gaomu.png" alt="" class="img" />
            </div>

            <div class="form"></div>
            <div class="card">
                <div class="wrapper">
                    <img
                        src="@/assets/pictures/yamada2.png"
                        alt=""
                        class="last"
                    />
                </div>
                <img src="@/assets/pictures/yamada.png" alt="" class="img" />
            </div>
            <div class="card">
                <div class="wrapper">
                    <img
                        src="@/assets/pictures/yamada2.png"
                        alt=""
                        class="last"
                    />
                </div>
                <img src="@/assets/pictures/yamada.png" alt="" class="img" />
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
/* 全局 */
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

/* 背景 */
.container {
    position: relative;
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(
        to top,
        rgb(251, 194, 235) 0%,
        #a6c1ee 100%
    );
}

/*  上部flex盒子 */
.show {
    position: relative;
    height: 800px;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 10px;
    border: 1px solid black;
}
/* 两侧动画卡片 */
.card {
    border: 1px solid black;
    height: 500px;
    position: relative;
    overflow: hidden;
    flex: 1;
}
.wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    transition: all 0.5s;
}
.wrapper::before,
.wrapper::after {
    content: "";
    opacity: 1;
    width: 100%;
    height: 80px;
    transition: all 0.3s;
    position: absolute;
    left: 0;
}
.wrapper::before {
    top: 0;
    background-image: linear-gradient(
        to top,
        transparent 46%,
        rgba(12, 13, 19, 0.5) 68%,
        rgba(12, 13, 19) 97%
    );
}
.wrapper::after {
    bottom: 0;
    background-image: linear-gradient(
        to bottom,
        transparent 46%,
        rgba(12, 13, 19, 0.5) 68%,
        rgba(12, 13, 19) 97%
    );
}
.last {
    border-radius: 0px;
    width: 100%;
    height: 100%;
}
.img {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: all 0.5s;
}
.card:hover .img {
    opacity: 1;
    transform: translateY(-30px);
}
.card:hover .wrapper {
    transform: perspective(900px) rotateX(40deg) translateY(15px);
}
.card:hover .wrapper::after {
    height: 120px;
}
.card:hover .last {
    border-radius: 0px;
    width: 100%;
    height: 100%;
}
/* 中间的登入框 */
.form {
    height: 500px;
    border: 10px solid transparent;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.5);
    position: relative;
    flex: 3;
}
</style>
