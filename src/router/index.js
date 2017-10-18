import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Dashboard from '@/pages/Dashboard/index'
import UserIndex from '@/pages/User/index'

Vue.use(Router)




export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path:'/index',
      component:Index,
      meta:{title:'主页'},
      children:[
        {
          alias: '',
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard,
          meta: { title: 'Dashboard', },
        },
        {
          path: '/user/index',
          name:'userIndex',
          component:UserIndex,
          meta: { title: 'UserIndex Page', },
        }
      ]
    }
  ]
})
