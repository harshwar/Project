import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import Tres from '@tresjs/core'

// Create the main Vue application instance
const app = createApp(App)

// Install the TresJS plugin to enable 3D rendering
app.use(Tres)

// Mount the application to the DOM element with the id "app"
app.mount('#app')
