import { createWebHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Java',
        path: '/java',
        component: () => import('./views/Java.vue')
    },
    {
        name: 'Dart',
        path: '/dart',
        component: () => import('./views/Dart.vue')
    },
    {
        name: 'Php',
        path: '/php',
        component: () => import('./views/Php.vue')
    },

]