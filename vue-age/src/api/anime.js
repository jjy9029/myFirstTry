import request from '@/util/request.js'

export const test =()=>{
    return request.get('/api/user/test')
}