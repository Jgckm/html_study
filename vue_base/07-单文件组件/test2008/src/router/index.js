import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '@/views/Films'
import Cinemas from '@/views/Cinemas'
// import Center from '@/views/Center'
import Nowplaying from '@/views/films/Nowplaying'
import Comingsoon from '@/views/films/Comingsoon'
import Search from '@/views/Search'
import Detail from '@/views/Detail'
import City from '@/views/City'
// import Order from '@/views/Order'
import Login from '@/views/Login'

Vue.use(VueRouter) // 注册路由插件
// 配置表
const routes = [
    {
        path: '/films',
        component: Films,
        children: [
            {
                path: '/films/nowplaying',
                component: Nowplaying
            },
            {
                path: '/films/comingsoon',
                component: Comingsoon
            },
            {
                path: '/films',
                redirect: '/films/nowplaying'
            }
        ]
    },
    {
    // 命名路由
        name: 'jgckMDetail',
        path: '/detail/:id', // 动态的二级地址
        component: Detail
    },
    {
        path: '/cinemas',
        component: Cinemas
    },
    {
        path: '/city',
        component: City
    },
    {
        path: '/cinemas/search',
        component: Search
    },

    {
        path: '/center',
        component: () => import('@/views/Center'),
        meta: {
            isJgckM: true
        }
    // beforeEnter (to, from, next) {
    //   if (localStorage.getItem('token')) {
    //     next()
    //   } else {
    //     next({
    //       path: '/login',
    //       query: { redirect: to.fullPath }
    //     })
    //   }
    // }
    },
    {
        path: '/order',
        component: () => import('@/views/Order'), // 懒加载
        meta: {
            isJgckM: true
        }
    },
    {
        path: '/login',
        component: Login
    },
    // 重定向
    {
        path: '*',
        redirect: './films'
    }
]

const router = new VueRouter({
    mode: 'hash', // history 去除 URL 的# 默认是hash 有 #
    routes
})
// 全局拦截
// router.beforeEach((to, from, next) => {
//   if (to.meta.isJgckM) {
//     // 判断 本地存储中是否有token
//     if (localStorage.getItem('token')) {
//       next()
//     } else {
//       // next('/login')
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     }
//   }
//   next()
// })
export default router
