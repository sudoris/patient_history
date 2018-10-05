import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome.vue'
import PersonalHistory from '@/components/PersonalHistory.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/personal-history',
      name: 'PersonalHistory',
      component: PersonalHistory
    }
  ]
})
