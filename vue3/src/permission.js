import NProgress from'nprogress';
import 'nprogress/nprogress.css'
import router from './router';
import store from './store'
import {getToken} from "@/untils/auth";

router.beforeEach((to,from,next)=>{
    NProgress.start();
    if(getToken()) {
        to.meta.title && store.dispatch('settings/setTitle', to.meta.title)
        if (to.path === '/login') {
            next({path: "/"})
            NProgress.done();
        }
    }else{
        if(store.getters.roles.length === 0){
            // isRelogin.show = true;
            //登录页面判断用户是否已经输入完用户信息
            store.dispatch('GetInfo').then(()=>{
                // isRelogin.show = false;
                store.dispatch('GenerateRoutes').then(accessRotes=>{
                    //根据roles权限生成可访问路由表
                    accessRotes.forEach(route=>{
                        if(!isHttp(route.path)){
                            router.addRoute(route);
                        }
                    })
                })
            })
        }
    }
})