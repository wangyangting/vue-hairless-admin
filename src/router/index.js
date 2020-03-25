import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

import Layout from '@/layout';

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/')
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/error-page/401.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404.vue')
  }
];

export const asyncRoutes = [
  {
    path: '/example',
    name: 'Example',
    redirect: '/example/dashboard',
    component: Layout,
    meta: {
      title: 'Example',
      icon: 'example'
    },
    children: [
      {
        path: 'dashboard',
        name: 'ExampleDashboard',
        component: () => import('@/views/example/dashboard'),
        meta: { title: 'Example Dashboard', icon: 'list' }
      },
      {
        path: 'list',
        name: 'ExampleList',
        component: () => import('@/views/example/list'),
        meta: { title: 'Example List', icon: 'list' }
      }
    ]
  }
];

const createRouter = () =>
  new VueRouter({
    mode: 'history', // require service support
    base: process.env.BASE_URL,
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
