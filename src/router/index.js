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
        path: '/apparel/:type',
        name: 'apparel',
        component: () => import('../views/ApparelType')
    }
]

const router = new VueRouter({
    routes
})

export default router
