import Vue from 'vue'
import Router from 'vue-router'
import login from 'view/login'
import error from 'view/404'

import admin from './admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'*',
      name:'error',
      component:error
    },
    ...admin
  ]
})
