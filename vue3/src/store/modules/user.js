import {login} from "@/api/login";
import { ElMessage } from 'element-plus'
import {getToken,setToken} from '@/untils/auth.js'
const user = {
    state :{
        token:getToken(),
        name:"",
        avatar:"",
        roles:[],
        permission:[],
        post:''
    },
    mutations:{
        SET_TOKEN:(state,token)=>{
            state.token =token;
        },
        SET_NAME:(state,name)=>{
            state.name = name;
        },
        SET_AVATAR:(state,avatar)=>{
            state.avatar = avatar;
        },
        SET_ROLES:(state,roles)=>{
            state.roles = roles;
        },
        SET_PERMISSION:(state,permission)=>{
            state.permission = permission
        },
        SET_USERPOST:(state,post)=>{
            state.post = post;
        }
    },
    actions:{
        //登录
        Login:({commit},userInfo)=>{
            const username =userInfo.username.trim();
            const password = userInfo.password;
            const code =userInfo.code;
            const uuid = userInfo.uuid;
            return new Promise((resolve,reject)=>{
                login(username,password,code,uuid).then(res=>{
                    if(res.code === 200){
                        ElMessage({
                            message: res.msg,
                            type: 'success',
                        });
                        setToken(res.token);
                        commit('SET_TOKEN',res.token);
                        resolve();
                    }else{
                        ElMessage({
                            message: res.msg,
                            type: 'error',
                        });
                        reject(res.msg);
                    }

                });
            })
        }
    }
}

export default user;