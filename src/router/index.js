import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login";
import Home from "../components/Home"
import Tables from "@/components/Tables"
import Welcome from '@/components/Welcome'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login',
        meta: {needLogin: true}
    },
    {
        path: '/login',
        component: Login,
    },
    {
      path: '/home',
      component: Home,
      redirect:'/welcome',
      children:[
        {
          path:'/welcome',
          component: Welcome
        },
        {
          path:'/table',//这里的路径要跟 组件的 index对应
          name:'dataTable',
          meta:{
            title:'门店信息'
          },
          component:Tables
        }
      ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
