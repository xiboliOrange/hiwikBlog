import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/pages/LoginPage.vue'
import HomePage from '@/pages/HomePage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/login',
      name: '登录界面',
      component: LoginPage,
    },
    {
      path: '/home',
      name: '登录界面',
      component: HomePage,
    },
  ],
})
