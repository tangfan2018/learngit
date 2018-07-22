import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/goods'
import ratings from '@/components/ratings'
import stores from '@/components/stores'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:goods
    },
    {
      path:'/goods',
      name:'goods',
      component:goods
    },
    {
      path:'/ratings',
      name:'ratings',
      component:ratings
    },
    {
      path:'/stores',
      name:'stores',
      component:stores
    }
  ]
})
