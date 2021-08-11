import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import UserList from '../views/users/List.vue'
import UserAdd from '../views/users/Add.vue'
import UserEdit from '../views/users/Edit.vue'
import UserDetail from '../views/users/Detail.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/users/',
    component: Dashboard,
    children: [
      {
        path: 'list',
        name: 'UserList',
        component: UserList
      },
      {
        path: 'add',
        component: UserAdd
      },
      {
        path: 'edit/:id',
        component: UserEdit
      },
      {
        path: 'detail/:id',
        component: UserDetail
      },
      {
        path: '',
        component: Dashboard
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '',
    component: Dashboard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token') != null;

  if ((to.name !== 'Login' && to.name !== 'Register') && !token) next({ name: 'Login' })
  else next()
})


export default router
