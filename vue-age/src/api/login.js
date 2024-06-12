import request from '@/util/request.js'
import {ref} from 'vue'

export const checkAccount = (param)=>{
    return request.get('/api/jjy/login',{params:{username:param.username,password:param.password}})
}


export const addAccount = (registerForm)=>{
    return request.post('/api/jjy/register',registerForm)
}


export const getId  = (param)=>{
    return request.get('/api/jjy/getId',{params:{username:param.username,password:param.password}})
}

