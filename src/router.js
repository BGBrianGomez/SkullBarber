import { createRouter, createWebHistory } from 'vue-router';
import Landing from './pages/Landing.vue';
import Mistrabajos from './pages/Mistrabajos.vue';
import Estilos from "./pages/Estilos.vue"

const routes = [
  { path: '/', component: Landing },
  { path: '/Mistrabajos', component: Mistrabajos },
  { path: '/Estilos', component: Estilos }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;