import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ContactDetails from '../views/ContactDetails.vue'
import ContactEdit from '../views/ContactEdit.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactIndex.vue')
    },
    {
      path: '/contact/:contactId',
      name: 'contactDetails',
      component: ContactDetails
    },
    {
      path: '/contact/edit/:contactId?',
      name: 'contactEdit',
      component: ContactEdit
    },
    {
      path: '/chart',
      name: 'chart',
      component: () => import('../components/Chart.vue')
    },
  ]
})

export default router
