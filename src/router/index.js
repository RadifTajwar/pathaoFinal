import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import LoginView from '../views/loginView.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'  // import the layout
import DashboardView from '../views/dashboardView.vue'
import AddProductView from '../views/addProductView.vue'
import EditProductView from '@/views/editProductView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/dashboard',
    component: DashboardLayout,  // Layout wraps child views here
    meta: { requiresAuth: true },
    children: [
      {
        path: '',               // default child route: /dashboard
        name: 'dashboard',
        component: DashboardView
      },
      {
        path: 'add-product',    // /dashboard/add-product
        name: 'addProduct',
        component: AddProductView
      },
      {
        path: 'products/edit/:id',  // /dashboard/products/edit/:id
        name: 'editProduct',
        component: EditProductView
      },
      
    ]
  },
  {
    path: '*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = !!store.state.user

  if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
    next('/login')
  } else if (to.path === '/login' && isLoggedIn) {
    next('/dashboard')
  } else {
    next()
  }
})

export default router
