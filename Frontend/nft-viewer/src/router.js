// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

// Existing component imports
import LoginPage from './components/LoginPage.vue';
import NFTGallery from './components/NFTGallery.vue';
// 1. Import your new registration page component
import RegistrationPage from './views/RegistrationPage.vue';

const routes = [
  {
    path: '/',
    name: 'Login', // This name is fine, or you could call it 'Home'
    component: LoginPage
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: NFTGallery
  },
  // 2. Add the new route for the registration page
  {
    path: '/register',
    name: 'Register',
    component: RegistrationPage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
