import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/HomePage'
import RecruiterDetail from '../components/RecruiterDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/recruiter',
      name: 'Recruiter Detail',
      component: RecruiterDetail
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
