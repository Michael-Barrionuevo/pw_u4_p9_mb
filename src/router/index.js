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
    component: () => import('../views/TodosView.vue'),
    meta:{
      requiereAutorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/buscar',
    name: 'ConsultarPorId',
    component: () => import('../views/PorIdView.vue'),
    meta:{
      requiereAutorizacion:false,
      esPublica: true
    }
  },
  {
    path: '/nuevo',
    name: 'Guardar',
    component: () => import('../views/GuardarView.vue'),
    meta:{
      requiereAutorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/editar',
    name: 'Actualizar',
    component: () => import('../views/ActualizarView.vue'),
    props: true ,
    meta:{
      requiereAutorizacion: true,
      esPublica: false
    }
  },

  {
    path: '/editarparcial',
    name: 'ActualizarParcial',
    component: () => import('../views/ActualParcialView.vue'),
    props: true ,
    meta:{
      requiereAutorizacion: true,
      esPublica: false
    }
  },

  {
    path: '/borrar',
    name: 'Borrar',
    component: () => import('../views/BorrarView.vue'),
    props: true ,
    meta:{
      requiereAutorizacion: false,
      esPublica: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/* Configuracion del Guardian */

router.beforeEach((to,from,next)=>{
  if(to.meta.requiereAutorizacion){
    /* le envio a una pagina de login */
    console.log("Redirigiendo a LOGIN")
  }else{
    /* le dejo sin validaciones */
    console.log("Pase Libre")
    next();
  }
})

export default router
