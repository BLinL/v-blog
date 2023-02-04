import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'

// md editor
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs';

// md preview
import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
import '@kangc/v-md-editor/lib/style/preview-html.css';
// // 引入使用主题的样式
// import '@kangc/v-md-editor/lib/theme/style/vuepress';

import './assets/main.css'

// font awesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret, faHouse, faFilePen, faBed } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faUserSecret)
library.add(faHouse)
library.add(faFilePen)
library.add(faBed)

import App from './App.vue'
import Home from '@/views/Home.vue'
import Blog from '@/views/Blog.vue'
import About from '@/views/About.vue'
import Post from '@/views/Post.vue'
import Ediotr from '@/views/Editor.vue'


VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

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

console.log(createRouter)
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.use(VueMarkdownEditor)
.use(VMdPreviewHtml)
.mount('#app')