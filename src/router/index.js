import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/pants',
        name: 'pants',
        component: () => import('../views/Apparel/Pants')
    }
]

const router = new VueRouter({
    routes
})

export default router
