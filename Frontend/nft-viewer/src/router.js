// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

// We'll create these components in the next steps
import LoginPage from './components/LoginPage.vue';
import NFTGallery from './components/NFTGallery.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: NFTGallery
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
