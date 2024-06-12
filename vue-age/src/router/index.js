import { createRouter,createWebHistory } from "vue-router"
import login from "@/view/login.vue";
import layout from "@/view/layout.vue";
import UserHeader from "@/view/userHeader.vue";
import test from '@/view/test.vue'
import q from '@/view/q.vue'
import apple_music from '@/view/apple_music.vue'
import userHeader from "@/view/userHeader.vue";
import neww from '@/view/new.vue'

const routes = [               
    {path:'/login',component:login,},
    {path:'/layout',component:layout,children:[

        // 一： 用户专栏
        {path:'/layout/userHeader',component:UserHeader,children:[
            //{path:'/q',component:q},
            
        ]},
        // 二： 



        
    ]},
    {path:'/test',component:test},
    {path:'/q',component:q},
    {path:'/h',component:UserHeader},
    {path:'/apple',component:apple_music},
    {path:'/n',component:neww},
]


 //生成路由
const router = createRouter({
    history:createWebHistory(),
    routes:routes
})
 //导出路由
export default router;



