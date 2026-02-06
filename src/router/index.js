import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'


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
    path: '/login',
    name: 'login',
    component: LoginView
    

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

router.beforeEach((to, from, next) => {
  // Verificamos si hay token en el LocalStorage
  const token = localStorage.getItem("token");
  const estaAutenticado = !!token;

  // Si la ruta es privada y NO está autenticado, lo mandamos al login
  if (to.meta.requiereAutorizacion && !estaAutenticado) {
    // Guardamos a qué página quería ir el usuario originalmente
    // para mandarlo allá después del login
    next({ name: 'login', query: { redirect: to.fullPath } });
  } else {
    
    next();
  }
});

export default router
