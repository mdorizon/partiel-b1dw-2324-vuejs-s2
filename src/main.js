import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Accueil from './views/Home.vue'
import FirstStepForm from './views/FirstStepForm.vue'
import SecondStepChoice from './views/SecondStepEventChoice.vue'

import { createRouter, createMemoryHistory } from 'vue-router'

const routes = [
    { path: '/', component: Accueil },
    { path: '/inscription/step1', component: FirstStepForm },
    { path: '/inscription/step2', component: SecondStepChoice },
]

const router = createRouter({
    history:createMemoryHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount("#app")
