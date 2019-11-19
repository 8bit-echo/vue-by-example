import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/component-structure',
    name: 'Component Structure',
    component: () => import('../views/ComponentStructure.vue'),
  },
  {
    path: '/data-binding',
    name: 'Data Binding',
    component: () => import('../views/DataBinding.vue'),
  },
  {
    path: '/conditionals',
    name: 'Conditiontals',
    component: () => import('../views/Conditional.vue'),
  },
  {
    path: '/props',
    name: 'Props',
    component: () => import('../views/Props.vue'),
  },

  {
    path: '/lists',
    name: 'Lists',
    component: () => import('../views/Lists.vue'),
  },
  {
    path: '/methods',
    name: 'Methods',
    component: () => import('../views/Methods.vue'),
  },
  {
    path: '/lifecycles',
    name: 'Lifecycles',
    component: () => import('../views/Lifecycles.vue'),
  },
  {
    path: '/component-communication',
    name: 'Component Communication',
    component: () => import('../views/ComponentCommunication'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
