import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../page/HomePage"
import Detail from "../page/Detail"
//加载路由插件
Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path:"/",
      component:HomePage,
      name:"home"
    },{
      path:"/detail",
      component:Detail,
      name:"detail"
    }
  ]
})