import request from '@/util/request.js';


export const login = (form)=>{
    return request.get('/jjy/login',{params:{username:form.username,password:form.password}});
}

export const register = (form)=>{
    return register.post('/jjy/register',form);
}

