import {createRouter,createWebHistory } from 'vue-router';

//静态路由
export const constantRoutes = [
    {
        path:"/login",
        component:()=>import('@/views/login'),
        hidden: true
    }
];

const router =createRouter({
    history:createWebHistory(),
    routes:constantRoutes,
    //使用浏览器的回退或者前进时，重新返回时保留页面滚动位置，跳转页面的话，不触发。
    scrollBehavior(to,from,savePosition){
        if(savePosition){
            return savePosition;
        }else{
            return {top:0};
        }
    }
});

export default router;