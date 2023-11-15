// router.js
import { createRouter, createWebHashHistory } from 'vue-router';
import MainHome from './pages/MainHome.vue';
import HomeCookClass from './pages/HomeCookClass.vue';
import AboutUs from './pages/AboutUs.vue';

const routes = [
  { path: '/', component: MainHome },
  { path: '/HomeCookClass', component: HomeCookClass },
  { path: '/AboutUs', component: AboutUs},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
