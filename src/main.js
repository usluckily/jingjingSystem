// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import ElementUI from 'element-ui';
import untils from '@/assets/js/untils'

import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/base.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(untils)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  data:{
    eventHub:new Vue(),
  },
  components: { App },
  template: '<App/>'
})

router.beforeEach(function(to,from,next){
  var isLogin = sessionStorage.getItem('isLogin')
  console.log(isLogin)
  console.log(to.name)
  if(to.name != 'login'){
    if(isLogin){
      next();
    }else{
      console.log('please login');
      next('/login')
    }
  }else{
    if(isLogin){
      next('/admin')
    }else{
      next()
    }

  }

})
