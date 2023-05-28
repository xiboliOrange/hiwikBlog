import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/pages/LoginPage.vue'
import HomePage from '@/pages/HomePage'
import cardCarousel from '@/components/cardCarousel'
import lifeView from '@/components/lifeView'
import notesView from '@/components/notesView'
import usView from '@/components/usView'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/welcome',
    },
    {
      path: '/login',
      name: '登录界面',
      component: LoginPage,
    },

    {
      path: '/home',
      name: '主页',
      component: HomePage,
      children: [
        {
          path: 'welcome',
          component: cardCarousel,
        },
        {
          path: 'life',
          component: lifeView,
        },
        {
          path: 'notes',
          component: notesView,
        },
        {
          path: 'us',
          component: usView,
        }
    ]
    }
  ],
})
