import axios from 'axios'
import { ElMessage } from 'element-plus'
const baseURL = '/api'
const instance = axios.create({ baseURL:baseURL,
     timeout:3000,
     withCredentials: true, // 允许发送凭据（如 Cookie）
     headers: {
  'Content-Type': 'application/json', // 设置默认的 Content-Type
   },})        
instance.interceptors.request.use(
    (config)=>{
        // const tokenStore = useTokenStore()
        // if(tokenStore.token){
        //     config.headers.Authorization = tokenStore.token
        // }
        return config
    },
    (err)=>{
        Promise.reject(err)
    }
    
)


instance.interceptors.response.use(
    result=>{
        // 下面的是统一反馈的返回方式
        // const code = result.data.code
        // if(false){
        //     ElMessage.error('系统异常~~~  会尽快修复！！！')
        //     console.log(result.data.msg)
        //     return  Promise.reject(result.data)
        // }
        if (result.data.code == '666'){
            ElMessage.error('系统错误，请再试一次')
        }
        return result.data;//根据不同操作给与不同的反馈
       
    },
    
    //  错误就在这里统一操作了，一般是服务器的拦截
    err =>{
        // alert(err.response.status)
        // if(err.response.status == 401){
        //     ElMessage.error('未登入')
        // }
        // router.push('/login')
        return Promise.reject(err);
    }
)
export default instance;


