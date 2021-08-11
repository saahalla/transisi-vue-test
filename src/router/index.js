import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import UserList from '../views/users/List.vue'
import UserAdd from '../views/users/Add.vue'
import UserEdit from '../views/users/Edit.vue'
import UserDetail from '../views/users/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: 'users/list',
        component: UserList
      },
      {
        path: 'users/add',
        component: UserAdd
      },
      {
        path: 'users/edit/:id',
        component: UserEdit
      },
      {
        path: 'users/detail/:id',
        component: UserDetail
      },
      {
        path: '',
        component: Dashboard
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
