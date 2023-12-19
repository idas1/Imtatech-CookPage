import './assets/main.css';



import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


// Khôi phục trạng thái người dùng từ Local Storage
store.dispatch('restoreUserFromLocalStorage');
store.dispatch('onAuthStateChanged');

createApp(App).use(store).use(router).mount('#app')


