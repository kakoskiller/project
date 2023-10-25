import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './components/home.vue'
import ChatPage from './components/chat.vue'
import NotFound from './components/NotFound.vue'
import TestApi from './components/TestApi.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const routes =[
    {path: '/', name:'Home', component: HomePage },
    {path: '/Chat', name:'Chat', component: ChatPage },
    {path: '/test', name:'TestApi', component: TestApi },
    {path: '/:catchAll(.*)', name:'NotFound', component: NotFound },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
// const app = createApp(App)
// app.use(router)
// app.mount('#app')