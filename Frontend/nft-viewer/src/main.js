import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Import the router you created
import './assets/main.css'

// Create the main Vue application instance
const app = createApp(App)

// Install Vue Router to enable navigation
app.use(router)

// Mount the application to the DOM element with the id "app"
app.mount('#app')
