import { createRouter,createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Blog from '@/views/Blog.vue'
import About from '@/views/About.vue'
import Post from '@/views/Post.vue'
import Ediotr from '@/views/Editor.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/blog',
            component: Blog,
        },
        {
            name: 'post',
            path: '/post/:postId',
            component: Post,
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/editor',
            component: Ediotr
        }
    ]
})

export default router
