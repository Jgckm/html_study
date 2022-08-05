import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Films from '@/views/Films'
import Comingsoon from '@/views/films/ComingSoon'
import Nowplaying from '@/views/films/NowPlaying'
import Center from '@/views/Center'
import Cinemas from '@/views/Cinemas'
import Detail from '@/views/Detail'

const routes = [
    {
        path: '/films',
        component: Films,
        name: 'film',
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
            },
        ]
    },
    {
        path: '/center',
        component: Center
    },
    {
        path: '/cinemas',
        component: Cinemas
    },
    {
        path: '/detail/:id',
        component: Detail,
      
    },
    /**
     * 
     * 
     * // 重定向
    {
        path: '*',
        redirect: './films'
    }
     */
    {
        path: '/',
        redirect: '/films'
    },
    {
        path: '/:kjfkjwfoq',
        redirect:{
            name: 'film' 
        }
    },
]

const router = createRouter({
    //   history: createWebHistory(process.env.BASE_URL), // history 模式
    history: createWebHashHistory('base'), // hash模式
    routes
})

export default router
