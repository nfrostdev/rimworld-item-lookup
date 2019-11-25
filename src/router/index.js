import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home"

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/:category',
        name: 'category',
        component: () => import('../views/Category')
    },
    {
        path: '/:category/:type',
        name: 'item',
        component: () => import('../views/Item')
    },
    {
        path: '/not-found',
        name: '404',
        component: () => import('../views/404')
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
