import { createApp } from 'vue'
import App from './App.vue'
import {createWebHashHistory, createRouter} from 'vue-router'
import Momo from './components/Momo.vue'
import Momo2 from './components/Momo2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Momo},
        {path: '/xxx', component: Momo2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')

