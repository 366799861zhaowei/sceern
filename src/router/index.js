import Vue from "vue";
import Router from "vue-router";
import index from "@/views/Home";

Vue.use(Router);

//解决vue路由重复导航错误
//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
const router = new Router({
    routes: [
        
        {
            path: "/",
            name: "登入页",
            component: index,
        },
        
    ],
});

export default router;
