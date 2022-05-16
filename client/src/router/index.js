import { createRouter, createWebHashHistory } from 'vue-router';
import MapView from '../views/MapView.vue'
import IndexView from '../views/IndexView.vue'
import DonacionesView from '../views/DonacionesView.vue'
import InfoView from '../views/InfoView.vue'
import CuentaView from '../views/CuentaView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexView
  },
  {
    path: '/report',
    name: 'report',
    component: MapView
  }, 
  {
    path: '/donaciones',
    name: 'donaciones',
    component: DonacionesView
  },
  {
    path: '/info',
    name: 'info',
    component: InfoView
  }, {
    path: '/account',
    name: 'account',
    component: CuentaView
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
