import { createRouter, createWebHashHistory } from 'vue-router';
import MapView from '../views/MapView.vue';
import IndexView from '../views/IndexView.vue';
import DonacionesView from '../views/DonacionesView.vue';
import InfoView from '../views/InfoView.vue';
import CuentaView from '../views/CuentaView.vue';
import CreateAccountView from '../views/CreateAccountView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexView,
  },
  {
    path: '/report',
    name: 'report',
    component: MapView,
  },
  {
    path: '/donaciones',
    name: 'donaciones',
    component: DonacionesView,
  },
  {
    path: '/info',
    name: 'info',
    component: InfoView,
  }, {
    path: '/account',
    name: 'account',
    component: CuentaView,
  },
  {
    path: '/createaccount',
    name: 'createaccount',
    component: CreateAccountView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
