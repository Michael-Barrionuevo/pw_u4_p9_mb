import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/consultar',
    name: 'ConsultarTodos',
    component: () => import('../views/TodosView.vue')
  },
  {
    path: '/buscar',
    name: 'ConsultarPorId',
    component: () => import('../views/PorIdView.vue')
  },
  {
    path: '/nuevo',
    name: 'Guardar',
    component: () => import('../views/GuardarView.vue')
  },
  {
    path: '/editar',
    name: 'Actualizar',
    component: () => import('../views/ActualizarView.vue'),
    props: true 
  },

  {
    path: '/editarparcial',
    name: 'ActualizarParcial',
    component: () => import('../views/ActualParcialView.vue'),
    props: true 
  },

  {
    path: '/borrar',
    name: 'Borrar',
    component: () => import('../views/BorrarView.vue'),
    props: true 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
