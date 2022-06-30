import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../layout/Layout.vue'

import Home from '../pages/Home.vue'
import Blog from '../pages/Blog.vue'

const routes = [
    { 
        path: '/', 
        component: Layout,
        children: [
            {
                path: '',
                redirect: '/home'
            },
            {
                path: 'home',
                components: {
                    default: Home,
                }
            },
            {
                path: 'blog',
                component: Blog
            },
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router