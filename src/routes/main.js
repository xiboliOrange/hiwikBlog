import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage.vue'
import testPage from '@/components/test.vue'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/login',
    //   component: LoginPage,
    // },
    {
      path: '/login',
      name: '登录界面',
      component: LoginPage,
    },
    {
      path: '/test',
      name: '测试界面',
      component: testPage,
    },
  ],
})

