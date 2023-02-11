import { createApp } from 'vue'
import router from './routes/router'

// md editor
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs';

// md preview
import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
import VMdPreview  from '@kangc/v-md-editor/lib/preview';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

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


VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.use(VueMarkdownEditor)
.use(VMdPreviewHtml)
.use(VMdPreview)
.mount('#app')