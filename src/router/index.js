import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '@/views/HomePage.vue';
import NewItem from '@/views/NewItem.vue';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/new',
    name: 'NewItem',
    component: NewItem,
  },
];

const router = createRouter({
  history: createWebHistory('@/views/HomePage.vue'),
  routes,
});

export default router;