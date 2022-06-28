import Vue from 'vue';
import Router from 'vue-router';

const Hello = () => import(/* webpackChunkName: "apply" */ '@/views/hello');

const Error = () => import(/* webpackChunkName: "error" */ '@/views/error');

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'hello',
    component: Hello,
    meta: {
      title: '首页'
    }
  },

  {
    path: '/error',
    name: 'error',
    component: Error,
    meta: {
      title: '404页'
    }
  },
  {
    path: '*',
    redirect: 'error',
  },
];

const router = new Router({
  mode: 'history',
  // mode: 'hash',
  routes
})

export default router;
