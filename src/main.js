import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from '@/views/Home.vue'
import Blog from '@/views/Blog.vue'
import About from '@/views/About.vue'
import Post from '@/views/Post.vue'

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
        }
    ]
})

console.log(createRouter)
createApp(App).use(router).mount('#app')
