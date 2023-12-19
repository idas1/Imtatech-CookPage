// router.js
import { createRouter, createWebHashHistory } from 'vue-router';
import MainHome from './pages/MainHome.vue';
import HomeCookClass from './pages/HomeCookClass.vue';
import AboutUs from './pages/AboutUs.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import CartShopping from './components/CartShopping.vue';

const routes = [
  { path: '/', component: MainHome },
  { path: '/HomeCookClass', component: HomeCookClass },
  { path: '/AboutUs', component: AboutUs},
  {
    path: '/login',
    name: 'login',
    component: Login
},
{
    path: '/register',
    name: 'Register',
    component: Register
},

  {
   path:'/cartshopping',
   name: 'CartShopping',
   component: CartShopping
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
