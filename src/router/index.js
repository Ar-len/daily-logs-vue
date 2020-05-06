import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'
import type from '@/components/typeManage/type'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      redirect: '/index',
      component: homePage,
      children: [
        {
          path: '/index',
          name: 'index',
          component: index
        },
        {
          path: '/type',
          name: 'type',
          component: type
        }
      ]
    }
  ]
})
