//para usar pinia debes instalarlo primero con npm install pinia
//para usar pinia persistence debes instalarlo con npm install pinia-plugin-persistedstate
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia();
pinia.use( piniaPluginPersistedstate );

createApp(App).use(router).use(pinia).mount('#app')
